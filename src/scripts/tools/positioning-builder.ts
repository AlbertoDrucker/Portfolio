import { $, $$, fill, onInput, readCopy } from './util';

interface Copy {
  template: string;
  short: string;
  empty: string;
  score: string;
  vague: string[];
  broad: string[];
  checks: Record<'target' | 'need' | 'frame' | 'vague' | 'proof' | 'alt' | 'length', [string, string]>;
  examples: Record<string, string>;
}

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean);
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function setupPositioning(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const names = ['target', 'need', 'brand', 'frame', 'benefit', 'alt', 'proof'];
  const field = (n: string) => $<HTMLTextAreaElement>(root, `[name="${n}"]`);
  const fit = (t: HTMLTextAreaElement) => {
    t.style.height = 'auto';
    t.style.height = `${t.scrollHeight + 2}px`;
  };
  const out = (k: string) => $(root, `[data-out="${k}"]`);

  const update = () => {
    const v: Record<string, string> = {};
    names.forEach((n) => (v[n] = field(n).value.trim().replace(/[.\s]+$/, '')));

    // Statement with missing parts shown as placeholders.
    const html = copy.template.replace(/\{(\w+)\}/g, (_, k) =>
      v[k] ? `<mark>${escapeHtml(v[k])}</mark>` : '<span class="pb-missing">\u2003\u2003\u2003\u2003</span>',
    );
    const anyFilled = names.some((n) => v[n]);
    out('statement').innerHTML = anyFilled ? html : escapeHtml(copy.empty);
    out('short').textContent = v.brand && v.frame && v.benefit ? fill(copy.short, v) : '';

    // Checks
    const all = names.map((n) => v[n]).join(' ').toLowerCase();
    const vagueHits = copy.vague.filter((w) => new RegExp(`(^|[^\\p{L}])${w}([^\\p{L}]|$)`, 'iu').test(all));
    const targetLower = ` ${v.target.toLowerCase()} `;
    const broadOnly = copy.broad.some((b) => targetLower.trim() === b) || words(v.target).length < 4;
    const statement = fill(copy.template, v);

    const results: [keyof Copy['checks'], boolean, string?][] = [
      ['target', !!v.target && !broadOnly],
      ['need', words(v.need).length >= 3],
      ['frame', !!v.frame && words(v.frame).length <= 5],
      ['vague', vagueHits.length === 0, vagueHits.join(', ')],
      ['proof', /\d/.test(v.proof) || words(v.proof).length >= 8],
      ['alt', words(v.alt).length >= 2],
      ['length', words(statement).length <= 70],
    ];

    const list = $(root, '[data-checks]');
    list.replaceChildren();
    let passed = 0;
    for (const [key, ok, extra] of results) {
      if (ok) passed++;
      const li = document.createElement('li');
      li.className = ok ? 'pass' : 'fail';
      li.textContent = fill(copy.checks[key][ok ? 0 : 1], { words: extra ?? '' });
      list.append(li);
    }
    out('score').textContent = fill(copy.score, { n: String(passed), total: String(results.length) });
  };

  $(root, '[data-example]').addEventListener('click', () => {
    names.forEach((n) => (field(n).value = copy.examples[n] ?? ''));
    $$<HTMLTextAreaElement>(root, 'textarea').forEach(fit);
    update();
  });
  $(root, '[data-clear]').addEventListener('click', () => {
    names.forEach((n) => (field(n).value = ''));
    $$<HTMLTextAreaElement>(root, 'textarea').forEach(fit);
    field('target').focus();
    update();
  });

  const textareas = $$<HTMLTextAreaElement>(root, 'textarea');
  onInput(root, () => {
    textareas.forEach(fit);
    update();
  });
  textareas.forEach(fit);
  update();
}
