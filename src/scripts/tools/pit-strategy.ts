import { $, $$, fill, formatters, langOf, numVal, onResize, readCopy } from './util';
import { drawLineChart } from './chart';
import type { Compound, StrategyDef } from '../../content/tools/pit-strategy';

interface Copy {
  lap: string;
  lapShort: string;
  gapAxis: string;
  winner: string;
  oneStopWins: string;
  twoStopWins: string;
  illegal: string;
  optimal: string;
  leader: string;
  scTip: string;
  chartAria: string;
  compounds: Record<Compound, string>;
  tyres: Record<Compound, { offset: number; deg: number; cliff: number }>;
  defaults: StrategyDef[];
  labels: { stint: string; pitOn: string; stops: string; one: string; two: string; strategy: string };
}

interface Race {
  laps: number;
  loss: number;
  sc: boolean;
  scLap: number;
}

const BASE = 92;
const SC_LAPS = 4;
const CLIFF_PENALTY = 0.45;
const FUEL_GAIN = 0.03;
const COLORS = ['s-c1', 's-c3', 's-c4'];
const SWATCH = ['#15173b', '#8a4fd6', '#0b7f78'];
const COMPOUNDS: Compound[] = ['S', 'M', 'H'];

export function simulate(def: StrategyDef, race: Race, tyres: Copy['tyres']) {
  const pits = [...def.pits].sort((a, b) => a - b);
  const cum: number[] = [0];
  let total = 0;
  let stint = 0;
  let age = 0;
  for (let lap = 1; lap <= race.laps; lap++) {
    const t = tyres[def.stints[Math.min(stint, def.stints.length - 1)]];
    const underSc = race.sc && lap >= race.scLap && lap < race.scLap + SC_LAPS;
    let time = underSc
      ? BASE * 1.35
      : BASE + t.offset + t.deg * age + Math.max(0, age - t.cliff) * CLIFF_PENALTY - FUEL_GAIN * (lap - 1);
    age++;
    if (pits[stint] === lap) {
      time += underSc ? race.loss * 0.5 : race.loss;
      stint++;
      age = 0;
    }
    total += time;
    cum.push(total);
  }
  return { total, cum, legal: new Set(def.stints).size >= 2 };
}

/** Brute force over every legal one and two stop plan. */
export function fastest(race: Race, tyres: Copy['tyres']): StrategyDef {
  let best: StrategyDef = { stints: ['M', 'H'], pits: [Math.floor(race.laps / 2)] };
  let bestT = Infinity;
  for (const a of COMPOUNDS)
    for (const b of COMPOUNDS) {
      if (a !== b)
        for (let p = 5; p <= race.laps - 5; p++) {
          const d = { stints: [a, b], pits: [p] };
          const r = simulate(d, race, tyres);
          if (r.total < bestT) [bestT, best] = [r.total, d];
        }
      for (const c of COMPOUNDS) {
        if (new Set([a, b, c]).size < 2) continue;
        for (let p1 = 5; p1 <= race.laps - 10; p1++)
          for (let p2 = p1 + 5; p2 <= race.laps - 5; p2++) {
            const d = { stints: [a, b, c], pits: [p1, p2] };
            const r = simulate(d, race, tyres);
            if (r.total < bestT) [bestT, best] = [r.total, d];
          }
      }
    }
  return best;
}

