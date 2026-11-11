import type { Localized } from '../../i18n/ui';

/** Target share of effort in core, adjacent and new bets for each stance. */
export const portfolioTargets: Record<string, [number, number, number]> = {
  defend: [80, 15, 5],
  balanced: [70, 20, 10],
  transform: [50, 30, 20],
};

export const innovationPortfolio: Localized<{
  stance: string;
  stances: Record<string, string>;
  stanceHint: string;
  ideasTitle: string;
  ideaName: string;
  ideaType: string;
  ideaSize: string;
  types: Record<string, string>;
  sizes: Record<string, string>;
  mixTitle: string;
  countTitle: string;
  defaults: { n: string; t: string; s: string }[];
  dyn: {
    types: Record<string, string>;
    hints: Record<string, string>;
    you: string;
    target: string;
    empty: string;
    balanced: string;
    tooMuch: string;
    tooLittle: string;
    tooLittleCore: string;
    initiatives: string;
    largest: string;
  };
}> = {
  en: {
    stance: 'What the business needs right now',
    stances: { defend: 'Protect the core', balanced: 'Balanced growth', transform: 'Reinvent the business' },
    stanceHint: 'This sets the target mix. Balanced growth uses the classic 70, 20, 10 split.',
    ideasTitle: 'Your initiatives',
    ideaName: 'Initiative',
    ideaType: 'Type',
    ideaSize: 'Effort',
    types: { core: 'Core', adjacent: 'Adjacent', new: 'New' },
    sizes: { s: 'Small', m: 'Medium', l: 'Large' },
    mixTitle: 'Where your effort goes, against the target',
    countTitle: 'Initiatives',
    defaults: [
      { n: 'Faster quotes for current customers', t: 'core', s: 'l' },
      { n: 'New packaging for the main product', t: 'core', s: 'l' },
      { n: 'Loyalty program redesign', t: 'core', s: 'l' },
      { n: 'Sell the main product to small offices', t: 'adjacent', s: 's' },
      { n: 'Subscription refills', t: 'adjacent', s: 'm' },
      { n: 'A service business built on our installed base', t: 'new', s: 's' },
      { n: '', t: 'core', s: 's' },
      { n: '', t: 'core', s: 's' },
    ],
    dyn: {
      types: { core: 'Core', adjacent: 'Adjacent', new: 'New' },
      hints: {
        core: 'Improve what you already sell to customers you already have',
        adjacent: 'Take what you are good at to a new customer or a new offer',
        new: 'Build something the company has not done before',
      },
      you: 'You {v}',
      target: 'Target {v}',
      empty: 'Add at least one initiative to see your mix.',
      balanced: 'Your mix is close to the target. The next question is whether each bet has an owner and a date for its go or stop decision.',
      tooMuch: 'You are putting {v} of your effort into {type} work, against a target of {t}. Something there should wait or stop.',
      tooLittle: 'Only {v} of your effort goes to {type} work, against a target of {t}. The future of the business is underfunded.',
      tooLittleCore: 'Only {v} of your effort goes to the core business, against a target of {t}. The part that pays for everything else is short on attention.',
      initiatives: '{n} initiatives',
      largest: 'Largest bet: {name}',
    },
  },
  es: {
    stance: 'Lo que el negocio necesita hoy',
    stances: { defend: 'Proteger el negocio actual', balanced: 'Crecimiento balanceado', transform: 'Reinventar el negocio' },
    stanceHint: 'Esto define la mezcla objetivo. Crecimiento balanceado usa la división clásica de 70, 20, 10.',
    ideasTitle: 'Tus iniciativas',
    ideaName: 'Iniciativa',
    ideaType: 'Tipo',
    ideaSize: 'Esfuerzo',
    types: { core: 'Actual', adjacent: 'Cercana', new: 'Nueva' },
    sizes: { s: 'Chico', m: 'Mediano', l: 'Grande' },
    mixTitle: 'A dónde va tu esfuerzo, contra el objetivo',
    countTitle: 'Iniciativas',
    defaults: [
      { n: 'Cotizaciones más rápidas para clientes actuales', t: 'core', s: 'l' },
      { n: 'Empaque nuevo para el producto principal', t: 'core', s: 'l' },
      { n: 'Rediseño del programa de lealtad', t: 'core', s: 'l' },
      { n: 'Vender el producto principal a oficinas pequeñas', t: 'adjacent', s: 's' },
      { n: 'Suscripción de repuestos', t: 'adjacent', s: 'm' },
      { n: 'Un negocio de servicio sobre nuestra base instalada', t: 'new', s: 's' },
      { n: '', t: 'core', s: 's' },
      { n: '', t: 'core', s: 's' },
    ],
    dyn: {
      types: { core: 'Negocio actual', adjacent: 'Apuestas cercanas', new: 'Apuestas nuevas' },
      hints: {
        core: 'Mejorar lo que ya vendes a clientes que ya tienes',
        adjacent: 'Llevar lo que haces bien a un cliente nuevo o a una oferta nueva',
        new: 'Construir algo que la empresa no ha hecho antes',
      },
      you: 'Tú {v}',
      target: 'Objetivo {v}',
      empty: 'Agrega al menos una iniciativa para ver tu mezcla.',
      balanced: 'Tu mezcla está cerca del objetivo. La siguiente pregunta es si cada apuesta tiene un responsable y una fecha para decidir si sigue o se detiene.',
      tooMuch: 'Estás poniendo {v} de tu esfuerzo en {type}, contra un objetivo de {t}. Algo ahí debería esperar o detenerse.',
      tooLittle: 'Solo {v} de tu esfuerzo va a {type}, contra un objetivo de {t}. El futuro del negocio está sin presupuesto.',
      tooLittleCore: 'Solo {v} de tu esfuerzo va al negocio actual, contra un objetivo de {t}. La parte que paga todo lo demás tiene poca atención.',
      initiatives: '{n} iniciativas',
      largest: 'Apuesta más grande: {name}',
    },
  },
};
