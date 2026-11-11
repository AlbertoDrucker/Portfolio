import { $, $$, fill, formatters, langOf, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';
import type { MixChannel } from '../../content/tools/marketing-mix';

interface Copy {
  perPeso: string;
  range: string;
  optimized: string;
  balanced: string;
  unbalanced: string;
  chartAria: string;
  channels: MixChannel[];
}

const response = (s: number, a: number, k: number) => a * (1 - Math.exp(-s / k));
const marginal = (s: number, a: number, k: number) => (a / k) * Math.exp(-s / k);

/** Greedy allocation: every slice goes where the next peso earns the most. Optimal for concave curves. */
export function optimizeMix(budget: number, params: { a: number; k: number }[], slices = 600): number[] {
  const spend = params.map(() => 0);
  const step = budget / slices;
  for (let i = 0; i < slices; i++) {
    let best = 0;
    let bestM = -Infinity;
    params.forEach((p, j) => {
      const m = marginal(spend[j] + step / 2, p.a, p.k);
      if (m > bestM) {
        bestM = m;
        best = j;
      }
    });
    spend[best] += step;
  }
  return spend;
}

export function setupMarketingMix(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const chans = copy.channels;
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg = $<SVGSVGElement>(root, '[data-chart]');
  const cls = ['s-c1', 's-c2', 's-c3', 's-c4'];
  let lastGain: { gain: number; pct: number; from: string; to: string } | null = null;

  const params = () => chans.map((c) => ({ a: numVal(input(`a-${c.id}`), c.ceiling), k: Math.max(1, numVal(input(`k-${c.id}`), c.saturation)) }));

  const currentSpend = (budget: number) => {
    const w = chans.map((c) => numVal(input(`w-${c.id}`)));
    const total = w.reduce((s, x) => s + x, 0) || 1;
    return w.map((x) => (x / total) * budget);
  };

  const update = () => {
    const budget = Math.max(0, numVal(input('budget')));
    const p = params();
    const spend = currentSpend(budget);
    const rev = spend.map((s, i) => response(s, p[i].a, p[i].k));
    const mr = spend.map((s, i) => marginal(s, p[i].a, p[i].k));
    const totalRev = rev.reduce((s, x) => s + x, 0);

    chans.forEach((c, i) => {
      $(root, `[data-share="${c.id}"]`).textContent = budget > 0 ? f.pct(spend[i] / budget) : '0%';
    });

    out('revenue').textContent = f.money(totalRev, 'MXN', true);
    out('roas').textContent = budget > 0 ? f.num(totalRev / budget, 2) : '–';
    const funded = mr.filter((_, i) => spend[i] > 0);
    const hi = Math.max(...mr);
    const lo = Math.min(...(funded.length ? funded : mr));
    out('marginal').textContent = fill(copy.range, { lo: f.num(lo, 2), hi: f.num(hi, 2) });

    const rows = $(root, '[data-rows]');
    rows.replaceChildren();
    chans.forEach((c, i) => {
      const tr = document.createElement('tr');
      [c.name, f.money(spend[i], 'MXN', true), f.money(rev[i], 'MXN', true), f.num(mr[i], 2)].forEach((t) => {
        const td = document.createElement('td');
        td.textContent = t;
        tr.append(td);
      });
      rows.append(tr);
    });

    const verdict = $(root, '[data-verdict]');
    const bestIdx = mr.indexOf(hi);
    const worstIdx = mr.indexOf(lo);
    const balanced = hi - lo < 0.06 * Math.max(hi, 0.01);
    if (lastGain && lastGain.gain > 0) {
      verdict.textContent = fill(copy.optimized, {
        gain: f.money(lastGain.gain, 'MXN', true),
        pct: f.pct(lastGain.pct, 1),
        from: lastGain.from,
        to: lastGain.to,
      });
      verdict.className = 'verdict good';
    } else if (balanced) {
      verdict.textContent = copy.balanced;
      verdict.className = 'verdict good';
    } else {
      verdict.textContent = fill(copy.unbalanced, {
        hi: f.num(hi, 2),
        lo: f.num(lo, 2),
        best: chans[bestIdx].name,
        worst: chans[worstIdx].name,
      });
      verdict.className = 'verdict warn';
    }

    const xMax = Math.max(budget, 1);
    const series = p.map((pp, i) => {
      const pts: [number, number][] = [];
      for (let j = 0; j <= 60; j++) {
        const s = (xMax * j) / 60;
        pts.push([s, response(s, pp.a, pp.k)]);
      }
      return { points: pts, cls: cls[i] };
    });
    drawLineChart(svg, {
      series,
      x: [0, xMax],
      xFmt: (v) => f.money(v, 'MXN', true),
      yFmt: (v) => f.money(v, 'MXN', true),
      markers: spend.map((s, i) => ({ x: s, y: rev[i] })),
      ariaLabel: copy.chartAria,
    });
  };

  $(root, '[data-optimize]').addEventListener('click', () => {
    const budget = Math.max(0, numVal(input('budget')));
    const p = params();
    const before = currentSpend(budget);
    const beforeRev = before.reduce((s, x, i) => s + response(x, p[i].a, p[i].k), 0);
    const best = optimizeMix(budget, p);
    const afterRev = best.reduce((s, x, i) => s + response(x, p[i].a, p[i].k), 0);
    const delta = best.map((b, i) => b - before[i]);
    const from = chans[delta.indexOf(Math.min(...delta))].name;
    const to = chans[delta.indexOf(Math.max(...delta))].name;
    chans.forEach((c, i) => (input(`w-${c.id}`).value = String(budget > 0 ? Math.round((best[i] / budget) * 1000) / 10 : 25)));
    lastGain = { gain: afterRev - beforeRev, pct: beforeRev > 0 ? (afterRev - beforeRev) / beforeRev : 0, from, to };
    update();
  });

  $(root, '[data-reset]').addEventListener('click', () => {
    chans.forEach((c) => (input(`w-${c.id}`).value = String(c.share)));
    lastGain = null;
    update();
  });

  // Any manual change clears the optimizer message.
  root.addEventListener('input', () => {
    lastGain = null;
  });
  onInput(root, update);
  onResize(svg, update);
  update();
}
