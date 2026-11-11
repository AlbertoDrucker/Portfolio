import type { Scenario } from './types';

export const strategicPlanning: Scenario = {
  id: 'strategic-planning',
  run: {
    en: {
      label: 'Strategic planning',
      brief:
        'A family owned chain of 35 hardware stores in central Mexico is building its three year plan. Sales are flat, a big box home improvement chain opened in two of its cities and the second generation is taking over. Leadership asks: what should our plan be for the next three years?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'The question asked', text: 'What should our plan be for the next three years?' },
                {
                  label: 'The question worth answering',
                  text: 'Which few choices about where to play and how to win will we commit to, and what will we stop doing to fund them?',
                },
                { label: 'Scope', text: 'All 35 stores, every customer group and the business model. Three years, funded mostly from our own cash flow.' },
                { label: 'Decision it informs', text: 'Where capital and management attention go, and who owns each bet during the leadership transition.' },
              ],
            },
          ],
          notes: [
            'Most three year plans fail by trying to do everything. The real output of this exercise is the list of things we stop.',
            'The transition is the hidden variable. I’d talk to both generations separately before the first workshop.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Signals that shape the problem:' },
            {
              t: 'points',
              items: [
                { text: 'Big box chains are moving into mid size cities, with wide assortments, low prices on visible items and a strong pull for homeowners.' },
                { text: 'Contractors and builders buy differently: they need credit, delivery to the job site and someone who answers on WhatsApp at six in the morning.' },
                { text: 'Industrial parks around the region keep growing, and their maintenance teams buy supplies every week.' },
                { text: 'Online sales for hardware are growing slowly, but quotes and orders over WhatsApp are already normal.' },
              ],
            },
          ],
          notes: [
            'I’d ask for the sales split before trusting any of this. If contractors are as big as I suspect, the plan almost writes itself.',
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
                  text: 'Thirty five stores with loyal local staff, long relationships with contractors, a credit book nobody else offers, slow family decision making and no customer data beyond invoices.',
                },
                {
                  label: 'Customers',
                  text: 'Contractors and builders, who make up around 60 percent of sales. Homeowners doing small repairs. Maintenance buyers at small businesses and factories.',
                },
                {
                  label: 'Competitors',
                  text: 'Big box chains, independent neighborhood hardware stores and marketplaces for tools and small items.',
                },
                { label: 'Collaborators', text: 'Suppliers of cement, steel and tools, credit partners and the informal network of contractors who recommend where to buy.' },
                {
                  label: 'Context',
                  text: 'Industrial construction in the region, rising costs of materials and a generational change in leadership.',
                },
              ],
            },
          ],
          notes: ['The credit book is the asset nobody lists on the balance sheet. It is the reason many contractors stay, and the big box chain can’t copy it quickly.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'Contractors are the business, but stores are built for homeowners.',
                  text: 'Layout, hours and service follow the homeowner visit. The customer who brings most of the revenue has to wait in the same line.',
                },
                {
                  title: 'Credit and delivery keep contractors, more than price.',
                  text: 'Contractors switch for a missed delivery much faster than for a price difference. That is where the big box chain is weakest.',
                },
                {
                  title: 'The growth is outside the stores.',
                  text: 'Factories in the industrial parks need scheduled supply of maintenance items, and nobody local serves them well.',
                },
              ],
            },
          ],
          notes: [
            'Insight one I’d test with transaction data by store. If it holds, competing for the homeowner against the big box chain is a fight we chose by accident.',
            'Insight three is the most uncertain. Selling to factories requires a different sales team, different terms and different service.',
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
                  text: 'Cut the long tail of slow items that ties up cash and shelf space, and give each bet in the plan one owner with clear decision rights.',
                },
                {
                  label: 'Improve',
                  text: 'A contractor program: a dedicated counter, early hours, credit by account, WhatsApp ordering and same day delivery to the job site.',
                },
                {
                  label: 'Wow',
                  text: 'An industrial supply service for nearby factories, with scheduled restocking and a monthly invoice, run from two stores near the parks.',
                },
              ],
            },
          ],
          notes: ['Fix is uncomfortable because some of those slow items belong to someone’s favorite supplier. That conversation is part of the plan.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Defend every store',
                  text: 'Renovate stores, match big box prices on visible items and widen the assortment for homeowners.',
                  upside: 'Protects the current base and is easy for the whole company to understand.',
                  risk: 'Fights the competitor where it is strongest and consumes the cash needed for anything else.',
                },
                {
                  name: 'Become the contractor’s partner',
                  text: 'Reshape stores and services around contractors, and pilot industrial supply in one region.',
                  upside: 'Builds on what the competitor can’t copy and opens a new source of growth.',
                  risk: 'Some homeowner sales will be lost, and the industrial pilot needs new skills.',
                  recommended: true,
                },
                {
                  name: 'Expand to new cities',
                  text: 'Open ten stores in cities where big box chains have not arrived yet.',
                  upside: 'Visible growth and a head start in new markets.',
                  risk: 'Copies a model that is already under pressure, and the competitor will get there eventually.',
                },
              ],
            },
          ],
          notes: [
            'Option C is the one the family may love, because it looks like growth. I’d show what happens to the new stores when the big box chain follows in three years.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Go with option B. The plan comes down to three commitments for the next three years:' },
            {
              t: 'points',
              items: [
                { title: 'Win the contractor.', text: 'Every store redesigned around contractor service by the end of year two.' },
                { title: 'Test industrial supply.', text: 'One pilot in year one, a decision to scale or stop at month twelve.' },
                { title: 'Stop what doesn’t pay.', text: 'Fewer items, no price matching on homeowner items and no new stores until the model is proven.' },
              ],
            },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Days 1 to 30',
                  text: 'Sales by customer group and store. Agree the stop list with both generations. Name one owner per commitment.',
                },
                {
                  label: 'Days 31 to 60',
                  text: 'Launch the contractor program in three stores. Interview 15 maintenance managers in the nearest industrial park.',
                },
                {
                  label: 'Days 61 to 90',
                  text: 'Review the pilot stores, adjust the program and sign the first industrial customers for a trial.',
                },
                {
                  label: 'Measures',
                  text: 'Contractor sales and retention, on time delivery, cash tied up in inventory, industrial accounts active and margin by customer group.',
                },
              ],
            },
          ],
          notes: [
            'The stop list is where this plan will be tested. If nobody is uncomfortable with it, it isn’t a real list.',
            'What I’d validate first: how much of the contractor business is tied to individual salespeople. If they leave, does the customer stay?',
          ],
        },
      ],
    },
    es: {
      label: 'Planeación estratégica',
      brief:
        'Una cadena familiar de 35 ferreterías en el centro de México está armando su plan a tres años. Las ventas están estancadas, una cadena grande de mejoramiento del hogar abrió en dos de sus ciudades y la segunda generación está tomando el mando. La dirección pregunta: ¿cuál debe ser nuestro plan para los próximos tres años?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'La pregunta que nos hacen', text: '¿Cuál debe ser nuestro plan para los próximos tres años?' },
                {
                  label: 'La pregunta que vale la pena responder',
                  text: '¿Con qué pocas decisiones sobre dónde jugar y cómo ganar nos vamos a comprometer, y qué vamos a dejar de hacer para financiarlas?',
                },
                { label: 'Alcance', text: 'Las 35 tiendas, todos los grupos de clientes y el modelo de negocio. Tres años, financiados sobre todo con flujo propio.' },
                { label: 'Decisión que informa', text: 'A dónde van el capital y la atención de la dirección, y quién es dueño de cada apuesta durante la transición.' },
              ],
            },
          ],
          notes: [
            'La mayoría de los planes a tres años fallan por querer hacer todo. El verdadero resultado de este ejercicio es la lista de lo que vamos a dejar de hacer.',
            'La transición es la variable oculta. Hablaría con ambas generaciones por separado antes del primer taller.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Señales que definen el problema:' },
            {
              t: 'points',
              items: [
                { text: 'Las cadenas grandes están llegando a ciudades medianas, con surtido amplio, precios bajos en los artículos más visibles y mucha atracción para quien arregla su casa.' },
                { text: 'Los maestros de obra y constructores compran distinto: necesitan crédito, entrega en la obra y alguien que conteste por WhatsApp a las seis de la mañana.' },
                { text: 'Los parques industriales de la región siguen creciendo, y sus equipos de mantenimiento compran insumos cada semana.' },
                { text: 'La venta en línea de ferretería crece lento, pero cotizar y pedir por WhatsApp ya es lo normal.' },
              ],
            },
          ],
          notes: [
            'Pediría la venta por tipo de cliente antes de confiar en cualquiera de estas señales. Si los maestros de obra pesan tanto como sospecho, el plan casi se escribe solo.',
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
                  text: 'Treinta y cinco tiendas con personal local leal, relaciones largas con maestros de obra, una cartera de crédito que nadie más ofrece, decisiones familiares lentas y ningún dato de clientes más allá de las facturas.',
                },
                {
                  label: 'Clientes',
                  text: 'Maestros de obra y constructores, que representan cerca del 60 por ciento de la venta. Personas que hacen reparaciones en casa. Compradores de mantenimiento en negocios y fábricas.',
                },
                {
                  label: 'Competidores',
                  text: 'Cadenas grandes, ferreterías independientes de barrio y marketplaces de herramientas y artículos pequeños.',
                },
                { label: 'Colaboradores', text: 'Proveedores de cemento, acero y herramienta, socios de crédito y la red informal de maestros de obra que recomiendan dónde comprar.' },
                {
                  label: 'Contexto',
                  text: 'Construcción industrial en la región, costos de materiales al alza y un cambio generacional en la dirección.',
                },
              ],
            },
          ],
          notes: ['La cartera de crédito es el activo que nadie pone en el balance. Es la razón por la que muchos maestros de obra se quedan, y la cadena grande no la puede copiar rápido.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'El negocio son los maestros de obra, pero las tiendas están hechas para el cliente de casa.',
                  text: 'La distribución, los horarios y el servicio siguen la visita de quien arregla su casa. El cliente que trae la mayor parte del ingreso hace la misma fila.',
                },
                {
                  title: 'El crédito y la entrega retienen al maestro de obra, más que el precio.',
                  text: 'Un maestro de obra se cambia mucho más rápido por una entrega fallida que por una diferencia de precio. Ahí es donde la cadena grande es más débil.',
                },
                {
                  title: 'El crecimiento está fuera de las tiendas.',
                  text: 'Las fábricas de los parques industriales necesitan abasto programado de insumos de mantenimiento, y nadie local las atiende bien.',
                },
              ],
            },
          ],
          notes: [
            'El primer insight lo probaría con datos de transacciones por tienda. Si se sostiene, pelear por el cliente de casa contra la cadena grande es una batalla que elegimos por accidente.',
            'El tercero es el más incierto. Venderle a fábricas requiere otro equipo de ventas, otros términos y otro servicio.',
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
                  text: 'Recortar la larga lista de artículos de baja rotación que amarra efectivo y anaquel, y darle a cada apuesta del plan un solo dueño con autoridad clara.',
                },
                {
                  label: 'Mejorar',
                  text: 'Un programa para maestros de obra: mostrador dedicado, horario temprano, crédito por cuenta, pedidos por WhatsApp y entrega en la obra el mismo día.',
                },
                {
                  label: 'Sorprender',
                  text: 'Un servicio de abasto industrial para las fábricas cercanas, con resurtido programado y factura mensual, operado desde dos tiendas cerca de los parques.',
                },
              ],
            },
          ],
          notes: ['Corregir es incómodo porque algunos de esos artículos son del proveedor favorito de alguien. Esa conversación es parte del plan.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Defender cada tienda',
                  text: 'Remodelar tiendas, igualar los precios de la cadena grande en los artículos visibles y ampliar el surtido para el cliente de casa.',
                  upside: 'Protege la base actual y toda la empresa lo entiende fácil.',
                  risk: 'Pelea contra el competidor donde es más fuerte y se come el efectivo que se necesita para todo lo demás.',
                },
                {
                  name: 'Ser el socio del maestro de obra',
                  text: 'Rediseñar tiendas y servicios alrededor del maestro de obra, y hacer un piloto de abasto industrial en una región.',
                  upside: 'Construye sobre lo que el competidor no puede copiar y abre una nueva fuente de crecimiento.',
                  risk: 'Se perderá parte de la venta al cliente de casa, y el piloto industrial requiere capacidades nuevas.',
                  recommended: true,
                },
                {
                  name: 'Expandirse a nuevas ciudades',
                  text: 'Abrir diez tiendas en ciudades donde todavía no han llegado las cadenas grandes.',
                  upside: 'Crecimiento visible y ventaja de llegar primero a mercados nuevos.',
                  risk: 'Replica un modelo que ya está bajo presión, y el competidor va a llegar tarde o temprano.',
                },
              ],
            },
          ],
          notes: [
            'La opción C es la que probablemente le encante a la familia, porque se ve como crecimiento. Mostraría qué pasa con las tiendas nuevas cuando la cadena grande llegue en tres años.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Ir con la opción B. El plan se resume en tres compromisos para los próximos tres años:' },
            {
              t: 'points',
              items: [
                { title: 'Ganar al maestro de obra.', text: 'Todas las tiendas rediseñadas alrededor del servicio al maestro de obra al cierre del segundo año.' },
                { title: 'Probar el abasto industrial.', text: 'Un piloto en el primer año y la decisión de escalar o detener en el mes doce.' },
                { title: 'Dejar lo que no paga.', text: 'Menos artículos, nada de igualar precios en artículos para el hogar y ninguna tienda nueva hasta probar el modelo.' },
              ],
            },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Días 1 a 30',
                  text: 'Venta por tipo de cliente y por tienda. Acordar la lista de lo que dejamos de hacer con ambas generaciones. Nombrar un dueño por compromiso.',
                },
                {
                  label: 'Días 31 a 60',
                  text: 'Lanzar el programa para maestros de obra en tres tiendas. Entrevistar a 15 gerentes de mantenimiento en el parque industrial más cercano.',
                },
                {
                  label: 'Días 61 a 90',
                  text: 'Revisar las tiendas piloto, ajustar el programa y cerrar los primeros clientes industriales a prueba.',
                },
                {
                  label: 'Cómo lo medimos',
                  text: 'Venta y retención de maestros de obra, entregas a tiempo, efectivo amarrado en inventario, cuentas industriales activas y margen por tipo de cliente.',
                },
              ],
            },
          ],
          notes: [
            'La lista de lo que dejamos de hacer es donde se va a poner a prueba este plan. Si a nadie le incomoda, no es una lista real.',
            'Lo primero que validaría: qué tanto del negocio con maestros de obra depende de vendedores en lo individual. Si ellos se van, ¿el cliente se queda?',
          ],
        },
      ],
    },
  },
};
