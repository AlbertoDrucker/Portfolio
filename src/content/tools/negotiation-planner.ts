import type { Localized } from '../../i18n/ui';

export const negotiationPlanner: Localized<{
  role: string;
  selling: string;
  buying: string;
  currency: string;
  yourWalk: string;
  yourWalkHintSell: string;
  yourTarget: string;
  theirWalk: string;
  theirWalkHint: string;
  batna: string;
  batnaPlaceholder: string;
  steps: string;
  zone: string;
  opening: string;
  room: string;
  mapTitle: string;
  planTitle: string;
  sheetTitle: string;
  print: string;
  dyn: {
    yourWalk: string;
    theirWalk: string;
    target: string;
    open: string;
    zopa: string;
    noZone: string;
    noZoneVerdict: string;
    targetOutside: string;
    healthy: string;
    move: string;
    finalMove: string;
    noBatna: string;
    batnaEcho: string;
    roomValue: string;
    range: string;
    mapAria: string;
  };
}> = {
  en: {
    role: 'I am',
    selling: 'Selling',
    buying: 'Buying',
    currency: 'Currency',
    yourWalk: 'Your walk away price',
    yourWalkHintSell: 'The worst deal you would still accept. Anything beyond it, you leave.',
    yourTarget: 'Your target',
    theirWalk: 'Their likely walk away price',
    theirWalkHint: 'Your best estimate of their limit. Research beats guessing.',
    batna: 'Your best alternative if there is no deal',
    batnaPlaceholder: 'Example: accept the other offer at a lower price but better terms.',
    steps: 'Concessions you plan to make',
    zone: 'Deal zone',
    opening: 'Suggested opening',
    room: 'Room to negotiate',
    mapTitle: 'The map',
    planTitle: 'Concession plan',
    sheetTitle: 'Your prep notes',
    print: 'Print prep sheet',
    dyn: {
      yourWalk: 'Your limit',
      theirWalk: 'Their limit',
      target: 'Target',
      open: 'Open',
      zopa: 'Deal zone',
      noZone: 'No deal zone',
      noZoneVerdict: 'There is no overlap between your limit and theirs. Either change the deal, add value they care about, or be ready to use your alternative.',
      targetOutside: 'Your target sits beyond their likely limit. Expect pushback and prepare the value story that justifies it.',
      healthy: 'A deal zone exists and your target sits inside it. Open ambitiously, concede slowly and let the shrinking steps signal you are near your limit.',
      move: 'Move {n}: to {value}',
      finalMove: 'Final move: {value}, then hold',
      noBatna: 'Write down your alternative. Without it, your walk away price is a guess, and the other side can feel it.',
      batnaEcho: 'If there is no deal: {batna}',
      roomValue: '{value} between both limits',
      range: '{lo} to {hi}',
      mapAria: 'Number line with both walk away prices, the deal zone, your target and your opening.',
    },
  },
  es: {
    role: 'Estoy',
    selling: 'Vendiendo',
    buying: 'Comprando',
    currency: 'Moneda',
    yourWalk: 'Tu precio de retiro',
    yourWalkHintSell: 'El peor trato que todavía aceptarías. Más allá de eso, te levantas.',
    yourTarget: 'Tu meta',
    theirWalk: 'El precio de retiro probable de la otra parte',
    theirWalkHint: 'Tu mejor estimación de su límite. Investigar le gana a adivinar.',
    batna: 'Tu mejor alternativa si no hay trato',
    batnaPlaceholder: 'Ejemplo: aceptar la otra oferta a menor precio pero con mejores condiciones.',
    steps: 'Concesiones que planeas hacer',
    zone: 'Zona de acuerdo',
    opening: 'Apertura sugerida',
    room: 'Margen para negociar',
    mapTitle: 'El mapa',
    planTitle: 'Plan de concesiones',
    sheetTitle: 'Tus notas de preparación',
    print: 'Imprimir hoja de preparación',
    dyn: {
      yourWalk: 'Tu límite',
      theirWalk: 'Su límite',
      target: 'Meta',
      open: 'Apertura',
      zopa: 'Zona de acuerdo',
      noZone: 'Sin zona de acuerdo',
      noZoneVerdict: 'No hay traslape entre tu límite y el suyo. Cambia el trato, agrega valor que les importe o prepárate para usar tu alternativa.',
      targetOutside: 'Tu meta está más allá de su límite probable. Espera resistencia y prepara la historia de valor que la justifique.',
      healthy: 'Existe una zona de acuerdo y tu meta está dentro de ella. Abre con ambición, concede despacio y deja que los pasos cada vez más chicos comuniquen que estás cerca de tu límite.',
      move: 'Movimiento {n}: a {value}',
      finalMove: 'Último movimiento: {value}, y sostenerlo',
      noBatna: 'Escribe tu alternativa. Sin ella, tu precio de retiro es una suposición, y la otra parte lo nota.',
      batnaEcho: 'Si no hay trato: {batna}',
      roomValue: '{value} entre ambos límites',
      range: '{lo} a {hi}',
      mapAria: 'Línea numérica con ambos precios de retiro, la zona de acuerdo, tu meta y tu apertura.',
    },
  },
};
