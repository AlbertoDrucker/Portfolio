# Alberto Drucker · Personal portfolio

Personal website for Alberto Drucker. Built entirely with Claude Code.
Audience: hiring managers and recruiters for corporate strategy and marketing roles in Mexico, plus friends and peers.

## Positioning
- Headline: "Strategy that ships. Applied AI for business." / "Estrategia que se ejecuta. IA aplicada al negocio."
- Story: engineer turned innovation lead turned strategist who works with AI every day, without giving up judgment.
- Core message of the site: AI handles the volume, Alberto brings the judgment.

## Hard content rules
- No awards, no resume bullets, no client names, no photo.
- Never target or analyze a real company. All Strategy Engine scenarios are fictional.
- Never mention internships or past internship employers.
- No em dashes and no hyphenated asides in any copy, in either language.
- Confident, plain, specific voice. No self deprecating framing, no hype words ("revolutionary", "cutting edge", "passionate").
- Every visible string exists in both English and Spanish. Never hardcode copy in components: use `src/i18n/` and `src/content/`.
- Spanish is natural Mexican professional Spanish, not a literal translation.

## Decisions
- English is the default locale at `/`; Spanish lives at `/es/`. Toggle in the header keeps the visitor on the same page.
- Name shown as "Alberto Drucker".
- Strategy Engine is pre-generated only: no live API calls, no keys, zero running cost. Runs are authored content replayed step by step.
- Engine method (Strategy + innovation), always in this order:
  1. Frame the question
  2. Scan the context
  3. 5C (Company, Customers, Competitors, Collaborators, Context)
  4. Insights
  5. Opportunities (Fix, Improve, Wow)
  6. Options (three, with trade offs)
  7. Recommendation (path, first 90 days, measures)
  Judgment notes sit in the margin of every step: what Alberto would validate, question or push back on.
- Scenarios: brand growth, AI adoption, market launch, process redesign, strategic planning.
- Sections: Home, Lab, How I work with AI, Selected work (anonymized), About.
- The Lab is the center of the site: working tools mixing work, interests and things still in development. No live AI: every tool runs in the browser, free, no keys.
- Every Lab project has a page with the tool, "Why I built it" and "What's next". Tagged Strategy, Applied AI or Just for fun, and marked Live or Beta. A Beta tool still has to work. No "coming soon" cards.
- Tools aimed at business owners come first in each category: Pricing and break even calculator, Sales funnel leak finder, WhatsApp follow up builder, AI readiness check. Every tool page carries a "Want this built around your business?" band linking to the contact block (`#contact` in the footer).
- Role tools (target roles: strategic planning, product marketing, innovation): First 90 days plan, Product launch teardown (fictional product Mesa Lista), Strategic plan on a page, Innovation portfolio board, Customer journey mapper, Membership and subscription calculator.
- Systems I built: Rental operations system and Networking CRM (own state, own export). Contact is a Web3Forms form in the footer (`contact.formKey` in `src/content/site.ts`); the email address is never shown. No public resume: it goes by request.
- `/built/` is the public "Built in public" page, written from BUILD_LOG.md.
- Other tools: Market sizing builder, Customer value calculator, Negotiation planner, Positioning builder, Marketing mix optimizer (beta), AI Opportunity Map, Automation ROI simulator, AI workflow builder (beta), Pit strategy simulator. Avoid trademarked names (no "F1").

## Design system: editorial, light, confident color
The memorable idea is the annotated brief: the AI draft runs in the main column and Alberto's judgment appears as marigold highlighted margin notes, like an editor marking up a manuscript.

Color tokens (`src/styles/global.css`). Variable names date from the dark first version: `--ink` is the page, `--paper` is the text.
- `--ink` #f3f4fb page background (cool porcelain), `--ink-sunk` #ffffff panels (with `--lift` shadow, 18px radius), `--ink-raised` #f7f8fd fields
- `--paper` #15173b text (deep indigo), `--stone` #5a5f7d secondary text, `--rule` #dcdfec hairlines
- `--ai` #2b47f5 electric blue: AI drafted content, primary buttons, the contact block
- `--judgment-mark` #ffc02e marigold and `--judgment-soft`: Alberto's judgment and the "work with me" band. `--judgment` #a85400 for judgment text
- Charts: `--c1` indigo, `--c2` magenta, `--c3` teal, `--c4` violet. `--good` and `--bad` only for verdicts.
Color carries meaning: blue means AI, marigold means human judgment. All text colors must pass AA on white.

Type:
- Newsreader (variable, optical size) for headlines and reading text.
- Archivo (variable) for interface: navigation, step titles, controls, small labels.
- Sentence case everywhere. No all caps labels, no monospace labels, no middle dot separators, no arrows appended to links.
- Body 18px+, line length under 70 characters.

Layout:
- Left aligned, generous whitespace, wide left margin column for step numbers, right margin for judgment notes on desktop. Notes move inline on mobile.
- Numbered markers only for the Engine method (a real sequence).

Motion:
- One orchestrated moment: the Engine replay. Nothing else animates on load. Tools update instantly on input; no decorative transitions.
- `prefers-reduced-motion` shows the full brief instantly.

Quality floor: responsive to 360px, visible keyboard focus, AA contrast, works without JavaScript (the full brief is server rendered and the replay is progressive enhancement), print stylesheet for the brief.

## Stack
- Astro (static output), TypeScript, plain CSS with tokens, no UI framework. Client scripts are small vanilla TS modules.
- Fonts self hosted via @fontsource-variable.
- Deploy: GitHub repo `portfolio` connected to Vercel; every push to `main` deploys.

## Structure
- `src/i18n/` UI strings per locale and helpers.
- `src/content/engine/` scenario runs, one file per scenario with `en` and `es`.
- `src/content/site.ts` page copy (home, how I work, work stories, about).
- `src/content/lab.ts` Lab project list and page copy. `src/content/tools/<slug>.ts` each tool's bilingual UI copy and data.
- `src/components/tools/` one component per tool, registered in `registry.ts`. `src/scripts/tools/` the client logic, with shared `util.ts` (formatting, copy) and `chart.ts` (SVG line charts).
- Adding a tool: content file, component, script, registry entry, and an entry in `lab.ts`.
- `src/components/` Astro components; `src/views/` full page bodies shared by both locales; `src/pages/` thin routes.

## Workflow
- Plan before each phase. Keep `BUILD_LOG.md` updated with what was built, key decisions and what broke; it becomes the public "Built with Claude Code" page later.
- Before committing: `npm run build` must pass, then check every page in both locales at 390px and 1440px.
