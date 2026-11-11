import { aiAdoption } from './ai-adoption';
import { brandGrowth } from './brand-growth';
import { marketLaunch } from './market-launch';
import { processRedesign } from './process-redesign';
import { strategicPlanning } from './strategic-planning';
import type { Scenario } from './types';

/** Order here is the order of the tabs. */
export const scenarios: Scenario[] = [brandGrowth, aiAdoption, marketLaunch, processRedesign, strategicPlanning];

export type { Scenario };
