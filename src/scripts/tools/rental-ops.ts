import type { RentalCopy } from '../../content/tools/rental-ops';
import type { RentalExt } from '../../content/tools/rental-ext';
import { fill, formatters, h, langOf, readCopy, storage, uid } from './util';

type Level = 'emergency' | 'urgent' | 'normal';
type Cat = 'plumbing' | 'heating' | 'electrical' | 'appliance' | 'locks' | 'pests' | 'other';
type Renew = 'none' | 'drafted' | 'sent' | 'renewed' | 'leaving';

interface Unit {
  id: string;
  addr: string;
  rent: number;
  tenant: string | null;
  leaseIn: number;
  paid: boolean;
  fee: boolean;
  renew: Renew;
}
interface Req {
  id: string;
  unitId: string;
  text: string;
  cat: Cat;
  level: Level;
  why: string;
  safety: string | null;
  status: 'approval' | 'scheduled' | 'done';
}
interface Draft {
  to: string;
  who: 'renter' | 'vendor';
  text: string;
}
interface Approval {
  id: string;
  kind: 'request' | 'late' | 'renew' | 'payout';
  ref: string;
  drafts: Draft[];
}
interface State {
  day: number;
  units: Unit[];
  reqs: Req[];
  approvals: Approval[];
  log: string[];
  lateAsked: boolean;
  /** owner ids paid this month, bill indexes paid, request ids the owner approved */
  paidOwners: string[];
  paidBills: number[];
  ownerOk: string[];
}

const START_DAY = 5;
const DAILY_FEE = 25;
const MGMT_FEE = 0.08;
const RESERVE = 125;
const PAYOUT_DAY = 10;
const RENTER_UNIT = 'u3';
const OWNER_ME = 'okafor';
/** Who owns which home, and the repair limit written into each management agreement. */
const OWNER_OF: Record<string, string> = { u1: 'okafor', u2: 'okafor', u4: 'okafor', u5: 'okafor', u6: 'okafor', u3: 'hollis', u7: 'hollis', u8: 'hollis', u9: 'hollis', u10: 'hollis' };
const LIMIT: Record<string, number> = { okafor: 200, hollis: 500 };
const SQFT = [1100, 1150, 1650, 820, 840, 700, 1900, 1050, 1080, 1500];
const VENDORS: Record<Cat, string> = {
  plumbing: 'Riverbend Plumbing',
  heating: 'Northside Heating & Air',
  electrical: 'Bright Line Electric',
  appliance: 'Fix It Appliance',
  locks: 'Keystone Locksmith',
  pests: 'Greenleaf Pest Control',
  other: 'Handy Crew',
};
const REPAIR_COST: Record<Cat, number> = { plumbing: 180, heating: 260, electrical: 210, appliance: 150, locks: 95, pests: 120, other: 110 };

/** Rules are checked in order: the first match wins, so emergencies come first. English and Spanish. */
const RULES: { re: RegExp; cat: Cat; level: Level; why: string; safety?: string }[] = [
  { re: /gas (smell|leak)|smell.{0,12}gas|huele a gas|olor a gas|fuga de gas|carbon monoxide|mon[oó]xido/i, cat: 'heating', level: 'emergency', why: 'gas', safety: 'gas' },
  { re: /fire|smoke|spark|burning smell|humo|chispa|incendio|olor a quemado/i, cat: 'electrical', level: 'emergency', why: 'fire', safety: 'fire' },
  { re: /flood|burst|water everywhere|ceiling.{0,12}(leak|drip)|sewage|inunda|revent[oó]|aguas negras|gotea.{0,8}techo/i, cat: 'plumbing', level: 'emergency', why: 'flood', safety: 'flood' },
  { re: /no heat|heat.{0,10}(not|isn|won)|furnace|freezing|sin calefacci|no (hay|sirve|funciona).{0,10}calefacci|mucho fr[ií]o/i, cat: 'heating', level: 'emergency', why: 'noheat', safety: 'noheat' },
  { re: /no hot water|water heater|sin agua caliente|no hay agua caliente|boiler/i, cat: 'plumbing', level: 'urgent', why: 'hotwater' },
  { re: /toilet|inodoro|excusado|ba[ñn]o tapado|wc/i, cat: 'plumbing', level: 'urgent', why: 'toilet' },
  { re: /lock(ed)? out|broken lock|won.?t lock|cerradura|no cierra la puerta|chapa/i, cat: 'locks', level: 'urgent', why: 'lock' },
  { re: /fridge|refrigerator|refri/i, cat: 'appliance', level: 'urgent', why: 'fridge' },
  { re: /leak|fuga/i, cat: 'plumbing', level: 'urgent', why: 'leak' },
  { re: /sink|faucet|drain|drip|llave|fregadero|drenaje|gotea|lavabo|tarja/i, cat: 'plumbing', level: 'normal', why: 'none' },
  { re: /outlet|light|breaker|contacto|foco|luz|apag[oó]n/i, cat: 'electrical', level: 'normal', why: 'none' },
  { re: /oven|stove|dishwasher|washer|dryer|microwave|estufa|horno|lavadora|secadora|lavavajillas/i, cat: 'appliance', level: 'normal', why: 'none' },
  { re: /\bac\b|air condition|thermostat|heater|clima|aire acondicionado|termostato/i, cat: 'heating', level: 'normal', why: 'none' },
  { re: /ants?|mice|mouse|roach|bugs?|plaga|hormigas|cucarach|rat[oó]n/i, cat: 'pests', level: 'normal', why: 'none' },
];

