import type { Scenario } from './types';

export const marketLaunch: Scenario = {
  id: 'market-launch',
  run: {
    en: {
      label: 'Market launch',
      brief:
        'A Mexican appliance maker has built a countertop water purifier for apartments. It needs no installation and uses a filter that lasts about three months. The plan is to launch in Monterrey, Guadalajara and Mexico City. Leadership asks: how do we launch it?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'The question asked', text: 'How do we launch the purifier?' },
                {
                  label: 'The question worth answering',
                  text: 'Which first customer and channel give us proof of demand fast enough to justify a national rollout, without burning the budget to find out?',
                },
                { label: 'Scope', text: 'Consumers in the three largest cities, a first year launch budget and a production run already committed.' },
                { label: 'Decision it informs', text: 'Launch sequence, pricing model, channel mix and the size of the second production run.' },
              ],
            },
          ],
          notes: [
            'The committed production run is the real pressure here. I’d make sure the plan isn’t quietly built around moving inventory instead of learning.',
            'Three cities at once sounds ambitious. I’d ask what we expect to learn in the third city that we wouldn’t learn in the first.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Signals that shape the problem:' },
            {
              t: 'points',
              items: [
                { text: 'Most households buy 20 liter jugs delivered to the door every week. It is a habit, a delivery relationship and a recurring cost.' },
                { text: 'Trust in tap water is low, and trust in filters depends on proof people can see or taste.' },
                { text: 'More people rent apartments in new vertical buildings, where installing anything under the sink is not allowed or not worth it.' },
                { text: 'Awareness of plastic waste is growing, especially among younger renters.' },
              ],
            },
          ],
          notes: [
            'The jug habit is the most important line on this page. Everything else in the plan has to answer it.',
            'I’d validate the trust signal with blind taste tests before any campaign. If people can’t tell, the story has to be about cost and convenience.',
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
                  text: 'Strong engineering and manufacturing, relationships with department stores from other appliances, and no experience selling direct to consumers.',
                },
                {
                  label: 'Customers',
                  text: 'Young renters in apartments who hate carrying jugs, families with children who worry about quality, and small offices buying jugs every week.',
                },
                {
                  label: 'Competitors',
                  text: 'Jug delivery, which is the real competitor. Behind it, under sink filters from international brands and cheap pitcher filters.',
                },
                { label: 'Collaborators', text: 'Department stores, online marketplaces, apartment developers and building managers.' },
                {
                  label: 'Context',
                  text: 'Concern about water quality, rising rents that make every monthly expense visible, and growing interest in less plastic.',
                },
              ],
            },
          ],
          notes: ['Small offices are a quiet segment worth testing. They buy jugs every week, someone already manages the expense and one sale covers many people.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'We compete with a habit, not with other filters.',
                  text: 'Switching means changing a weekly routine. The pitch has to be about cost per month and never carrying a jug again, not about filtration technology.',
                },
                {
                  title: 'No installation is the unlock.',
                  text: 'Renters are the fastest growing group in the target cities and they cannot modify the kitchen. A countertop design is the main advantage over under sink filters.',
                },
                {
                  title: 'The filter is the business.',
                  text: 'The purifier gets the customer in. Replacement filters every three months are where the margin and the lifetime value sit.',
                },
              ],
            },
          ],
          notes: [
            'Insight three changes how we judge the launch. A low device price can be fine if filter renewal is strong. I’d model both before setting a price.',
            'I’d push back if marketing wants to lead with technology. Nobody switches from jugs because of a micron count.',
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
                  text: 'Price and communicate against the jug: show the monthly cost side by side, and offer a trial period with free returns to lower the risk of switching.',
                },
                {
                  label: 'Improve',
                  text: 'A filter subscription with automatic delivery and a reminder before each change, so the recurring revenue doesn’t depend on memory.',
                },
                {
                  label: 'Wow',
                  text: 'Partner with apartment developers so the purifier comes installed in new units, with the first filters included and the subscription offered at move in.',
                },
              ],
            },
          ],
          notes: ['The free return is a cost, but it is also a message. If we are confident in the product, it pays for itself in conversion.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'National launch through retail',
                  text: 'Launch in department stores in all three cities, supported by mass media.',
                  upside: 'Fast reach and volume that moves the committed inventory.',
                  risk: 'High cost before we know what message works, and no direct link to customers for filter renewals.',
                },
                {
                  name: 'Focused launch, one city',
                  text: 'Launch in Monterrey through our own site and one marketplace, with the filter subscription and a pilot with two developers.',
                  upside: 'Real data on acquisition cost and filter renewal before scaling, and a direct customer relationship.',
                  risk: 'Slower volume, so the inventory needs a plan, and we have to build direct sales skills we don’t have.',
                  recommended: true,
                },
                {
                  name: 'Offices first',
                  text: 'Sell to small and mid size offices that already pay for jug delivery, and enter homes later.',
                  upside: 'Larger orders, easier economics and word of mouth from employees.',
                  risk: 'A different sales motion, and it delays learning about the main consumer market.',
                },
              ],
            },
          ],
          notes: [
            'I’d run a small version of option C inside B. Twenty offices is a cheap test, and it could become the best channel for the excess inventory.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Go with option B, with a small office test running alongside.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Days 1 to 30',
                  text: 'Test three combinations of price and message with paid social and landing pages in Monterrey. Measure reservations, not clicks. Run blind taste tests with 100 people.',
                },
                {
                  label: 'Days 31 to 60',
                  text: 'Launch on our own site and one marketplace with the winning combination. Start the developer pilot with 100 units and the office test with 20 companies.',
                },
                {
                  label: 'Days 61 to 90',
                  text: 'Track acquisition cost, subscription signups and returns. Decide on the second city and the size of the next production run.',
                },
                {
                  label: 'Measures',
                  text: 'Cost per customer, share of buyers who subscribe to filters, filter renewal in month three, return rate and satisfaction after 30 days.',
                },
              ],
            },
          ],
          notes: [
            'Filter renewal in month three is the number that decides everything. If it’s weak, the business model needs work before any more cities.',
            'What I’d validate first: whether people trust a filter as much as a sealed jug. Trust drives this category more than price.',
          ],
        },
      ],
    },
    es: {
      label: 'Lanzamiento al mercado',
      brief:
        'Un fabricante mexicano de electrodomésticos desarrolló un purificador de agua de mesa para departamentos. No requiere instalación y usa un filtro que dura unos tres meses. El plan es lanzarlo en Monterrey, Guadalajara y la Ciudad de México. La dirección pregunta: ¿cómo lo lanzamos?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'La pregunta que nos hacen', text: '¿Cómo lanzamos el purificador?' },
                {
                  label: 'La pregunta que vale la pena responder',
                  text: '¿Qué primer cliente y qué canal nos dan prueba de demanda lo bastante rápido para justificar un lanzamiento nacional, sin quemar el presupuesto para averiguarlo?',
                },
                { label: 'Alcance', text: 'Consumidores en las tres ciudades más grandes, un presupuesto de lanzamiento para el primer año y un lote de producción ya comprometido.' },
                { label: 'Decisión que informa', text: 'Secuencia de lanzamiento, modelo de precios, mezcla de canales y tamaño del segundo lote de producción.' },
              ],
            },
          ],
          notes: [
            'El lote de producción comprometido es la verdadera presión aquí. Me aseguraría de que el plan no esté construido, sin decirlo, para mover inventario en lugar de aprender.',
            'Tres ciudades a la vez suena ambicioso. Preguntaría qué esperamos aprender en la tercera ciudad que no aprenderíamos en la primera.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Señales que definen el problema:' },
            {
              t: 'points',
              items: [
                { text: 'La mayoría de los hogares compra garrafones de 20 litros que les llevan a la puerta cada semana. Es un hábito, una relación con el repartidor y un gasto recurrente.' },
                { text: 'La confianza en el agua de la llave es baja, y la confianza en los filtros depende de una prueba que la gente pueda ver o probar.' },
                { text: 'Cada vez más personas rentan en edificios verticales nuevos, donde instalar algo bajo la tarja no está permitido o no vale la pena.' },
                { text: 'Crece la conciencia sobre los residuos plásticos, sobre todo entre quienes rentan y son más jóvenes.' },
              ],
            },
          ],
          notes: [
            'El hábito del garrafón es la línea más importante de esta página. Todo lo demás en el plan tiene que responderle.',
            'Validaría la señal de confianza con pruebas de sabor a ciegas antes de cualquier campaña. Si la gente no nota la diferencia, la historia tiene que ser de costo y comodidad.',
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
                  text: 'Ingeniería y manufactura sólidas, relación con tiendas departamentales por otros electrodomésticos y cero experiencia vendiendo directo al consumidor.',
                },
                {
                  label: 'Clientes',
                  text: 'Jóvenes que rentan departamento y odian cargar garrafones, familias con hijos preocupadas por la calidad y oficinas pequeñas que compran garrafones cada semana.',
                },
                {
                  label: 'Competidores',
                  text: 'El reparto de garrafones, que es el competidor real. Detrás, filtros bajo tarja de marcas internacionales y jarras filtrantes baratas.',
                },
                { label: 'Colaboradores', text: 'Tiendas departamentales, marketplaces en línea, desarrolladores de vivienda y administradores de edificios.' },
                {
                  label: 'Contexto',
                  text: 'Preocupación por la calidad del agua, rentas al alza que hacen visible cada gasto mensual e interés creciente en usar menos plástico.',
                },
              ],
            },
          ],
          notes: ['Las oficinas pequeñas son un segmento silencioso que vale la pena probar. Compran garrafones cada semana, alguien ya administra ese gasto y una venta cubre a muchas personas.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'Competimos contra un hábito, no contra otros filtros.',
                  text: 'Cambiar implica romper una rutina semanal. El mensaje tiene que hablar del costo al mes y de no volver a cargar un garrafón, no de tecnología de filtración.',
                },
                {
                  title: 'No requerir instalación es la llave.',
                  text: 'Quienes rentan son el grupo que más crece en las ciudades objetivo y no pueden modificar la cocina. El diseño de mesa es la principal ventaja frente a los filtros bajo tarja.',
                },
                {
                  title: 'El negocio está en el filtro.',
                  text: 'El purificador atrae al cliente. Los filtros de reemplazo cada tres meses son donde están el margen y el valor de vida del cliente.',
                },
              ],
            },
          ],
          notes: [
            'El tercer insight cambia cómo evaluamos el lanzamiento. Un precio bajo del equipo puede estar bien si la renovación de filtros es fuerte. Modelaría ambos escenarios antes de fijar el precio.',
            'Pondría un alto si marketing quiere abrir con tecnología. Nadie deja el garrafón por un número de micras.',
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
                  text: 'Fijar precio y comunicar contra el garrafón: mostrar el costo mensual lado a lado y ofrecer un periodo de prueba con devolución gratis para bajar el riesgo de cambiarse.',
                },
                {
                  label: 'Mejorar',
                  text: 'Una suscripción de filtros con entrega automática y un recordatorio antes de cada cambio, para que el ingreso recurrente no dependa de la memoria del cliente.',
                },
                {
                  label: 'Sorprender',
                  text: 'Alianzas con desarrolladores de vivienda para que el purificador venga instalado en departamentos nuevos, con los primeros filtros incluidos y la suscripción ofrecida al mudarse.',
                },
              ],
            },
          ],
          notes: ['La devolución gratis es un costo, pero también es un mensaje. Si confiamos en el producto, se paga sola en conversión.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Lanzamiento nacional en retail',
                  text: 'Lanzar en tiendas departamentales en las tres ciudades, con apoyo de medios masivos.',
                  upside: 'Alcance rápido y volumen que mueve el inventario comprometido.',
                  risk: 'Costo alto antes de saber qué mensaje funciona, y sin relación directa con el cliente para renovar filtros.',
                },
                {
                  name: 'Lanzamiento enfocado en una ciudad',
                  text: 'Lanzar en Monterrey con sitio propio y un marketplace, con la suscripción de filtros y un piloto con dos desarrolladores.',
                  upside: 'Datos reales de costo de adquisición y renovación de filtros antes de escalar, y relación directa con el cliente.',
                  risk: 'Volumen más lento, así que el inventario necesita un plan, y hay que construir capacidades de venta directa que no tenemos.',
                  recommended: true,
                },
                {
                  name: 'Primero oficinas',
                  text: 'Vender a oficinas pequeñas y medianas que ya pagan por garrafones, y entrar a hogares después.',
                  upside: 'Pedidos más grandes, mejores números y recomendación de boca en boca entre empleados.',
                  risk: 'Un modelo de venta distinto, y retrasa el aprendizaje sobre el mercado de consumo principal.',
                },
              ],
            },
          ],
          notes: [
            'Correría una versión pequeña de la opción C dentro de la B. Veinte oficinas es una prueba barata, y podría convertirse en el mejor canal para el inventario que sobre.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Ir con la opción B, con una prueba pequeña en oficinas en paralelo.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Días 1 a 30',
                  text: 'Probar tres combinaciones de precio y mensaje con pauta en redes sociales y landing pages en Monterrey. Medir apartados, no clics. Hacer pruebas de sabor a ciegas con 100 personas.',
                },
                {
                  label: 'Días 31 a 60',
                  text: 'Lanzar en sitio propio y un marketplace con la combinación ganadora. Arrancar el piloto con desarrolladores con 100 unidades y la prueba en 20 oficinas.',
                },
                {
                  label: 'Días 61 a 90',
                  text: 'Medir costo de adquisición, altas en la suscripción y devoluciones. Decidir la segunda ciudad y el tamaño del siguiente lote de producción.',
                },
                {
                  label: 'Cómo lo medimos',
                  text: 'Costo por cliente, porcentaje de compradores que se suscriben a los filtros, renovación de filtro en el tercer mes, tasa de devolución y satisfacción a los 30 días.',
                },
              ],
            },
          ],
          notes: [
            'La renovación del filtro en el tercer mes es el número que lo decide todo. Si es débil, el modelo de negocio necesita trabajo antes de abrir más ciudades.',
            'Lo primero que validaría: si la gente confía en un filtro tanto como en un garrafón sellado. En esta categoría, la confianza pesa más que el precio.',
          ],
        },
      ],
    },
  },
};
