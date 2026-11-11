import type { Localized } from '../../i18n/ui';

/** Six questions, each scored 0 to 2 in the order written. */
export const launchQuestions: { id: string; text: Localized<{ q: string; options: string[] }> }[] = [
  {
    id: 'revenue',
    text: {
      en: { q: 'How much of this year’s plan depends on this launch?', options: ['Very little', 'A meaningful part', 'A major share'] },
      es: { q: '¿Qué tanto del plan de este año depende de este lanzamiento?', options: ['Muy poco', 'Una parte importante', 'Una parte mayor'] },
    },
  },
  {
    id: 'audience',
    text: {
      en: { q: 'Who is it for?', options: ['Customers we already have', 'Current customers and some new ones', 'An audience that does not know us'] },
      es: { q: '¿Para quién es?', options: ['Clientes que ya tenemos', 'Clientes actuales y algunos nuevos', 'Un público que no nos conoce'] },
    },
  },
  {
    id: 'difference',
    text: {
      en: { q: 'How different is it from what competitors offer?', options: ['It closes a gap', 'Better on something customers care about', 'New in the market'] },
      es: { q: '¿Qué tan distinto es de lo que ofrece la competencia?', options: ['Cierra una brecha', 'Mejor en algo que al cliente le importa', 'Nuevo en el mercado'] },
    },
  },
  {
    id: 'change',
    text: {
      en: { q: 'How much do customers need to change to use it?', options: ['Nothing', 'A little learning', 'New habits or a migration'] },
      es: { q: '¿Cuánto tiene que cambiar el cliente para usarlo?', options: ['Nada', 'Un poco de aprendizaje', 'Nuevos hábitos o una migración'] },
    },
  },
  {
    id: 'sales',
    text: {
      en: { q: 'How much do sales or partners need to explain it?', options: ['It sells itself', 'It needs a clear pitch', 'It needs training and tools'] },
      es: { q: '¿Cuánto necesitan explicarlo ventas o los socios?', options: ['Se vende solo', 'Necesita un pitch claro', 'Necesita capacitación y herramientas'] },
    },
  },
  {
    id: 'visibility',
    text: {
      en: { q: 'Who is watching?', options: ['Only the team', 'Leadership', 'The market, publicly'] },
      es: { q: '¿Quién está observando?', options: ['Solo el equipo', 'La dirección', 'El mercado, públicamente'] },
    },
  },
];