export function triage(text: string) {
  const hit = RULES.find((r) => r.re.test(text));
  return hit
    ? { cat: hit.cat, level: hit.level, why: hit.why, safety: hit.safety ?? null }
    : { cat: 'other' as Cat, level: 'normal' as Level, why: 'none', safety: null };
}

const seedUnits = (): Unit[] =>
  (
    [
      ['214 Maple St, Unit A', 1450, 'Dana Whitfield', 38, true],
      ['214 Maple St, Unit B', 1480, 'Marcus Lee', 210, true],
      ['87 Orchard Ave', 2150, 'Priya Raman', 74, false],
      ['502 Birch Ln, Apt 1', 1050, 'Tomás Herrera', 112, true],
      ['502 Birch Ln, Apt 2', 1075, 'Elena Kovacs', 300, true],
      ['502 Birch Ln, Apt 3', 895, null, 0, true],
      ['19 Cedar Ct', 2600, 'Jordan Blake', 21, true],
      ['730 Willow Rd, No. 4', 1390, 'Aisha Bello', 160, true],
      ['730 Willow Rd, No. 7', 1410, 'Chen Wei', 95, false],
      ['41 Aspen Way', 1980, 'Sofía Marín', 250, true],
    ] as [string, number, string | null, number, boolean][]
  ).map(([addr, rent, tenant, leaseIn, paid], i) => ({ id: `u${i + 1}`, addr, rent, tenant, leaseIn, paid, fee: false, renew: 'none' as Renew }));

