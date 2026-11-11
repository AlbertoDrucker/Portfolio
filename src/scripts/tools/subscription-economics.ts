import { $, $$, fill, formatters, langOf, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';

interface Copy {
  months: string;
  members: string;
  ratio: string;
  shrinking: string;
  losing: string;
  thin: string;
  good: string;
  lever: string;
  ceilingRef: string;
  monthShort: string;
  chartAria: string;
  presets: Record<string, Record<string, number>>;
}

/** Value of one member: monthly margin times the average months they stay. */
export const memberValue = (price: number, cost: number, churn: number) => (churn > 0 ? (price - cost) / churn : Infinity);

export function setupSubscriptionEconomics(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg = $<SVGSVGElement>(root, '[data-chart]');

  const update = () => {
    const currency = $<HTMLSelectElement>(root, '[name="currency"]').value;
    const price = numVal(input('price'));
    const members = numVal(input('members'));
    const joins = numVal(input('joins'));
    const churn = Math.max(0.001, numVal(input('churn')) / 100);
    const cost = numVal(input('cost'));
    const cac = numVal(input('cac'));

    const life = 1 / churn;
    const ltv = memberValue(price, cost, churn);
    const ceiling = joins / churn;
    const ratio = cac > 0 ? ltv / cac : Infinity;

    out('churn').textContent = f.pct(churn, 1);
    out('mrr').textContent = f.money(price * members, currency, price * members >= 1e6);
    out('life').textContent = fill(copy.months, { n: f.num(life, 1) });
    out('ceiling').textContent = fill(copy.members, { n: f.num(Math.round(ceiling)) });
    out('ltv').textContent = Number.isFinite(ratio) ? fill(copy.ratio, { m: f.money(ltv, currency), r: f.num(ratio, 1) }) : f.money(ltv, currency);

    const verdict = $(root, '[data-verdict]');
    const [msg, cls] =
      ratio < 1
        ? [copy.losing, 'bad']
        : members > ceiling * 1.03
          ? [fill(copy.shrinking, { n: f.num(Math.round(ceiling)) }), 'warn']
          : ratio < 3
            ? [copy.thin, 'warn']
            : [copy.good, 'good'];
    verdict.textContent = msg;
    verdict.className = `verdict ${cls}`;

    const better = Math.max(0.001, churn - 0.01);
    out('lever').textContent = fill(copy.lever, {
      n: f.num(Math.round(joins / better - ceiling)),
      m: f.money(memberValue(price, cost, better) - ltv, currency),
    });

    const pts: [number, number][] = [];
    let m = members;
    for (let k = 0; k <= 24; k++) {
      pts.push([k, m]);
      m = m * (1 - churn) + joins;
    }
    drawLineChart(svg, {
      series: [{ points: pts, cls: 's-c1', area: true }],
      x: [0, 24],
      xTicks: [0, 6, 12, 18, 24],
      xFmt: (v) => fill(copy.monthShort, { n: String(v) }),
      yFmt: (v) => f.compact(v),
      refs: [{ y: ceiling, label: copy.ceilingRef }],
      ariaLabel: copy.chartAria,
    });
  };

  $$<HTMLButtonElement>(root, '[data-preset]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const p = copy.presets[btn.dataset.preset ?? ''];
      if (!p) return;
      Object.entries(p).forEach(([k, v]) => (input(k).value = String(v)));
      update();
    }),
  );
  onInput(root, update);
  onResize(svg, update);
  update();
}
