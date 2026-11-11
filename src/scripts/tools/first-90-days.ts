import { $, $$, h, onInput, readCopy } from './util';

type Three = [string, string, string];

interface Copy {
  byRole: Record<string, [string[], string[], string[]]>;
  bySituation: Record<string, { add: Three; win: string; risk: string }>;
  byTeam: Record<string, Three>;
}

export function setupFirst90(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const pick = (n: string) => root.querySelector<HTMLInputElement>(`input[name="f90-${n}"]:checked`)?.value ?? '';

  const update = () => {
    const role = copy.byRole[pick('role')];
    const sit = copy.bySituation[pick('situation')];
    const team = copy.byTeam[pick('team')];
    if (!role || !sit || !team) return;
    $$(root, '[data-phase]').forEach((ul, i) => {
      ul.replaceChildren(...[team[i], ...role[i], sit.add[i]].map((t) => h('li', null, t)));
    });
    $(root, '[data-out="win"]').textContent = sit.win;
    $(root, '[data-out="risk"]').textContent = sit.risk;
  };

  onInput(root, update);
  update();
}
