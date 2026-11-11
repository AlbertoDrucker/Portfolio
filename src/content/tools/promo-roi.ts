import type { Localized } from '../../i18n/ui';

export const promoRoi: Localized<{
  currency: string;
  base: string;
  weeks: string;
  price: string;
  cost: string;
  discount: string;
  uplift: string;
  upliftHint: string;
  cannibal: string;
  cannibalHint: string;
  forward: string;
  forwardHint: string;
  fixed: string;
  fixedHint: string;
  profit: string;
  roi: string;
  breakeven: string;
  trueUnits: string;
  chart: string;
  bridgeTitle: string;
  dyn: {
    never: string;
    good: string;
    thin: string;
    bad: string;
    volumeTrap: string;
    today: string;
    chartAria: string;
    units: string;
    bridge: { base: string; extra: string; discount: string; lost: string; fixed: string; net: string };
  };
}> = {
  en: {
    currency: 'Currency',
    base: 'Normal weekly sales, units',
    weeks: 'Promotion length, weeks',
    price: 'Regular price per unit',
    cost: 'Cost per unit',
    discount: 'Discount',
    uplift: 'Sales lift during the promotion',
    upliftHint: 'How much more you sell than a normal week.',
    cannibal: 'Lift stolen from your other products',
    cannibalHint: 'Shoppers who would have bought another of your products at full price.',
    forward: 'Lift borrowed from future weeks',
    forwardHint: 'Shoppers who stock up now and buy less later.',
    fixed: 'Fixed cost of the promotion',
    fixedHint: 'Displays, flyers, retailer fees.',
    profit: 'Profit added by the promotion',
    roi: 'Return on promotion spend',
    breakeven: 'Lift needed to break even',
    trueUnits: 'Truly new units',
    chart: 'Profit added at different levels of lift',
    bridgeTitle: 'Where the money goes',
    dyn: {
      never: 'No lift pays for this',
      good: 'This promotion pays for itself. Every 1.00 spent comes back as {r}.',
      thin: 'It makes money, but barely. A small miss on lift turns it negative, so agree the target lift before you run it.',
      bad: 'This promotion loses {m} even though it sells {u} more units. You need a lift of {b} to break even.',
      volumeTrap: 'Volume goes up {v} but only {t} of those units are truly new. The rest come from your own shelf or from next month.',
      today: 'Your plan',
      chartAria: 'Line chart of profit added by the promotion as sales lift goes from 0 to 200 percent.',
      units: '{n} units',
      bridge: {
        base: 'Profit without the promotion',
        extra: 'Margin on extra units',
        discount: 'Discount given on units you would sell anyway',
        lost: 'Full price sales lost elsewhere or later',
        fixed: 'Fixed cost',
        net: 'Profit with the promotion',
      },
    },
  },
  es: {
    currency: 'Moneda',
    base: 'Venta semanal normal, unidades',
    weeks: 'Duración de la promoción, semanas',
    price: 'Precio regular por unidad',
    cost: 'Costo por unidad',
    discount: 'Descuento',
    uplift: 'Incremento de ventas durante la promoción',
    upliftHint: 'Cuánto más vendes que en una semana normal.',
    cannibal: 'Incremento que le quitas a tus otros productos',
    cannibalHint: 'Compradores que habrían comprado otro de tus productos a precio completo.',
    forward: 'Incremento prestado de semanas futuras',
    forwardHint: 'Compradores que se abastecen ahora y compran menos después.',
    fixed: 'Costo fijo de la promoción',
    fixedHint: 'Exhibiciones, folletos, cuotas de la cadena.',
    profit: 'Utilidad que agrega la promoción',
    roi: 'Retorno sobre el gasto promocional',
    breakeven: 'Incremento necesario para salir a mano',
    trueUnits: 'Unidades realmente nuevas',
    chart: 'Utilidad agregada según el incremento de ventas',
    bridgeTitle: 'A dónde se va el dinero',
    dyn: {
      never: 'Ningún incremento la paga',
      good: 'Esta promoción se paga sola. Cada 1.00 invertido regresa como {r}.',
      thin: 'Deja dinero, pero apenas. Un pequeño faltante en el incremento la vuelve negativa, así que acuerda la meta de incremento antes de correrla.',
      bad: 'Esta promoción pierde {m} aunque vende {u} unidades más. Necesitas un incremento de {b} para salir a mano.',
      volumeTrap: 'El volumen sube {v}, pero solo {t} de esas unidades son realmente nuevas. El resto sale de tu propio anaquel o del mes siguiente.',
      today: 'Tu plan',
      chartAria: 'Gráfica de la utilidad que agrega la promoción cuando el incremento de ventas va de 0 a 200 por ciento.',
      units: '{n} unidades',
      bridge: {
        base: 'Utilidad sin la promoción',
        extra: 'Margen de las unidades adicionales',
        discount: 'Descuento otorgado en unidades que venderías de todos modos',
        lost: 'Ventas a precio completo perdidas en otros productos o después',
        fixed: 'Costo fijo',
        net: 'Utilidad con la promoción',
      },
    },
  },
};
