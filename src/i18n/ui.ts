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
      contactLead: 'Open to strategy, marketing and applied AI roles in Mexico, and to projects where one of these tools could help your business.',
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
      contactLead: 'Abierto a roles de estrategia, marketing e IA aplicada en México, y a proyectos donde alguna de estas herramientas le sirva a tu negocio.',
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
