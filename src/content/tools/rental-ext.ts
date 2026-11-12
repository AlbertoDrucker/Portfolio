import type { Localized } from '../../i18n/ui';

/** The deeper parts of the rental demo: three apps, owner payouts, bills, valuations and e-signed renewals. All fictional. */
export interface RentalExt {
  apps: { team: string; renter: string; owner: string };
  appsLabel: string;
  moreTabs: { bills: string; payouts: string; valuation: string };
  owners: Record<string, string>;
  ownerOf: string;
  // payouts
  payoutsTitle: string;
  payoutsLead: string;
  payoutRows: { collected: string; fee: string; repairs: string; reserve: string; payout: string };
  preparePayouts: string;
  payoutSent: string;
  payoutWaiting: string;
  payoutTitle: string;
  payoutWhy: string[];
  payoutMsg: string;
  payoutDone: string;
  payoutLocked: string;
  // owner limits
  overLimit: string;
  waitsOwner: string;
  openOwner: string;
  ownerApproved: string;
  // bills
  billsTitle: string;
  billsLead: string;
  billRead: string;
  billVendor: string;
  billAmount: string;
  billFor: string;
  billSplit: string;
  billMatch: string;
  recordPay: string;
  billPaid: string;
  billsEmpty: string;
  billLog: string;
  bills: { vendor: string; amount: number; units: string[]; job: string; match: string }[];
  // valuation
  valTitle: string;
  valLead: string;
  valHome: string;
  valComps: string;
  valCompRow: string;
  valDraft: string;
  valWalk: string;
  valWalkLead: string;
  valSale: string;
  valRent: string;
  valReasons: string;
  valBase: string;
  checks: { id: string; label: string; options: { label: string; effect: number }[] }[];
  // renter portal
  renterTitle: string;
  renterLead: string;
  renterHello: string;
  owes: string;
  yourShare: string;
  roommatePaid: string;
  feeIncluded: string;
  payShare: string;
  allPaid: string;
  renterRepair: string;
  renterRepairLead: string;
  renterRequests: string;
  renterNoRequests: string;
  offerTitle: string;
  offerNone: string;
  offerText: string;
  leaseSections: string[];
  readLease: string;
  typeName: string;
  agree: string;
  sign: string;
  signed: string;
  signedLog: string;
  // owner portal
  ownerPortalTitle: string;
  ownerHello: string;
  statement: string;
  ownerHomes: string;
  ownerRepairs: string;
  ownerNoRepairs: string;
  approveRepair: string;
  repairCost: string;
  ownerReserve: string;
  seedOutlet: string;
}

