import { copyText, storage } from './util';

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type Saved = Record<string, string>;

const encode = (o: Saved) => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const decode = (s: string): Saved | null => {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/')))));
  } catch {
    return null;
  }
};

/**
 * Keeps a tool's named inputs in the browser and lets visitors share a scenario by link.
 * Tools that manage their own state (data-own-state) are skipped.
 */
export function initPersist() {
  const root = document.querySelector<HTMLElement>('.tool[data-tool]:not([data-own-state])');
  const bar = document.querySelector<HTMLElement>('[data-toolbar]');
  if (!root || !bar) return;
  const key = `ad-tool-${root.dataset.tool}-v1`;
  const fields = () => Array.from(root.querySelectorAll<Field>('input[name], select[name], textarea[name]'));
  const status = bar.querySelector<HTMLElement>('[data-toolbar-status]');

  const read = (): Saved => {
    const o: Saved = {};
    fields().forEach((f) => {
      if (f instanceof HTMLInputElement && f.type === 'radio') {
        if (f.checked) o[f.name] = f.value;
      } else if (f instanceof HTMLInputElement && f.type === 'checkbox') o[f.name] = f.checked ? '1' : '0';
      else o[f.name] = f.value;
    });
    return o;
  };

  const apply = (o: Saved) => {
    let last: Field | null = null;
    fields().forEach((f) => {
      if (!(f.name in o)) return;
      if (f instanceof HTMLInputElement && f.type === 'radio') f.checked = f.value === o[f.name];
      else if (f instanceof HTMLInputElement && f.type === 'checkbox') f.checked = o[f.name] === '1';
      else f.value = o[f.name];
      last = f;
    });
    if (last) {
      (last as Field).dispatchEvent(new Event('input', { bubbles: true }));
      (last as Field).dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const fromLink = location.hash.startsWith('#s=') ? decode(location.hash.slice(3)) : null;
  const saved = fromLink ?? storage.get<Saved>(key);
  if (saved) apply(saved);
  if (fromLink) history.replaceState(null, '', location.pathname + location.search);

  let timer = 0;
  const save = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => storage.set(key, read()), 250);
  };
  root.addEventListener('input', save);
  root.addEventListener('change', save);
  root.addEventListener('click', save);

  bar.querySelector('[data-share]')?.addEventListener('click', async () => {
    const url = `${location.origin}${location.pathname}#s=${encode(read())}`;
    const ok = await copyText(url);
    if (status) status.textContent = ok ? (bar.dataset.copied ?? '') : url;
  });
  bar.querySelector('[data-print]')?.addEventListener('click', () => window.print());
  bar.querySelector('[data-reset-inputs]')?.addEventListener('click', () => {
    storage.remove(key);
    location.reload();
  });
}
