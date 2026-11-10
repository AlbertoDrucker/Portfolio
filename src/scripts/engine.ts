/**
 * Strategy Engine replay.
 * The full brief is server rendered. This script hides it and replays it step by step:
 * the AI draft types into the main column, then the judgment notes appear in the margin.
 * With reduced motion or without JavaScript, the full brief simply stays visible.
 */

const CHARS_PER_FRAME = 3;
const PAUSE_AFTER_STEP = 260;
const PAUSE_BETWEEN_NOTES = 380;

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r(null)));

export function initEngines(): void {
  document.querySelectorAll<HTMLElement>('[data-engine]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    setup(root);
  });
}

function setup(root: HTMLElement): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = root.querySelector<HTMLElement>('[data-body]')!;
  const statusEl = root.querySelector<HTMLElement>('[data-status]')!;
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tab]'));
  const briefs = Array.from(root.querySelectorAll<HTMLElement>('[data-brief]'));
  const replayBtn = root.querySelector<HTMLButtonElement>('[data-replay]');
  const skipBtn = root.querySelector<HTMLButtonElement>('[data-skip]');
  const printBtn = root.querySelector<HTMLButtonElement>('[data-print]');

  // Remember every typed string once, so replays and skips can restore it.
  const originals = new Map<HTMLElement, string>();
  root.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => originals.set(el, el.textContent ?? ''));

  let active = briefs[0];
  let runId = 0;
  let follow = true;
  let started = false;

  const setStatus = (state: 'idle' | 'drafting' | 'annotating' | 'done') => {
    statusEl.textContent = root.dataset[`status${state[0].toUpperCase()}${state.slice(1)}`] ?? '';
    root.classList.toggle('is-annotating', state === 'annotating');
    root.classList.toggle('is-done', state === 'done');
  };

  const showBrief = (id: string) => {
    briefs.forEach((b) => (b.hidden = b.dataset.brief !== id));
    tabs.forEach((t) => {
      const on = t.dataset.tab === id;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    active = briefs.find((b) => b.dataset.brief === id) ?? briefs[0];
    body.scrollTop = 0;
  };

  const restore = (brief: HTMLElement) => {
    brief.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => {
      el.textContent = originals.get(el) ?? '';
    });
    brief.querySelectorAll('.is-pending, .is-current').forEach((el) => el.classList.remove('is-pending', 'is-current'));
    brief.querySelectorAll('.note').forEach((el) => el.classList.add('is-shown'));
    root.querySelectorAll('.engine-caret').forEach((c) => c.remove());
  };

  const showAll = () => {
    runId++;
    restore(active);
    root.classList.remove('is-playing');
    setStatus('done');
  };

  const keepInView = (el: HTMLElement) => {
    if (!follow) return;
    const elBox = el.getBoundingClientRect();
    const box = body.getBoundingClientRect();
    const overflow = elBox.bottom - (box.bottom - 48);
    if (overflow > 0) body.scrollTop += overflow;
  };

  const typeInto = async (el: HTMLElement, text: string, id: number) => {
    const caret = document.createElement('span');
    caret.className = 'engine-caret';
    caret.setAttribute('aria-hidden', 'true');
    const textNode = document.createTextNode('');
    el.replaceChildren(textNode, caret);
    for (let i = 0; i <= text.length; i += CHARS_PER_FRAME) {
      if (id !== runId) return;
      textNode.data = text.slice(0, i);
      keepInView(caret);
      await nextFrame();
    }
    textNode.data = text;
    caret.remove();
  };

  const play = async () => {
    const id = ++runId;
    started = true;
    follow = true;
    const brief = active;
    const steps = Array.from(brief.querySelectorAll<HTMLElement>('[data-step]'));

    // Reset to an empty draft.
    root.querySelectorAll('.engine-caret').forEach((c) => c.remove());
    brief.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => (el.textContent = ''));
    brief.querySelectorAll('.note').forEach((el) => el.classList.remove('is-shown'));
    steps.forEach((s) => s.classList.add('is-pending'));
    root.classList.add('is-playing');
    body.scrollTop = 0;

    for (const step of steps) {
      if (id !== runId) return;
      setStatus('drafting');
      step.classList.remove('is-pending');
      step.classList.add('is-current');
      for (const el of Array.from(step.querySelectorAll<HTMLElement>('[data-type]'))) {
        await typeInto(el, originals.get(el) ?? '', id);
        if (id !== runId) return;
      }
      setStatus('annotating');
      for (const note of Array.from(step.querySelectorAll<HTMLElement>('.note'))) {
        await wait(PAUSE_BETWEEN_NOTES);
        if (id !== runId) return;
        note.classList.add('is-shown');
        keepInView(note);
      }
      step.classList.remove('is-current');
      await wait(PAUSE_AFTER_STEP);
    }
    if (id !== runId) return;
    root.classList.remove('is-playing');
    setStatus('done');
  };

  // Tabs: click and arrow keys.
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      showBrief(tab.dataset.tab!);
      if (reduce) return showAll();
      play();
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      next.click();
    });
  });

  if (briefs.length > 1) showBrief(briefs[0].dataset.brief!);

  // Reading takes priority over following the cursor.
  ['wheel', 'touchstart', 'keydown'].forEach((evt) =>
    body.addEventListener(evt, () => (follow = false), { passive: true }),
  );

  printBtn?.addEventListener('click', () => {
    showAll();
    window.print();
  });

  if (reduce) {
    replayBtn?.remove();
    skipBtn?.remove();
    setStatus('done');
    return;
  }

  replayBtn?.addEventListener('click', () => play());
  skipBtn?.addEventListener('click', () => showAll());

  if (root.dataset.autoplay === 'true' && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(root);
  } else {
    setStatus('done');
  }
}
