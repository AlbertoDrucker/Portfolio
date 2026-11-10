import type { Lang, Localized } from '../../i18n/ui';

export type Owner = 'person' | 'review' | 'ai';

export interface FlowStep {
  name: string;
  manual: number;
  ai: number;
  review: number;
  critical: boolean;
  owner: Owner;
}

export interface FlowTemplate {
  id: string;
  label: string;
  steps: FlowStep[];
}

const t = (en: string, es: string) => ({ en, es });
type Raw = { name: { en: string; es: string }; manual: number; ai: number; review: number; critical: boolean; owner: Owner };

const raw: { id: string; label: { en: string; es: string }; steps: Raw[] }[] = [
  {
    id: 'research',
    label: t('Market research brief', 'Brief de investigación de mercado'),
    steps: [
      { name: t('Define the question', 'Definir la pregunta'), manual: 30, ai: 5, review: 15, critical: true, owner: 'person' },
      { name: t('Gather sources and data', 'Reunir fuentes y datos'), manual: 240, ai: 20, review: 30, critical: false, owner: 'review' },
      { name: t('Verify facts and figures', 'Verificar datos y cifras'), manual: 90, ai: 10, review: 40, critical: true, owner: 'person' },
      { name: t('Synthesize findings', 'Sintetizar hallazgos'), manual: 180, ai: 15, review: 45, critical: false, owner: 'review' },
      { name: t('Draw the implications', 'Sacar las implicaciones'), manual: 90, ai: 10, review: 40, critical: true, owner: 'person' },
      { name: t('Write and format the brief', 'Redactar y dar formato'), manual: 120, ai: 10, review: 30, critical: false, owner: 'review' },
    ],
  },
  {
    id: 'interviews',
    label: t('Customer interview synthesis', 'Síntesis de entrevistas con clientes'),
    steps: [
      { name: t('Transcribe the interviews', 'Transcribir las entrevistas'), manual: 240, ai: 10, review: 15, critical: false, owner: 'ai' },
      { name: t('Tag themes', 'Etiquetar temas'), manual: 180, ai: 15, review: 45, critical: false, owner: 'review' },
      { name: t('Pull key quotes', 'Extraer citas clave'), manual: 90, ai: 10, review: 20, critical: false, owner: 'review' },
      { name: t('Spot patterns and tensions', 'Detectar patrones y tensiones'), manual: 120, ai: 15, review: 45, critical: true, owner: 'review' },
      { name: t('Decide what to act on', 'Decidir sobre qué actuar'), manual: 60, ai: 5, review: 30, critical: true, owner: 'person' },
      { name: t('Share the readout', 'Compartir los resultados'), manual: 90, ai: 10, review: 30, critical: false, owner: 'review' },
    ],
  },
  {
    id: 'campaign',
    label: t('Campaign brief', 'Brief de campaña'),
    steps: [
      { name: t('Clarify objective and audience', 'Aclarar objetivo y audiencia'), manual: 45, ai: 5, review: 20, critical: true, owner: 'person' },
      { name: t('Gather insights', 'Reunir insights'), manual: 120, ai: 15, review: 30, critical: false, owner: 'review' },
      { name: t('Generate concept routes', 'Generar rutas creativas'), manual: 240, ai: 15, review: 60, critical: false, owner: 'review' },
      { name: t('Choose the route', 'Elegir la ruta'), manual: 60, ai: 5, review: 30, critical: true, owner: 'person' },
      { name: t('Write copy variants', 'Escribir variantes de copy'), manual: 180, ai: 10, review: 40, critical: false, owner: 'review' },
      { name: t('Legal and brand check', 'Revisión legal y de marca'), manual: 60, ai: 10, review: 30, critical: true, owner: 'person' },
    ],
  },
];

const templatesFor = (lang: Lang): FlowTemplate[] =>
  raw.map((r) => ({ id: r.id, label: r.label[lang], steps: r.steps.map((s) => ({ ...s, name: s.name[lang] })) }));

export const aiWorkflowBuilder: Localized<{
  templates: FlowTemplate[];
  templateLabel: string;
  stepsTitle: string;
  owners: Record<Owner, string>;
  critical: string;
  timeBefore: string;
  timeAfter: string;
  saved: string;
  coverage: string;
  laneAi: string;
  lanePerson: string;
  flowTitle: string;
  dyn: {
    hours: string;
    coverage: string;
    allCovered: string;
    gaps: string;
    allPerson: string;
    review: string;
    flowAria: string;
  };
}> = {
  en: {
    templates: templatesFor('en'),
    templateLabel: 'Pick a task',
    stepsTitle: 'Who does each step',
    owners: { person: 'Person', review: 'AI + review', ai: 'AI alone' },
    critical: 'Judgment step',
    timeBefore: 'All by hand',
    timeAfter: 'With this design',
    saved: 'Time saved',
    coverage: 'Judgment coverage',
    laneAi: 'AI',
    lanePerson: 'Person',
    flowTitle: 'The workflow',
    dyn: {
      hours: '{n} h',
      coverage: '{n} of {total}',
      allCovered: 'Every judgment step keeps a person involved. AI takes the volume, people keep the decisions.',
      gaps: 'No person checks these judgment steps: {steps}. That is where errors become decisions.',
      allPerson: 'Everything is done by hand. Start by giving AI the steps with the most hours and no judgment flag.',
      review: 'review',
      flowAria: 'Swimlane diagram with one lane for AI and one for people, showing who does each step in order.',
    },
  },
  es: {
    templates: templatesFor('es'),
    templateLabel: 'Elige una tarea',
    stepsTitle: 'Quién hace cada paso',
    owners: { person: 'Persona', review: 'IA + revisión', ai: 'Solo IA' },
    critical: 'Paso de criterio',
    timeBefore: 'Todo a mano',
    timeAfter: 'Con este diseño',
    saved: 'Tiempo ahorrado',
    coverage: 'Cobertura de criterio',
    laneAi: 'IA',
    lanePerson: 'Persona',
    flowTitle: 'El flujo',
    dyn: {
      hours: '{n} h',
      coverage: '{n} de {total}',
      allCovered: 'Cada paso de criterio tiene a una persona involucrada. La IA pone el volumen, las personas se quedan con las decisiones.',
      gaps: 'Ninguna persona revisa estos pasos de criterio: {steps}. Ahí es donde los errores se vuelven decisiones.',
      allPerson: 'Todo se hace a mano. Empieza por darle a la IA los pasos con más horas y sin marca de criterio.',
      review: 'revisión',
      flowAria: 'Diagrama de carriles con uno para la IA y otro para personas, que muestra quién hace cada paso en orden.',
    },
  },
};
