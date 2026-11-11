import type { Localized } from '../../i18n/ui';

export const planOnAPage: Localized<{
  company: string;
  ambition: string;
  ambitionHint: string;
  play: string;
  playHint: string;
  choice: string;
  choiceTitle: string;
  choiceHow: string;
  choiceMeasure: string;
  stop: string;
  stopHint: string;
  pageAmbition: string;
  pagePlay: string;
  pageChoices: string;
  pageMeasure: string;
  pageStop: string;
  checksTitle: string;
  defaults: Record<string, string>;
  dyn: { checks: { number: string; play: string; three: string; measures: string; stop: string }; score: string; untitled: string };
}> = {
  en: {
    company: 'Company or team',
    ambition: 'Ambition',
    ambitionHint: 'Where you want to be, with a number and a date.',
    play: 'Where we play',
    playHint: 'The customers, markets or products you will focus on.',
    choice: 'Choice {n}',
    choiceTitle: 'The choice',
    choiceHow: 'How we will do it',
    choiceMeasure: 'How we will know',
    stop: 'What we stop',
    stopHint: 'A plan without a stop list is a wish list. One per line.',
    pageAmbition: 'Ambition',
    pagePlay: 'Where we play',
    pageChoices: 'Our three choices',
    pageMeasure: 'Measure',
    pageStop: 'What we stop doing',
    checksTitle: 'Is this a real plan?',
    defaults: {
      company: 'Ferretería Central',
      ambition: 'Grow contractor sales 40 percent by the end of 2029 while keeping margin above 24 percent.',
      play: 'Contractors and builders in our six cities, plus maintenance buyers in the two nearest industrial parks.',
      c1t: 'Win the contractor',
      c1h: 'Dedicated counter, early hours, credit by account and same day delivery to the job site.',
      c1m: 'Contractor sales and repeat rate by store',
      c2t: 'Test industrial supply',
      c2h: 'One pilot from two stores with scheduled restocking for nearby factories.',
      c2m: 'Active industrial accounts at month twelve',
      c3t: 'Free up cash',
      c3h: 'Cut slow items and reinvest the working capital in contractor inventory.',
      c3m: 'Cash tied up in inventory',
      stop: 'Matching big box prices on homeowner items\nOpening new stores before the model is proven\nCarrying items that sell less than once a month',
    },
    dyn: {
      checks: {
        number: 'The ambition has a number and a date',
        play: 'It says who you will focus on',
        three: 'There are three choices, each with a how',
        measures: 'Every choice has a measure',
        stop: 'There are at least two things you will stop',
      },
      score: '{n} of {t} checks passed',
      untitled: 'Your plan',
    },
  },
  es: {
    company: 'Empresa o equipo',
    ambition: 'Ambición',
    ambitionHint: 'A dónde quieres llegar, con un número y una fecha.',
    play: 'Dónde jugamos',
    playHint: 'Los clientes, mercados o productos en los que te vas a enfocar.',
    choice: 'Decisión {n}',
    choiceTitle: 'La decisión',
    choiceHow: 'Cómo lo vamos a hacer',
    choiceMeasure: 'Cómo lo vamos a saber',
    stop: 'Lo que dejamos de hacer',
    stopHint: 'Un plan sin lista de lo que se deja es una lista de deseos. Una por línea.',
    pageAmbition: 'Ambición',
    pagePlay: 'Dónde jugamos',
    pageChoices: 'Nuestras tres decisiones',
    pageMeasure: 'Métrica',
    pageStop: 'Lo que dejamos de hacer',
    checksTitle: '¿Es un plan de verdad?',
    defaults: {
      company: 'Ferretería Central',
      ambition: 'Crecer 40 por ciento la venta a maestros de obra para el cierre de 2029, con margen arriba de 24 por ciento.',
      play: 'Maestros de obra y constructores en nuestras seis ciudades, más compradores de mantenimiento en los dos parques industriales más cercanos.',
      c1t: 'Ganar al maestro de obra',
      c1h: 'Mostrador dedicado, horario temprano, crédito por cuenta y entrega en la obra el mismo día.',
      c1m: 'Venta y recompra de maestros de obra por tienda',
      c2t: 'Probar el abasto industrial',
      c2h: 'Un piloto desde dos tiendas con resurtido programado para fábricas cercanas.',
      c2m: 'Cuentas industriales activas al mes doce',
      c3t: 'Liberar efectivo',
      c3h: 'Recortar artículos de baja rotación y reinvertir el capital en inventario para maestros de obra.',
      c3m: 'Efectivo amarrado en inventario',
      stop: 'Igualar precios de las cadenas grandes en artículos para el hogar\nAbrir tiendas nuevas antes de probar el modelo\nTener artículos que se venden menos de una vez al mes',
    },
    dyn: {
      checks: {
        number: 'La ambición tiene un número y una fecha',
        play: 'Dice en quién te vas a enfocar',
        three: 'Hay tres decisiones, cada una con su cómo',
        measures: 'Cada decisión tiene una métrica',
        stop: 'Hay al menos dos cosas que vas a dejar de hacer',
      },
      score: '{n} de {t} puntos cumplidos',
      untitled: 'Tu plan',
    },
  },
};
