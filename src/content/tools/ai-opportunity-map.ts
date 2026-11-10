import type { Lang, Localized } from '../../i18n/ui';

export type Industry = 'retail' | 'cpg' | 'finance' | 'manufacturing' | 'logistics' | 'services';
export type Fn = 'marketing' | 'sales' | 'operations' | 'service' | 'finance' | 'people';

interface UseCaseText {
  t: string;
  d: string;
  data: string;
  first: string;
}

export interface UseCase {
  id: string;
  fn: Fn;
  ind: Industry[] | 'all';
  impact: number;
  feas: number;
  text: Record<Lang, UseCaseText>;
}

/** Impact adjustments by industry and function. My judgment, not survey data. */
export const industryBoost: Record<Industry, Partial<Record<Fn, number>>> = {
  retail: { marketing: 1, service: 1 },
  cpg: { marketing: 1, operations: 1 },
  finance: { service: 1, finance: 1 },
  manufacturing: { operations: 1 },
  logistics: { operations: 1, service: 1 },
  services: { sales: 1, people: 1 },
};

export const useCases: UseCase[] = [
  {
    id: 'm-content', fn: 'marketing', ind: 'all', impact: 6, feas: 9,
    text: {
      en: { t: 'Campaign content at scale', d: 'Draft and adapt copy and visuals for every channel and segment from one approved brief.', data: 'Brand guidelines and past approved content.', first: 'Pick one recurring campaign and build a brief to variants workflow with a brand review step.' },
      es: { t: 'Contenido de campaña a escala', d: 'Redactar y adaptar textos y piezas para cada canal y segmento a partir de un brief aprobado.', data: 'Lineamientos de marca y contenido aprobado anteriormente.', first: 'Elegir una campaña recurrente y armar un flujo de brief a variantes con revisión de marca.' },
    },
  },
  {
    id: 'm-insights', fn: 'marketing', ind: 'all', impact: 7, feas: 8,
    text: {
      en: { t: 'Customer insight mining', d: 'Read reviews, social posts and survey answers at scale to surface what customers actually care about.', data: 'Reviews, open survey answers, social comments.', first: 'Pull one quarter of reviews and open answers and run a theme analysis.' },
      es: { t: 'Minería de insights del cliente', d: 'Leer reseñas, publicaciones y respuestas de encuestas a escala para encontrar lo que realmente le importa al cliente.', data: 'Reseñas, respuestas abiertas de encuestas, comentarios en redes.', first: 'Juntar un trimestre de reseñas y respuestas abiertas y hacer un análisis de temas.' },
    },
  },
  {
    id: 'm-personal', fn: 'marketing', ind: ['retail', 'cpg', 'finance', 'services'], impact: 8, feas: 5,
    text: {
      en: { t: 'Personalized offers', d: 'Choose the offer and message each customer is most likely to respond to.', data: 'Purchase history and campaign response data.', first: 'Start with one email or app journey and test it against your current rule based offers.' },
      es: { t: 'Ofertas personalizadas', d: 'Elegir la oferta y el mensaje con más probabilidad de respuesta para cada cliente.', data: 'Historial de compras y datos de respuesta a campañas.', first: 'Empezar con un solo journey de correo o app y probarlo contra las ofertas actuales basadas en reglas.' },
    },
  },
  {
    id: 'm-mix', fn: 'marketing', ind: 'all', impact: 7, feas: 5,
    text: {
      en: { t: 'Media mix measurement', d: 'Estimate what each channel really contributes so the budget follows results.', data: 'Two years of weekly spend and sales by channel.', first: 'Gather the spend and sales history and agree on how results will be judged.' },
      es: { t: 'Medición de la mezcla de medios', d: 'Estimar cuánto aporta realmente cada canal para que el presupuesto siga a los resultados.', data: 'Dos años de inversión y ventas semanales por canal.', first: 'Reunir la historia de inversión y ventas y acordar cómo se van a juzgar los resultados.' },
    },
  },
  {
    id: 's-research', fn: 'sales', ind: 'all', impact: 6, feas: 9,
    text: {
      en: { t: 'Account research briefs', d: 'Prepare a one page brief on each prospect before every meeting.', data: 'CRM records and public company information.', first: 'Give the sales team a research template and measure prep time saved.' },
      es: { t: 'Fichas de investigación de cuentas', d: 'Preparar una ficha de una página de cada prospecto antes de cada reunión.', data: 'Registros del CRM e información pública de la empresa.', first: 'Darle al equipo comercial una plantilla de investigación y medir el tiempo de preparación ahorrado.' },
    },
  },
  {
    id: 's-score', fn: 'sales', ind: 'all', impact: 7, feas: 6,
    text: {
      en: { t: 'Lead scoring', d: 'Rank leads by likelihood to buy so sellers spend time where it pays.', data: 'A year of won and lost deals with their attributes.', first: 'Export a year of won and lost deals from the CRM and check data quality.' },
      es: { t: 'Calificación de prospectos', d: 'Ordenar prospectos por probabilidad de compra para que los vendedores inviertan su tiempo donde rinde.', data: 'Un año de oportunidades ganadas y perdidas con sus atributos.', first: 'Exportar un año de oportunidades ganadas y perdidas del CRM y revisar la calidad de los datos.' },
    },
  },
  {
    id: 's-proposal', fn: 'sales', ind: 'all', impact: 6, feas: 8,
    text: {
      en: { t: 'Proposal and quote drafting', d: 'Assemble proposals from approved blocks, pricing rules and past wins.', data: 'Your best past proposals, standard terms and price lists.', first: 'Collect your ten best proposals and turn them into reusable blocks.' },
      es: { t: 'Redacción de propuestas y cotizaciones', d: 'Armar propuestas a partir de bloques aprobados, reglas de precio y casos ganados.', data: 'Tus mejores propuestas, términos estándar y listas de precios.', first: 'Juntar tus diez mejores propuestas y convertirlas en bloques reutilizables.' },
    },
  },
  {
    id: 's-churn', fn: 'sales', ind: 'all', impact: 8, feas: 6,
    text: {
      en: { t: 'Churn early warning', d: 'Flag accounts likely to leave while there is still time to act.', data: 'Usage, orders, support history and past cancellations.', first: 'Define churn clearly and label two years of accounts.' },
      es: { t: 'Alerta temprana de abandono', d: 'Señalar las cuentas con riesgo de irse mientras todavía hay tiempo para actuar.', data: 'Uso, pedidos, historial de soporte y cancelaciones pasadas.', first: 'Definir con claridad qué es abandono y etiquetar dos años de cuentas.' },
    },
  },
  {
    id: 'o-forecast', fn: 'operations', ind: ['retail', 'cpg', 'manufacturing', 'logistics'], impact: 9, feas: 5,
    text: {
      en: { t: 'Demand forecasting', d: 'Predict demand by product and location to cut stockouts and excess inventory.', data: 'Sales by SKU and location, promotions, calendar events.', first: 'Start with the top 50 products and compare against the current forecast.' },
      es: { t: 'Pronóstico de demanda', d: 'Predecir la demanda por producto y ubicación para reducir faltantes y exceso de inventario.', data: 'Ventas por SKU y ubicación, promociones, calendario.', first: 'Empezar con los 50 productos principales y comparar contra el pronóstico actual.' },
    },
  },
  {
    id: 'o-docs', fn: 'operations', ind: 'all', impact: 7, feas: 8,
    text: {
      en: { t: 'Document processing', d: 'Read invoices, delivery notes and forms and enter the data automatically.', data: 'A sample of real documents and the fields that matter.', first: 'Pick the highest volume document and measure today’s error rate and handling time.' },
      es: { t: 'Procesamiento de documentos', d: 'Leer facturas, remisiones y formatos y capturar los datos automáticamente.', data: 'Una muestra de documentos reales y los campos que importan.', first: 'Elegir el documento de mayor volumen y medir la tasa de error y el tiempo de captura actuales.' },
    },
  },
  {
    id: 'o-quality', fn: 'operations', ind: ['manufacturing', 'cpg'], impact: 8, feas: 4,
    text: {
      en: { t: 'Visual quality inspection', d: 'Spot defects on the line from camera images.', data: 'Labeled images of good and defective parts.', first: 'Collect labeled images from one line for a month.' },
      es: { t: 'Inspección visual de calidad', d: 'Detectar defectos en la línea a partir de imágenes de cámara.', data: 'Imágenes etiquetadas de piezas buenas y defectuosas.', first: 'Juntar durante un mes imágenes etiquetadas de una sola línea.' },
    },
  },
  {
    id: 'o-routes', fn: 'operations', ind: ['logistics', 'retail', 'cpg'], impact: 8, feas: 5,
    text: {
      en: { t: 'Route and load planning', d: 'Plan routes and loads that cut kilometers, fuel and late deliveries.', data: 'Delivery history, addresses, time windows and fleet capacity.', first: 'Use three months of deliveries to benchmark against current routes.' },
      es: { t: 'Planeación de rutas y cargas', d: 'Planear rutas y cargas que reduzcan kilómetros, combustible y entregas tarde.', data: 'Historial de entregas, direcciones, ventanas de horario y capacidad de flota.', first: 'Usar tres meses de entregas para comparar contra las rutas actuales.' },
    },
  },
  {
    id: 'c-assist', fn: 'service', ind: 'all', impact: 7, feas: 8,
    text: {
      en: { t: 'Agent assist', d: 'Suggest answers and next steps to agents in real time from your knowledge base.', data: 'Help articles, policies and resolved tickets.', first: 'Clean up the top 50 help articles and pilot with one team.' },
      es: { t: 'Asistente para agentes', d: 'Sugerir respuestas y siguientes pasos a los agentes en tiempo real desde tu base de conocimiento.', data: 'Artículos de ayuda, políticas y tickets resueltos.', first: 'Limpiar los 50 artículos de ayuda principales y hacer un piloto con un equipo.' },
    },
  },
  {
    id: 'c-self', fn: 'service', ind: ['retail', 'finance', 'logistics', 'services', 'cpg'], impact: 8, feas: 6,
    text: {
      en: { t: 'Self service assistant', d: 'Resolve common questions on WhatsApp or the web without waiting for an agent.', data: 'Contact reasons by volume and the answers to each.', first: 'Rank contact reasons by volume and automate the top three.' },
      es: { t: 'Asistente de autoservicio', d: 'Resolver preguntas comunes por WhatsApp o web sin esperar a un agente.', data: 'Motivos de contacto por volumen y la respuesta a cada uno.', first: 'Ordenar los motivos de contacto por volumen y automatizar los tres principales.' },
    },
  },
  {
    id: 'c-qa', fn: 'service', ind: 'all', impact: 6, feas: 8,
    text: {
      en: { t: 'Conversation quality review', d: 'Review every call and chat instead of a small sample, and coach from the patterns.', data: 'Call transcripts or chats and your quality checklist.', first: 'Turn your quality checklist into scoring criteria and test it on last month’s calls.' },
      es: { t: 'Revisión de calidad de conversaciones', d: 'Revisar cada llamada y chat en lugar de una muestra, y entrenar a partir de los patrones.', data: 'Transcripciones de llamadas o chats y tu checklist de calidad.', first: 'Convertir tu checklist de calidad en criterios de calificación y probarlo con las llamadas del mes pasado.' },
    },
  },
  {
    id: 'c-route', fn: 'service', ind: 'all', impact: 5, feas: 9,
    text: {
      en: { t: 'Smart ticket routing', d: 'Classify each request and send it to the right team the first time.', data: 'A sample of past tickets labeled with the right team.', first: 'Label a few hundred tickets and measure today’s misroute rate.' },
      es: { t: 'Ruteo inteligente de tickets', d: 'Clasificar cada solicitud y enviarla al equipo correcto a la primera.', data: 'Una muestra de tickets pasados etiquetados con el equipo correcto.', first: 'Etiquetar unos cientos de tickets y medir la tasa actual de mal ruteo.' },
    },
  },
  {
    id: 'f-close', fn: 'finance', ind: 'all', impact: 7, feas: 7,
    text: {
      en: { t: 'Faster month end close', d: 'Reconcile accounts and flag anomalies automatically.', data: 'Ledger exports, bank statements, reconciliation rules.', first: 'Map the close calendar and automate the most manual reconciliation first.' },
      es: { t: 'Cierre de mes más rápido', d: 'Conciliar cuentas y señalar anomalías automáticamente.', data: 'Exportaciones contables, estados de cuenta, reglas de conciliación.', first: 'Mapear el calendario de cierre y automatizar primero la conciliación más manual.' },
    },
  },
  {
    id: 'f-collect', fn: 'finance', ind: 'all', impact: 7, feas: 7,
    text: {
      en: { t: 'Collections prioritization', d: 'Predict which invoices will be paid late and focus collection effort there.', data: 'Two years of invoices with payment dates and customer data.', first: 'Pull the invoice history and compare late payers against today’s collection list.' },
      es: { t: 'Priorización de cobranza', d: 'Predecir qué facturas se van a pagar tarde y enfocar ahí el esfuerzo de cobranza.', data: 'Dos años de facturas con fechas de pago y datos del cliente.', first: 'Sacar la historia de facturas y comparar a los que pagan tarde contra la lista de cobranza actual.' },
    },
  },
  {
    id: 'f-fraud', fn: 'finance', ind: ['finance', 'retail'], impact: 9, feas: 5,
    text: {
      en: { t: 'Fraud and risk detection', d: 'Flag unusual transactions and credit risk before losses happen.', data: 'Transaction history and confirmed fraud or default cases.', first: 'Start from confirmed cases to train and test a model against current rules.' },
      es: { t: 'Detección de fraude y riesgo', d: 'Señalar transacciones inusuales y riesgo de crédito antes de que haya pérdidas.', data: 'Historial de transacciones y casos confirmados de fraude o impago.', first: 'Partir de casos confirmados para entrenar y probar un modelo contra las reglas actuales.' },
    },
  },
  {
    id: 'f-report', fn: 'finance', ind: 'all', impact: 5, feas: 9,
    text: {
      en: { t: 'Management reporting narrative', d: 'Turn monthly numbers into a written summary of what changed and why.', data: 'The monthly report and last year’s commentary.', first: 'Automate the commentary for one report and compare it with the analyst’s version.' },
      es: { t: 'Narrativa de reportes directivos', d: 'Convertir los números del mes en un resumen escrito de qué cambió y por qué.', data: 'El reporte mensual y los comentarios del año pasado.', first: 'Automatizar los comentarios de un reporte y compararlos con la versión del analista.' },
    },
  },
  {
    id: 'p-screen', fn: 'people', ind: 'all', impact: 5, feas: 8,
    text: {
      en: { t: 'Candidate screening support', d: 'Summarize applications against the role’s must haves, with a person making every decision.', data: 'Clear role requirements and past applications.', first: 'Write precise must haves for one high volume role and test on past applicants.' },
      es: { t: 'Apoyo en filtro de candidatos', d: 'Resumir postulaciones contra los requisitos del puesto, con una persona tomando cada decisión.', data: 'Requisitos claros del puesto y postulaciones pasadas.', first: 'Escribir requisitos precisos para un puesto de alto volumen y probar con postulantes anteriores.' },
    },
  },
  {
    id: 'p-onboard', fn: 'people', ind: 'all', impact: 5, feas: 9,
    text: {
      en: { t: 'Onboarding assistant', d: 'Answer new hires’ questions about policies, tools and processes at any hour.', data: 'Onboarding documents, policies and FAQs.', first: 'Gather the onboarding documents into one source of truth.' },
      es: { t: 'Asistente de onboarding', d: 'Responder a cualquier hora las preguntas de nuevos ingresos sobre políticas, herramientas y procesos.', data: 'Documentos de onboarding, políticas y preguntas frecuentes.', first: 'Reunir los documentos de onboarding en una sola fuente confiable.' },
    },
  },
  {
    id: 'p-skills', fn: 'people', ind: 'all', impact: 6, feas: 6,
    text: {
      en: { t: 'Skills mapping', d: 'Map the skills you have against the skills your strategy needs.', data: 'Role descriptions, profiles and training records.', first: 'Define the ten skills that matter most for the next three years.' },
      es: { t: 'Mapa de habilidades', d: 'Comparar las habilidades que tienes contra las que tu estrategia necesita.', data: 'Descripciones de puesto, perfiles y registros de capacitación.', first: 'Definir las diez habilidades que más importan para los próximos tres años.' },
    },
  },
  {
    id: 'p-attrition', fn: 'people', ind: 'all', impact: 7, feas: 5,
    text: {
      en: { t: 'Attrition risk signals', d: 'Spot teams at risk of losing people early enough to act.', data: 'Exit data, engagement surveys and tenure.', first: 'Combine exit data and engagement surveys for one business unit.' },
      es: { t: 'Señales de riesgo de rotación', d: 'Detectar a tiempo los equipos con riesgo de perder gente.', data: 'Datos de salida, encuestas de clima y antigüedad.', first: 'Combinar datos de salida y encuestas de clima de una unidad de negocio.' },
    },
  },
];