export function setupRentalOps(root: HTMLElement) {
  const c = readCopy<RentalCopy & { ext: RentalExt }>(root);
  const x = c.ext;
  const lang = langOf(root);
  const f = formatters(lang);
  const money = (v: number) => f.money(v, 'USD');
  const KEY = `ad-rental-ops-${lang}-v2`;
  const mount = root.querySelector<HTMLElement>('[data-app]')!;
  type Tab = keyof RentalCopy['tabs'] | keyof RentalExt['moreTabs'];
  let tab: Tab = 'today';
  let app: 'team' | 'renter' | 'owner' = 'team';
  let valUnit = 'u7';
  const valPicks: Record<string, number> = {};
  let lastTriage: Req | null = null;

  /** A line under the text box that reads the request while the person types: priority, category, vendor. */
  const liveRead = (area: HTMLTextAreaElement) => {
    const out = h('p', { class: 'rops-live', 'aria-live': 'polite' });
    const paint = () => {
      const text = area.value.trim();
      if (!text) {
        out.replaceChildren();
        out.hidden = true;
        return;
      }
      const t = triage(text);
      out.hidden = false;
      out.replaceChildren(h('span', { class: 'app-label' }, c.liveTitle), levelPill(t.level as Level), h('span', null, `${c.cats[t.cat as Cat]}, ${VENDORS[t.cat as Cat]}`));
    };
    area.addEventListener('input', paint);
    paint();
    return { out, paint };
  };
  let toast = '';

  const first = (name: string) => name.split(' ')[0];
  const unitOf = (S: State, id: string) => S.units.find((u) => u.id === id)!;
  const lateUnits = (S: State) => S.units.filter((u) => u.tenant && !u.paid && !u.fee);
  const balance = (S: State, u: Unit) => (u.paid || !u.tenant ? 0 : u.rent + (u.fee ? Math.max(0, S.day - 1) * DAILY_FEE : 0));
  const leaseLeft = (S: State, u: Unit) => u.leaseIn - (S.day - START_DAY);
  const suggested = (u: Unit) => Math.round((u.rent * 1.03) / 5) * 5;
  const ownerName = (id: string) => x.owners[id] ?? id;
  const costOf = (r: Req) => REPAIR_COST[r.cat];
  /** Emergencies never wait for an owner; anything else above the agreed limit does. */
  const needsOwner = (S: State, r: Req) => r.level !== 'emergency' && costOf(r) > LIMIT[OWNER_OF[r.unitId]] && !S.ownerOk.includes(r.id);
  const month = new Date(2026, 9, 1).toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { month: 'long' });
  function statementOf(S: State, owner: string) {
    const units = S.units.filter((u) => OWNER_OF[u.id] === owner);
    const collected = units.filter((u) => u.tenant && u.paid).reduce((a, u) => a + u.rent, 0);
    const fee = Math.round(collected * MGMT_FEE);
    const repairs = S.reqs.filter((r) => OWNER_OF[r.unitId] === owner && r.status !== 'approval').reduce((a, r) => a + costOf(r), 0);
    const payout = Math.max(0, collected - fee - repairs - RESERVE);
    const sentence = fill(x.statement, { month, collected: money(collected), fee: money(fee), repairs: money(repairs), reserve: money(RESERVE), payout: money(payout) });
    return { units, collected, fee, repairs, payout, sentence };
  }

  const requestDrafts = (S: State, r: Req): Draft[] => {
    const u = unitOf(S, r.unitId);
    const vendor = VENDORS[r.cat];
    const base = { name: first(u.tenant ?? ''), vendor, window: c.windows[r.level], unit: u.addr, text: r.text, level: c.levels[r.level], company: c.company };
    return [
      { to: u.tenant ?? '', who: 'renter', text: fill(c.ap.renterMsg, { ...base, safety: r.safety ? ` ${c.safetyTips[r.safety]}` : '' }) },
      { to: vendor, who: 'vendor', text: fill(c.ap.vendorMsg, { ...base, name: u.tenant ?? '' }) },
    ];
  };
  const lateApproval = (S: State): Approval => ({
    id: uid('ap'),
    kind: 'late',
    ref: lateUnits(S).map((u) => u.id).join(','),
    drafts: lateUnits(S).map((u) => ({
      to: u.tenant ?? '',
      who: 'renter' as const,
      text: fill(c.ap.lateMsg, { name: first(u.tenant ?? ''), unit: u.addr, fee: money(DAILY_FEE) }),
    })),
  });

  const seed = (): State => {
    const S: State = { day: START_DAY, units: seedUnits(), reqs: [], approvals: [], log: [], lateAsked: true, paidOwners: [], paidBills: [], ownerOk: [] };
    const mk = (unitId: string, text: string, status: Req['status']): Req => ({ id: uid('r'), unitId, text, ...triage(text), status });
    const pending = mk('u4', c.examples[1], 'approval');
    const outlet = mk('u5', c.ext.seedOutlet, 'approval');
    S.reqs = [pending, outlet, mk('u8', c.examples[3], 'scheduled'), mk('u2', c.examples[4], 'done')];
    S.approvals = [
      { id: uid('ap'), kind: 'request', ref: pending.id, drafts: requestDrafts(S, pending) },
      { id: uid('ap'), kind: 'request', ref: outlet.id, drafts: requestDrafts(S, outlet) },
      lateApproval(S),
    ];
    return S;
  };

  let S: State = storage.get<State>(KEY) ?? seed();
  const save = () => storage.set(KEY, S);
  const log = (text: string) => S.log.unshift(text);
  const go = (t: Tab) => {
    tab = t;
    render();
  };
  const commit = (message = '') => {
    toast = message;
    save();
    render();
  };

  /* ---------- actions ---------- */
  function approve(a: Approval) {
    if (a.kind === 'payout') {
      S.paidOwners.push(a.ref);
      log(fill(x.payoutDone, { amount: money(statementOf(S, a.ref).payout), owner: ownerName(a.ref) }));
    } else if (a.kind === 'request') {
      const r = S.reqs.find((x) => x.id === a.ref);
      if (r && needsOwner(S, r)) return;
      if (r) {
        r.status = 'scheduled';
        log(fill(c.log.approvedRequest, { vendor: VENDORS[r.cat], name: unitOf(S, r.unitId).tenant ?? '' }));
      }
    } else if (a.kind === 'late') {
      const ids = a.ref.split(',');
      ids.forEach((id) => (unitOf(S, id).fee = true));
      log(fill(c.log.lateStarted, { n: String(ids.length) }));
    } else {
      const u = unitOf(S, a.ref);
      u.renew = 'sent';
      log(fill(c.log.offerSent, { name: u.tenant ?? '' }));
    }
    S.approvals = S.approvals.filter((x) => x.id !== a.id);
    commit();
  }
  function skip(a: Approval, title: string) {
    if (a.kind === 'request') S.reqs = S.reqs.filter((r) => r.id !== a.ref);
    if (a.kind === 'renew') unitOf(S, a.ref).renew = 'none';
    S.approvals = S.approvals.filter((x) => x.id !== a.id);
    log(fill(c.log.skipped, { title }));
    commit();
  }
  function submitRequest(unitId: string, text: string) {
    const r: Req = { id: uid('r'), unitId, text, ...triage(text), status: 'approval' };
    S.reqs.unshift(r);
    S.approvals.unshift({ id: uid('ap'), kind: 'request', ref: r.id, drafts: requestDrafts(S, r) });
    const u = unitOf(S, unitId);
    log(fill(c.log.request, { name: u.tenant ?? '', unit: u.addr, level: c.levels[r.level] }));
    lastTriage = r;
    commit();
  }
  function nextDay() {
    S.day += 1;
    log(fill(c.log.newDay, { day: fill(c.day, { n: String(S.day) }) }));
    if (!S.lateAsked && lateUnits(S).length) {
      S.approvals.unshift(lateApproval(S));
      S.lateAsked = true;
    }
    commit();
  }
  function pay(u: Unit) {
    const amount = balance(S, u);
    u.paid = true;
    u.fee = false;
    S.approvals = S.approvals
      .map((a) => (a.kind === 'late' ? { ...a, ref: a.ref.split(',').filter((id) => id !== u.id).join(','), drafts: a.drafts.filter((d) => d.to !== u.tenant) } : a))
      .filter((a) => a.kind !== 'late' || a.ref);
    log(fill(c.log.payment, { name: u.tenant ?? '', amount: money(amount) }));
    commit();
  }
  function draftOffer(u: Unit) {
    u.renew = 'drafted';
    const n = String(leaseLeft(S, u));
    S.approvals.unshift({
      id: uid('ap'),
      kind: 'renew',
      ref: u.id,
      drafts: [{ to: u.tenant ?? '', who: 'renter', text: fill(c.ap.renewMsg, { name: first(u.tenant ?? ''), unit: u.addr, n, rent: money(suggested(u)) }) }],
    });
    commit();
  }
  function settleRenewal(u: Unit, accepted: boolean) {
    if (accepted) {
      const rent = suggested(u);
      log(fill(c.log.renewed, { unit: u.addr, rent: money(rent) }));
      u.rent = rent;
      u.leaseIn += 365;
      u.renew = 'renewed';
    } else {
      u.renew = 'leaving';
      log(fill(c.log.leaving, { name: u.tenant ?? '', unit: u.addr }));
    }
    commit();
  }

  /* ---------- views ---------- */
  const levelPill = (level: Level) => h('span', { class: `pill ${level === 'emergency' ? 'crit' : level === 'urgent' ? 'warn' : ''}` }, c.levels[level]);

  function approvalMeta(a: Approval): { title: string; why: string[] } {
    if (a.kind === 'payout') {
      const st = statementOf(S, a.ref);
      return {
        title: fill(x.payoutTitle, { owner: ownerName(a.ref), amount: money(st.payout) }),
        why: x.payoutWhy.map((w) => fill(w, { n: String(st.units.filter((u) => u.tenant && u.paid).length), reserve: money(RESERVE) })),
      };
    }
    if (a.kind === 'request') {
      const r = S.reqs.find((x) => x.id === a.ref)!;
      const u = unitOf(S, r.unitId);
      const map = { level: c.levels[r.level], unit: u.addr, text: r.text, cat: c.cats[r.cat], why: c.whys[r.why], vendor: VENDORS[r.cat] };
      const why = c.ap.requestWhy.map((w) => fill(w, map));
      if (r.level !== 'emergency' && costOf(r) > LIMIT[OWNER_OF[r.unitId]]) {
        why.push(fill(x.overLimit, { cost: money(costOf(r)), owner: ownerName(OWNER_OF[r.unitId]), limit: money(LIMIT[OWNER_OF[r.unitId]]) }));
        if (needsOwner(S, r)) why.push(x.waitsOwner);
      }
      return { title: fill(c.ap.requestTitle, map), why };
    }
    if (a.kind === 'late') {
      const map = { n: String(a.ref.split(',').length), fee: money(DAILY_FEE) };
      return { title: fill(c.ap.lateTitle, map), why: c.ap.lateWhy.map((w) => fill(w, map)) };
    }
    const u = unitOf(S, a.ref);
    const map = { unit: u.addr, n: String(leaseLeft(S, u)), rent: money(suggested(u)) };
    return { title: fill(c.ap.renewTitle, map), why: c.ap.renewWhy.map((w) => fill(w, map)) };
  }

  function approvalCard(a: Approval) {
    const meta = approvalMeta(a);
    return h(
      'article',
      { class: 'app-card is-ai' },
      h('h2', null, meta.title),
      h('div', null, h('span', { class: 'app-label' }, c.why), h('ul', { class: 'app-why' }, meta.why.map((w) => h('li', null, w)))),
      a.drafts.map((d) =>
        h(
          'div',
          { class: 'app-draft' },
          h('label', null, `${fill(c.messageTo, { who: d.who === 'vendor' ? c.toVendor : c.toRenter })}: ${d.to}`),
          h('textarea', {
            'aria-label': `${fill(c.messageTo, { who: d.who === 'vendor' ? c.toVendor : c.toRenter })}: ${d.to}`,
            value: d.text,
            oninput: (e: Event) => {
              d.text = (e.target as HTMLTextAreaElement).value;
              save();
            },
          }),
        ),
      ),
      h(
        'div',
        { class: 'app-actions' },
        h(
          'button',
          {
            type: 'button',
            class: 'btn',
            disabled: a.kind === 'request' && (() => { const r = S.reqs.find((y) => y.id === a.ref); return !!r && needsOwner(S, r); })(),
            onclick: () => approve(a),
          },
          c.approve,
        ),
        h('button', { type: 'button', class: 'btn btn-quiet', onclick: () => skip(a, meta.title) }, c.skip),
        a.kind === 'request' && (() => { const r = S.reqs.find((y) => y.id === a.ref); return !!r && needsOwner(S, r); })()
          ? h('button', { type: 'button', class: 'app-link', onclick: () => { app = 'owner'; render(); } }, x.openOwner)
          : '',
      ),
    );
  }

  function todayView() {
    const occupied = S.units.filter((u) => u.tenant);
    const due = occupied.reduce((s, u) => s + u.rent, 0);
    const collected = occupied.filter((u) => u.paid).reduce((s, u) => s + u.rent, 0);
    const stat = (label: string, value: string) => h('div', { class: 'stat' }, h('span', { class: 'stat-label' }, label), h('span', { class: 'stat-value' }, value));
    return [
      h(
        'div',
        { class: 'stats' },
        stat(c.stats.approve, String(S.approvals.length)),
        stat(c.stats.open, String(S.reqs.filter((r) => r.status !== 'done').length)),
        stat(c.stats.collected, f.pct(due ? collected / due : 0)),
        stat(c.stats.ending, String(occupied.filter((u) => leaseLeft(S, u) <= 120 && u.renew !== 'renewed').length)),
      ),
      h(
        'div',
        { class: 'app-split' },
        h(
          'section',
          { class: 'app-col' },
          h('h2', null, c.approveTitle),
          h('p', { class: 'app-sub' }, c.approveLead),
          S.approvals.length ? h('div', { class: 'app-cards' }, S.approvals.map(approvalCard)) : h('p', { class: 'app-empty' }, c.approveEmpty),
        ),
        h(
          'section',
          { class: 'app-col' },
          h('h2', null, c.logTitle),
          S.log.length ? h('ul', { class: 'app-log' }, S.log.slice(0, 12).map((l) => h('li', null, l))) : h('p', { class: 'app-empty' }, c.logEmpty),
        ),
      ),
    ];
  }

  function requestsView() {
    const select = h('select', { 'aria-label': c.unit }, S.units.filter((u) => u.tenant).map((u) => h('option', { value: u.id }, `${u.addr} (${u.tenant})`)));
    const area = h('textarea', { 'aria-label': c.describe, placeholder: c.describePlaceholder });
    const live = liveRead(area);
    const send = () => {
      const text = area.value.trim();
      if (text) submitRequest(select.value, text);
    };
    const t = lastTriage;
    const col = (status: Req['status'], label: string) => {
      const items = S.reqs.filter((r) => r.status === status);
      return h(
        'section',
        { class: 'app-col' },
        h('h2', null, label, h('span', { class: 'app-sub' }, String(items.length))),
        items.map((r) =>
          h(
            'article',
            { class: 'app-card' },
            h('div', { class: 'app-card-head' }, h('strong', null, unitOf(S, r.unitId).addr), levelPill(r.level)),
            h('span', null, `“${r.text}”`),
            h('span', { class: 'app-sub' }, `${c.cats[r.cat]}, ${VENDORS[r.cat]}`),
            status === 'scheduled' &&
              h(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-quiet sm',
                  onclick: () => {
                    r.status = 'done';
                    log(fill(c.log.done, { unit: unitOf(S, r.unitId).addr }));
                    commit();
                  },
                },
                c.markDone,
              ),
          ),
        ),
      );
    };
    return [
      h(
        'div',
        { class: 'app-split' },
        h(
          'section',
          { class: 'app-form' },
          h('h2', null, c.reportTitle),
          h('p', { class: 'app-sub' }, c.reportLead),
          h('div', { class: 'app-field' }, h('span', { class: 'app-label' }, c.unit), select),
          h('div', { class: 'app-field' }, h('span', { class: 'app-label' }, c.describe), area, live.out),
          h(
            'div',
            { class: 'app-actions' },
            c.examples.map((ex) => h('button', { type: 'button', class: 'btn btn-quiet sm', onclick: () => ((area.value = ex), live.paint(), area.focus()) }, ex)),
          ),
          h('div', null, h('button', { type: 'button', class: 'btn', onclick: send }, c.submit)),
        ),
        t &&
          h(
            'section',
            { class: 'app-card is-ai', 'aria-live': 'polite' },
            h('h2', null, c.triageTitle),
            h(
              'dl',
              { class: 'rops-dl' },
              h('dt', null, c.priority),
              h('dd', null, levelPill(t.level)),
              h('dt', null, c.reason),
              h('dd', null, `${c.cats[t.cat]}: ${c.whys[t.why]}`),
              h('dt', null, c.vendor),
              h('dd', null, VENDORS[t.cat]),
              h('dt', null, c.window),
              h('dd', null, c.windows[t.level]),
              t.safety && [h('dt', null, c.safety), h('dd', null, c.safetyTips[t.safety])],
            ),
            h('button', { type: 'button', class: 'app-link', onclick: () => go('today') }, c.sentToApproval),
          ),
      ),
      h('div', { class: 'app-cols' }, col('approval', c.cols.approval), col('scheduled', c.cols.scheduled), col('done', c.cols.done)),
    ];
  }

  function rentView() {
    const occupied = S.units.filter((u) => u.tenant);
    const row = (u: Unit) => {
      const bal = balance(S, u);
      const status = !u.tenant
        ? h('span', { class: 'pill' }, c.vacant)
        : u.paid
          ? h('span', { class: 'pill good' }, c.paid)
          : [h('span', { class: 'pill crit' }, `${c.unpaid}, ${fill(c.lateDays, { n: String(S.day - 1) })}`), u.fee && h('span', { class: 'pill warn' }, c.feeRunning)];
      return h(
        'tr',
        null,
        h('td', null, u.addr),
        h('td', null, u.tenant ?? ''),
        h('td', null, money(u.rent)),
        h('td', null, h('span', { class: 'app-actions' }, status)),
        h('td', null, !u.tenant ? '' : bal ? money(bal) : c.paidUp),
        h('td', null, bal ? h('button', { type: 'button', class: 'btn btn-quiet sm', onclick: () => pay(u) }, c.recordPayment) : ''),
      );
    };
    return [
      h('div', null, h('h2', null, c.rentTitle), h('p', { class: 'app-sub' }, c.rentLead)),
      h(
        'div',
        { class: 'app-scroll' },
        h(
          'table',
          { class: 'tool-table' },
          h('thead', null, h('tr', null, [c.th.unit, c.th.renter, c.th.rent, c.th.status, c.th.balance, c.th.action].map((t) => h('th', { scope: 'col' }, t)))),
          h('tbody', null, S.units.map(row)),
        ),
      ),
    ];
  }

  function renewalsView() {
    const list = S.units.filter((u) => u.tenant && (leaseLeft(S, u) <= 120 || u.renew === 'renewed')).sort((a, b) => leaseLeft(S, a) - leaseLeft(S, b));
    const tone: Record<Renew, string> = { none: '', drafted: 'info', sent: 'info', renewed: 'good', leaving: 'warn' };
    const action = (u: Unit) =>
      u.renew === 'none'
        ? h('button', { type: 'button', class: 'btn sm', onclick: () => draftOffer(u) }, c.draftOffer)
        : u.renew === 'sent'
          ? h(
              'span',
              { class: 'app-actions' },
              h('button', { type: 'button', class: 'btn sm', onclick: () => settleRenewal(u, true) }, c.accepted),
              h('button', { type: 'button', class: 'btn btn-quiet sm', onclick: () => settleRenewal(u, false) }, c.leaving),
            )
          : u.renew === 'drafted'
            ? h('button', { type: 'button', class: 'app-link', onclick: () => go('today') }, c.tabs.today)
            : '';
    return [
      h('div', null, h('h2', null, c.renewTitle), h('p', { class: 'app-sub' }, c.renewLead)),
      list.length
        ? h(
            'div',
            { class: 'app-scroll' },
            h(
              'table',
              { class: 'tool-table' },
              h('thead', null, h('tr', null, [c.th.unit, c.th.renter, c.th.lease, c.th.rent, c.th.suggested, c.th.status, c.th.action].map((t) => h('th', { scope: 'col' }, t)))),
              h(
                'tbody',
                null,
                list.map((u) =>
                  h(
                    'tr',
                    null,
                    h('td', null, u.addr),
                    h('td', null, u.tenant ?? ''),
                    h('td', null, fill(c.endsIn, { n: String(leaseLeft(S, u)) })),
                    h('td', null, money(u.rent)),
                    h('td', null, u.renew === 'renewed' ? '' : money(suggested(u))),
                    h('td', null, h('span', { class: `pill ${tone[u.renew]}` }, c.renewStatus[u.renew])),
                    h('td', null, action(u)),
                  ),
                ),
              ),
            ),
          )
        : h('p', { class: 'app-empty' }, c.renewEmpty),
    ];
  }

  /* ---------- owner payouts ---------- */
  function payoutsView() {
    const owners = Object.keys(x.owners);
    const pending = (o: string) => S.approvals.some((a) => a.kind === 'payout' && a.ref === o);
    const prepare = () => {
      owners
        .filter((o) => !S.paidOwners.includes(o) && !pending(o))
        .forEach((o) => {
          const st = statementOf(S, o);
          S.approvals.unshift({
            id: uid('ap'),
            kind: 'payout',
            ref: o,
            drafts: [{ to: ownerName(o), who: 'renter', text: fill(x.payoutMsg, { first: first(ownerName(o)), month, sentence: st.sentence }) }],
          });
        });
      commit();
    };
    const line = (label: string, value: string, strong = false) =>
      h('li', null, h('div', { class: 'app-row' }, h(strong ? 'strong' : 'span', null, label), h(strong ? 'strong' : 'span', null, value)));
    return [
      h('div', null, h('h2', null, x.payoutsTitle), h('p', { class: 'app-sub' }, x.payoutsLead)),
      h(
        'div',
        { class: 'app-actions' },
        h('button', { type: 'button', class: 'btn', disabled: S.day < PAYOUT_DAY || owners.every((o) => S.paidOwners.includes(o) || pending(o)), onclick: prepare }, x.preparePayouts),
        S.day < PAYOUT_DAY && h('span', { class: 'app-sub' }, x.payoutLocked),
      ),
      h(
        'div',
        { class: 'app-cols' },
        owners.map((o) => {
          const st = statementOf(S, o);
          return h(
            'section',
            { class: 'app-col' },
            h('h2', null, ownerName(o), S.paidOwners.includes(o) ? h('span', { class: 'pill good' }, x.payoutSent) : pending(o) ? h('span', { class: 'pill info' }, x.payoutWaiting) : null),
            h(
              'ul',
              { class: 'app-list' },
              line(x.payoutRows.collected, money(st.collected)),
              line(x.payoutRows.fee, money(-st.fee)),
              line(x.payoutRows.repairs, money(-st.repairs)),
              line(x.payoutRows.reserve, money(-RESERVE)),
              line(x.payoutRows.payout, money(st.payout), true),
            ),
            h('p', { class: 'app-sub' }, st.sentence),
          );
        }),
      ),
    ];
  }

  /* ---------- bills inbox ---------- */
  function billsView() {
    return [
      h('div', null, h('h2', null, x.billsTitle), h('p', { class: 'app-sub' }, x.billsLead)),
      h(
        'div',
        { class: 'app-cards' },
        x.bills.map((b, i) => {
          const paid = S.paidBills.includes(i);
          const each = b.amount / b.units.length;
          return h(
            'article',
            { class: `app-card${paid ? '' : ' is-ai'}` },
            h('div', { class: 'app-card-head' }, h('strong', null, `${b.vendor}: ${b.job}`), paid ? h('span', { class: 'pill good' }, x.billPaid) : null),
            h('span', { class: 'app-label' }, x.billRead),
            h(
              'dl',
              { class: 'rops-dl' },
              h('dt', null, x.billVendor),
              h('dd', null, b.vendor),
              h('dt', null, x.billAmount),
              h('dd', null, money(b.amount)),
              h('dt', null, x.billFor),
              h('dd', null, b.units.map((id) => unitOf(S, id).addr).join(', '), b.units.length > 1 ? ` (${fill(x.billSplit, { amount: money(each) })})` : ''),
              h('dt', null, x.billMatch),
              h('dd', null, b.match),
            ),
            !paid &&
              h(
                'div',
                { class: 'app-actions' },
                h(
                  'button',
                  {
                    type: 'button',
                    class: 'btn',
                    onclick: () => {
                      S.paidBills.push(i);
                      log(fill(x.billLog, { vendor: b.vendor, amount: money(b.amount), n: String(b.units.length) }));
                      commit();
                    },
                  },
                  x.recordPay,
                ),
              ),
          );
        }),
      ),
    ];
  }

  /* ---------- valuation ---------- */
  function valuationView() {
    const idx = S.units.findIndex((u) => u.id === valUnit);
    const u = S.units[idx];
    const sqft = SQFT[idx];
    const comps = [0, 1, 2].map((k) => {
      const cs = Math.round(sqft * (0.9 + k * 0.1));
      const ppsf = 182 + ((idx * 7 + k * 13) % 30);
      return { addr: `${120 + idx * 11 + k * 4} ${['Maple', 'Linden', 'Hawthorn'][k]} St`, sqft: cs, price: Math.round((cs * ppsf) / 1000) * 1000, ppsf };
    });
    const ppsfs = comps.map((cp) => cp.price / cp.sqft).sort((a, b) => a - b);
    const base = Math.round((ppsfs[1] * sqft) / 1000) * 1000;
    let value = base;
    const reasons: string[] = [fill(x.valBase, { sqft: f.num(sqft) }) + `: ${money(base)}`];
    x.checks.forEach((ch) => {
      const pick = valPicks[ch.id] ?? 1;
      const opt = ch.options[pick];
      if (opt.effect) {
        const d = Math.round((base * opt.effect) / 500) * 500;
        value += d;
        reasons.push(`${ch.label}, ${opt.label.toLowerCase()}: ${d > 0 ? '+' : ''}${money(d)}`);
      }
    });
    const rent = Math.round((value * 0.0075) / 25) * 25;
    const select = h(
      'select',
      { 'aria-label': x.valHome, onchange: (e: Event) => { valUnit = (e.target as HTMLSelectElement).value; render(); } },
      S.units.map((v) => h('option', { value: v.id, selected: v.id === valUnit }, v.addr)),
    );
    return [
      h('div', null, h('h2', null, x.valTitle), h('p', { class: 'app-sub' }, x.valLead)),
      h(
        'div',
        { class: 'app-split' },
        h(
          'section',
          { class: 'app-form' },
          h('div', { class: 'app-field' }, h('span', { class: 'app-label' }, x.valHome), select),
          h('h2', null, x.valComps),
          h('ul', { class: 'app-log' }, comps.map((cp) => h('li', null, fill(x.valCompRow, { addr: cp.addr, price: money(cp.price), sqft: f.num(cp.sqft) })))),
          h('h2', null, x.valWalk),
          h('p', { class: 'app-sub' }, x.valWalkLead),
          x.checks.map((ch) =>
            h(
              'div',
              { class: 'app-field' },
              h('span', { class: 'app-label' }, ch.label),
              h(
                'select',
                {
                  'aria-label': ch.label,
                  onchange: (e: Event) => {
                    valPicks[ch.id] = Number((e.target as HTMLSelectElement).value);
                    render();
                  },
                },
                ch.options.map((o, k) => h('option', { value: String(k), selected: (valPicks[ch.id] ?? 1) === k }, `${o.label}${o.effect ? ` (${o.effect > 0 ? '+' : ''}${Math.round(o.effect * 100)}%)` : ''}`)),
              ),
            ),
          ),
        ),
        h(
          'section',
          { class: 'app-card is-ai', 'aria-live': 'polite' },
          h('span', { class: 'app-label' }, u.addr),
          h('div', { class: 'stats' }, h('div', { class: 'stat' }, h('span', { class: 'stat-label' }, x.valSale), h('span', { class: 'stat-value' }, money(value))), h('div', { class: 'stat' }, h('span', { class: 'stat-label' }, x.valRent), h('span', { class: 'stat-value' }, money(rent)))),
          h('span', { class: 'app-label' }, x.valReasons),
          h('ul', { class: 'app-why' }, reasons.map((r) => h('li', null, r))),
        ),
      ),
    ];
  }

  /* ---------- renter portal ---------- */
  function renterView() {
    const u = unitOf(S, RENTER_UNIT);
    const fees = u.fee && !u.paid ? Math.max(0, S.day - 1) * DAILY_FEE : 0;
    const owe = u.paid ? 0 : u.rent / 2 + fees;
    const area = h('textarea', { 'aria-label': c.describe, placeholder: c.describePlaceholder });
    const liveR = liveRead(area);
    const mine = S.reqs.filter((r) => r.unitId === RENTER_UNIT);
    const nameIn = h('input', { type: 'text', 'aria-label': x.typeName, placeholder: u.tenant ?? '' }) as HTMLInputElement;
    const agree = h('input', { type: 'checkbox' }) as HTMLInputElement;
    const signBtn = h('button', { type: 'button', class: 'btn', disabled: true }, x.sign) as HTMLButtonElement;
    const check = () => (signBtn.disabled = !(agree.checked && nameIn.value.trim().toLowerCase() === (u.tenant ?? '').toLowerCase()));
    nameIn.addEventListener('input', check);
    agree.addEventListener('change', check);
    signBtn.addEventListener('click', () => {
      const rent = suggested(u);
      settleRenewal(u, true);
      S.log[0] = fill(x.signedLog, { name: u.tenant ?? '', unit: u.addr, rent: money(rent) });
      commit(x.signed);
    });
    return [
      h('div', null, h('h2', null, x.renterTitle), h('p', { class: 'app-sub' }, x.renterLead)),
      h('p', { class: 'rops-hello' }, x.renterHello),
      h(
        'div',
        { class: 'app-split' },
        h(
          'section',
          { class: 'app-card' },
          h('span', { class: 'app-label' }, x.owes),
          h('strong', { class: 'rops-big' }, money(owe)),
          owe
            ? [
                h('span', { class: 'app-sub' }, fill(x.yourShare, { rent: money(u.rent) })),
                h('span', { class: 'app-sub' }, x.roommatePaid),
                fees ? h('span', { class: 'app-sub' }, fill(x.feeIncluded, { fee: money(fees) })) : null,
                h('div', null, h('button', { type: 'button', class: 'btn', onclick: () => pay(u) }, x.payShare)),
              ]
            : h('span', { class: 'app-sub' }, x.allPaid),
        ),
        h(
          'section',
          { class: 'app-card' },
          h('h2', null, x.offerTitle),
          u.renew === 'sent'
            ? [
                h('p', null, fill(x.offerText, { rent: money(suggested(u)) })),
                h('details', null, h('summary', null, x.readLease), h('ul', { class: 'app-log' }, x.leaseSections.map((l) => h('li', null, l)))),
                h('div', { class: 'app-field' }, h('span', { class: 'app-label' }, x.typeName), nameIn),
                h('label', { class: 'rops-agree' }, agree, h('span', null, x.agree)),
                h('div', null, signBtn),
              ]
            : u.renew === 'renewed'
              ? h('p', { class: 'app-sub' }, x.signed)
              : h('p', { class: 'app-sub' }, x.offerNone),
        ),
      ),
      h(
        'div',
        { class: 'app-split' },
        h(
          'section',
          { class: 'app-form' },
          h('h2', null, x.renterRepair),
          h('p', { class: 'app-sub' }, x.renterRepairLead),
          area,
          liveR.out,
          h('div', { class: 'app-actions' }, c.examples.slice(0, 3).map((ex) => h('button', { type: 'button', class: 'btn btn-quiet sm', onclick: () => ((area.value = ex), liveR.paint(), area.focus()) }, ex))),
          h('div', null, h('button', { type: 'button', class: 'btn', onclick: () => area.value.trim() && submitRequest(RENTER_UNIT, area.value.trim()) }, c.submit)),
        ),
        h(
          'section',
          { class: 'app-col' },
          h('h2', null, x.renterRequests),
          mine.length
            ? mine.map((r) =>
                h('article', { class: 'app-card' }, h('div', { class: 'app-card-head' }, h('span', null, `“${r.text}”`), levelPill(r.level)), h('span', { class: 'app-sub' }, `${c.cols[r.status]}. ${c.window}: ${c.windows[r.level]}`)),
              )
            : h('p', { class: 'app-empty' }, x.renterNoRequests),
        ),
      ),
    ];
  }

  /* ---------- owner portal ---------- */
  function ownerView() {
    const st = statementOf(S, OWNER_ME);
    const repairs = S.reqs.filter((r) => OWNER_OF[r.unitId] === OWNER_ME && r.status !== 'done');
    return [
      h('div', null, h('h2', null, x.ownerPortalTitle), h('p', { class: 'app-sub' }, x.ownerHello)),
      h('p', { class: 'rops-statement' }, st.sentence),
      h(
        'div',
        { class: 'app-split' },
        h(
          'section',
          { class: 'app-col' },
          h('h2', null, x.ownerHomes),
          h(
            'ul',
            { class: 'app-list' },
            st.units.map((u) =>
              h('li', null, h('div', { class: 'app-row' }, h('span', null, u.addr), h('span', { class: `pill ${!u.tenant ? '' : u.paid ? 'good' : 'crit'}` }, !u.tenant ? c.vacant : u.paid ? c.paid : c.unpaid))),
            ),
          ),
        ),
        h(
          'section',
          { class: 'app-col' },
          h('h2', null, x.ownerRepairs),
          h('p', { class: 'app-sub' }, fill(x.ownerReserve, { limit: money(LIMIT[OWNER_ME]) })),
          repairs.length
            ? repairs.map((r) =>
                h(
                  'article',
                  { class: `app-card${needsOwner(S, r) ? ' is-ai' : ''}` },
                  h('div', { class: 'app-card-head' }, h('strong', null, unitOf(S, r.unitId).addr), levelPill(r.level)),
                  h('span', null, `“${r.text}”`),
                  h('span', { class: 'app-sub' }, fill(x.repairCost, { cost: money(costOf(r)) })),
                  needsOwner(S, r) &&
                    h(
                      'div',
                      null,
                      h(
                        'button',
                        {
                          type: 'button',
                          class: 'btn sm',
                          onclick: () => {
                            S.ownerOk.push(r.id);
                            log(fill(x.ownerApproved, { owner: ownerName(OWNER_ME), unit: unitOf(S, r.unitId).addr }));
                            commit();
                          },
                        },
                        x.approveRepair,
                      ),
                    ),
                ),
              )
            : h('p', { class: 'app-empty' }, x.ownerNoRepairs),
        ),
      ),
    ];
  }

  function render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const views: Record<Tab, () => any> = { today: todayView, requests: requestsView, rent: rentView, payouts: payoutsView, bills: billsView, renewals: renewalsView, valuation: valuationView };
    const labels: Record<Tab, string> = { today: c.tabs.today, requests: c.tabs.requests, rent: c.tabs.rent, payouts: x.moreTabs.payouts, bills: x.moreTabs.bills, renewals: c.tabs.renewals, valuation: x.moreTabs.valuation };
    const tabs = (Object.keys(labels) as Tab[]).map((k) =>
      h(
        'button',
        { type: 'button', role: 'tab', 'aria-selected': String(tab === k), onclick: () => go(k) },
        labels[k],
        k === 'today' && S.approvals.length ? h('span', { class: 'count' }, String(S.approvals.length)) : null,
      ),
    );
    mount.replaceChildren(
      h(
        'div',
        { class: 'app-top' },
        h('div', { class: 'app-brand' }, c.company, h('small', null, `${c.tagline}, ${fill(c.day, { n: String(S.day) })}`)),
        h(
          'div',
          { class: 'app-actions' },
          h('button', { type: 'button', class: 'btn btn-quiet sm', disabled: S.day >= 28, onclick: nextDay }, c.nextDay),
          h(
            'button',
            {
              type: 'button',
              class: 'btn btn-quiet sm',
              onclick: () => {
                storage.remove(KEY);
                S = seed();
                lastTriage = null;
                tab = 'today';
                commit(c.resetDone);
              },
            },
            c.reset,
          ),
        ),
      ),
      h(
        'div',
        { class: 'rops-apps', role: 'group', 'aria-label': x.appsLabel },
        (['team', 'renter', 'owner'] as const).map((k) =>
          h('button', { type: 'button', 'aria-pressed': String(app === k), onclick: () => { app = k; render(); } }, x.apps[k]),
        ),
      ),
      app === 'team' ? h('div', { class: 'app-tabs', role: 'tablist' }, tabs) : '',
      h(
        'div',
        { class: 'app-body', role: app === 'team' ? 'tabpanel' : null },
        app === 'team' ? views[tab]() : app === 'renter' ? renterView() : ownerView(),
        toast ? h('p', { class: 'app-toast', role: 'status' }, toast) : null,
      ),
    );
    toast = '';
  }

  render();
}
