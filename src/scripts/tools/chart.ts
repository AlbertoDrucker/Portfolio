/** Minimal SVG line chart drawn at the element's real pixel width. */

const NS = 'http://www.w3.org/2000/svg';

export interface Series {
  points: [number, number][];
  cls: string;
  area?: boolean;
}

export interface ChartOptions {
  height?: number;
  series: Series[];
  x?: [number, number];
  y?: [number, number];
  xTicks?: number[];
  yTickCount?: number;
  xFmt?: (v: number) => string;
  yFmt?: (v: number) => string;
  refs?: { x?: number; y?: number; label?: string }[];
  markers?: { x: number; y: number; label?: string; anchor?: 'start' | 'middle' | 'end' }[];
  ariaLabel?: string;
}

function el<K extends keyof SVGElementTagNameMap>(name: K, attrs: Record<string, string | number> = {}) {
  const node = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
}

export function niceTicks(min: number, max: number, count = 5): number[] {
  if (min === max) max = min + 1;
  const span = max - min;
  const step0 = span / Math.max(1, count);
  const mag = Math.pow(10, Math.floor(Math.log10(step0)));
  const norm = step0 / mag;
  const step = (norm >= 5 ? 10 : norm >= 2 ? 5 : norm >= 1 ? 2 : 1) * mag;
  const start = Math.ceil(min / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= max + step * 1e-6; v += step) ticks.push(Number(v.toFixed(10)));
  return ticks;
}

export function drawLineChart(svg: SVGSVGElement, o: ChartOptions) {
  const W = Math.max(280, svg.clientWidth || svg.parentElement?.clientWidth || 640);
  const H = o.height ?? Math.round(Math.min(320, Math.max(220, W * 0.42)));
  const m = { top: 14, right: 18, bottom: 28, left: 64 };
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('height', String(H));
  svg.setAttribute('role', 'img');
  if (o.ariaLabel) svg.setAttribute('aria-label', o.ariaLabel);
  svg.replaceChildren();

  const all = o.series.flatMap((s) => s.points);
  const xs = all.map((p) => p[0]);
  const ys = all.map((p) => p[1]).concat((o.refs ?? []).flatMap((r) => (r.y === undefined ? [] : [r.y])));
  const [x0, x1] = o.x ?? [Math.min(...xs), Math.max(...xs)];
  let [y0, y1] = o.y ?? [Math.min(0, ...ys), Math.max(...ys)];
  if (!o.y) {
    const pad = (y1 - y0) * 0.08 || 1;
    y1 += pad;
    if (y0 < 0) y0 -= pad;
  }
  const sx = (v: number) => m.left + ((v - x0) / (x1 - x0 || 1)) * (W - m.left - m.right);
  const sy = (v: number) => H - m.bottom - ((v - y0) / (y1 - y0 || 1)) * (H - m.top - m.bottom);
  const xFmt = o.xFmt ?? ((v: number) => String(v));
  const yFmt = o.yFmt ?? ((v: number) => String(v));

  const grid = el('g', { class: 'grid' });
  const axis = el('g', { class: 'axis' });
  for (const t of niceTicks(y0, y1, o.yTickCount ?? 4)) {
    grid.append(el('line', { x1: m.left, x2: W - m.right, y1: sy(t), y2: sy(t) }));
    const label = el('text', { x: m.left - 8, y: sy(t) + 4, 'text-anchor': 'end' });
    label.textContent = yFmt(t);
    axis.append(label);
  }
  const xt = o.xTicks ?? niceTicks(x0, x1, Math.max(2, Math.floor(W / 110)));
  for (const t of xt) {
    if (t < x0 || t > x1) continue;
    const label = el('text', { x: sx(t), y: H - 8, 'text-anchor': 'middle' });
    label.textContent = xFmt(t);
    axis.append(label);
  }
  svg.append(grid, axis);

  for (const r of o.refs ?? []) {
    if (r.y !== undefined) {
      svg.append(el('line', { class: 'ref', x1: m.left, x2: W - m.right, y1: sy(r.y), y2: sy(r.y) }));
      if (r.label) {
        const t = el('text', { class: 'ref-label', x: W - m.right, y: sy(r.y) - 6, 'text-anchor': 'end' });
        t.textContent = r.label;
        svg.append(t);
      }
    }
    if (r.x !== undefined) {
      svg.append(el('line', { class: 'ref', y1: m.top, y2: H - m.bottom, x1: sx(r.x), x2: sx(r.x) }));
      if (r.label) {
        const t = el('text', { class: 'ref-label', x: sx(r.x) + 6, y: m.top + 10 });
        t.textContent = r.label;
        svg.append(t);
      }
    }
  }

  for (const s of o.series) {
    if (!s.points.length) continue;
    const d = s.points.map((p, i) => `${i ? 'L' : 'M'}${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join('');
    if (s.area) {
      const base = sy(Math.max(y0, 0));
      const first = s.points[0];
      const last = s.points[s.points.length - 1];
      svg.append(el('path', { class: 'area', d: `${d}L${sx(last[0])},${base}L${sx(first[0])},${base}Z` }));
    }
    svg.append(el('path', { class: `series ${s.cls}`, d }));
  }

  for (const mk of o.markers ?? []) {
    svg.append(el('circle', { class: 'marker', cx: sx(mk.x), cy: sy(mk.y), r: 4 }));
    if (mk.label) {
      const anchor = mk.anchor ?? (sx(mk.x) > W * 0.7 ? 'end' : 'start');
      const dx = anchor === 'end' ? -8 : anchor === 'start' ? 8 : 0;
      const t = el('text', { class: 'marker-label', x: sx(mk.x) + dx, y: sy(mk.y) - 9, 'text-anchor': anchor });
      t.textContent = mk.label;
      svg.append(t);
    }
  }
}
