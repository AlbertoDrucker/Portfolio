import type { CrmCopy } from '../../content/tools/networking-crm';
import { addDays, copyText, diffDays, fill, fmtDay, h, langOf, readCopy, storage, uid, ymd } from './util';

type Tier = 'A' | 'B' | 'C' | 'D';
type Stage = 'lead' | 'talking' | 'proposal' | 'won' | 'lost';
type ReasonKind = 'loopMine' | 'loopTheirs' | 'first' | 'snoozed' | 'cadence';

interface Person {
  id: string;
  name: string;
  company: string;
  role: string;
  tier: Tier;
  channel: string;
  notes: string;
  created: string;
  snooze?: string;
}
interface Talk {
  id: string;
  personId: string;
  date: string;
  channel: string;
  summary: string;
}
interface Loop {
  id: string;
  personId: string;
  owner: 'me' | 'them';
  desc: string;
  due: string;
  open: boolean;
}
interface Opp {
  id: string;
  title: string;
  company: string;
  personId: string;
  stage: Stage;
  next: string;
  nextDate: string;
}
interface Data {
  v: 1;
  people: Person[];
  talks: Talk[];
  loops: Loop[];
  opps: Opp[];
  cadence: Record<Tier, number>;
}

const KEY = 'ad-networking-crm-v1';
const TIERS: Tier[] = ['A', 'B', 'C', 'D'];
const STAGES: Stage[] = ['lead', 'talking', 'proposal', 'won', 'lost'];
const TIER_RANK: Record<Tier, number> = { A: 0, B: 1, C: 2, D: 3 };
const DUE_SOON = 5;
const empty = (): Data => ({ v: 1, people: [], talks: [], loops: [], opps: [], cadence: { A: 14, B: 30, C: 60, D: 120 } });

