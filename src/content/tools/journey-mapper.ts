import type { Localized } from '../../i18n/ui';

export const journeyMapper: Localized<{
  business: string;
  stages: string[];
  does: string;
  feel: string;
  feelHint: string;
  pain: string;
  idea: string;
  chart: string;
  mapTitle: string;
  startTitle: string;
  defaults: { business: string; rows: { does: string; feel: number; pain: string; idea: string }[] };
  dyn: {
    stages: string[];
    moods: string[];
    start: string;
    startNoIdea: string;
    flat: string;
    colDoes: string;
    colPain: string;
    colIdea: string;
    chartAria: string;
    lowest: string;
  };
}> = {
  en: {
    business: 'Business or service',
    stages: ['Discover', 'Consider', 'Buy', 'Use', 'Come back'],
    does: 'What the customer does',
    feel: 'How it feels',
    feelHint: '1 is frustrating, 5 is delightful.',
    pain: 'What goes wrong',
    idea: 'What we could do',
    chart: 'The emotional curve',
    mapTitle: 'Journey map',
    startTitle: 'Where to start',
    defaults: {
      business: 'Neighborhood dental clinic',
      rows: [
        { does: 'Searches online and asks a neighbor', feel: 3, pain: 'Reviews are old and nobody answers them', idea: 'Ask every happy patient for a review the same day' },
        { does: 'Calls to ask about prices and availability', feel: 2, pain: 'The phone rings out during busy hours', idea: 'WhatsApp replies within ten minutes with prices and open slots' },
        { does: 'Books the first appointment', feel: 3, pain: 'Has to call again to confirm', idea: 'Automatic confirmation and a reminder the day before' },
        { does: 'Visits the clinic for treatment', feel: 4, pain: 'Waits twenty minutes past the appointment time', idea: 'Message when the dentist is running late' },
        { does: 'Needs the six month checkup', feel: 2, pain: 'Nobody reminds them, so they forget', idea: 'Checkup reminder with a link to book in one tap' },
      ],
    },
    dyn: {
      stages: ['Discover', 'Consider', 'Buy', 'Use', 'Come back'],
      moods: ['', 'Frustrating', 'Annoying', 'Fine', 'Good', 'Delightful'],
      start: 'Start with “{stage}”. It is the lowest point of the experience: {pain}. First move: {idea}.',
      startNoIdea: 'Start with “{stage}”. It is the lowest point of the experience. Write down what goes wrong there and one thing you could try.',
      flat: 'Every stage feels the same. Either the experience is very even or the scores need a second look with a real customer.',
      colDoes: 'Customer does',
      colPain: 'What goes wrong',
      colIdea: 'What we could do',
      chartAria: 'Line chart of how the customer feels at each of the five stages.',
      lowest: 'Lowest point',
    },
  },
  es: {
    business: 'Negocio o servicio',
    stages: ['Descubre', 'Considera', 'Compra', 'Usa', 'Regresa'],
    does: 'Qué hace el cliente',
    feel: 'Cómo se siente',
    feelHint: '1 es frustrante, 5 es excelente.',
    pain: 'Qué sale mal',
    idea: 'Qué podríamos hacer',
    chart: 'La curva emocional',
    mapTitle: 'Mapa del recorrido',
    startTitle: 'Por dónde empezar',
    defaults: {
      business: 'Clínica dental de barrio',
      rows: [
        { does: 'Busca en línea y le pregunta a un vecino', feel: 3, pain: 'Las reseñas son viejas y nadie las responde', idea: 'Pedir una reseña a cada paciente contento el mismo día' },
        { does: 'Llama para preguntar precios y horarios', feel: 2, pain: 'Nadie contesta el teléfono en horas pico', idea: 'Responder por WhatsApp en diez minutos con precios y horarios libres' },
        { does: 'Agenda la primera cita', feel: 3, pain: 'Tiene que volver a llamar para confirmar', idea: 'Confirmación automática y recordatorio un día antes' },
        { does: 'Va a la clínica a su tratamiento', feel: 4, pain: 'Espera veinte minutos después de la hora de su cita', idea: 'Avisar por mensaje cuando el dentista va retrasado' },
        { does: 'Le toca la revisión de los seis meses', feel: 2, pain: 'Nadie le recuerda y se le olvida', idea: 'Recordatorio de revisión con liga para agendar en un toque' },
      ],
    },
    dyn: {
      stages: ['Descubre', 'Considera', 'Compra', 'Usa', 'Regresa'],
      moods: ['', 'Frustrante', 'Molesto', 'Normal', 'Bueno', 'Excelente'],
      start: 'Empieza por “{stage}”. Es el punto más bajo de la experiencia: {pain}. Primer paso: {idea}.',
      startNoIdea: 'Empieza por “{stage}”. Es el punto más bajo de la experiencia. Escribe qué sale mal ahí y una cosa que podrías probar.',
      flat: 'Todas las etapas se sienten igual. O la experiencia es muy pareja o conviene revisar las calificaciones con un cliente real.',
      colDoes: 'El cliente',
      colPain: 'Qué sale mal',
      colIdea: 'Qué podríamos hacer',
      chartAria: 'Gráfica de cómo se siente el cliente en cada una de las cinco etapas.',
      lowest: 'Punto más bajo',
    },
  },
};
