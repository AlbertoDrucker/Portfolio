import { $, $$, fill, h, onInput, readCopy } from './util';

interface Copy {
  progress: string;
  waiting: string;
  weeks: string;
  tiers: { name: string; text: string; weeks: number; needs: string[] }[];
  watch: { audience: string; change: string; sales: string; none: string };
}

/** 0 to 4 is a quiet release, 5 to 8 a focused launch, 9 to 12 a full launch. */
export const launchTier = (score: number) => (score <= 4 ? 0 : score <= 8 ? 1 : 2);

export function setupLaunchPlanner(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const groups = $$<HTMLFieldSetElement>(root, 'fieldset[data-q]');
  const verdict = $(root, '[data-verdict]');

  const update = () => {
    const answers: Record<string, number> = {};
    groups.forEach((g) => {
      const checked = g.querySelector<HTMLInputElement>('input:checked');
      if (checked) answers[g.dataset.q ?? ''] = Number(checked.value);
    });
    const n = Object.keys(answers).length;
    const done = n === groups.length;
    const score = Object.values(answers).reduce((a, b) => a + b, 0);
    const tier = copy.tiers[launchTier(score)];

    out('progress').textContent = fill(copy.progress, { n: String(n), t: String(groups.length) });
    out('score').textContent = done ? `${score} / ${groups.length * 2}` : '';
    out('tier').textContent = done ? tier.name : '';
    verdict.textContent = done ? tier.text : copy.waiting;
    verdict.className = done ? 'verdict good' : 'verdict';
    $(root, '[data-plan]').hidden = !done;
    $(root, '[data-watch]').hidden = !done;
    if (!done) return;

    out('weeks').textContent = fill(copy.weeks, { n: String(tier.weeks) });
    $(root, '[data-needs]').replaceChildren(...tier.needs.map((x) => h('li', null, x)));
    const risk = answers.change === 2 ? 'change' : answers.sales === 2 ? 'sales' : answers.audience === 2 ? 'audience' : 'none';
    out('watch').textContent = copy.watch[risk];
  };

  $(root, '[data-reset]').addEventListener('click', () => {
    $$<HTMLInputElement>(root, 'input[type="radio"]').forEach((i) => (i.checked = false));
    update();
  });
  onInput(root, update);
  update();
}
