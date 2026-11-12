import type { Localized } from '../../i18n/ui';

/** Everything here is fictional: company, addresses, people and vendors. */
export interface RentalCopy {
  company: string;
  tagline: string;
  tabs: { today: string; requests: string; rent: string; renewals: string };
  day: string;
  nextDay: string;
  reset: string;
  resetDone: string;
  stats: { approve: string; open: string; collected: string; ending: string };
  approveTitle: string;
  approveLead: string;
  approveEmpty: string;
  approve: string;
  skip: string;
  why: string;
  messageTo: string;
  logTitle: string;
  logEmpty: string;
  // requests
  reportTitle: string;
  reportLead: string;
  unit: string;
  describe: string;
  describePlaceholder: string;
  examples: string[];
  submit: string;
  triageTitle: string;
  liveTitle: string;
  priority: string;
  reason: string;
  vendor: string;
  window: string;
  safety: string;
  sentToApproval: string;
  cols: { approval: string; scheduled: string; done: string };
  markDone: string;
  levels: { emergency: string; urgent: string; normal: string };
  windows: { emergency: string; urgent: string; normal: string };
  cats: Record<string, string>;
  whys: Record<string, string>;
  safetyTips: Record<string, string>;
  // rent
  rentTitle: string;
  rentLead: string;
  th: { unit: string; renter: string; rent: string; status: string; balance: string; lease: string; suggested: string; action: string };
  paid: string;
  unpaid: string;
  vacant: string;
  lateDays: string;
  feeRunning: string;
  recordPayment: string;
  paidUp: string;
  ownerTitle: string;
  ownerRows: { collected: string; fee: string; repairs: string; payout: string };
  // renewals
  renewTitle: string;
  renewLead: string;
  endsIn: string;
  renewStatus: { none: string; drafted: string; sent: string; renewed: string; leaving: string };
  draftOffer: string;
  accepted: string;
  leaving: string;
  renewEmpty: string;
  // approval cards and drafts
  ap: {
    requestTitle: string;
    requestWhy: string[];
    renterMsg: string;
    vendorMsg: string;
    lateTitle: string;
    lateWhy: string[];
    lateMsg: string;
    renewTitle: string;
    renewWhy: string[];
    renewMsg: string;
  };
  log: {
    request: string;
    approvedRequest: string;
    skipped: string;
    done: string;
    lateStarted: string;
    payment: string;
    offerSent: string;
    renewed: string;
    leaving: string;
    newDay: string;
  };
  toRenter: string;
  toVendor: string;
  perMonth: string;
}

