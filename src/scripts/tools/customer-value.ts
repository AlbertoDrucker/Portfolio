import { $, $$, fill, formatters, langOf, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';

interface Copy {
  months: string;
  years: string;
  never: string;
  paybackLabel: string;
  youAreHere: string;
  lever: string;
  bad: string;
  thin: string;
  good: string;
  great: string;
  chart1Aria: string;
  chart2Aria: string;
  yearShort: string;
}

/** Lifetime value with the first year counted in full and later years discounted and retained. */
export const lifetimeValue = (annualMargin: number, r: number, d: number) =>
  r >= 1 + d ? Infinity : (annualMargin * (1 + d)) / (1 + d - r);

export function setupCustomerValue(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg1 = $<SVGSVGElement>(root, '[data-chart1]');
  const svg2 = $<SVGSVGElement>(root, '[data-chart2]');
  let currency = 'MXN';

  const update = () => {
    const aov = numVal(input('aov'));
    const orders = numVal(input('orders'));
    const margin = numVal(input('margin')) / 100;
    const r = numVal(input('retention')) / 100;
    const d = numVal(input('discount')) / 100;
    const cac = numVal(input('cac'));

    out('margin').textContent = f.pct(margin);
    out('retention').textContent = f.pct(r);
    out('discount').textContent = f.pct(d);

    const m = aov * orders * margin;
    const clv = lifetimeValue(m, r, d);
    const ratio = cac > 0 ? clv / cac : Infinity;
    const life = 1 / (1 - r);

    // Monthly expected value curve over ten years.
    const rm = Math.pow(r, 1 / 12);
    const dm = Math.pow(1 + d, 1 / 12);
    let cum = 0;
    let payback = -1;
    const pts: [number, number][] = [[0, 0]];
    for (let k = 0; k < 120; k++) {
      cum += (m / 12) * Math.pow(rm, k) / Math.pow(dm, k);
      pts.push([k + 1, cum]);
      if (payback < 0 && cum >= cac) payback = k + 1;
    }

    out('clv').textContent = f.money(clv, currency);
    out('ratio').textContent = Number.isFinite(ratio) ? `${f.num(ratio, 1)} : 1` : '–';
    out('payback').textContent = payback > 0 ? fill(copy.months, { n: String(payback) }) : copy.never;
    out('life').textContent = fill(copy.years, { n: f.num(life, 1) });

    const verdict = $(root, '[data-verdict]');
    const [msg, cls] =
      ratio < 1 ? [copy.bad, 'bad'] : ratio < 3 ? [copy.thin, 'warn'] : ratio < 5 ? [copy.good, 'good'] : [copy.great, 'good'];
    verdict.textContent = msg;
    verdict.className = `verdict ${cls}`;

    const money = (v: number) => f.money(v, currency, true);

    drawLineChart(svg1, {
      series: [{ points: pts, cls: 's-main', area: true }],
      x: [0, 120],
      xTicks: [0, 24, 48, 72, 96, 120],
      xFmt: (v) => fill(copy.yearShort, { n: String(v / 12) }),
      yFmt: money,
      refs: [{ y: cac }],
      markers: payback > 0 ? [{ x: payback, y: cac, label: fill(copy.paybackLabel, { n: String(payback) }) }] : [],
      ariaLabel: copy.chart1Aria,
    });

    const curve: [number, number][] = [];
    for (let x = 50; x <= 97; x += 1) curve.push([x, lifetimeValue(m, x / 100, d)]);
    const here = Math.min(97, Math.max(50, r * 100));
    drawLineChart(svg2, {
      series: [{ points: curve, cls: 's-main' }],
      x: [50, 97],
      xTicks: [50, 60, 70, 80, 90],
      xFmt: (v) => `${v}%`,
      yFmt: money,
      refs: [{ y: cac }],
      markers: [{ x: here, y: lifetimeValue(m, here / 100, d), label: copy.youAreHere }],
      ariaLabel: copy.chart2Aria,
    });

    // Retention lever: five more points kept. Price lever: five percent higher price, unit cost flat.
    const plusRet = lifetimeValue(m, Math.min(0.99, r + 0.05), d) - clv;
    const mPrice = (aov * 1.05 - aov * (1 - margin)) * orders;
    const plusPrice = lifetimeValue(mPrice, r, d) - clv;
    out('lever').textContent = fill(copy.lever, {
      ret: f.money(plusRet, currency),
      price: f.money(plusPrice, currency),
    });
  };

  $$<HTMLButtonElement>(root, '[data-cur]').forEach((btn) =>
    btn.addEventListener('click', () => {
      currency = btn.dataset.cur ?? 'MXN';
      $$<HTMLButtonElement>(root, '[data-cur]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      update();
    }),
  );

  onInput(root, update);
  onResize(svg1, update);
  update();
}
