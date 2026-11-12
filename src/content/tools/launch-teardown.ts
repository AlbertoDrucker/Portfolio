import type { Localized } from '../../i18n/ui';

interface Section {
  id: string;
  title: string;
  lead: string;
  rows?: { label: string; text: string }[];
  plans?: { name: string; price: string; who: string; includes: string }[];
  weeks?: { when: string; what: string }[];
  call: string;
}

export const launchTeardown: Localized<{ product: string; brief: string; callLabel: string; fictional: string; planCols: [string, string, string, string]; sections: Section[] }> = {
  en: {
    product: 'Mesa Lista',
    brief:
      'A fictional product: a reservation tool for independent restaurants that takes a small deposit when a guest books, so tables stop sitting empty. The team has a working product, 40 pilot restaurants in Monterrey, Mexico, and a budget for one city launch.',
    callLabel: 'My call',
    fictional: 'Mesa Lista and its numbers are invented to show the method. Any resemblance to a real product is a coincidence.',
    planCols: ['Plan', 'Price', 'For', 'Includes'],
    sections: [
      {
        id: 'customer',
        title: 'Who it is for',
        lead: 'Three kinds of restaurants showed up in the pilot. Only one of them feels the problem every week.',
        rows: [
          { label: 'Chosen segment', text: 'Independent restaurants with 15 to 40 tables, a ticket above the city average and weekend demand they can’t fully seat.' },
          { label: 'Why them', text: 'A no show on a Saturday costs them a table they could have sold twice. They already take reservations by WhatsApp and lose track.' },
          { label: 'Not now', text: 'Casual places that live on walk ins, and restaurant groups that already pay for a full reservation platform.' },
        ],
        call: 'The pilot data says busy restaurants convert three times better than quiet ones. I’d resist the temptation to sell to everyone with tables.',
      },
      {
        id: 'insight',
        title: 'The insight',
        lead: 'Owners don’t describe the problem as no shows. They describe it as a Saturday that looked full and wasn’t.',
        rows: [
          { label: 'What they say', text: '“I turned people away at eight and had three empty tables at nine.”' },
          { label: 'What it means', text: 'The pain is lost revenue on the best night of the week, and the embarrassment of turning away regulars for nothing.' },
          { label: 'The fear', text: 'That asking for a deposit will offend guests and send them to the restaurant next door.' },
        ],
        call: 'The fear matters more than the feature. If the launch doesn’t answer “will my guests hate this?”, nothing else gets heard.',
      },
      {
        id: 'positioning',
        title: 'Positioning',
        lead: 'One sentence the whole team can repeat.',
        rows: [
          { label: 'Statement', text: 'For independent restaurants that fill up on weekends, Mesa Lista is the reservation tool that makes every booked table show up, because guests confirm with a small deposit that goes toward their bill.' },
          { label: 'Against', text: 'The WhatsApp notebook, which is free and familiar. Not against the big reservation platforms.' },
          { label: 'Proof', text: 'Pilot restaurants cut no shows by more than half within the first month.' },
        ],
        call: 'Naming WhatsApp as the competitor is the key decision. It changes the pitch from “better software” to “stop losing Saturdays”.',
      },
      {
        id: 'message',
        title: 'Messages',
        lead: 'Three messages, each with its proof and the objection it answers.',
        rows: [
          { label: 'Full means full', text: 'Proof: fewer no shows in pilot restaurants. Answers: “Is this worth changing how I work?”' },
          { label: 'Guests don’t mind', text: 'Proof: the deposit goes toward the bill, and pilot guests completed most bookings. Answers: “Will my customers hate it?”' },
          { label: 'Ready this week', text: 'Proof: setup in one afternoon, bookings still arrive by WhatsApp link. Answers: “I don’t have time for new systems.”' },
        ],
        call: 'I’d lead every piece with the second message for the first month. It is the one that unlocks the other two.',
      },
      {
        id: 'pricing',
        title: 'Pricing and packaging',
        lead: 'Priced against the cost of one empty table, not against other software.',
        plans: [
          { name: 'Start', price: 'Free', who: 'Trying it on one night a week', includes: 'Up to 30 bookings a month, deposit by link' },
          { name: 'Full house', price: 'Monthly flat fee', who: 'The chosen segment', includes: 'Unlimited bookings, waitlist, reminders, weekend reports' },
          { name: 'Groups', price: 'Per location', who: 'Later, not at launch', includes: 'Several locations, shared guest list' },
        ],
        call: 'A flat fee is easier to say yes to than a cut of each deposit, even if the cut would earn more. Trust first, optimization later.',
      },
      {
        id: 'launch',
        title: 'Launch plan',
        lead: 'A focused launch in one city, built around proof from restaurants owners already know.',
        weeks: [
          { when: 'Weeks 1 and 2', what: 'Turn five pilot restaurants into short video stories. Train the two salespeople on the three messages and the deposit objection.' },
          { when: 'Weeks 3 and 4', what: 'Launch in two restaurant districts. Visits in person on slow afternoons, with a free setup on the spot.' },
          { when: 'Weeks 5 to 8', what: 'Referral offer between owners. Local food media and a monthly ranking of “full house” nights.' },
          { when: 'Week 9', what: 'Review: conversion from Start to Full house, and decide the second city.' },
        ],
        call: 'Restaurant owners trust other owners. I’d spend on five great stories before spending anything on ads.',
      },
      {
        id: 'measures',
        title: 'How we know it worked',
        lead: 'Few measures, chosen before launch.',
        rows: [
          { label: 'Adoption', text: 'Restaurants taking at least 20 bookings a month through Mesa Lista by week eight.' },
          { label: 'Value', text: 'No show rate before and after, by restaurant.' },
          { label: 'Business', text: 'Share of Start restaurants that move to Full house within 30 days.' },
          { label: 'Message', text: 'How often the deposit objection comes up in sales visits, and how often it is resolved.' },
        ],
        call: 'If owners sign up but guests don’t complete deposits, the product problem is on the guest side. That measure decides what the team builds next.',
      },
    ],
  },
  es: {
    product: 'Mesa Lista',
    brief:
      'Un producto ficticio: una herramienta de reservaciones para restaurantes independientes que cobra un pequeño depósito cuando el comensal reserva, para que las mesas dejen de quedarse vacías. El equipo tiene un producto funcionando, 40 restaurantes piloto en Monterrey, México, y presupuesto para lanzar en una ciudad.',
    callLabel: 'Mi decisión',
    fictional: 'Mesa Lista y sus números son inventados para mostrar el método. Cualquier parecido con un producto real es coincidencia.',
    planCols: ['Plan', 'Precio', 'Para', 'Incluye'],
    sections: [
      {
        id: 'customer',
        title: 'Para quién es',
        lead: 'En el piloto aparecieron tres tipos de restaurante. Solo uno siente el problema cada semana.',
        rows: [
          { label: 'Segmento elegido', text: 'Restaurantes independientes de 15 a 40 mesas, con ticket arriba del promedio de la ciudad y demanda de fin de semana que no alcanzan a sentar.' },
          { label: 'Por qué ellos', text: 'Una mesa que no llega en sábado les cuesta una mesa que podían vender dos veces. Ya toman reservaciones por WhatsApp y pierden el control.' },
          { label: 'Por ahora no', text: 'Lugares casuales que viven de quien llega sin reservar, y grupos restauranteros que ya pagan una plataforma completa.' },
        ],
        call: 'Los datos del piloto dicen que los restaurantes llenos convierten tres veces mejor que los tranquilos. Resistiría la tentación de venderle a todo el que tenga mesas.',
      },
      {
        id: 'insight',
        title: 'El insight',
        lead: 'Los dueños no describen el problema como cancelaciones. Lo describen como un sábado que parecía lleno y no lo estaba.',
        rows: [
          { label: 'Lo que dicen', text: '“Rechacé gente a las ocho y a las nueve tenía tres mesas vacías.”' },
          { label: 'Lo que significa', text: 'El dolor es el ingreso perdido en la mejor noche de la semana, y la pena de rechazar a clientes frecuentes para nada.' },
          { label: 'El miedo', text: 'Que pedir un depósito ofenda a los comensales y los mande al restaurante de al lado.' },
        ],
        call: 'El miedo pesa más que la funcionalidad. Si el lanzamiento no responde “¿mis clientes van a odiar esto?”, nada más se escucha.',
      },
      {
        id: 'positioning',
        title: 'Posicionamiento',
        lead: 'Una frase que todo el equipo pueda repetir.',
        rows: [
          { label: 'Declaración', text: 'Para restaurantes independientes que se llenan en fin de semana, Mesa Lista es la herramienta de reservaciones que hace que cada mesa reservada llegue, porque el comensal confirma con un pequeño depósito que se abona a su cuenta.' },
          { label: 'Contra', text: 'La libreta de WhatsApp, que es gratis y conocida. No contra las grandes plataformas de reservaciones.' },
          { label: 'Prueba', text: 'Los restaurantes piloto redujeron a menos de la mitad las mesas que no llegan durante el primer mes.' },
        ],
        call: 'Nombrar a WhatsApp como el competidor es la decisión clave. Cambia el pitch de “mejor software” a “deja de perder sábados”.',
      },
      {
        id: 'message',
        title: 'Mensajes',
        lead: 'Tres mensajes, cada uno con su prueba y la objeción que responde.',
        rows: [
          { label: 'Lleno es lleno', text: 'Prueba: menos mesas que no llegan en los restaurantes piloto. Responde: “¿Vale la pena cambiar cómo trabajo?”' },
          { label: 'Al comensal no le molesta', text: 'Prueba: el depósito se abona a la cuenta, y los comensales del piloto completaron la mayoría de las reservaciones. Responde: “¿Mis clientes lo van a odiar?”' },
          { label: 'Listo esta semana', text: 'Prueba: se configura en una tarde y las reservaciones siguen llegando por liga de WhatsApp. Responde: “No tengo tiempo para sistemas nuevos.”' },
        ],
        call: 'Abriría cada pieza con el segundo mensaje durante el primer mes. Es el que destraba los otros dos.',
      },
      {
        id: 'pricing',
        title: 'Precio y empaquetado',
        lead: 'Precio contra el costo de una mesa vacía, no contra otro software.',
        plans: [
          { name: 'Inicio', price: 'Gratis', who: 'Probarlo una noche a la semana', includes: 'Hasta 30 reservaciones al mes, depósito por liga' },
          { name: 'Casa llena', price: 'Cuota mensual fija', who: 'El segmento elegido', includes: 'Reservaciones ilimitadas, lista de espera, recordatorios, reportes de fin de semana' },
          { name: 'Grupos', price: 'Por sucursal', who: 'Después, no en el lanzamiento', includes: 'Varias sucursales, lista de comensales compartida' },
        ],
        call: 'A una cuota fija es más fácil decirle que sí que a una comisión por depósito, aunque la comisión dejaría más. Primero confianza, después optimización.',
      },
      {
        id: 'launch',
        title: 'Plan de lanzamiento',
        lead: 'Un lanzamiento enfocado en una ciudad, construido sobre la prueba de restaurantes que los dueños ya conocen.',
        weeks: [
          { when: 'Semanas 1 y 2', what: 'Convertir cinco restaurantes piloto en historias cortas en video. Capacitar a los dos vendedores en los tres mensajes y en la objeción del depósito.' },
          { when: 'Semanas 3 y 4', what: 'Lanzar en dos zonas restauranteras. Visitas en persona en tardes tranquilas, con configuración gratis en el momento.' },
          { when: 'Semanas 5 a 8', what: 'Oferta de referidos entre dueños. Medios locales de gastronomía y un ranking mensual de noches de “casa llena”.' },
          { when: 'Semana 9', what: 'Revisión: conversión de Inicio a Casa llena, y decisión de la segunda ciudad.' },
        ],
        call: 'Los dueños de restaurante confían en otros dueños. Invertiría en cinco grandes historias antes de gastar un peso en anuncios.',
      },
      {
        id: 'measures',
        title: 'Cómo sabemos que funcionó',
        lead: 'Pocas métricas, elegidas antes del lanzamiento.',
        rows: [
          { label: 'Adopción', text: 'Restaurantes con al menos 20 reservaciones al mes por Mesa Lista en la semana ocho.' },
          { label: 'Valor', text: 'Tasa de mesas que no llegan antes y después, por restaurante.' },
          { label: 'Negocio', text: 'Porcentaje de restaurantes en Inicio que pasan a Casa llena en 30 días.' },
          { label: 'Mensaje', text: 'Qué tan seguido aparece la objeción del depósito en las visitas de venta, y qué tan seguido se resuelve.' },
        ],
        call: 'Si los dueños se inscriben pero los comensales no completan el depósito, el problema de producto está del lado del comensal. Esa métrica decide qué construye el equipo después.',
      },
    ],
  },
};
