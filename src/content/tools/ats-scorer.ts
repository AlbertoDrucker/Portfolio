import type { Localized } from '../../i18n/ui';

/** Match credit by platform family, from the Career Workspace ATS engine: exact / inflection / synonym / other language. */
export const atsFamilies = {
  ai: { credit: [1, 1, 0.92, 0.8], w: { kw: 0.45, req: 0.2, ev: 0.25, hyg: 0.1 } },
  taxonomy: { credit: [1, 1, 0.85, 0.45], w: { kw: 0.5, req: 0.2, ev: 0.2, hyg: 0.1 } },
  literal: { credit: [1, 0.85, 0.35, 0], w: { kw: 0.6, req: 0.2, ev: 0.1, hyg: 0.1 } },
} as const;

const JD_EN = `Senior Product Marketing Manager, LATAM
Nubo Pay is a fictional payments company growing across Mexico and Colombia.

What you will do
- Own the go-to-market strategy for new products in Mexico and Colombia
- Build positioning and messaging that sales teams can use
- Lead market research and customer segmentation
- Define pricing strategy with finance
- Run sales enablement: battlecards, training and launch kits
- Measure product launches with clear KPIs

Requirements
- 5+ years in product marketing or marketing strategy
- Experience in fintech or B2B
- Data analytics skills; SQL is a plus
- Fluent English and Spanish
- Bachelor's degree`;

const JD_ES = `Gerente Sr. de Product Marketing, LATAM
Nubo Pay es una empresa ficticia de pagos que crece en México y Colombia.

Responsabilidades
- Ser dueño de la estrategia de salida al mercado de nuevos productos en México y Colombia
- Construir el posicionamiento y los mensajes clave que usa el equipo de ventas
- Liderar la investigación de mercados y la segmentación de clientes
- Definir la estrategia de precios con finanzas
- Habilitación de ventas: battlecards, capacitación y kits de lanzamiento
- Medir los lanzamientos de producto con KPIs claros

Requisitos
- 5+ años en marketing de producto o estrategia de marketing
- Experiencia en fintech o B2B
- Análisis de datos; SQL deseable
- Inglés y español fluidos
- Licenciatura`;

const CV = `Jordan Rivera
Marketing Manager

EXPERIENCE
Brightline Foods, Marketing Manager, 2021 - Present
- Led the launch strategy for 4 new products across 3 countries, reaching 12% category share in year one
- Built the value proposition and storytelling for a premium line using consumer research with 40+ interviews
- Managed a $2M media plan and cut cost per acquisition 18%
- Partnered with finance on price architecture for 30 SKUs

Northwind Retail, Brand Analyst, 2018 - 2021
- Analyzed sales and survey data in Excel to segment 5 customer groups
- Coordinated campaigns with agencies for 6 brands

EDUCATION
B.S. in Business Administration, 2018

SKILLS
Brand management, campaigns, Excel, Power BI, Spanish (native), English (fluent)`;

