import type { Localized } from '../i18n/ui';

/**
 * Case studies for Selected work. Built from Alberto's own STAR stories and projects.
 * Rules: real outcomes and numbers are fine; never name an employer, client or brand. Industries only.
 */
export interface CaseStudy {
  id: string;
  /** Lab slug of a live demo for this case, if there is one. */
  demo?: string;
  area: string;
  title: string;
  summary: string;
  context: string;
  stats?: { v: string; l: string }[];
  challenge: string;
  approach: string[];
  outcome?: string;
  learned?: string;
}

export const caseLabels: Localized<{ challenge: string; approach: string; outcome: string; learned: string; demo: string }> = {
  en: { challenge: 'The challenge', approach: 'What I did', outcome: 'What happened', learned: 'What I took from it', demo: 'Open the working demo' },
  es: { challenge: 'El reto', approach: 'Lo que hice', outcome: 'Lo que pasó', learned: 'Lo que me llevo', demo: 'Abrir el demo funcionando' },
};

/** Off until Alberto approves the wording of each "What I took from it" line. */
export const SHOW_LEARNED = false;

export const caseStudies: Localized<CaseStudy[]> = {
  en: [
    {
      id: 'property',
      demo: 'rental-ops',
      area: 'Systems I built',
      title: 'An operating system for a property manager',
      summary:
        'A small family team managed homes for about two dozen owners on email, spreadsheets and memory. I built them a platform where the software prepares the work and a person approves it.',
      context: 'Property management company in a Midwest college town, 2026',
      stats: [
        { v: '4', l: 'connected apps: public site, team workspace, renter portal, owner portal' },
        { v: '31', l: 'steps of their operation covered in the end to end demo' },
        { v: '0', l: 'messages or payments that go out without a person approving' },
      ],
      challenge:
        'The team rented homes for about two dozen owner clients plus their own properties, mostly to students. Their off the shelf property software produced statements owners could not read, showings were typed into two calendars by hand, renewals with students dragged on for months, and every late fee, payout and repair depended on someone remembering.',
      approach: [
        'Interviewed the owners and turned their answers into rules: the sections of their own lease, fees, the repair limit agreed with each owner, and which messages may ever send on their own.',
        'Designed four separate apps, each with its own sign in. A public site for renters and owners. A team workspace ordered by their priorities, rent and money first. A renter portal with a text code instead of a password and rent split between roommates. An owner portal that explains every statement in one sentence.',
        'Built the automation around one rule: the system drafts, a person approves. Maintenance requests get a priority and a vendor while the renter is still typing. A bills inbox reads vendor invoices and splits them across properties. Owner payouts around the 10th wait for approval.',
        'Covered the paperwork end to end: leases generated section by section from their template, e-signature from a text link, the state deposit statement within 45 days, notices by certified mail, and a three step renewal flow that asks owners first, then renters, then sends the offer.',
      ],
      outcome:
        'A working prototype built on their real forms, fees and listings, covering 31 steps of how they run the business, now heading into a pilot with the team. The version on this site uses an invented company, people and homes, so you can try it without seeing anyone’s data.',
      learned:
        'The hard part was not the software. It was writing down rules that lived in one person’s head, and deciding with her which ones a machine should never apply alone.',
    },
    {
      id: 'premium-launch',
      area: 'Innovation and go to market',
      title: 'Building an innovation practice, and launching a premium brand with it',
      summary:
        'I was the first hire of a new innovation department. I had it running in four months, and its first big project took a client into the premium mattress market after five years of failed attempts.',
      context: 'Innovation and marketing consulting firm, Monterrey, 2020 to 2021',
      stats: [
        { v: '4 months', l: 'to stand up the innovation department' },
        { v: '1,000%', l: 'increase in revenue per client for the new brand' },
        { v: '8 months', l: 'to pay back the full investment' },
      ],
      challenge:
        'The firm wanted a customer centered innovation practice, with a tight budget and a junior team. At the same time, a client had spent five years trying to enter the premium mattress market without success.',
      approach: [
        'Worked with the leadership team on the department’s strategy, value proposition and processes, and had it operating in four months.',
        'Led the research behind the market entry: who buys premium sleep, what they distrust, and where the decision really happens.',
        'Created a new premium brand and a digital in store experience, and led a team of 10 through product selection, supplier negotiations and design.',
      ],
      outcome:
        'The new brand increased revenue per client by 1,000% and paid back the full investment in eight months. A second store opened within a year, with plans for national expansion.',
      learned: 'You can build a team and its method at the same time, as long as the first project proves the method works.',
    },
    {
      id: 'pitch',
      area: 'Strategy and leadership',
      title: 'Winning 14 of 14 brands, then scaling to deliver them',
      summary:
        'My first time leading a team across departments: a pitch for 14 food brands in six Latin American countries. We won all of them, and then the firm had to double in size in three months.',
      context: 'Innovation and marketing consulting firm, 2022',
      stats: [
        { v: '14 of 14', l: 'brands won in one pitch' },
        { v: '6', l: 'countries' },
        { v: '3 months', l: 'to double the team, fully remote' },
      ],
      challenge:
        'A food and consumer goods group put 14 of its brands in six countries up for review. Each brand needed its own strategy, and the pitch team came from departments that had never worked as one.',
      approach: [
        'Partnered with the heads of strategic and digital planning to build consumer personas and digital insights for every brand.',
        'Ran regular briefings with the creative directors so 14 different stories kept one point of view.',
        'After the win, joined the committee with HR and leadership that mapped the firm’s core processes with the COO, and helped recruit a fully remote team on deadline.',
      ],
      outcome:
        'All 14 brands won. The firm doubled its headcount in three months and recruited internationally for the first time. The processes we designed are still how it operates.',
      learned: 'Influence without authority comes from rhythm: the same brief, the same review, every week, until everyone argues about the work and not about the process.',
    },
    {
      id: 'pipeline',
      area: 'Product strategy and innovation',
      title: 'A five year product pipeline for a kids’ brand, and a premium line for a regional one',
      summary:
        'Two consumer goods clients, one method: start from what consumers want and what the plants can make, then design the portfolio in between.',
      context: 'Innovation and marketing consulting firm, 2022 to 2024',
      stats: [
        { v: '+600%', l: 'products in the kids’ brand roadmap' },
        { v: '4+', l: 'new categories' },
        { v: '7+', l: 'plants coordinated' },
      ],
      challenge:
        'A major kids’ cookie brand had spare capacity in its plants across Latin America and needed a pipeline for 2024 to 2029. Separately, a Mexican cheese company wanted to grow in the north of the country and open an accessible premium line.',
      approach: [
        'For the cookie brand, ran deep consumer research and a full design thinking cycle, then matched each concept to what more than seven plants could actually produce.',
        'Built the five year roadmap and the prototypes, with demand forecasting behind each launch.',
        'For the cheese brand, ran four focus groups and more than 20 consumer interviews, and designed a premium line of about eight products with two chefs and two sommeliers.',
      ],
      outcome:
        'The roadmap took the cookie brand to six times as many products across four new categories, with the first launch in the second quarter of 2024. The cheese brand gained visibility on supermarket shelves and its premium category was set to launch.',
      learned: 'The best innovation briefs start from a constraint. Spare plant capacity told us more than any trend report.',
    },
    {
      id: 'ai-ar',
      area: 'Applied AI and new business',
      title: 'An AI recipe assistant, and a new AR and CGI business unit',
      summary:
        'Two bets on new technology: one that put consumer data into product decisions, and one that became its own line of revenue.',
      context: 'Innovation and marketing consulting firm, 2023 to 2025',
      stats: [
        { v: '25%', l: 'shorter product design process' },
        { v: '2', l: 'countries at launch' },
        { v: '50+', l: 'projects in the new unit’s first year' },
      ],
      challenge:
        'A major poultry brand wanted to engage consumers around its ready to heat products and learn what they actually cook. At the same time, demand for AR and CGI advertising was rising and the firm could not offer it.',
      approach: [
        'Led the design of an AI assistant that suggests personalized recipes, with visuals adapted to each country’s food culture.',
        'Connected what consumers asked for to a real time dashboard the product team used to choose new flavors.',
        'Designed the structure and processes of a new AR and CGI unit inside the firm’s creative and digital teams, partnered with a U.S. production studio, and owned its P&L.',
      ],
      outcome:
        'The assistant launched in two countries, helped choose three frozen product flavors and shortened the product design process by 25%. The product it shaped became the brand’s top seller. The AR and CGI unit closed more than 50 projects in its first year, including a monthly retainer with an international agronomy company, and opened a capability relevant to 40% of the client base.',
      learned: 'AI paid off when it answered a product question. It was never the product itself.',
    },
    {
      id: 'medtech',
      area: 'Strategy',
      title: 'Reading an emerging medtech market for a Western device maker',
      summary: 'A landscape scan of Chinese players in prostate diagnosis and treatment, narrowed to the technology worth watching.',
      context: 'MBA consulting project, 2026',
      challenge:
        'A Western medical device company wanted to understand where Chinese players are moving in prostate biopsy and treatment, a market that changes fast and is hard to read from the outside.',
      approach: [
        'Our team scanned the landscape across MRI guided intervention, localized drug delivery and minimally invasive therapies.',
        'Then we narrowed the client’s attention to the single technology with the clearest strategic implications for them.',
      ],
    },
  ],
  es: [
    {
      id: 'property',
      demo: 'rental-ops',
      area: 'Sistemas que construí',
      title: 'Un sistema operativo para una administradora de propiedades',
      summary:
        'Un pequeño equipo familiar administraba casas de unos veinticuatro propietarios con correos, hojas de cálculo y memoria. Les construí una plataforma donde el software prepara el trabajo y una persona lo aprueba.',
      context: 'Administradora de propiedades en una ciudad universitaria del Medio Oeste de Estados Unidos, 2026',
      stats: [
        { v: '4', l: 'apps conectadas: sitio público, espacio del equipo, portal de inquilinos, portal de propietarios' },
        { v: '31', l: 'pasos de su operación cubiertos en el demo de punta a punta' },
        { v: '0', l: 'mensajes o pagos que salen sin que una persona los apruebe' },
      ],
      challenge:
        'El equipo rentaba casas de unos veinticuatro propietarios además de las suyas, sobre todo a estudiantes. Su software de administración generaba estados de cuenta que los propietarios no entendían, las visitas se capturaban a mano en dos calendarios, las renovaciones con estudiantes se alargaban meses y cada recargo, pago a propietarios y reparación dependía de que alguien se acordara.',
      approach: [
        'Entrevisté a los dueños y convertí sus respuestas en reglas: las secciones de su propio contrato, las comisiones, el límite de reparación acordado con cada propietario y qué mensajes pueden enviarse solos, si es que alguno.',
        'Diseñé cuatro apps separadas, cada una con su propio acceso. Un sitio público para inquilinos y propietarios. Un espacio de trabajo ordenado según sus prioridades, primero la renta y el dinero. Un portal de inquilinos con código por mensaje en lugar de contraseña y la renta dividida entre roomies. Un portal de propietarios que explica cada estado de cuenta en una frase.',
        'Construí la automatización alrededor de una regla: el sistema redacta, una persona aprueba. Las solicitudes de mantenimiento reciben prioridad y proveedor mientras el inquilino todavía escribe. Una bandeja de facturas lee las de los proveedores y las reparte entre propiedades. Los pagos a propietarios alrededor del día 10 esperan aprobación.',
        'Cubrí el papeleo de principio a fin: contratos generados sección por sección desde su plantilla, firma electrónica desde una liga por mensaje, el estado de depósito que exige el estado en 45 días, avisos por correo certificado y un flujo de renovación de tres pasos que pregunta primero a los propietarios, luego a los inquilinos y después envía la oferta.',
      ],
      outcome:
        'Un prototipo funcionando, construido sobre sus formatos, comisiones y casas reales, que cubre 31 pasos de cómo operan el negocio, y que va en camino a un piloto con el equipo. La versión de este sitio usa una empresa, personas y casas inventadas, para que puedas probarla sin ver datos de nadie.',
      learned:
        'Lo difícil no fue el software. Fue poner por escrito reglas que vivían en la cabeza de una persona y decidir con ella cuáles nunca debería aplicar una máquina sola.',
    },
    {
      id: 'premium-launch',
      area: 'Innovación y salida al mercado',
      title: 'Construir un área de innovación y lanzar con ella una marca premium',
      summary:
        'Fui la primera contratación de un área de innovación nueva. La puse en marcha en cuatro meses, y su primer gran proyecto llevó a un cliente al mercado de colchones premium después de cinco años de intentos fallidos.',
      context: 'Consultora de innovación y marketing, Monterrey, 2020 a 2021',
      stats: [
        { v: '4 meses', l: 'para poner en marcha el área de innovación' },
        { v: '1,000%', l: 'más ingreso por cliente para la nueva marca' },
        { v: '8 meses', l: 'para recuperar toda la inversión' },
      ],
      challenge:
        'La firma quería una práctica de innovación centrada en el cliente, con presupuesto ajustado y un equipo junior. Al mismo tiempo, un cliente llevaba cinco años intentando entrar al mercado de colchones premium sin lograrlo.',
      approach: [
        'Trabajé con la dirección en la estrategia, la propuesta de valor y los procesos del área, y la tuve operando en cuatro meses.',
        'Lideré la investigación detrás de la entrada al mercado: quién compra descanso premium, de qué desconfía y dónde se toma de verdad la decisión.',
        'Creé una nueva marca premium y una experiencia digital en tienda, y dirigí a un equipo de 10 personas en la selección de producto, la negociación con proveedores y el diseño.',
      ],
      outcome:
        'La nueva marca aumentó 1,000% el ingreso por cliente y recuperó toda la inversión en ocho meses. Se abrió una segunda tienda en menos de un año, con planes de expansión nacional.',
      learned: 'Se puede construir un equipo y su método al mismo tiempo, siempre que el primer proyecto demuestre que el método funciona.',
    },
    {
      id: 'pitch',
      area: 'Estrategia y liderazgo',
      title: 'Ganar 14 de 14 marcas, y luego crecer para atenderlas',
      summary:
        'La primera vez que lideré un equipo de varias áreas: un pitch para 14 marcas de alimentos en seis países de Latinoamérica. Ganamos todas, y la firma tuvo que duplicar su tamaño en tres meses.',
      context: 'Consultora de innovación y marketing, 2022',
      stats: [
        { v: '14 de 14', l: 'marcas ganadas en un solo pitch' },
        { v: '6', l: 'países' },
        { v: '3 meses', l: 'para duplicar el equipo, totalmente remoto' },
      ],
      challenge:
        'Un grupo de alimentos y consumo puso a concurso 14 de sus marcas en seis países. Cada marca necesitaba su propia estrategia, y el equipo del pitch venía de áreas que nunca habían trabajado como una sola.',
      approach: [
        'Trabajé con los líderes de planeación estratégica y digital para construir buyer personas e insights digitales para cada marca.',
        'Dirigí sesiones constantes con los directores creativos para que 14 historias distintas mantuvieran un solo punto de vista.',
        'Después de ganar, formé parte del comité con recursos humanos y la dirección que mapeó los procesos clave de la firma con el COO, y ayudé a reclutar un equipo totalmente remoto a tiempo.',
      ],
      outcome:
        'Ganamos las 14 marcas. La firma duplicó su plantilla en tres meses y reclutó fuera del país por primera vez. Los procesos que diseñamos siguen siendo la forma en que opera.',
      learned: 'Influir sin autoridad depende del ritmo: el mismo brief, la misma revisión, cada semana, hasta que todos discuten el trabajo y no el proceso.',
    },
    {
      id: 'pipeline',
      area: 'Estrategia de producto e innovación',
      title: 'Un pipeline de producto a cinco años para una marca infantil, y una línea premium para una regional',
      summary:
        'Dos clientes de consumo, un mismo método: partir de lo que quiere el consumidor y de lo que pueden hacer las plantas, y diseñar el portafolio en medio.',
      context: 'Consultora de innovación y marketing, 2022 a 2024',
      stats: [
        { v: '+600%', l: 'productos en el roadmap de la marca infantil' },
        { v: '4+', l: 'categorías nuevas' },
        { v: '7+', l: 'plantas coordinadas' },
      ],
      challenge:
        'Una importante marca de galletas infantiles tenía capacidad sobrante en sus plantas de Latinoamérica y necesitaba un pipeline para 2024 a 2029. Por otro lado, una empresa mexicana de quesos quería crecer en el norte del país y abrir una línea premium accesible.',
      approach: [
        'Para la marca de galletas, hice investigación profunda del consumidor y un ciclo completo de design thinking, y luego empaté cada concepto con lo que más de siete plantas podían producir de verdad.',
        'Construí el roadmap a cinco años y los prototipos, con pronóstico de demanda detrás de cada lanzamiento.',
        'Para la marca de quesos, hice cuatro sesiones de grupo y más de 20 entrevistas con consumidores, y diseñé una línea premium de unos ocho productos con dos chefs y dos sommeliers.',
      ],
      outcome:
        'El roadmap llevó a la marca de galletas a tener seis veces más productos en cuatro categorías nuevas, con el primer lanzamiento en el segundo trimestre de 2024. La marca de quesos ganó presencia en los anaqueles del supermercado y su categoría premium quedó lista para lanzarse.',
      learned: 'Los mejores briefs de innovación empiezan con una restricción. La capacidad sobrante de las plantas nos dijo más que cualquier reporte de tendencias.',
    },
    {
      id: 'ai-ar',
      area: 'IA aplicada y nuevos negocios',
      title: 'Un asistente de recetas con IA, y una nueva unidad de negocio de AR y CGI',
      summary:
        'Dos apuestas en tecnología nueva: una que llevó datos del consumidor a las decisiones de producto, y otra que se volvió su propia línea de ingreso.',
      context: 'Consultora de innovación y marketing, 2023 a 2025',
      stats: [
        { v: '25%', l: 'menos tiempo en el proceso de diseño de producto' },
        { v: '2', l: 'países en el lanzamiento' },
        { v: '50+', l: 'proyectos en el primer año de la nueva unidad' },
      ],
      challenge:
        'Una importante marca avícola quería conectar con los consumidores alrededor de sus productos listos para calentar y entender qué cocinan de verdad. Al mismo tiempo, crecía la demanda de publicidad con AR y CGI y la firma no podía ofrecerla.',
      approach: [
        'Lideré el diseño de un asistente con IA que sugiere recetas personalizadas, con visuales adaptados a la cultura gastronómica de cada país.',
        'Conecté lo que pedían los consumidores con un tablero en tiempo real que el equipo de producto usó para elegir nuevos sabores.',
        'Diseñé la estructura y los procesos de una nueva unidad de AR y CGI dentro de los equipos creativo y digital de la firma, cerré una alianza con un estudio de producción de Estados Unidos y fui responsable de su P&L.',
      ],
      outcome:
        'El asistente se lanzó en dos países, ayudó a elegir tres sabores de producto congelado y redujo 25% el proceso de diseño de producto. El producto que ayudó a definir se volvió el más vendido de la marca. La unidad de AR y CGI cerró más de 50 proyectos en su primer año, incluida una iguala mensual con una empresa agronómica internacional, y abrió una capacidad relevante para el 40% de la cartera de clientes.',
      learned: 'La IA rindió cuando respondió una pregunta de producto. Nunca fue el producto en sí.',
    },
    {
      id: 'medtech',
      area: 'Estrategia',
      title: 'Leer un mercado emergente de tecnología médica para un fabricante occidental',
      summary: 'Un mapeo de los jugadores chinos en diagnóstico y tratamiento de próstata, enfocado en la tecnología que vale la pena seguir.',
      context: 'Proyecto de consultoría del MBA, 2026',
      challenge:
        'Una empresa occidental de dispositivos médicos quería entender hacia dónde se mueven los jugadores chinos en biopsia y tratamiento de próstata, un mercado que cambia rápido y es difícil de leer desde fuera.',
      approach: [
        'Nuestro equipo mapeó el panorama en intervención guiada por resonancia, liberación localizada de fármacos y terapias de mínima invasión.',
        'Después enfocamos la atención del cliente en la única tecnología con las implicaciones estratégicas más claras para ellos.',
      ],
    },
  ],
};
