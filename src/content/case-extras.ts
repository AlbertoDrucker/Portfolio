import type { Localized } from '../i18n/ui';

/**
 * Presentation layer for each case page: the at a glance facts, headings that state a finding,
 * the main visual and its caption. Kept apart from cases.ts so the story text stays readable.
 */
export type VisualKind = 'shots' | 'launch' | 'pitch' | 'pipeline' | 'ai' | 'venture' | 'streaming' | 'journey' | 'medtech';

export interface CaseExtra {
  facts: { role: string; team: string; when: string; sector: string };
  heads: { challenge: string; approach: string; outcome: string };
  visual: VisualKind;
  caption: string;
  /** One short line for the cover card. */
  cover: string;
  shots?: { src: string; alt: string; caption: string }[];
  /** Put the working Lab tool on the case page itself, so visitors can use it in place. */
  live?: boolean;
  tryNote?: string;
}

export const factLabels: Localized<{ role: string; team: string; when: string; sector: string; back: string; next: string; all: string; open: string }> = {
  en: { role: 'My role', team: 'Team', when: 'When', sector: 'Industry', back: 'All work', next: 'Next case', all: 'See all work', open: 'Read the case' },
  es: { role: 'Mi rol', team: 'Equipo', when: 'Cuándo', sector: 'Industria', back: 'Todo el trabajo', next: 'Siguiente caso', all: 'Ver todo el trabajo', open: 'Leer el caso' },
};

