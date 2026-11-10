import type { Localized } from '../../i18n/ui';

export const customerValue: Localized<{
  currency: string;
  aov: string;
  orders: string;
  margin: string;
  retention: string;
  retentionHint: string;
  discount: string;
  discountHint: string;
  cac: string;
  clv: string;
  ratio: string;
  payback: string;
  lifetime: string;
  chart1: string;
  chart2: string;
  legendValue: string;
  legendCac: string;
  dyn: {
    months: string;
    years: string;
    never: string;
    paybackLabel: string;
    youAreHere: string;
    lever: string;
    bad: string;
    thin: string;
    good: string;
    great: string;
    chart1Aria: string;
    chart2Aria: string;
    yearShort: string;
  };
}> = {
  en: {
    currency: 'Currency',
    aov: 'Average order value',
    orders: 'Orders per customer per year',
    margin: 'Gross margin',
    retention: 'Customers kept each year',
    retentionHint: 'The share of this year’s customers still buying next year.',
    discount: 'Discount rate',
    discountHint: 'What future money is worth to you today.',
    cac: 'Cost to acquire a customer',
    clv: 'Lifetime value',
    ratio: 'Value to acquisition cost',
    payback: 'Payback',
    lifetime: 'Average customer life',
    chart1: 'Cumulative value per customer won',
    chart2: 'Lifetime value at different retention rates',
    legendValue: 'Expected value per customer',
    legendCac: 'Acquisition cost',
    dyn: {
      months: '{n} months',
      years: '{n} years',
      never: 'Never at this retention',
      paybackLabel: 'Pays back in month {n}',
      youAreHere: 'You are here',
      lever: 'Keeping 5 more customers out of every 100 adds {ret} to lifetime value. Raising prices 5 percent adds {price}.',
      bad: 'Every customer you win costs more than they will ever return. Fix retention or acquisition cost before spending to grow.',
      thin: 'Positive but thin. Most growth investors look for at least three to one before scaling acquisition.',
      good: 'Healthy. You can likely afford to spend more to grow, as long as retention holds.',
      great: 'Very healthy. If this holds, you are probably underinvesting in growth.',
      chart1Aria: 'Line chart of cumulative expected value per customer over ten years compared with acquisition cost.',
      chart2Aria: 'Line chart of lifetime value as retention changes from 50 to 97 percent.',
      yearShort: 'Y{n}',
    },
  },
  es: {
    currency: 'Moneda',
    aov: 'Ticket promedio',
    orders: 'Compras por cliente al año',
    margin: 'Margen bruto',
    retention: 'Clientes que se quedan cada año',
    retentionHint: 'El porcentaje de los clientes de este año que siguen comprando el siguiente.',
    discount: 'Tasa de descuento',
    discountHint: 'Lo que vale para ti hoy el dinero futuro.',
    cac: 'Costo de adquirir un cliente',
    clv: 'Valor de vida',
    ratio: 'Valor contra costo de adquisición',
    payback: 'Recuperación',
    lifetime: 'Vida promedio del cliente',
    chart1: 'Valor acumulado por cliente ganado',
    chart2: 'Valor de vida con distintas tasas de retención',
    legendValue: 'Valor esperado por cliente',
    legendCac: 'Costo de adquisición',
    dyn: {
      months: '{n} meses',
      years: '{n} años',
      never: 'Nunca con esta retención',
      paybackLabel: 'Se recupera en el mes {n}',
      youAreHere: 'Estás aquí',
      lever: 'Retener 5 clientes más de cada 100 suma {ret} al valor de vida. Subir precios 5 por ciento suma {price}.',
      bad: 'Cada cliente que ganas cuesta más de lo que te va a regresar. Corrige retención o costo de adquisición antes de invertir en crecer.',
      thin: 'Positivo pero justo. La mayoría de los inversionistas busca al menos tres a uno antes de escalar la adquisición.',
      good: 'Sano. Probablemente puedes invertir más para crecer, siempre que la retención se sostenga.',
      great: 'Muy sano. Si esto se sostiene, probablemente estás invirtiendo poco en crecer.',
      chart1Aria: 'Gráfica de líneas del valor esperado acumulado por cliente en diez años comparado con el costo de adquisición.',
      chart2Aria: 'Gráfica de líneas del valor de vida cuando la retención cambia de 50 a 97 por ciento.',
      yearShort: 'A{n}',
    },
  },
};
