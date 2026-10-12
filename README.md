# Portfolio V2

Personal engineering portfolio for **Abhishek Kumar**, a Lead Frontend Engineer focused on frontend architecture, performance, engineering quality, and technical leadership.

## Live Site

https://portfolio-v2-red-six-39.vercel.app/

## Overview

This portfolio presents selected professional case studies and public projects that demonstrate:

- Frontend architecture with React, Next.js, and TypeScript
- Performance optimization
- Reusable component systems
- Accessibility and engineering quality
- Technical leadership and mentorship
- Cloud-integrated frontend delivery
- Human-reviewed AI-assisted engineering workflows

Professional case studies are intentionally text-led and exclude proprietary code and screenshots.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- react-markdown
- gray-matter
- Vitest
- React Testing Library
- GitHub Actions
- Husky
- Prettier
- ESLint

## Portfolio Structure

The homepage is organized into:

1. Hero
2. Engineering metrics
3. Professional Case Studies
4. Built in Public
5. Technical Expertise
6. Engineering Practice
7. Contact

The professional case studies cover two areas of work on the **Sony LIV Bolt** product:

- Schema-driven form architecture
- Frontend performance, delivery, and technical leadership

The public project section includes:

- DevTinder
- Chatbox
- RAWG Games

Each public project has a dedicated Markdown-driven detail page.

## Project Architecture

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
