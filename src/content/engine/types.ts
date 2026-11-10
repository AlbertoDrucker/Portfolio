import type { Lang, Localized, StepKey } from '../../i18n/ui';

/** A paragraph of drafted text. */
export interface ParagraphBlock {
  t: 'p';
  text: string;
}

/** Label and text rows, used for framing, the 5C map and plans. */
export interface RowsBlock {
  t: 'rows';
  rows: { label: string; text: string }[];
}

/** A list of points, optionally titled (insights, signals, measures). */
export interface PointsBlock {
  t: 'points';
  ordered?: boolean;
  items: { title?: string; text: string }[];
}

/** Strategic options with trade offs. */
export interface OptionsBlock {
  t: 'options';
  items: { name: string; text: string; upside: string; risk: string; recommended?: boolean }[];
}

export type Block = ParagraphBlock | RowsBlock | PointsBlock | OptionsBlock;

export interface Step {
  key: StepKey;
  blocks: Block[];
  /** Judgment notes shown in the margin. Written in Alberto's voice. */
  notes: string[];
}

export interface ScenarioRun {
  label: string;
  brief: string;
  steps: Step[];
}

export interface Scenario {
  id: string;
  run: Localized<ScenarioRun>;
}

export type { Lang };
