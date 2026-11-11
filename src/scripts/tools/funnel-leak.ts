import { $, $$, fill, formatters, langOf, numVal, onInput, readCopy } from './util';

type Stage = 'lead' | 'close' | 'repeat';

interface Copy {
  stages: Record<Stage, string>;
  moves: Record<Stage, string>;
  you: string;
  typical: string;
  gain: string;
  ahead: string;
  leak: string;
  allGood: string;
  perMonth: string;
  refs: Record<string, Record<Stage, number>>;
}

const MAX: Record<Stage, number> = { lead: 30, close: 80, repeat: 95 };

/** Monthly revenue: new customers times the average sale, plus the repeat purchases they bring. */
export const funnelRevenue = (visitors: number, lead: number, close: number, repeat: number, ticket: number) =>
  visitors * lead * close * ticket * (1 + repeat);

export function setupFunnelLeak(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const stagesEl = $(root, '[data-stages]');
  let currency = 'MXN';

  const update = () => {
    const visitors = numVal(input('visitors'));
    const ticket = numVal(input('ticket'));
    const rate: Record<Stage, number> = {
      lead: numVal(input('lead')) / 100,
      close: numVal(input('close')) / 100,
      repeat: numVal(input('repeat')) / 100,
    };
    const ref = copy.refs[$<HTMLSelectElement>(root, '[name="type"]').value];
    const rev = (r: Record<Stage, number>) => funnelRevenue(visitors, r.lead, r.close, r.repeat, ticket);
    const base = rev(rate);

    (['lead', 'close', 'repeat'] as Stage[]).forEach((k) => (out(k).textContent = f.pct(rate[k], 1)));
    out('revenue').textContent = f.money(base, currency, base >= 1e6);
    out('customers').textContent = f.num(visitors * rate.lead * rate.close, 1);

    const gains = (['lead', 'close', 'repeat'] as Stage[]).map((k) => {
      const typical = ref[k] / 100;
      const gain = rate[k] < typical ? rev({ ...rate, [k]: typical }) - base : 0;
      return { k, typical, gain };
    });
    const worst = gains.reduce((a, b) => (b.gain > a.gain ? b : a));
    const allTypical = rev({
      lead: Math.max(rate.lead, ref.lead / 100),
      close: Math.max(rate.close, ref.close / 100),
      repeat: Math.max(rate.repeat, ref.repeat / 100),
    });
    out('upside').textContent = f.money(allTypical - base, currency, allTypical - base >= 1e6);

    const verdict = $(root, '[data-verdict]');
    if (worst.gain > 0) {
      verdict.textContent = fill(copy.leak, { stage: copy.stages[worst.k], m: f.money(worst.gain, currency, worst.gain >= 1e6) });
      verdict.className = 'verdict warn';
      out('move').textContent = copy.moves[worst.k];
    } else {
      verdict.textContent = copy.allGood;
      verdict.className = 'verdict good';
      out('move').textContent = '';
    }

    stagesEl.replaceChildren();
    gains.forEach(({ k, typical, gain }) => {
      const row = document.createElement('div');
      row.className = `fl-stage${gain > 0 && k === worst.k ? ' is-leak' : ''}`;
      const head = document.createElement('div');
      head.className = 'fl-head';
      const name = document.createElement('span');
      name.className = 'fl-name';
      name.textContent = copy.stages[k];
      const g = document.createElement('span');
      g.className = 'fl-gain';
      g.textContent = gain > 0 ? fill(copy.gain, { m: f.money(gain, currency, gain >= 1e6) }) : copy.ahead;
      head.append(name, g);
      const bar = document.createElement('div');
      bar.className = 'fl-bar';
      const fillEl = document.createElement('i');
      fillEl.style.width = `${Math.min(100, (rate[k] * 100 * 100) / MAX[k])}%`;
      const mark = document.createElement('b');
      mark.style.left = `${Math.min(100, (typical * 100 * 100) / MAX[k])}%`;
      bar.append(fillEl, mark);
      const legend = document.createElement('div');
      legend.className = 'fl-legend';
      const you = document.createElement('span');
      you.textContent = fill(copy.you, { v: f.pct(rate[k], 1) });
      const typ = document.createElement('span');
      typ.textContent = fill(copy.typical, { v: f.pct(typical, 1) });
      legend.append(you, typ);
      row.append(head, bar, legend);
      stagesEl.append(row);
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
  update();
}
