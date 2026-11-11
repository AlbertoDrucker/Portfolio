import { $, $$, fill, formatters, h, langOf, numVal, onInput, readCopy } from './util';

type Channel = 'rep' | 'phone' | 'chat' | 'portal';
const KEYS: Channel[] = ['rep', 'phone', 'chat', 'portal'];

interface Copy {
  perOrder: string;
  perYear: string;
  fewer: string;
  verdict: string;
  noShift: string;
  biggest: string;
  today: string;
  target: string;
  channels: Record<Channel, string>;
  colors: string[];
}

/** Moves the portal to `target` and shrinks the other channels in proportion. */
export function shiftMix(mix: Record<Channel, number>, target: number): Record<Channel, number> {
  const t = Math.max(mix.portal, target);
  const rest = 1 - mix.portal;
  const scale = rest > 0 ? (1 - t) / rest : 0;
  return { rep: mix.rep * scale, phone: mix.phone * scale, chat: mix.chat * scale, portal: t };
}

export function setupOrderChannels(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  let currency = 'MXN';

  const update = () => {
    const orders = numVal(input('orders'));
    const errorCost = numVal(input('errorCost'));
    const weights = KEYS.map((k) => numVal(input(`share-${k}`)));
    const total = weights.reduce((a, b) => a + b, 0) || 1;
    const mix = Object.fromEntries(KEYS.map((k, i) => [k, weights[i] / total])) as Record<Channel, number>;
    const target = numVal(input('target')) / 100;
    const goal = shiftMix(mix, target);
    const cost = Object.fromEntries(KEYS.map((k) => [k, numVal(input(`cost-${k}`))])) as Record<Channel, number>;
    const err = Object.fromEntries(KEYS.map((k) => [k, numVal(input(`error-${k}`)) / 100])) as Record<Channel, number>;
    const full = (k: Channel) => cost[k] + err[k] * errorCost;
    const perOrder = (m: Record<Channel, number>) => KEYS.reduce((s, k) => s + m[k] * full(k), 0);
    const errorsOf = (m: Record<Channel, number>) => KEYS.reduce((s, k) => s + m[k] * err[k] * orders, 0);
    const a = perOrder(mix);
    const b = perOrder(goal);
    const saved = (a - b) * orders * 12;
    const fewer = errorsOf(mix) - errorsOf(goal);

    KEYS.forEach((k) => (out(`share-${k}`).textContent = f.pct(mix[k])));
    out('target').textContent = f.pct(goal.portal);
    out('costToday').textContent = f.money(a, currency);
    out('costTarget').textContent = f.money(b, currency);
    out('saving').textContent = f.money(saved, currency, saved >= 1e6);
    out('errors').textContent = f.num(fewer);

    const verdict = $(root, '[data-verdict]');
    if (goal.portal > mix.portal + 0.001) {
      verdict.textContent = fill(copy.verdict, { a: f.pct(mix.portal), b: f.pct(goal.portal), p: f.pct(a ? 1 - b / a : 0), n: f.num(fewer) });
      verdict.className = 'verdict good';
    } else {
      verdict.textContent = copy.noShift;
      verdict.className = 'verdict';
    }
    const worst = KEYS.filter((k) => mix[k] > 0.02).reduce((x, y) => (full(y) > full(x) ? y : x), 'portal' as Channel);
    out('biggest').textContent = fill(copy.biggest, { ch: copy.channels[worst], m: f.money(full(worst), currency) });

    const bar = (label: string, m: Record<Channel, number>) =>
      h(
        'div',
        { class: 'oc-bar-row' },
        h('span', null, label),
        h('div', { class: 'oc-bar', role: 'img', 'aria-label': `${label}: ${KEYS.map((k) => `${copy.channels[k]} ${f.pct(m[k])}`).join(', ')}` }, KEYS.map((k, i) => h('span', { style: `width:${m[k] * 100}%;background:${copy.colors[i]}` }, m[k] >= 0.08 ? f.pct(m[k]) : ''))),
      );
    $(root, '[data-bars]').replaceChildren(bar(copy.today, mix), bar(copy.target, goal));

    $(root, '[data-rows]').replaceChildren(
      ...KEYS.map((k) =>
        h(
          'tr',
          null,
          h('td', null, copy.channels[k]),
          h('td', null, f.pct(mix[k])),
          h('td', null, f.pct(goal[k])),
          h('td', null, f.money(mix[k] * orders * cost[k], currency)),
          h('td', null, f.money(mix[k] * orders * err[k] * errorCost, currency)),
        ),
      ),
    );
  };

  $$<HTMLButtonElement>(root, '[data-cur]').forEach((btn) =>
    btn.addEventListener('click', () => {
      currency = btn.dataset.cur ?? 'MXN';
      $$(root, '[data-cur]').forEach((x) => x.setAttribute('aria-pressed', String(x === btn)));
      update();
    }),
  );
  onInput(root, update);
  update();
}
