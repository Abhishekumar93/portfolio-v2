# Portfolio V2 — Project Context

Abhishek Kumar's portfolio presents frontend architecture, performance, delivery,
and leadership experience to hiring teams for Lead and Senior Frontend Engineer
roles. The positioning is frontend-first, with backend and cloud work supporting
that specialization. The homepage and personal project detail pages are
implemented; professional claims still require publication review.

## Core stack

Next.js 16 App Router, React 19, TypeScript 5, and Tailwind CSS 4. `next-themes`
provides theme persistence; `gray-matter` and `react-markdown` support local
Markdown project pages. npm scripts and dependencies live in [package.json](package.json).

## Page structure

The shared Header and Footer wrap both the homepage and `/projects/[slug]` pages.
The homepage order is Hero → Metrics → Professional Case Studies → Built in
Public → Technical Expertise → Engineering Practice → Contact. Professional
studies cover schema-driven forms and product delivery; Built in Public contains
DevTinder, Chatbox, and RAWG Games. Contact uses direct email and profile links,
with no contact form. See [content ownership and navigation](docs/content.md).

## Current repository structure

Application directories live at the repository root. This overview includes the
meaningful current paths; [architecture](docs/architecture.md) covers component
placement and routing in more detail.

```text
app/
  layout.tsx                         # shared shell and theme provider
  page.tsx                           # homepage section composition
  globals.css                        # Tailwind setup and semantic theme tokens
  projects/[slug]/page.tsx            # Markdown project detail route
components/
  Layout/                            # Header/, MobileMenu/, Footer/
  Sections/                          # homepage sections and SectionLayout/
    ProfessionalCaseStudies/         # colocated study/card files
    PersonalProjects/                # section and ProjectCard.tsx
  UI/                                # ActionLink/, Button/
  Theme/                             # Provider/, Toggle/
  Icons/                             # flat reusable SVG .tsx files
content/projects/                    # devtinder.md, chatbox.md, rawg-games.md
lib/projects.ts                      # server-only Markdown loader
public/
  images/profile/abhishek-hero.png     # approved portrait
docs/                               # topic owners listed below
tests/                              # Vitest .test.ts / .test.tsx files
package.json                         # dependencies and scripts
package-lock.json                    # npm lockfile
next.config.ts
tsconfig.json                       # @/* resolves from the repository root
postcss.config.mjs                    # Tailwind PostCSS plugin
eslint.config.mjs
vitest.config.mts
.prettierrc
.nvmrc                               # local and CI Node.js version
.github/workflows/ci.yml              # quality checks
.husky/pre-push                       # local push checks
```

## Global decisions

- Keep pages and static sections server-rendered, with narrow client boundaries
  for interaction. Share the layout and section markup across themes and widths.
  See [architecture](docs/architecture.md).
- Project detail content comes from `content/projects/*.md` through
  `lib/projects.ts`; homepage copy currently lives in the owning section files.
  See [content](docs/content.md) before changing either source.
- Use Tailwind and semantic color tokens as the primary styling system. Follow
  the existing domain folders and avoid unnecessary abstractions. See
  [coding standards](docs/coding-standards.md).
- Preserve the restrained technical-whitepaper direction and manually tuned
  visual values during unrelated work. Light is the first-visit default; saved
  light/dark choices persist, and theme changes must preserve layout and portrait
  crop. The approved portrait must not be regenerated, retouched, or have its face
  altered. See [design](docs/design.md).
- Publish truthful, shareable claims only; exclude proprietary screenshots,
  code, private links, and customer data. Confirm metrics, attribution, disclosure
  wording, and link destinations before publication. See [content](docs/content.md).

## Documentation owners

This file owns high-level project context and global decisions. Detailed rules
belong to the documents below; update the relevant owner instead of copying its
rules here.

| Document                                         | Owns                                                      |
| ------------------------------------------------ | --------------------------------------------------------- |
| [Design](docs/design.md)                         | Visual/layout specifications and protected tuning         |
| [Architecture](docs/architecture.md)             | Current structure, routing, and implementation boundaries |
| [Coding standards](docs/coding-standards.md)     | Component declarations, types, and styling conventions    |
| [Accessibility](docs/accessibility.md)           | Semantics, keyboard/focus behavior, and contrast          |
| [Motion](docs/motion.md)                         | Animation patterns and reduced-motion requirements        |
| [Content](docs/content.md)                       | Content sources, scope, and publication constraints       |
| [Testing](docs/testing.md)                       | Testing strategy and configured test locations            |
| [Test writer](docs/test-writer.md)               | Test-writing execution guidance                           |
| [Definition of done](docs/definition-of-done.md) | Completion and quality gates                              |
