import type { Localized } from '../../i18n/ui';

interface Field {
  name: string;
  label: string;
  hint: string;
  example: string;
}

export const positioningBuilder: Localized<{
  fields: Field[];
  example: string;
  clear: string;
  statementTitle: string;
  shortTitle: string;
  checksTitle: string;
  dyn: {
    template: string;
    short: string;
    empty: string;
    score: string;
    vague: string[];
    broad: string[];
    checks: {
      target: [string, string];
      need: [string, string];
      frame: [string, string];
      vague: [string, string];
      proof: [string, string];
      alt: [string, string];
      length: [string, string];
    };
    vagueFound: string;
  };
}> = {
  en: {
    fields: [
      { name: 'target', label: 'For', hint: 'Who exactly? The narrower, the stronger.', example: 'operations managers at mid size distributors in northern Mexico' },
      { name: 'need', label: 'Who', hint: 'The problem or need, in their words.', example: 'lose hours every week chasing orders across email and spreadsheets' },
      { name: 'brand', label: 'Brand', hint: 'Product, service or company name.', example: 'Ruta' },
      { name: 'frame', label: 'Is the', hint: 'The category they already understand.', example: 'order tracking platform' },
      { name: 'benefit', label: 'That', hint: 'The outcome they get, not the feature.', example: 'turns every order into one tracked flow from quote to delivery' },
      { name: 'alt', label: 'Unlike', hint: 'What they use today instead.', example: 'enterprise software that takes a year to implement' },
      { name: 'proof', label: 'Because it', hint: 'The reason to believe. Start with a verb.', example: 'connects to WhatsApp and your current system in under two weeks' },
    ],
    example: 'Load example',
    clear: 'Start blank',
    statementTitle: 'Your positioning',
    shortTitle: 'Short version',
    checksTitle: 'Checks',
    dyn: {
      template: 'For {target} who {need}, {brand} is the {frame} that {benefit}. Unlike {alt}, {brand} {proof}.',
      short: '{brand}: the {frame} that {benefit}.',
      empty: 'Fill in the fields to see your statement take shape.',
      score: '{n} of {total} checks passed',
      vague: ['innovative', 'best', 'leading', 'world class', 'cutting edge', 'solution', 'solutions', 'quality', 'seamless', 'revolutionary', 'unique', 'next generation', 'robust', 'powerful', 'synergy', 'excellence', 'premier', 'state of the art', 'game changing'],
      broad: ['everyone', 'anyone', 'all companies', 'businesses', 'people', 'customers', 'users', 'companies'],
      checks: {
        target: ['The target is specific enough to picture.', 'Narrow the target. Could you name ten of them?'],
        need: ['The need is stated.', 'Describe the problem in a few words they would use.'],
        frame: ['The category is short and familiar.', 'Keep the category to a few familiar words.'],
        vague: ['No vague claims.', 'Vague words found: {words}. Replace them with something you can prove.'],
        proof: ['The reason to believe is concrete.', 'Add a number, a fact or a mechanism to the proof.'],
        alt: ['You name what you are replacing.', 'Name the alternative. Positioning is always relative.'],
        length: ['Short enough to say out loud.', 'Too long to remember. Aim for under 70 words.'],
      },
      vagueFound: '{words}',
    },
  },
  es: {
    fields: [
      { name: 'target', label: 'Para', hint: '¿Quién exactamente? Entre más acotado, más fuerte.', example: 'gerentes de operaciones de distribuidoras medianas del norte de México' },
      { name: 'need', label: 'Que', hint: 'El problema o necesidad, en sus palabras.', example: 'pierden horas cada semana persiguiendo pedidos entre correos y hojas de cálculo' },
      { name: 'brand', label: 'Marca', hint: 'Nombre del producto, servicio o empresa.', example: 'Ruta' },
      { name: 'frame', label: 'Es la', hint: 'La categoría que ya entienden.', example: 'plataforma de seguimiento de pedidos' },
      { name: 'benefit', label: 'Que', hint: 'El resultado que obtienen, no la función.', example: 'convierte cada pedido en un solo flujo rastreable de la cotización a la entrega' },
      { name: 'alt', label: 'A diferencia de', hint: 'Lo que usan hoy en su lugar.', example: 'software empresarial que tarda un año en implementarse' },
      { name: 'proof', label: 'Porque', hint: 'La razón para creer. Empieza con un verbo.', example: 'se conecta a WhatsApp y a tu sistema actual en menos de dos semanas' },
    ],
    example: 'Cargar ejemplo',
    clear: 'Empezar en blanco',
    statementTitle: 'Tu posicionamiento',
    shortTitle: 'Versión corta',
    checksTitle: 'Revisiones',
    dyn: {
      template: 'Para {target} que {need}, {brand} es la {frame} que {benefit}. A diferencia de {alt}, {brand} {proof}.',
      short: '{brand}: la {frame} que {benefit}.',
      empty: 'Llena los campos para ver cómo toma forma tu declaración.',
      score: '{n} de {total} revisiones aprobadas',
      vague: ['innovador', 'innovadora', 'mejor', 'líder', 'clase mundial', 'vanguardia', 'solución', 'soluciones', 'calidad', 'integral', 'revolucionario', 'único', 'única', 'robusto', 'potente', 'excelencia', 'sinergia', 'de punta', 'disruptivo'],
      broad: ['todos', 'cualquiera', 'todas las empresas', 'empresas', 'personas', 'clientes', 'usuarios', 'negocios'],
      checks: {
        target: ['El público es lo bastante específico para imaginarlo.', 'Acota el público. ¿Podrías nombrar a diez?'],
        need: ['La necesidad está planteada.', 'Describe el problema en pocas palabras, como ellos lo dirían.'],
        frame: ['La categoría es corta y conocida.', 'Deja la categoría en pocas palabras conocidas.'],
        vague: ['Sin promesas vagas.', 'Palabras vagas: {words}. Cámbialas por algo que puedas probar.'],
        proof: ['La razón para creer es concreta.', 'Agrega un número, un dato o un mecanismo a la prueba.'],
        alt: ['Nombras lo que estás reemplazando.', 'Nombra la alternativa. El posicionamiento siempre es relativo.'],
        length: ['Lo bastante corto para decirlo en voz alta.', 'Demasiado largo para recordarlo. Busca menos de 70 palabras.'],
      },
      vagueFound: '{words}',
    },
  },
};