export function setupNetworkingCrm(root: HTMLElement) {
  const c = readCopy<CrmCopy>(root);
  const lang = langOf(root);
  const mount = root.querySelector<HTMLElement>('[data-app]')!;
  const today = ymd();
  let tab: keyof CrmCopy['tabs'] = 'queue';
  let openId = '';
  let draftFor = '';
  let adding = false;
  let query = '';
  let toast = '';

  const sample = (): Data => {
    const d = empty();
    const s = c.sample;
    d.people = s.people.map(([name, company, role, tier, channel, notes], i) => ({
      id: `p${i}`,
      name,
      company,
      role,
      tier: tier as Tier,
      channel,
      notes,
      created: addDays(today, -(90 + i * 7)),
    }));
    d.talks = s.talks.map(([p, ago, channel, summary], i) => ({ id: `t${i}`, personId: `p${p}`, date: addDays(today, -ago), channel, summary }));
    d.loops = s.loops.map(([p, owner, desc, inDays], i) => ({ id: `l${i}`, personId: `p${p}`, owner: owner as 'me' | 'them', desc, due: addDays(today, inDays), open: true }));
    d.opps = s.opps.map(([title, company, p, stage, next, inDays], i) => ({ id: `o${i}`, title, company, personId: `p${p}`, stage: stage as Stage, next, nextDate: addDays(today, inDays) }));
    return d;
  };

  let D: Data = storage.get<Data>(KEY) ?? sample();
  const commit = (message = '') => {
    toast = message;
    storage.set(KEY, D);
    render();
  };
  const go = (t: typeof tab) => {
    tab = t;
    openId = '';
    adding = false;
    render();
  };
  const first = (name: string) => name.trim().split(/\s+/)[0] ?? '';
  const person = (id: string) => D.people.find((p) => p.id === id);
  const talksOf = (id: string) => D.talks.filter((t) => t.personId === id).sort((a, b) => b.date.localeCompare(a.date));
  const loopsOf = (id: string) => D.loops.filter((l) => l.personId === id && l.open).sort((a, b) => (a.due || '9').localeCompare(b.due || '9'));

  /** Next touch and the reason for it. Promises outrank cadence, as in the original app. */
  function derive(p: Person) {
    const talks = talksOf(p.id);
    const last = talks[0]?.date ?? '';
    const loops = loopsOf(p.id);
    const mine = loops.filter((l) => l.owner === 'me');
    const theirs = loops.filter((l) => l.owner === 'them');
    const snoozed = !!p.snooze && p.snooze > today;
    const base = snoozed ? p.snooze! : addDays(last || p.created, D.cadence[p.tier]);
    const dates = [base, ...mine.map((l) => l.due), ...(snoozed ? [] : theirs.map((l) => l.due))].filter(Boolean).sort();
    const kind: ReasonKind = mine[0] ? 'loopMine' : theirs[0] ? 'loopTheirs' : snoozed ? 'snoozed' : !last ? 'first' : 'cadence';
    const desc = (mine[0] ?? theirs[0])?.desc.replace(/[.\s]+$/, '') ?? '';
    const reason = fill(c.reasons[kind], { desc, name: first(p.name), date: fmtDay(base, lang), tier: p.tier, days: String(D.cadence[p.tier]) });
    return { last, next: dates[0] ?? base, kind, desc, reason, mineDue: mine[0]?.due ?? '' };
  }

  function queue() {
    return D.people
      .map((p) => ({ p, d: derive(p) }))
      .filter(({ d }) => d.next <= addDays(today, 7) || (d.mineDue && d.mineDue <= addDays(today, DUE_SOON)))
      .map((x) => {
        const n = diffDays(x.d.next, today);
        const group = x.d.mineDue && x.d.mineDue <= addDays(today, DUE_SOON) ? 0 : n < 0 ? 1 : n <= DUE_SOON ? 2 : 3;
        return { ...x, n, group };
      })
      .sort((a, b) => a.group - b.group || (a.group === 1 ? TIER_RANK[a.p.tier] - TIER_RANK[b.p.tier] : 0) || a.n - b.n || a.p.name.localeCompare(b.p.name));
  }

  /* ---------- actions ---------- */
  function logTalk(personId: string, summary: string, channel: string, date = today) {
    D.talks.push({ id: uid('t'), personId, date, channel, summary });
    const p = person(personId);
    if (p) delete p.snooze;
  }
  const dueLabel = (n: number) => (n === -1 ? c.overdueOne : n < 0 ? fill(c.overdue, { n: String(-n) }) : n === 0 ? c.dueToday : fill(c.dueIn, { n: String(n) }));
  const dueTone = (n: number) => (n < 0 ? 'crit' : n <= DUE_SOON ? 'warn' : '');
  const download = (name: string, text: string, type: string) => {
    const a = h('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name });
    document.body.append(a);
    a.click();
    a.remove();
  };

  /* ---------- small builders ---------- */
  const field = (label: string, control: HTMLElement) => h('label', { class: 'app-field' }, h('span', { class: 'app-label' }, label), control);
  const input = (value = '', type = 'text') => h('input', { type, value });
  const select = (options: [string, string][], value = '') => {
    const s = h('select', null, options.map(([v, l]) => h('option', { value: v }, l)));
    if (value) s.value = value;
    return s;
  };
  const tierSelect = (v: Tier = 'B') => select(TIERS.map((t) => [t, c.tiers[t]]), v);
  const channelSelect = (v = 'whatsapp') => select(Object.entries(c.channels), v);
  const personLink = (p: Person) =>
    h(
      'button',
      {
        type: 'button',
        class: 'app-link',
        onclick: () => {
          tab = 'people';
          openId = p.id;
          render();
        },
      },
      p.name,
    );

  /* ---------- queue ---------- */
  function queueItem(x: ReturnType<typeof queue>[number], hero: boolean) {
    const { p, d, n } = x;
    const since = d.last ? fill(c.since, { n: String(diffDays(today, d.last)) }) : c.never;
    const draftKind = d.kind === 'snoozed' ? 'cadence' : d.kind;
    const area = h('textarea', { 'aria-label': c.draft, value: fill(c.drafts[draftKind], { name: first(p.name), desc: d.desc, company: p.company }) });
    const draftPanel =
      draftFor === p.id &&
      h(
        'div',
        { class: 'app-draft' },
        h('span', { class: 'app-label' }, `${c.draft}, ${c.channels[p.channel] ?? p.channel}`),
        area,
        h(
          'div',
          { class: 'app-actions' },
          h('button', { type: 'button', class: 'btn sm', onclick: async () => ((await copyText(area.value)) ? ((toast = c.copied), render()) : area.select()) }, c.copy),
          h(
            'button',
            {
              type: 'button',
              class: 'btn btn-quiet sm',
              onclick: () => {
                logTalk(p.id, fill(c.sent, { text: area.value }), p.channel);
                draftFor = '';
                commit();
              },
            },
            c.logAsSent,
          ),
        ),
      );
    return h(
      'article',
      { class: `app-card${hero ? ' is-hero' : ''}` },
      h('div', { class: 'app-card-head' }, h('span', { class: 'app-sub' }, since), h('span', { class: hero ? 'app-sub' : `pill ${dueTone(n)}` }, dueLabel(n))),
      h('div', null, hero ? h('strong', { class: 'crm-hero-name' }, p.name) : personLink(p), h('div', { class: 'app-sub' }, [p.role, p.company].filter(Boolean).join(', '))),
      h('p', null, d.reason),
      h(
        'div',
        { class: 'app-actions' },
        h('button', { type: 'button', class: 'btn sm', onclick: () => ((draftFor = draftFor === p.id ? '' : p.id), render()) }, c.draft),
        h(
          'button',
          {
            type: 'button',
            class: 'btn btn-quiet sm',
            onclick: () => {
              logTalk(p.id, c.checkedIn, p.channel);
              commit();
            },
          },
          c.logContact,
        ),
        h(
          'button',
          {
            type: 'button',
            class: 'btn btn-quiet sm',
            onclick: () => {
              p.snooze = addDays(today, 7);
              commit();
            },
          },
          c.snooze,
        ),
      ),
      draftPanel,
    );
  }

  function queueView() {
    const q = queue();
    const owed = D.loops.filter((l) => l.open && l.owner === 'me' && person(l.personId)).sort((a, b) => (a.due || '9').localeCompare(b.due || '9'));
    return [
      h('div', null, h('h2', null, c.thisWeek), h('p', { class: 'app-sub' }, fill(c.queueCount, { n: String(q.length), l: String(owed.length) }))),
      h(
        'div',
        { class: 'app-split' },
        h('section', { class: 'app-cards' }, q.length ? q.map((x, i) => queueItem(x, i === 0)) : h('p', { class: 'app-empty' }, c.caughtUp)),
        h(
          'section',
          { class: 'app-col' },
          h('h2', null, c.owed),
          owed.length
            ? h(
                'ul',
                { class: 'app-list' },
                owed.map((l) =>
                  h(
                    'li',
                    null,
                    h(
                      'div',
                      { class: 'app-row' },
                      h('div', { class: 'app-row-main' }, h('div', null, l.desc), h('div', { class: 'app-sub' }, `${person(l.personId)!.name}${l.due ? `, ${dueLabel(diffDays(l.due, today))}` : ''}`)),
                      h(
                        'button',
                        {
                          type: 'button',
                          class: 'btn btn-quiet sm',
                          onclick: () => {
                            l.open = false;
                            commit();
                          },
                        },
                        c.markDone,
                      ),
                    ),
                  ),
                ),
              )
            : h('p', { class: 'app-empty' }, c.owedEmpty),
        ),
      ),
    ];
  }

  /* ---------- people ---------- */
  function personForm(p?: Person) {
    const name = input(p?.name);
    const company = input(p?.company);
    const role = input(p?.role);
    const tier = tierSelect(p?.tier);
    const channel = channelSelect(p?.channel);
    const notes = h('textarea', { value: p?.notes ?? '' });
    const save = () => {
      if (!name.value.trim()) return name.focus();
      const fields = { name: name.value.trim(), company: company.value.trim(), role: role.value.trim(), tier: tier.value as Tier, channel: channel.value, notes: notes.value.trim() };
      if (p) Object.assign(p, fields);
      else {
        const np: Person = { id: uid('p'), created: today, ...fields };
        D.people.push(np);
        openId = np.id;
      }
      adding = false;
      commit(c.saved);
    };
    return h(
      'div',
      { class: 'app-form' },
      h('div', { class: 'app-form-row' }, field(c.fields.name, name), field(c.fields.company, company), field(c.fields.role, role)),
      h('div', { class: 'app-form-row' }, field(c.fields.tier, tier), field(c.fields.channel, channel)),
      field(c.fields.notes, notes),
      h('div', null, h('button', { type: 'button', class: 'btn sm', onclick: save }, c.save)),
    );
  }

  function personView(p: Person) {
    const d = derive(p);
    const talks = talksOf(p.id);
    const loops = loopsOf(p.id);
    const fact = (label: string, value: string) => h('div', { class: 'stat' }, h('span', { class: 'stat-label' }, label), h('span', { class: 'stat-value crm-fact' }, value));
    // log a conversation
    const date = input(today, 'date');
    const channel = channelSelect(p.channel);
    const summary = h('textarea');
    const promise = input();
    const promiseDue = input(addDays(today, 3), 'date');
    const offer = input();
    const saveTalk = () => {
      if (!summary.value.trim()) return summary.focus();
      logTalk(p.id, summary.value.trim(), channel.value, date.value || today);
      if (promise.value.trim()) D.loops.push({ id: uid('l'), personId: p.id, owner: 'me', desc: promise.value.trim(), due: promiseDue.value, open: true });
      if (offer.value.trim()) D.loops.push({ id: uid('l'), personId: p.id, owner: 'them', desc: offer.value.trim(), due: addDays(today, 7), open: true });
      commit(c.saved);
    };
    let armed = false;
    const delBtn = h(
      'button',
      {
        type: 'button',
        class: 'btn btn-quiet sm',
        onclick: () => {
          if (!armed) {
            armed = true;
            delBtn.textContent = c.confirmDel;
            return;
          }
          D.people = D.people.filter((x) => x.id !== p.id);
          D.talks = D.talks.filter((x) => x.personId !== p.id);
          D.loops = D.loops.filter((x) => x.personId !== p.id);
          D.opps.forEach((o) => o.personId === p.id && (o.personId = ''));
          openId = '';
          commit();
        },
      },
      c.del,
    );
    return [
      h('div', { class: 'app-row' }, h('button', { type: 'button', class: 'app-link', onclick: () => ((openId = ''), render()) }, c.back), delBtn),
      h('div', null, h('strong', { class: 'crm-name' }, p.name), h('div', { class: 'app-sub' }, [p.role, p.company].filter(Boolean).join(', '))),
      h('div', { class: 'stats' }, fact(c.facts.last, d.last ? fmtDay(d.last, lang) : c.never), fact(c.facts.next, fmtDay(d.next, lang)), fact(c.facts.talks, String(talks.length))),
      h('p', { class: 'verdict' }, d.reason),
      h(
        'div',
        { class: 'app-split' },
        h(
          'div',
          { class: 'app-col' },
          h('h2', null, c.logTitle),
          h(
            'div',
            { class: 'app-form' },
            h('div', { class: 'app-form-row' }, field(c.date, date), field(c.fields.channel, channel)),
            field(c.discussed, summary),
            h('div', { class: 'app-form-row' }, field(c.myPromise, promise), field(c.due, promiseDue)),
            field(c.theirOffer, offer),
            h('div', null, h('button', { type: 'button', class: 'btn sm', onclick: saveTalk }, c.saveLog)),
          ),
          h('h2', null, c.timeline),
          talks.length
            ? h('ul', { class: 'app-list' }, talks.map((t) => h('li', null, h('div', { class: 'app-sub' }, `${fmtDay(t.date, lang)}, ${c.channels[t.channel] ?? t.channel}`), h('div', null, t.summary))))
            : h('p', { class: 'app-empty' }, c.timelineEmpty),
        ),
        h(
          'div',
          { class: 'app-col' },
          h('h2', null, c.loopsTitle),
          loops.length
            ? h(
                'ul',
                { class: 'app-list' },
                loops.map((l) =>
                  h(
                    'li',
                    null,
                    h(
                      'div',
                      { class: 'app-row' },
                      h('div', { class: 'app-row-main' }, h('span', { class: `pill ${l.owner === 'me' ? 'warn' : 'info'}` }, l.owner === 'me' ? c.youOwe : c.theyOwe), ' ', l.desc, h('div', { class: 'app-sub' }, l.due ? dueLabel(diffDays(l.due, today)) : '')),
                      h(
                        'button',
                        {
                          type: 'button',
                          class: 'btn btn-quiet sm',
                          onclick: () => {
                            l.open = false;
                            commit();
                          },
                        },
                        c.markDone,
                      ),
                    ),
                  ),
                ),
              )
            : h('p', { class: 'app-empty' }, c.loopsEmpty),
          h('h2', null, c.fields.notes),
          personForm(p),
        ),
      ),
    ];
  }

  function peopleView() {
    const p = person(openId);
    if (p) return personView(p);
    const list = h('ul', { class: 'app-list' });
    const fillList = () => {
      const q = query.trim().toLowerCase();
      const rows = D.people
        .filter((x) => !q || `${x.name} ${x.company}`.toLowerCase().includes(q))
        .sort((a, b) => TIER_RANK[a.tier] - TIER_RANK[b.tier] || a.name.localeCompare(b.name))
        .map((x) => {
          const d = derive(x);
          const n = diffDays(d.next, today);
          return h(
            'li',
            null,
            h(
              'div',
              { class: 'app-row' },
              h('div', { class: 'app-row-main' }, personLink(x), h('div', { class: 'app-sub' }, [x.role, x.company].filter(Boolean).join(', '))),
              h('span', { class: 'app-actions' }, h('span', { class: 'pill' }, x.tier), h('span', { class: `pill ${dueTone(n)}` }, dueLabel(n))),
            ),
          );
        });
      list.replaceChildren(...(rows.length ? rows : [h('li', { class: 'app-empty' }, c.noPeople)]));
    };
    fillList();
    return [
      h(
        'div',
        { class: 'app-row' },
        h('input', {
          type: 'search',
          class: 'crm-search',
          placeholder: c.search,
          'aria-label': c.search,
          value: query,
          oninput: (e: Event) => {
            query = (e.target as HTMLInputElement).value;
            fillList();
          },
        }),
        h('button', { type: 'button', class: 'btn sm', onclick: () => ((adding = !adding), render()) }, c.addPerson),
      ),
      adding && h('div', { class: 'app-card' }, personForm()),
      list,
    ];
  }

  /* ---------- pipeline ---------- */
  function pipelineView() {
    const closed = D.opps.filter((o) => o.stage === 'won' || o.stage === 'lost');
    const won = D.opps.filter((o) => o.stage === 'won').length;
    const title = input();
    const company = input();
    const who = select([['', c.nobody], ...D.people.map((p) => [p.id, p.name] as [string, string])]);
    const next = input();
    const nextDate = input(addDays(today, 7), 'date');
    const add = () => {
      if (!title.value.trim()) return title.focus();
      D.opps.push({ id: uid('o'), title: title.value.trim(), company: company.value.trim(), personId: who.value, stage: 'lead', next: next.value.trim(), nextDate: nextDate.value });
      adding = false;
      commit(c.saved);
    };
    const card = (o: Opp) => {
      const stage = select(STAGES.map((s) => [s, c.stages[s]]), o.stage);
      stage.setAttribute('aria-label', c.stages[o.stage]);
      stage.addEventListener('change', () => {
        o.stage = stage.value as Stage;
        commit();
      });
      const p = person(o.personId);
      return h(
        'article',
        { class: 'app-card' },
        h('strong', null, o.title),
        h('span', { class: 'app-sub' }, [o.company, p?.name].filter(Boolean).join(', ')),
        o.next && h('span', null, `${o.next}${o.nextDate ? `, ${fmtDay(o.nextDate, lang)}` : ''}`),
        stage,
      );
    };
    return [
      h(
        'div',
        { class: 'app-row' },
        h('div', { class: 'app-row-main' }, h('p', { class: 'app-sub' }, c.pipelineLead), h('p', null, fill(c.summary, { open: String(D.opps.length - closed.length), won: String(won), rate: closed.length ? `${Math.round((won / closed.length) * 100)}%` : '0%' }))),
        h('button', { type: 'button', class: 'btn sm', onclick: () => ((adding = !adding), render()) }, c.addOpp),
      ),
      adding &&
        h(
          'div',
          { class: 'app-card app-form' },
          h('div', { class: 'app-form-row' }, field(c.oppFields.title, title), field(c.oppFields.company, company), field(c.oppFields.person, who)),
          h('div', { class: 'app-form-row' }, field(c.oppFields.next, next), field(c.oppFields.nextDate, nextDate)),
          h('div', null, h('button', { type: 'button', class: 'btn sm', onclick: add }, c.save)),
        ),
      h(
        'div',
        { class: 'app-scroll' },
        h(
          'div',
          { class: 'app-cols crm-board' },
          STAGES.map((s) => {
            const items = D.opps.filter((o) => o.stage === s);
            return h('section', { class: 'app-col' }, h('h2', null, c.stages[s], h('span', { class: 'app-sub' }, String(items.length))), items.map(card));
          }),
        ),
      ),
    ];
  }

  /* ---------- data ---------- */
  function dataView() {
    const file = h('input', { type: 'file', accept: 'application/json,.json', class: 'visually-hidden', 'aria-label': c.importJson });
    file.addEventListener('change', async () => {
      try {
        const d = JSON.parse(await file.files![0].text()) as Data;
        if (d.v !== 1 || !Array.isArray(d.people) || !Array.isArray(d.talks)) throw new Error('shape');
        D = { ...empty(), ...d };
        commit(c.imported);
      } catch {
        toast = c.importFailed;
        render();
      }
    });
    let armed = false;
    const clear = h(
      'button',
      {
        type: 'button',
        class: 'btn btn-quiet sm',
        onclick: () => {
          if (!armed) {
            armed = true;
            clear.textContent = c.confirmClear;
            return;
          }
          D = empty();
          commit(c.cleared);
        },
      },
      c.clearAll,
    );
    const csv = () =>
      [['name', 'company', 'role', 'tier', 'channel', 'last_contact', 'next_touch', 'notes'], ...D.people.map((p) => [p.name, p.company, p.role, p.tier, p.channel, derive(p).last, derive(p).next, p.notes])]
        .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
        .join('\n');
    return [
      h('p', { class: 'verdict' }, c.privacy),
      h(
        'section',
        { class: 'app-col' },
        h('h2', null, c.cadenceTitle),
        h('p', { class: 'app-sub' }, c.cadenceLead),
        h(
          'div',
          { class: 'app-form-row' },
          TIERS.map((t) => {
            const n = input(String(D.cadence[t]), 'number');
            n.min = '1';
            n.addEventListener('change', () => {
              D.cadence[t] = Math.max(1, Number(n.value) || D.cadence[t]);
              commit(c.saved);
            });
            return field(fill(c.everyDays, { tier: t }), n);
          }),
        ),
      ),
      h(
        'section',
        { class: 'app-col' },
        h('h2', null, c.dataTitle),
        h(
          'div',
          { class: 'app-actions' },
          h('button', { type: 'button', class: 'btn sm', onclick: () => download('networking-crm-backup.json', JSON.stringify(D, null, 2), 'application/json') }, c.exportJson),
          h('button', { type: 'button', class: 'btn btn-quiet sm', onclick: () => download('contacts.csv', csv(), 'text/csv') }, c.exportCsv),
          h('button', { type: 'button', class: 'btn btn-quiet sm', onclick: () => file.click() }, c.importJson),
          file,
          h(
            'button',
            {
              type: 'button',
              class: 'btn btn-quiet sm',
              onclick: () => {
                D = sample();
                commit(c.saved);
              },
            },
            c.loadSample,
          ),
          clear,
        ),
      ),
    ];
  }

  function render() {
    const views = { queue: queueView, people: peopleView, pipeline: pipelineView, data: dataView };
    const n = queue().length;
    mount.replaceChildren(
      h('div', { class: 'app-top' }, h('div', { class: 'app-brand' }, c.appName, h('small', null, c.privacy))),
      h(
        'div',
        { class: 'app-tabs', role: 'tablist' },
        (Object.keys(c.tabs) as (keyof CrmCopy['tabs'])[]).map((k) =>
          h('button', { type: 'button', role: 'tab', 'aria-selected': String(tab === k), onclick: () => go(k) }, c.tabs[k], k === 'queue' && n ? h('span', { class: 'count' }, String(n)) : null),
        ),
      ),
      h('div', { class: 'app-body', role: 'tabpanel' }, views[tab](), toast ? h('p', { class: 'app-toast', role: 'status' }, toast) : null),
    );
    toast = '';
  }

  render();
}
