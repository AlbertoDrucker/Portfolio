import { $, $$, fill, formatters, langOf, numVal, onInput, onResize, readCopy } from './util';

interface Copy {
  yourWalk: string;
  theirWalk: string;
  target: string;
  open: string;
  zopa: string;
  noZone: string;
  noZoneVerdict: string;
  targetOutside: string;
  healthy: string;
  move: string;
  finalMove: string;
  noBatna: string;
  batnaEcho: string;
  roomValue: string;
  range: string;
}

const NS = 'http://www.w3.org/2000/svg';
const defaults = {
  sell: { yourWalk: 420000, target: 500000, theirWalk: 540000 },
  buy: { yourWalk: 540000, target: 460000, theirWalk: 430000 },
};

export function setupNegotiation(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg = $<SVGSVGElement>(root, '[data-line]');
  let role: 'sell' | 'buy' = 'sell';
  let currency = 'MXN';

  const node = (name: string, attrs: Record<string, string | number>, text?: string) => {
    const el = document.createElementNS(NS, name);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
    if (text) el.textContent = text;
    svg.append(el);
    return el;
  };

  const update = () => {
    const yourWalk = numVal(input('yourWalk'));
    const target = numVal(input('target'));
    const theirWalk = numVal(input('theirWalk'));
    const n = numVal(input('steps'), 4);
    const batna = input('batna').value.trim();
    const sell = role === 'sell';
    out('steps').textContent = String(n);

    const hasZone = sell ? theirWalk >= yourWalk : yourWalk >= theirWalk;
    const lo = Math.min(yourWalk, theirWalk);
    const hi = Math.max(yourWalk, theirWalk);
    const targetInside = sell ? target <= theirWalk : target >= theirWalk;
    // Anchor just beyond their likely limit, never less ambitious than the target.
    const rawOpen = sell ? Math.max(target * 1.08, theirWalk * 1.03) : Math.min(target * 0.92, theirWalk * 0.97);
    // Round to a number a person would actually say out loud.
    const unit = Math.pow(10, Math.max(0, Math.floor(Math.log10(Math.abs(rawOpen - target) || 1)) - 1));
    const round = (v: number) => Math.round(v / unit) * unit;
    const open = round(rawOpen);
    const money = (v: number) => f.money(v, currency, true);

    out('zone').textContent = hasZone ? fill(copy.range, { lo: money(lo), hi: money(hi) }) : copy.noZone;
    out('open').textContent = money(open);
    out('room').textContent = hasZone ? money(hi - lo) : '–';

    // Verdict
    const v = $(root, '[data-verdict]');
    if (!hasZone) {
      v.textContent = copy.noZoneVerdict;
      v.className = 'verdict bad';
    } else if (!targetInside) {
      v.textContent = copy.targetOutside;
      v.className = 'verdict warn';
    } else {
      v.textContent = copy.healthy;
      v.className = 'verdict good';
    }

    // Concession plan: each step half the size of the one before.
    const plan = $(root, '[data-plan]');
    plan.replaceChildren();
    const total = target - open;
    const denom = Math.pow(2, n) - 1;
    let value = open;
    const first = document.createElement('li');
    first.textContent = `${copy.open}: ${f.money(open, currency)}`;
    first.setAttribute('data-v', String(open));
    plan.append(first);
    for (let i = 0; i < n; i++) {
      const step = (total * Math.pow(2, n - 1 - i)) / denom;
      value += step;
      if (i < n - 1) value = round(value);
      const li = document.createElement('li');
      const label = i === n - 1 ? fill(copy.finalMove, { value: f.money(target, currency) }) : fill(copy.move, { n: String(i + 1), value: f.money(value, currency) });
      li.append(label);
      const delta = document.createElement('span');
      const prev = i === 0 ? open : Number(plan.lastElementChild?.getAttribute('data-v'));
      const shown = i === n - 1 ? target : value;
      li.setAttribute('data-v', String(shown));
      delta.textContent = `${shown - prev >= 0 ? '+' : '−'}${f.money(Math.abs(shown - prev), currency)}`;
      li.append(delta);
      plan.append(li);
    }

    $(root, '[data-batna]').textContent = batna ? fill(copy.batnaEcho, { batna }) : copy.noBatna;

    // Number line
    svg.replaceChildren();
    const W = Math.max(300, svg.clientWidth || 600);
    const H = 130;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('height', String(H));
    const vals = [yourWalk, target, theirWalk, open];
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const pad = (max - min) * 0.12 || max * 0.1 || 1;
    const x = (val: number) => 16 + ((val - (min - pad)) / (max - min + 2 * pad)) * (W - 32);
    const axisY = 66;
    node('line', { class: 'np-axis', x1: 16, x2: W - 16, y1: axisY, y2: axisY });
    node('rect', { class: hasZone ? 'np-zone' : 'np-gap', x: x(lo), y: axisY - 14, width: Math.max(2, x(hi) - x(lo)), height: 28, rx: 3 });
    node('text', { x: (x(lo) + x(hi)) / 2, y: axisY + 4, 'text-anchor': 'middle', class: 'sub' }, hasZone ? copy.zopa : copy.noZone);

    const marks = [
      { v: yourWalk, label: copy.yourWalk, cls: 'np-tick' },
      { v: theirWalk, label: copy.theirWalk, cls: 'np-tick theirs' },
      { v: target, label: copy.target, cls: 'np-tick' },
      { v: open, label: copy.open, cls: 'np-tick' },
    ].sort((a, b) => a.v - b.v);
    marks.forEach((mk, i) => {
      const px = x(mk.v);
      const above = i % 2 === 0;
      node('line', { class: mk.cls, x1: px, x2: px, y1: axisY - 20, y2: axisY + 20 });
      const anchor = px < 70 ? 'start' : px > W - 70 ? 'end' : 'middle';
      node('text', { x: px, y: above ? axisY - 40 : axisY + 38, 'text-anchor': anchor }, mk.label);
      node('text', { x: px, y: above ? axisY - 26 : axisY + 52, 'text-anchor': anchor, class: 'sub' }, money(mk.v));
    });
  };

  $$<HTMLButtonElement>(root, '[data-r]').forEach((btn) =>
    btn.addEventListener('click', () => {
      role = btn.dataset.r === 'buy' ? 'buy' : 'sell';
      $$<HTMLButtonElement>(root, '[data-r]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      const d = defaults[role];
      input('yourWalk').value = String(d.yourWalk);
      input('target').value = String(d.target);
      input('theirWalk').value = String(d.theirWalk);
      update();
    }),
  );

  $$<HTMLButtonElement>(root, '[data-cur]').forEach((btn) =>
    btn.addEventListener('click', () => {
      currency = btn.dataset.cur ?? 'MXN';
      $$<HTMLButtonElement>(root, '[data-cur]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      update();
    }),
  );

  $(root, '[data-print]').addEventListener('click', () => window.print());
  onInput(root, update);
  onResize(svg, update);
  update();
}
