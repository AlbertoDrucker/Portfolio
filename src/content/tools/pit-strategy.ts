import type { Localized } from '../../i18n/ui';

export type Compound = 'S' | 'M' | 'H';

export interface StrategyDef {
  stints: Compound[];
  pits: number[];
}

export const tyreModel: Record<Compound, { offset: number; deg: number; cliff: number }> = {
  S: { offset: -0.8, deg: 0.1, cliff: 18 },
  M: { offset: 0, deg: 0.06, cliff: 30 },
  H: { offset: 0.6, deg: 0.035, cliff: 45 },
};

export const defaultStrategies: StrategyDef[] = [
  { stints: ['M', 'H'], pits: [24] },
  { stints: ['S', 'M', 'S'], pits: [15, 40] },
  { stints: ['S', 'H'], pits: [17] },
];

export const pitStrategy: Localized<{
  raceTitle: string;
  laps: string;
  pitLoss: string;
  pitLossHint: string;
  safetyCar: string;
  safetyCarLap: string;
  strategiesTitle: string;
  strategy: string;
  stops: string;
  oneStop: string;
  twoStops: string;
  stint: string;
  pitOn: string;
  compounds: Record<Compound, string>;
  find: string;
  resultsTitle: string;
  colStrategy: string;
  colTime: string;
  colGap: string;
  colPlan: string;
  chartTitle: string;
  chartHint: string;
  dyn: {
    lap: string;
    lapShort: string;
    gapAxis: string;
    winner: string;
    oneStopWins: string;
    twoStopWins: string;
    illegal: string;
    optimal: string;
    leader: string;
    scTip: string;
    chartAria: string;
  };
}> = {
  en: {
    raceTitle: 'The race',
    laps: 'Race laps',
    pitLoss: 'Time lost in a pit stop',
    pitLossHint: 'Pit lane plus the stop itself, in seconds.',
    safetyCar: 'Safety car',
    safetyCarLap: 'Safety car comes out on lap',
    strategiesTitle: 'Strategies',
    strategy: 'Strategy',
    stops: 'Stops',
    oneStop: 'One',
    twoStops: 'Two',
    stint: 'Stint',
    pitOn: 'Pit on lap',
    compounds: { S: 'Soft', M: 'Medium', H: 'Hard' },
    find: 'Find the fastest strategy',
    resultsTitle: 'Result',
    colStrategy: 'Strategy',
    colTime: 'Race time',
    colGap: 'Gap',
    colPlan: 'Plan',
    chartTitle: 'Gap to the winner, lap by lap',
    chartHint: 'Lower is better. Watch the gap jump at each stop and shrink as fresh tires pay it back.',
    dyn: {
      lap: 'Lap {n}',
      lapShort: 'L{n}',
      gapAxis: '{n}s',
      winner: 'Strategy {name} wins by {gap} seconds.',
      oneStopWins: 'One stop is faster here: tire wear is not high enough to justify another {loss} seconds in the pit lane.',
      twoStopWins: 'The extra stop pays: fresh tires gain back more than the {loss} seconds lost in the pit lane.',
      illegal: 'Must use two different compounds',
      optimal: 'Fastest found',
      leader: 'Winner',
      scTip: 'A safety car makes a stop much cheaper. Try moving a pit stop onto the safety car lap.',
      chartAria: 'Line chart of each strategy’s gap to the winner over the race.',
    },
  },
  es: {
    raceTitle: 'La carrera',
    laps: 'Vueltas de carrera',
    pitLoss: 'Tiempo perdido en una parada',
    pitLossHint: 'Pit lane más la parada, en segundos.',
    safetyCar: 'Safety car',
    safetyCarLap: 'El safety car sale en la vuelta',
    strategiesTitle: 'Estrategias',
    strategy: 'Estrategia',
    stops: 'Paradas',
    oneStop: 'Una',
    twoStops: 'Dos',
    stint: 'Stint',
    pitOn: 'Parada en la vuelta',
    compounds: { S: 'Blanda', M: 'Media', H: 'Dura' },
    find: 'Encontrar la estrategia más rápida',
    resultsTitle: 'Resultado',
    colStrategy: 'Estrategia',
    colTime: 'Tiempo total',
    colGap: 'Diferencia',
    colPlan: 'Plan',
    chartTitle: 'Diferencia con el ganador, vuelta por vuelta',
    chartHint: 'Más abajo es mejor. Mira cómo la diferencia brinca en cada parada y se reduce cuando las llantas nuevas la recuperan.',
    dyn: {
      lap: 'Vuelta {n}',
      lapShort: 'V{n}',
      gapAxis: '{n}s',
      winner: 'La estrategia {name} gana por {gap} segundos.',
      oneStopWins: 'Una parada es más rápida aquí: el desgaste no es suficiente para justificar otros {loss} segundos en el pit lane.',
      twoStopWins: 'La parada extra vale la pena: las llantas nuevas recuperan más que los {loss} segundos perdidos en el pit lane.',
      illegal: 'Debe usar dos compuestos distintos',
      optimal: 'La más rápida',
      leader: 'Ganadora',
      scTip: 'Un safety car abarata mucho una parada. Prueba mover una parada a la vuelta del safety car.',
      chartAria: 'Gráfica de líneas de la diferencia de cada estrategia con la ganadora a lo largo de la carrera.',
    },
  },
};
