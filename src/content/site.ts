import { caseStudies, type CaseStudy } from './cases';
import type { Localized } from '../i18n/ui';

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home: Localized<{
  metaTitle: string;
  metaDescription: string;
  heroLines: string[];
  heroIntro: string;
  ctaBuilt: string;
  ctaContact: string;
  heroNote: string;
  systemsTitle: string;
  systemsLead: string;
  systems: { slug: string; points: string[] }[];
  openDemo: string;
  engineTitle: string;
  toolsTitle: string;
  toolsLead: string;
  toolsLink: string;
  featured: string[];
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
      'Strategist from Monterrey working across marketing, strategy and applied AI. Working systems and free tools you can use with your own numbers.',
    heroLines: ['Strategy that ships.', 'Applied AI for business.'],
    heroIntro:
      'I’m a strategist from Monterrey with an engineer’s training and a designer’s habits. I turn messy business questions into clear decisions, and then into systems people actually use. AI gets me there faster. The judgment stays mine.',
    ctaBuilt: 'See what I have built',
    ctaContact: 'Get in touch',
    heroNote: 'Everything on this site works. Go ahead, try it.',
    systemsTitle: 'Systems I built',
    systemsLead: 'Three working products, not slides. Open them and use them.',
    systems: [
      { slug: 'rental-ops', points: ['Reads a repair request and sets the priority', 'Drafts every message, a person approves', 'Starts and stops late fees by the lease'] },
      { slug: 'networking-crm', points: ['Tells you who to contact this week and why', 'Keeps every promise visible until it is done', 'Runs in your browser, your data stays yours'] },
      { slug: 'ats-scorer', points: ['Scores a resume the way three kinds of hiring systems would', 'Catches synonyms and Spanish versus English gaps', 'Flags the screen out questions before you apply'] },
    ],
    openDemo: 'Open the live demo',
    engineTitle: 'How I think through a strategy question',
    toolsTitle: 'Tools for your business',
    toolsLead: 'Each one answers a question I hear from owners and commercial teams. Free to use, with your own numbers.',
    toolsLink: 'See all {n} tools in the Lab',
    featured: ['promo-roi', 'pricing-breakeven', 'funnel-leak', 'order-channels', 'ai-readiness', 'launch-planner'],
    engineIntro:
      'Below is a replay of how I work a strategy question with AI. The draft in the main column comes from my AI workflow. The notes in the margin are my judgment.',
    workTitle: 'Selected work',
    workLead: 'Real projects, told without client names.',
    workLink: 'See all work',
    aboutTitle: 'About',
    aboutTeaser:
      'Engineer, then the first hire of an innovation department I went on to lead for five years. I like building what does not exist yet, and I start every time with the customer.',
    aboutLink: 'More about me',
    methodLink: 'See the full method',
  },
  es: {
    metaTitle: 'Alberto Drucker | Estrategia que se ejecuta',
    metaDescription:
      'Estratega regiomontano en marketing, estrategia e IA aplicada. Sistemas que funcionan y herramientas gratuitas para usar con tus propios números.',
    heroLines: ['Estrategia que se ejecuta.', 'IA aplicada al negocio.'],
    heroIntro:
      'Soy estratega, regiomontano, con formación de ingeniero y hábitos de diseñador. Convierto preguntas de negocio complejas en decisiones claras, y luego en sistemas que la gente sí usa. La IA me ayuda a llegar más rápido. El criterio sigue siendo mío.',
    ctaBuilt: 'Mira lo que he construido',
    ctaContact: 'Contáctame',
    heroNote: 'Todo en este sitio funciona. Pruébalo.',
    systemsTitle: 'Sistemas que construí',
    systemsLead: 'Tres productos que funcionan, no presentaciones. Ábrelos y úsalos.',
    systems: [
      { slug: 'rental-ops', points: ['Lee una solicitud de reparación y define la prioridad', 'Redacta cada mensaje, una persona aprueba', 'Inicia y detiene recargos según el contrato'] },
      { slug: 'networking-crm', points: ['Te dice a quién contactar esta semana y por qué', 'Mantiene cada compromiso visible hasta cumplirlo', 'Corre en tu navegador, tus datos son tuyos'] },
      { slug: 'ats-scorer', points: ['Evalúa un CV como lo harían tres tipos de sistemas de reclutamiento', 'Detecta sinónimos y brechas entre español e inglés', 'Marca los filtros antes de que apliques'] },
    ],
    openDemo: 'Abrir la demo',
    engineTitle: 'Cómo pienso una pregunta estratégica',
    toolsTitle: 'Herramientas para tu negocio',
    toolsLead: 'Cada una responde una pregunta que escucho de dueños y equipos comerciales. Gratis, con tus propios números.',
    toolsLink: 'Ver las {n} herramientas del Lab',
    featured: ['promo-roi', 'pricing-breakeven', 'funnel-leak', 'order-channels', 'ai-readiness', 'launch-planner'],
    engineIntro:
      'Abajo puedes ver cómo trabajo una pregunta estratégica con IA. El borrador de la columna principal sale de mi flujo de trabajo con IA. Las notas al margen son mi criterio.',
    workTitle: 'Proyectos',
    workLead: 'Proyectos reales, contados sin nombres de clientes.',
    workLink: 'Ver todo el trabajo',
    aboutTitle: 'Sobre mí',
    aboutTeaser:
      'Ingeniero, luego la primera contratación de un área de innovación que dirigí durante cinco años. Me gusta construir lo que todavía no existe, y siempre empiezo por el cliente.',
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
      'Nothing here is a mockup. The Strategy Engine and every tool in the Lab work, in English and in Spanish. Open one and put your own numbers in.',
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
      'Nada de lo que ves aquí es una maqueta. El Strategy Engine y cada herramienta del Lab funcionan, en español y en inglés. Abre una y mete tus propios números.',
  },
};