export const atsScorer: Localized<{
  posting: string;
  postingHint: string;
  resume: string;
  resumeHint: string;
  samples: string;
  sampleEn: string;
  sampleEs: string;
  family: string;
  families: Record<keyof typeof atsFamilies, string>;
  familyHints: Record<keyof typeof atsFamilies, string>;
  score: string;
  keywords: string;
  requirements: string;
  evidence: string;
  acrossTitle: string;
  acrossLead: string;
  termsTitle: string;
  th: { term: string; where: string; match: string };
  fixesTitle: string;
  noFixes: string;
  checksTitle: string;
  note: string;
  defaults: { jd: string; cv: string; jdEs: string };
  dyn: {
    bands: { strong: string; competitive: string; borderline: string; weak: string };
    bandText: { strong: string; competitive: string; borderline: string; weak: string };
    capped: string;
    levels: string[];
    where: { title: string; required: string; resp: string; preferred: string; other: string };
    fix: string;
    fixLang: string;
    fixSyn: string;
    checks: { years: string; yearsOk: string; english: string; englishOk: string; degree: string; degreeOk: string; pronouns: string; metrics: string };
    empty: string;
  };
}> = {
  en: {
    posting: 'Job posting',
    postingHint: 'Paste the full posting, including requirements.',
    resume: 'Resume',
    resumeHint: 'Paste the text of a resume. Nothing leaves your browser.',
    samples: 'Try a sample',
    sampleEn: 'English posting',
    sampleEs: 'Spanish posting, English resume',
    family: 'Applicant tracking system type',
    families: { ai: 'AI ranking', taxonomy: 'Skills taxonomy', literal: 'Literal keyword search' },
    familyHints: {
      ai: 'Systems that rank candidates with models and understand synonyms and other languages well.',
      taxonomy: 'Systems that map resumes to a skills library. Synonyms count; other languages count less.',
      literal: 'Older systems and recruiter searches that look for the exact words. Synonyms barely count.',
    },
    score: 'Estimated match',
    keywords: 'Keywords',
    requirements: 'Screen out checks',
    evidence: 'Evidence',
    acrossTitle: 'The same resume, three kinds of systems',
    acrossLead: 'Why one resume can rank well in one company and disappear in another.',
    termsTitle: 'What the posting asks for',
    th: { term: 'Term', where: 'Where it appears', match: 'In the resume' },
    fixesTitle: 'Highest value changes',
    noFixes: 'No important gaps. Check the wording of your top bullets.',
    checksTitle: 'Screen out checks',
    note: 'An estimate built from public documentation and testing of these systems, not the output of any employer’s software.',
    defaults: { jd: JD_EN, cv: CV, jdEs: JD_ES },
    dyn: {
      bands: { strong: 'Strong', competitive: 'Competitive', borderline: 'Borderline', weak: 'Weak' },
      bandText: {
        strong: 'Likely to rank near the top. Spend your time on the cover note and a referral.',
        competitive: 'In the running. A few targeted changes would move it up.',
        borderline: 'At risk of being filtered out. Fix the gaps below before applying.',
        weak: 'Unlikely to reach a person. Either the fit is low or the resume does not show it.',
      },
      capped: 'Capped at 59 because a screen out check failed. Without it, the score would be {n}.',
      levels: ['Exact', 'Variant', 'Synonym', 'Other language', 'Missing'],
      where: { title: 'Job title', required: 'Requirements', resp: 'Responsibilities', preferred: 'Nice to have', other: 'Description' },
      fix: 'Add “{term}” with evidence, ideally in a bullet with a number.',
      fixLang: 'Write “{term}” in the posting’s language. Right now only the {other} form appears.',
      fixSyn: 'Use the posting’s exact wording, “{term}”. Literal systems miss “{have}”.',
      checks: {
        years: 'The posting asks for {need}+ years; the resume shows about {have}.',
        yearsOk: 'Years of experience: {have} against {need} asked.',
        english: 'The posting asks for English and the resume does not state it.',
        englishOk: 'English stated.',
        degree: 'The posting asks for a degree and the resume does not show one.',
        degreeOk: 'Degree shown.',
        pronouns: 'First person words like “I” or “my” found. Resumes read better without them.',
        metrics: '{n} of {t} bullets include a number.',
      },
      empty: 'Paste a posting and a resume to see the score.',
    },
  },
  es: {
    posting: 'Vacante',
    postingHint: 'Pega la vacante completa, con requisitos.',
    resume: 'CV',
    resumeHint: 'Pega el texto de un CV. Nada sale de tu navegador.',
    samples: 'Prueba un ejemplo',
    sampleEn: 'Vacante en inglés',
    sampleEs: 'Vacante en español, CV en inglés',
    family: 'Tipo de sistema de reclutamiento',
    families: { ai: 'Ranking con IA', taxonomy: 'Catálogo de habilidades', literal: 'Búsqueda literal de palabras' },
    familyHints: {
      ai: 'Sistemas que ordenan candidatos con modelos y entienden bien sinónimos y otros idiomas.',
      taxonomy: 'Sistemas que relacionan el CV con un catálogo de habilidades. Los sinónimos cuentan; otro idioma cuenta menos.',
      literal: 'Sistemas más antiguos y búsquedas de reclutadores que buscan las palabras exactas. Los sinónimos casi no cuentan.',
    },
    score: 'Coincidencia estimada',
    keywords: 'Palabras clave',
    requirements: 'Filtros',
    evidence: 'Evidencia',
    acrossTitle: 'El mismo CV, tres tipos de sistema',
    acrossLead: 'Por qué un CV puede quedar arriba en una empresa y desaparecer en otra.',
    termsTitle: 'Lo que pide la vacante',
    th: { term: 'Término', where: 'Dónde aparece', match: 'En el CV' },
    fixesTitle: 'Los cambios que más valen',
    noFixes: 'No hay brechas importantes. Revisa la redacción de tus mejores viñetas.',
    checksTitle: 'Filtros',
    note: 'Una estimación construida con documentación pública y pruebas de estos sistemas, no el resultado del software de ningún empleador.',
    defaults: { jd: JD_ES, cv: CV, jdEs: JD_ES },
    dyn: {
      bands: { strong: 'Fuerte', competitive: 'Competitivo', borderline: 'En el límite', weak: 'Débil' },
      bandText: {
        strong: 'Probablemente quede entre los primeros. Invierte tu tiempo en la carta y en un referido.',
        competitive: 'En la pelea. Unos cuantos cambios dirigidos lo subirían.',
        borderline: 'En riesgo de quedar filtrado. Corrige las brechas de abajo antes de aplicar.',
        weak: 'Es poco probable que llegue a una persona. O el ajuste es bajo o el CV no lo muestra.',
      },
      capped: 'Limitado a 59 porque falló un filtro. Sin eso, el puntaje sería {n}.',
      levels: ['Exacta', 'Variante', 'Sinónimo', 'Otro idioma', 'No aparece'],
      where: { title: 'Título del puesto', required: 'Requisitos', resp: 'Responsabilidades', preferred: 'Deseable', other: 'Descripción' },
      fix: 'Agrega “{term}” con evidencia, de preferencia en una viñeta con un número.',
      fixLang: 'Escribe “{term}” en el idioma de la vacante. Ahora solo aparece la forma en {other}.',
      fixSyn: 'Usa la redacción exacta de la vacante, “{term}”. Los sistemas literales no reconocen “{have}”.',
      checks: {
        years: 'La vacante pide {need}+ años; el CV muestra unos {have}.',
        yearsOk: 'Años de experiencia: {have} contra {need} pedidos.',
        english: 'La vacante pide inglés y el CV no lo menciona.',
        englishOk: 'Inglés mencionado.',
        degree: 'La vacante pide un título y el CV no muestra uno.',
        degreeOk: 'Título mencionado.',
        pronouns: 'Hay palabras en primera persona como “yo” o “mi”. Un CV se lee mejor sin ellas.',
        metrics: '{n} de {t} viñetas incluyen un número.',
      },
      empty: 'Pega una vacante y un CV para ver el puntaje.',
    },
  },
};