export const rentalOps: Localized<RentalCopy> = {
  en: {
    company: 'Arbor Street Rentals',
    tagline: 'Team workspace, demo data',
    tabs: { today: 'Today', requests: 'Maintenance', rent: 'Rent and money', renewals: 'Renewals' },
    day: 'Day {n} of the month',
    nextDay: 'Jump to tomorrow',
    reset: 'Reset the demo',
    resetDone: 'Demo reset.',
    stats: { approve: 'Waiting for your OK', open: 'Open repairs', collected: 'Rent collected', ending: 'Leases ending in 120 days' },
    approveTitle: 'To approve',
    approveLead: 'The system drafts. Nothing reaches a renter, a vendor or an owner until a person approves it. Edit any message before you send it.',
    approveEmpty: 'Nothing is waiting. Report a repair or jump to tomorrow to see the system work.',
    approve: 'Approve and send',
    skip: 'Skip',
    why: 'Why this is here',
    messageTo: 'Message to {who}',
    logTitle: 'What happened',
    logEmpty: 'Actions will show up here.',
    reportTitle: 'Report a repair as a renter',
    reportLead: 'Describe a problem in your own words. The system reads it, sets the priority, picks the vendor and drafts both messages.',
    unit: 'Home',
    describe: 'What is going on?',
    describePlaceholder: 'For example: there is no heat and it is freezing in here',
    examples: ['There is no heat and it is freezing', 'The kitchen sink is dripping', 'I smell gas near the stove', 'The fridge stopped cooling', 'Ants in the kitchen'],
    submit: 'Send request',
    triageTitle: 'How the system read it',
    liveTitle: 'Reading as you type',
    priority: 'Priority',
    reason: 'Reason',
    vendor: 'Vendor',
    window: 'Visit window',
    safety: 'Safety tip sent to the renter',
    sentToApproval: 'Drafts are waiting in Today for approval.',
    cols: { approval: 'Needs approval', scheduled: 'Scheduled', done: 'Done' },
    markDone: 'Mark done',
    levels: { emergency: 'Emergency', urgent: 'Urgent', normal: 'Routine' },
    windows: { emergency: 'today, within 2 hours', urgent: 'within 24 hours', normal: 'within 3 business days' },
    cats: {
      plumbing: 'Plumbing',
      heating: 'Heating and cooling',
      electrical: 'Electrical',
      appliance: 'Appliances',
      locks: 'Locks and security',
      pests: 'Pest control',
      other: 'General repair',
    },
    whys: {
      gas: 'Possible gas or carbon monoxide leak',
      fire: 'Fire or electrical hazard',
      flood: 'Active water damage can spread to other homes',
      noheat: 'No heat makes the home unsafe to stay in',
      hotwater: 'No hot water affects daily living',
      toilet: 'A blocked toilet cannot wait several days',
      lock: 'The home cannot be secured',
      fridge: 'Food will spoil within a day',
      leak: 'A leak gets more expensive every day it runs',
      none: 'No urgent keywords found',
    },
    safetyTips: {
      gas: 'Leave the home now, do not use switches or flames, and call the gas company emergency line from outside.',
      fire: 'If you see smoke or flames, leave and call the fire department. Do not use the outlet.',
      flood: 'If you can reach it safely, close the main water valve and keep away from wet outlets.',
      noheat: 'Keep doors and windows closed. A technician is on the way today.',
    },
    rentTitle: 'This month’s rent',
    rentLead: 'Rent is due on the 1st. Late fees start on the 2nd only after a person approves them, run daily and stop on their own once rent and fees are paid.',
    th: { unit: 'Home', renter: 'Renter', rent: 'Rent', status: 'Status', balance: 'Balance', lease: 'Lease ends', suggested: 'Suggested rent', action: 'Action' },
    paid: 'Paid',
    unpaid: 'Unpaid',
    vacant: 'Vacant',
    lateDays: '{n} days late',
    feeRunning: 'Daily fee running',
    recordPayment: 'Record payment',
    paidUp: 'Paid up',
    ownerTitle: 'Owner payout this month',
    ownerRows: { collected: 'Rent collected', fee: 'Management fee, 8%', repairs: 'Repairs approved', payout: 'Paid to owners' },
    renewTitle: 'Renewal season',
    renewLead: 'Every lease ending in the next 120 days, with a suggested rent. Offers go out only after you approve the draft.',
    endsIn: 'in {n} days',
    renewStatus: { none: 'Not started', drafted: 'Draft waiting for approval', sent: 'Offer sent', renewed: 'Renewed', leaving: 'Moving out' },
    draftOffer: 'Draft offer',
    accepted: 'Renter accepted',
    leaving: 'Moving out',
    renewEmpty: 'No leases end in the next 120 days.',
    ap: {
      requestTitle: '{level} repair at {unit}',
      requestWhy: ['Renter wrote: “{text}”', 'Read as {cat}: {why}', 'Vendor on file for this category: {vendor}'],
      renterMsg: 'Hi {name}, thanks for reporting this. {vendor} will come {window}. Please make sure someone can let them in, or reply here if we may use our key.{safety}',
      vendorMsg: 'New job from {company}: “{text}” at {unit}. Priority: {level}. Window: {window}. Renter: {name}. Reply to confirm.',
      lateTitle: 'Start late fees for {n} renters',
      lateWhy: [
        'Rent was due on the 1st and is still open',
        'The lease sets a late fee of {fee} a day from the 2nd',
        'Approve once per renter. The fee stops on its own when rent and fees are paid',
      ],
      lateMsg: 'Hi {name}, this month’s rent for {unit} is still open. As the lease says, a late fee of {fee} a day started on the 2nd and stops once rent and fees are paid. Reply here if something happened and we can talk.',
      renewTitle: 'Renewal offer for {unit}',
      renewWhy: ['The lease ends in {n} days', 'Suggested rent {rent}, 3% above today, in line with similar homes we manage', 'The renter has paid on time this year'],
      renewMsg: 'Hi {name}, your lease at {unit} ends in {n} days and we would love to have you stay. The rent for the new 12 month lease would be {rent} a month. Reply yes and we will send the renewal to sign.',
    },
    log: {
      request: '{name} reported a repair at {unit}. Read as {level}.',
      approvedRequest: 'Approved. {vendor} and {name} were notified.',
      skipped: 'Skipped: {title}.',
      done: 'Repair at {unit} marked done.',
      lateStarted: 'Late fees approved for {n} renters.',
      payment: '{name} paid {amount}. Fees stopped.',
      offerSent: 'Renewal offer sent to {name}.',
      renewed: '{unit} renewed at {rent}.',
      leaving: '{name} is moving out. {unit} goes on the listing schedule.',
      newDay: 'New day: {day}.',
    },
    toRenter: 'the renter',
    toVendor: 'the vendor',
    perMonth: '{m} a month',
  },
  es: {
    company: 'Arbor Street Rentals',
    tagline: 'Espacio del equipo, datos de demostración',
    tabs: { today: 'Hoy', requests: 'Mantenimiento', rent: 'Rentas y dinero', renewals: 'Renovaciones' },
    day: 'Día {n} del mes',
    nextDay: 'Saltar a mañana',
    reset: 'Reiniciar la demo',
    resetDone: 'Demo reiniciada.',
    stats: { approve: 'Esperan tu aprobación', open: 'Reparaciones abiertas', collected: 'Renta cobrada', ending: 'Contratos que vencen en 120 días' },
    approveTitle: 'Por aprobar',
    approveLead: 'El sistema prepara. Nada le llega a un inquilino, proveedor o propietario hasta que una persona lo aprueba. Puedes editar cualquier mensaje antes de enviarlo.',
    approveEmpty: 'No hay nada pendiente. Reporta una reparación o salta a mañana para ver el sistema en acción.',
    approve: 'Aprobar y enviar',
    skip: 'Omitir',
    why: 'Por qué está aquí',
    messageTo: 'Mensaje para {who}',
    logTitle: 'Qué ha pasado',
    logEmpty: 'Aquí aparecerán las acciones.',
    reportTitle: 'Reporta una reparación como inquilino',
    reportLead: 'Describe un problema con tus propias palabras. El sistema lo lee, define la prioridad, elige al proveedor y redacta los dos mensajes.',
    unit: 'Vivienda',
    describe: '¿Qué está pasando?',
    describePlaceholder: 'Por ejemplo: no hay calefacción y hace muchísimo frío',
    examples: ['No hay calefacción y hace mucho frío', 'Gotea el fregadero de la cocina', 'Huele a gas cerca de la estufa', 'El refri dejó de enfriar', 'Hay hormigas en la cocina'],
    submit: 'Enviar solicitud',
    triageTitle: 'Cómo lo leyó el sistema',
    liveTitle: 'Leyendo mientras escribes',
    priority: 'Prioridad',
    reason: 'Motivo',
    vendor: 'Proveedor',
    window: 'Ventana de visita',
    safety: 'Recomendación de seguridad enviada al inquilino',
    sentToApproval: 'Los borradores esperan aprobación en Hoy.',
    cols: { approval: 'Por aprobar', scheduled: 'Programadas', done: 'Terminadas' },
    markDone: 'Marcar terminada',
    levels: { emergency: 'Emergencia', urgent: 'Urgente', normal: 'Rutina' },
    windows: { emergency: 'hoy, en menos de 2 horas', urgent: 'en menos de 24 horas', normal: 'en un máximo de 3 días hábiles' },
    cats: {
      plumbing: 'Plomería',
      heating: 'Calefacción y clima',
      electrical: 'Electricidad',
      appliance: 'Electrodomésticos',
      locks: 'Cerraduras y seguridad',
      pests: 'Control de plagas',
      other: 'Reparación general',
    },
    whys: {
      gas: 'Posible fuga de gas o monóxido de carbono',
      fire: 'Riesgo de incendio o eléctrico',
      flood: 'El daño por agua puede extenderse a otras viviendas',
      noheat: 'Sin calefacción la vivienda no es segura',
      hotwater: 'No tener agua caliente afecta la vida diaria',
      toilet: 'Un baño tapado no puede esperar varios días',
      lock: 'La vivienda no se puede cerrar con seguridad',
      fridge: 'La comida se echa a perder en un día',
      leak: 'Una fuga sale más cara cada día que pasa',
      none: 'No se encontraron palabras de urgencia',
    },
    safetyTips: {
      gas: 'Sal de la vivienda ahora, no uses interruptores ni flamas y llama desde afuera a la línea de emergencia de la compañía de gas.',
      fire: 'Si ves humo o llamas, sal y llama a los bomberos. No uses ese contacto.',
      flood: 'Si puedes hacerlo con seguridad, cierra la llave general del agua y aléjate de contactos mojados.',
      noheat: 'Mantén puertas y ventanas cerradas. Hoy mismo va un técnico.',
    },
    rentTitle: 'Renta de este mes',
    rentLead: 'La renta vence el día 1. Los recargos empiezan el día 2 solo después de que una persona los aprueba, corren diario y se detienen solos cuando se pagan la renta y los recargos.',
    th: { unit: 'Vivienda', renter: 'Inquilino', rent: 'Renta', status: 'Estado', balance: 'Saldo', lease: 'Vence el contrato', suggested: 'Renta sugerida', action: 'Acción' },
    paid: 'Pagada',
    unpaid: 'Sin pagar',
    vacant: 'Desocupada',
    lateDays: '{n} días de atraso',
    feeRunning: 'Recargo diario activo',
    recordPayment: 'Registrar pago',
    paidUp: 'Al corriente',
    ownerTitle: 'Pago a propietarios este mes',
    ownerRows: { collected: 'Renta cobrada', fee: 'Comisión de administración, 8%', repairs: 'Reparaciones aprobadas', payout: 'Pago a propietarios' },
    renewTitle: 'Temporada de renovaciones',
    renewLead: 'Todos los contratos que vencen en los próximos 120 días, con una renta sugerida. Las ofertas salen solo después de que apruebas el borrador.',
    endsIn: 'en {n} días',
    renewStatus: { none: 'Sin iniciar', drafted: 'Borrador por aprobar', sent: 'Oferta enviada', renewed: 'Renovado', leaving: 'Se muda' },
    draftOffer: 'Preparar oferta',
    accepted: 'El inquilino aceptó',
    leaving: 'Se muda',
    renewEmpty: 'Ningún contrato vence en los próximos 120 días.',
    ap: {
      requestTitle: 'Reparación ({level}) en {unit}',
      requestWhy: ['El inquilino escribió: “{text}”', 'Se leyó como {cat}: {why}', 'Proveedor registrado para esta categoría: {vendor}'],
      renterMsg: 'Hola {name}, gracias por reportarlo. {vendor} irá {window}. Por favor asegúrate de que alguien pueda abrirles, o responde aquí si podemos usar nuestra llave.{safety}',
      vendorMsg: 'Nuevo trabajo de {company}: “{text}” en {unit}. Prioridad: {level}. Ventana: {window}. Inquilino: {name}. Responde para confirmar.',
      lateTitle: 'Iniciar recargos para {n} inquilinos',
      lateWhy: [
        'La renta venció el día 1 y sigue abierta',
        'El contrato establece un recargo de {fee} diarios a partir del día 2',
        'Se aprueba una vez por inquilino. El recargo se detiene solo cuando se pagan renta y recargos',
      ],
      lateMsg: 'Hola {name}, la renta de este mes de {unit} sigue abierta. Como dice el contrato, el día 2 empezó un recargo de {fee} diarios, que se detiene al pagar la renta y los recargos. Responde aquí si pasó algo y lo platicamos.',
      renewTitle: 'Oferta de renovación para {unit}',
      renewWhy: ['El contrato vence en {n} días', 'Renta sugerida {rent}, 3% arriba de la actual, en línea con viviendas similares que administramos', 'El inquilino ha pagado a tiempo este año'],
      renewMsg: 'Hola {name}, tu contrato en {unit} vence en {n} días y nos encantaría que te quedaras. La renta del nuevo contrato a 12 meses sería de {rent} al mes. Responde sí y te enviamos la renovación para firma.',
    },
    log: {
      request: '{name} reportó una reparación en {unit}. Se leyó como {level}.',
      approvedRequest: 'Aprobado. Se notificó a {vendor} y a {name}.',
      skipped: 'Omitido: {title}.',
      done: 'Reparación en {unit} marcada como terminada.',
      lateStarted: 'Recargos aprobados para {n} inquilinos.',
      payment: '{name} pagó {amount}. Los recargos se detuvieron.',
      offerSent: 'Oferta de renovación enviada a {name}.',
      renewed: '{unit} renovado en {rent}.',
      leaving: '{name} se muda. {unit} pasa al calendario de publicación.',
      newDay: 'Nuevo día: {day}.',
    },
    toRenter: 'el inquilino',
    toVendor: 'el proveedor',
    perMonth: '{m} al mes',
  },
};
