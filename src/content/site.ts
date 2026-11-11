import type { Localized } from '../i18n/ui';

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home: Localized<{
  metaTitle: string;
  metaDescription: string;
  heroLines: string[];
  heroIntro: string;
  engineIntro: string;
  workTitle: string;
  workLead: string;
  workLink: string;
  aboutTitle: string;
  aboutTeaser: string;
  aboutLink: string;
  methodLink: string;
}> = {
  en: {
    metaTitle: 'Alberto Drucker | Strategy that ships',
    metaDescription:
      'Strategist from Monterrey working at the intersection of marketing, strategy and applied AI. See how I work a strategy question with AI.',
    heroLines: ['Strategy that ships.', 'Applied AI for business.'],
    heroIntro:
      'I’m a strategist from Monterrey with an engineer’s training and a designer’s habits. I turn messy business questions into clear decisions and working systems, and I use AI to get there faster without handing over the thinking.',
    engineIntro:
      'Below is a replay of how I work a strategy question with AI. The draft in the main column comes from my AI workflow. The notes in the margin are my judgment.',
    workTitle: 'Selected work',
    workLead: 'Real projects, told without client names.',
    workLink: 'Read the stories',
    aboutTitle: 'About',
    aboutTeaser:
      'Engineer by training, innovation lead by trade, strategist by choice. I care about decisions that hold up and systems that keep working when I’m not in the room.',
    aboutLink: 'More about me',
    methodLink: 'See the full method',
  },
  es: {
    metaTitle: 'Alberto Drucker | Estrategia que se ejecuta',
    metaDescription:
      'Estratega regiomontano en la intersección de marketing, estrategia e IA aplicada. Mira cómo trabajo una pregunta estratégica con IA.',
    heroLines: ['Estrategia que se ejecuta.', 'IA aplicada al negocio.'],
    heroIntro:
      'Soy estratega, regiomontano, con formación de ingeniero y hábitos de diseñador. Convierto preguntas de negocio complejas en decisiones claras y sistemas que funcionan, y uso IA para llegar más rápido sin delegar el criterio.',
    engineIntro:
      'Abajo puedes ver cómo trabajo una pregunta estratégica con IA. El borrador de la columna principal sale de mi flujo de trabajo con IA. Las notas al margen son mi criterio.',
    workTitle: 'Proyectos',
    workLead: 'Proyectos reales, contados sin nombres de clientes.',
    workLink: 'Leer los proyectos',
    aboutTitle: 'Sobre mí',
    aboutTeaser:
      'Ingeniero de formación, líder de innovación de oficio, estratega por convicción. Me importan las decisiones que se sostienen y los sistemas que siguen funcionando cuando no estoy en la sala.',
    aboutLink: 'Más sobre mí',
    methodLink: 'Ver el método completo',
  },
};

/* ------------------------------------------------------------------ */
/* How I work with AI                                                  */
/* ------------------------------------------------------------------ */

export interface MethodStep {
  ai: string;
  me: string;
}

