import type { Localized } from '../../i18n/ui';

export interface CrmCopy {
  appName: string;
  privacy: string;
  tabs: { queue: string; people: string; pipeline: string; data: string };
  // queue
  thisWeek: string;
  queueCount: string;
  caughtUp: string;
  draft: string;
  logContact: string;
  snooze: string;
  copy: string;
  copied: string;
  logAsSent: string;
  owed: string;
  owedEmpty: string;
  markDone: string;
  since: string;
  never: string;
  overdue: string;
  overdueOne: string;
  dueToday: string;
  dueIn: string;
  reasons: { loopMine: string; loopTheirs: string; first: string; snoozed: string; cadence: string };
  drafts: { loopMine: string; loopTheirs: string; first: string; cadence: string };
  // people
  search: string;
  addPerson: string;
  noPeople: string;
  back: string;
  fields: { name: string; company: string; role: string; tier: string; channel: string; notes: string };
  tiers: Record<string, string>;
  channels: Record<string, string>;
  save: string;
  saved: string;
  del: string;
  confirmDel: string;
  facts: { last: string; next: string; talks: string };
  loopsTitle: string;
  loopsEmpty: string;
  youOwe: string;
  theyOwe: string;
  addLoop: string;
  loopDesc: string;
  owner: string;
  me: string;
  them: string;
  due: string;
  logTitle: string;
  date: string;
  discussed: string;
  myPromise: string;
  theirOffer: string;
  saveLog: string;
  timeline: string;
  timelineEmpty: string;
  checkedIn: string;
  sent: string;
  // pipeline
  pipelineLead: string;
  stages: Record<string, string>;
  addOpp: string;
  oppFields: { title: string; company: string; person: string; next: string; nextDate: string };
  nobody: string;
  summary: string;
  // data
  dataTitle: string;
  cadenceTitle: string;
  cadenceLead: string;
  everyDays: string;
  exportJson: string;
  exportCsv: string;
  importJson: string;
  imported: string;
  importFailed: string;
  loadSample: string;
  clearAll: string;
  confirmClear: string;
  cleared: string;
  sample: {
    people: [string, string, string, string, string, string][];
    talks: [number, number, string, string][];
    loops: [number, string, string, number][];
    opps: [string, string, number, string, string, number][];
  };
}

