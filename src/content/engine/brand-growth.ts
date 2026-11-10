import type { Scenario } from './types';

export const brandGrowth: Scenario = {
  id: 'brand-growth',
  run: {
    en: {
      label: 'Brand growth',
      brief:
        'A regional snack brand in northern Mexico is losing supermarket share to private labels. Volume has fallen for three straight quarters while the category keeps growing. Leadership asks: how do we win back share?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'The question asked', text: 'How do we win back share from private labels?' },
                {
                  label: 'The question worth answering',
                  text: 'Where can we earn a price premium that shoppers will defend, and where should we stop fighting on price?',
                },
                { label: 'Scope', text: 'Supermarkets in northern Mexico, an 18 month horizon, no budget for national media.' },
                { label: 'Decision it informs', text: 'Portfolio, pricing and retailer strategy for next year’s plan.' },
              ],
            },
          ],
          notes: [
            'The brief frames this as a share problem. I’d check first whether it’s a margin problem. Losing low margin volume can be healthy.',
            'I’d ask for the corner store numbers too. The traditional channel may tell a very different story than supermarkets.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Signals that shape the problem:' },
            {
              t: 'points',
              items: [
                { text: 'Shoppers are trading down on everyday staples, and supermarkets are giving their own brands the best shelf space and promo slots.' },
                { text: 'Snacks are partly protected. They are impulse purchases driven by taste, so a cheaper copy doesn’t always win.' },
                { text: 'Regional flavor matters. In food, local identity is a real reason to choose one brand over another.' },
                { text: 'Convenience stores keep gaining snack occasions, especially single serve and on the go.' },
              ],
            },
          ],
          notes: [
            'These are hypotheses from desk research. Before building on them I’d want retailer sell out data and twenty conversations with shoppers at the shelf.',
            'Trading down is rarely permanent. Part of it usually comes back when prices stabilize.',
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
                  text: 'Strong regional awareness, recipes people associate with the north, one plant with spare capacity, a lean marketing budget and a sales team built around supermarkets.',
                },
                {
                  label: 'Customers',
                  text: 'Two groups that behave very differently: value seekers buying family packs on price per gram, and flavor loyalists buying single serve and regional flavors.',
                },
                {
                  label: 'Competitors',
                  text: 'Retailer private labels priced 25 to 30 percent below us, national leaders with heavy media budgets, and small local makers.',
                },
                { label: 'Collaborators', text: 'Supermarket category managers, distributors for corner stores, and convenience chains.' },
                {
                  label: 'Context',
                  text: 'Price sensitive shoppers, retailers pushing their own brands for margin, and snacking shifting toward convenience.',
                },
              ],
            },
          ],
          notes: ['The spare plant capacity is the detail most teams skip. It changes which options are realistic.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'Private label is winning the family pack, not the brand.',
                  text: 'Share loss concentrates in large multipacks, where shoppers compare price per gram. Single serve and regional flavors are holding.',
                },
                {
                  title: 'Flavor is the moat.',
                  text: 'Where the product tastes like the region, shoppers pay more and stay. Where it looks like any salted chip, we are a commodity.',
                },
                {
                  title: 'The shelf is decided before the shopper arrives.',
                  text: 'Losing promo slots and eye level space to private label explains more of the decline than any change in shopper preference.',
                },
              ],
            },
          ],
          notes: [
            'Insight one is the one I’d bet on, but I’d want SKU data split by store cluster before presenting it as fact.',
            'Insight three changes who the real customer is in this plan: the category manager.',
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
                  text: 'Stop competing head to head on price per gram. Resize the weakest family packs and redesign the price ladder so private label is no longer the obvious comparison.',
                },
                {
                  label: 'Improve',
                  text: 'Make regional flavors the hero: a clear flavor block on shelf, sharper naming and a portfolio built around what only we can make.',
                },
                {
                  label: 'Wow',
                  text: 'A limited “Flavors of the North” series created with local cooks, launched first in convenience stores and on social media to build demand that pulls supermarkets along.',
                },
              ],
            },
          ],
          notes: ['Wow only matters if Fix is handled first. Otherwise we are decorating a house with a leak.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Match private label on price',
                  text: 'Launch a value line at private label prices.',
                  upside: 'Protects volume quickly.',
                  risk: 'Margin collapses, the brand gets cheaper in shoppers’ minds and the retailer still controls the shelf.',
                },
                {
                  name: 'Premiumize around flavor',
                  text: 'Concentrate on regional flavors and exit the lowest margin multipacks.',
                  upside: 'Higher margin and a position private label cannot copy.',
                  risk: 'Volume drops before it recovers, and it needs retailer buy in.',
                  recommended: true,
                },
                {
                  name: 'Become the retailer’s partner',
                  text: 'Use spare capacity to manufacture private label while defending the branded flavors.',
                  upside: 'Fills the plant and earns goodwill with retailers.',
                  risk: 'Feeds the competitor and creates dependency on a single buyer.',
                },
              ],
            },
          ],
          notes: [
            'Option C will appeal to operations because it fills the plant. I’d keep it on the table only if the numbers show no better use for that capacity.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Go with option B, in sequence: protect the shelf first, then build the flavor premium.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Days 1 to 30',
                  text: 'Margin and share analysis by SKU and store cluster. Resize or cut the three weakest multipacks.',
                },
                {
                  label: 'Days 31 to 60',
                  text: 'Take a flavor led category story to the two largest retailers and run a shelf blocking test in 20 stores.',
                },
                {
                  label: 'Days 61 to 90',
                  text: 'Launch one limited regional flavor through convenience stores and social media. Track how it pulls supermarket demand.',
                },
                {
                  label: 'Measures',
                  text: 'Gross margin per store, share in regional flavors, promo slots secured and repeat purchase of the limited series.',
                },
              ],
            },
          ],
          notes: [
            'The 20 store test is the decision gate. If the flavor block doesn’t lift sales per meter of shelf, we stop and rethink before scaling.',
            'What I’d validate first: whether shoppers actually see us as the regional flavor brand, or if that’s only how we see ourselves.',
          ],
        },
      ],
    },
    es: {
      label: 'Crecimiento de marca',
      brief:
        'Una marca regional de botanas en el norte de México está perdiendo participación en autoservicios frente a las marcas propias. El volumen lleva tres trimestres a la baja mientras la categoría sigue creciendo. La dirección pregunta: ¿cómo recuperamos participación?',
      steps: [
        {
          key: 'frame',
          blocks: [
            {
              t: 'rows',
              rows: [
                { label: 'La pregunta que nos hacen', text: '¿Cómo recuperamos participación frente a las marcas propias?' },
                {
                  label: 'La pregunta que vale la pena responder',
                  text: '¿Dónde podemos sostener un precio premium que el consumidor defienda, y dónde debemos dejar de pelear por precio?',
                },
                { label: 'Alcance', text: 'Autoservicios en el norte de México, horizonte de 18 meses, sin presupuesto para medios nacionales.' },
                { label: 'Decisión que informa', text: 'Portafolio, precios y estrategia con cadenas para el plan del próximo año.' },
              ],
            },
          ],
          notes: [
            'El planteamiento lo presenta como un problema de participación. Primero revisaría si en realidad es de margen. Perder volumen de bajo margen puede ser sano.',
            'Pediría también los números del canal tradicional. Las tienditas pueden contar una historia muy distinta a la de los autoservicios.',
          ],
        },
        {
          key: 'scan',
          blocks: [
            { t: 'p', text: 'Señales que definen el problema:' },
            {
              t: 'points',
              items: [
                { text: 'El consumidor se está cambiando a opciones más baratas en básicos, y las cadenas le dan a su marca propia el mejor espacio en anaquel y las mejores promociones.' },
                { text: 'Las botanas están parcialmente protegidas. Son compra por impulso y por sabor, así que la copia más barata no siempre gana.' },
                { text: 'El sabor regional importa. En alimentos, la identidad local es una razón real para elegir una marca sobre otra.' },
                { text: 'Las tiendas de conveniencia siguen ganando ocasiones de consumo de botanas, sobre todo en presentaciones individuales y para llevar.' },
              ],
            },
          ],
          notes: [
            'Estas son hipótesis de investigación de escritorio. Antes de construir sobre ellas querría datos de sell out de las cadenas y veinte conversaciones con consumidores frente al anaquel.',
            'El cambio a opciones más baratas casi nunca es permanente. Parte suele regresar cuando los precios se estabilizan.',
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
                  text: 'Alto reconocimiento regional, recetas que la gente asocia con el norte, una planta con capacidad ociosa, un presupuesto de marketing limitado y un equipo comercial construido alrededor de autoservicios.',
                },
                {
                  label: 'Clientes',
                  text: 'Dos grupos que se comportan muy distinto: quienes buscan precio y compran presentaciones familiares por precio por gramo, y quienes son leales al sabor y compran individuales y sabores regionales.',
                },
                {
                  label: 'Competidores',
                  text: 'Marcas propias de las cadenas entre 25 y 30 por ciento más baratas, líderes nacionales con mucha inversión en medios y pequeños fabricantes locales.',
                },
                { label: 'Colaboradores', text: 'Category managers de las cadenas, distribuidores para tienditas y cadenas de conveniencia.' },
                {
                  label: 'Contexto',
                  text: 'Consumidores sensibles al precio, cadenas que empujan su marca propia por margen y un consumo de botanas que se mueve hacia la conveniencia.',
                },
              ],
            },
          ],
          notes: ['La capacidad ociosa de la planta es el detalle que casi todos se saltan. Cambia qué opciones son realistas.'],
        },
        {
          key: 'insights',
          blocks: [
            {
              t: 'points',
              ordered: true,
              items: [
                {
                  title: 'La marca propia está ganando la presentación familiar, no la marca.',
                  text: 'La pérdida se concentra en los multipacks grandes, donde el consumidor compara precio por gramo. Los individuales y los sabores regionales se sostienen.',
                },
                {
                  title: 'El sabor es la ventaja defendible.',
                  text: 'Donde el producto sabe a la región, el consumidor paga más y se queda. Donde parece cualquier papa salada, somos un commodity.',
                },
                {
                  title: 'El anaquel se decide antes de que llegue el consumidor.',
                  text: 'Perder promociones y espacio a la altura de los ojos frente a la marca propia explica más la caída que cualquier cambio en la preferencia del consumidor.',
                },
              ],
            },
          ],
          notes: [
            'El primer insight es mi apuesta, pero querría datos por SKU y por clúster de tiendas antes de presentarlo como un hecho.',
            'El tercero cambia quién es el cliente real de este plan: el category manager.',
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
                  text: 'Dejar de competir cara a cara por precio por gramo. Redimensionar las presentaciones familiares más débiles y rediseñar la escalera de precios para que la marca propia deje de ser la comparación obvia.',
                },
                {
                  label: 'Mejorar',
                  text: 'Hacer de los sabores regionales el protagonista: un bloque de sabor claro en anaquel, nombres más contundentes y un portafolio construido alrededor de lo que solo nosotros sabemos hacer.',
                },
                {
                  label: 'Sorprender',
                  text: 'Una serie limitada “Sabores del Norte” creada con cocineros locales, lanzada primero en tiendas de conveniencia y redes sociales para generar una demanda que arrastre a los autoservicios.',
                },
              ],
            },
          ],
          notes: ['Sorprender solo importa si primero corregimos. Si no, estamos decorando una casa con goteras.'],
        },
        {
          key: 'options',
          blocks: [
            {
              t: 'options',
              items: [
                {
                  name: 'Igualar el precio de la marca propia',
                  text: 'Lanzar una línea de valor al precio de la marca propia.',
                  upside: 'Protege el volumen rápido.',
                  risk: 'El margen se desploma, la marca se abarata en la mente del consumidor y la cadena sigue controlando el anaquel.',
                },
                {
                  name: 'Premiumizar alrededor del sabor',
                  text: 'Concentrarse en sabores regionales y salir de los multipacks de menor margen.',
                  upside: 'Mayor margen y una posición que la marca propia no puede copiar.',
                  risk: 'El volumen baja antes de recuperarse y requiere el respaldo de las cadenas.',
                  recommended: true,
                },
                {
                  name: 'Convertirnos en socio de la cadena',
                  text: 'Usar la capacidad ociosa para maquilar marca propia mientras defendemos los sabores de marca.',
                  upside: 'Llena la planta y genera buena relación con las cadenas.',
                  risk: 'Alimenta al competidor y crea dependencia de un solo comprador.',
                },
              ],
            },
          ],
          notes: [
            'La opción C le va a gustar a operaciones porque llena la planta. La mantendría sobre la mesa solo si los números muestran que no hay mejor uso para esa capacidad.',
          ],
        },
        {
          key: 'recommendation',
          blocks: [
            { t: 'p', text: 'Ir con la opción B, en secuencia: primero proteger el anaquel, después construir el premium del sabor.' },
            {
              t: 'rows',
              rows: [
                {
                  label: 'Días 1 a 30',
                  text: 'Análisis de margen y participación por SKU y clúster de tiendas. Redimensionar o eliminar los tres multipacks más débiles.',
                },
                {
                  label: 'Días 31 a 60',
                  text: 'Llevar a las dos cadenas más grandes una historia de categoría basada en sabor y correr una prueba de bloque en anaquel en 20 tiendas.',
                },
                {
                  label: 'Días 61 a 90',
                  text: 'Lanzar un sabor regional de edición limitada en tiendas de conveniencia y redes sociales. Medir cómo arrastra la demanda en autoservicios.',
                },
                {
                  label: 'Cómo lo medimos',
                  text: 'Margen bruto por tienda, participación en sabores regionales, espacios promocionales asegurados y recompra de la serie limitada.',
                },
              ],
            },
          ],
          notes: [
            'La prueba en 20 tiendas es la compuerta de decisión. Si el bloque de sabor no sube la venta por metro de anaquel, nos detenemos y replanteamos antes de escalar.',
            'Lo primero que validaría: si el consumidor realmente nos ve como la marca del sabor regional, o si solo es como nos vemos nosotros.',
          ],
        },
      ],
    },
  },
};
