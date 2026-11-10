import type { Lang, Localized } from '../../i18n/ui';

export interface RoiStep {
  name: string;
  minutes: number;
  perMonth: number;
  auto: number;
}

export interface RoiTemplate {
  id: string;
  label: string;
  build: number;
  run: number;
  steps: RoiStep[];
}

const t = (en: string, es: string) => ({ en, es });

const raw = [
  {
    id: 'invoices',
    label: t('Supplier invoice processing', 'Procesamiento de facturas de proveedores'),
    build: 150000,
    run: 4000,
    steps: [
      { name: t('Receive and download invoices', 'Recibir y descargar facturas'), minutes: 3, perMonth: 400, auto: 90 },
      { name: t('Capture data in the system', 'Capturar datos en el sistema'), minutes: 6, perMonth: 400, auto: 90 },
      { name: t('Match against purchase orders', 'Conciliar contra órdenes de compra'), minutes: 5, perMonth: 400, auto: 60 },
      { name: t('Resolve exceptions', 'Resolver excepciones'), minutes: 20, perMonth: 40, auto: 30 },
      { name: t('Approve payment', 'Aprobar el pago'), minutes: 2, perMonth: 400, auto: 0 },
    ],
  },
  {
    id: 'leases',
    label: t('Lease renewals', 'Renovación de contratos de renta'),
    build: 80000,
    run: 2500,
    steps: [
      { name: t('Track upcoming expirations', 'Revisar vencimientos próximos'), minutes: 45, perMonth: 4, auto: 90 },
      { name: t('Draft renewal offers', 'Redactar ofertas de renovación'), minutes: 20, perMonth: 30, auto: 60 },
      { name: t('Follow up with tenants', 'Dar seguimiento a inquilinos'), minutes: 10, perMonth: 60, auto: 60 },
      { name: t('Update contracts and records', 'Actualizar contratos y registros'), minutes: 15, perMonth: 30, auto: 60 },
      { name: t('Negotiate special cases', 'Negociar casos especiales'), minutes: 30, perMonth: 6, auto: 0 },
    ],
  },
  {
    id: 'report',
    label: t('Monthly sales report', 'Reporte mensual de ventas'),
    build: 40000,
    run: 1500,
    steps: [
      { name: t('Pull data from each system', 'Extraer datos de cada sistema'), minutes: 120, perMonth: 1, auto: 90 },
      { name: t('Clean and consolidate', 'Limpiar y consolidar'), minutes: 180, perMonth: 1, auto: 60 },
      { name: t('Build the charts', 'Armar las gráficas'), minutes: 90, perMonth: 1, auto: 90 },
      { name: t('Write the commentary', 'Redactar los comentarios'), minutes: 120, perMonth: 1, auto: 30 },
      { name: t('Review with leadership', 'Revisar con la dirección'), minutes: 60, perMonth: 1, auto: 0 },
    ],
  },
];

const templatesFor = (lang: Lang): RoiTemplate[] =>
  raw.map((r) => ({
    id: r.id,
    label: r.label[lang],
    build: r.build,
    run: r.run,
    steps: r.steps.map((s) => ({ name: s.name[lang], minutes: s.minutes, perMonth: s.perMonth, auto: s.auto })),
  }));

