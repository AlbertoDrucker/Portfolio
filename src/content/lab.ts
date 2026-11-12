import type { Localized } from '../i18n/ui';

export type LabCategory = 'systems' | 'strategy' | 'ai' | 'fun';
export type LabStatus = 'live' | 'beta';

export interface LabProjectCopy {
  title: string;
  summary: string;
  why: string[];
  next: string[];
}

export interface LabProject {
  slug: string;
  category: LabCategory;
  status: LabStatus;
  copy: Localized<LabProjectCopy>;
}

export const labPage: Localized<{
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  homeTitle: string;
  homeLead: string;
  homeLink: string;
  categories: Record<LabCategory, string>;
  status: Record<LabStatus, string>;
  open: string;
  whyTitle: string;
  nextTitle: string;
  back: string;
  disclaimer: string;
  ctaTitle: string;
  ctaText: string;
  ctaLink: string;
  bar: { share: string; copied: string; print: string; reset: string; note: string };
}> = {
  en: {
    metaTitle: 'Free strategy and business tools | Alberto Drucker',
    metaDescription: 'Free tools for pricing, sales funnels, market sizing, launches and AI adoption. Use your own numbers; everything runs in your browser.',
    title: 'Lab',
    lead: 'Working systems and tools I built for strategy, growth and applied AI, plus a few things I care about outside work. Everything runs in your browser, your data stays with you and every tool is free to use.',
    homeTitle: 'From the Lab',
    homeLead: 'Tools you can use right now. Some come from work, some from curiosity, all of them keep evolving.',
    homeLink: 'Open the Lab',
    categories: { systems: 'Systems I built', strategy: 'Strategy and growth', ai: 'Applied AI', fun: 'Just for fun' },
    status: { live: 'Live', beta: 'Beta' },
    open: 'Open the tool',
    whyTitle: 'Why I built it',
    nextTitle: 'What’s next',
    back: 'All Lab tools',
    disclaimer: 'Illustrative models built to support thinking, not to replace your own data.',
    ctaTitle: 'Want this built around your business?',
    ctaText: 'Every tool here started as a real question. I can adapt this one to your numbers, your process and your team, or build the one you need.',
    ctaLink: 'Let’s talk',
    bar: { share: 'Copy a link to this scenario', copied: 'Link copied. Anyone who opens it sees your numbers.', print: 'Print or save as PDF', reset: 'Reset', note: 'Your inputs are saved in this browser only.' },
  },
  es: {
    metaTitle: 'Herramientas gratis de estrategia y negocio | Alberto Drucker',
    metaDescription: 'Herramientas gratis de precios, embudo de ventas, tamaño de mercado, lanzamientos y adopción de IA. Usa tus propios números; todo corre en tu navegador.',
    title: 'Lab',
    lead: 'Sistemas y herramientas que construí para estrategia, crecimiento e IA aplicada, además de algunas cosas que me importan fuera del trabajo. Todo corre en tu navegador, tus datos se quedan contigo y todo es gratis.',
    homeTitle: 'Desde el Lab',
    homeLead: 'Herramientas que puedes usar ahora mismo. Algunas vienen del trabajo, otras de la curiosidad, y todas siguen evolucionando.',
    homeLink: 'Abrir el Lab',
    categories: { systems: 'Sistemas que construí', strategy: 'Estrategia y crecimiento', ai: 'IA aplicada', fun: 'Por gusto' },
    status: { live: 'Lista', beta: 'Beta' },
    open: 'Abrir herramienta',
    whyTitle: 'Por qué la construí',
    nextTitle: 'Lo que sigue',
    back: 'Todas las herramientas',
    disclaimer: 'Modelos ilustrativos para apoyar el pensamiento, no para sustituir tus propios datos.',
    ctaTitle: '¿Quieres esto hecho a la medida de tu negocio?',
    ctaText: 'Cada herramienta de este sitio empezó como una pregunta real. Puedo adaptar esta a tus números, tu proceso y tu equipo, o construir la que necesitas.',
    ctaLink: 'Platiquemos',
    bar: { share: 'Copiar enlace a este escenario', copied: 'Enlace copiado. Quien lo abra verá tus números.', print: 'Imprimir o guardar en PDF', reset: 'Reiniciar', note: 'Tus datos se guardan solo en este navegador.' },
  },
};

