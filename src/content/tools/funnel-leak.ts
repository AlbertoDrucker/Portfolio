import type { Localized } from '../../i18n/ui';

/** Rough reference rates per business type. Illustrative, not a benchmark study. */
export const funnelRefs: Record<string, { lead: number; close: number; repeat: number }> = {
  services: { lead: 3, close: 20, repeat: 45 },
  store: { lead: 7, close: 28, repeat: 30 },
  local: { lead: 6, close: 35, repeat: 40 },
};

export const funnelLeak: Localized<{
  type: string;
  types: Record<string, string>;
  currency: string;
  visitors: string;
  visitorsHint: string;
  lead: string;
  leadHint: string;
  close: string;
  repeat: string;
  repeatHint: string;
  ticket: string;
  revenue: string;
  customers: string;
  upside: string;
  stagesTitle: string;
  refNote: string;
  dyn: {
    stages: { lead: string; close: string; repeat: string };
    moves: { lead: string; close: string; repeat: string };
    you: string;
    typical: string;
    gain: string;
    ahead: string;
    leak: string;
    allGood: string;
    perMonth: string;
  };
}> = {
  en: {
    type: 'Type of business',
    types: { services: 'B2B services', store: 'Online store', local: 'Local business' },
    currency: 'Currency',
    visitors: 'People who find you each month',
    visitorsHint: 'Website visits, walk ins or inquiries, whatever your first contact is.',
    lead: 'Of those, how many show real interest',
    leadHint: 'They ask for a quote, add to cart, book a call or leave their contact.',
    close: 'Of the interested, how many buy',
    repeat: 'Of your customers, how many buy again within a year',
    repeatHint: 'A second purchase, a renewal or a new project.',
    ticket: 'Average sale',
    revenue: 'Revenue per month',
    customers: 'New customers per month',
    upside: 'Left on the table each month',
    stagesTitle: 'Where your funnel leaks',
    refNote: 'Typical rates are rough references for each type of business. Your industry may differ, so treat the gap as a question to investigate.',
    dyn: {
      stages: { lead: 'Interest', close: 'Purchase', repeat: 'Repeat' },
      moves: {
        lead: 'First move: make the next step obvious. One clear offer, one clear action and a reason to leave a contact today.',
        close: 'First move: look at speed and follow up. Most lost sales are quotes nobody chased within two days.',
        repeat: 'First move: contact every customer 30 days after the purchase with a specific reason to come back.',
      },
      you: 'You {v}',
      typical: 'Typical {v}',
      gain: 'Reaching typical adds {m} a month',
      ahead: 'Ahead of typical',
      leak: 'Your biggest leak is {stage}. Closing that gap alone is worth about {m} a month.',
      allGood: 'Every stage is at or above the typical rate. Your growth lever is more people at the top, not a leak in the middle.',
      perMonth: '{m} a month',
    },
  },
  es: {
    type: 'Tipo de negocio',
    types: { services: 'Servicios B2B', store: 'Tienda en línea', local: 'Negocio local' },
    currency: 'Moneda',
    visitors: 'Personas que te encuentran al mes',
    visitorsHint: 'Visitas al sitio, gente que entra o pregunta, lo que sea tu primer contacto.',
    lead: 'De esas, cuántas muestran interés real',
    leadHint: 'Piden cotización, agregan al carrito, agendan una llamada o dejan su contacto.',
    close: 'De las interesadas, cuántas compran',
    repeat: 'De tus clientes, cuántos vuelven a comprar en un año',
    repeatHint: 'Una segunda compra, una renovación o un proyecto nuevo.',
    ticket: 'Venta promedio',
    revenue: 'Ingreso al mes',
    customers: 'Clientes nuevos al mes',
    upside: 'Lo que dejas en la mesa al mes',
    stagesTitle: 'Dónde se fuga tu embudo',
    refNote: 'Las tasas típicas son referencias aproximadas para cada tipo de negocio. Tu industria puede ser distinta, así que toma la brecha como una pregunta por investigar.',
    dyn: {
      stages: { lead: 'Interés', close: 'Compra', repeat: 'Recompra' },
      moves: {
        lead: 'Primer paso: haz obvio el siguiente paso. Una oferta clara, una acción clara y una razón para dejar su contacto hoy.',
        close: 'Primer paso: revisa velocidad y seguimiento. La mayoría de las ventas perdidas son cotizaciones a las que nadie dio seguimiento en dos días.',
        repeat: 'Primer paso: contacta a cada cliente 30 días después de la compra con una razón concreta para volver.',
      },
      you: 'Tú {v}',
      typical: 'Típico {v}',
      gain: 'Llegar a lo típico suma {m} al mes',
      ahead: 'Arriba de lo típico',
      leak: 'Tu mayor fuga está en {stage}. Cerrar solo esa brecha vale cerca de {m} al mes.',
      allGood: 'Todas las etapas están en la tasa típica o arriba. Tu palanca de crecimiento es traer más gente al inicio, no una fuga en medio.',
      perMonth: '{m} al mes',
    },
  },
};
