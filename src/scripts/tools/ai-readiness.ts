import { $, $$, fill, onInput, readCopy } from './util';

type Dim = 'data' | 'process' | 'people' | 'direction';

interface Copy {
  progress: string;
  waiting: string;
  dims: Record<Dim, string>;
  levels: { name: string; text: string }[];
  steps: Record<Dim, string[]>;
  weakest: string;
}

/** Order matters for ties: fix direction and data before people and process. */
const DIMS: Dim[] = ['direction', 'data', 'process', 'people'];

export function setupAiReadiness(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const groups = $$<HTMLFieldSetElement>(root, 'fieldset[data-dim]');
  const dimsEl = $(root, '[data-dims]');
  const next = $(root, '[data-next]');
  const verdict = $(root, '[data-verdict]');

  const update = () => {
    const sums: Record<Dim, number> = { data: 0, process: 0, people: 0, direction: 0 };
    let answered = 0;
    groups.forEach((g) => {
      const checked = g.querySelector<HTMLInputElement>('input:checked');
      if (!checked) return;
      answered += 1;
      sums[g.dataset.dim as Dim] += Number(checked.value);
    });
    const done = answered === groups.length;
    const total = DIMS.reduce((a, d) => a + sums[d], 0);
    const score = Math.round((total / (groups.length * 3)) * 100);

    out('progress').textContent = fill(copy.progress, { n: String(answered), t: String(groups.length) });
    out('score').textContent = done ? `${score} / 100` : '';
    const level = copy.levels[score < 30 ? 0 : score < 55 ? 1 : score < 80 ? 2 : 3];
    out('level').textContent = done ? level.name : '';
    verdict.textContent = done ? level.text : copy.waiting;
    verdict.className = done ? 'verdict good' : 'verdict';

    const weakest = DIMS.reduce((a, d) => (sums[d] < sums[a] ? d : a));
    dimsEl.replaceChildren();
    (['data', 'process', 'people', 'direction'] as Dim[]).forEach((d) => {
      const row = document.createElement('div');
      row.className = `ar-dim${done && d === weakest ? ' is-low' : ''}`;
      const name = document.createElement('span');
      name.textContent = copy.dims[d];
      const track = document.createElement('span');
      track.className = 'ar-track';
      const bar = document.createElement('i');
      bar.style.width = `${(sums[d] / 6) * 100}%`;
      track.append(bar);
      const v = document.createElement('span');
      v.className = 'ar-v';
      v.textContent = `${sums[d]} / 6`;
      row.append(name, track, v);
      dimsEl.append(row);
    });

    next.hidden = !done;
    if (done) {
      out('weakest').textContent = fill(copy.weakest, { dim: copy.dims[weakest] });
      const list = $(root, '[data-steps]');
      list.replaceChildren(
        ...copy.steps[weakest].map((s) => {
          const li = document.createElement('li');
          li.textContent = s;
          return li;
        }),
      );
    }
  };

  $(root, '[data-reset]').addEventListener('click', () => {
    $$<HTMLInputElement>(root, 'input[type="radio"]').forEach((i) => (i.checked = false));
    update();
  });
  onInput(root, update);
  update();
}
