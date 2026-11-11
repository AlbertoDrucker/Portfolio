import { $, fill, onInput, onResize, readCopy } from './util';

interface Case {
  id: string;
  fn: string;
  ind: string[] | 'all';
  impact: number;
  feas: number;
  t: string;
  d: string;
  data: string;
  first: string;
}

interface Copy {
  quadrants: { quick: string; bets: string; extras: string; later: string };
  impact: string;
  feasibility: string;
  data: string;
  first: string;
  scores: string;
  showAll: string;
  showFewer: string;
  cases: Case[];
  boost: Record<string, Record<string, number>>;
  fns: Record<string, string>;
}

const NS = 'http://www.w3.org/2000/svg';

export function setupOpportunityMap(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const industrySel = $<HTMLSelectElement>(root, '[name="industry"]');
  const fnSel = $<HTMLSelectElement>(root, '[name="fn"]');
  const svg = $<SVGSVGElement>(root, '[data-map]');
  const list = $(root, '[data-list]');
  const detail = $(root, '[data-detail]');
  let selected = '';
  let showAll = false;

  const quadrant = (impact: number, feas: number) =>
    impact >= 6.5 ? (feas >= 6.5 ? 'quick' : 'bets') : feas >= 6.5 ? 'extras' : 'later';

  const scored = () => {
    const ind = industrySel.value;
    const fn = fnSel.value;
    return copy.cases
      .filter((c) => (c.ind === 'all' || c.ind.includes(ind)) && (fn === 'all' || c.fn === fn))
      .map((c) => {
        const impact = Math.min(10, c.impact + (copy.boost[ind]?.[c.fn] ?? 0));
        return { ...c, impact, q: quadrant(impact, c.feas), score: impact * c.feas };
      })
      .sort((a, b) => b.score - a.score || b.impact - a.impact);
  };

  const showDetail = (c: ReturnType<typeof scored>[number] | undefined) => {
    if (!c) return;
    detail.innerHTML = '';
    const q = document.createElement('p');
    q.className = 'aom-q';
    q.textContent = `${copy.quadrants[c.q as keyof Copy['quadrants']]}, ${copy.fns[c.fn]}`;
    const h = document.createElement('h2');
    h.textContent = c.t;
    const d = document.createElement('p');
    d.className = 'aom-d';
    d.textContent = c.d;
    const dl = document.createElement('dl');
    const add = (k: string, v: string) => {
      const dt = document.createElement('dt');
      dt.textContent = k;
      const dd = document.createElement('dd');
      dd.textContent = v;
      dl.append(dt, dd);
    };
    add(copy.data, c.data);
    add(copy.first, c.first);
    const s = document.createElement('p');
    s.className = 'tool-hint';
    s.textContent = fill(copy.scores, { i: String(c.impact), f: String(c.feas) });
    detail.append(q, h, d, dl, s);
  };

  const select = (id: string) => {
    selected = id;
    root.querySelectorAll('[data-id]').forEach((el) => el.classList.toggle('is-on', (el as HTMLElement).dataset.id === id));
    showDetail(scored().find((c) => c.id === id));
  };

  const draw = () => {
    const cases = scored();
    if (!cases.some((c) => c.id === selected)) selected = cases[0]?.id ?? '';

    // Map
    const W = Math.max(300, svg.clientWidth || 560);
    const H = Math.round(Math.min(W * 0.72, 440));
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('height', String(H));
    svg.replaceChildren();
    const m = { l: 28, r: 8, t: 8, b: 26 };
    const x = (v: number) => m.l + ((v - 2.5) / 7) * (W - m.l - m.r);
    const y = (v: number) => H - m.b - ((v - 3.5) / 7) * (H - m.t - m.b);
    const mid = { x: x(6.5), y: y(6.5) };
    const rect = (x0: number, y0: number, x1: number, y1: number, cls: string) => {
      const r = document.createElementNS(NS, 'rect');
      r.setAttribute('x', String(x0));
      r.setAttribute('y', String(y0));
      r.setAttribute('width', String(x1 - x0));
      r.setAttribute('height', String(y1 - y0));
      r.setAttribute('class', cls);
      svg.append(r);
    };
    const text = (tx: number, ty: number, t: string, cls: string, anchor = 'start', rotate = false) => {
      const el = document.createElementNS(NS, 'text');
      el.setAttribute('x', String(tx));
      el.setAttribute('y', String(ty));
      el.setAttribute('class', cls);
      el.setAttribute('text-anchor', anchor);
      if (rotate) el.setAttribute('transform', `rotate(-90 ${tx} ${ty})`);
      el.textContent = t;
      svg.append(el);
    };
    rect(m.l, m.t, mid.x, mid.y, 'q');
    rect(mid.x, m.t, W - m.r, mid.y, 'q q-quick');
    rect(m.l, mid.y, mid.x, H - m.b, 'q');
    rect(mid.x, mid.y, W - m.r, H - m.b, 'q');
    text(m.l + 10, m.t + 18, copy.quadrants.bets, 'q-label');
    text(W - m.r - 10, m.t + 18, copy.quadrants.quick, 'q-label', 'end');
    text(m.l + 10, H - m.b - 10, copy.quadrants.later, 'q-label');
    text(W - m.r - 10, H - m.b - 10, copy.quadrants.extras, 'q-label', 'end');
    text((m.l + W - m.r) / 2, H - 6, `${copy.feasibility}`, 'axis-label', 'middle');
    text(14, (m.t + H - m.b) / 2, `${copy.impact}`, 'axis-label', 'middle', true);

    // Spread dots that share a position.
    const seen = new Map<string, number>();
    cases.forEach((c, i) => {
      const key = `${c.feas}-${c.impact}`;
      const k = seen.get(key) ?? 0;
      seen.set(key, k + 1);
      const angle = k * 2.1;
      const spread = W < 480 ? 12 : 16;
      const dx = k ? Math.cos(angle) * spread : 0;
      const dy = k ? Math.sin(angle) * spread : 0;
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'dot');
      g.setAttribute('data-id', c.id);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', c.t);
      g.setAttribute('transform', `translate(${x(c.feas) + dx} ${y(c.impact) + dy})`);
      const circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('r', W < 480 ? '8' : '10');
      const label = document.createElementNS(NS, 'text');
      label.setAttribute('y', '3.5');
      if (W < 480) label.setAttribute('font-size', '9');
      label.textContent = String(i + 1);
      g.append(circle, label);
      g.addEventListener('click', () => select(c.id));
      g.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          select(c.id);
        }
      });
      svg.append(g);
    });

    // Ranked list: top ten first, the rest on request.
    list.replaceChildren();
    const limit = showAll ? cases.length : 10;
    cases.slice(0, limit).forEach((c, i) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.id = c.id;
      const n = document.createElement('span');
      n.className = 'n';
      n.textContent = String(i + 1);
      const t = document.createElement('span');
      t.textContent = c.t;
      const q = document.createElement('span');
      q.className = 'q';
      q.textContent = copy.quadrants[c.q as keyof Copy['quadrants']];
      btn.append(n, t, q);
      btn.addEventListener('click', () => select(c.id));
      li.append(btn);
      list.append(li);
    });

    more.hidden = cases.length <= 10;
    more.textContent = showAll ? copy.showFewer : fill(copy.showAll, { n: String(cases.length) });
    select(selected);
  };

  const more = document.createElement('button');
  more.type = 'button';
  more.className = 'btn btn-quiet aom-more';
  more.addEventListener('click', () => {
    showAll = !showAll;
    draw();
  });
  list.after(more);

  onInput(root, draw);
  onResize(svg, draw);
  draw();
}