export const caseExtras: Localized<Record<string, CaseExtra>> = {
  en: {
    property: {
      facts: { role: 'Designed and built it', team: 'Me, with the two owners', when: '2026', sector: 'Property management' },
      heads: {
        challenge: 'Every late fee, payout and repair depended on someone remembering',
        approach: 'The software prepares the work, a person approves it',
        outcome: '31 steps of the business in one prototype, heading into a pilot',
      },
      visual: 'shots',
      caption: 'The working demo, with an invented company, people and homes. Approve or edit a draft, report a repair, switch to the renter or owner portal, or jump ahead a day.',
      live: true,
      tryNote: 'This one works. Click around.',
      cover: '4 connected apps, nothing sent without approval',
      shots: [
        { src: '/work/property-team.webp', alt: 'Team workspace showing today’s approvals, rent status and open repairs', caption: 'Team workspace. Today’s approvals sit above everything else, so nothing waits on memory.' },
        { src: '/work/property-renter.webp', alt: 'Renter portal with rent split between roommates and a repair request form', caption: 'Renter portal. Rent split between roommates and a repair form that sets the priority as they type.' },
        { src: '/work/property-owner.webp', alt: 'Owner portal with a monthly statement explained in one sentence', caption: 'Owner portal. Every statement comes with one plain sentence that explains the number.' },
      ],
    },
    'premium-launch': {
      facts: { role: 'Head of innovation, first hire of the department', team: 'Grew to 10 people', when: '2020 to 2021', sector: 'Home and sleep retail' },
      heads: {
        challenge: 'A new department with a tight budget, and a client stuck for five years',
        approach: 'Build the practice and prove it on a real launch at the same time',
        outcome: 'Revenue per client up 1,000%, investment back in eight months',
      },
      visual: 'launch',
      caption: 'From the first day of the department to a second store, in about two years.',
      cover: '1,000% more revenue per client',
    },
    pitch: {
      facts: { role: 'Led the pitch across departments', team: 'Strategy, digital and creative leads', when: '2022', sector: 'Food and consumer goods, 6 countries' },
      heads: {
        challenge: '14 brands, 6 countries, and a team that had never worked as one',
        approach: 'One point of view, kept alive with a weekly rhythm',
        outcome: 'All 14 won, and the firm doubled in three months',
      },
      visual: 'pitch',
      caption: 'Each square is one brand in the review. All fourteen came to the firm.',
      cover: '14 of 14 brands won',
    },
    pipeline: {
      facts: { role: 'Innovation lead', team: 'Research, design and plant teams', when: '2022 to 2024', sector: 'Packaged food' },
      heads: {
        challenge: 'Spare plant capacity and no plan to use it',
        approach: 'Start from what consumers want and what the plants can make',
        outcome: 'Seven times the products, four new categories',
      },
      visual: 'pipeline',
      caption: 'The kids’ brand roadmap: products in market before and after the five year pipeline.',
      cover: '+600% products in the roadmap',
    },
    'ai-ar': {
      facts: { role: 'Innovation lead and owner of the new unit’s P&L', team: 'Creative, digital and a U.S. studio partner', when: '2023 to 2025', sector: 'Food and advertising production' },
      heads: {
        challenge: 'A brand that wanted to know what people really cook',
        approach: 'Turn consumer questions into product decisions',
        outcome: 'A top selling product and a new line of revenue',
      },
      visual: 'ai',
      caption: 'How a recipe question from a consumer became a flavor on the shelf.',
      cover: '25% faster product design',
    },
    venture: {
      facts: { role: 'Co-author of the plan', team: 'Four MBA students', when: '2026', sector: 'Clinical nutrition' },
      heads: {
        challenge: 'The protein bars on the shelf make these patients feel worse',
        approach: 'The moat is the channel, not the bar',
        outcome: 'A business that rests on one ratio',
      },
      visual: 'venture',
      caption: 'Cost to win one customer by channel, from our model. Clinics are the business.',
      cover: '$16 vs $58 to win a customer',
    },
    streaming: {
      facts: { role: 'Marketing lead', team: 'Startup founding team', when: '2026', sector: 'Streaming and independent film' },
      heads: {
        challenge: 'A growing niche, and a leader hurt by its own big bets',
        approach: 'Map every player on two questions: paid or free, curated or broad',
        outcome: 'A hybrid model for the open corner of the map',
      },
      visual: 'streaming',
      caption: 'Paid curation and free breadth are taken. Free curation exists only behind a library card.',
      cover: 'Specialty growing 14% vs 6%',
    },
    journey: {
      facts: { role: 'Research and journey design', team: 'Three MBA students', when: '2026', sector: 'Quick service restaurants' },
      heads: {
        challenge: 'A near perfect app, and still a long line at lunch',
        approach: 'Two kinds of customer, seven stages, every claim tied to a source',
        outcome: 'The people who would gain most from the app do not trust it',
      },
      visual: 'journey',
      caption: 'How each group felt at each stage, from our team ratings on a 1 to 5 scale. The lines split during the service stages.',
      cover: '8 of 9 customers skipped the app',
    },
    medtech: {
      facts: { role: 'Market research and synthesis', team: 'MBA consulting team', when: '2026', sector: 'Medical devices' },
      heads: {
        challenge: 'A fast market that is hard to read from the outside',
        approach: 'Scan wide, then narrow to one technology',
        outcome: 'One clear thing for the client to watch',
      },
      visual: 'medtech',
      caption: 'Three technology areas scanned, narrowed to the one with the clearest implications.',
      cover: 'Three areas narrowed to one',
    },
  },
  es: {
    property: {
      facts: { role: 'Lo diseñé y lo construí', team: 'Yo, con los dos dueños', when: '2026', sector: 'Administración de propiedades' },
      heads: {
        challenge: 'Cada recargo, pago y reparación dependía de que alguien se acordara',
        approach: 'El software prepara el trabajo, una persona lo aprueba',
        outcome: '31 pasos del negocio en un prototipo, rumbo a un piloto',
      },
      visual: 'shots',
      caption: 'El demo funcionando, con una empresa, personas y casas inventadas. Aprueba o edita un borrador, reporta una reparación, cambia al portal de inquilinos o de propietarios, o adelanta un día.',
      live: true,
      tryNote: 'Este sí funciona. Pruébalo.',
      cover: '4 apps conectadas, nada sale sin aprobación',
      shots: [
        { src: '/work/property-team.webp', alt: 'Espacio del equipo con las aprobaciones del día, el estado de rentas y las reparaciones abiertas', caption: 'Espacio del equipo. Las aprobaciones del día van arriba de todo, así nada depende de la memoria.' },
        { src: '/work/property-renter.webp', alt: 'Portal de inquilinos con la renta dividida entre roomies y un formulario de reparación', caption: 'Portal de inquilinos. La renta dividida entre roomies y un formulario de reparación que define la prioridad mientras escriben.' },
        { src: '/work/property-owner.webp', alt: 'Portal de propietarios con un estado de cuenta explicado en una frase', caption: 'Portal de propietarios. Cada estado de cuenta trae una frase simple que explica el número.' },
      ],
    },
    'premium-launch': {
      facts: { role: 'Head de innovación, primer integrante del área', team: 'Creció a 10 personas', when: '2020 a 2021', sector: 'Retail de descanso y hogar' },
      heads: {
        challenge: 'Un área nueva con poco presupuesto, y un cliente atorado cinco años',
        approach: 'Construir la práctica y probarla en un lanzamiento real al mismo tiempo',
        outcome: 'Ingreso por cliente 1,000% arriba, inversión recuperada en ocho meses',
      },
      visual: 'launch',
      caption: 'Del primer día del área a una segunda tienda, en unos dos años.',
      cover: '1,000% más ingreso por cliente',
    },
    pitch: {
      facts: { role: 'Lideré el pitch entre áreas', team: 'Líderes de estrategia, digital y creatividad', when: '2022', sector: 'Alimentos y consumo, 6 países' },
      heads: {
        challenge: '14 marcas, 6 países y un equipo que nunca había trabajado junto',
        approach: 'Un solo punto de vista, sostenido con un ritmo semanal',
        outcome: 'Las 14 ganadas, y la firma duplicó su tamaño en tres meses',
      },
      visual: 'pitch',
      caption: 'Cada cuadro es una marca de la revisión. Las catorce llegaron a la firma.',
      cover: '14 de 14 marcas ganadas',
    },
    pipeline: {
      facts: { role: 'Líder de innovación', team: 'Equipos de investigación, diseño y plantas', when: '2022 a 2024', sector: 'Alimentos empacados' },
      heads: {
        challenge: 'Capacidad sobrante en las plantas y ningún plan para usarla',
        approach: 'Partir de lo que quiere el consumidor y lo que pueden hacer las plantas',
        outcome: 'Siete veces más productos, cuatro categorías nuevas',
      },
      visual: 'pipeline',
      caption: 'El roadmap de la marca infantil: productos en el mercado antes y después del pipeline de cinco años.',
      cover: '+600% productos en el roadmap',
    },
    'ai-ar': {
      facts: { role: 'Líder de innovación y dueño del P&L de la nueva unidad', team: 'Creatividad, digital y un estudio aliado en Estados Unidos', when: '2023 a 2025', sector: 'Alimentos y producción publicitaria' },
      heads: {
        challenge: 'Una marca que quería saber qué cocina de verdad la gente',
        approach: 'Convertir las preguntas del consumidor en decisiones de producto',
        outcome: 'Un producto líder en ventas y una nueva línea de ingreso',
      },
      visual: 'ai',
      caption: 'Cómo una pregunta de receta de un consumidor se convirtió en un sabor en el anaquel.',
      cover: '25% más rápido el diseño de producto',
    },
    venture: {
      facts: { role: 'Coautor del plan', team: 'Cuatro estudiantes del MBA', when: '2026', sector: 'Nutrición clínica' },
      heads: {
        challenge: 'Las barras de proteína del anaquel hacen sentir peor a estos pacientes',
        approach: 'La ventaja está en el canal, no en la barra',
        outcome: 'Un negocio que descansa en una sola razón',
      },
      visual: 'venture',
      caption: 'Costo de ganar un cliente por canal, según nuestro modelo. Las clínicas son el negocio.',
      cover: '$16 vs $58 por cliente ganado',
    },
    streaming: {
      facts: { role: 'Líder de marketing', team: 'Equipo fundador de la startup', when: '2026', sector: 'Streaming y cine independiente' },
      heads: {
        challenge: 'Un nicho que crece, y un líder dañado por sus propias apuestas',
        approach: 'Ubicar a cada jugador con dos preguntas: de pago o gratis, curado o amplio',
        outcome: 'Un modelo híbrido para la esquina libre del mapa',
      },
      visual: 'streaming',
      caption: 'La curaduría de pago y la amplitud gratuita ya están ocupadas. La curaduría gratuita solo existe detrás de una credencial de biblioteca.',
      cover: 'El nicho crece 14% vs 6%',
    },
    journey: {
      facts: { role: 'Investigación y diseño del recorrido', team: 'Tres estudiantes del MBA', when: '2026', sector: 'Restaurantes de servicio rápido' },
      heads: {
        challenge: 'Una app casi perfecta, y aun así una fila larga a la hora de la comida',
        approach: 'Dos tipos de cliente, siete etapas, cada afirmación ligada a su fuente',
        outcome: 'Quienes más ganarían con la app no confían en ella',
      },
      visual: 'journey',
      caption: 'Cómo se sintió cada grupo en cada etapa, según las calificaciones del equipo en escala de 1 a 5. Las líneas se separan en las etapas de servicio.',
      cover: '8 de 9 clientes no usaron la app',
    },
    medtech: {
      facts: { role: 'Investigación de mercado y síntesis', team: 'Equipo de consultoría del MBA', when: '2026', sector: 'Dispositivos médicos' },
      heads: {
        challenge: 'Un mercado rápido y difícil de leer desde fuera',
        approach: 'Mapear amplio y luego enfocarse en una tecnología',
        outcome: 'Una sola cosa clara para que el cliente la siga',
      },
      visual: 'medtech',
      caption: 'Tres áreas de tecnología mapeadas, enfocadas en la de implicaciones más claras.',
      cover: 'Tres áreas enfocadas en una',
    },
  },
};

