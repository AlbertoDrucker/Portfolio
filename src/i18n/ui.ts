export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];
export type Localized<T = string> = Record<Lang, T>;

export type PageSlug = '' | 'how-i-work' | 'work' | 'lab' | 'about';

/** Builds a locale aware path with a trailing slash. English lives at the root. */
export function localePath(lang: Lang, slug: PageSlug | string = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  const base = lang === 'en' ? '' : `/${lang}`;
  return clean ? `${base}/${clean}/` : `${base}/`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');

export type StepKey =
  | 'frame'
  | 'scan'
  | 'fivec'
  | 'insights'
  | 'opportunities'
  | 'options'
  | 'recommendation';

export const stepOrder: StepKey[] = [
  'frame',
  'scan',
  'fivec',
  'insights',
  'opportunities',
  'options',
  'recommendation',
];

const strings = {
  en: {
    siteName: 'Alberto Drucker',
    skip: 'Skip to content',
    nav: {
      label: 'Main',
      work: 'Selected work',
      howIWork: 'How I work with AI',
      lab: 'Lab',
      about: 'About',
    },
    switchLang: 'Español',
    switchLangLabel: 'Ver este sitio en español',
    footer: {
      built: 'Designed and built with Claude Code.',
      location: 'Monterrey, Mexico',
      contactTitle: 'Let’s talk',
      contactLead: 'I’m open to strategy, marketing and applied AI roles in Mexico. If you have a project where one of these tools could help, I’d like to hear about that too.',
      form: {
        name: 'Your name',
        email: 'Your email',
        topic: 'What is this about?',
        topics: ['A role or opportunity', 'Request my resume', 'A project or collaboration', 'One of the tools on this site', 'Just saying hello'],
        message: 'Message',
        send: 'Send message',
        sending: 'Sending',
        success: 'Thank you. Your message is on its way to me.',
        error: 'The message could not be sent. Please try again in a moment.',
        pending: 'The contact form is being connected. Please reach me on LinkedIn for now.',
        privacy: 'Your details are only used to reply to you.',
        book: 'Book a call',
        linkedin: 'LinkedIn',
      },
    },
    engine: {
      name: 'Strategy Engine',
      choose: 'Choose a challenge',
      brief: 'The brief',
      legendAi: 'AI draft',
      legendJudgment: 'My judgment',
      replay: 'Replay',
      showAll: 'Show full brief',
      print: 'Print the brief',
      statusIdle: 'Ready',
      statusDrafting: 'Drafting',
      statusAnnotating: 'Adding judgment',
      statusDone: 'Brief complete',
      upside: 'Upside',
      risk: 'Risk',
      recommended: 'Recommended',
      fictional: 'Fictional scenario built to show the method. Any resemblance to a real company is unintended.',
      steps: {
        frame: 'Frame the question',
        scan: 'Scan the context',
        fivec: 'Map the 5C',
        insights: 'Find the insights',
        opportunities: 'Fix, improve, wow',
        options: 'Weigh the options',
        recommendation: 'Recommend and plan',
      },
    },
  },
  es: {
    siteName: 'Alberto Drucker',
    skip: 'Saltar al contenido',
    nav: {
      label: 'Principal',
      work: 'Proyectos',
      howIWork: 'Cómo trabajo con IA',
      lab: 'Lab',
      about: 'Sobre mí',
    },
    switchLang: 'English',
    switchLangLabel: 'View this site in English',
    footer: {
      built: 'Diseñado y construido con Claude Code.',
      location: 'Monterrey, México',
      contactTitle: 'Platiquemos',
      contactLead: 'Estoy abierto a roles de estrategia, marketing e IA aplicada en México. Si tienes un proyecto donde alguna de estas herramientas pueda ayudar, también me interesa escucharlo.',
      form: {
        name: 'Tu nombre',
        email: 'Tu correo',
        topic: '¿De qué se trata?',
        topics: ['Un puesto u oportunidad', 'Solicitar mi CV', 'Un proyecto o colaboración', 'Una de las herramientas de este sitio', 'Solo quiero saludar'],
        message: 'Mensaje',
        send: 'Enviar mensaje',
        sending: 'Enviando',
        success: 'Gracias. Tu mensaje ya va en camino.',
        error: 'No se pudo enviar el mensaje. Intenta de nuevo en un momento.',
        pending: 'El formulario de contacto se está conectando. Por ahora, búscame en LinkedIn.',
        privacy: 'Tus datos solo se usan para responderte.',
        book: 'Agendar una llamada',
        linkedin: 'LinkedIn',
      },
    },
    engine: {
      name: 'Strategy Engine',
      choose: 'Elige un reto',
      brief: 'El planteamiento',
      legendAi: 'Borrador de IA',
      legendJudgment: 'Mi criterio',
      replay: 'Repetir',
      showAll: 'Ver análisis completo',
      print: 'Imprimir análisis',
      statusIdle: 'Listo',
      statusDrafting: 'Redactando',
      statusAnnotating: 'Agregando criterio',
      statusDone: 'Análisis completo',
      upside: 'A favor',
      risk: 'Riesgo',
      recommended: 'Recomendada',
      fictional: 'Escenario ficticio creado para mostrar el método. Cualquier parecido con una empresa real es coincidencia.',
      steps: {
        frame: 'Plantear la pregunta',
        scan: 'Leer el contexto',
        fivec: 'Mapear las 5C',
        insights: 'Encontrar los insights',
        opportunities: 'Corregir, mejorar, sorprender',
        options: 'Comparar opciones',
        recommendation: 'Recomendar y planear',
      },
    },
  },
} as const;

export type UIStrings = (typeof strings)['en'];

export function useStrings(lang: Lang): UIStrings {
  return strings[lang] as unknown as UIStrings;
}
