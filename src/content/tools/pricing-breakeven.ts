import type { Localized } from '../../i18n/ui';

export const pricingBreakeven: Localized<{
  currency: string;
  price: string;
  cost: string;
  costHint: string;
  fixed: string;
  units: string;
  change: string;
  changeHint: string;
  margin: string;
  breakeven: string;
  profit: string;
  room: string;
  chart: string;
  legendNow: string;
  legendNew: string;
  dyn: {
    units: string;
    perUnit: string;
    never: string;
    loss: string;
    thin: string;
    good: string;
    noChange: string;
    raise: string;
    cut: string;
    cutImpossible: string;
    today: string;
    chartAria: string;
  };
}> = {
  en: {
    currency: 'Currency',
    price: 'Price per unit',
    cost: 'Variable cost per unit',
    costHint: 'What each extra sale costs you: materials, shipping, commissions.',
    fixed: 'Fixed costs per month',
    units: 'Units sold per month',
    change: 'Test a price change',
    changeHint: 'Move it to see how much volume you can lose, or need to gain.',
    margin: 'Margin per unit',
    breakeven: 'Break even',
    profit: 'Monthly profit',
    room: 'Room above break even',
    chart: 'Monthly profit by units sold',
    legendNow: 'Current price',
    legendNew: 'New price',
    dyn: {
      units: '{n} units',
      perUnit: '{m} ({p})',
      never: 'Never at this price',
      loss: 'Each sale costs more than it brings in. No volume fixes this: raise the price or cut the cost per unit first.',
      thin: 'You are below break even. You need {n} more units a month, or a higher margin per unit, to cover fixed costs.',
      good: 'You are above break even. Sales could fall {p} before you start losing money.',
      noChange: 'Move the slider to test a price change.',
      raise: 'With a {c} price increase you can lose up to {v} of your volume and still make the same profit. Lose less than that and you come out ahead.',
      cut: 'With a {c} price cut you need to sell {v} more units just to make the same profit as today.',
      cutImpossible: 'At that price each sale no longer covers its own cost. No extra volume makes up for it.',
      today: 'Today',
      chartAria: 'Line chart of monthly profit by units sold at the current price and the new price.',
    },
  },
  es: {
    currency: 'Moneda',
    price: 'Precio por unidad',
    cost: 'Costo variable por unidad',
    costHint: 'Lo que te cuesta cada venta adicional: materiales, envío, comisiones.',
    fixed: 'Costos fijos al mes',
    units: 'Unidades vendidas al mes',
    change: 'Prueba un cambio de precio',
    changeHint: 'Muévelo para ver cuánto volumen puedes perder, o necesitas ganar.',
    margin: 'Margen por unidad',
    breakeven: 'Punto de equilibrio',
    profit: 'Utilidad mensual',
    room: 'Holgura sobre el equilibrio',
    chart: 'Utilidad mensual según unidades vendidas',
    legendNow: 'Precio actual',
    legendNew: 'Precio nuevo',
    dyn: {
      units: '{n} unidades',
      perUnit: '{m} ({p})',
      never: 'Nunca con este precio',
      loss: 'Cada venta cuesta más de lo que deja. Ningún volumen lo arregla: primero sube el precio o baja el costo por unidad.',
      thin: 'Estás por debajo del punto de equilibrio. Necesitas {n} unidades más al mes, o más margen por unidad, para cubrir los costos fijos.',
      good: 'Estás arriba del punto de equilibrio. Las ventas podrían caer {p} antes de que empieces a perder dinero.',
      noChange: 'Mueve el control para probar un cambio de precio.',
      raise: 'Con un aumento de precio de {c} puedes perder hasta {v} de tu volumen y ganar lo mismo. Si pierdes menos que eso, sales ganando.',
      cut: 'Con una baja de precio de {c} necesitas vender {v} más unidades solo para ganar lo mismo que hoy.',
      cutImpossible: 'Con ese precio cada venta ya no cubre su propio costo. Ningún volumen adicional lo compensa.',
      today: 'Hoy',
      chartAria: 'Gráfica de la utilidad mensual según unidades vendidas con el precio actual y el precio nuevo.',
    },
  },
};