/* ------------------------------------------------------------------ */
/* Selected work (anonymized)                                          */
/* ------------------------------------------------------------------ */

export interface WorkStory {
  id: string;
  /** Lab slug of a live demo for this story, if there is one. */
  demo?: string;
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
  stories: CaseStudy[];
}> = {
  en: {
    metaTitle: 'Selected work | Alberto Drucker',
    metaDescription: 'Projects in applied AI, strategy and innovation, told without client names.',
    title: 'Selected work',
    lead: 'Real projects and real outcomes. Clients and employers stay unnamed; the industries and the work are all here.',
    stories: caseStudies.en,
  },
  es: {
    metaTitle: 'Proyectos | Alberto Drucker',
    metaDescription: 'Proyectos de IA aplicada, estrategia e innovación, contados sin nombres de clientes.',
    title: 'Proyectos',
    lead: 'Proyectos reales, contados sin nombres de clientes. Cada uno muestra una parte distinta de cómo trabajo.',
    stories: caseStudies.es,
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
  focus: { title: string; text: string }[];
  pathTitle: string;
  path: { title: string; text: string }[];
  cta: string;
  portraitAlt: string;
  outsideTitle: string;
  outside: { key: string; label: string }[];
  photoSoon: string;
}> = {
  en: {
    metaTitle: 'About | Alberto Drucker',
    metaDescription: 'Engineer turned head of innovation turned strategist. I build things that did not exist yet, starting from what customers need.',
    title: 'About',
    lead: 'I build things that did not exist yet, starting from what customers actually need.',
    paragraphs: [
      'I was born in Mexico City and grew up in Monterrey. I studied Innovation and Development Engineering at Tec de Monterrey and started my career in manufacturing, designing buses and then redesigning the supply process for two of them.',
      'In 2020 I joined an innovation and marketing consulting firm as the first person in its new innovation department. Over five years I built that practice and then led it as head of innovation, with teams of more than 20 people working on new products, brand strategy, research and new business lines for 18+ brands in four countries.',
      'Some of the work I’m proudest of: a premium brand that paid back its investment in eight months, a pitch where we won 14 of 14 brands, a five year roadmap that gave a kids’ brand seven times as many products, and the strategy for a mental health and suicide prevention campaign that reached more than a million people.',
      'Now I’m finishing an MBA in marketing at Indiana University’s Kelley School of Business, where I’m VP of AI and Applied Technology at the Tech Club. I build my own tools, like the systems on this site, because a working prototype settles a discussion faster than a deck.',
      'I’m moving back to Monterrey to do this work in Mexico.',
    ],
    focusTitle: 'Where I add the most value',
    focus: [
      { title: 'Building from zero', text: 'Departments, business units and products that did not exist, set up fast and run with a clear method.' },
      { title: 'From insight to launch', text: 'Research with real customers turned into products, positioning and go to market plans that sell.' },
      { title: 'Strategic planning', text: 'Turning a broad ambition into a few choices, a sequence and measures a team can run.' },
      { title: 'Applied AI', text: 'Finding where AI pays off, then building the workflow myself, with a person in control.' },
    ],
    pathTitle: 'How I got here',
    path: [
      { title: 'Engineer', text: 'Product design and process improvement in manufacturing. I still start by understanding how a system works.' },
      { title: 'Head of innovation', text: 'First hire of an innovation department at a consulting firm, then its lead, from 2020 to 2025.' },
      { title: 'MBA and builder', text: 'Marketing and strategy at Kelley, and the working systems you can try on this site.' },
    ],
    cta: 'Let’s talk',
    portraitAlt: 'Alberto Drucker',
    outsideTitle: 'Outside work',
    outside: [
      { key: 'drums', label: 'Drums, for more than 15 years' },
      { key: 'tennis', label: 'Tennis, since I was a kid' },
      { key: 'padel', label: 'Padel and pickleball' },
      { key: 'ski', label: 'Skiing' },
    ],
    photoSoon: 'Photo',
  },
  es: {
    metaTitle: 'Sobre mí | Alberto Drucker',
    metaDescription: 'Ingeniero, head of innovation y estratega. Construyo cosas que todavía no existen, a partir de lo que el cliente necesita.',
    title: 'Sobre mí',
    lead: 'Construyo cosas que todavía no existen, a partir de lo que el cliente de verdad necesita.',
    paragraphs: [
      'Nací en la Ciudad de México y crecí en Monterrey. Estudié Ingeniería en Innovación y Desarrollo en el Tec de Monterrey y empecé mi carrera en manufactura, diseñando autobuses y después rediseñando el proceso de abastecimiento de dos modelos.',
      'En 2020 entré a una consultora de innovación y marketing como la primera persona de su nueva área de innovación. En cinco años construí esa práctica y luego la dirigí como head of innovation, con equipos de más de 20 personas trabajando en nuevos productos, estrategia de marca, investigación y nuevas líneas de negocio para más de 18 marcas en cuatro países.',
      'Algunos de los proyectos de los que más me enorgullezco: una marca premium que recuperó su inversión en ocho meses, un pitch en el que ganamos 14 de 14 marcas, un roadmap a cinco años que le dio a una marca infantil siete veces más productos y la estrategia de una campaña de salud mental y prevención del suicidio que llegó a más de un millón de personas.',
      'Hoy estoy terminando un MBA en marketing en Kelley School of Business de Indiana University, donde soy VP de IA y Tecnología Aplicada del Tech Club. Construyo mis propias herramientas, como los sistemas de este sitio, porque un prototipo que funciona resuelve una discusión más rápido que una presentación.',
      'Estoy regresando a Monterrey para hacer este trabajo en México.',
    ],
    focusTitle: 'Donde más valor aporto',
    focus: [
      { title: 'Construir desde cero', text: 'Áreas, unidades de negocio y productos que no existían, puestos en marcha rápido y con un método claro.' },
      { title: 'Del insight al lanzamiento', text: 'Investigación con clientes reales convertida en productos, posicionamiento y planes de salida al mercado que venden.' },
      { title: 'Planeación estratégica', text: 'Convertir una ambición amplia en pocas decisiones, una secuencia y métricas que un equipo pueda operar.' },
      { title: 'IA aplicada', text: 'Encontrar dónde la IA sí paga y construir el flujo yo mismo, con una persona al mando.' },
    ],
    pathTitle: 'Cómo llegué aquí',
    path: [
      { title: 'Ingeniero', text: 'Diseño de producto y mejora de procesos en manufactura. Sigo empezando por entender cómo funciona un sistema.' },
      { title: 'Head of innovation', text: 'Primera contratación del área de innovación de una consultora, y luego su líder, de 2020 a 2025.' },
      { title: 'MBA y constructor', text: 'Marketing y estrategia en Kelley, y los sistemas funcionando que puedes probar en este sitio.' },
    ],
    cta: 'Platiquemos',
    portraitAlt: 'Alberto Drucker',
    outsideTitle: 'Fuera del trabajo',
    outside: [
      { key: 'drums', label: 'Batería y percusiones, desde hace más de 15 años' },
      { key: 'tennis', label: 'Tenis, desde niño' },
      { key: 'padel', label: 'Pádel y pickleball' },
      { key: 'ski', label: 'Esquí' },
    ],
    photoSoon: 'Foto',
  },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

/**
 * Contact settings. The email address itself is never shown on the site:
 * the form delivers to it through Web3Forms.
 * - formKey: the public access key Web3Forms emails to Alberto. Safe to keep in the code.
 * - booking: link to a scheduling page (Calendly, Google Calendar). Leave empty to hide the button.
 * - linkedin: full profile URL. Leave empty to hide the link.
 */
export const contact = {
  formKey: 'edc0bc55-4b10-445c-873b-cad962a335e8',
  booking: '',
  linkedin: 'https://www.linkedin.com/in/albertodrucker/',
};
