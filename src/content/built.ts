import type { Localized } from '../i18n/ui';

export const built: Localized<{
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  stats: { pages: string; tools: string; languages: string; aiCalls: string };
  splitTitle: string;
  split: { title: string; text: string }[];
  timelineTitle: string;
  timeline: { when: string; title: string; text: string }[];
  callsTitle: string;
  callsLead: string;
  calls: { title: string; text: string }[];
  brokeTitle: string;
  brokeLead: string;
  broke: { what: string; fix: string }[];
  adviceTitle: string;
  advice: string[];
}> = {
  en: {
    metaTitle: 'Built in public | Alberto Drucker',
    metaDescription: 'How this site was built with Claude Code: who decided what, what broke and what I would tell someone trying it.',
    title: 'Built in public',
    lead: 'I built this site with Claude Code over a few working sessions. I set the direction and made the calls. The AI did the building. This page is the record of both, including what went wrong.',
    stats: { pages: 'Pages', tools: 'Working tools', languages: 'Languages', aiCalls: 'Live AI calls on the site' },
    splitTitle: 'How the work was split',
    split: [
      { title: 'I decided', text: 'Who the site is for, what it says about me, what stays out, which tools are worth building and when something was not good enough.' },
      { title: 'The AI built', text: 'The code, the layouts, the first draft of the copy in both languages and the models behind each tool.' },
      { title: 'We checked', text: 'Every page on a phone and a desktop, in both languages, with an automated accessibility scan and a search for broken links before each save.' },
    ],
    timelineTitle: 'How it came together',
    timeline: [
      { when: 'Session 1', title: 'Positioning before pixels', text: 'We started with questions, not code: audience, message, what to leave out. Then the first version went up with the Strategy Engine and four pages.' },
      { when: 'Session 1, later', title: 'From showcase to tools', text: 'I asked for things people could use, not pages to read. The Lab became the center of the site with nine working tools.' },
      { when: 'Session 2', title: 'Depth and a full check', text: 'Four more strategy scenarios, then a review of every page that caught a broken phone layout and several accessibility problems.' },
      { when: 'Session 3', title: 'A new look and real systems', text: 'I changed my mind on the dark design. The site moved to light with stronger color. Two full systems went in, plus tools for business owners and a contact form.' },
      { when: 'Session 4', title: 'Built for the roles I want', text: 'A 90 day plan generator, a product launch case, a plan on a page, an innovation portfolio board, a journey mapper, a membership calculator and this page.' },
    ],
    callsTitle: 'Calls the AI would not have made',
    callsLead: 'The tool is fast. It does not know what matters to me until I say it.',
    calls: [
      { title: 'No real companies', text: 'An early idea was to analyze well known Mexican companies. I cut it. A personal site should not put a target on anyone.' },
      { title: 'No live AI on the site', text: 'Everything runs in the browser with no keys and no cost per visit. A demo that can break in front of a recruiter is not worth it.' },
      { title: 'No resume and no awards', text: 'I wanted the work to speak. The resume goes by request to the people who ask.' },
      { title: 'Color has a job', text: 'Blue marks what AI drafted. Marigold marks my judgment. When the AI used blue for a chart line, it had to change.' },
      { title: 'Roles first', text: 'The site could have read as a consulting practice. I chose to lead as a hire, with projects second.' },
    ],
    brokeTitle: 'What broke',
    brokeLead: 'Working with AI does not remove mistakes. It changes how quickly you find and fix them.',
    broke: [
      { what: 'The marketing mix optimizer showed a gain of 0.4 percent, because the starting split was already close to ideal.', fix: 'Retuned the example so the optimizer has something real to fix.' },
      { what: 'A steps table made one page wider than a phone screen.', fix: 'Each step became a small card on narrow screens.' },
      { what: 'Chart colors failed contrast checks after the move to a light design.', fix: 'Darkened the two colors that failed.' },
      { what: 'Form fields that should have been hidden were still showing.', fix: 'One global rule for hidden elements.' },
      { what: 'Five tab labels in Spanish wrapped onto four lines on a phone.', fix: 'One row that scrolls sideways.' },
    ],
    adviceTitle: 'What I would tell someone trying this',
    advice: [
      'Spend the first hour on decisions, not on the build. The questions about audience and message saved days of rework.',
      'Write your rules down. A short project brief kept the voice, the colors and the limits consistent across sessions.',
      'Ask for checks, not reassurance. The automated review found problems neither of us had noticed.',
      'Stay the editor. The drafts are good. They only become yours after you change what is not true.',
    ],
  },
  es: {
    metaTitle: 'Construido en público | Alberto Drucker',
    metaDescription: 'Cómo se construyó este sitio con Claude Code: quién decidió qué, qué falló y qué le diría a quien quiera intentarlo.',
    title: 'Construido en público',
    lead: 'Construí este sitio con Claude Code en unas cuantas sesiones de trabajo. Yo puse la dirección y tomé las decisiones. La IA hizo la construcción. Esta página es el registro de ambas cosas, incluyendo lo que salió mal.',
    stats: { pages: 'Páginas', tools: 'Herramientas funcionando', languages: 'Idiomas', aiCalls: 'Llamadas a IA en vivo en el sitio' },
    splitTitle: 'Cómo se dividió el trabajo',
    split: [
      { title: 'Yo decidí', text: 'Para quién es el sitio, qué dice de mí, qué se queda fuera, qué herramientas vale la pena construir y cuándo algo no estaba suficientemente bien.' },
      { title: 'La IA construyó', text: 'El código, los diseños, el primer borrador de los textos en ambos idiomas y los modelos detrás de cada herramienta.' },
      { title: 'Revisamos juntos', text: 'Cada página en celular y en escritorio, en los dos idiomas, con una revisión automática de accesibilidad y una búsqueda de ligas rotas antes de cada guardado.' },
    ],
    timelineTitle: 'Cómo se fue armando',
    timeline: [
      { when: 'Sesión 1', title: 'Posicionamiento antes que pixeles', text: 'Empezamos con preguntas, no con código: audiencia, mensaje, qué dejar fuera. Después salió la primera versión con el Strategy Engine y cuatro páginas.' },
      { when: 'Sesión 1, más tarde', title: 'De vitrina a herramientas', text: 'Pedí cosas que la gente pudiera usar, no páginas para leer. El Lab se volvió el centro del sitio con nueve herramientas funcionando.' },
      { when: 'Sesión 2', title: 'Profundidad y una revisión completa', text: 'Cuatro escenarios más de estrategia, y después una revisión de cada página que encontró un diseño roto en celular y varios problemas de accesibilidad.' },
      { when: 'Sesión 3', title: 'Nueva imagen y sistemas reales', text: 'Cambié de opinión sobre el diseño oscuro. El sitio pasó a claro con más color. Entraron dos sistemas completos, herramientas para dueños de negocio y un formulario de contacto.' },
      { when: 'Sesión 4', title: 'Hecho para los puestos que busco', text: 'Un generador de plan de 90 días, un caso de lanzamiento de producto, un plan en una página, un tablero de portafolio de innovación, un mapa de recorrido del cliente, una calculadora de membresías y esta página.' },
    ],
    callsTitle: 'Decisiones que la IA no habría tomado',
    callsLead: 'La herramienta es rápida. No sabe qué me importa hasta que se lo digo.',
    calls: [
      { title: 'Ninguna empresa real', text: 'Una idea inicial era analizar empresas mexicanas conocidas. La quité. Un sitio personal no debe ponerle la mira a nadie.' },
      { title: 'Nada de IA en vivo en el sitio', text: 'Todo corre en el navegador, sin llaves y sin costo por visita. Un demo que puede fallar frente a un reclutador no vale la pena.' },
      { title: 'Sin CV y sin premios', text: 'Quería que el trabajo hablara. El CV se envía a quien lo pide.' },
      { title: 'El color tiene una función', text: 'El azul marca lo que redactó la IA. El amarillo marca mi criterio. Cuando la IA usó azul para una línea de una gráfica, hubo que cambiarlo.' },
      { title: 'Primero los puestos', text: 'El sitio pudo leerse como una práctica de consultoría. Elegí presentarme como contratación, con los proyectos en segundo lugar.' },
    ],
    brokeTitle: 'Lo que falló',
    brokeLead: 'Trabajar con IA no elimina los errores. Cambia qué tan rápido los encuentras y los corriges.',
    broke: [
      { what: 'El optimizador de mezcla de marketing mostraba una ganancia de 0.4 por ciento, porque la mezcla inicial ya estaba cerca de la ideal.', fix: 'Se ajustó el ejemplo para que el optimizador tuviera algo real que corregir.' },
      { what: 'Una tabla de pasos hacía una página más ancha que la pantalla de un celular.', fix: 'Cada paso se volvió una tarjeta en pantallas angostas.' },
      { what: 'Los colores de las gráficas no pasaron las pruebas de contraste al cambiar a diseño claro.', fix: 'Se oscurecieron los dos colores que fallaron.' },
      { what: 'Campos de formulario que debían estar ocultos seguían apareciendo.', fix: 'Una regla global para elementos ocultos.' },
      { what: 'Cinco pestañas en español se partían en cuatro líneas en celular.', fix: 'Una sola fila que se desliza hacia los lados.' },
    ],
    adviceTitle: 'Lo que le diría a quien quiera intentarlo',
    advice: [
      'Dedica la primera hora a las decisiones, no a construir. Las preguntas sobre audiencia y mensaje ahorraron días de retrabajo.',
      'Escribe tus reglas. Un brief corto del proyecto mantuvo la voz, los colores y los límites consistentes entre sesiones.',
      'Pide revisiones, no que te tranquilicen. La revisión automática encontró problemas que ninguno de los dos había notado.',
      'Sigue siendo el editor. Los borradores son buenos. Solo se vuelven tuyos cuando cambias lo que no es cierto.',
    ],
  },
};
