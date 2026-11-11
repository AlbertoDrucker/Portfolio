import MarketSizing from './MarketSizing.astro';
import CustomerValue from './CustomerValue.astro';
import NegotiationPlanner from './NegotiationPlanner.astro';
import PositioningBuilder from './PositioningBuilder.astro';
import MarketingMix from './MarketingMix.astro';
import AiOpportunityMap from './AiOpportunityMap.astro';
import AutomationRoi from './AutomationRoi.astro';
import AiWorkflowBuilder from './AiWorkflowBuilder.astro';
import PitStrategy from './PitStrategy.astro';
import PricingBreakeven from './PricingBreakeven.astro';
import FunnelLeak from './FunnelLeak.astro';
import AiReadiness from './AiReadiness.astro';

/** Maps a Lab slug to its tool component. Every slug in content/lab.ts needs an entry. */
export const toolComponents: Record<string, any> = {
  'market-sizing': MarketSizing,
  'customer-value': CustomerValue,
  'negotiation-planner': NegotiationPlanner,
  'positioning-builder': PositioningBuilder,
  'marketing-mix': MarketingMix,
  'ai-opportunity-map': AiOpportunityMap,
  'automation-roi': AutomationRoi,
  'ai-workflow-builder': AiWorkflowBuilder,
  'pit-strategy': PitStrategy,
  'pricing-breakeven': PricingBreakeven,
  'funnel-leak': FunnelLeak,
  'ai-readiness': AiReadiness,
};
