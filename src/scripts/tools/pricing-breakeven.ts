import { $, $$, fill, formatters, langOf, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';

interface Copy {
  units: string;
  perUnit: string;
  never: string;
  loss: string;
  thin: string;
  good: string;
  noChange: string;
  raise: string;
  cut: string;
  cutImpossible: string;
  today: string;
  chartAria: string;
}

export function setupPricingBreakeven(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg = $<SVGSVGElement>(root, '[data-chart]');
  const legendNew = $(root, '[data-legend-new]');
  let currency = 'MXN';

  const update = () => {
    const price = numVal(input('price'));
    const cost = numVal(input('cost'));
    const fixed = numVal(input('fixed'));
    const units = numVal(input('units'));
    const change = numVal(input('change')) / 100;

    const cm = price - cost;
    const be = cm > 0 ? fixed / cm : Infinity;
    const profit = cm * units - fixed;
    const newPrice = price * (1 + change);
    const cmNew = newPrice - cost;

    out('change').textContent = `${change > 0 ? '+' : ''}${f.pct(change)}`;
    out('margin').textContent = fill(copy.perUnit, { m: f.money(cm, currency), p: price > 0 ? f.pct(cm / price) : '0%' });
    out('breakeven').textContent = Number.isFinite(be) ? fill(copy.units, { n: f.num(Math.ceil(be)) }) : copy.never;
    out('profit').textContent = f.money(profit, currency);

    const verdict = $(root, '[data-verdict]');
    if (cm <= 0) {
      verdict.textContent = copy.loss;
      verdict.className = 'verdict bad';
    } else if (profit < 0) {
      verdict.textContent = fill(copy.thin, { n: f.num(Math.ceil(be - units)) });
      verdict.className = 'verdict warn';
    } else {
      verdict.textContent = fill(copy.good, { p: units > 0 ? f.pct(1 - be / units) : '0%' });
      verdict.className = 'verdict good';
    }

    const text = out('changeText');
    if (change === 0 || cm <= 0) text.textContent = copy.noChange;
    else if (cmNew <= 0) text.textContent = copy.cutImpossible;
    else if (change > 0) text.textContent = fill(copy.raise, { c: f.pct(change), v: f.pct(1 - cm / cmNew, 1) });
    else text.textContent = fill(copy.cut, { c: f.pct(-change), v: f.pct(cm / cmNew - 1, 1) });

    const maxU = Math.max(units * 2, Number.isFinite(be) ? be * 1.5 : 0, 10);
    const line = (m: number): [number, number][] => [
      [0, -fixed],
      [maxU, m * maxU - fixed],
    ];
    const series = [{ points: line(cm), cls: 's-c1' }];
    if (change !== 0) series.push({ points: line(cmNew), cls: 's-c2' });
    legendNew.hidden = change === 0;
    drawLineChart(svg, {
      series,
      x: [0, maxU],
      xFmt: (v) => f.compact(v),
      yFmt: (v) => f.money(v, currency, true),
      refs: [{ y: 0 }],
      markers: [{ x: units, y: profit, label: copy.today }],
      ariaLabel: copy.chartAria,
    });
  };

  $$<HTMLButtonElement>(root, '[data-cur]').forEach((btn) =>
    btn.addEventListener('click', () => {
      currency = btn.dataset.cur ?? 'MXN';
      $$(root, '[data-cur]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      update();
    }),
  );
  onInput(root, update);
  onResize(svg, update);
  update();
}
