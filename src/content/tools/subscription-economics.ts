import type { Localized } from '../../i18n/ui';

export const subPresets: Record<string, Record<string, number>> = {
  gym: { price: 890, members: 420, joins: 35, churn: 6, cost: 120, fixed: 210000, cac: 650 },
  clinic: { price: 1500, members: 160, joins: 14, churn: 4, cost: 480, fixed: 95000, cac: 1800 },
  box: { price: 549, members: 900, joins: 110, churn: 11, cost: 310, fixed: 120000, cac: 420 },
};

export const subscriptionEconomics: Localized<{
  preset: string;
  presets: Record<string, string>;
  currency: string;
  price: string;
  members: string;
  joins: string;
  churn: string;
  churnHint: string;
  cost: string;
  fixed: string;
  cac: string;
  mrr: string;
  life: string;
  ltv: string;
  ceiling: string;
  chart: string;
  dyn: {
    months: string;
    members: string;
    ratio: string;
    shrinking: string;
    losing: string;
    thin: string;
    good: string;
    lever: string;
    ceilingRef: string;
    monthShort: string;
    chartAria: string;
  };
}> = {
  en: {
    preset: 'Start from an example',
    presets: { gym: 'Gym or studio', clinic: 'Clinic membership', box: 'Monthly box' },
    currency: 'Currency',
    price: 'Monthly price',
    members: 'Members today',
    joins: 'New members per month',
    churn: 'Members who cancel each month',
    churnHint: 'Out of every 100 members, how many leave in a month.',
    cost: 'Cost to serve one member per month',
    fixed: 'Fixed costs per month',
    cac: 'Cost to win one member',
    mrr: 'Monthly revenue',
    life: 'Average membership',
    ltv: 'Value per member',
    ceiling: 'Where membership levels off',
    chart: 'Members over the next 24 months',
    dyn: {
      months: '{n} months',
      members: '{n} members',
      ratio: '{m} ({r} times the cost to win them)',
      shrinking: 'You are above your ceiling. At this pace membership drifts down to about {n}, no matter how many you have today.',
      losing: 'Each member costs more to win than they return. Lower the cancellation rate or the cost to win a member before spending on growth.',
      thin: 'Each member pays back, but barely. Growth will feel busy without leaving much money.',
      good: 'Healthy. Each member returns well above what it costs to win them, so growth is worth paying for.',
      lever: 'Keeping one more member out of every 100 each month raises your ceiling by {n} members and adds {m} to the value of each one.',
      ceilingRef: 'Ceiling',
      monthShort: 'M{n}',
      chartAria: 'Line chart of members over 24 months moving toward the level where joins and cancellations balance.',
    },
  },
  es: {
    preset: 'Empieza con un ejemplo',
    presets: { gym: 'Gimnasio o estudio', clinic: 'Membresía de clínica', box: 'Caja mensual' },
    currency: 'Moneda',
    price: 'Precio mensual',
    members: 'Miembros hoy',
    joins: 'Miembros nuevos al mes',
    churn: 'Miembros que cancelan cada mes',
    churnHint: 'De cada 100 miembros, cuántos se van en un mes.',
    cost: 'Costo de atender a un miembro al mes',
    fixed: 'Costos fijos al mes',
    cac: 'Costo de ganar un miembro',
    mrr: 'Ingreso mensual',
    life: 'Membresía promedio',
    ltv: 'Valor por miembro',
    ceiling: 'Donde se estabiliza la membresía',
    chart: 'Miembros en los próximos 24 meses',
    dyn: {
      months: '{n} meses',
      members: '{n} miembros',
      ratio: '{m} ({r} veces lo que cuesta ganarlo)',
      shrinking: 'Estás arriba de tu techo. A este ritmo la membresía baja hasta cerca de {n}, sin importar cuántos tengas hoy.',
      losing: 'Cada miembro cuesta más de lo que deja. Baja la tasa de cancelación o el costo de ganar un miembro antes de gastar en crecer.',
      thin: 'Cada miembro se paga, pero apenas. El crecimiento se va a sentir intenso sin dejar mucho dinero.',
      good: 'Saludable. Cada miembro deja bastante más de lo que cuesta ganarlo, así que vale la pena pagar por crecer.',
      lever: 'Retener a un miembro más de cada 100 al mes sube tu techo en {n} miembros y agrega {m} al valor de cada uno.',
      ceilingRef: 'Techo',
      monthShort: 'M{n}',
      chartAria: 'Gráfica de miembros a 24 meses acercándose al nivel donde las altas y las cancelaciones se equilibran.',
    },
  },
};