export const rentalExt: Localized<RentalExt> = {
  en: {
    apps: { team: 'Team workspace', renter: 'Renter portal', owner: 'Owner portal' },
    appsLabel: 'Switch app',
    moreTabs: { bills: 'Bills inbox', payouts: 'Owner payouts', valuation: 'Valuation' },
    owners: { okafor: 'Linda Okafor', hollis: 'Hollis Family Trust' },
    ownerOf: 'Owner: {owner}',
    payoutsTitle: 'Owner payouts',
    payoutsLead: 'Around the 10th, the platform adds up what came in for each owner and takes out the management fee, repairs and the reserve. Then it waits. Money never moves on its own.',
    payoutRows: { collected: 'Rent collected', fee: 'Management fee, 8%', repairs: 'Repairs', reserve: 'Reserve kept', payout: 'Payout' },
    preparePayouts: 'Prepare this month’s payouts',
    payoutSent: 'Paid',
    payoutWaiting: 'Waiting for approval in Today',
    payoutTitle: 'Pay {owner}: {amount}',
    payoutWhy: ['Rent collected for {n} homes', 'Management fee, repairs and a {reserve} reserve already taken out', 'The owner gets the statement below in plain English'],
    payoutMsg: 'Hi {first}, your {month} statement is ready. {sentence} The transfer goes out today.',
    payoutDone: 'Paid {amount} to {owner}.',
    payoutLocked: 'Payouts open on the 10th. Use “Jump to tomorrow” to get there.',
    overLimit: 'Estimated at {cost}, over {owner}’s repair limit of {limit}',
    waitsOwner: 'Waiting for the owner’s OK in the owner portal',
    openOwner: 'Open the owner portal',
    ownerApproved: '{owner} approved the repair at {unit}.',
    billsTitle: 'Bills inbox',
    billsLead: 'Vendors email their invoices to one address. The system reads each one, matches it to the job and the home, and splits shared bills across properties. A person checks and pays.',
    billRead: 'How the system read it',
    billVendor: 'Vendor',
    billAmount: 'Amount',
    billFor: 'Charged to',
    billSplit: '{amount} each',
    billMatch: 'Matched to',
    recordPay: 'Record and pay',
    billPaid: 'Paid',
    billsEmpty: 'No bills waiting.',
    billLog: 'Paid {vendor}: {amount}, charged to {n} homes.',
    bills: [
      { vendor: 'Greenway Lawn Care', amount: 480, units: ['u1', 'u3', 'u7', 'u10'], job: 'October lawn service', match: 'Recurring maintenance schedule, 4 homes' },
      { vendor: 'Keystone Locksmith', amount: 95, units: ['u9'], job: 'Rekey after move out', match: 'Move out checklist for 730 Willow Rd, No. 7' },
    ],
    valTitle: 'Valuation',
    valLead: 'The address alone gives a draft from recent nearby sales. After walking the home, the checklist refines it, and every change shows its reason.',
    valHome: 'Home',
    valComps: 'Recent sales nearby',
    valCompRow: '{addr}: {price}, {sqft} sq ft',
    valDraft: 'Draft from the address',
    valWalk: 'Walkthrough',
    valWalkLead: 'What you see in person. Each answer shows its suggested effect.',
    valSale: 'Estimated sale value',
    valRent: 'Estimated monthly rent',
    valReasons: 'Why the number moved',
    valBase: 'Median price per sq ft of the nearby sales, times {sqft} sq ft',
    checks: [
      { id: 'roof', label: 'Roof', options: [{ label: 'Under 5 years', effect: 0.02 }, { label: 'Fine', effect: 0 }, { label: 'Needs replacing soon', effect: -0.04 }] },
      { id: 'furnace', label: 'Furnace', options: [{ label: 'New', effect: 0.01 }, { label: 'Fine', effect: 0 }, { label: 'Over 15 years', effect: -0.02 }] },
      { id: 'kitchen', label: 'Kitchen', options: [{ label: 'Updated', effect: 0.05 }, { label: 'Original but clean', effect: 0 }, { label: 'Dated', effect: -0.03 }] },
      { id: 'condition', label: 'Overall condition', options: [{ label: 'Move in ready', effect: 0.03 }, { label: 'Average', effect: 0 }, { label: 'Needs work', effect: -0.08 }] },
      { id: 'walk', label: 'Walk to campus', options: [{ label: 'Under 10 minutes', effect: 0.04 }, { label: '10 to 20 minutes', effect: 0 }, { label: 'Needs a car or bus', effect: -0.03 }] },
    ],
    renterTitle: 'Renter portal',
    renterLead: 'Renters sign in with a code sent by text, no password. This is what Priya sees.',
    renterHello: 'Hi Priya. 87 Orchard Ave, shared with Nadia.',
    owes: 'What you owe now',
    yourShare: 'Your half of {rent}',
    roommatePaid: 'Nadia already paid her half.',
    feeIncluded: 'Includes {fee} in late fees, as your lease says.',
    payShare: 'Pay my share online',
    allPaid: 'You’re all paid up. Thanks.',
    renterRepair: 'Report a repair',
    renterRepairLead: 'Write it the way you’d text it. Photos are welcome in the real version.',
    renterRequests: 'Your requests',
    renterNoRequests: 'No requests yet.',
    offerTitle: 'Your renewal offer',
    offerNone: 'No offer yet. In the team workspace, open Renewals, draft an offer for 87 Orchard Ave and approve it. It appears here.',
    offerText: 'Stay another 12 months at {rent} a month, starting when your current lease ends. Same roommates, same guarantor.',
    leaseSections: ['1. Parties and premises', '5. Rent and how to pay it', '6. Late fees', '12. Repairs and access', '35. Electronic signature'],
    readLease: 'Read the full lease',
    typeName: 'Type your full name to sign',
    agree: 'I agree to sign this lease electronically',
    sign: 'Sign the renewal',
    signed: 'Signed. The team countersigns next, and the home comes off the website.',
    signedLog: '{name} signed the renewal for {unit} at {rent}.',
    ownerPortalTitle: 'Owner portal',
    ownerHello: 'Linda Okafor, 5 homes managed',
    statement: 'In {month}, {collected} came in from rent. We took the 8% management fee ({fee}), paid {repairs} in repairs and kept {reserve} in your reserve. You get {payout} around the 10th.',
    ownerHomes: 'Your homes',
    ownerRepairs: 'Repairs at your homes',
    ownerNoRepairs: 'No repairs right now.',
    approveRepair: 'Approve this repair',
    repairCost: 'Estimated cost {cost}',
    ownerReserve: 'Repairs above {limit} wait for your OK. Smaller ones and emergencies are handled right away and show up on your statement.',
    seedOutlet: 'The outlets in the bedroom stopped working',
  },
  es: {
    apps: { team: 'Espacio del equipo', renter: 'Portal de inquilinos', owner: 'Portal de propietarios' },
    appsLabel: 'Cambiar de app',
    moreTabs: { bills: 'Facturas', payouts: 'Pagos a propietarios', valuation: 'Valuación' },
    owners: { okafor: 'Linda Okafor', hollis: 'Fideicomiso Familia Hollis' },
    ownerOf: 'Propietario: {owner}',
    payoutsTitle: 'Pagos a propietarios',
    payoutsLead: 'Alrededor del día 10, la plataforma suma lo que entró para cada propietario y descuenta la comisión, las reparaciones y el fondo de reserva. Luego espera. El dinero nunca se mueve solo.',
    payoutRows: { collected: 'Renta cobrada', fee: 'Comisión de administración, 8%', repairs: 'Reparaciones', reserve: 'Reserva retenida', payout: 'Pago' },
    preparePayouts: 'Preparar los pagos del mes',
    payoutSent: 'Pagado',
    payoutWaiting: 'Esperando aprobación en Hoy',
    payoutTitle: 'Pagar a {owner}: {amount}',
    payoutWhy: ['Renta cobrada de {n} casas', 'Ya se descontaron la comisión, las reparaciones y una reserva de {reserve}', 'El propietario recibe el estado de cuenta de abajo en lenguaje claro'],
    payoutMsg: 'Hola {first}, tu estado de cuenta de {month} está listo. {sentence} La transferencia sale hoy.',
    payoutDone: 'Se pagaron {amount} a {owner}.',
    payoutLocked: 'Los pagos se abren el día 10. Usa “Pasar al día siguiente” para llegar.',
    overLimit: 'Estimada en {cost}, arriba del límite de reparación de {owner} de {limit}',
    waitsOwner: 'Esperando el visto bueno del propietario en su portal',
    openOwner: 'Abrir el portal de propietarios',
    ownerApproved: '{owner} aprobó la reparación en {unit}.',
    billsTitle: 'Bandeja de facturas',
    billsLead: 'Los proveedores mandan sus facturas a un solo correo. El sistema lee cada una, la relaciona con el trabajo y la casa, y reparte las facturas compartidas entre propiedades. Una persona revisa y paga.',
    billRead: 'Cómo la leyó el sistema',
    billVendor: 'Proveedor',
    billAmount: 'Monto',
    billFor: 'Se carga a',
    billSplit: '{amount} cada una',
    billMatch: 'Relacionada con',
    recordPay: 'Registrar y pagar',
    billPaid: 'Pagada',
    billsEmpty: 'No hay facturas pendientes.',
    billLog: 'Se pagó a {vendor}: {amount}, cargado a {n} casas.',
    bills: [
      { vendor: 'Greenway Lawn Care', amount: 480, units: ['u1', 'u3', 'u7', 'u10'], job: 'Jardinería de octubre', match: 'Calendario de mantenimiento recurrente, 4 casas' },
      { vendor: 'Keystone Locksmith', amount: 95, units: ['u9'], job: 'Cambio de chapa por salida', match: 'Lista de salida de 730 Willow Rd, No. 7' },
    ],
    valTitle: 'Valuación',
    valLead: 'Con solo la dirección sale un borrador basado en ventas recientes cercanas. Después de recorrer la casa, la lista de revisión lo afina, y cada cambio muestra su razón.',
    valHome: 'Casa',
    valComps: 'Ventas recientes cercanas',
    valCompRow: '{addr}: {price}, {sqft} pies cuadrados',
    valDraft: 'Borrador con la dirección',
    valWalk: 'Recorrido',
    valWalkLead: 'Lo que ves en persona. Cada respuesta muestra su efecto sugerido.',
    valSale: 'Valor de venta estimado',
    valRent: 'Renta mensual estimada',
    valReasons: 'Por qué se movió el número',
    valBase: 'Precio mediano por pie cuadrado de las ventas cercanas, por {sqft} pies cuadrados',
    checks: [
      { id: 'roof', label: 'Techo', options: [{ label: 'Menos de 5 años', effect: 0.02 }, { label: 'Bien', effect: 0 }, { label: 'Hay que cambiarlo pronto', effect: -0.04 }] },
      { id: 'furnace', label: 'Calefacción', options: [{ label: 'Nueva', effect: 0.01 }, { label: 'Bien', effect: 0 }, { label: 'Más de 15 años', effect: -0.02 }] },
      { id: 'kitchen', label: 'Cocina', options: [{ label: 'Renovada', effect: 0.05 }, { label: 'Original pero limpia', effect: 0 }, { label: 'Anticuada', effect: -0.03 }] },
      { id: 'condition', label: 'Estado general', options: [{ label: 'Lista para habitar', effect: 0.03 }, { label: 'Promedio', effect: 0 }, { label: 'Necesita trabajo', effect: -0.08 }] },
      { id: 'walk', label: 'Caminando al campus', options: [{ label: 'Menos de 10 minutos', effect: 0.04 }, { label: '10 a 20 minutos', effect: 0 }, { label: 'Necesita auto o camión', effect: -0.03 }] },
    ],
    renterTitle: 'Portal de inquilinos',
    renterLead: 'Los inquilinos entran con un código por mensaje, sin contraseña. Esto es lo que ve Priya.',
    renterHello: 'Hola Priya. 87 Orchard Ave, compartida con Nadia.',
    owes: 'Lo que debes ahora',
    yourShare: 'Tu mitad de {rent}',
    roommatePaid: 'Nadia ya pagó su mitad.',
    feeIncluded: 'Incluye {fee} de recargos, como dice tu contrato.',
    payShare: 'Pagar mi parte en línea',
    allPaid: 'Estás al corriente. Gracias.',
    renterRepair: 'Reportar una reparación',
    renterRepairLead: 'Escríbelo como lo mandarías por mensaje. En la versión real también puedes mandar fotos.',
    renterRequests: 'Tus solicitudes',
    renterNoRequests: 'Todavía no hay solicitudes.',
    offerTitle: 'Tu oferta de renovación',
    offerNone: 'Todavía no hay oferta. En el espacio del equipo, abre Renovaciones, prepara una oferta para 87 Orchard Ave y apruébala. Aparece aquí.',
    offerText: 'Quédate otros 12 meses a {rent} al mes, a partir de que termine tu contrato actual. Mismas roomies, mismo aval.',
    leaseSections: ['1. Partes e inmueble', '5. Renta y forma de pago', '6. Recargos', '12. Reparaciones y acceso', '35. Firma electrónica'],
    readLease: 'Leer el contrato completo',
    typeName: 'Escribe tu nombre completo para firmar',
    agree: 'Acepto firmar este contrato electrónicamente',
    sign: 'Firmar la renovación',
    signed: 'Firmado. El equipo firma después, y la casa sale del sitio web.',
    signedLog: '{name} firmó la renovación de {unit} a {rent}.',
    ownerPortalTitle: 'Portal de propietarios',
    ownerHello: 'Linda Okafor, 5 casas administradas',
    statement: 'En {month} entraron {collected} de renta. Tomamos la comisión de administración de 8% ({fee}), pagamos {repairs} en reparaciones y guardamos {reserve} en tu reserva. Recibes {payout} alrededor del día 10.',
    ownerHomes: 'Tus casas',
    ownerRepairs: 'Reparaciones en tus casas',
    ownerNoRepairs: 'No hay reparaciones por ahora.',
    approveRepair: 'Aprobar esta reparación',
    repairCost: 'Costo estimado {cost}',
    ownerReserve: 'Las reparaciones de más de {limit} esperan tu visto bueno. Las menores y las emergencias se atienden de inmediato y aparecen en tu estado de cuenta.',
    seedOutlet: 'Los contactos de la recámara dejaron de funcionar',
  },
};
