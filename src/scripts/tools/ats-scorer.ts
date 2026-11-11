import { $, $$, fill, h, onInput, readCopy } from './util';

interface Concept {
  t: string;
  a: string[];
  e: string[];
  c: string;
  x?: string;
}
type FamilyKey = 'ai' | 'taxonomy' | 'literal';
interface Family {
  credit: readonly number[];
  w: { kw: number; req: number; ev: number; hyg: number };
}
interface Copy {
  bands: Record<'strong' | 'competitive' | 'borderline' | 'weak', string>;
  bandText: Record<'strong' | 'competitive' | 'borderline' | 'weak', string>;
  capped: string;
  levels: string[];
  where: Record<'title' | 'required' | 'resp' | 'preferred' | 'other', string>;
  fix: string;
  fixLang: string;
  fixSyn: string;
  checks: Record<string, string>;
  empty: string;
  families: Record<FamilyKey, string>;
  familyData: Record<FamilyKey, Family>;
  taxonomy: Concept[];
  samples: { en: string; es: string; cv: string };
}

/** Lowercase, no accents, single spaces: so "Investigación" and "investigacion" match. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9+#/&.\-\s]/g, ' ')
    .replace(/\s+/g, ' ');
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const has = (text: string, form: string) => new RegExp(`(^|[^a-z0-9])${esc(norm(form).trim())}($|[^a-z0-9])`).test(text);
/** A crude stemmer for the inflection level: "negotiated" ~ "negotiation", "launches" ~ "launch". */
const stem = (w: string) => w.replace(/(ations?|ings?|ed|es|s|ion|er|ers)$/, '');
const stemOf = (form: string) => norm(form).split(' ').map(stem).join(' ');

const ES_WORDS = /\b(el|la|los|las|de|del|para|con|una|experiencia|requisitos|años)\b/g;
const langOfText = (t: string) => ((norm(t).match(ES_WORDS) ?? []).length > 6 ? 'es' : 'en');

type Where = 'title' | 'required' | 'resp' | 'preferred' | 'other';
const WEIGHT: Record<Where, number> = { title: 3, required: 2, resp: 1.5, preferred: 1, other: 0.5 };

function jdSections(jd: string) {
  let section: Where = 'other';
  const lines = jd.split('\n').filter((l) => l.trim());
  return lines.map((line, i) => {
    const n = norm(line);
    if (i === 0) return { n, where: 'title' as Where };
    if (/^(requirements|qualifications|what you bring|must have|requisitos|buscamos|perfil)\b/.test(n.trim())) section = 'required';
    else if (/^(nice to have|preferred|bonus|deseable)/.test(n.trim())) section = 'preferred';
    else if (/^(what you will do|responsibilities|you will|the role|responsabilidades|funciones)/.test(n.trim())) section = 'resp';
    const where: Where = section === 'required' && /\b(a plus|plus|deseable|preferred)\b/.test(n) ? 'preferred' : section;
    return { n, where };
  });
}

