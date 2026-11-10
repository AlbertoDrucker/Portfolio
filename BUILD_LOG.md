# Build log

A running record of how this site was built with Claude Code. It becomes the public "Built with Claude Code" page later.

## Session 1 · Nov 10, 2026

**Decisions**
- Positioning: "Strategy that ships. Applied AI for business." Audience: corporate roles in Mexico.
- English default with a Spanish toggle. Name shown as Alberto Drucker. No photo, no awards, no resume bullets.
- Strategy Engine is pre-generated: authored runs replayed step by step, no live API, zero running cost.
- No real companies anywhere. Engine scenarios are fictional.
- Look: editorial minimal, dark. The memorable idea is the annotated brief: AI draft in the main column, human judgment as ochre margin notes.

**Built**
- Astro static site, plain CSS tokens, Newsreader and Archivo self hosted.
- Bilingual routing (`/` and `/es/`) with a language toggle that keeps the visitor on the same page, plus hreflang tags.
- Strategy Engine component: server rendered brief, replay script with typing, margin notes, status, replay, show all, print, reduced motion support.
- First scenario (brand growth) in English and Spanish.
- Pages: Home, How I work with AI, Selected work, About.

**What broke**
- `npm create astro` could not download its template in this environment, so the project was set up by hand.

## Session 1, continued · Nov 10, 2026

**Decision:** the Lab becomes the center of the site. Working tools from work, interests and ideas in progress, all running in the browser with no AI calls.

**Built**
- Lab index grouped by Strategy, Applied AI and Just for fun, plus a tool page template with "Why I built it" and "What's next".
- Shared tool interface (fields, sliders, segmented controls, stats, verdicts), number formatting for English and Spanish, and a small SVG chart helper that redraws at real pixel width.
- Nine tools: Market sizing builder, Customer value calculator, Negotiation planner, Positioning builder, Marketing mix optimizer, AI Opportunity Map (24 curated use cases), Automation ROI simulator, AI workflow builder, Pit strategy simulator (with a brute force search for the fastest plan).
- Lab featured on the home page and first in the navigation.

**What broke**
- The marketing mix optimizer first showed a 0.4% gain because the default split was already near optimal. Retuned the curves and started from a realistic events heavy split, so the optimizer has something to fix.
- Hidden form fields still showed because `.field` set `display: grid`. Added a global `[hidden]` rule.
- Blue was briefly used for a chart series. Blue is reserved for AI, so the palette changed.
