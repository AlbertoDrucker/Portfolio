/**
 * Strategy Engine replay.
 * The full brief is server rendered. This script hides it and replays it step by step:
 * the AI draft types into the main column, then the judgment notes appear in the margin.
 * It shows one step at a time, so the page never turns into a long scroll; the step bar jumps to any step.
 * With reduced motion the steps are still paged, but appear complete. Without JavaScript, the full brief stays visible.
 */

const CHARS_PER_FRAME = 3;
const PAUSE_AFTER_STEP = 260;
const PAUSE_BETWEEN_NOTES = 380;
/** How long a finished step stays on screen before the replay moves to the next one. */
const HOLD_STEP = 2600;

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
  const gotoBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-goto]'));
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-next]');
  root.classList.add('is-paged');

  // Remember every typed string once, so replays and skips can restore it.
  const originals = new Map<HTMLElement, string>();
  root.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => originals.set(el, el.textContent ?? ''));

  let active = briefs[0];
  let runId = 0;
  let follow = true;
  let started = false;
  let current = 0;

  const stepsOf = (brief: HTMLElement) => Array.from(brief.querySelectorAll<HTMLElement>('[data-step]'));

  /** Show one step. Steps before it count as done in the step bar. */
  const goTo = (n: number) => {
    const steps = stepsOf(active);
    current = Math.max(0, Math.min(steps.length - 1, n));
    steps.forEach((st, i) => st.classList.toggle('is-active', i === current));
    gotoBtns.forEach((b, i) => {
      if (i === current) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
      b.classList.toggle('is-done', i < current);
    });
    root.classList.toggle('past-first', current > 0);
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === steps.length - 1;
  };

  /** Finish the step on screen, stop the replay, and keep the engine top in view. */
  const jump = (n: number) => {
    runId++;
    restore(active);
    root.classList.remove('is-playing');
    setStatus('done');
    goTo(n);
    const top = root.getBoundingClientRect().top;
    if (top < 0) root.scrollIntoView({ block: 'start' });
  };

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
      // On narrow screens the tabs scroll sideways; keep the chosen one in view.
      const row = t.parentElement;
      if (on && row && row.scrollWidth > row.clientWidth) {
        row.scrollTo({ left: t.offsetLeft - (row.clientWidth - t.offsetWidth) / 2 });
      }
    });
    active = briefs.find((b) => b.dataset.brief === id) ?? briefs[0];
    body.scrollTop = 0;
    goTo(0);
  };

  const restore = (brief: HTMLElement) => {
    brief.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => {
      el.textContent = originals.get(el) ?? '';
    });
    brief.querySelectorAll('.is-pending, .is-current').forEach((el) => el.classList.remove('is-pending', 'is-current'));
    brief.querySelectorAll('.note').forEach((el) => el.classList.add('is-shown'));
    root.querySelectorAll('.engine-caret').forEach((c) => c.remove());
  };

  const showAll = () => jump(current);

  // Paged steps never overflow the box, so there is nothing to follow.
  const keepInView = (_el: HTMLElement) => {
    void follow;
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

    for (const [n, step] of steps.entries()) {
      if (id !== runId) return;
      goTo(n);
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
      await wait(n === steps.length - 1 ? PAUSE_AFTER_STEP : HOLD_STEP);
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
  else goTo(0);

  gotoBtns.forEach((b, i) => b.addEventListener('click', () => jump(i)));
  prevBtn?.addEventListener('click', () => jump(current - 1));
  nextBtn?.addEventListener('click', () => jump(current + 1));

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
