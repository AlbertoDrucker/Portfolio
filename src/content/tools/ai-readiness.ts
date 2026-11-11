import type { Localized } from '../../i18n/ui';

export type Dim = 'data' | 'process' | 'people' | 'direction';

/** Two questions per dimension. Options score 0 to 3 in the order written. */
export const readinessQuestions: { id: string; dim: Dim; text: Localized<{ q: string; options: string[] }> }[] = [
  {
    id: 'q1',
    dim: 'data',
    text: {
      en: { q: 'Where does your key business information live?', options: ['In people’s heads and on paper', 'In scattered spreadsheets and chats', 'Mostly in one or two systems', 'In connected systems we trust'] },
      es: { q: '¿Dónde vive la información clave de tu negocio?', options: ['En la cabeza de la gente y en papel', 'En hojas de cálculo y chats dispersos', 'Casi toda en uno o dos sistemas', 'En sistemas conectados en los que confiamos'] },
    },
  },
  {
    id: 'q2',
    dim: 'data',
    text: {
      en: { q: 'If you needed last quarter’s sales by customer, how long would it take?', options: ['Days, and we would argue about the number', 'A day of manual work', 'About an hour', 'A few minutes'] },
      es: { q: 'Si necesitaras las ventas por cliente del trimestre pasado, ¿cuánto tardarías?', options: ['Días, y discutiríamos el número', 'Un día de trabajo manual', 'Como una hora', 'Unos minutos'] },
    },
  },
  {
    id: 'q3',
    dim: 'process',
    text: {
      en: { q: 'How are your repetitive tasks done today?', options: ['Each person does them their own way', 'There is a usual way, but it is not written', 'They are documented step by step', 'Documented and measured'] },
      es: { q: '¿Cómo se hacen hoy las tareas repetitivas?', options: ['Cada quien las hace a su manera', 'Hay una forma habitual, pero no está escrita', 'Están documentadas paso a paso', 'Documentadas y medidas'] },
    },
  },
  {
    id: 'q4',
    dim: 'process',
    text: {
      en: { q: 'Do you know which tasks eat the most hours each week?', options: ['Not really', 'We have a feeling', 'We could list the top five', 'We track time by task'] },
      es: { q: '¿Sabes qué tareas consumen más horas cada semana?', options: ['La verdad no', 'Tenemos una idea', 'Podríamos listar las cinco principales', 'Medimos el tiempo por tarea'] },
    },
  },
  {
    id: 'q5',
    dim: 'people',
    text: {
      en: { q: 'How does your team use AI tools today?', options: ['Nobody uses them', 'A few people, on their own', 'Many use them, with no shared rules', 'We have approved tools and clear rules'] },
      es: { q: '¿Cómo usa tu equipo las herramientas de IA hoy?', options: ['Nadie las usa', 'Algunas personas, por su cuenta', 'Muchos las usan, sin reglas comunes', 'Tenemos herramientas aprobadas y reglas claras'] },
    },
  },
  {
    id: 'q6',
    dim: 'people',
    text: {
      en: { q: 'When you introduce a new tool, what usually happens?', options: ['It gets abandoned within weeks', 'A few people adopt it', 'Most people adopt it with a push', 'People ask for the next one'] },
      es: { q: 'Cuando introduces una herramienta nueva, ¿qué suele pasar?', options: ['Se abandona en unas semanas', 'La adoptan unas cuantas personas', 'La mayoría la adopta con un empujón', 'La gente pide la siguiente'] },
    },
  },
  {
    id: 'q7',
    dim: 'direction',
    text: {
      en: { q: 'Is there a business problem you want AI to solve?', options: ['No, we just feel we should use it', 'A general idea, like being more efficient', 'One specific problem', 'A specific problem with a number attached'] },
      es: { q: '¿Hay un problema de negocio que quieras resolver con IA?', options: ['No, solo sentimos que deberíamos usarla', 'Una idea general, como ser más eficientes', 'Un problema específico', 'Un problema específico con un número'] },
    },
  },
  {
    id: 'q8',
    dim: 'direction',
    text: {
      en: { q: 'Who would own an AI project in your company?', options: ['Nobody yet', 'Whoever has time', 'A named person, on top of their job', 'A named person with time and budget'] },
      es: { q: '¿Quién sería dueño de un proyecto de IA en tu empresa?', options: ['Nadie todavía', 'Quien tenga tiempo', 'Una persona definida, además de su trabajo', 'Una persona definida con tiempo y presupuesto'] },
    },
  },
];

