import type { Scenario } from './types';

export const aiAdoption: Scenario = {
  id: 'ai-adoption',
  run: {
    en: {
      label: 'AI adoption',
      brief:
        'A family owned industrial distributor in Monterrey, Mexico, with 400 people and 12 branches, sells parts and supplies to factories and contractors. Competitors are announcing AI pilots and the board wants a plan. Leadership asks: where should we use AI first?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'The question asked', text: 'Where should we use AI first?' },
                {
                  label: 'The question worth answering',
                  text: 'Which two or three workflows, if AI helps, would change margin or service in a way customers notice, and what has to be in place to run them safely?',
                },
                { label: 'Scope', text: 'Sales, customer service and back office. Twelve months. A budget a mid size company can defend to its board.' },
                { label: 'Decision it informs', text: 'Which pilots to fund now, which tools to approve and who owns AI inside the company.' },
              ],
            },
          ],
          notes: [
            '“Where should we use AI” starts from the tool. I’d rather start from the work: where do people spend hours on tasks a customer never sees?',
            'I’d ask who on the board is pushing this and why. A plan built to calm the board looks very different from one built to move margin.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Signals that shape the problem:' },
            {
              t: 'points',
              items: [
                { text: 'Requests for quotes arrive by email and WhatsApp as photos, part numbers and free text. Reps match them by hand against a catalog of 40,000 items.' },
                { text: 'Employees already use free chatbots on their phones, sometimes pasting customer price lists into them.' },
                { text: 'Software vendors are pitching AI features inside tools the company already pays for.' },
                { text: 'Product data in the ERP is inconsistent: duplicate items, missing specs and three naming conventions.' },
              ],
            },
          ],
          notes: [
            'The second signal is a risk today, not a future one. It goes to the top of the list regardless of what else we decide.',
            'I’d confirm the quoting time with a stopwatch, not a survey. People underestimate the minutes they spend on repetitive work.',
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
                  text: 'Experienced reps with deep product knowledge, an ERP that works for invoicing but not for search, no data team and an IT team of three.',
                },
                {
                  label: 'Customers',
                  text: 'Maintenance buyers at factories who need the right part fast, and contractors who compare prices across three distributors before buying.',
                },
                {
                  label: 'Competitors',
                  text: 'National distributors with online catalogs, marketplaces with fast delivery and local shops that win on relationships.',
                },
                { label: 'Collaborators', text: 'Brands that supply product data, the ERP provider and a few large customers willing to pilot new ways of ordering.' },
                {
                  label: 'Context',
                  text: 'Nearshoring is adding factories to the region, talent for technical sales is scarce and customers expect answers within the hour.',
                },
              ],
            },
          ],
          notes: ['Scarce sales talent is the strongest argument for AI here. The goal is to make each rep handle more requests, not to replace them.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'The bottleneck is the quote, not the marketing.',
                  text: 'Reps spend close to half their day turning messy requests into quotes. Response time decides who wins the order more often than price does.',
                },
                {
                  title: 'Data quality is the constraint, not the model.',
                  text: 'Any assistant that searches the catalog will fail on duplicates and missing specs. Cleaning product data is the first AI project, even if it is the least visible.',
                },
                {
                  title: 'Adoption fails at the branch, not in the pilot.',
                  text: 'Tools that save time in a demo get ignored when they add steps for the rep. The workflow has to be shorter than the current one on day one.',
                },
              ],
            },
          ],
          notes: [
            'Insight one I’d test with the win and loss data: do faster quotes really convert better, or does it only feel that way to sales?',
            'Insight three is where most AI plans die. I’d put a rep on the design team, not just in the user testing.',
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
                  text: 'Publish a simple usage policy, approve one secure assistant for everyone and stop customer data from going into free tools.',
                },
                {
                  label: 'Improve',
                  text: 'An AI assisted quote: it reads the request, matches items in the catalog, flags what it is unsure about and drafts the quote. The rep reviews and sends.',
                },
                {
                  label: 'Wow',
                  text: 'A WhatsApp assistant for repeat customers that confirms stock, suggests equivalent parts and hands off to a rep for anything involving price.',
                },
              ],
            },
          ],
          notes: [
            'The rule I’d hold for Improve and Wow: AI drafts, a person commits. A wrong price or a wrong part costs more trust than a slow answer.',
          ],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Licenses for everyone',
                  text: 'Buy an AI assistant for every employee and let teams find their own uses.',
                  upside: 'Fast, visible and easy to announce.',
                  risk: 'Usage fades after the first month and nobody can show a result to the board.',
                },
                {
                  name: 'Two focused workflows',
                  text: 'Clean the product data and pilot AI assisted quoting in two branches, with clear measures.',
                  upside: 'A measurable result in one quarter and a pattern the rest of the company can copy.',
                  risk: 'Less visible at first, and the data cleanup takes patience.',
                  recommended: true,
                },
                {
                  name: 'Build a platform',
                  text: 'Hire a data team and build an internal AI platform before choosing use cases.',
                  upside: 'Full control and a long term capability.',
                  risk: 'A year of cost before the first result, and talent the company may not keep.',
                },
              ],
            },
          ],
          notes: [
            'Option A is what most companies do first. I’d keep a small version of it alongside B, because the secure assistant also solves the data leak.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Go with option B, with the usage policy and one approved assistant from week one.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Days 1 to 30',
                  text: 'Publish the policy and roll out the approved assistant. Time 200 real quotes from request to send. Start cleaning the 3,000 items that make up most of the sales.',
                },
                {
                  label: 'Days 31 to 60',
                  text: 'Pilot AI assisted quoting with six reps in two branches. Every draft is reviewed, and every correction is logged to improve the matching.',
                },
                {
                  label: 'Days 61 to 90',
                  text: 'Compare the pilot branches against the rest. If the gains hold, extend to all branches and scope the WhatsApp assistant.',
                },
                {
                  label: 'Measures',
                  text: 'Time from request to quote, quotes per rep per day, win rate, share of drafts sent without changes and pricing errors caught in review.',
                },
              ],
            },
          ],
          notes: [
            'The decision gate is quality, not speed. If the share of drafts that need heavy edits doesn’t fall over the pilot, the data isn’t ready yet.',
            'What I’d validate first: whether customers actually notice a faster quote. If they don’t, the case rests on rep capacity alone, which is still a good case.',
          ],
        },
      ],
    },
    es: {
      label: 'Adopción de IA',
      brief:
        'Un distribuidor industrial familiar en Monterrey, México, con 400 personas y 12 sucursales, vende refacciones e insumos a fábricas y contratistas. Sus competidores están anunciando pilotos de IA y el consejo quiere un plan. La dirección pregunta: ¿dónde usamos IA primero?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'La pregunta que nos hacen', text: '¿Dónde usamos IA primero?' },
                {
                  label: 'La pregunta que vale la pena responder',
                  text: '¿Qué dos o tres procesos, con ayuda de IA, cambiarían el margen o el servicio de una forma que el cliente note, y qué necesitamos tener listo para operarlos con seguridad?',
                },
                { label: 'Alcance', text: 'Ventas, servicio al cliente y back office. Doce meses. Un presupuesto que una empresa mediana pueda defender ante su consejo.' },
                { label: 'Decisión que informa', text: 'Qué pilotos financiar ahora, qué herramientas aprobar y quién es dueño de la IA dentro de la empresa.' },
              ],
            },
          ],
          notes: [
            '“¿Dónde usamos IA?” parte de la herramienta. Prefiero partir del trabajo: ¿dónde pasa la gente horas en tareas que el cliente nunca ve?',
            'Preguntaría quién en el consejo está empujando esto y por qué. Un plan hecho para tranquilizar al consejo se ve muy distinto a uno hecho para mover el margen.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Señales que definen el problema:' },
            {
              t: 'points',
              items: [
                { text: 'Las solicitudes de cotización llegan por correo y WhatsApp como fotos, números de parte y texto libre. Los vendedores las buscan a mano en un catálogo de 40,000 artículos.' },
                { text: 'Los empleados ya usan chatbots gratuitos en su celular, y a veces pegan ahí listas de precios de clientes.' },
                { text: 'Los proveedores de software están ofreciendo funciones de IA dentro de herramientas que la empresa ya paga.' },
                { text: 'Los datos de producto en el ERP son inconsistentes: artículos duplicados, especificaciones faltantes y tres formas distintas de nombrar las cosas.' },
              ],
            },
          ],
          notes: [
            'La segunda señal es un riesgo de hoy, no del futuro. Va al inicio de la lista sin importar lo que decidamos después.',
            'Confirmaría el tiempo de cotización con cronómetro, no con una encuesta. La gente subestima los minutos que dedica al trabajo repetitivo.',
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
                  text: 'Vendedores con experiencia y mucho conocimiento de producto, un ERP que funciona para facturar pero no para buscar, sin equipo de datos y con un equipo de TI de tres personas.',
                },
                {
                  label: 'Clientes',
                  text: 'Compradores de mantenimiento en fábricas que necesitan la pieza correcta rápido, y contratistas que comparan precios con tres distribuidores antes de comprar.',
                },
                {
                  label: 'Competidores',
                  text: 'Distribuidores nacionales con catálogo en línea, marketplaces con entrega rápida y negocios locales que ganan por relación.',
                },
                { label: 'Colaboradores', text: 'Marcas que proveen datos de producto, el proveedor del ERP y algunos clientes grandes dispuestos a probar nuevas formas de pedir.' },
                {
                  label: 'Contexto',
                  text: 'El nearshoring está sumando fábricas a la región, el talento para venta técnica escasea y los clientes esperan respuesta en menos de una hora.',
                },
              ],
            },
          ],
          notes: ['La escasez de talento comercial es el argumento más fuerte para la IA aquí. La meta es que cada vendedor atienda más solicitudes, no reemplazarlo.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'El cuello de botella es la cotización, no el marketing.',
                  text: 'Los vendedores pasan casi la mitad del día convirtiendo solicitudes desordenadas en cotizaciones. El tiempo de respuesta decide quién gana el pedido más seguido que el precio.',
                },
                {
                  title: 'La calidad de los datos es la restricción, no el modelo.',
                  text: 'Cualquier asistente que busque en el catálogo va a fallar con duplicados y especificaciones faltantes. Limpiar los datos de producto es el primer proyecto de IA, aunque sea el menos visible.',
                },
                {
                  title: 'La adopción falla en la sucursal, no en el piloto.',
                  text: 'Las herramientas que ahorran tiempo en una demo se ignoran cuando le agregan pasos al vendedor. El nuevo proceso tiene que ser más corto que el actual desde el primer día.',
                },
              ],
            },
          ],
          notes: [
            'El primer insight lo probaría con los datos de pedidos ganados y perdidos: ¿las cotizaciones rápidas realmente convierten mejor, o solo se siente así en ventas?',
            'En el tercero es donde mueren la mayoría de los planes de IA. Pondría a un vendedor en el equipo de diseño, no solo en las pruebas con usuarios.',
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
                  text: 'Publicar una política de uso sencilla, aprobar un asistente seguro para todos y evitar que los datos de clientes terminen en herramientas gratuitas.',
                },
                {
                  label: 'Mejorar',
                  text: 'Cotización asistida por IA: lee la solicitud, encuentra los artículos en el catálogo, marca lo que no tiene claro y arma el borrador. El vendedor revisa y envía.',
                },
                {
                  label: 'Sorprender',
                  text: 'Un asistente de WhatsApp para clientes recurrentes que confirma existencias, sugiere piezas equivalentes y pasa a un vendedor todo lo que tenga que ver con precio.',
                },
              ],
            },
          ],
          notes: [
            'La regla que sostendría en Mejorar y Sorprender: la IA prepara, una persona se compromete. Un precio o una pieza equivocada cuesta más confianza que una respuesta lenta.',
          ],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Licencias para todos',
                  text: 'Comprar un asistente de IA para cada empleado y dejar que cada equipo encuentre sus usos.',
                  upside: 'Rápido, visible y fácil de anunciar.',
                  risk: 'El uso se cae después del primer mes y nadie puede mostrarle un resultado al consejo.',
                },
                {
                  name: 'Dos procesos enfocados',
                  text: 'Limpiar los datos de producto y hacer un piloto de cotización asistida en dos sucursales, con métricas claras.',
                  upside: 'Un resultado medible en un trimestre y un modelo que el resto de la empresa puede replicar.',
                  risk: 'Menos visible al principio, y la limpieza de datos requiere paciencia.',
                  recommended: true,
                },
                {
                  name: 'Construir una plataforma',
                  text: 'Contratar un equipo de datos y construir una plataforma interna de IA antes de elegir casos de uso.',
                  upside: 'Control total y una capacidad de largo plazo.',
                  risk: 'Un año de costo antes del primer resultado, y talento que la empresa quizá no logre retener.',
                },
              ],
            },
          ],
          notes: [
            'La opción A es lo que hace primero la mayoría. Mantendría una versión pequeña junto con la B, porque el asistente seguro también resuelve la fuga de datos.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Ir con la opción B, con la política de uso y un asistente aprobado desde la primera semana.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Días 1 a 30',
                  text: 'Publicar la política y liberar el asistente aprobado. Medir 200 cotizaciones reales de la solicitud al envío. Empezar a limpiar los 3,000 artículos que concentran la mayor parte de la venta.',
                },
                {
                  label: 'Días 31 a 60',
                  text: 'Piloto de cotización asistida con seis vendedores en dos sucursales. Cada borrador se revisa y cada corrección se registra para mejorar la búsqueda.',
                },
                {
                  label: 'Días 61 a 90',
                  text: 'Comparar las sucursales piloto contra el resto. Si los resultados se sostienen, extender a todas las sucursales y definir el asistente de WhatsApp.',
                },
                {
                  label: 'Cómo lo medimos',
                  text: 'Tiempo de la solicitud a la cotización, cotizaciones por vendedor al día, tasa de cierre, porcentaje de borradores enviados sin cambios y errores de precio detectados en la revisión.',
                },
              ],
            },
          ],
          notes: [
            'La compuerta de decisión es la calidad, no la velocidad. Si durante el piloto no baja el porcentaje de borradores que requieren muchos cambios, los datos todavía no están listos.',
            'Lo primero que validaría: si los clientes realmente notan una cotización más rápida. Si no, el caso descansa solo en la capacidad de los vendedores, que sigue siendo un buen caso.',
          ],
        },
      ],
    },
  },
};