export const labProjects: LabProject[] = [
  {
    slug: 'rental-ops',
    category: 'systems',
    status: 'live',
    copy: {
      en: {
        title: 'Rental operations system',
        summary: 'A working demo of the operating system I built for a property management company: the system drafts, a person approves, and nothing falls through the cracks.',
        why: [
          'A small property management team was running dozens of homes on email, spreadsheets and memory. Repairs, late rent and renewals all depended on someone remembering to follow up.',
          'I mapped how they work and built a system around one rule: the software prepares everything and a person approves it. It reads a repair request, sets the priority, picks the vendor and drafts both messages. It starts late fees only after an approval and stops them on its own. The original connects a team workspace, a renter portal, an owner portal and a public site. This demo shows the core with fictional homes and people.',
        ],
        next: [
          'Showings with calendar sync and notices to current renters.',
          'Contracts with electronic signature that update each home’s status on their own.',
          'Owner statements and a valuation that traces every number to its source.',
        ],
      },
      es: {
        title: 'Sistema de operación de rentas',
        summary: 'Una demo funcional del sistema operativo que construí para una administradora de propiedades: el sistema prepara, una persona aprueba y nada se queda sin seguimiento.',
        why: [
          'Un equipo pequeño administraba decenas de viviendas con correos, hojas de cálculo y memoria. Reparaciones, rentas atrasadas y renovaciones dependían de que alguien se acordara de dar seguimiento.',
          'Mapeé cómo trabajan y construí un sistema alrededor de una regla: el software prepara todo y una persona lo aprueba. Lee una solicitud de reparación, define la prioridad, elige al proveedor y redacta los dos mensajes. Inicia recargos solo después de una aprobación y los detiene por sí solo. El original conecta un espacio para el equipo, un portal de inquilinos, un portal de propietarios y un sitio público. Esta demo muestra el núcleo con viviendas y personas ficticias.',
        ],
        next: [
          'Visitas con sincronización de calendario y avisos a los inquilinos actuales.',
          'Contratos con firma electrónica que actualizan solos el estado de cada vivienda.',
          'Estados de cuenta para propietarios y un avalúo que rastrea cada número a su fuente.',
        ],
      },
    },
  },
  {
    slug: 'networking-crm',
    category: 'systems',
    status: 'live',
    copy: {
      en: {
        title: 'Networking CRM',
        summary: 'A personal CRM you can use right now. Each week it answers one question: who should you follow up with, and what should you say?',
        why: [
          'Relationships fade because of forgotten follow ups, not bad intentions. I wanted one place that tells me who to contact this week and why, without the weight of a sales tool.',
          'The logic is simple and strict. A promise I made outranks everything. Then come things people offered me, then people I have not spoken with in too long for how close we are. The version I use every day also reads my notes and drafts messages with AI. This public version runs entirely in your browser, so your contacts never leave your device.',
        ],
        next: [
          'Import contacts from a LinkedIn export.',
          'Insights on which introductions turn into real opportunities.',
          'Reminders by email on Monday morning.',
        ],
      },
      es: {
        title: 'CRM de networking',
        summary: 'Un CRM personal que puedes usar ahora mismo. Cada semana responde una pregunta: ¿a quién debes dar seguimiento y qué le dices?',
        why: [
          'Las relaciones se enfrían por seguimientos olvidados, no por mala intención. Quería un solo lugar que me dijera a quién contactar esta semana y por qué, sin el peso de una herramienta de ventas.',
          'La lógica es simple y estricta. Una promesa que hice va antes que todo. Después vienen las cosas que otras personas me ofrecieron, y luego la gente con la que llevo demasiado tiempo sin hablar para lo cercanos que somos. La versión que uso todos los días también lee mis notas y redacta mensajes con IA. Esta versión pública corre por completo en tu navegador, así que tus contactos nunca salen de tu dispositivo.',
        ],
        next: [
          'Importar contactos desde una exportación de LinkedIn.',
          'Análisis de qué presentaciones se convierten en oportunidades reales.',
          'Recordatorios por correo los lunes en la mañana.',
        ],
      },
    },
  },
  {
    slug: 'ats-scorer',
    category: 'systems',
    status: 'live',
    copy: {
      en: {
        title: 'Resume match scorer',
        summary: 'Paste a job posting and a resume. See how the three main kinds of applicant tracking systems would likely read it, and the few changes that matter most.',
        why: [
          'Applying across Mexico and the US, I kept seeing the same thing: a strong resume ranked well with one employer and disappeared with another. The difference was rarely the experience. It was how each system reads words.',
          'So I studied how these systems work and built an engine around five levels of match: exact wording, a variant of the word, a synonym, the same idea in another language, or missing. Each kind of system gives those levels different credit. It also weighs where a term appears in the posting and where it shows up in the resume, and it flags the screen out questions that end an application before anyone reads it. The version I use also writes the tailored resume. This public version scores and explains, and runs entirely in your browser.',
        ],
        next: [
          'Upload a PDF or Word resume instead of pasting text.',
          'A side by side view that rewrites one bullet at a time.',
          'Save several postings and compare which one fits best.',
        ],
      },
      es: {
        title: 'Evaluador de CV contra vacante',
        summary: 'Pega una vacante y un CV. Mira cómo lo leerían los tres tipos principales de sistemas de reclutamiento, y los pocos cambios que más importan.',
        why: [
          'Aplicando en México y Estados Unidos vi lo mismo una y otra vez: un buen CV quedaba arriba con un empleador y desaparecía con otro. La diferencia casi nunca era la experiencia. Era cómo cada sistema lee las palabras.',
          'Así que estudié cómo funcionan estos sistemas y construí un motor con cinco niveles de coincidencia: la palabra exacta, una variante, un sinónimo, la misma idea en otro idioma, o nada. Cada tipo de sistema da un crédito distinto a esos niveles. También pesa dónde aparece cada término en la vacante y dónde aparece en el CV, y marca los filtros que terminan una aplicación antes de que alguien la lea. La versión que uso también escribe el CV a la medida. Esta versión pública evalúa y explica, y corre por completo en tu navegador.',
        ],
        next: [
          'Subir el CV en PDF o Word en lugar de pegar el texto.',
          'Una vista lado a lado que reescribe una viñeta a la vez.',
          'Guardar varias vacantes y comparar cuál te queda mejor.',
        ],
      },
    },
  },
  {
    slug: 'first-90-days',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'First 90 days plan',
        summary: 'Pick a role and the situation I would walk into, and see how I would spend my first 90 days.',
        why: [
          'The first question in any hiring conversation is some version of: what would you actually do here? This is my answer, adjusted to the role and to the state of the business.',
          'It follows one rule I trust: learn before changing anything, align on a few choices, then deliver one result people can see.',
        ],
        next: ['A version for commercial and general management roles.', 'A printable plan with the measures for each phase.'],
      },
      es: {
        title: 'Plan de los primeros 90 días',
        summary: 'Elige un puesto y la situación a la que llegaría, y mira cómo usaría mis primeros 90 días.',
        why: [
          'La primera pregunta en cualquier conversación de contratación es alguna versión de: ¿qué harías aquí en concreto? Esta es mi respuesta, ajustada al puesto y al estado del negocio.',
          'Sigue una regla en la que confío: aprender antes de cambiar algo, alinear unas cuantas decisiones y después entregar un resultado que la gente pueda ver.',
        ],
        next: ['Una versión para puestos comerciales y de dirección general.', 'Un plan imprimible con las métricas de cada fase.'],
      },
    },
  },
  {
    slug: 'launch-teardown',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Product launch, start to finish',
        summary: 'A fictional product taken from customer insight to positioning, pricing, launch plan and measures, with the call I would make at each step.',
        why: [
          'Product marketing is a chain of decisions, and each one limits the next. Showing one framework at a time hides that. This case shows the whole chain on one product.',
          'The product is invented so I can show the reasoning without borrowing anyone’s real numbers.',
        ],
        next: ['A second case for a consumer product sold through retail.', 'The sales battlecard and the launch email that would go with this plan.'],
      },
      es: {
        title: 'Lanzamiento de producto, de principio a fin',
        summary: 'Un producto ficticio llevado del insight del cliente al posicionamiento, el precio, el plan de lanzamiento y las métricas, con la decisión que tomaría en cada paso.',
        why: [
          'El product marketing es una cadena de decisiones, y cada una limita a la siguiente. Mostrar un marco a la vez esconde eso. Este caso muestra la cadena completa en un solo producto.',
          'El producto es inventado para poder mostrar el razonamiento sin usar los números reales de nadie.',
        ],
        next: ['Un segundo caso para un producto de consumo vendido en retail.', 'El battlecard de ventas y el correo de lanzamiento que acompañarían este plan.'],
      },
    },
  },
  {
    slug: 'plan-on-a-page',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Strategic plan on a page',
        summary: 'Write your ambition, three choices, their measures and what you will stop. Get one page you can print and a check on whether it is a real plan.',
        why: [
          'Most strategic plans are long because nobody chose. One page forces the choice: a clear ambition, three things you will do and the things you will stop.',
          'The checks are the questions I ask of any plan. Is there a number and a date? Does every choice have a measure? Is anything being given up?',
        ],
        next: ['Owners and dates for each choice.', 'A quarterly review view that tracks each measure.'],
      },
      es: {
        title: 'Plan estratégico en una página',
        summary: 'Escribe tu ambición, tres decisiones, sus métricas y lo que vas a dejar de hacer. Obtén una página para imprimir y una revisión de si es un plan de verdad.',
        why: [
          'La mayoría de los planes estratégicos son largos porque nadie eligió. Una página obliga a elegir: una ambición clara, tres cosas que vas a hacer y las que vas a dejar.',
          'Las revisiones son las preguntas que le hago a cualquier plan. ¿Hay un número y una fecha? ¿Cada decisión tiene una métrica? ¿Se está renunciando a algo?',
        ],
        next: ['Responsables y fechas para cada decisión.', 'Una vista de revisión trimestral que dé seguimiento a cada métrica.'],
      },
    },
  },
  {
    slug: 'innovation-portfolio',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Innovation portfolio board',
        summary: 'List your initiatives, mark each as core, adjacent or new, and see whether your effort matches what the business needs.',
        why: [
          'When I led innovation, the hard part was never finding ideas. It was seeing that almost all the effort went to small improvements while the future had no budget.',
          'This makes the mix visible in one minute and compares it with a target, so the conversation moves from which idea is best to where the effort should go.',
        ],
        next: ['Risk and expected return for each bet.', 'A stage for each initiative, from idea to scaled.'],
      },
      es: {
        title: 'Tablero de portafolio de innovación',
        summary: 'Lista tus iniciativas, marca cada una como negocio actual, cercana o nueva, y mira si tu esfuerzo corresponde a lo que el negocio necesita.',
        why: [
          'Cuando lideré innovación, lo difícil nunca fue encontrar ideas. Fue ver que casi todo el esfuerzo se iba a mejoras pequeñas mientras el futuro no tenía presupuesto.',
          'Esto hace visible la mezcla en un minuto y la compara con un objetivo, para que la conversación pase de cuál idea es mejor a dónde debe ir el esfuerzo.',
        ],
        next: ['Riesgo y retorno esperado de cada apuesta.', 'Una etapa para cada iniciativa, de idea a escalada.'],
      },
    },
  },
  {
    slug: 'journey-mapper',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Customer journey mapper',
        summary: 'Map five stages of your customer’s experience, score how each one feels and find the moment that deserves your attention first.',
        why: [
          'Businesses usually improve the part of the experience they see most, which is rarely the part that hurts the customer most.',
          'Scoring each stage draws the emotional curve. The lowest point is where a small fix changes how the whole experience is remembered.',
        ],
        next: ['More stages and several customer types side by side.', 'Space for real customer quotes at each stage.'],
      },
      es: {
        title: 'Mapa del recorrido del cliente',
        summary: 'Mapea cinco etapas de la experiencia de tu cliente, califica cómo se siente cada una y encuentra el momento que merece tu atención primero.',
        why: [
          'Los negocios suelen mejorar la parte de la experiencia que más ven, que rara vez es la que más le duele al cliente.',
          'Calificar cada etapa dibuja la curva emocional. El punto más bajo es donde un arreglo pequeño cambia cómo se recuerda toda la experiencia.',
        ],
        next: ['Más etapas y varios tipos de cliente lado a lado.', 'Espacio para frases reales de clientes en cada etapa.'],
      },
    },
  },
  {
    slug: 'subscription-economics',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Membership and subscription calculator',
        summary: 'For gyms, clinics, schools and any business with monthly members: see what each member is worth and where your membership will level off.',
        why: [
          'Membership businesses often feel like they are growing while standing still, because cancellations quietly cancel out the new members.',
          'This shows the ceiling: the number of members where the two balance. It also shows that keeping members usually beats finding new ones.',
        ],
        next: ['Annual plans and their effect on cancellations.', 'Cancellation rates that change with how long a member has stayed.'],
      },
      es: {
        title: 'Calculadora de membresías y suscripciones',
        summary: 'Para gimnasios, clínicas, escuelas y cualquier negocio con miembros mensuales: mira cuánto vale cada miembro y dónde se va a estabilizar tu membresía.',
        why: [
          'Los negocios de membresía muchas veces sienten que crecen cuando en realidad están en el mismo lugar, porque las cancelaciones anulan en silencio a los miembros nuevos.',
          'Esto muestra el techo: el número de miembros donde ambas cosas se equilibran. También muestra que retener miembros casi siempre le gana a conseguir nuevos.',
        ],
        next: ['Planes anuales y su efecto en las cancelaciones.', 'Tasas de cancelación que cambian según la antigüedad del miembro.'],
      },
    },
  },
  {
    slug: 'promo-roi',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Promotion return calculator',
        summary: 'Find out whether a promotion really makes money once you count the discount on units you would sell anyway, the sales it steals and the sales it borrows.',
        why: [
          'Promotions are judged by volume, and volume almost always goes up. The harder question is how much of that volume is truly new and what it cost to get it.',
          'This separates the lift into what is new, what came from your own shelf and what came from next month, then shows the lift you need to break even. It is the conversation I would want before signing a promotional calendar.',
        ],
        next: ['Compare promotion mechanics side by side: price cut, multipack and bonus pack.', 'Retailer margin and funding split between brand and retailer.'],
      },
      es: {
        title: 'Calculadora de retorno de promociones',
        summary: 'Descubre si una promoción realmente deja dinero cuando cuentas el descuento en unidades que venderías de todos modos, las ventas que canibaliza y las que adelanta.',
        why: [
          'Las promociones se evalúan por volumen, y el volumen casi siempre sube. La pregunta difícil es cuánto de ese volumen es realmente nuevo y cuánto costó conseguirlo.',
          'Esto separa el incremento en lo que es nuevo, lo que salió de tu propio anaquel y lo que salió del mes siguiente, y muestra el incremento que necesitas para salir a mano. Es la conversación que yo querría tener antes de firmar un calendario promocional.',
        ],
        next: ['Comparar mecánicas lado a lado: descuento, multiempaque y producto adicional.', 'Margen de la cadena y reparto de la inversión entre marca y cadena.'],
      },
    },
  },
  {
    slug: 'order-channels',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Order channel simulator',
        summary: 'See what it costs to take an order by rep, phone, WhatsApp or portal, and what moving customers to digital ordering is worth.',
        why: [
          'In most B2B companies orders arrive four different ways, and nobody knows what each way costs. The expensive part is rarely the order itself. It is the errors that follow.',
          'This puts a number on the cost to serve by channel, errors included, and on the prize for shifting the mix. It turns a digital ordering project from a technology idea into a business case.',
        ],
        next: ['Segment customers by size to see who should move first.', 'Adoption curve: how fast the mix can realistically shift.'],
      },
      es: {
        title: 'Simulador de canales de pedido',
        summary: 'Mira cuánto cuesta tomar un pedido por vendedor, teléfono, WhatsApp o portal, y cuánto vale mover a los clientes a la toma de pedido digital.',
        why: [
          'En la mayoría de las empresas B2B los pedidos llegan de cuatro formas distintas y nadie sabe cuánto cuesta cada una. Lo caro rara vez es el pedido. Son los errores que vienen después.',
          'Esto le pone número al costo de servir por canal, con errores incluidos, y al premio por cambiar la mezcla. Convierte un proyecto de pedido digital de una idea de tecnología en un caso de negocio.',
        ],
        next: ['Segmentar clientes por tamaño para ver quién debe migrar primero.', 'Curva de adopción: qué tan rápido puede cambiar la mezcla de forma realista.'],
      },
    },
  },
  {
    slug: 'launch-planner',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Launch size planner',
        summary: 'Six questions that tell you how big a launch should be, what it needs and where it is most likely to go wrong.',
        why: [
          'Teams burn out treating every release as a major launch, and then the one that carries the plan gets the same effort as the rest.',
          'Sizing the launch first is the cheapest decision in product marketing. This asks six questions and returns the size, the work it requires and the main risk to manage.',
        ],
        next: ['A week by week timeline you can export.', 'Launch roles: who owns positioning, enablement and channels.'],
      },
      es: {
        title: 'Planeador del tamaño de lanzamiento',
        summary: 'Seis preguntas que te dicen qué tan grande debe ser un lanzamiento, qué necesita y dónde es más probable que falle.',
        why: [
          'Los equipos se desgastan tratando cada liberación como un gran lanzamiento, y luego el que carga el plan recibe el mismo esfuerzo que los demás.',
          'Dimensionar el lanzamiento primero es la decisión más barata en marketing de producto. Esto hace seis preguntas y devuelve el tamaño, el trabajo que requiere y el principal riesgo por manejar.',
        ],
        next: ['Un calendario semana a semana que puedas exportar.', 'Roles del lanzamiento: quién es dueño de posicionamiento, habilitación y canales.'],
      },
    },
  },
  {
    slug: 'pricing-breakeven',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Pricing and break even calculator',
        summary: 'See your break even point, your room for error and how much volume you can lose after a price increase and still earn the same.',
        why: [
          'Most owners I talk to know their sales by heart and guess their break even. And almost everyone is afraid to raise prices because they picture customers leaving.',
          'This puts a number on that fear. A 10 percent increase usually lets you lose far more volume than you would expect before you are worse off. Seeing it changes the conversation.',
        ],
        next: ['Several products with different margins in one view.', 'A discount planner that shows what a promotion really costs.'],
      },
      es: {
        title: 'Calculadora de precio y punto de equilibrio',
        summary: 'Conoce tu punto de equilibrio, tu margen de error y cuánto volumen puedes perder después de subir precios y seguir ganando lo mismo.',
        why: [
          'La mayoría de los dueños con los que platico se saben sus ventas de memoria y adivinan su punto de equilibrio. Y casi todos temen subir precios porque imaginan que los clientes se van.',
          'Esto le pone número a ese miedo. Un aumento de 10 por ciento normalmente te permite perder mucho más volumen del que esperarías antes de salir perdiendo. Verlo cambia la conversación.',
        ],
        next: ['Varios productos con márgenes distintos en una sola vista.', 'Un planeador de descuentos que muestre lo que realmente cuesta una promoción.'],
      },
    },
  },
  {
    slug: 'whatsapp-followup',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'WhatsApp follow up builder',
        summary: 'Pick the situation, add four details and get three messages with their timing, ready to copy or open in WhatsApp.',
        why: [
          'In Mexico most small businesses sell through WhatsApp, and most lost sales are not lost to a competitor. They are quotes that went out and never got a second message.',
          'Following up feels pushy when you don’t know what to say. So this writes the sequence and explains the reason behind each message, which matters more than the wording.',
        ],
        next: ['Sequences by industry: clinics, contractors, schools, restaurants.', 'A simple tracker of who is on which day of the sequence.'],
      },
      es: {
        title: 'Seguimiento por WhatsApp',
        summary: 'Elige la situación, agrega cuatro datos y obtén tres mensajes con sus tiempos, listos para copiar o abrir en WhatsApp.',
        why: [
          'En México la mayoría de los negocios pequeños vende por WhatsApp, y la mayoría de las ventas perdidas no se pierden contra un competidor. Son cotizaciones que se mandaron y nunca tuvieron un segundo mensaje.',
          'Dar seguimiento se siente insistente cuando no sabes qué decir. Por eso esto escribe la secuencia y explica la razón detrás de cada mensaje, que importa más que las palabras exactas.',
        ],
        next: ['Secuencias por giro: clínicas, contratistas, escuelas, restaurantes.', 'Un control sencillo de quién va en qué día de la secuencia.'],
      },
    },
  },
  {
    slug: 'funnel-leak',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Sales funnel leak finder',
        summary: 'Enter four numbers about your sales and see which stage is costing you the most revenue, with a first move to fix it.',
        why: [
          'When sales are slow, the reflex is to spend more on advertising. Often the problem is further down: people show interest and nobody follows up, or customers buy once and never hear from you again.',
          'This compares each stage of your funnel with a typical rate for your type of business and tells you where one fix is worth the most money.',
        ],
        next: ['Reference rates by industry, built from real data.', 'A stage for quotes sent, since many service businesses lose sales there.'],
      },
      es: {
        title: 'Detector de fugas en tu embudo de ventas',
        summary: 'Captura cuatro números de tus ventas y descubre qué etapa te está costando más ingreso, con un primer paso para corregirla.',
        why: [
          'Cuando las ventas van lentas, el reflejo es gastar más en publicidad. Muchas veces el problema está más abajo: la gente muestra interés y nadie da seguimiento, o los clientes compran una vez y no vuelven a saber de ti.',
          'Esto compara cada etapa de tu embudo con una tasa típica para tu tipo de negocio y te dice dónde un solo arreglo vale más dinero.',
        ],
        next: ['Tasas de referencia por industria, construidas con datos reales.', 'Una etapa de cotizaciones enviadas, porque muchos negocios de servicios pierden ventas ahí.'],
      },
    },
  },
  {
    slug: 'ai-readiness',
    category: 'ai',
    status: 'live',
    copy: {
      en: {
        title: 'AI readiness check',
        summary: 'Eight questions to find out if your company is ready for AI, where it is weakest and the three steps to take next.',
        why: [
          'Most companies ask which AI tool to buy. The better first question is whether the company is ready to get value from any of them.',
          'In my experience AI projects rarely fail because of the technology. They fail because the data is scattered, the process was never written down or nobody owns the result. This check finds which of those is your real starting point.',
        ],
        next: ['A version by department, since sales and operations are rarely at the same level.', 'A one page summary you can download and share with your team.'],
      },
      es: {
        title: 'Diagnóstico de preparación para IA',
        summary: 'Ocho preguntas para saber si tu empresa está lista para la IA, dónde está más débil y los tres pasos que siguen.',
        why: [
          'La mayoría de las empresas pregunta qué herramienta de IA comprar. La mejor primera pregunta es si la empresa está lista para sacarle valor a cualquiera.',
          'En mi experiencia, los proyectos de IA rara vez fallan por la tecnología. Fallan porque los datos están dispersos, el proceso nunca se escribió o nadie es dueño del resultado. Este diagnóstico encuentra cuál de esos es tu verdadero punto de partida.',
        ],
        next: ['Una versión por área, porque ventas y operaciones rara vez están al mismo nivel.', 'Un resumen de una página para descargar y compartir con tu equipo.'],
      },
    },
  },
  {
    slug: 'market-sizing',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Market sizing builder',
        summary: 'TAM, SAM and SOM from assumptions you can see and change, plus what you would need to believe to hit a revenue goal.',
        why: [
          'Every strategy conversation eventually asks how big the opportunity really is. The honest answer is never a single number. It is a chain of assumptions, and the useful work is making that chain visible.',
          'This builder puts every assumption on the table and flips the question around: given a revenue goal, what share of the market would you need to win? That second number is usually the one that starts the real discussion.',
        ],
        next: [
          'Bottom up sizing next to top down, with a check on how far apart they are.',
          'Saved scenarios to compare an optimistic and a conservative case side by side.',
        ],
      },
      es: {
        title: 'Calculadora de tamaño de mercado',
        summary: 'TAM, SAM y SOM a partir de supuestos que puedes ver y cambiar, y lo que tendrías que creer para llegar a una meta de ingresos.',
        why: [
          'Toda conversación estratégica termina preguntando qué tan grande es realmente la oportunidad. La respuesta honesta nunca es un solo número. Es una cadena de supuestos, y el trabajo útil es hacer visible esa cadena.',
          'Esta calculadora pone cada supuesto sobre la mesa y voltea la pregunta: con una meta de ingresos, ¿qué participación del mercado necesitarías ganar? Ese segundo número suele ser el que detona la discusión real.',
        ],
        next: [
          'Dimensionamiento de abajo hacia arriba junto al de arriba hacia abajo, con una revisión de qué tan lejos están.',
          'Escenarios guardados para comparar un caso optimista y uno conservador lado a lado.',
        ],
      },
    },
  },
  {
    slug: 'customer-value',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Customer value calculator',
        summary: 'Lifetime value, acquisition cost payback and how sensitive both are to retention.',
        why: [
          'Most growth debates are really debates about customer value. How much can we spend to win a customer, and how long until they pay us back?',
          'I built this to make one point impossible to miss: small changes in retention move lifetime value far more than small changes in price. The curve at the bottom shows it in a way a spreadsheet never does.',
        ],
        next: [
          'Cohort mode, where retention changes over the customer lifetime instead of staying flat.',
          'Segment comparison to see which customers deserve a bigger acquisition budget.',
        ],
      },
      es: {
        title: 'Calculadora de valor del cliente',
        summary: 'Valor de vida del cliente, recuperación del costo de adquisición y qué tan sensibles son a la retención.',
        why: [
          'La mayoría de las discusiones de crecimiento en realidad son discusiones sobre el valor del cliente. ¿Cuánto podemos gastar para ganar un cliente y cuánto tarda en pagarnos de vuelta?',
          'La construí para que un punto sea imposible de ignorar: pequeños cambios en retención mueven el valor de vida mucho más que pequeños cambios en precio. La curva de abajo lo muestra como una hoja de cálculo nunca lo hace.',
        ],
        next: [
          'Modo por cohortes, donde la retención cambia a lo largo de la vida del cliente en lugar de quedarse fija.',
          'Comparación por segmento para ver qué clientes merecen más presupuesto de adquisición.',
        ],
      },
    },
  },
  {
    slug: 'negotiation-planner',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Negotiation planner',
        summary: 'Map your walk away point, your target and theirs, see the deal zone and plan your concessions before you sit down.',
        why: [
          'Most negotiations are lost in preparation, not at the table. People walk in knowing what they want but not what they would walk away from.',
          'This planner forces the four numbers that matter, shows whether a deal zone even exists and builds a concession plan that gets smaller with every move, which is how you signal you are close to your limit.',
        ],
        next: [
          'Multi issue mode to trade across price, timing and terms instead of fighting over one number.',
          'A printable one page prep sheet.',
        ],
      },
      es: {
        title: 'Planeador de negociación',
        summary: 'Define tu punto de retiro, tu meta y la de la otra parte, mira la zona de acuerdo y planea tus concesiones antes de sentarte.',
        why: [
          'La mayoría de las negociaciones se pierden en la preparación, no en la mesa. La gente llega sabiendo lo que quiere, pero no en qué punto se levantaría.',
          'Este planeador obliga a definir los cuatro números que importan, muestra si existe una zona de acuerdo y arma un plan de concesiones que se reduce con cada movimiento, que es como se comunica que ya estás cerca de tu límite.',
        ],
        next: [
          'Modo de múltiples variables para intercambiar precio, tiempos y condiciones en lugar de pelear por un solo número.',
          'Una hoja de preparación imprimible de una página.',
        ],
      },
    },
  },
  {
    slug: 'positioning-builder',
    category: 'strategy',
    status: 'live',
    copy: {
      en: {
        title: 'Positioning builder',
        summary: 'Write a positioning statement step by step and get instant checks for vague words, missing proof and blurry targets.',
        why: [
          'Positioning is the most rewritten paragraph in any company and usually the least specific. Everyone agrees with it, which is the problem.',
          'This builder walks through the classic structure and flags the habits that make positioning forgettable: generic claims, benefits with no proof and targets so broad they describe everyone.',
        ],
        next: [
          'A competitor view to check whether a rival could sign the same statement.',
          'Message house output: one positioning, three proof pillars.',
        ],
      },
      es: {
        title: 'Constructor de posicionamiento',
        summary: 'Escribe una declaración de posicionamiento paso a paso y recibe revisiones al instante: palabras vagas, falta de pruebas y públicos difusos.',
        why: [
          'El posicionamiento es el párrafo más reescrito de cualquier empresa y casi siempre el menos específico. Todos están de acuerdo con él, y ese es el problema.',
          'Este constructor recorre la estructura clásica y señala los hábitos que hacen olvidable un posicionamiento: promesas genéricas, beneficios sin pruebas y públicos tan amplios que describen a todos.',
        ],
        next: [
          'Una vista de competidores para revisar si un rival podría firmar la misma declaración.',
          'Salida en formato message house: un posicionamiento, tres pilares de prueba.',
        ],
      },
    },
  },
  {
    slug: 'marketing-mix',
    category: 'strategy',
    status: 'beta',
    copy: {
      en: {
        title: 'Marketing mix optimizer',
        summary: 'Split a budget across channels with diminishing returns and let the optimizer find the mix that earns the most.',
        why: [
          'Budget allocation is where marketing strategy turns into numbers, and it is usually decided by last year’s split plus a little negotiation.',
          'Every channel saturates at some point. This optimizer moves money to wherever the next peso earns the most until no move improves the result. The answer is often less intuitive than people expect.',
        ],
        next: [
          'Fit the response curves from real spend and sales history.',
          'Minimum and maximum limits per channel to reflect contracts and brand commitments.',
        ],
      },
      es: {
        title: 'Optimizador de mezcla de marketing',
        summary: 'Reparte un presupuesto entre canales con rendimientos decrecientes y deja que el optimizador encuentre la mezcla que más genera.',
        why: [
          'La asignación de presupuesto es donde la estrategia de marketing se vuelve números, y casi siempre se decide con la mezcla del año pasado más un poco de negociación.',
          'Todo canal se satura en algún punto. Este optimizador mueve dinero a donde el siguiente peso genera más, hasta que ningún movimiento mejora el resultado. La respuesta suele ser menos intuitiva de lo que la gente espera.',
        ],
        next: [
          'Ajustar las curvas de respuesta con historia real de inversión y ventas.',
          'Mínimos y máximos por canal para reflejar contratos y compromisos de marca.',
        ],
      },
    },
  },
  {
    slug: 'ai-opportunity-map',
    category: 'ai',
    status: 'live',
    copy: {
      en: {
        title: 'AI Opportunity Map',
        summary: 'Pick an industry and a function and see where AI pays off first, plotted by impact and feasibility.',
        why: [
          'The question I hear most about AI is not whether to use it but where to start. Most companies start with whatever demo impressed someone, not with what moves the business.',
          'This map ranks use cases by impact and feasibility so the first project is a quick win that builds confidence, and the big bets are planned on purpose. The scores reflect my own judgment from working on these problems.',
        ],
        next: [
          'A readiness check on data, people and process that adjusts feasibility for your company.',
          'A downloadable roadmap with the first three projects in sequence.',
        ],
      },
      es: {
        title: 'Mapa de oportunidades de IA',
        summary: 'Elige una industria y una función y mira dónde la IA rinde primero, ubicada por impacto y factibilidad.',
        why: [
          'La pregunta que más escucho sobre IA no es si usarla, sino por dónde empezar. La mayoría de las empresas empieza por el demo que impresionó a alguien, no por lo que mueve el negocio.',
          'Este mapa ordena casos de uso por impacto y factibilidad para que el primer proyecto sea una victoria rápida que genere confianza, y las grandes apuestas se planeen a propósito. Las calificaciones reflejan mi propio criterio trabajando en estos problemas.',
        ],
        next: [
          'Un diagnóstico de datos, personas y procesos que ajuste la factibilidad para tu empresa.',
          'Una hoja de ruta descargable con los primeros tres proyectos en secuencia.',
        ],
      },
    },
  },
  {
    slug: 'automation-roi',
    category: 'ai',
    status: 'live',
    copy: {
      en: {
        title: 'Automation ROI simulator',
        summary: 'List the steps of a process, mark what AI can take over and see hours saved, annual savings and payback.',
        why: [
          'Automation projects get approved on excitement and cancelled on math. I prefer doing the math first.',
          'This simulator comes from mapping real back office workflows: break the process into steps, be honest about what can be automated fully or only partly, and compare the savings against what it costs to build and run.',
        ],
        next: [
          'Error and rework costs, which are often worth more than the time saved.',
          'Templates for common processes like invoicing, onboarding and reporting.',
        ],
      },
      es: {
        title: 'Simulador de ROI de automatización',
        summary: 'Enlista los pasos de un proceso, marca lo que la IA puede asumir y mira horas ahorradas, ahorro anual y recuperación.',
        why: [
          'Los proyectos de automatización se aprueban con entusiasmo y se cancelan con números. Prefiero hacer los números primero.',
          'Este simulador viene de mapear flujos administrativos reales: dividir el proceso en pasos, ser honesto sobre qué se puede automatizar por completo o solo en parte, y comparar el ahorro contra lo que cuesta construirlo y operarlo.',
        ],
        next: [
          'Costos de errores y retrabajo, que muchas veces valen más que el tiempo ahorrado.',
          'Plantillas para procesos comunes como facturación, onboarding y reportes.',
        ],
      },
    },
  },
  {
    slug: 'ai-workflow-builder',
    category: 'ai',
    status: 'beta',
    copy: {
      en: {
        title: 'AI workflow builder',
        summary: 'Decide who does each step of a task, AI or a person, and see the time saved and where human judgment has to stay.',
        why: [
          'Good AI workflows are designed, not discovered. The hard part is not getting AI to do a step, it is deciding which steps it should never do alone.',
          'This builder lets you assign each step and warns you when a decision or a fact check has no human in the loop. It is the same logic I use in the Strategy Engine on this site.',
        ],
        next: [
          'Custom steps and your own time estimates.',
          'Export a workflow as a checklist your team can follow.',
        ],
      },
      es: {
        title: 'Diseñador de flujos con IA',
        summary: 'Decide quién hace cada paso de una tarea, la IA o una persona, y mira el tiempo ahorrado y dónde tiene que quedarse el criterio humano.',
        why: [
          'Los buenos flujos con IA se diseñan, no se descubren. Lo difícil no es lograr que la IA haga un paso, sino decidir qué pasos nunca debe hacer sola.',
          'Este diseñador te deja asignar cada paso y te avisa cuando una decisión o una verificación de datos se queda sin una persona en el proceso. Es la misma lógica que uso en el Strategy Engine de este sitio.',
        ],
        next: [
          'Pasos personalizados y tus propios tiempos.',
          'Exportar un flujo como una lista de verificación para tu equipo.',
        ],
      },
    },
  },
  {
    slug: 'pit-strategy',
    category: 'fun',
    status: 'live',
    copy: {
      en: {
        title: 'Pit strategy simulator',
        summary: 'One stop or two? Pick tires, pit laps and a safety car and see which race strategy crosses the line first.',
        why: [
          'Race strategy is strategy with a stopwatch. Every pit stop is a trade off between losing time now and saving it later, decided with incomplete information and a rival doing the same math.',
          'I follow motorsport closely, and this was a fun way to model the decisions that make race Sundays interesting. The model is simplified, but the trade offs are real.',
        ],
        next: [
          'Track presets with different pit losses and tire wear.',
          'A rival car with its own strategy, so undercuts and overcuts actually happen.',
        ],
      },
      es: {
        title: 'Simulador de estrategia de pits',
        summary: '¿Una parada o dos? Elige llantas, vueltas de pits y un safety car y mira qué estrategia cruza primero la meta.',
        why: [
          'La estrategia de carrera es estrategia con cronómetro. Cada parada en pits es un intercambio entre perder tiempo ahora y ganarlo después, decidido con información incompleta y con un rival haciendo las mismas cuentas.',
          'Sigo el automovilismo de cerca, y esta fue una forma divertida de modelar las decisiones que hacen interesantes los domingos de carrera. El modelo es simplificado, pero los intercambios son reales.',
        ],
        next: [
          'Circuitos predefinidos con distintas pérdidas en pits y desgaste de llantas.',
          'Un auto rival con su propia estrategia, para que el undercut y el overcut realmente sucedan.',
        ],
      },
    },
  },
];

export const findProject = (slug: string) => labProjects.find((p) => p.slug === slug);
