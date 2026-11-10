import { $, $$, fill, formatters, langOf, numVal, onInput, readCopy } from './util';
import type { MarketPreset } from '../../content/tools/market-sizing';

interface Copy {
  chain: string;
  believe: string;
  over: string;
  high: string;
  mid: string;
  low: string;
  presets: MarketPreset[];
}

const NS = 'http://www.w3.org/2000/svg';

export function setupMarketSizing(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (name: string) => $<HTMLInputElement>(root, `[name="${name}"]`);
  const out = (key: string) => $(root, `[data-out="${key}"]`);
  const svg = $<SVGSVGElement>(root, '[data-squares]');
  let currency = 'MXN';

  const drawSquares = (tam: number, sam: number, som: number, labels: string[]) => {
    svg.replaceChildren();
    const size = 300;
    const o = 10;
    const side = (v: number) => (tam > 0 ? Math.max(3, size * Math.sqrt(Math.max(0, v) / tam)) : 0);
    const rects = [
      { s: size, cls: 'sq-tam' },
      { s: side(sam), cls: 'sq-sam' },
      { s: side(som), cls: 'sq-som' },
    ];
    rects.forEach((r) => {
      const rect = document.createElementNS(NS, 'rect');
      rect.setAttribute('x', String(o));
      rect.setAttribute('y', String(o + size - r.s));
      rect.setAttribute('width', String(r.s));
      rect.setAttribute('height', String(r.s));
      rect.setAttribute('class', r.cls);
      svg.append(rect);
    });
    const text = (x: number, y: number, t: string, strong = false) => {
      const el = document.createElementNS(NS, 'text');
      el.setAttribute('x', String(x));
      el.setAttribute('y', String(y));
      if (strong) el.setAttribute('class', 'sq-label-strong');
      el.textContent = t;
      svg.append(el);
    };
    text(o + 10, o + 20, labels[0]);
    const samTop = o + size - rects[1].s;
    if (rects[1].s > 70) text(o + 10, samTop + 20, labels[1], true);
    else text(o + rects[1].s + 8, samTop + 12, labels[1], true);
    const somTop = o + size - rects[2].s;
    text(o + rects[2].s + 8, Math.max(somTop + 12, samTop + 40), labels[2], true);
  };

  const update = () => {
    const buyers = numVal(input('buyers'));
    const fit = numVal(input('fit')) / 100;
    const reach = numVal(input('reach')) / 100;
    const freq = numVal(input('freq'));
    const price = numVal(input('price'));
    const share = numVal(input('share')) / 100;
    const goal = numVal(input('goal'));

    const tam = buyers * freq * price;
    const sam = tam * fit * reach;
    const som = sam * share;
    const reachable = buyers * fit * reach;
    const customers = reachable * share;
    const perCustomer = freq * price;

    out('fit').textContent = f.pct(fit);
    out('reach').textContent = f.pct(reach);
    out('share').textContent = f.pct(share, 1);
    out('tam').textContent = f.money(tam, currency, true);
    out('sam').textContent = f.money(sam, currency, true);
    out('som').textContent = f.money(som, currency, true);
    out('customers').textContent = f.compact(customers);

    out('chain').textContent = fill(copy.chain, {
      buyers: f.compact(buyers),
      fit: f.pct(fit),
      reach: f.pct(reach),
      freq: f.num(freq, 1),
      price: f.money(price, currency),
    });

    drawSquares(tam, sam, som, ['TAM', 'SAM', 'SOM']);

    const needShare = sam > 0 ? goal / sam : Infinity;
    const needCustomers = perCustomer > 0 ? goal / perCustomer : 0;
    out('believe').textContent = fill(copy.believe, {
      goal: f.money(goal, currency, true),
      share: Number.isFinite(needShare) ? f.pct(needShare, 1) : '–',
      customers: f.compact(needCustomers),
    });
    const verdict = $(root, '[data-verdict]');
    let msg = copy.low;
    let cls = 'good';
    if (needShare > 1) {
      msg = copy.over;
      cls = 'bad';
    } else if (needShare > 0.2) {
      msg = copy.high;
      cls = 'bad';
    } else if (needShare > 0.08) {
      msg = copy.mid;
      cls = 'warn';
    }
    verdict.textContent = msg;
    verdict.className = `verdict ${cls}`;
  };

  // Presets
  $$<HTMLButtonElement>(root, '[data-preset]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const p = copy.presets.find((x) => x.id === btn.dataset.preset);
      if (!p) return;
      $$<HTMLButtonElement>(root, '[data-preset]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      (['buyers', 'fit', 'reach', 'freq', 'price', 'share', 'goal'] as const).forEach((k) => {
        input(k).value = String(p[k]);
      });
      update();
    }),
  );

  // Currency is a label only: the model is currency agnostic.
  $$<HTMLButtonElement>(root, '[data-cur]').forEach((btn) =>
    btn.addEventListener('click', () => {
      currency = btn.dataset.cur ?? 'MXN';
      $$<HTMLButtonElement>(root, '[data-cur]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      update();
    }),
  );

  onInput(root, update);
  update();
}