export const networkingCrm: Localized<CrmCopy> = {
  en: {
    appName: 'Networking CRM',
    privacy: 'Your contacts stay in this browser. Nothing is sent anywhere.',
    tabs: { queue: 'This week', people: 'People', pipeline: 'Pipeline', data: 'Your data' },
    thisWeek: 'Who to reach this week, and why',
    queueCount: '{n} people to reach, {l} promises open',
    caughtUp: 'All caught up. Add someone you met recently or log a conversation.',
    draft: 'Draft message',
    logContact: 'Log contact',
    snooze: 'Snooze a week',
    copy: 'Copy',
    copied: 'Copied.',
    logAsSent: 'Log as sent',
    owed: 'Owed by me',
    owedEmpty: 'No open promises.',
    markDone: 'Mark done',
    since: '{n} days since you last spoke',
    never: 'No conversations yet',
    overdue: '{n} days overdue',
    overdueOne: '1 day overdue',
    dueToday: 'Due today',
    dueIn: 'Due in {n} days',
    reasons: {
      loopMine: 'Your promise: {desc}.',
      loopTheirs: '{name} offered: {desc}. A light nudge keeps it moving.',
      first: 'No conversation logged yet. A short hello starts the record.',
      snoozed: 'Snoozed until {date}.',
      cadence: 'Tier {tier} check in, every {days} days.',
    },
    drafts: {
      loopMine: 'Hi {name}, following up on what I promised: {desc}. Here it is. Let me know if it helps or if anything is missing.',
      loopTheirs: 'Hi {name}, hope you are doing well. You kindly offered this: {desc}. Is it still a good time? I am happy to make it as easy as possible.',
      first: 'Hi {name}, it was great to connect. I would love to hear more about your work at {company}. Would you have 20 minutes in the next two weeks?',
      cadence: 'Hi {name}, it has been a while and I thought of you this week. How are things going at {company}? I would love to catch up when you have a moment.',
    },
    search: 'Search name or company',
    addPerson: 'Add person',
    noPeople: 'No one here yet. Add someone you met recently.',
    back: 'Back to everyone',
    fields: { name: 'Name', company: 'Company', role: 'Role', tier: 'Tier', channel: 'Preferred channel', notes: 'Notes' },
    tiers: { A: 'A, actively working together', B: 'B, warm and relevant', C: 'C, met once, worth keeping alive', D: 'D, dormant or courtesy' },
    channels: { whatsapp: 'WhatsApp', linkedin: 'LinkedIn', email: 'Email', call: 'Call', inperson: 'In person' },
    save: 'Save',
    saved: 'Saved.',
    del: 'Delete',
    confirmDel: 'Click again to delete',
    facts: { last: 'Last contact', next: 'Next touch', talks: 'Conversations' },
    loopsTitle: 'Open loops',
    loopsEmpty: 'No open loops.',
    youOwe: 'You owe',
    theyOwe: 'They owe',
    addLoop: 'Add loop',
    loopDesc: 'What was promised',
    owner: 'Who owes it',
    me: 'Me',
    them: 'Them',
    due: 'Due',
    logTitle: 'Log a conversation',
    date: 'Date',
    discussed: 'What you discussed',
    myPromise: 'My promise, optional',
    theirOffer: 'Their offer, optional',
    saveLog: 'Save conversation',
    timeline: 'Timeline',
    timelineEmpty: 'No conversations logged yet.',
    checkedIn: 'Checked in.',
    sent: 'Sent: {text}',
    pipelineLead: 'When a conversation turns into something concrete, track it here.',
    stages: { lead: 'Lead', talking: 'In conversation', proposal: 'Proposal', won: 'Won', lost: 'Lost' },
    addOpp: 'Add opportunity',
    oppFields: { title: 'Opportunity', company: 'Company', person: 'Main contact', next: 'Next step', nextDate: 'Next date' },
    nobody: 'No one',
    summary: '{open} open, {won} won, {rate} win rate on closed',
    dataTitle: 'Your data',
    cadenceTitle: 'Check in cadence',
    cadenceLead: 'How often each tier comes back to your queue.',
    everyDays: 'Tier {tier}, days',
    exportJson: 'Export backup',
    exportCsv: 'Export contacts as CSV',
    importJson: 'Import a backup',
    imported: 'Imported.',
    importFailed: 'That file is not a backup from this CRM.',
    loadSample: 'Load sample data',
    clearAll: 'Clear everything',
    confirmClear: 'Click again to clear',
    cleared: 'Everything cleared.',
    sample: {
      people: [
        ['Lucía Garza', 'Norte Foods', 'Trade marketing director', 'A', 'whatsapp', 'Met at a retail conference. Cares about execution in the traditional channel.'],
        ['Daniel Okafor', 'Ledgerline', 'Head of product marketing', 'A', 'linkedin', 'Launching a card product for small businesses.'],
        ['Mariana Solís', 'Acero del Bravo', 'Commercial planning manager', 'B', 'email', 'Moving order taking from phone to a portal.'],
        ['Tom Becker', 'Haven Property Group', 'Owner', 'B', 'call', 'Runs 40 rental homes with a team of three.'],
        ['Renata Paz', 'Casa Lumen', 'Founder', 'B', 'whatsapp', 'Home goods brand selling online and in two stores.'],
        ['Hiro Tanaka', 'Kite Payments', 'Partnerships lead', 'C', 'linkedin', 'Introduced by Daniel.'],
        ['Camila Rojas', 'Grupo Alameda', 'Strategy manager', 'C', 'email', ''],
        ['Peter Lang', 'Brightwell Chemicals', 'Sales and marketing manager', 'D', 'email', 'Former classmate.'],
      ],
      talks: [
        [0, 16, 'whatsapp', 'Coffee. Talked about measuring promotions beyond volume. She wants to see a simple return model.'],
        [1, 9, 'call', 'Walked through their launch plan. Positioning is still too broad for the first segment.'],
        [2, 41, 'email', 'Shared how quotes get stuck between sales and credit.'],
        [3, 6, 'call', 'Late fees and repairs take most of his week. Interested in an approval inbox.'],
        [4, 75, 'inperson', 'Met at a pop up market. Wants to understand repeat purchase.'],
        [5, 33, 'linkedin', 'Short intro chat about partner marketing in payments.'],
      ],
      loops: [
        [0, 'me', 'Send the promotion return model with her numbers', 2],
        [1, 'me', 'Share notes on narrowing the launch segment', -1],
        [3, 'them', 'Send last month’s repair list', 4],
        [5, 'them', 'Introduce me to their LATAM lead', 10],
      ],
      opps: [
        ['Promotion return model', 'Norte Foods', 0, 'proposal', 'Review the model together', 3],
        ['Launch messaging workshop', 'Ledgerline', 1, 'talking', 'Send workshop outline', 5],
        ['Approval inbox for repairs', 'Haven Property Group', 3, 'lead', 'Map one week of requests', 8],
        ['Repeat purchase analysis', 'Casa Lumen', 4, 'won', 'Kick off', 1],
      ],
    },
  },
  es: {
    appName: 'CRM de networking',
    privacy: 'Tus contactos se quedan en este navegador. No se envía nada a ningún lado.',
    tabs: { queue: 'Esta semana', people: 'Personas', pipeline: 'Pipeline', data: 'Tus datos' },
    thisWeek: 'A quién contactar esta semana, y por qué',
    queueCount: '{n} personas por contactar, {l} compromisos abiertos',
    caughtUp: 'Todo al día. Agrega a alguien que conociste hace poco o registra una conversación.',
    draft: 'Redactar mensaje',
    logContact: 'Registrar contacto',
    snooze: 'Posponer una semana',
    copy: 'Copiar',
    copied: 'Copiado.',
    logAsSent: 'Registrar como enviado',
    owed: 'Lo que debo',
    owedEmpty: 'Sin compromisos abiertos.',
    markDone: 'Marcar como hecho',
    since: '{n} días desde la última vez que hablaron',
    never: 'Sin conversaciones aún',
    overdue: '{n} días de atraso',
    overdueOne: '1 día de atraso',
    dueToday: 'Vence hoy',
    dueIn: 'Vence en {n} días',
    reasons: {
      loopMine: 'Tu compromiso: {desc}.',
      loopTheirs: '{name} ofreció: {desc}. Un recordatorio ligero lo mantiene en marcha.',
      first: 'Sin conversaciones registradas. Un saludo breve abre el historial.',
      snoozed: 'Pospuesto hasta el {date}.',
      cadence: 'Contacto de nivel {tier}, cada {days} días.',
    },
    drafts: {
      loopMine: 'Hola {name}, te escribo por lo que quedé de enviarte: {desc}. Aquí va. Dime si te sirve o si falta algo.',
      loopTheirs: 'Hola {name}, espero que estés muy bien. Amablemente me ofreciste esto: {desc}. ¿Sigue siendo buen momento? Con gusto te lo hago lo más fácil posible.',
      first: 'Hola {name}, qué gusto conectar contigo. Me encantaría conocer más sobre tu trabajo en {company}. ¿Tendrías 20 minutos en las próximas dos semanas?',
      cadence: 'Hola {name}, ha pasado un rato y me acordé de ti esta semana. ¿Cómo va todo en {company}? Me encantaría ponernos al día cuando tengas un momento.',
    },
    search: 'Buscar nombre o empresa',
    addPerson: 'Agregar persona',
    noPeople: 'Aún no hay nadie. Agrega a alguien que conociste hace poco.',
    back: 'Volver a todas las personas',
    fields: { name: 'Nombre', company: 'Empresa', role: 'Puesto', tier: 'Nivel', channel: 'Canal preferido', notes: 'Notas' },
    tiers: { A: 'A, trabajando juntos activamente', B: 'B, relación cálida y relevante', C: 'C, se conocieron una vez, vale la pena mantener', D: 'D, inactivo o de cortesía' },
    channels: { whatsapp: 'WhatsApp', linkedin: 'LinkedIn', email: 'Correo', call: 'Llamada', inperson: 'En persona' },
    save: 'Guardar',
    saved: 'Guardado.',
    del: 'Eliminar',
    confirmDel: 'Haz clic otra vez para eliminar',
    facts: { last: 'Último contacto', next: 'Próximo contacto', talks: 'Conversaciones' },
    loopsTitle: 'Pendientes abiertos',
    loopsEmpty: 'Sin pendientes abiertos.',
    youOwe: 'Tú debes',
    theyOwe: 'Te deben',
    addLoop: 'Agregar pendiente',
    loopDesc: 'Qué se prometió',
    owner: 'Quién lo debe',
    me: 'Yo',
    them: 'La otra persona',
    due: 'Fecha',
    logTitle: 'Registrar una conversación',
    date: 'Fecha',
    discussed: 'De qué hablaron',
    myPromise: 'Mi compromiso, opcional',
    theirOffer: 'Lo que ofrecieron, opcional',
    saveLog: 'Guardar conversación',
    timeline: 'Historial',
    timelineEmpty: 'Sin conversaciones registradas.',
    checkedIn: 'Contacto realizado.',
    sent: 'Enviado: {text}',
    pipelineLead: 'Cuando una conversación se convierte en algo concreto, dale seguimiento aquí.',
    stages: { lead: 'Prospecto', talking: 'En conversación', proposal: 'Propuesta', won: 'Ganada', lost: 'Perdida' },
    addOpp: 'Agregar oportunidad',
    oppFields: { title: 'Oportunidad', company: 'Empresa', person: 'Contacto principal', next: 'Siguiente paso', nextDate: 'Próxima fecha' },
    nobody: 'Nadie',
    summary: '{open} abiertas, {won} ganadas, {rate} de cierre sobre las concluidas',
    dataTitle: 'Tus datos',
    cadenceTitle: 'Frecuencia de contacto',
    cadenceLead: 'Cada cuánto vuelve cada nivel a tu lista.',
    everyDays: 'Nivel {tier}, días',
    exportJson: 'Exportar respaldo',
    exportCsv: 'Exportar contactos en CSV',
    importJson: 'Importar un respaldo',
    imported: 'Importado.',
    importFailed: 'Ese archivo no es un respaldo de este CRM.',
    loadSample: 'Cargar datos de ejemplo',
    clearAll: 'Borrar todo',
    confirmClear: 'Haz clic otra vez para borrar',
    cleared: 'Todo borrado.',
    sample: {
      people: [
        ['Lucía Garza', 'Norte Foods', 'Directora de trade marketing', 'A', 'whatsapp', 'Nos conocimos en un congreso de retail. Le importa la ejecución en el canal tradicional.'],
        ['Daniel Okafor', 'Ledgerline', 'Head de product marketing', 'A', 'linkedin', 'Está lanzando una tarjeta para pequeñas empresas.'],
        ['Mariana Solís', 'Acero del Bravo', 'Gerente de planeación comercial', 'B', 'email', 'Está moviendo la toma de pedidos del teléfono a un portal.'],
        ['Tom Becker', 'Haven Property Group', 'Dueño', 'B', 'call', 'Administra 40 casas en renta con un equipo de tres.'],
        ['Renata Paz', 'Casa Lumen', 'Fundadora', 'B', 'whatsapp', 'Marca de artículos para el hogar con venta en línea y dos tiendas.'],
        ['Hiro Tanaka', 'Kite Payments', 'Líder de alianzas', 'C', 'linkedin', 'Me lo presentó Daniel.'],
        ['Camila Rojas', 'Grupo Alameda', 'Gerente de estrategia', 'C', 'email', ''],
        ['Peter Lang', 'Brightwell Chemicals', 'Gerente de ventas y marketing', 'D', 'email', 'Excompañero de clase.'],
      ],
      talks: [
        [0, 16, 'whatsapp', 'Café. Hablamos de medir promociones más allá del volumen. Quiere ver un modelo sencillo de retorno.'],
        [1, 9, 'call', 'Revisamos su plan de lanzamiento. El posicionamiento sigue muy amplio para el primer segmento.'],
        [2, 41, 'email', 'Me contó cómo se atoran las cotizaciones entre ventas y crédito.'],
        [3, 6, 'call', 'Los recargos y las reparaciones le consumen la semana. Le interesa una bandeja de aprobaciones.'],
        [4, 75, 'inperson', 'Nos conocimos en un bazar. Quiere entender la recompra.'],
        [5, 33, 'linkedin', 'Plática breve sobre marketing de alianzas en pagos.'],
      ],
      loops: [
        [0, 'me', 'Enviarle el modelo de retorno de promociones con sus números', 2],
        [1, 'me', 'Compartir notas para acotar el segmento de lanzamiento', -1],
        [3, 'them', 'Enviar la lista de reparaciones del mes pasado', 4],
        [5, 'them', 'Presentarme a su líder de LATAM', 10],
      ],
      opps: [
        ['Modelo de retorno de promociones', 'Norte Foods', 0, 'proposal', 'Revisar el modelo juntos', 3],
        ['Taller de mensajes de lanzamiento', 'Ledgerline', 1, 'talking', 'Enviar el temario del taller', 5],
        ['Bandeja de aprobaciones para reparaciones', 'Haven Property Group', 3, 'lead', 'Mapear una semana de solicitudes', 8],
        ['Análisis de recompra', 'Casa Lumen', 4, 'won', 'Arrancar', 1],
      ],
    },
  },
};