export const aiReadiness: Localized<{
  intro: string;
  score: string;
  level: string;
  byArea: string;
  nextTitle: string;
  reset: string;
  dyn: {
    progress: string;
    waiting: string;
    dims: Record<Dim, string>;
    levels: { name: string; text: string }[];
    steps: Record<Dim, string[]>;
    weakest: string;
  };
}> = {
  en: {
    intro: 'Eight questions, two minutes. Answer for the company as it is today, not as you would like it to be.',
    score: 'Readiness score',
    level: 'Where you are',
    byArea: 'By area',
    nextTitle: 'Your next three steps',
    reset: 'Start over',
    dyn: {
      progress: '{n} of {t} answered',
      waiting: 'Answer every question to see your result.',
      dims: { data: 'Data', process: 'Processes', people: 'People', direction: 'Direction' },
      levels: [
        { name: 'Getting ready', text: 'AI will not fix what is not organized yet. The good news is that the first steps are cheap and useful with or without AI.' },
        { name: 'Ready to experiment', text: 'You can start with one small, low risk use case. Pick something internal, measure it and learn before you scale.' },
        { name: 'Ready to pilot', text: 'You have enough in place to run a real pilot on a workflow that matters, with clear measures and an owner.' },
        { name: 'Ready to scale', text: 'The foundations are there. Your question is no longer whether to use AI but which bets deserve the investment.' },
      ],
      steps: {
        data: [
          'Choose the ten numbers that run the business and decide where each one officially lives.',
          'Move one critical spreadsheet into a shared system this month.',
          'Name one person responsible for keeping customer and product data clean.',
        ],
        process: [
          'Write down the five tasks that take the most hours each week.',
          'Document one of them step by step, exactly as it is done today.',
          'Time it for two weeks. That number becomes your business case.',
        ],
        people: [
          'Approve one AI assistant for the whole team and publish three simple rules for using it.',
          'Run a one hour session where each person brings a real task to try.',
          'Find the two people who are already curious and make them your internal guides.',
        ],
        direction: [
          'Pick one problem and write it as a number: hours, days or pesos.',
          'Name one owner with a few hours a week protected for it.',
          'Set a 90 day checkpoint to decide whether to continue, change or stop.',
        ],
      },
      weakest: 'Start with {dim}. It is your lowest area, and the other three depend on it.',
    },
  },
  es: {
    intro: 'Ocho preguntas, dos minutos. Responde por la empresa como es hoy, no como te gustaría que fuera.',
    score: 'Puntaje de preparación',
    level: 'Dónde estás',
    byArea: 'Por área',
    nextTitle: 'Tus siguientes tres pasos',
    reset: 'Empezar de nuevo',
    dyn: {
      progress: '{n} de {t} respondidas',
      waiting: 'Responde todas las preguntas para ver tu resultado.',
      dims: { data: 'Datos', process: 'Procesos', people: 'Personas', direction: 'Dirección' },
      levels: [
        { name: 'Preparando el terreno', text: 'La IA no arregla lo que todavía no está ordenado. La buena noticia es que los primeros pasos son baratos y sirven con o sin IA.' },
        { name: 'Listos para experimentar', text: 'Puedes empezar con un caso de uso pequeño y de bajo riesgo. Elige algo interno, mídelo y aprende antes de escalar.' },
        { name: 'Listos para un piloto', text: 'Tienes lo suficiente para correr un piloto real en un proceso que importa, con métricas claras y un responsable.' },
        { name: 'Listos para escalar', text: 'Las bases están. Tu pregunta ya no es si usar IA, sino qué apuestas merecen la inversión.' },
      ],
      steps: {
        data: [
          'Elige los diez números con los que se maneja el negocio y decide dónde vive oficialmente cada uno.',
          'Pasa una hoja de cálculo crítica a un sistema compartido este mes.',
          'Nombra a una persona responsable de mantener limpios los datos de clientes y productos.',
        ],
        process: [
          'Escribe las cinco tareas que más horas consumen cada semana.',
          'Documenta una de ellas paso a paso, tal como se hace hoy.',
          'Mide su tiempo durante dos semanas. Ese número se vuelve tu caso de negocio.',
        ],
        people: [
          'Aprueba un asistente de IA para todo el equipo y publica tres reglas sencillas de uso.',
          'Organiza una sesión de una hora donde cada persona traiga una tarea real para probar.',
          'Identifica a las dos personas que ya tienen curiosidad y conviértelas en tus guías internas.',
        ],
        direction: [
          'Elige un problema y escríbelo como número: horas, días o pesos.',
          'Nombra a un responsable con algunas horas a la semana protegidas para esto.',
          'Define una revisión a 90 días para decidir si continuar, cambiar o detener.',
        ],
      },
      weakest: 'Empieza por {dim}. Es tu área más baja, y las otras tres dependen de ella.',
    },
  },
};