export const aiOpportunityMap: Localized<{
  industry: string;
  fn: string;
  allFns: string;
  industries: Record<Industry, string>;
  fns: Record<Fn, string>;
  listTitle: string;
  hint: string;
  dyn: {
    quadrants: { quick: string; bets: string; extras: string; later: string };
    impact: string;
    feasibility: string;
    data: string;
    first: string;
    scores: string;
    showAll: string;
    showFewer: string;
    mapAria: string;
  };
}> = {
  en: {
    industry: 'Industry',
    fn: 'Function',
    allFns: 'All functions',
    industries: { retail: 'Retail', cpg: 'Consumer goods and food', finance: 'Financial services', manufacturing: 'Manufacturing', logistics: 'Logistics and distribution', services: 'Professional services' },
    fns: { marketing: 'Marketing', sales: 'Sales', operations: 'Operations', service: 'Customer service', finance: 'Finance', people: 'People and HR' },
    listTitle: 'Ranked by priority',
    hint: 'Select a dot or a row to see what it takes.',
    dyn: {
      quadrants: { quick: 'Quick wins', bets: 'Big bets', extras: 'Easy extras', later: 'Not now' },
      impact: 'Impact',
      feasibility: 'Feasibility',
      data: 'Data you need',
      first: 'First step',
      scores: 'Impact {i} of 10, feasibility {f} of 10',
      showAll: 'Show all {n}',
      showFewer: 'Show top 10',
      mapAria: 'Scatter plot of AI use cases by feasibility and impact, divided into four quadrants.',
    },
  },
  es: {
    industry: 'Industria',
    fn: 'Función',
    allFns: 'Todas las funciones',
    industries: { retail: 'Retail', cpg: 'Consumo y alimentos', finance: 'Servicios financieros', manufacturing: 'Manufactura', logistics: 'Logística y distribución', services: 'Servicios profesionales' },
    fns: { marketing: 'Marketing', sales: 'Ventas', operations: 'Operaciones', service: 'Servicio al cliente', finance: 'Finanzas', people: 'Personas y RH' },
    listTitle: 'Ordenados por prioridad',
    hint: 'Selecciona un punto o una fila para ver qué se necesita.',
    dyn: {
      quadrants: { quick: 'Victorias rápidas', bets: 'Grandes apuestas', extras: 'Extras fáciles', later: 'Ahora no' },
      impact: 'Impacto',
      feasibility: 'Factibilidad',
      data: 'Datos que necesitas',
      first: 'Primer paso',
      scores: 'Impacto {i} de 10, factibilidad {f} de 10',
      showAll: 'Ver los {n}',
      showFewer: 'Ver los 10 principales',
      mapAria: 'Diagrama de dispersión de casos de uso de IA por factibilidad e impacto, dividido en cuatro cuadrantes.',
    },
  },
};
