/** Contact form: posts to Web3Forms, which emails the message. The address never appears on the page. */
const ENDPOINT = 'https://api.web3forms.com/submit';

export function initContact() {
  document.querySelectorAll<HTMLFormElement>('form[data-contact]').forEach((form) => {
    if (form.dataset.ready) return;
    form.dataset.ready = 'true';
    const status = form.querySelector<HTMLElement>('[data-status]')!;
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    const label = button.textContent ?? '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const key = form.dataset.key ?? '';
      if (!key) {
        status.textContent = form.dataset.pending ?? '';
        return;
      }
      const data = new FormData(form);
      if (data.get('botcheck')) return;
      button.disabled = true;
      button.textContent = form.dataset.sending ?? label;
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: key,
            subject: `Portfolio: ${data.get('topic')}`,
            from_name: String(data.get('name')),
            name: data.get('name'),
            email: data.get('email'),
            topic: data.get('topic'),
            message: data.get('message'),
            page: location.href,
          }),
        });
        const json = (await res.json()) as { success?: boolean };
        if (!res.ok || !json.success) throw new Error('send failed');
        form.reset();
        status.textContent = form.dataset.success ?? '';
      } catch {
        status.textContent = form.dataset.error ?? '';
      } finally {
        button.disabled = false;
        button.textContent = label;
      }
    });
  });
}