export const howIWork: Localized<{
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  intro: string;
  methodTitle: string;
  aiLabel: string;
  meLabel: string;
  method: MethodStep[];
  engineTitle: string;
  engineLead: string;
  principlesTitle: string;
  principles: { title: string; text: string }[];
  builtTitle: string;
  builtText: string;
}> = {
  en: {
    metaTitle: 'How I work with AI | Alberto Drucker',
    metaDescription: 'A seven step strategy method where AI does the volume and I bring the judgment.',
    title: 'How I work with AI',
    lead: 'AI does the volume. I bring the judgment.',
    intro:
      'Every strategy question I take on goes through the same seven steps. AI makes each step faster and wider: more signals, more options, more stress testing. The decisions stay with me, and the margin notes in the Strategy Engine show exactly where.',
    methodTitle: 'The method',
    aiLabel: 'AI does',
    meLabel: 'I do',
    method: [
      { ai: 'Restates the ask and lists the assumptions hiding inside it.', me: 'Decide which question is actually worth answering.' },
      { ai: 'Gathers signals, trends and sources in minutes instead of days.', me: 'Separate signal from noise and flag what needs real data.' },
      { ai: 'Fills the 5C map: company, customers, competitors, collaborators, context.', me: 'Find the gaps and the contradictions between the boxes.' },
      { ai: 'Proposes patterns across everything collected.', me: 'Keep only the insights that would change a decision.' },
      { ai: 'Generates many ideas to fix, improve and surprise.', me: 'Sequence them. Fix comes before wow.' },
      { ai: 'Stress tests each option and argues against it.', me: 'Choose, and own the risk that comes with the choice.' },
      { ai: 'Drafts the plan, the timeline and the measures.', me: 'Set the decision gates and what would make us stop.' },
    ],
    engineTitle: 'See it run',
    engineLead: 'Fictional challenges, one method. Replay any step or read the full brief.',
    principlesTitle: 'Principles',
    principles: [
      { title: 'Judgment stays human.', text: 'AI drafts, compares and stress tests. I decide what matters and I own the call.' },
      { title: 'Every claim gets checked.', text: 'Anything that drives a decision is traced to data or a real conversation, never to a confident sentence.' },
      { title: 'Show the work.', text: 'Teams see the reasoning, the assumptions and what would change my mind.' },
      { title: 'Build, don’t just advise.', text: 'When a tool would help, I build it. This site and its Lab are examples.' },
    ],
    builtTitle: 'This site',
    builtText:
      'I designed and built this site with Claude Code, from the first idea to the deploy. The Strategy Engine, the Lab tools and both languages run on code written with AI under my direction.',
  },
  es: {
    metaTitle: 'Cómo trabajo con IA | Alberto Drucker',
    metaDescription: 'Un método estratégico de siete pasos donde la IA pone el volumen y yo pongo el criterio.',
    title: 'Cómo trabajo con IA',
    lead: 'La IA pone el volumen. Yo pongo el criterio.',
    intro:
      'Cada pregunta estratégica que tomo pasa por los mismos siete pasos. La IA hace cada paso más rápido y más amplio: más señales, más opciones, más pruebas de estrés. Las decisiones se quedan conmigo, y las notas al margen del Strategy Engine muestran exactamente dónde.',
    methodTitle: 'El método',
    aiLabel: 'La IA',
    meLabel: 'Yo',
    method: [
      { ai: 'Replantea la pregunta y enlista los supuestos escondidos en ella.', me: 'Decido qué pregunta realmente vale la pena responder.' },
      { ai: 'Reúne señales, tendencias y fuentes en minutos, no en días.', me: 'Separo la señal del ruido y marco lo que necesita datos reales.' },
      { ai: 'Llena el mapa de las 5C: compañía, clientes, competidores, colaboradores, contexto.', me: 'Encuentro los huecos y las contradicciones entre los cuadros.' },
      { ai: 'Propone patrones a partir de todo lo reunido.', me: 'Me quedo solo con los insights que cambiarían una decisión.' },
      { ai: 'Genera muchas ideas para corregir, mejorar y sorprender.', me: 'Las pongo en orden. Corregir va antes que sorprender.' },
      { ai: 'Pone a prueba cada opción y argumenta en su contra.', me: 'Elijo, y asumo el riesgo que viene con la decisión.' },
      { ai: 'Redacta el plan, los tiempos y las métricas.', me: 'Defino las compuertas de decisión y qué nos haría parar.' },
    ],
    engineTitle: 'Míralo en acción',
    engineLead: 'Retos ficticios, un solo método. Repite cualquier paso o lee el análisis completo.',
    principlesTitle: 'Principios',
    principles: [
      { title: 'El criterio es humano.', text: 'La IA redacta, compara y pone a prueba. Yo decido qué importa y asumo la decisión.' },
      { title: 'Cada afirmación se verifica.', text: 'Todo lo que impulsa una decisión se rastrea a datos o a una conversación real, nunca a una frase segura de sí misma.' },
      { title: 'Mostrar el trabajo.', text: 'Los equipos ven el razonamiento, los supuestos y qué me haría cambiar de opinión.' },
      { title: 'Construir, no solo aconsejar.', text: 'Cuando una herramienta ayuda, la construyo. Este sitio y su Lab son ejemplos.' },
    ],
    builtTitle: 'Este sitio',
    builtText:
      'Diseñé y construí este sitio con Claude Code, desde la primera idea hasta su publicación. El Strategy Engine, las herramientas del Lab y los dos idiomas corren con código escrito con IA bajo mi dirección.',
  },
};

