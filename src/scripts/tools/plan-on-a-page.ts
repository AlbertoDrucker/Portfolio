import { $, fill, h, onInput, readCopy } from './util';

interface Copy {
  checks: Record<'number' | 'play' | 'three' | 'measures' | 'stop', string>;
  score: string;
  untitled: string;
}

export function setupPlanOnAPage(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const val = (n: string) => ($<HTMLInputElement | HTMLTextAreaElement>(root, `[name="${n}"]`)?.value ?? '').trim();
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  const choicesEl = $(root, '[data-choices]');

  const update = () => {
    out('company').textContent = val('company') || copy.untitled;
    out('ambition').textContent = val('ambition');
    out('play').textContent = val('play');

    const choices = [1, 2, 3].map((n) => ({ t: val(`c${n}t`), how: val(`c${n}h`), m: val(`c${n}m`) }));
    choicesEl.replaceChildren(
      ...choices
        .filter((c) => c.t || c.how)
        .map((c) => h('li', null, h('strong', null, c.t), h('span', null, c.how), c.m && h('small', null, `${choicesEl.dataset.measure}: ${c.m}`))),
    );
    const stops = val('stop').split('\n').map((s) => s.trim()).filter(Boolean);
    $(root, '[data-stop]').replaceChildren(...stops.map((s) => h('li', null, s)));

    const amb = val('ambition');
    const results: [keyof Copy['checks'], boolean][] = [
      ['number', /\d/.test(amb) && /(20\d\d|\bQ[1-4]\b|month|year|mes|año|trimestre|quarter)/i.test(amb)],
      ['play', val('play').split(/\s+/).length >= 5],
      ['three', choices.every((c) => c.t && c.how)],
      ['measures', choices.every((c) => c.m)],
      ['stop', stops.length >= 2],
    ];
    $(root, '[data-checks]').replaceChildren(...results.map(([k, ok]) => h('li', { class: ok ? 'ok' : '' }, copy.checks[k])));
    out('score').textContent = fill(copy.score, { n: String(results.filter(([, ok]) => ok).length), t: String(results.length) });
  };

  onInput(root, update);
  update();
}
