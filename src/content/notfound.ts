import type { Localized } from '../i18n/ui';

export const notFound: Localized<{ title: string; text: string; home: string; lab: string; work: string }> = {
  en: { title: 'This page does not exist', text: 'The link may be old or mistyped. These are good places to start.', home: 'Home', lab: 'Free tools in the Lab', work: 'Case studies' },
  es: { title: 'Esta página no existe', text: 'El enlace puede ser viejo o tener un error. Estos son buenos lugares para empezar.', home: 'Inicio', lab: 'Herramientas gratis en el Lab', work: 'Casos' },
};
