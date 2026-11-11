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

## Session 2 · Nov 10, 2026

**Built**
- Four more Strategy Engine scenarios in English and Spanish: AI adoption (an industrial distributor), market launch (a countertop water purifier), process redesign (custom packaging lead time) and strategic planning (a hardware chain's three year plan). All fictional, all through the same seven steps.
- With five scenarios the Engine shows tabs. On phones the tabs sit in one row that scrolls sideways, and the selected tab stays in view.

**Checked**
- Every page in both languages at 390px and 1440px: console errors, horizontal overflow, broken links, hreflang tags and an automated accessibility scan (axe). All 28 pages pass.
- Copy scan for dashes and middle dots, a spelling pass in English and a review of English terms on Spanish pages.
- Page weight: about 410KB for the home page and 210KB for a tool page, mostly fonts.

**What broke**
- Five Spanish tab labels wrapped onto four lines on a phone and pushed the brief below the fold. Fixed with the sideways scrolling row.
- The Automation ROI steps table made the page 614px wide on a phone. Each step is now a small card with labeled fields on narrow screens.
- The accessibility scan flagged unlabeled inputs in that table (one label was hardcoded in English), a tab panel on an `article`, margin notes marked up as nested landmarks, a skipped heading level and a map announced as an image while holding buttons. All fixed.
- Page titles used middle dots and the marketing mix showed a range with an en dash. Both replaced.

## Session 3 · Nov 11, 2026

**Decision:** the site moves from dark to light, with more color, and leans toward business owners who might inquire or hire.

**Built**
- New palette: cool porcelain page, white panels with depth, deep indigo text, electric blue for AI and actions, marigold for judgment. The headline's AI line is blue and the contact block is a full blue band.
- Three tools for business owners: Pricing and break even calculator, Sales funnel leak finder and AI readiness check.
- A "Want this built around your business?" band on every tool page that leads to the contact block.

**What broke**
- Teal and magenta chart colors failed contrast as legend text on white. Both darkened.

**Later in session 3**
- Two full systems added under "Systems I built": a rental operations demo (approvals queue, maintenance triage, rent and late fees, renewals) and a networking CRM visitors can use with their own contacts, saved only in their browser.
- Three more business tools: promotion ROI, order channels and launch planner.
- Contact form in the footer of every page, delivered by Web3Forms so the email address never appears on the site. It needs the access key in `src/content/site.ts` before it sends.
- Positioning: roles first, projects second.

## Session 4 · Nov 11, 2026

**Decision:** no public resume. It goes by request through the contact form. Target roles: strategic planning, product marketing and innovation.

**Built**
- First 90 days plan generator (by role, situation and position).
- Product launch teardown: a fictional product taken from insight to positioning, pricing, launch plan and measures.
- Strategic plan on a page with checks and print.
- Innovation portfolio board: effort across core, adjacent and new bets against a target mix.
- Customer journey mapper with an emotional curve and a "where to start" call.
- Membership and subscription calculator for B2C businesses.
- This log became a public page at `/built/`, linked from the footer.

**What broke**
- The journey mapper lowercased "WhatsApp" when it placed text mid sentence. It now leaves brands and acronyms alone.
- The portfolio board told a company with too little core work that "the future is underfunded". Core now has its own message.
