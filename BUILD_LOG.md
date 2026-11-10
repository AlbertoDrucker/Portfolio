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