/** Labels drawn inside the case visuals. */
export const visualCopy: Localized<{
  launch: { steps: { m: string; t: string }[] };
  pitch: { won: string };
  pipeline: { before: string; after: string; cats: string };
  ai: { steps: string[]; faster: string };
  venture: { rows: { l: string; v: number }[]; ltv: string };
  streaming: { paid: string; free: string; curated: string; broad: string; spots: { l: string; x: number; y: number }[]; open: string };
  journey: { stages: string[]; walk: string; app: string };
  medtech: { areas: string[]; focus: string };
}> = {
  en: {
    launch: {
      steps: [
        { m: 'Month 0', t: 'First hire of the department' },
        { m: 'Month 4', t: 'Department running' },
        { m: 'Launch', t: 'New premium brand opens' },
        { m: '+8 months', t: 'Investment paid back' },
        { m: '+1 year', t: 'Second store opens' },
      ],
    },
    pitch: { won: 'brands won' },
    pipeline: { before: 'Before', after: 'Roadmap to 2029', cats: '4 new categories, 7+ plants' },
    ai: { steps: ['Consumer asks for a recipe', 'Assistant answers, adapted to the country', 'Live dashboard of what people cook', 'Product team picks 3 new flavors', 'One becomes the top seller'], faster: '25% shorter design process' },
    venture: { rows: [{ l: 'Paid social, direct', v: 58 }, { l: 'Blended, year 2', v: 31 }, { l: 'Clinical partners', v: 16 }], ltv: 'Lifetime value per customer: $128' },
    streaming: {
      paid: 'Paid',
      free: 'Free',
      curated: 'Curated',
      broad: 'Broad',
      spots: [
        { l: 'Arthouse subscription', x: 0.22, y: 0.2 },
        { l: 'Classics subscription', x: 0.36, y: 0.32 },
        { l: 'Documentary subscription', x: 0.4, y: 0.14 },
        { l: 'Free ad supported giants', x: 0.8, y: 0.82 },
        { l: 'Library card access', x: 0.62, y: 0.24 },
      ],
      open: 'The open space',
    },
    journey: { stages: ['Awareness', 'Decide', 'Arrive', 'Order', 'Wait', 'Eat', 'After'], walk: 'Walk in loyalist', app: 'App ready customer' },
    medtech: { areas: ['MRI guided intervention', 'Localized drug delivery', 'Minimally invasive therapy'], focus: 'One technology to watch' },
  },
  es: {
    launch: {
      steps: [
        { m: 'Mes 0', t: 'Primer integrante del área' },
        { m: 'Mes 4', t: 'Área operando' },
        { m: 'Lanzamiento', t: 'Abre la nueva marca premium' },
        { m: '+8 meses', t: 'Inversión recuperada' },
        { m: '+1 año', t: 'Abre la segunda tienda' },
      ],
    },
    pitch: { won: 'marcas ganadas' },
    pipeline: { before: 'Antes', after: 'Roadmap a 2029', cats: '4 categorías nuevas, 7+ plantas' },
    ai: { steps: ['El consumidor pide una receta', 'El asistente responde, adaptado al país', 'Tablero en vivo de lo que la gente cocina', 'El equipo elige 3 sabores nuevos', 'Uno se vuelve el más vendido'], faster: '25% menos tiempo de diseño' },
    venture: { rows: [{ l: 'Redes pagadas, directo', v: 58 }, { l: 'Mezcla, año 2', v: 31 }, { l: 'Clínicas aliadas', v: 16 }], ltv: 'Valor de vida por cliente: $128' },
    streaming: {
      paid: 'De pago',
      free: 'Gratis',
      curated: 'Curado',
      broad: 'Amplio',
      spots: [
        { l: 'Suscripción de cine de autor', x: 0.22, y: 0.2 },
        { l: 'Suscripción de clásicos', x: 0.36, y: 0.32 },
        { l: 'Suscripción de documental', x: 0.4, y: 0.14 },
        { l: 'Gigantes gratis con anuncios', x: 0.8, y: 0.82 },
        { l: 'Acceso con credencial de biblioteca', x: 0.62, y: 0.24 },
      ],
      open: 'El espacio libre',
    },
    journey: { stages: ['Conoce', 'Decide', 'Llega', 'Ordena', 'Espera', 'Come', 'Después'], walk: 'Leal que entra al local', app: 'Cliente que usa la app' },
    medtech: { areas: ['Intervención guiada por resonancia', 'Liberación localizada de fármacos', 'Terapia de mínima invasión'], focus: 'Una tecnología a seguir' },
  },
};
