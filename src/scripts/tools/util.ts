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

type Child = Node | string | number | null | undefined | false | Child[];

/** Tiny DOM builder for the app style tools. `on*` keys add listeners, `class` sets className, `data` sets data attributes. */
export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Record<string, unknown> | null,
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs ?? {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = String(v);
    else if (k === 'data') Object.assign(el.dataset, v as Record<string, string>);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v as EventListener);
    else if (k === 'value') (el as unknown as HTMLInputElement).value = String(v);
    else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, String(v));
  }
  const add = (c: Child) => {
    if (c == null || c === false) return;
    if (Array.isArray(c)) c.forEach(add);
    else el.append(c instanceof Node ? c : String(c));
  };
  children.forEach(add);
  return el;
}

/** Browser storage that never throws (private windows, blocked storage). */
export const storage = {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },
  set(key: string, value: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable: the tool still works for this visit */
    }
  },
  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  },
};

export const uid = (p: string) => `${p}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

/** Local calendar date as YYYY-MM-DD, plus helpers that work in whole days. */
export const ymd = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const addDays = (s: string, n: number) => {
  const d = new Date(`${s}T12:00:00`);
  d.setDate(d.getDate() + n);
  return ymd(d);
};
export const diffDays = (a: string, b: string) =>
  Math.round((new Date(`${a}T12:00:00`).getTime() - new Date(`${b}T12:00:00`).getTime()) / 86400000);
export const fmtDay = (s: string, lang: Lang) =>
  new Date(`${s}T12:00:00`).toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { month: 'short', day: 'numeric' });

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
