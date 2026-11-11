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
import RentalOps from './RentalOps.astro';
import NetworkingCrm from './NetworkingCrm.astro';
import PromoRoi from './PromoRoi.astro';
import OrderChannels from './OrderChannels.astro';
import LaunchPlanner from './LaunchPlanner.astro';
import First90Days from './First90Days.astro';
import LaunchTeardown from './LaunchTeardown.astro';
import PlanOnAPage from './PlanOnAPage.astro';
import InnovationPortfolio from './InnovationPortfolio.astro';
import JourneyMapper from './JourneyMapper.astro';
import SubscriptionEconomics from './SubscriptionEconomics.astro';
import WhatsappFollowup from './WhatsappFollowup.astro';

/** Maps a Lab slug to its tool component. Every slug in content/lab.ts needs an entry. */
export const toolComponents: Record<string, any> = {
  'whatsapp-followup': WhatsappFollowup,
  'first-90-days': First90Days,
  'launch-teardown': LaunchTeardown,
  'plan-on-a-page': PlanOnAPage,
  'innovation-portfolio': InnovationPortfolio,
  'journey-mapper': JourneyMapper,
  'subscription-economics': SubscriptionEconomics,
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
  'rental-ops': RentalOps,
  'networking-crm': NetworkingCrm,
  'promo-roi': PromoRoi,
  'order-channels': OrderChannels,
  'launch-planner': LaunchPlanner,
};