/* ------------------------------------------------------------------ */
/* Selected work (anonymized)                                          */
/* ------------------------------------------------------------------ */

export interface WorkStory {
  id: string;
  area: string;
  title: string;
  summary: string;
  body: string[];
}

export const work: Localized<{
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  stories: WorkStory[];
}> = {
  en: {
    metaTitle: 'Selected work | Alberto Drucker',
    metaDescription: 'Projects in applied AI, strategy and innovation, told without client names.',
    title: 'Selected work',
    lead: 'Real projects, told without client names. Each one shows a different part of how I work.',
    stories: [
      {
        id: 'automation',
        area: 'Applied AI',
        title: 'Taking the busywork out of a property management company',
        summary: 'Mapping how a small team runs its operation, then automating the repetitive parts with AI.',
        body: [
          'A small property management company was running on email, spreadsheets and the memory of a few people. Too much depended on someone remembering to follow up.',
          'I mapped the workflows end to end, found where time was leaking and built AI automations for the repetitive steps, so the team can spend its time on tenants and owners instead of paperwork.',
        ],
      },
      {
        id: 'medtech',
        area: 'Strategy',
        title: 'Reading an emerging medtech market for a Western device maker',
        summary: 'A landscape scan of Chinese players in prostate diagnosis and treatment, narrowed to the technology worth watching.',
        body: [
          'A Western medical device company wanted to understand where Chinese players are moving in prostate biopsy and treatment, a market that changes fast and is hard to read from the outside.',
          'Our team scanned the landscape across MRI guided intervention, localized drug delivery and minimally invasive therapies, then focused the client on the single technology with the clearest strategic implications.',
        ],
      },
      {
        id: 'innovation',
        area: 'Innovation',
        title: 'Making innovation a method inside a creative agency',
        summary: 'Bringing product and service design thinking into brand and campaign work.',
        body: [
          'As head of innovation at a creative agency in Monterrey, my job was to make sure ideas started from real insight and ended in something people could use, not only something people would see.',
          'I brought methods from product and service design into brand and campaign work, and led projects where the brief was a social problem rather than a product. That work taught me how much craft goes into getting a hard message right.',
        ],
      },
    ],
  },
  es: {
    metaTitle: 'Proyectos | Alberto Drucker',
    metaDescription: 'Proyectos de IA aplicada, estrategia e innovación, contados sin nombres de clientes.',
    title: 'Proyectos',
    lead: 'Proyectos reales, contados sin nombres de clientes. Cada uno muestra una parte distinta de cómo trabajo.',
    stories: [
      {
        id: 'automation',
        area: 'IA aplicada',
        title: 'Quitarle el trabajo manual a una administradora de propiedades',
        summary: 'Mapear cómo opera un equipo pequeño y automatizar con IA las partes repetitivas.',
        body: [
          'Una pequeña administradora de propiedades operaba con correos, hojas de cálculo y la memoria de unas cuantas personas. Demasiado dependía de que alguien se acordara de dar seguimiento.',
          'Mapeé los flujos de punta a punta, encontré dónde se perdía el tiempo y construí automatizaciones con IA para los pasos repetitivos, para que el equipo dedique su tiempo a inquilinos y propietarios en lugar de papeleo.',
        ],
      },
      {
        id: 'medtech',
        area: 'Estrategia',
        title: 'Leer un mercado emergente de tecnología médica para un fabricante occidental',
        summary: 'Un mapeo de los jugadores chinos en diagnóstico y tratamiento de próstata, enfocado en la tecnología que más vale la pena seguir.',
        body: [
          'Una empresa occidental de dispositivos médicos quería entender hacia dónde se mueven los jugadores chinos en biopsia y tratamiento de próstata, un mercado que cambia rápido y es difícil de leer desde fuera.',
          'Nuestro equipo mapeó el panorama en intervención guiada por resonancia, liberación localizada de fármacos y terapias de mínima invasión, y enfocó al cliente en la tecnología con las implicaciones estratégicas más claras.',
        ],
      },
      {
        id: 'innovation',
        area: 'Innovación',
        title: 'Convertir la innovación en un método dentro de una agencia creativa',
        summary: 'Llevar el pensamiento de diseño de productos y servicios al trabajo de marca y campañas.',
        body: [
          'Como head of innovation en una agencia creativa de Monterrey, mi trabajo era asegurar que las ideas nacieran de un insight real y terminaran en algo que la gente pudiera usar, no solo en algo que la gente viera.',
          'Llevé métodos de diseño de productos y servicios al trabajo de marca y campañas, y lideré proyectos donde el brief era un problema social y no un producto. Ese trabajo me enseñó cuánto oficio requiere comunicar bien un mensaje difícil.',
        ],
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about: Localized<{
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  paragraphs: string[];
  focusTitle: string;
  focus: string[];
}> = {
  en: {
    metaTitle: 'About | Alberto Drucker',
    metaDescription: 'Engineer by training, innovation lead by trade, strategist by choice.',
    title: 'About',
    lead: 'Engineer by training, innovation lead by trade, strategist by choice.',
    paragraphs: [
      'I grew up in Monterrey, a city that builds things, and trained as an engineer in innovation and development at Tec de Monterrey. That training never left me. I still start by understanding how a system works before deciding what to change.',
      'My work has moved between industry, creative work and strategy. I led innovation at a creative agency in Monterrey, where I learned that an idea is worth little until it reaches the people it was made for, and that a sharp insight beats a big budget.',
      'Today I’m finishing an MBA at Indiana University’s Kelley School of Business, focused on marketing and strategy, and I lead AI and applied technology for the school’s tech club. I use AI every day as a working partner for research, analysis, writing and building. This site is one example: I built it with Claude Code.',
      'I’m moving back to Monterrey to do this work in Mexico. Off the clock, I’m learning to DJ.',
    ],
    focusTitle: 'Where I add the most value',
    focus: [
      'Marketing and growth strategy',
      'Strategic planning and new business models',
      'Innovation, product and service design',
      'Applied AI and process automation',
    ],
  },
  es: {
    metaTitle: 'Sobre mí | Alberto Drucker',
    metaDescription: 'Ingeniero de formación, líder de innovación de oficio, estratega por convicción.',
    title: 'Sobre mí',
    lead: 'Ingeniero de formación, líder de innovación de oficio, estratega por convicción.',
    paragraphs: [
      'Crecí en Monterrey, una ciudad que construye cosas, y estudié Ingeniería en Innovación y Desarrollo en el Tec de Monterrey. Esa formación nunca se fue. Todavía empiezo por entender cómo funciona un sistema antes de decidir qué cambiar.',
      'Mi trabajo se ha movido entre la industria, el trabajo creativo y la estrategia. Lideré innovación en una agencia creativa de Monterrey, donde aprendí que una idea vale poco hasta que llega a las personas para las que fue hecha, y que un buen insight le gana a un gran presupuesto.',
      'Hoy estoy terminando un MBA en Kelley School of Business de Indiana University, enfocado en marketing y estrategia, y lidero IA y tecnología aplicada en el club de tecnología de la escuela. Uso IA todos los días como compañera de trabajo para investigar, analizar, escribir y construir. Este sitio es un ejemplo: lo construí con Claude Code.',
      'Estoy regresando a Monterrey para hacer este trabajo en México. Fuera de la oficina, estoy aprendiendo a ser DJ.',
    ],
    focusTitle: 'Donde más valor aporto',
    focus: [
      'Estrategia de marketing y crecimiento',
      'Planeación estratégica y nuevos modelos de negocio',
      'Innovación y diseño de productos y servicios',
      'IA aplicada y automatización de procesos',
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  // TODO(Alberto): confirm which email and LinkedIn URL to publish.
  email: '',
  linkedin: '',
};
