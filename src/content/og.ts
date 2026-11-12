import type { Localized } from '../i18n/ui';

/** Copy that only appears on the share images (Open Graph cards). */
export const ogCopy: Localized<{
  role: string;
  place: string;
  labNote: string;
  caseNote: string;
  workNote: string;
  aboutNote: string;
  howNote: string;
  tryNote: string;
  homeKicker: string;
}> = {
  en: {
    role: 'Strategy, product marketing and innovation',
    place: 'Monterrey, Mexico',
    labNote: 'Free, and it works with your numbers',
    caseNote: 'Real project, real numbers',
    workNote: 'Real projects, real numbers',
    aboutNote: 'Engineer, innovation lead, strategist',
    howNote: 'AI does the volume, I bring the judgment',
    tryNote: 'Try the working demo',
    homeKicker: 'Working systems, case studies and free tools',
  },
  es: {
    role: 'Estrategia, product marketing e innovación',
    place: 'Monterrey, México',
    labNote: 'Gratis, y funciona con tus números',
    caseNote: 'Proyecto real, números reales',
    workNote: 'Proyectos reales, números reales',
    aboutNote: 'Ingeniero, líder de innovación, estratega',
    howNote: 'La IA pone el volumen, yo el criterio',
    tryNote: 'Prueba el demo funcionando',
    homeKicker: 'Sistemas que funcionan, casos y herramientas gratis',
  },
};
