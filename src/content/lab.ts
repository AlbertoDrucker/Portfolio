import type { Localized } from '../i18n/ui';

export type LabCategory = 'strategy' | 'ai' | 'fun';
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
}> = {
  en: {
    metaTitle: 'Lab | Alberto Drucker',
    metaDescription: 'Working tools for strategy, applied AI and a few things built for fun. Everything runs in your browser.',
    title: 'Lab',
    lead: 'Working tools I built for strategy, applied AI and a few things I care about outside work. Everything runs in your browser, nothing is stored and every tool is free to use.',
    homeTitle: 'From the Lab',
    homeLead: 'Tools you can use right now. Some come from work, some from curiosity, all of them keep evolving.',
    homeLink: 'Open the Lab',
    categories: { strategy: 'Strategy', ai: 'Applied AI', fun: 'Just for fun' },
    status: { live: 'Live', beta: 'Beta' },
    open: 'Open the tool',
    whyTitle: 'Why I built it',
    nextTitle: 'What’s next',
    back: 'All Lab tools',
    disclaimer: 'Illustrative models built to support thinking, not to replace your own data.',
  },
  es: {
    metaTitle: 'Lab | Alberto Drucker',
    metaDescription: 'Herramientas que funcionan para estrategia, IA aplicada y algunas cosas hechas por gusto. Todo corre en tu navegador.',
    title: 'Lab',
    lead: 'Herramientas que construí para estrategia, IA aplicada y algunas cosas que me importan fuera del trabajo. Todo corre en tu navegador, no se guarda nada y todas son gratis.',
    homeTitle: 'Desde el Lab',
    homeLead: 'Herramientas que puedes usar ahora mismo. Algunas vienen del trabajo, otras de la curiosidad, y todas siguen evolucionando.',
    homeLink: 'Abrir el Lab',
    categories: { strategy: 'Estrategia', ai: 'IA aplicada', fun: 'Por gusto' },
    status: { live: 'Lista', beta: 'Beta' },
    open: 'Abrir herramienta',
    whyTitle: 'Por qué la construí',
    nextTitle: 'Lo que sigue',
    back: 'Todas las herramientas',
    disclaimer: 'Modelos ilustrativos para apoyar el pensamiento, no para sustituir tus propios datos.',
  },
};

export const labProjects: LabProject[] = [
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
