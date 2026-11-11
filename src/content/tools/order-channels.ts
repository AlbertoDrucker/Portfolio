import type { Localized } from '../../i18n/ui';

export type Channel = 'rep' | 'phone' | 'chat' | 'portal';

/** Starting assumptions per channel. Visitors can change all of them. */
export const channelDefaults: Record<Channel, { share: number; cost: number; error: number }> = {
  rep: { share: 35, cost: 180, error: 4 },
  phone: { share: 30, cost: 95, error: 6 },
  chat: { share: 25, cost: 70, error: 9 },
  portal: { share: 10, cost: 12, error: 1.5 },
};

export const orderChannels: Localized<{
  currency: string;
  orders: string;
  errorCost: string;
  errorCostHint: string;
  mixTitle: string;
  mixHint: string;
  target: string;
  targetHint: string;
  assumptions: string;
  costPer: string;
  errorRate: string;
  costToday: string;
  costTarget: string;
  saving: string;
  errors: string;
  barsTitle: string;
  tableTitle: string;
  th: { channel: string; today: string; target: string; cost: string; errors: string };
  channels: Record<Channel, string>;
  dyn: {
    perOrder: string;
    perYear: string;
    fewer: string;
    verdict: string;
    noShift: string;
    biggest: string;
    today: string;
    target: string;
  };
}> = {
  en: {
    currency: 'Currency',
    orders: 'Orders per month',
    errorCost: 'Cost of one order error',
    errorCostHint: 'Rework, a second delivery, a credit note and the call that follows.',
    mixTitle: 'How orders arrive today',
    mixHint: 'Sliders are relative weights and always add up to 100%.',
    target: 'Target share for the portal or app',
    targetHint: 'The other channels shrink in proportion.',
    assumptions: 'Adjust cost and error rate per channel',
    costPer: 'Cost per order',
    errorRate: 'Error rate, %',
    costToday: 'Cost to take an order today',
    costTarget: 'At the target mix',
    saving: 'Saving per year',
    errors: 'Order errors avoided per month',
    barsTitle: 'Order mix, today and target',
    tableTitle: 'What each channel costs you per month today',
    th: { channel: 'Channel', today: 'Today', target: 'Target', cost: 'Handling cost', errors: 'Error cost' },
    channels: { rep: 'Sales rep visit', phone: 'Phone', chat: 'WhatsApp and email', portal: 'Portal or app' },
    dyn: {
      perOrder: '{m} per order',
      perYear: '{m} a year',
      fewer: '{n} fewer',
      verdict: 'Moving the portal from {a} to {b} of orders cuts the cost to serve by {p} and removes about {n} errors a month.',
      noShift: 'Raise the target share to see what the shift is worth.',
      biggest: 'Your most expensive channel per order is {ch}, at {m} including errors. Start the migration with the customers who order there most often.',
      today: 'Today',
      target: 'Target',
    },
  },
  es: {
    currency: 'Moneda',
    orders: 'Pedidos al mes',
    errorCost: 'Costo de un error en un pedido',
    errorCostHint: 'Retrabajo, una segunda entrega, una nota de crédito y la llamada que sigue.',
    mixTitle: 'Cómo llegan hoy los pedidos',
    mixHint: 'Los controles son pesos relativos y siempre suman 100%.',
    target: 'Participación objetivo del portal o app',
    targetHint: 'Los otros canales se reducen en proporción.',
    assumptions: 'Ajustar costo y tasa de error por canal',
    costPer: 'Costo por pedido',
    errorRate: 'Tasa de error, %',
    costToday: 'Costo de tomar un pedido hoy',
    costTarget: 'Con la mezcla objetivo',
    saving: 'Ahorro al año',
    errors: 'Errores de pedido evitados al mes',
    barsTitle: 'Mezcla de pedidos, hoy y objetivo',
    tableTitle: 'Lo que te cuesta cada canal al mes hoy',
    th: { channel: 'Canal', today: 'Hoy', target: 'Objetivo', cost: 'Costo de atención', errors: 'Costo de errores' },
    channels: { rep: 'Visita del vendedor', phone: 'Teléfono', chat: 'WhatsApp y correo', portal: 'Portal o app' },
    dyn: {
      perOrder: '{m} por pedido',
      perYear: '{m} al año',
      fewer: '{n} menos',
      verdict: 'Llevar el portal de {a} a {b} de los pedidos reduce el costo de servir en {p} y elimina cerca de {n} errores al mes.',
      noShift: 'Sube la participación objetivo para ver cuánto vale el cambio.',
      biggest: 'Tu canal más caro por pedido es {ch}, con {m} incluyendo errores. Empieza la migración con los clientes que más piden por ahí.',
      today: 'Hoy',
      target: 'Objetivo',
    },
  },
};
