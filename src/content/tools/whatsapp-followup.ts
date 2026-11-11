import type { Localized } from '../../i18n/ui';

type Situation = 'quote' | 'price' | 'lapsed' | 'lead';
interface Step {
  day: number;
  /** Message text by tone. Placeholders: {name}, {me}, {biz}, {offer}, {reason}. */
  formal: string;
  casual: string;
  why: string;
}

export const whatsappFollowup: Localized<{
  situation: string;
  situations: Record<Situation, string>;
  me: string;
  biz: string;
  name: string;
  offer: string;
  offerHint: string;
  reason: string;
  reasonHint: string;
  tone: string;
  tones: { formal: string; casual: string };
  sequenceTitle: string;
  rulesTitle: string;
  rules: string[];
  defaults: { me: string; biz: string; name: string; offer: string; reason: string };
  dyn: {
    day: string;
    today: string;
    copy: string;
    copied: string;
    open: string;
    whyLabel: string;
    noReason: string;
    fallback: { name: string; offer: string; me: string; biz: string };
    steps: Record<Situation, Step[]>;
  };
}> = {
  en: {
    situation: 'The situation',
    situations: {
      quote: 'I sent a quote and got no reply',
      price: 'They asked for a price and went quiet',
      lapsed: 'A customer who has not bought in months',
      lead: 'A new contact who showed interest',
    },
    me: 'Your name',
    biz: 'Your business',
    name: 'Customer’s first name',
    offer: 'What you offered',
    offerHint: 'A few words, as you would say it: “the kitchen remodel”, “the monthly cleaning plan”.',
    reason: 'A reason to decide now (optional)',
    reasonHint: 'Something true: a date, limited stock, a spot in your schedule.',
    tone: 'Tone',
    tones: { formal: 'Formal', casual: 'Casual' },
    sequenceTitle: 'Your follow up sequence',
    rulesTitle: 'Three rules behind every message',
    rules: [
      'One message, one question. Make it easy to answer with a single word.',
      'Add something each time. A message that only says “just checking in” gives no reason to reply.',
      'Stop at three. The last message closes the door politely and leaves it unlocked.',
    ],
    defaults: { me: 'Ana', biz: 'Cocinas Roble', name: 'Luis', offer: 'the kitchen remodel', reason: 'we have one installation slot left this month' },
    dyn: {
      day: 'Day {n}',
      today: 'Today',
      copy: 'Copy',
      copied: 'Copied',
      open: 'Open in WhatsApp',
      whyLabel: 'Why it is written this way',
      noReason: 'I can hold these terms until Friday',
      fallback: { name: 'there', offer: 'what we talked about', me: 'me', biz: 'our team' },
      steps: {
        quote: [
          {
            day: 1,
            formal: 'Hello {name}, this is {me} from {biz}. I wanted to confirm that the quote for {offer} reached you. Is there anything you would like me to clarify?',
            casual: 'Hi {name}, {me} from {biz} here. Just making sure the quote for {offer} got to you. Any questions I can clear up?',
            why: 'It asks something easy to answer and assumes good faith. Most silence is a busy week, not a no.',
          },
          {
            day: 3,
            formal: 'Hello {name}. Many customers ask us whether the price can be adjusted to their budget. If that is the case for {offer}, I can prepare a second option. Would that help?',
            casual: 'Hi {name}. A lot of people ask if we can fit the price to their budget. If that is the case with {offer}, I can put together a second option. Want me to?',
            why: 'It names the most likely objection so the customer doesn’t have to. Offering a second option keeps the conversation alive without discounting first.',
          },
          {
            day: 7,
            formal: 'Hello {name}. I don’t want to take more of your time. {reason}, so I wanted to let you know before closing the quote for {offer}. Shall I keep it open or leave it for later?',
            casual: 'Hi {name}, last note from me. {reason}, so I wanted to tell you before I close the quote for {offer}. Should I keep it open or leave it for later?',
            why: 'A real reason to decide, plus an easy way to say “later”. People reply to a clear closing far more than to another reminder.',
          },
        ],
        price: [
          {
            day: 1,
            formal: 'Hello {name}, this is {me} from {biz}. Thank you for asking about {offer}. So I can give you the right recommendation, what matters most to you: price, timing or quality?',
            casual: 'Hi {name}, {me} from {biz}. Thanks for asking about {offer}. To point you to the right option, what matters most to you: price, timing or quality?',
            why: 'Someone who asked for a price and left usually compared and got confused. A simple question brings them back and tells you how to sell.',
          },
          {
            day: 3,
            formal: 'Hello {name}. I am sharing a short example of {offer} we did recently for a customer with a similar need. Would you like me to explain what is included?',
            casual: 'Hi {name}. Here is a quick example of {offer} we did recently for someone with a similar need. Want me to walk you through what is included?',
            why: 'Proof moves the conversation from price to value. Attach one photo or one result before sending this.',
          },
          {
            day: 7,
            formal: 'Hello {name}. {reason}. If {offer} is still of interest, I am happy to help. If not, there is no problem, and thank you for considering us.',
            casual: 'Hi {name}. {reason}. If you are still interested in {offer}, happy to help. If not, no problem at all, and thanks for thinking of us.',
            why: 'It ends on a kind note. Customers who weren’t ready often come back months later to the business that didn’t pressure them.',
          },
        ],
        lapsed: [
          {
            day: 1,
            formal: 'Hello {name}, this is {me} from {biz}. It has been a while since we last worked together and I wanted to ask how everything turned out with your last purchase.',
            casual: 'Hi {name}, {me} from {biz}. It has been a while! How did everything turn out with your last purchase?',
            why: 'It opens by asking about them, not by selling. A past customer answers a real question far more than a promotion.',
          },
          {
            day: 4,
            formal: 'Hello {name}. Since your last visit we now offer {offer}. I thought of you because it fits what you bought before. Would you like the details?',
            casual: 'Hi {name}. Since last time we started offering {offer}. Thought of you because it goes well with what you got before. Want the details?',
            why: 'It gives a specific reason for writing to this person. “I thought of you because” only works when the because is true.',
          },
          {
            day: 10,
            formal: 'Hello {name}. {reason}. If you would like to take advantage of it for {offer}, just reply to this message and I will take care of the rest.',
            casual: 'Hi {name}. {reason}. If you want in on {offer}, just reply here and I will take care of the rest.',
            why: 'The action is one reply. The fewer steps to come back, the more past customers do.',
          },
        ],
        lead: [
          {
            day: 1,
            formal: 'Hello {name}, this is {me} from {biz}. Thank you for your interest in {offer}. May I ask what you are looking to solve, so I can send you only what is useful?',
            casual: 'Hi {name}, {me} from {biz}. Thanks for your interest in {offer}! What are you looking to solve? That way I only send you what is useful.',
            why: 'A reply within the first hour matters more than a perfect message. The question shows you will listen before you sell.',
          },
          {
            day: 2,
            formal: 'Hello {name}. Here is how {offer} works in three steps, and what it usually costs. Would a ten minute call this week be convenient to answer your questions?',
            casual: 'Hi {name}. Here is how {offer} works in three steps and what it usually costs. Up for a ten minute call this week to answer questions?',
            why: 'It gives the information people are afraid to ask for and proposes one small next step with a time limit.',
          },
          {
            day: 6,
            formal: 'Hello {name}. {reason}. If this is not the right moment for {offer}, I understand. Shall I write to you again next month?',
            casual: 'Hi {name}. {reason}. If now is not the right time for {offer}, totally fine. Want me to check back next month?',
            why: 'Asking permission to write later turns a silent lead into a scheduled one. Many say yes.',
          },
        ],
      },
    },
  },
  es: {
    situation: 'La situación',
    situations: {
      quote: 'Mandé una cotización y no me contestaron',
      price: 'Preguntaron el precio y ya no respondieron',
      lapsed: 'Un cliente que lleva meses sin comprar',
      lead: 'Un contacto nuevo que mostró interés',
    },
    me: 'Tu nombre',
    biz: 'Tu negocio',
    name: 'Nombre del cliente',
    offer: 'Lo que ofreciste',
    offerHint: 'En pocas palabras, como lo dirías: “la remodelación de la cocina”, “el plan mensual de limpieza”.',
    reason: 'Una razón para decidir ahora (opcional)',
    reasonHint: 'Algo cierto: una fecha, inventario limitado, un espacio en tu agenda.',
    tone: 'Tono',
    tones: { formal: 'De usted', casual: 'De tú' },
    sequenceTitle: 'Tu secuencia de seguimiento',
    rulesTitle: 'Tres reglas detrás de cada mensaje',
    rules: [
      'Un mensaje, una pregunta. Que se pueda contestar con una sola palabra.',
      'Aporta algo cada vez. Un mensaje que solo dice “nada más para dar seguimiento” no da razón para contestar.',
      'Detente en tres. El último mensaje cierra la puerta con amabilidad y la deja sin llave.',
    ],
    defaults: { me: 'Ana', biz: 'Cocinas Roble', name: 'Luis', offer: 'la remodelación de la cocina', reason: 'nos queda un espacio de instalación este mes' },
    dyn: {
      day: 'Día {n}',
      today: 'Hoy',
      copy: 'Copiar',
      copied: 'Copiado',
      open: 'Abrir en WhatsApp',
      whyLabel: 'Por qué está escrito así',
      noReason: 'puedo sostener estas condiciones hasta el viernes',
      fallback: { name: '', offer: 'lo que platicamos', me: 'yo', biz: 'nuestro equipo' },
      steps: {
        quote: [
          {
            day: 1,
            formal: 'Hola {name}, le escribe {me} de {biz}. Quería confirmar que le llegó la cotización de {offer}. ¿Hay algo que le gustaría que le aclare?',
            casual: 'Hola {name}, soy {me} de {biz}. Solo quería confirmar que te llegó la cotización de {offer}. ¿Tienes alguna duda que te pueda aclarar?',
            why: 'Pregunta algo fácil de contestar y asume buena fe. Casi siempre el silencio es una semana ocupada, no un no.',
          },
          {
            day: 3,
            formal: 'Hola {name}. Muchos clientes nos preguntan si el precio se puede ajustar a su presupuesto. Si es el caso con {offer}, le puedo preparar una segunda opción. ¿Le serviría?',
            casual: 'Hola {name}. Mucha gente nos pregunta si podemos ajustar el precio a su presupuesto. Si es el caso con {offer}, te armo una segunda opción. ¿Te sirve?',
            why: 'Nombra la objeción más probable para que el cliente no tenga que hacerlo. Ofrecer una segunda opción mantiene viva la conversación sin empezar con descuento.',
          },
          {
            day: 7,
            formal: 'Hola {name}. No quiero quitarle más tiempo. Le aviso que {reason}, antes de cerrar la cotización de {offer}. ¿La dejo abierta o la retomamos más adelante?',
            casual: 'Hola {name}, último mensaje de mi parte. Te aviso que {reason}, antes de cerrar la cotización de {offer}. ¿La dejo abierta o la vemos más adelante?',
            why: 'Una razón real para decidir, y una salida fácil para decir “después”. La gente contesta mucho más a un cierre claro que a otro recordatorio.',
          },
        ],
        price: [
          {
            day: 1,
            formal: 'Hola {name}, le escribe {me} de {biz}. Gracias por preguntar por {offer}. Para recomendarle la mejor opción, ¿qué es lo más importante para usted: precio, tiempo o calidad?',
            casual: 'Hola {name}, soy {me} de {biz}. Gracias por preguntar por {offer}. Para recomendarte la mejor opción, ¿qué es lo más importante para ti: precio, tiempo o calidad?',
            why: 'Quien pregunta el precio y desaparece casi siempre comparó y se confundió. Una pregunta sencilla lo trae de vuelta y te dice cómo venderle.',
          },
          {
            day: 3,
            formal: 'Hola {name}. Le comparto un ejemplo de {offer} que hicimos hace poco para un cliente con una necesidad parecida. ¿Le gustaría que le explique qué incluye?',
            casual: 'Hola {name}. Te comparto un ejemplo de {offer} que hicimos hace poco para alguien con una necesidad parecida. ¿Te explico qué incluye?',
            why: 'La prueba mueve la conversación del precio al valor. Adjunta una foto o un resultado antes de mandar este mensaje.',
          },
          {
            day: 7,
            formal: 'Hola {name}. Le aviso que {reason}. Si {offer} le sigue interesando, con gusto le ayudo. Si no, no hay problema, y gracias por considerarnos.',
            casual: 'Hola {name}. Te aviso que {reason}. Si te sigue interesando {offer}, con gusto te ayudo. Si no, no pasa nada, y gracias por considerarnos.',
            why: 'Termina con amabilidad. Los clientes que no estaban listos suelen volver meses después con el negocio que no los presionó.',
          },
        ],
        lapsed: [
          {
            day: 1,
            formal: 'Hola {name}, le escribe {me} de {biz}. Hace tiempo que no trabajamos juntos y quería preguntarle cómo le resultó su última compra.',
            casual: 'Hola {name}, soy {me} de {biz}. ¡Ya tiene rato! ¿Cómo te resultó tu última compra?',
            why: 'Abre preguntando por el cliente, no vendiendo. Un cliente anterior contesta mucho más a una pregunta real que a una promoción.',
          },
          {
            day: 4,
            formal: 'Hola {name}. Desde su última visita ya ofrecemos {offer}. Pensé en usted porque va muy bien con lo que compró antes. ¿Le mando los detalles?',
            casual: 'Hola {name}. Desde la última vez ya ofrecemos {offer}. Me acordé de ti porque va muy bien con lo que compraste antes. ¿Te mando los detalles?',
            why: 'Da una razón específica para escribirle a esta persona. “Me acordé de ti porque” solo funciona cuando el porque es cierto.',
          },
          {
            day: 10,
            formal: 'Hola {name}. Le aviso que {reason}. Si le interesa aprovecharlo con {offer}, solo responda este mensaje y yo me encargo de lo demás.',
            casual: 'Hola {name}. Te aviso que {reason}. Si quieres aprovecharlo con {offer}, solo contéstame aquí y yo me encargo de lo demás.',
            why: 'La acción es una sola respuesta. Entre menos pasos para volver, más clientes anteriores lo hacen.',
          },
        ],
        lead: [
          {
            day: 1,
            formal: 'Hola {name}, le escribe {me} de {biz}. Gracias por su interés en {offer}. ¿Me permite preguntarle qué busca resolver, para enviarle solo lo que le sea útil?',
            casual: 'Hola {name}, soy {me} de {biz}. ¡Gracias por tu interés en {offer}! ¿Qué buscas resolver? Así te mando solo lo que te sirva.',
            why: 'Contestar en la primera hora importa más que un mensaje perfecto. La pregunta muestra que vas a escuchar antes de vender.',
          },
          {
            day: 2,
            formal: 'Hola {name}. Le comparto cómo funciona {offer} en tres pasos y cuánto suele costar. ¿Le vendría bien una llamada de diez minutos esta semana para resolver sus dudas?',
            casual: 'Hola {name}. Te comparto cómo funciona {offer} en tres pasos y cuánto suele costar. ¿Te late una llamada de diez minutos esta semana para resolver dudas?',
            why: 'Da la información que la gente no se anima a pedir y propone un siguiente paso pequeño y con límite de tiempo.',
          },
          {
            day: 6,
            formal: 'Hola {name}. Le aviso que {reason}. Si no es buen momento para {offer}, lo entiendo. ¿Le escribo de nuevo el próximo mes?',
            casual: 'Hola {name}. Te aviso que {reason}. Si ahorita no es buen momento para {offer}, no hay problema. ¿Te escribo el próximo mes?',
            why: 'Pedir permiso para escribir después convierte un contacto callado en uno agendado. Muchos dicen que sí.',
          },
        ],
      },
    },
  },
};
