import { $, fill, h, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';

interface Copy {
  stages: string[];
  moods: string[];
  start: string;
  startNoIdea: string;
  flat: string;
  colDoes: string;
  colPain: string;
  colIdea: string;
  chartAria: string;
  lowest: string;
}

/** Lowercases the first letter for use mid sentence, unless the first word is a brand or acronym (WhatsApp, CRM). */
const lower = (s: string) => {
  const t = s.replace(/\.$/, '');
  const first = t.split(' ')[0] ?? '';
  return first.slice(1) === first.slice(1).toLowerCase() ? t.charAt(0).toLowerCase() + t.slice(1) : t;
};

export function setupJourneyMapper(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const val = (n: string) => ($<HTMLInputElement>(root, `[name="${n}"]`)?.value ?? '').trim();
  const svg = $<SVGSVGElement>(root, '[data-chart]');

  const update = () => {
    const rows = copy.stages.map((stage, i) => ({
      stage,
      does: val(`does${i}`),
      feel: numVal($<HTMLInputElement>(root, `[name="feel${i}"]`), 3),
      pain: val(`pain${i}`),
      idea: val(`idea${i}`),
    }));
    rows.forEach((r, i) => ($(root, `[data-out="feel${i}"]`).textContent = copy.moods[r.feel] ?? ''));
    $(root, '[data-out="business"]').textContent = val('business');

    const min = Math.min(...rows.map((r) => r.feel));
    const max = Math.max(...rows.map((r) => r.feel));
    const low = rows.findIndex((r) => r.feel === min);
    const start = $(root, '[data-out="start"]');
    if (min === max) start.textContent = copy.flat;
    else if (rows[low].pain && rows[low].idea)
      start.textContent = fill(copy.start, { stage: rows[low].stage, pain: lower(rows[low].pain), idea: lower(rows[low].idea) });
    else start.textContent = fill(copy.startNoIdea, { stage: rows[low].stage });

    drawLineChart(svg, {
      height: 220,
      series: [{ points: rows.map((r, i) => [i, r.feel] as [number, number]), cls: 's-c1' }],
      x: [-0.35, 4.35],
      y: [1, 5],
      xTicks: [0, 1, 2, 3, 4],
      yTickCount: 4,
      xFmt: (v) => copy.stages[v] ?? '',
      yFmt: (v) => copy.moods[Math.round(v)] ?? '',
      markers: min === max ? [] : [{ x: low, y: min, label: copy.lowest }],
      ariaLabel: copy.chartAria,
    });

    $(root, '[data-map]').replaceChildren(
      ...rows.map((r, i) =>
        h(
          'div',
          { class: `jm-card${min !== max && i === low ? ' is-low' : ''}` },
          h('div', null, h('span', { class: 'jm-name' }, r.stage), h('small', null, copy.moods[r.feel])),
          h('div', null, h('small', null, copy.colDoes), r.does),
          h('div', null, h('small', null, copy.colPain), r.pain),
          h('div', null, h('small', null, copy.colIdea), r.idea),
        ),
      ),
    );
  };

  onInput(root, update);
  onResize(svg, update);
  update();
}
