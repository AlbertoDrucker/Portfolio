import { $, $$, fill, formatters, langOf, numVal, onInput, onResize, readCopy } from './util';
import { drawLineChart } from './chart';
import type { RoiStep, RoiTemplate } from '../../content/tools/automation-roi';

interface Copy {
  hours: string;
  months: string;
  never: string;
  before: string;
  after: string;
  good: string;
  ok: string;
  weak: string;
  no: string;
  breakEven: string;
  monthShort: string;
  chartAria: string;
  templates: RoiTemplate[];
  autoLevels: { value: number; label: string }[];
  removeStep: string;
  newStep: string;
}

export function setupAutomationRoi(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const f = formatters(langOf(root));
  const rows = $(root, '[data-rows]');
  const svg = $<SVGSVGElement>(root, '[data-chart]');
  const input = (n: string) => $<HTMLInputElement>(root, `[name="${n}"]`);
  const out = (k: string) => $(root, `[data-out="${k}"]`);

  const addRow = (s: RoiStep) => {
    const tr = document.createElement('tr');
    const name = document.createElement('input');
    name.type = 'text';
    name.value = s.name;
    name.dataset.k = 'name';
    name.setAttribute('aria-label', 'Step');
    const mins = document.createElement('input');
    mins.type = 'number';
    mins.min = '0';
    mins.value = String(s.minutes);
    mins.dataset.k = 'minutes';
    const per = document.createElement('input');
    per.type = 'number';
    per.min = '0';
    per.value = String(s.perMonth);
    per.dataset.k = 'perMonth';
    const sel = document.createElement('select');
    sel.dataset.k = 'auto';
    copy.autoLevels.forEach((lvl) => {
      const o = document.createElement('option');
      o.value = String(lvl.value);
      o.textContent = lvl.label;
      if (lvl.value === s.auto) o.selected = true;
      sel.append(o);
    });
    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'icon-btn';
    del.textContent = '×';
    del.setAttribute('aria-label', copy.removeStep);
    del.addEventListener('click', () => {
      tr.remove();
      update();
    });
    [name, mins, per, sel, del].forEach((el) => {
      const td = document.createElement('td');
      td.append(el);
      tr.append(td);
    });
    rows.append(tr);
  };

  const loadTemplate = (id: string) => {
    const t = copy.templates.find((x) => x.id === id) ?? copy.templates[0];
    rows.replaceChildren();
    t.steps.forEach(addRow);
    input('build').value = String(t.build);
    input('run').value = String(t.run);
    $$<HTMLButtonElement>(root, '[data-template]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.template === t.id)));
  };

  const readSteps = () =>
    $$<HTMLTableRowElement>(rows, 'tr').map((tr) => ({
      name: ($<HTMLInputElement>(tr, '[data-k="name"]').value || '').trim(),
      minutes: numVal($<HTMLInputElement>(tr, '[data-k="minutes"]')),
      perMonth: numVal($<HTMLInputElement>(tr, '[data-k="perMonth"]')),
      auto: numVal($<HTMLSelectElement>(tr, '[data-k="auto"]')) / 100,
    }));

  const update = () => {
    const steps = readSteps();
    const hourCost = numVal(input('hourCost'));
    const build = numVal(input('build'));
    const run = numVal(input('run'));

    const per = steps.map((s) => {
      const now = (s.minutes * s.perMonth) / 60;
      return { ...s, now, after: now * (1 - s.auto) };
    });
    const hoursSaved = per.reduce((t, s) => t + (s.now - s.after), 0);
    const monthlyNet = hoursSaved * hourCost - run;
    const payback = monthlyNet > 0 ? Math.ceil(build / monthlyNet) : Infinity;
    const three = monthlyNet * 36 - build;

    out('hours').textContent = fill(copy.hours, { n: f.num(hoursSaved, 1) });
    out('annual').textContent = f.money(monthlyNet * 12, 'MXN', true);
    out('payback').textContent = Number.isFinite(payback) ? fill(copy.months, { n: String(payback) }) : copy.never;
    out('three').textContent = f.money(three, 'MXN', true);

    const v = $(root, '[data-verdict]');
    const [msg, cls] = !Number.isFinite(payback)
      ? [copy.no, 'bad']
      : payback <= 6
        ? [copy.good, 'good']
        : payback <= 18
          ? [copy.ok, 'warn']
          : [copy.weak, 'bad'];
    v.textContent = msg;
    v.className = `verdict ${cls}`;

    const pts: [number, number][] = [];
    for (let mth = 0; mth <= 36; mth++) pts.push([mth, -build + monthlyNet * mth]);
    drawLineChart(svg, {
      series: [{ points: pts, cls: 's-main' }],
      x: [0, 36],
      xTicks: [0, 6, 12, 18, 24, 30, 36],
      xFmt: (n) => fill(copy.monthShort, { n: String(n) }),
      yFmt: (n) => f.money(n, 'MXN', true),
      refs: [{ y: 0 }],
      markers: Number.isFinite(payback) && payback <= 36 ? [{ x: payback, y: -build + monthlyNet * payback, label: fill(copy.breakEven, { n: String(payback) }) }] : [],
      ariaLabel: copy.chartAria,
    });

    const bars = $(root, '[data-bars]');
    bars.replaceChildren();
    const max = Math.max(1, ...per.map((s) => s.now));
    per.forEach((s) => {
      const wrap = document.createElement('div');
      wrap.className = 'ar-bar';
      const label = document.createElement('div');
      label.className = 'ar-bar-name';
      const n = document.createElement('span');
      n.textContent = s.name || '…';
      const h = document.createElement('span');
      const saved = s.now - s.after;
      h.innerHTML = `${f.num(s.now, 1)} h → ${f.num(s.after, 1)} h${saved >= 0.05 ? ` <span class="ar-saved">(−${f.num(saved, 1)})</span>` : ''}`;
      label.append(n, h);
      const track = document.createElement('div');
      track.className = 'ar-track';
      const now = document.createElement('i');
      now.className = 'now';
      now.style.width = `${(s.now / max) * 100}%`;
      const after = document.createElement('i');
      after.className = 'after';
      after.style.width = `${(s.after / max) * 100}%`;
      track.append(now, after);
      wrap.append(label, track);
      bars.append(wrap);
    });
  };

  $$<HTMLButtonElement>(root, '[data-template]').forEach((b) =>
    b.addEventListener('click', () => {
      loadTemplate(b.dataset.template!);
      update();
    }),
  );
  $(root, '[data-add]').addEventListener('click', () => {
    addRow({ name: copy.newStep, minutes: 10, perMonth: 20, auto: 60 });
    update();
  });

  loadTemplate(copy.templates[0].id);
  onInput(root, update);
  onResize(svg, update);
  update();
}