export function scoreResume(jd: string, cv: string, fam: Family, tax: Concept[]) {
  const jdLang = langOfText(jd);
  const lines = jdSections(jd);
  const cvN = norm(cv);
  const cvLines = cv.split('\n').map((l) => ({ raw: l, n: norm(l) }));
  let section = 'top';
  const placed = cvLines.map((l) => {
    const t = l.n.trim();
    if (/^(experience|experiencia|work history)/.test(t)) section = 'exp';
    else if (/^(skills|additional|habilidades|adicional|education|educacion)/.test(t)) section = 'skills';
    return { ...l, section, bullet: /^\s*[-•*●]/.test(l.raw), metric: /\d/.test(l.raw) };
  });

  const terms = tax
    .map((c) => {
      const own = jdLang === 'es' ? c.e : [c.t, ...c.a, ...(c.x ? [c.x] : [])];
      const other = jdLang === 'es' ? [c.t, ...c.a] : c.e;
      let best: { form: string; where: Where } | null = null;
      for (const l of lines) {
        const form = own.find((f) => has(l.n, f));
        if (form && (!best || WEIGHT[l.where] > WEIGHT[best.where])) best = { form, where: l.where };
      }
      if (!best) return null;
      const jdForm = best.form;
      const ownRest = own.filter((f) => f !== jdForm);
      // 0 exact, 1 inflection, 2 synonym, 3 other language, 4 missing
      let level = 4;
      let have = '';
      if (has(cvN, jdForm)) level = 0;
      else if (stemOf(jdForm).length > 3 && cvN.includes(stemOf(jdForm))) level = 1;
      else if ((have = ownRest.find((f) => has(cvN, f)) ?? '')) level = 2;
      else if ((have = other.find((f) => has(cvN, f)) ?? '')) level = 3;
      if (level === 4 && /bachelor|degree|licenciatura|titulo/.test(norm(jdForm))) {
        const deg = cv.match(/\b(B\.?S\.?|B\.?A\.?|Bachelor[^,\n]*|MBA|Licenciatura[^,\n]*|Ingenier[ií]a[^,\n]*)/);
        if (deg) {
          level = 2;
          have = deg[0].trim();
        }
      }
      const probe = level === 0 || level === 1 ? jdForm : have;
      const line = level < 4 ? placed.find((p) => (level === 1 ? p.n.includes(stemOf(probe)) : has(p.n, probe))) : undefined;
      const place = !line ? 0 : line.section === 'exp' && line.bullet ? (line.metric ? 1 : 0.9) : line.section === 'skills' ? 0.6 : 0.8;
      const credit = level < 4 ? fam.credit[level] * place : 0;
      const shown = jd.match(new RegExp(esc(jdForm), 'i'))?.[0] ?? jdForm;
      return { term: c.t, jdForm: shown, where: best.where, weight: WEIGHT[best.where], level, have, credit, cat: c.c };
    })
    .filter(Boolean) as { term: string; jdForm: string; where: Where; weight: number; level: number; have: string; credit: number; cat: string }[];

  // Two forms of the same idea (for example "marketing" and "marketing strategy") both count, but the generic one weighs less.
  terms.forEach((t) => {
    const a = norm(t.jdForm);
    if (terms.some((o) => o !== t && norm(o.jdForm).includes(a) && o.jdForm.length > t.jdForm.length)) t.weight *= 0.4;
  });
  const den = terms.reduce((a, t) => a + t.weight, 0);
  const kw = den ? terms.reduce((a, t) => a + t.weight * t.credit, 0) / den : 0;

  // Screen out checks
  const jdN = norm(jd);
  const need = Number((jdN.match(/(\d+)\s*\+?\s*(years|anos)/) ?? [])[1] ?? 0);
  const years = [...cv.matchAll(/((?:19|20)\d\d)\s*(?:-|–|to|a)\s*((?:19|20)\d\d|present|presente|actual|current)/gi)];
  const starts = years.map((m) => Number(m[1]));
  const ends = years.map((m) => (/\d/.test(m[2]) ? Number(m[2]) : 2026));
  const have = starts.length ? Math.max(...ends) - Math.min(...starts) : 0;
  const wantsEnglish = /\b(english|ingles)\b/.test(jdN);
  const hasEnglish = /\b(english|ingles)\b/.test(cvN);
  const wantsDegree = /\b(bachelor|degree|licenciatura|titulo)\b/.test(jdN);
  const hasDegree = /\b(b\.?s|b\.?a|bachelor|mba|master|licenciatura|ingenieria|degree)\b/.test(cvN);
  const checks = { need, have, yearsOk: !need || have >= need, englishOk: !wantsEnglish || hasEnglish, degreeOk: !wantsDegree || hasDegree, wantsEnglish, wantsDegree };
  const fails = [!checks.yearsOk && have < 0.7 * need, !checks.englishOk, !checks.degreeOk].filter(Boolean).length;
  const req = 1 - (Number(!checks.yearsOk) + Number(!checks.englishOk) + Number(!checks.degreeOk)) / 3;

  // Evidence and hygiene
  const bullets = placed.filter((p) => p.bullet);
  const metricShare = bullets.length ? bullets.filter((b) => b.metric).length / bullets.length : 0;
  const ev = Math.min(1, 0.6 * metricShare + 0.4 * Math.min(1, bullets.length / 8));
  const pronouns = /(^|\s)(i|my|me|yo|mi|mis)\s/i.test(` ${cv} `);
  const hyg = pronouns ? 0.75 : 1;

  const raw = Math.round(100 * (fam.w.kw * kw + fam.w.req * req + fam.w.ev * ev + fam.w.hyg * hyg));
  const score = fails ? Math.min(59, raw) : raw;
  return { score, raw, capped: fails > 0 && raw > 59, kw, req, ev, terms, checks, bullets: bullets.length, metricBullets: bullets.filter((b) => b.metric).length, pronouns, jdLang };
}

