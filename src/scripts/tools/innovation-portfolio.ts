import { $, fill, formatters, h, langOf, onInput, readCopy } from './util';

type T = 'core' | 'adjacent' | 'new';

interface Copy {
  types: Record<T, string>;
  hints: Record<T, string>;
  you: string;
  target: string;
  empty: string;
  balanced: string;
  tooMuch: string;
  tooLittle: string;
  tooLittleCore: string;
  initiatives: string;
  largest: string;
  targets: Record<string, [number, number, number]>;
}

const ORDER: T[] = ['core', 'adjacent', 'new'];
const WEIGHT: Record<string, number> = { s: 1, m: 3, l: 8 };

export function setupInnovationPortfolio(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const val = (n: string) => ($<HTMLInputElement | HTMLSelectElement>(root, `[name="${n}"]`)?.value ?? '').trim();

  const update = () => {
    const ideas = Array.from({ length: 8 }, (_, i) => ({ name: val(`n${i}`), type: val(`t${i}`) as T, w: WEIGHT[val(`s${i}`)] ?? 1 })).filter((x) => x.name);
    const total = ideas.reduce((a, x) => a + x.w, 0);
    const target = copy.targets[val('stance')] ?? copy.targets.balanced;
    const verdict = $(root, '[data-verdict]');
    const mix = $(root, '[data-mix]');
    $(root, '[data-out="count"]').textContent = fill(copy.initiatives, { n: String(ideas.length) });

    if (!total) {
      verdict.textContent = copy.empty;
      verdict.className = 'verdict';
      mix.replaceChildren();
      $(root, '[data-out="largest"]').textContent = '';
      return;
    }
    const biggest = ideas.reduce((a, x) => (x.w > a.w ? x : a));
    $(root, '[data-out="largest"]').textContent = fill(copy.largest, { name: biggest.name });

    const rows = ORDER.map((t, i) => {
      const share = ideas.filter((x) => x.type === t).reduce((a, x) => a + x.w, 0) / total;
      return { t, share, target: target[i] / 100, gap: share - target[i] / 100 };
    });
    const worst = rows.reduce((a, r) => (Math.abs(r.gap) > Math.abs(a.gap) ? r : a));
    if (Math.abs(worst.gap) < 0.1) {
      verdict.textContent = copy.balanced;
      verdict.className = 'verdict good';
    } else {
      verdict.textContent = fill(worst.gap > 0 ? copy.tooMuch : worst.t === 'core' ? copy.tooLittleCore : copy.tooLittle, {
        v: f.pct(worst.share),
        type: copy.types[worst.t].toLowerCase(),
        t: f.pct(worst.target),
      });
      verdict.className = 'verdict warn';
    }

    mix.replaceChildren(
      ...rows.map((r) => {
        const bar = h('div', { class: 'ip-bar' }, h('i', { style: `width:${Math.min(100, r.share * 100)}%` }), h('b', { style: `left:${r.target * 100}%` }));
        return h(
          'div',
          { class: `ip-type${Math.abs(r.gap) >= 0.1 && r.t === worst.t ? ' is-off' : ''}` },
          h('div', { class: 'ip-head' }, h('span', { class: 'ip-name' }, copy.types[r.t]), h('span', { class: 'ip-hint' }, copy.hints[r.t])),
          bar,
          h('div', { class: 'ip-legend' }, `${fill(copy.you, { v: f.pct(r.share) })}, ${fill(copy.target, { v: f.pct(r.target) }).toLowerCase()}`),
        );
      }),
    );
  };

  onInput(root, update);
  update();
}
