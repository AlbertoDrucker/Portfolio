import { $, $$, fill, formatters, h, langOf, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';

interface Copy {
  never: string;
  good: string;
  thin: string;
  bad: string;
  volumeTrap: string;
  today: string;
  chartAria: string;
  units: string;
  bridge: { base: string; extra: string; discount: string; lost: string; fixed: string; net: string };
}

export interface PromoInputs {
  baseUnits: number;
  price: number;
  cost: number;
  discount: number;
  uplift: number;
  leak: number;
  fixed: number;
}

/**
 * Promotion economics. `leak` is the share of extra units that are not truly new:
 * taken from the brand's other products or pulled forward from later weeks.
 */
export function promoResult(i: PromoInputs) {
  const margin = i.price - i.cost;
  const promoMargin = i.price * (1 - i.discount) - i.cost;
  const extra = i.baseUnits * i.uplift;
  const without = i.baseUnits * margin;
  const parts = {
    extra: extra * promoMargin,
    discount: -i.baseUnits * i.price * i.discount,
    lost: -extra * i.leak * margin,
    fixed: -i.fixed,
  };
  const added = parts.extra + parts.discount + parts.lost + parts.fixed;
  const spend = (i.baseUnits + extra) * i.price * i.discount + i.fixed;
  const perLift = i.baseUnits * (promoMargin - i.leak * margin);
  const breakeven = perLift > 0 ? (i.baseUnits * i.price * i.discount + i.fixed) / perLift : Infinity;
  return { without, parts, added, spend, roi: spend > 0 ? added / spend : 0, breakeven, extra, trueNew: extra * (1 - i.leak) };
}

export function setupPromoRoi(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg = $<SVGSVGElement>(root, '[data-chart]');
  let currency = 'MXN';

  const update = () => {
    const pctOf = (n: string) => numVal(input(n)) / 100;
    const i: PromoInputs = {
      baseUnits: numVal(input('base')) * Math.max(1, numVal(input('weeks'))),
      price: numVal(input('price')),
      cost: numVal(input('cost')),
      discount: pctOf('discount'),
      uplift: pctOf('uplift'),
      leak: Math.min(1, pctOf('cannibal') + pctOf('forward')),
      fixed: numVal(input('fixed')),
    };
    const r = promoResult(i);
    const money = (v: number) => f.money(v, currency, Math.abs(v) >= 1e6);

    ['discount', 'uplift', 'cannibal', 'forward'].forEach((k) => (out(k).textContent = f.pct(pctOf(k))));
    out('profit').textContent = money(r.added);
    out('roi').textContent = f.pct(r.roi);
    out('breakeven').textContent = Number.isFinite(r.breakeven) ? f.pct(r.breakeven) : copy.never;
    out('trueUnits').textContent = f.num(r.trueNew);

    const verdict = $(root, '[data-verdict]');
    const be = Number.isFinite(r.breakeven) ? f.pct(r.breakeven) : copy.never;
    if (r.added <= 0) {
      verdict.textContent = fill(copy.bad, { m: money(-r.added), u: f.num(r.extra), b: be });
      verdict.className = 'verdict bad';
    } else if (i.uplift < r.breakeven * 1.25) {
      verdict.textContent = copy.thin;
      verdict.className = 'verdict warn';
    } else {
      verdict.textContent = fill(copy.good, { r: f.num(1 + r.roi, 2) });
      verdict.className = 'verdict good';
    }
    out('trap').textContent = i.leak > 0 && r.extra > 0 ? fill(copy.volumeTrap, { v: f.pct(i.uplift), t: f.num(r.trueNew) }) : '';

    const pts: [number, number][] = [];
    for (let u = 0; u <= 200; u += 5) pts.push([u, promoResult({ ...i, uplift: u / 100 }).added]);
    drawLineChart(svg, {
      series: [{ points: pts, cls: 's-c1' }],
      x: [0, 200],
      xTicks: [0, 50, 100, 150, 200],
      xFmt: (v) => `${v}%`,
      yFmt: (v) => f.money(v, currency, true),
      refs: [{ y: 0 }],
      markers: [{ x: i.uplift * 100, y: r.added, label: copy.today }],
      ariaLabel: copy.chartAria,
    });

    const row = (label: string, v: number, signed = true) => h('tr', null, h('td', null, label), h('td', null, `${signed && v > 0 ? '+' : ''}${f.money(v, currency)}`));
    $(root, '[data-bridge]').replaceChildren(
      row(copy.bridge.base, r.without, false),
      row(copy.bridge.extra, r.parts.extra),
      row(copy.bridge.discount, r.parts.discount),
      row(copy.bridge.lost, r.parts.lost),
      row(copy.bridge.fixed, r.parts.fixed),
      row(copy.bridge.net, r.without + r.added, false),
    );
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