export function setupAtsScorer(root: HTMLElement) {
  const c = readCopy<Copy>(root);
  const jdEl = $<HTMLTextAreaElement>(root, '[name="jd"]');
  const cvEl = $<HTMLTextAreaElement>(root, '[name="cv"]');
  const out = (k: string) => $(root, `[data-out="${k}"]`);

  const update = () => {
    const famKey = (root.querySelector<HTMLInputElement>('input[name="family"]:checked')?.value ?? 'ai') as FamilyKey;
    const jd = jdEl.value.trim();
    const cv = cvEl.value.trim();
    const verdict = $(root, '[data-verdict]');
    if (!jd || !cv) {
      verdict.textContent = c.empty;
      verdict.className = 'verdict';
      return;
    }
    const r = scoreResume(jd, cv, c.familyData[famKey], c.taxonomy);
    const band = r.score >= 80 ? 'strong' : r.score >= 65 ? 'competitive' : r.score >= 50 ? 'borderline' : 'weak';
    out('score').textContent = String(r.score);
    out('band').textContent = c.bands[band];
    out('kw').textContent = `${Math.round(r.kw * 100)}%`;
    out('req').textContent = `${Math.round(r.req * 100)}%`;
    out('ev').textContent = `${Math.round(r.ev * 100)}%`;
    verdict.textContent = c.bandText[band] + (r.capped ? ` ${fill(c.capped, { n: String(r.raw) })}` : '');
    verdict.className = `verdict ${band === 'strong' || band === 'competitive' ? 'good' : band === 'borderline' ? 'warn' : 'bad'}`;

    // Same resume across the three families
    $(root, '[data-across]').replaceChildren(
      ...(Object.keys(c.familyData) as FamilyKey[]).map((k) => {
        const s = scoreResume(jd, cv, c.familyData[k], c.taxonomy).score;
        return h('div', { class: `ats-fam${k === famKey ? ' is-on' : ''}` }, h('span', { class: 'ats-fam-n' }, String(s)), h('span', null, c.families[k]), h('i', { style: `width:${s}%` }));
      }),
    );

    // Terms table, most important first
    const sorted = [...r.terms].sort((a, b) => b.weight - a.weight || a.credit - b.credit);
    $(root, '[data-terms]').replaceChildren(
      ...sorted.map((t) =>
        h(
          'tr',
          null,
          h('td', null, t.jdForm),
          h('td', null, c.where[t.where]),
          h('td', null, h('span', { class: `pill ${t.level === 4 ? 'crit' : t.level >= 2 ? 'warn' : 'good'}` }, c.levels[t.level]), t.have ? h('small', { class: 'ats-have' }, ` “${t.have}”`) : null),
        ),
      ),
    );

    // Highest value changes
    const tot = r.terms.reduce((a, t) => a + t.weight, 0) || 1;
    const ranked = r.terms
      .map((t) => ({ t, gain: ((0.95 - t.credit) * t.weight) / tot }))
      .filter((x) => x.gain > 0.02 && x.t.cat !== 'lang')
      .sort((a, b) => b.gain - a.gain);
    // Keep the wording fix in view: it is the cheapest change and the one people miss.
    const fixes = ranked.slice(0, 4);
    const wording = ranked.find((x) => x.t.level === 2 || x.t.level === 3);
    if (wording && !fixes.includes(wording)) fixes.push(wording);
    else if (ranked[4]) fixes.push(ranked[4]);
    const fixList = $(root, '[data-fixes]');
    fixList.replaceChildren(
      ...(fixes.length
        ? fixes.map(({ t }) =>
            h(
              'li',
              null,
              t.level === 3
                ? fill(c.fixLang, { term: t.jdForm, other: r.jdLang === 'es' ? 'English' : 'español' })
                : t.level === 2
                  ? fill(c.fixSyn, { term: t.jdForm, have: t.have }).replace('.”.', '.”')
                  : fill(c.fix, { term: t.jdForm }),
            ),
          )
        : [h('li', null, root.dataset.nofix ?? '')]),
    );

    // Checks
    const k = r.checks;
    const items: [boolean, string][] = [];
    if (k.need) items.push([k.yearsOk, fill(k.yearsOk ? c.checks.yearsOk : c.checks.years, { need: String(k.need), have: String(k.have) })]);
    if (k.wantsEnglish) items.push([k.englishOk, k.englishOk ? c.checks.englishOk : c.checks.english]);
    if (k.wantsDegree) items.push([k.degreeOk, k.degreeOk ? c.checks.degreeOk : c.checks.degree]);
    items.push([r.metricBullets >= r.bullets * 0.6, fill(c.checks.metrics, { n: String(r.metricBullets), t: String(r.bullets) })]);
    if (r.pronouns) items.push([false, c.checks.pronouns]);
    $(root, '[data-checks]').replaceChildren(...items.map(([ok, text]) => h('li', { class: ok ? 'ok' : 'no' }, text)));
  };

  $$<HTMLButtonElement>(root, '[data-sample]').forEach((b) =>
    b.addEventListener('click', () => {
      jdEl.value = b.dataset.sample === 'es' ? c.samples.es : c.samples.en;
      cvEl.value = c.samples.cv;
      update();
    }),
  );
  onInput(root, update);
  update();
}