export const launchPlanner: Localized<{
  intro: string;
  score: string;
  tier: string;
  needsTitle: string;
  watchTitle: string;
  reset: string;
  dyn: {
    progress: string;
    waiting: string;
    weeks: string;
    tiers: { name: string; text: string; weeks: number; needs: string[] }[];
    watch: { audience: string; change: string; sales: string; none: string };
  };
}> = {
  en: {
    intro: 'Not every launch deserves the same effort. Six questions decide how big this one should be and what it needs.',
    score: 'Launch score',
    tier: 'Launch size',
    needsTitle: 'What this launch needs',
    watchTitle: 'Where it can go wrong',
    reset: 'Start over',
    dyn: {
      progress: '{n} of {t} answered',
      waiting: 'Answer every question to see the plan.',
      weeks: 'Plan for about {n} weeks of preparation.',
      tiers: [
        {
          name: 'Quiet release',
          text: 'Ship it and tell the people who asked for it. Save the big effort for a launch that moves the plan.',
          weeks: 2,
          needs: ['A release note in plain language', 'An update for the sales and service teams', 'A message to the customers who requested it', 'One measure of use after 30 days'],
        },
        {
          name: 'Focused launch',
          text: 'Pick one segment and one message, equip the people who sell it and measure adoption, not just announcements.',
          weeks: 6,
          needs: [
            'Positioning and three proof points for one segment',
            'A one page sales guide with the questions customers will ask',
            'Customer email, in product or in store message and one supporting channel',
            'Pricing and packaging confirmed with finance',
            'Adoption and revenue targets for the first 90 days',
          ],
        },
        {
          name: 'Full launch',
          text: 'This one carries the plan. Treat it as a cross functional program with a single owner, a launch date and a rehearsal.',
          weeks: 12,
          needs: [
            'Positioning tested with real customers before any creative work',
            'Messaging by segment, with proof for each claim',
            'Sales and partner training, demo and objection handling',
            'Pricing, packaging and promotion plan signed off',
            'A channel plan across owned, paid and earned media',
            'A launch day run of show and a plan for the first 30 days after',
            'A dashboard of awareness, adoption, revenue and feedback',
          ],
        },
      ],
      watch: {
        audience: 'A new audience does not know why to trust you. Test the message with five people from that audience before you spend on reach.',
        change: 'Adoption is the risk. If customers must change habits, plan the onboarding before the promotion.',
        sales: 'Enablement is the risk. If the team cannot explain it in one minute, the launch will stall in the field.',
        none: 'No major risk stands out. Keep the effort proportional and protect the team’s time for bigger bets.',
      },
    },
  },
  es: {
    intro: 'No todos los lanzamientos merecen el mismo esfuerzo. Seis preguntas definen qué tan grande debe ser este y qué necesita.',
    score: 'Puntaje del lanzamiento',
    tier: 'Tamaño del lanzamiento',
    needsTitle: 'Lo que necesita este lanzamiento',
    watchTitle: 'Dónde puede fallar',
    reset: 'Empezar de nuevo',
    dyn: {
      progress: '{n} de {t} respondidas',
      waiting: 'Responde todas las preguntas para ver el plan.',
      weeks: 'Considera unas {n} semanas de preparación.',
      tiers: [
        {
          name: 'Liberación discreta',
          text: 'Libéralo y avísale a quienes lo pidieron. Guarda el esfuerzo grande para un lanzamiento que mueva el plan.',
          weeks: 2,
          needs: ['Una nota de liberación en lenguaje claro', 'Un aviso a los equipos de ventas y servicio', 'Un mensaje a los clientes que lo solicitaron', 'Una métrica de uso a los 30 días'],
        },
        {
          name: 'Lanzamiento enfocado',
          text: 'Elige un segmento y un mensaje, prepara a quienes lo venden y mide adopción, no solo anuncios.',
          weeks: 6,
          needs: [
            'Posicionamiento y tres pruebas para un segmento',
            'Una guía de ventas de una página con las preguntas que hará el cliente',
            'Correo a clientes, mensaje en el producto o en tienda y un canal de apoyo',
            'Precio y empaque confirmados con finanzas',
            'Metas de adopción e ingreso para los primeros 90 días',
          ],
        },
        {
          name: 'Lanzamiento completo',
          text: 'Este carga el plan. Trátalo como un programa multifuncional con un solo responsable, una fecha y un ensayo.',
          weeks: 12,
          needs: [
            'Posicionamiento probado con clientes reales antes de cualquier trabajo creativo',
            'Mensajes por segmento, con prueba para cada afirmación',
            'Capacitación a ventas y socios, demo y manejo de objeciones',
            'Plan de precio, empaque y promoción aprobado',
            'Plan de canales en medios propios, pagados y ganados',
            'Minuto a minuto del día de lanzamiento y plan para los 30 días siguientes',
            'Un tablero de conocimiento, adopción, ingreso y retroalimentación',
          ],
        },
      ],
      watch: {
        audience: 'Un público nuevo no sabe por qué confiar en ti. Prueba el mensaje con cinco personas de ese público antes de invertir en alcance.',
        change: 'El riesgo es la adopción. Si el cliente tiene que cambiar hábitos, planea el onboarding antes que la promoción.',
        sales: 'El riesgo es la habilitación comercial. Si el equipo no puede explicarlo en un minuto, el lanzamiento se va a atorar en campo.',
        none: 'No destaca ningún riesgo mayor. Mantén el esfuerzo proporcional y cuida el tiempo del equipo para apuestas más grandes.',
      },
    },
  },
};
