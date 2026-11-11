import type { Localized } from '../../i18n/ui';

type Phases = [string[], string[], string[]];

export const first90: Localized<{
  role: string;
  roles: Record<string, string>;
  situation: string;
  situations: Record<string, string>;
  team: string;
  teams: Record<string, string>;
  phases: [string, string, string];
  phaseGoals: [string, string, string];
  winTitle: string;
  riskTitle: string;
  dyn: {
    byRole: Record<string, Phases>;
    bySituation: Record<string, { add: [string, string, string]; win: string; risk: string }>;
    byTeam: Record<string, [string, string, string]>;
  };
}> = {
  en: {
    role: 'The role',
    roles: { planning: 'Strategic planning', pmm: 'Product marketing', innovation: 'Innovation' },
    situation: 'The situation I walk into',
    situations: { growth: 'Growing and stretched', turnaround: 'Results are slipping', newfn: 'The function is new', steady: 'Stable, needs a next step' },
    team: 'My position',
    teams: { lead: 'I lead a team', solo: 'I work across teams without direct reports' },
    phases: ['Days 1 to 30', 'Days 31 to 60', 'Days 61 to 90'],
    phaseGoals: ['Learn before changing anything', 'Align on a few choices', 'Deliver one visible result'],
    winTitle: 'The early win I would aim for',
    riskTitle: 'The risk I would watch',
    dyn: {
      byRole: {
        planning: [
          ['Read the last two strategic plans and compare what was promised with what happened.', 'Meet every business unit head with the same five questions.', 'Rebuild the key numbers myself to understand where they come from.'],
          ['Share a one page view of where the plan and reality disagree.', 'Agree with leadership on the three questions this year’s plan must answer.', 'Set one planning calendar that every unit follows.'],
          ['Deliver the first decision document on one of the three questions.', 'Put a simple monthly review in place: few measures, clear owners.', 'Publish the list of initiatives that stop, with leadership’s backing.'],
        ],
        pmm: [
          ['Talk to ten customers and five lost deals before reading any internal deck.', 'Sit in on sales calls and write down the objections word for word.', 'Map every product, its buyer and the message used today.'],
          ['Present one positioning and message house for the main product.', 'Agree with product and sales on launch tiers and who does what.', 'Pick the two measures marketing will be judged on.'],
          ['Ship one launch or relaunch from start to finish using the new message.', 'Give sales a battlecard and a short pitch they actually use.', 'Report the first results and what changes next.'],
        ],
        innovation: [
          ['List every initiative in flight, its owner, its cost and its last result.', 'Spend time with customers and frontline staff, not only with the project teams.', 'Learn how ideas get funded and where they usually die.'],
          ['Sort the portfolio into core improvements, adjacent bets and new bets.', 'Agree on how a project earns the next round of money.', 'Choose two bets to accelerate and name what stops.'],
          ['Run one fast test with real customers and share the result openly.', 'Set a monthly portfolio review with go, change or stop decisions.', 'Show one idea that moved from concept to something people can use.'],
        ],
      },
      bySituation: {
        growth: {
          add: ['Find where growth is straining the operation most.', 'Protect the two things that must not break while growing.', 'Remove one bottleneck the teams have been living with.'],
          win: 'Free up capacity. In a growing company the fastest win is removing something that slows everyone down.',
          risk: 'Saying yes to everything. Growth hides weak priorities until the money or the people run out.',
        },
        turnaround: {
          add: ['Separate the causes we control from the ones we don’t.', 'Agree on what gets cut so the fix has resources.', 'Show an early number moving in the right direction.'],
          win: 'One number that stops falling. It buys the trust needed for the harder changes.',
          risk: 'Acting before understanding. Pressure pushes for quick moves, and the first wrong one is expensive.',
        },
        newfn: {
          add: ['Ask each leader what they expect this function to do for them.', 'Write the charter: what this function owns and what it doesn’t.', 'Deliver something useful to the most skeptical stakeholder.'],
          win: 'A useful deliverable for another team. A new function earns its place by helping, not by presenting.',
          risk: 'Building process before proving value. Nobody misses a framework they never asked for.',
        },
        steady: {
          add: ['Look for what the company has stopped questioning.', 'Bring one outside comparison that challenges a comfortable assumption.', 'Start one small experiment that points to the next stage.'],
          win: 'A well argued case for one change. Stable companies move when the evidence is clear and the first step is small.',
          risk: 'Comfort. With no urgency, good ideas wait forever unless someone sets a date.',
        },
      },
      byTeam: {
        lead: ['Meet each person on the team one to one and ask what they would change.', 'Set clear priorities for the team and remove one task that adds no value.', 'Give someone on the team the credit for the first result.'],
        solo: ['Map who decides, who influences and who blocks.', 'Find two allies in other areas and solve a problem that matters to them.', 'Make the result visible to the people who can sponsor the next one.'],
      },
    },
  },
  es: {
    role: 'El puesto',
    roles: { planning: 'Planeación estratégica', pmm: 'Product marketing', innovation: 'Innovación' },
    situation: 'La situación a la que llego',
    situations: { growth: 'Creciendo y con el equipo al límite', turnaround: 'Los resultados van a la baja', newfn: 'El área es nueva', steady: 'Estable, necesita un siguiente paso' },
    team: 'Mi posición',
    teams: { lead: 'Lidero un equipo', solo: 'Trabajo con varias áreas sin equipo directo' },
    phases: ['Días 1 a 30', 'Días 31 a 60', 'Días 61 a 90'],
    phaseGoals: ['Aprender antes de cambiar algo', 'Alinear unas cuantas decisiones', 'Entregar un resultado visible'],
    winTitle: 'El primer logro que buscaría',
    riskTitle: 'El riesgo que vigilaría',
    dyn: {
      byRole: {
        planning: [
          ['Leer los dos últimos planes estratégicos y comparar lo prometido con lo que pasó.', 'Reunirme con cada director de unidad con las mismas cinco preguntas.', 'Reconstruir yo mismo los números clave para entender de dónde salen.'],
          ['Compartir una página con los puntos donde el plan y la realidad no coinciden.', 'Acordar con la dirección las tres preguntas que el plan de este año debe responder.', 'Definir un solo calendario de planeación que sigan todas las unidades.'],
          ['Entregar el primer documento de decisión sobre una de las tres preguntas.', 'Instalar una revisión mensual sencilla: pocas métricas y responsables claros.', 'Publicar la lista de iniciativas que se detienen, con respaldo de la dirección.'],
        ],
        pmm: [
          ['Hablar con diez clientes y cinco ventas perdidas antes de leer cualquier presentación interna.', 'Escuchar llamadas de ventas y anotar las objeciones palabra por palabra.', 'Mapear cada producto, su comprador y el mensaje que se usa hoy.'],
          ['Presentar un posicionamiento y una casa de mensajes para el producto principal.', 'Acordar con producto y ventas los niveles de lanzamiento y quién hace qué.', 'Elegir las dos métricas con las que se va a evaluar a marketing.'],
          ['Sacar un lanzamiento o relanzamiento de principio a fin con el nuevo mensaje.', 'Darle a ventas un battlecard y un pitch corto que realmente usen.', 'Reportar los primeros resultados y lo que cambia después.'],
        ],
        innovation: [
          ['Listar cada iniciativa en curso, su responsable, su costo y su último resultado.', 'Pasar tiempo con clientes y personal de primera línea, no solo con los equipos de proyecto.', 'Entender cómo se financian las ideas y dónde suelen morir.'],
          ['Ordenar el portafolio en mejoras al negocio actual, apuestas cercanas y apuestas nuevas.', 'Acordar cómo se gana un proyecto la siguiente ronda de recursos.', 'Elegir dos apuestas para acelerar y decir qué se detiene.'],
          ['Correr una prueba rápida con clientes reales y compartir el resultado abiertamente.', 'Instalar una revisión mensual de portafolio con decisiones de seguir, cambiar o detener.', 'Mostrar una idea que pasó de concepto a algo que la gente puede usar.'],
        ],
      },
      bySituation: {
        growth: {
          add: ['Encontrar dónde el crecimiento está presionando más a la operación.', 'Proteger las dos cosas que no se pueden romper mientras crecemos.', 'Quitar un cuello de botella con el que los equipos ya se acostumbraron a vivir.'],
          win: 'Liberar capacidad. En una empresa que crece, el logro más rápido es quitar algo que frena a todos.',
          risk: 'Decir que sí a todo. El crecimiento esconde las prioridades débiles hasta que se acaba el dinero o la gente.',
        },
        turnaround: {
          add: ['Separar las causas que controlamos de las que no.', 'Acordar qué se recorta para que la solución tenga recursos.', 'Mostrar pronto un número que se mueve en la dirección correcta.'],
          win: 'Un número que deja de caer. Compra la confianza necesaria para los cambios más difíciles.',
          risk: 'Actuar antes de entender. La presión empuja a moverse rápido, y el primer movimiento equivocado sale caro.',
        },
        newfn: {
          add: ['Preguntar a cada líder qué espera que esta área haga por él.', 'Escribir el alcance: de qué es dueña esta área y de qué no.', 'Entregarle algo útil al stakeholder más escéptico.'],
          win: 'Un entregable útil para otra área. Un área nueva se gana su lugar ayudando, no presentando.',
          risk: 'Construir proceso antes de demostrar valor. Nadie extraña un marco de trabajo que nunca pidió.',
        },
        steady: {
          add: ['Buscar lo que la empresa dejó de cuestionar.', 'Traer una comparación externa que rete un supuesto cómodo.', 'Arrancar un experimento pequeño que apunte a la siguiente etapa.'],
          win: 'Un caso bien argumentado para un cambio. Las empresas estables se mueven cuando la evidencia es clara y el primer paso es pequeño.',
          risk: 'La comodidad. Sin urgencia, las buenas ideas esperan para siempre si nadie pone una fecha.',
        },
      },
      byTeam: {
        lead: ['Reunirme uno a uno con cada persona del equipo y preguntar qué cambiaría.', 'Definir prioridades claras para el equipo y quitar una tarea que no agrega valor.', 'Darle a alguien del equipo el crédito por el primer resultado.'],
        solo: ['Mapear quién decide, quién influye y quién bloquea.', 'Encontrar dos aliados en otras áreas y resolver un problema que les importe.', 'Hacer visible el resultado ante quienes pueden patrocinar el siguiente.'],
      },
    },
  },
};
