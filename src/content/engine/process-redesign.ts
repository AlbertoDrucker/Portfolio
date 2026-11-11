import type { Scenario } from './types';

export const processRedesign: Scenario = {
  id: 'process-redesign',
  run: {
    en: {
      label: 'Process redesign',
      brief:
        'A packaging manufacturer in northern Mexico makes custom printed boxes. It takes 21 days on average from a customer’s request to the first production run. Sales says the company is losing orders to faster competitors. Leadership asks: how do we cut lead time in half?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'The question asked', text: 'How do we cut lead time in half?' },
                {
                  label: 'The question worth answering',
                  text: 'Where do the 21 days actually go, which steps add value the customer would pay for, and which ones only exist because of how we are organized?',
                },
                { label: 'Scope', text: 'From the first request to the first production run. Sales, design, costing, samples and production planning.' },
                { label: 'Decision it informs', text: 'How the order flow is redesigned, who owns each order and where to invest: people, rules or software.' },
              ],
            },
          ],
          notes: [
            'I’d check the average against the worst cases. Customers don’t remember the average order. They remember the one that took six weeks.',
            'I’d also confirm that speed is really why we lose orders. Sales sometimes blames lead time for losses that are about price.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Signals that shape the problem:' },
            {
              t: 'points',
              items: [
                { text: 'Online brands are a growing share of demand. They order smaller runs, more designs and expect answers in days, not weeks.' },
                { text: 'Faster competitors quote within 48 hours and approve designs on a digital proof.' },
                { text: 'Each order passes through five teams: sales, design, costing, the customer and production planning.' },
                { text: 'Costing lives in spreadsheets owned by two people. When one is on vacation, quotes wait.' },
              ],
            },
          ],
          notes: [
            'The two people behind the spreadsheets are the most important interviews in this project. They carry rules nobody ever wrote down.',
          ],
        },
        {
          key: 'fivec',
          blocks: [
            {
              t: 'rows',
              rows: [
                {
                  label: 'Company',
                  text: 'A reputation for quality, a design team of four, costing in spreadsheets, an ERP used only on the production floor and no single owner for an order.',
                },
                {
                  label: 'Customers',
                  text: 'Online brands that need speed and small runs, and large consumer goods accounts that need reliability above everything.',
                },
                {
                  label: 'Competitors',
                  text: 'National players with standard catalogs and fast quotes, and small local shops that are quick but inconsistent.',
                },
                { label: 'Collaborators', text: 'Suppliers of cutting dies and inks, freight partners and the customers’ own design teams.' },
                {
                  label: 'Context',
                  text: 'Nearshoring is adding demand in the north, product lines are multiplying and production runs keep getting shorter.',
                },
              ],
            },
          ],
          notes: ['The two customer groups want different things. One process for both is probably part of the problem.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'Most of the 21 days is waiting, not working.',
                  text: 'Mapping recent orders shows about four days of actual work. The rest is time in queues, waiting for approvals and handoffs nobody is tracking.',
                },
                {
                  title: 'Most requests are variations, treated as new.',
                  text: 'Around 60 percent of requests are small changes to a few base designs, yet every one goes through full design and costing.',
                },
                {
                  title: 'The physical sample is the longest step, and often unnecessary.',
                  text: 'Repeat customers usually approve on the digital proof anyway. The sample adds about a week for confidence they already have.',
                },
              ],
            },
          ],
          notes: [
            'The 60 percent figure is a hypothesis until we classify a real sample of orders. I’d do it with the design team so they trust the result.',
            'Insight three needs care. For new customers and large accounts, the sample may be exactly what wins their trust.',
          ],
        },
        {
          key: 'opportunities',
          blocks: [
            {
              t: 'rows',
              rows: [
                {
                  label: 'Fix',
                  text: 'One owner per order from request to production, and a shared tracker so nothing waits without someone knowing.',
                },
                {
                  label: 'Improve',
                  text: 'Two lanes at intake: standard requests based on existing designs get rule based costing and a digital proof, while truly custom work keeps the full process.',
                },
                {
                  label: 'Wow',
                  text: 'An online configurator where customers adjust dimensions and print, then get a price and a 3D proof in minutes.',
                },
              ],
            },
          ],
          notes: ['Fix costs almost nothing and probably recovers several days on its own. I’d start there before anyone talks about software.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Add capacity',
                  text: 'Hire more designers and estimators to clear the queues.',
                  upside: 'Simple to explain and quick to start.',
                  risk: 'Adds cost to a flow that is mostly waiting, so lead time improves less than expected.',
                },
                {
                  name: 'Redesign the flow',
                  text: 'Order owners, two lanes at intake, costing rules for standard requests and digital proof approval.',
                  upside: 'Attacks the waiting directly, at low cost, and builds the base for automation later.',
                  risk: 'Requires changing habits across five teams and getting costing rules right.',
                  recommended: true,
                },
                {
                  name: 'Buy a new system',
                  text: 'Implement a full quoting and order management platform.',
                  upside: 'Visibility, standard data and a modern customer experience.',
                  risk: 'Months of implementation, and a new system on a broken flow only records the delays faster.',
                },
              ],
            },
          ],
          notes: [
            'Option C will be tempting because it feels like progress. I’d revisit it after B, once we know which rules the system needs to run.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Go with option B: fix ownership first, then split the flow into two lanes.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Days 1 to 30',
                  text: 'Map 30 recent orders end to end with real timestamps. Assign an owner to every open order. Define what counts as a standard request.',
                },
                {
                  label: 'Days 31 to 60',
                  text: 'Pilot the two lane flow with one sales team. Turn the costing spreadsheets into a shared model with written rules. Approve standard work on digital proofs.',
                },
                {
                  label: 'Days 61 to 90',
                  text: 'Extend to all teams. Use the share of standard requests to decide whether the online configurator is worth building.',
                },
                {
                  label: 'Measures',
                  text: 'Lead time from request to production, both the median and the slowest 10 percent, quote turnaround, share of orders in the standard lane, rework and win rate.',
                },
              ],
            },
          ],
          notes: [
            'The slowest 10 percent is the measure I’d report to leadership. It shows whether the process is reliable, not just faster on good days.',
            'What I’d validate first: whether customers in the standard lane are comfortable approving without a physical sample. Their answer decides how big that lane can be.',
          ],
        },
      ],
    },
    es: {
      label: 'Rediseño de procesos',
      brief:
        'Un fabricante de empaque en el norte de México produce cajas impresas a la medida. En promedio pasan 21 días desde la solicitud del cliente hasta la primera corrida de producción. Ventas dice que la empresa está perdiendo pedidos frente a competidores más rápidos. La dirección pregunta: ¿cómo reducimos el tiempo de entrega a la mitad?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'La pregunta que nos hacen', text: '¿Cómo reducimos el tiempo de entrega a la mitad?' },
                {
                  label: 'La pregunta que vale la pena responder',
                  text: '¿En qué se van realmente los 21 días, qué pasos agregan valor por el que el cliente pagaría y cuáles existen solo por cómo estamos organizados?',
                },
                { label: 'Alcance', text: 'De la primera solicitud a la primera corrida de producción. Ventas, diseño, costeo, muestras y planeación de producción.' },
                { label: 'Decisión que informa', text: 'Cómo se rediseña el flujo de pedidos, quién es dueño de cada pedido y dónde invertir: personas, reglas o software.' },
              ],
            },
          ],
          notes: [
            'Revisaría el promedio contra los peores casos. El cliente no recuerda el pedido promedio. Recuerda el que tardó seis semanas.',
            'También confirmaría que la velocidad es realmente la razón por la que perdemos pedidos. A veces ventas culpa al tiempo de entrega por pérdidas que en realidad son de precio.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Señales que definen el problema:' },
            {
              t: 'points',
              items: [
                { text: 'Las marcas que venden en línea son una parte creciente de la demanda. Piden corridas más chicas, más diseños y esperan respuesta en días, no en semanas.' },
                { text: 'Los competidores más rápidos cotizan en 48 horas y aprueban diseños con una prueba digital.' },
                { text: 'Cada pedido pasa por cinco equipos: ventas, diseño, costeo, el cliente y planeación de producción.' },
                { text: 'El costeo vive en hojas de cálculo que manejan dos personas. Cuando una está de vacaciones, las cotizaciones esperan.' },
              ],
            },
          ],
          notes: [
            'Las dos personas detrás de las hojas de cálculo son las entrevistas más importantes del proyecto. Cargan reglas que nadie ha escrito nunca.',
          ],
        },
        {
          key: 'fivec',
          blocks: [
            {
              t: 'rows',
              rows: [
                {
                  label: 'Compañía',
                  text: 'Reputación de calidad, un equipo de diseño de cuatro personas, costeo en hojas de cálculo, un ERP que solo se usa en piso de producción y ningún dueño único por pedido.',
                },
                {
                  label: 'Clientes',
                  text: 'Marcas en línea que necesitan velocidad y corridas cortas, y cuentas grandes de consumo que necesitan confiabilidad por encima de todo.',
                },
                {
                  label: 'Competidores',
                  text: 'Jugadores nacionales con catálogos estándar y cotizaciones rápidas, y talleres locales que son rápidos pero inconsistentes.',
                },
                { label: 'Colaboradores', text: 'Proveedores de suajes y tintas, socios de transporte y los equipos de diseño de los propios clientes.' },
                {
                  label: 'Contexto',
                  text: 'El nearshoring está sumando demanda en el norte, las líneas de producto se multiplican y las corridas son cada vez más cortas.',
                },
              ],
            },
          ],
          notes: ['Los dos grupos de clientes quieren cosas distintas. Tener un solo proceso para ambos probablemente es parte del problema.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'La mayor parte de los 21 días es espera, no trabajo.',
                  text: 'Al mapear pedidos recientes aparecen unos cuatro días de trabajo real. El resto es tiempo en fila, esperando aprobaciones y entregas entre áreas que nadie da seguimiento.',
                },
                {
                  title: 'La mayoría de las solicitudes son variaciones, tratadas como nuevas.',
                  text: 'Cerca del 60 por ciento de las solicitudes son cambios pequeños a unos cuantos diseños base, y aun así cada una pasa por diseño y costeo completos.',
                },
                {
                  title: 'La muestra física es el paso más largo, y muchas veces innecesario.',
                  text: 'Los clientes recurrentes casi siempre aprueban con la prueba digital. La muestra agrega cerca de una semana para una confianza que ya tienen.',
                },
              ],
            },
          ],
          notes: [
            'El 60 por ciento es una hipótesis hasta que clasifiquemos una muestra real de pedidos. Lo haría junto con el equipo de diseño para que confíen en el resultado.',
            'El tercer insight requiere cuidado. Para clientes nuevos y cuentas grandes, la muestra puede ser justo lo que gana su confianza.',
          ],
        },
        {
          key: 'opportunities',
          blocks: [
            {
              t: 'rows',
              rows: [
                {
                  label: 'Corregir',
                  text: 'Un dueño por pedido desde la solicitud hasta producción, y un tablero compartido para que nada espere sin que alguien lo sepa.',
                },
                {
                  label: 'Mejorar',
                  text: 'Dos carriles desde la entrada: las solicitudes estándar basadas en diseños existentes reciben costeo por reglas y prueba digital, y el trabajo realmente a la medida conserva el proceso completo.',
                },
                {
                  label: 'Sorprender',
                  text: 'Un configurador en línea donde el cliente ajusta medidas e impresión, y recibe precio y una prueba en 3D en minutos.',
                },
              ],
            },
          ],
          notes: ['Corregir casi no cuesta y probablemente recupera varios días por sí solo. Empezaría ahí antes de que alguien hable de software.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Sumar capacidad',
                  text: 'Contratar más diseñadores y costeadores para desahogar las filas.',
                  upside: 'Fácil de explicar y rápido de arrancar.',
                  risk: 'Agrega costo a un flujo que es sobre todo espera, así que el tiempo de entrega mejora menos de lo esperado.',
                },
                {
                  name: 'Rediseñar el flujo',
                  text: 'Dueños por pedido, dos carriles desde la entrada, reglas de costeo para solicitudes estándar y aprobación con prueba digital.',
                  upside: 'Ataca la espera directamente, con bajo costo, y sienta la base para automatizar después.',
                  risk: 'Requiere cambiar hábitos en cinco equipos y definir bien las reglas de costeo.',
                  recommended: true,
                },
                {
                  name: 'Comprar un sistema nuevo',
                  text: 'Implementar una plataforma completa de cotización y gestión de pedidos.',
                  upside: 'Visibilidad, datos estándar y una experiencia moderna para el cliente.',
                  risk: 'Meses de implementación, y un sistema nuevo sobre un flujo roto solo registra los retrasos más rápido.',
                },
              ],
            },
          ],
          notes: [
            'La opción C va a ser tentadora porque se siente como avance. La retomaría después de la B, cuando sepamos qué reglas necesita operar el sistema.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Ir con la opción B: primero resolver quién es dueño de cada pedido, después dividir el flujo en dos carriles.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Días 1 a 30',
                  text: 'Mapear 30 pedidos recientes de principio a fin con fechas reales. Asignar un dueño a cada pedido abierto. Definir qué cuenta como solicitud estándar.',
                },
                {
                  label: 'Días 31 a 60',
                  text: 'Piloto del flujo de dos carriles con un equipo de ventas. Convertir las hojas de costeo en un modelo compartido con reglas escritas. Aprobar el trabajo estándar con prueba digital.',
                },
                {
                  label: 'Días 61 a 90',
                  text: 'Extender a todos los equipos. Usar el porcentaje de solicitudes estándar para decidir si vale la pena construir el configurador en línea.',
                },
                {
                  label: 'Cómo lo medimos',
                  text: 'Tiempo de la solicitud a producción, tanto la mediana como el 10 por ciento más lento, tiempo de cotización, porcentaje de pedidos en el carril estándar, retrabajos y tasa de cierre.',
                },
              ],
            },
          ],
          notes: [
            'El 10 por ciento más lento es la métrica que reportaría a la dirección. Muestra si el proceso es confiable, no solo más rápido en los días buenos.',
            'Lo primero que validaría: si los clientes del carril estándar están cómodos aprobando sin muestra física. Su respuesta define qué tan grande puede ser ese carril.',
          ],
        },
      ],
    },
  },
};
