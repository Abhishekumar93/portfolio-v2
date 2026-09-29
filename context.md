# Portfolio V2 — Implementation Contract

**Owner:** Abhishek Kumar  
**Stack:** Next.js App Router, TypeScript, Tailwind CSS  
**Approach:** Mobile first, light mode default, dark mode toggle  
**Status:** Approved visual direction; public copy still requires verification

Build a restrained technical whitepaper: readable typography, generous space, thin borders, muted surfaces, and a single forest-green accent.

## Contract usage

This file is the entry point and router for the project contract.

Before implementing any task:

1. Read this `context.md`.
2. Read every focused rulebook relevant to the task.
3. Read `docs/definition-of-done.md`.
4. Define the Task-Specific DoD using the template in `docs/definition-of-done.md`.
5. Implement only the requested scope.
6. Before declaring the task complete, run every applicable Universal Gate and report each required verification as `PASS` or `N/A — reason`.

All referenced contract files are authoritative together. A rule should have one owner; do not duplicate rules across files.

## Rulebook ownership

- `docs/design.md` — owns visual direction, responsive behavior, theme parity, color roles, typography, spacing, and layout rules.
- `docs/architecture.md` — owns project structure, component hierarchy, folder conventions, composition boundaries, and Server/Client component boundaries.
- `docs/coding-standards.md` — owns React/TypeScript conventions, exports, type placement, Tailwind usage, and code-quality conventions.
- `docs/accessibility.md` — owns accessibility requirements.
- `docs/motion.md` — owns animation and reduced-motion requirements.
- `docs/content.md` — owns portfolio section scope, professional/public content rules, case-study drafting flow, claims, links, and publication checks.
- `docs/definition-of-done.md` — owns verification only: Universal Gates, required reporting, and the Task-Specific DoD template. It must reference rulebooks rather than restate their rules.

## Source files

- `design-reference/whitepaper-desktop-reference.svg` — approved light desktop reference and default theme.
- `design-reference/whitepaper-dark-desktop-reference.svg` — approved dark desktop reference.
- `public/images/profile/abhishek-hero.png` — approved portrait. Use with `next/image`; do not regenerate, retouch, or alter the face.

## Global non-negotiables

- Light and dark use the same structure, spacing, responsive behavior, content order, and portrait crop.
- Tailwind CSS is the primary styling system. CSS Modules are optional only when a complex component is clearer with scoped styles.
- `app/page.tsx` composes sections; it must not become a monolithic page implementation.
- Static content remains server-rendered unless client behavior is genuinely required.
- No proprietary professional screenshots, private code, customer data, or invented technical claims.
- No empty/placeholder links or placeholder copy in completed scope.
- Use the folder-based component convention and coding rules defined in the focused docs.

## Implementation sequence

1. Theme and global foundation.
2. Header, hero, portrait, proof bar.
3. Professional case studies.
4. Built in Public projects.
5. Expertise and Engineering Practice.
6. Contact and footer.
7. Real links, metadata, accessibility, motion, and final verification.

When a new rule is discovered during development, update the focused rulebook that owns it. Keep this root file small and stable.
