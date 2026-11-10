import type { Localized } from '../../i18n/ui';

export interface MarketPreset {
  id: string;
  label: string;
  buyers: number;
  fit: number;
  reach: number;
  freq: number;
  price: number;
  share: number;
  goal: number;
}

const presetsBase = {
  saas: { buyers: 1200000, fit: 35, reach: 40, freq: 12, price: 450, share: 3, goal: 30000000 },
  drink: { buyers: 5300000, fit: 60, reach: 50, freq: 24, price: 22, share: 4, goal: 40000000 },
};

export const marketSizing: Localized<{
  presetsLabel: string;
  presets: MarketPreset[];
  currency: string;
  buyers: string;
  buyersHint: string;
  fit: string;
  fitHint: string;
  reach: string;
  reachHint: string;
  freq: string;
  price: string;
  share: string;
  shareHint: string;
  goal: string;
  tam: string;
  tamSub: string;
  sam: string;
  samSub: string;
  som: string;
  somSub: string;
  customers: string;
  chainTitle: string;
  believeTitle: string;
  dyn: {
    chain: string;
    believe: string;
    over: string;
    high: string;
    mid: string;
    low: string;
    squaresLabel: string;
  };
}> = {
  en: {
    presetsLabel: 'Start from an example',
    presets: [
      { id: 'saas', label: 'Software for small businesses', ...presetsBase.saas },
      { id: 'drink', label: 'Packaged drink in one metro area', ...presetsBase.drink },
    ],
    currency: 'Currency',
    buyers: 'Potential buyers',
    buyersHint: 'Everyone who could ever buy this category.',
    fit: 'Share that fits your offer',
    fitHint: 'Segment, size, needs, budget.',
    reach: 'Share you can actually reach',
    reachHint: 'Channels, geography, sales capacity.',
    freq: 'Purchases per buyer per year',
    price: 'Average price per purchase',
    share: 'Share you can realistically win',
    shareHint: 'Of the reachable market, in three to five years.',
    goal: 'Revenue goal per year',
    tam: 'Total market',
    tamSub: 'TAM',
    sam: 'Reachable market',
    samSub: 'SAM',
    som: 'Obtainable revenue',
    somSub: 'SOM',
    customers: 'Customers at that share',
    chainTitle: 'The assumption chain',
    believeTitle: 'What you would need to believe',
    dyn: {
      chain: '{buyers} buyers × {fit} fit × {reach} reach × {freq} purchases × {price}',
      believe: 'To reach {goal} a year you need {share} of the reachable market, about {customers} customers.',
      over: 'The goal is bigger than the entire reachable market. Either the goal or the definition of the market has to change.',
      high: 'That is a dominant share in almost any market. Revisit the goal or widen the reachable market before committing.',
      mid: 'Ambitious. It needs a clear advantage in this segment and the budget to defend it.',
      low: 'Plausible for a focused player with a real edge. The next question is how fast.',
      squaresLabel: 'Nested squares sized by market value: total, reachable and obtainable.',
    },
  },
  es: {
    presetsLabel: 'Empieza con un ejemplo',
    presets: [
      { id: 'saas', label: 'Software para pequeñas empresas', ...presetsBase.saas },
      { id: 'drink', label: 'Bebida empacada en una zona metropolitana', ...presetsBase.drink },
    ],
    currency: 'Moneda',
    buyers: 'Compradores potenciales',
    buyersHint: 'Todos los que podrían comprar en esta categoría.',
    fit: 'Porcentaje que encaja con tu oferta',
    fitHint: 'Segmento, tamaño, necesidades, presupuesto.',
    reach: 'Porcentaje que realmente puedes alcanzar',
    reachHint: 'Canales, geografía, capacidad comercial.',
    freq: 'Compras por comprador al año',
    price: 'Precio promedio por compra',
    share: 'Participación que puedes ganar de forma realista',
    shareHint: 'Del mercado alcanzable, en tres a cinco años.',
    goal: 'Meta de ingresos al año',
    tam: 'Mercado total',
    tamSub: 'TAM',
    sam: 'Mercado alcanzable',
    samSub: 'SAM',
    som: 'Ingreso obtenible',
    somSub: 'SOM',
    customers: 'Clientes con esa participación',
    chainTitle: 'La cadena de supuestos',
    believeTitle: 'Lo que tendrías que creer',
    dyn: {
      chain: '{buyers} compradores × {fit} encaje × {reach} alcance × {freq} compras × {price}',
      believe: 'Para llegar a {goal} al año necesitas {share} del mercado alcanzable, unos {customers} clientes.',
      over: 'La meta es más grande que todo el mercado alcanzable. Tiene que cambiar la meta o la definición del mercado.',
      high: 'Es una participación dominante en casi cualquier mercado. Revisa la meta o amplía el mercado alcanzable antes de comprometerte.',
      mid: 'Ambicioso. Requiere una ventaja clara en este segmento y presupuesto para defenderla.',
      low: 'Factible para un jugador enfocado con una ventaja real. La siguiente pregunta es qué tan rápido.',
      squaresLabel: 'Cuadros anidados según el valor del mercado: total, alcanzable y obtenible.',
    },
  },
};