export const automationRoi: Localized<{
  templates: RoiTemplate[];
  templateLabel: string;
  stepsTitle: string;
  colStep: string;
  colMinutes: string;
  colPerMonth: string;
  colAuto: string;
  addStep: string;
  removeStep: string;
  newStep: string;
  autoLevels: { value: number; label: string }[];
  costTitle: string;
  hourCost: string;
  build: string;
  run: string;
  hoursSaved: string;
  annual: string;
  payback: string;
  threeYear: string;
  chartTitle: string;
  breakdownTitle: string;
  dyn: {
    hours: string;
    months: string;
    never: string;
    before: string;
    after: string;
    good: string;
    ok: string;
    weak: string;
    no: string;
    breakEven: string;
    monthShort: string;
    chartAria: string;
  };
}> = {
  en: {
    templates: templatesFor('en'),
    templateLabel: 'Start from a process',
    stepsTitle: 'Process steps',
    colStep: 'Step',
    colMinutes: 'Minutes each',
    colPerMonth: 'Times a month',
    colAuto: 'With AI',
    addStep: 'Add a step',
    removeStep: 'Remove step',
    newStep: 'New step',
    autoLevels: [
      { value: 0, label: 'Stays manual' },
      { value: 30, label: 'AI assists' },
      { value: 60, label: 'Mostly automated' },
      { value: 90, label: 'Fully automated' },
    ],
    costTitle: 'Costs',
    hourCost: 'Cost of one hour of work (MXN)',
    build: 'One time cost to build (MXN)',
    run: 'Monthly cost to run (MXN)',
    hoursSaved: 'Hours saved per month',
    annual: 'Net savings per year',
    payback: 'Payback',
    threeYear: 'Net value over 3 years',
    chartTitle: 'Cumulative net value, month by month',
    breakdownTitle: 'Hours per month by step',
    dyn: {
      hours: '{n} h',
      months: '{n} months',
      never: 'Never',
      before: 'Today',
      after: 'With AI',
      good: 'Strong case. It pays back within six months, so the risk is mostly in execution, not in the math.',
      ok: 'Reasonable. It pays back within a year and a half. Start with the steps that save the most hours to bring payback forward.',
      weak: 'Weak case on time savings alone. Look at error reduction, speed or customer impact before approving it.',
      no: 'It never pays back. Running costs exceed the time saved. Rethink the scope or the tool.',
      breakEven: 'Break even, month {n}',
      monthShort: 'M{n}',
      chartAria: 'Line chart of cumulative net value over 36 months, starting at the build cost.',
    },
  },
  es: {
    templates: templatesFor('es'),
    templateLabel: 'Empieza con un proceso',
    stepsTitle: 'Pasos del proceso',
    colStep: 'Paso',
    colMinutes: 'Minutos c/u',
    colPerMonth: 'Veces al mes',
    colAuto: 'Con IA',
    addStep: 'Agregar paso',
    removeStep: 'Quitar paso',
    newStep: 'Paso nuevo',
    autoLevels: [
      { value: 0, label: 'Sigue manual' },
      { value: 30, label: 'La IA asiste' },
      { value: 60, label: 'Casi automático' },
      { value: 90, label: 'Automático' },
    ],
    costTitle: 'Costos',
    hourCost: 'Costo de una hora de trabajo (MXN)',
    build: 'Costo único de construcción (MXN)',
    run: 'Costo mensual de operación (MXN)',
    hoursSaved: 'Horas ahorradas al mes',
    annual: 'Ahorro neto al año',
    payback: 'Recuperación',
    threeYear: 'Valor neto en 3 años',
    chartTitle: 'Valor neto acumulado, mes a mes',
    breakdownTitle: 'Horas al mes por paso',
    dyn: {
      hours: '{n} h',
      months: '{n} meses',
      never: 'Nunca',
      before: 'Hoy',
      after: 'Con IA',
      good: 'Caso sólido. Se recupera en menos de seis meses, así que el riesgo está en la ejecución, no en los números.',
      ok: 'Razonable. Se recupera en menos de año y medio. Empieza por los pasos que más horas ahorran para adelantar la recuperación.',
      weak: 'Caso débil si solo cuentas el tiempo ahorrado. Revisa reducción de errores, velocidad o impacto en el cliente antes de aprobarlo.',
      no: 'Nunca se recupera. El costo de operación supera el tiempo ahorrado. Replantea el alcance o la herramienta.',
      breakEven: 'Punto de equilibrio, mes {n}',
      monthShort: 'M{n}',
      chartAria: 'Gráfica de líneas del valor neto acumulado en 36 meses, empezando en el costo de construcción.',
    },
  },
};