export function setupPitStrategy(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const svg = $<SVGSVGElement>(root, '[data-chart]');
  const cards = $$<HTMLElement>(root, '[data-strat]');
  const strategies: StrategyDef[] = copy.defaults.map((d) => ({ stints: [...d.stints], pits: [...d.pits] }));
  let optimalIdx = -1;

  const race = (): Race => ({
    laps: numVal(input('laps'), 57),
    loss: numVal(input('loss'), 22),
    sc: input('sc').checked,
    scLap: numVal(input('scLap'), 20),
  });

  const clampPits = (s: StrategyDef, laps: number) => {
    s.pits = s.pits.map((p) => Math.min(laps - 1, Math.max(1, Math.round(p)))).sort((a, b) => a - b);
    for (let i = 1; i < s.pits.length; i++) if (s.pits[i] <= s.pits[i - 1]) s.pits[i] = Math.min(laps - 1, s.pits[i - 1] + 1);
  };

  const tyreBadge = (c: Compound) => `<span class="ps-tyre ${c}" title="${copy.compounds[c]}">${c}</span>`;
  const planHtml = (s: StrategyDef) =>
    s.stints.map((c, i) => `${tyreBadge(c)}${i < s.pits.length ? ` <span class="muted">${fill(copy.lapShort, { n: String(s.pits[i]) })}</span> ` : ''}`).join('');

  const renderCard = (i: number) => {
    const s = strategies[i];
    const card = cards[i];
    const name = card.dataset.name!;
    card.classList.toggle('is-opt', i === optimalIdx);
    card.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'ps-strat-head';
    head.innerHTML = `<span class="ps-strat-name"><i style="background:${SWATCH[i]}"></i>${copy.labels.strategy} ${name}</span>`;
    const seg = document.createElement('div');
    seg.className = 'seg';
    seg.setAttribute('role', 'group');
    seg.setAttribute('aria-label', `${copy.labels.stops}, ${copy.labels.strategy} ${name}`);
    [1, 2].forEach((n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = n === 1 ? copy.labels.one : copy.labels.two;
      b.setAttribute('aria-pressed', String(s.pits.length === n));
      b.addEventListener('click', () => {
        const laps = race().laps;
        if (n === 1) {
          s.stints = s.stints.slice(0, 2);
          s.pits = [Math.round(laps * 0.45)];
        } else {
          s.stints = [s.stints[0], s.stints[1] ?? 'M', s.stints[0] === 'S' ? 'S' : 'M'];
          s.pits = [Math.round(laps * 0.3), Math.round(laps * 0.65)];
        }
        if (optimalIdx === i) optimalIdx = -1;
        renderCard(i);
        update();
      });
      seg.append(b);
    });
    head.append(seg);

    const stints = document.createElement('div');
    stints.className = 'ps-stints';
    s.stints.forEach((cmp, j) => {
      const l = document.createElement('label');
      l.textContent = `${copy.labels.stint} ${j + 1}`;
      const sel = document.createElement('select');
      COMPOUNDS.forEach((c) => {
        const o = document.createElement('option');
        o.value = c;
        o.textContent = copy.compounds[c];
        o.selected = c === cmp;
        sel.append(o);
      });
      sel.addEventListener('change', () => {
        s.stints[j] = sel.value as Compound;
        if (optimalIdx === i) optimalIdx = -1;
        renderCard(i);
        update();
      });
      l.append(sel);
      stints.append(l);
      if (j < s.pits.length) {
        const pl = document.createElement('label');
        pl.textContent = copy.labels.pitOn;
        const num = document.createElement('input');
        num.type = 'number';
        num.min = '1';
        num.max = String(race().laps - 1);
        num.value = String(s.pits[j]);
        num.addEventListener('change', () => {
          s.pits[j] = numVal(num, s.pits[j]);
          clampPits(s, race().laps);
          if (optimalIdx === i) optimalIdx = -1;
          renderCard(i);
          update();
        });
        pl.append(num);
        stints.append(pl);
      }
    });
    card.append(head);
    if (i === optimalIdx) {
      const note = document.createElement('p');
      note.className = 'ps-opt';
      note.textContent = copy.optimal;
      card.append(note);
    }
    card.append(stints);
    if (new Set(s.stints).size < 2) {
      const w = document.createElement('p');
      w.className = 'ps-warn';
      w.textContent = copy.illegal;
      card.append(w);
    }
  };

  const update = () => {
    const r = race();
    out('laps').textContent = String(r.laps);
    out('loss').textContent = `${f.num(r.loss, 1)} s`;
    out('scLap').textContent = String(r.scLap);
    $(root, '[data-sc-lap]').hidden = !r.sc;
    input('scLap').max = String(r.laps - SC_LAPS);

    const results = strategies.map((s, i) => ({ i, s, ...simulate(s, r, copy.tyres) }));
    const ranked = [...results].sort((a, b) => Number(b.legal) - Number(a.legal) || a.total - b.total);
    const win = ranked[0];

    const body = $(root, '[data-results]');
    body.replaceChildren();
    ranked.forEach((res) => {
      const tr = document.createElement('tr');
      if (res === win) tr.className = 'win';
      const mins = Math.floor(res.total / 60);
      const secs = res.total - mins * 60;
      const time = `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')}:${secs.toFixed(1).padStart(4, '0')}`;
      const gap = res === win ? copy.leader : res.legal ? `+${f.num(res.total - win.total, 1)} s` : copy.illegal;
      tr.innerHTML = `<td><span class="ps-strat-name"><i style="background:${SWATCH[res.i]}"></i>${cards[res.i].dataset.name}</span></td><td>${planHtml(res.s)}</td><td>${time}</td><td>${gap}</td>`;
      body.append(tr);
    });

    const second = ranked.find((x) => x !== win && x.legal);
    const v = $(root, '[data-verdict]');
    const insight = win.s.pits.length >= 2 ? copy.twoStopWins : copy.oneStopWins;
    let text = `${fill(copy.winner, { name: cards[win.i].dataset.name!, gap: second ? f.num(second.total - win.total, 1) : '0' })} ${fill(insight, { loss: f.num(r.loss, 1) })}`;
    if (r.sc && !strategies.some((s) => s.pits.some((p) => p >= r.scLap && p < r.scLap + SC_LAPS))) text += ` ${copy.scTip}`;
    v.textContent = text;
    v.className = 'verdict good';

    drawLineChart(svg, {
      series: results.map((res) => ({
        points: res.cum.map((t, lap) => [lap, t - win.cum[lap]] as [number, number]),
        cls: COLORS[res.i],
      })),
      x: [0, r.laps],
      xFmt: (n) => fill(copy.lapShort, { n: String(n) }),
      yFmt: (n) => fill(copy.gapAxis, { n: f.num(n, 0) }),
      ariaLabel: copy.chartAria,
    });

    const legend = $(root, '[data-legend]');
    legend.innerHTML = results.map((res) => `<span style="color:${SWATCH[res.i]}"><i></i>${copy.labels.strategy} ${cards[res.i].dataset.name}</span>`).join('');
  };

  $(root, '[data-find]').addEventListener('click', () => {
    const best = fastest(race(), copy.tyres);
    strategies[2] = best;
    optimalIdx = 2;
    renderCard(2);
    update();
  });

  ['laps', 'loss', 'sc', 'scLap'].forEach((n) =>
    input(n).addEventListener('input', () => {
      const laps = race().laps;
      strategies.forEach((s, i) => {
        clampPits(s, laps);
        renderCard(i);
      });
      update();
    }),
  );

  strategies.forEach((_, i) => renderCard(i));
  onResize(svg, update);
  update();
}
