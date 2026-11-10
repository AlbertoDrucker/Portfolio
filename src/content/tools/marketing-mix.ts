import type { Localized } from '../../i18n/ui';

export interface MixChannel {
  id: string;
  name: string;
  ceiling: number;
  saturation: number;
  share: number;
}

const base = [
  { id: 'search', ceiling: 8000000, saturation: 900000, share: 10 },
  { id: 'social', ceiling: 6000000, saturation: 1500000, share: 20 },
  { id: 'retail', ceiling: 9000000, saturation: 2500000, share: 25 },
  { id: 'events', ceiling: 14000000, saturation: 9000000, share: 45 },
];

const names = {
  en: { search: 'Search', social: 'Social', retail: 'Retail media', events: 'Events and sponsorships' },
  es: { search: 'Búsqueda', social: 'Redes sociales', retail: 'Retail media', events: 'Eventos y patrocinios' },
} as const;

export const marketingMix: Localized<{
  budget: string;
  allocation: string;
  allocationHint: string;
  optimize: string;
  reset: string;
  revenue: string;
  roas: string;
  marginal: string;
  chartTitle: string;
  tableChannel: string;
  tableSpend: string;
  tableRevenue: string;
  tableMarginal: string;
  modelTitle: string;
  modelHint: string;
  ceiling: string;
  saturation: string;
  channels: MixChannel[];
  dyn: {
    perPeso: string;
    range: string;
    optimized: string;
    balanced: string;
    unbalanced: string;
    chartAria: string;
  };
}> = {
  en: {
    budget: 'Total budget',
    allocation: 'Your split',
    allocationHint: 'It starts from last year’s split, heavy on events. Sliders are relative weights and always add up to the full budget.',
    optimize: 'Find the best mix',
    reset: 'Back to last year’s split',
    revenue: 'Expected revenue',
    roas: 'Revenue per peso spent',
    marginal: 'Next peso earns',
    chartTitle: 'Response curves: revenue by spend in each channel',
    tableChannel: 'Channel',
    tableSpend: 'Spend',
    tableRevenue: 'Revenue',
    tableMarginal: 'Next peso earns',
    modelTitle: 'Adjust the model',
    modelHint: 'Ceiling is the most revenue a channel could ever drive. Saturation is the spend at which it has delivered about two thirds of that.',
    ceiling: 'Ceiling',
    saturation: 'Saturation',
    channels: base.map((b) => ({ ...b, name: names.en[b.id as keyof typeof names.en] })),
    dyn: {
      perPeso: '{v} per peso',
      range: '{lo} to {hi}',
      optimized: 'The optimizer adds {gain} ({pct}) with the same budget, mostly by moving money from {from} to {to}.',
      balanced: 'Balanced: the next peso earns about the same in every channel, so no move would improve the result.',
      unbalanced: 'Unbalanced: the next peso earns {hi} in {best} but only {lo} in {worst}. Money should move.',
      chartAria: 'Line chart with one diminishing returns curve per channel and a dot at the current spend.',
    },
  },
  es: {
    budget: 'Presupuesto total',
    allocation: 'Tu reparto',
    allocationHint: 'Empieza con el reparto del año pasado, cargado a eventos. Los controles son pesos relativos y siempre suman el presupuesto completo.',
    optimize: 'Encontrar la mejor mezcla',
    reset: 'Volver al reparto del año pasado',
    revenue: 'Ingreso esperado',
    roas: 'Ingreso por peso invertido',
    marginal: 'El siguiente peso genera',
    chartTitle: 'Curvas de respuesta: ingreso según inversión en cada canal',
    tableChannel: 'Canal',
    tableSpend: 'Inversión',
    tableRevenue: 'Ingreso',
    tableMarginal: 'Siguiente peso',
    modelTitle: 'Ajustar el modelo',
    modelHint: 'El techo es lo máximo que un canal podría generar. La saturación es la inversión con la que ya entregó cerca de dos tercios de eso.',
    ceiling: 'Techo',
    saturation: 'Saturación',
    channels: base.map((b) => ({ ...b, name: names.es[b.id as keyof typeof names.es] })),
    dyn: {
      perPeso: '{v} por peso',
      range: '{lo} a {hi}',
      optimized: 'El optimizador suma {gain} ({pct}) con el mismo presupuesto, sobre todo moviendo dinero de {from} a {to}.',
      balanced: 'Balanceado: el siguiente peso genera casi lo mismo en todos los canales, así que ningún movimiento mejoraría el resultado.',
      unbalanced: 'Desbalanceado: el siguiente peso genera {hi} en {best} pero solo {lo} en {worst}. Hay que mover dinero.',
      chartAria: 'Gráfica de líneas con una curva de rendimientos decrecientes por canal y un punto en la inversión actual.',
    },
  },
};
