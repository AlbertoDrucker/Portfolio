import { $, $$, fill, formatters, langOf, readCopy } from './util';
import type { FlowStep, FlowTemplate, Owner } from '../../content/tools/ai-workflow-builder';

interface Copy {
  hours: string;
  coverage: string;
  allCovered: string;
  gaps: string;
  allPerson: string;
  review: string;
  templates: FlowTemplate[];
  owners: Record<Owner, string>;
  critical: string;
  laneAi: string;
  lanePerson: string;
}

const ORDER: Owner[] = ['person', 'review', 'ai'];

export function setupWorkflowBuilder(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const list = $(root, '[data-steps]');
  const lanes = $(root, '[data-lanes]');
  const out = (k: string) => $(root, `[data-out="${k}"]`);
  let steps: FlowStep[] = [];

  const minutesFor = (s: FlowStep) => (s.owner === 'person' ? s.manual : s.owner === 'review' ? s.ai + s.review : s.ai);

  const renderControls = () => {
    list.replaceChildren();
    steps.forEach((s, i) => {
      const li = document.createElement('li');
      li.className = 'wf-step';
      const name = document.createElement('p');
      name.className = 'wf-step-name';
      name.textContent = `${i + 1}. ${s.name}`;
      if (s.critical) {
        const flag = document.createElement('span');
        flag.className = 'wf-flag';
        flag.textContent = copy.critical;
        name.append(flag);
      }
      const seg = document.createElement('div');
      seg.className = 'seg';
      seg.setAttribute('role', 'group');
      seg.setAttribute('aria-label', s.name);
      ORDER.forEach((o) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = copy.owners[o];
        b.setAttribute('aria-pressed', String(s.owner === o));
        b.addEventListener('click', () => {
          s.owner = o;
          $$<HTMLButtonElement>(seg, 'button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
          update();
        });
        seg.append(b);
      });
      li.append(name, seg);
      list.append(li);
    });
  };

  const update = () => {
    const before = steps.reduce((t, s) => t + s.manual, 0) / 60;
    const after = steps.reduce((t, s) => t + minutesFor(s), 0) / 60;
    const critical = steps.filter((s) => s.critical);
    const gaps = critical.filter((s) => s.owner === 'ai');
    const covered = critical.length - gaps.length;

    out('before').textContent = fill(copy.hours, { n: f.num(before, 1) });
    out('after').textContent = fill(copy.hours, { n: f.num(after, 1) });
    out('saved').textContent = before > 0 ? f.pct((before - after) / before) : '–';
    out('coverage').textContent = fill(copy.coverage, { n: String(covered), total: String(critical.length) });

    const v = $(root, '[data-verdict]');
    if (gaps.length) {
      v.textContent = fill(copy.gaps, { steps: gaps.map((g) => g.name.toLowerCase()).join(', ') });
      v.className = 'verdict bad';
    } else if (steps.every((s) => s.owner === 'person')) {
      v.textContent = copy.allPerson;
      v.className = 'verdict warn';
    } else {
      v.textContent = copy.allCovered;
      v.className = 'verdict good';
    }

    // Swimlanes: one column per step, AI lane on top, person lane below.
    const grid = document.createElement('div');
    grid.className = 'wf-grid';
    grid.style.gridTemplateColumns = `3.5rem repeat(${steps.length}, minmax(0, 1fr))`;
    const label = (t: string) => {
      const el = document.createElement('span');
      el.className = 'wf-lane-label';
      el.textContent = t;
      return el;
    };
    const cell = (cls: string, title: string, note: string) => {
      const el = document.createElement('div');
      el.className = `wf-cell ${cls}`;
      if (title) {
        const t = document.createElement('span');
        t.textContent = title;
        el.append(t);
      }
      if (note) {
        const n = document.createElement('small');
        n.textContent = note;
        el.append(n);
      }
      return el;
    };
    const mins = (m: number) => `${m} min`;
    grid.append(label(copy.laneAi));
    steps.forEach((s) => {
      if (s.owner === 'person') grid.append(cell('', '', ''));
      else grid.append(cell(`ai${s.critical && s.owner === 'ai' ? ' gap' : ''}`, s.name, mins(s.ai)));
    });
    grid.append(label(copy.lanePerson));
    steps.forEach((s) => {
      if (s.owner === 'person') grid.append(cell('person', s.name, mins(s.manual)));
      else if (s.owner === 'review') grid.append(cell('check', copy.review, mins(s.review)));
      else grid.append(cell(s.critical ? 'gap' : '', '', ''));
    });
    lanes.replaceChildren(grid);
  };

  const load = (id: string) => {
    const t = copy.templates.find((x) => x.id === id) ?? copy.templates[0];
    steps = t.steps.map((s) => ({ ...s }));
    $$<HTMLButtonElement>(root, '[data-template]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.template === t.id)));
    renderControls();
    update();
  };

  $$<HTMLButtonElement>(root, '[data-template]').forEach((b) => b.addEventListener('click', () => load(b.dataset.template!)));
  load(copy.templates[0].id);
}
