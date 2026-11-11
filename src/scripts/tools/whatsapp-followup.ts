import { $, copyText, fill, h, onInput, readCopy } from './util';

interface Step {
  day: number;
  formal: string;
  casual: string;
  why: string;
}

interface Copy {
  day: string;
  today: string;
  copy: string;
  copied: string;
  open: string;
  whyLabel: string;
  noReason: string;
  fallback: { name: string; offer: string; me: string; biz: string };
  steps: Record<string, Step[]>;
}

const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

/** Fills a template and tidies what an empty name leaves behind ("Hola , " becomes "Hola, "). */
export function buildMessage(tpl: string, v: Record<string, string>) {
  return fill(tpl, v)
    .replace(/\s+([,.])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .replace(/(^|[.!?¡¿]\s+)([a-záéíóúñ])/g, (_, p, ch) => p + ch.toUpperCase())
    .trim();
}

export function setupWhatsappFollowup(root: HTMLElement) {
  const copy = readCopy<Copy>(root);
  const val = (n: string) => ($<HTMLInputElement | HTMLSelectElement>(root, `[name="${n}"]`)?.value ?? '').trim();
  const seq = $(root, '[data-seq]');

  const update = () => {
    const steps = copy.steps[val('situation')] ?? [];
    const tone = val('tone') === 'formal' ? 'formal' : 'casual';
    const values = {
      name: val('name') || copy.fallback.name,
      offer: val('offer') || copy.fallback.offer,
      me: val('me') || copy.fallback.me,
      biz: val('biz') || copy.fallback.biz,
      reason: (val('reason') || copy.noReason).replace(/\.$/, ''),
    };
    seq.replaceChildren(
      ...steps.map((s) => {
        // A reason that opens a sentence needs its capital; mid sentence it keeps the case it was typed in.
        const tpl = s[tone];
        const text = buildMessage(tpl, { ...values, reason: /(^|[.!?]\s)\{reason\}/.test(tpl) ? cap(values.reason) : values.reason });
        const btn = h('button', { type: 'button', class: 'btn sm' }, copy.copy);
        btn.addEventListener('click', async () => {
          if (await copyText(text)) {
            btn.textContent = copy.copied;
            window.setTimeout(() => (btn.textContent = copy.copy), 1600);
          }
        });
        return h(
          'li',
          { class: 'wa-step' },
          h(
            'div',
            { class: 'wa-msg' },
            h('span', { class: 'wa-day' }, s.day === 1 ? copy.today : fill(copy.day, { n: String(s.day) })),
            h('p', { class: 'wa-bubble' }, text),
            h(
              'div',
              { class: 'wa-actions' },
              btn,
              h('a', { class: 'btn btn-quiet sm', href: `https://wa.me/?text=${encodeURIComponent(text)}`, target: '_blank', rel: 'noopener' }, copy.open),
            ),
          ),
          h('p', { class: 'wa-why' }, h('small', null, copy.whyLabel), s.why),
        );
      }),
    );
  };

  onInput(root, update);
  update();
}
