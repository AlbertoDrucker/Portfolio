/** Small helpers shared by every Lab tool. */

export type Lang = 'en' | 'es';

export const $ = <T extends Element = HTMLElement>(root: ParentNode, sel: string) =>
  root.querySelector(sel) as T;

export const $$ = <T extends Element = HTMLElement>(root: ParentNode, sel: string) =>
  Array.from(root.querySelectorAll(sel)) as T[];

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Reads a number from an input, tolerating commas and empty values. */
export function numVal(el: HTMLInputElement | HTMLSelectElement | null, fallback = 0): number {
  if (!el) return fallback;
  const v = parseFloat(String(el.value).replace(/,/g, ''));
  return Number.isFinite(v) ? v : fallback;
}

export function formatters(lang: Lang) {
  const locale = lang === 'es' ? 'es-MX' : 'en-US';
  return {
    num: (v: number, digits = 0) =>
      new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(v),
    compact: (v: number) =>
      new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(v),
    money: (v: number, currency = 'MXN', compact = false) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol',
        notation: compact ? 'compact' : 'standard',
        maximumFractionDigits: compact ? 1 : 0,
      }).format(v),
    pct: (v: number, digits = 0) =>
      new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: digits }).format(v),
  };
}

/** Each tool root carries its dynamic copy as JSON in data-copy. */
export function readCopy<T>(root: HTMLElement): T {
  return JSON.parse(root.dataset.copy ?? '{}') as T;
}

export function langOf(root: HTMLElement): Lang {
  return (root.dataset.lang as Lang) === 'es' ? 'es' : 'en';
}

/** Calls fn on every input or change inside root. */
export function onInput(root: ParentNode, fn: () => void) {
  root.addEventListener('input', fn);
  root.addEventListener('change', fn);
}

/** Runs fn whenever el changes width (charts redraw at real pixel size). */
export function onResize(el: Element, fn: () => void) {
  let last = 0;
  const ro = new ResizeObserver((entries) => {
    const w = Math.round(entries[0].contentRect.width);
    if (w !== last) {
      last = w;
      fn();
    }
  });
  ro.observe(el);
}

export function initTools(selector: string, setup: (root: HTMLElement) => void) {
  document.querySelectorAll<HTMLElement>(selector).forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    setup(root);
  });
}

/** Fills {placeholders} in a copy template. */
export const fill = (tpl: string, map: Record<string, string>) =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => map[k] ?? '');
