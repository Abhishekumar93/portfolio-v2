# Architecture Contract

This document owns the current application structure, routing, and component
boundaries. [Coding standards](coding-standards.md) owns declarations, type
placement, and styling conventions; [content](content.md) owns copy and assets.

## Current page composition

`app/layout.tsx` supplies the shared shell for the homepage and project pages:

```text
RootLayout
└── ThemeProvider
    ├── Header
    │   ├── DesktopNavigation
    │   ├── ThemeToggle
    │   └── MobileMenu
    └── Content wrapper (div, max-w-6xl)
        ├── Route content
        │   ├── Home main at /
        │   │   ├── Hero
        │   │   │   └── HeroActions
        │   │   ├── Metrics
        │   │   ├── ProfessionalCaseStudies
        │   │   │   ├── SchemaDrivenCaseStudy
        │   │   │   └── ProductDeliveryCaseStudy
        │   │   │       (both use ProfessionalCaseStudyCard)
        │   │   ├── PersonalProjects
        │   │   │   └── ProjectCard (DevTinder, Chatbox, RAWG Games)
        │   │   ├── TechnicalExpertise
        │   │   ├── EngineeringPractice
        │   │   └── Contact
        │   └── ProjectPage main at /projects/[slug] (alternative route)
        └── Footer
```

`app/page.tsx` composes the homepage sections in this order. Most sections use
`components/Sections/SectionLayout/` for their heading and outer section markup.
Header and Footer are rendered once by the root layout, outside each page's
`main`. Do not duplicate full page markup across breakpoints or themes.

## Project detail routes

- `app/projects/[slug]/page.tsx` is the Server Component shared by all personal project detail pages; there are no separate per-project page components.
- `lib/projects.ts` imports `server-only`, reads `content/projects/*.md`, parses frontmatter with `gray-matter`, and caches the loaded collection with React `cache`.
- Frontmatter slugs determine routes and `generateStaticParams`; filenames do not determine public slugs. Required metadata, URL fields, slug format, and slug uniqueness are validated by the loader.
- The route awaits `params`, uses frontmatter for `generateMetadata` and repository actions, and renders the body with `react-markdown` and local element renderers. Unknown slugs use Next.js `notFound()`.
- Optional backend repository and live-demo actions render only when their frontmatter fields are present.
- Shared Header links use `/#experience`, `/#work`, `/#expertise`, `/#practice`, and `/#contact`, so navigation returns to homepage sections from detail pages.

## Current project structure

Application code lives at the root, with the `@/*` alias resolving there. This
is the implemented component structure, not a proposed scaffold:

```text
app/
  layout.tsx
  page.tsx
  globals.css
  projects/[slug]/page.tsx
components/
  Layout/
    Header/
      index.tsx
      DesktopNavigation.tsx
      navigation.ts
    MobileMenu/index.tsx
    Footer/index.tsx
  Theme/
    Provider/index.tsx
    Toggle/index.tsx
  Sections/
    Hero/
      index.tsx
      HeroActions.tsx
    Metrics/index.tsx
    ProfessionalCaseStudies/
      index.tsx
      SchemaDrivenCaseStudy.tsx
      ProductDeliveryCaseStudy.tsx
      ProfessionalCaseStudyCard.tsx
    PersonalProjects/
      index.tsx
      ProjectCard.tsx
    TechnicalExpertise/
      index.tsx
      TechnicalExpertiseCard.tsx
    EngineeringPractice/
      index.tsx
      EngineeringPracticeCard.tsx
    Contact/index.tsx
    SectionLayout/index.tsx
  UI/
    ActionLink/index.tsx
    Button/index.tsx
  Icons/                             # flat .tsx files, e.g. ThemeToggleIcon.tsx
content/projects/
  devtinder.md
  chatbox.md
  rawg-games.md
lib/projects.ts
public/
  images/profile/abhishek-hero.png
tests/                               # .test.ts and .test.tsx files
docs/                               # focused documentation
```

The root configuration overview is in [context.md](../context.md#current-repository-structure);
[test setup and locations](testing.md#current-test-setup) belong to the testing document.

## Theme architecture

`components/Theme/Provider/` wraps `next-themes` with `attribute="data-theme"`,
`defaultTheme="light"`, and `enableSystem={false}`. A saved light/dark preference
wins on later visits; the operating-system preference does not override the
first-visit default. Preserve initial theme initialization to avoid flashing the
wrong theme. The toggle keeps its initial hydration render independent of the
saved preference.

`app/globals.css` defines semantic CSS variables and the Tailwind `dark:` variant
using the root `data-theme` attribute. Theme changes affect colors, not content,
layout, or portrait treatment. Detailed visual and accessibility requirements
live in [design](design.md) and [accessibility](accessibility.md).

## Reusable UI primitives

`components/UI/ActionLink/` and `components/UI/Button/` are the current shared
primitives. Section headings and section spacing belong to the domain-specific
`components/Sections/SectionLayout/`. Containers currently use native wrappers
and Tailwind classes. Add new shared primitives only when repeated behavior or
presentation warrants them.

### Placement rules

- A reusable button abstraction belongs in `components/UI/Button/`.
- Use `UI/` rather than a generic `shared/` folder so the purpose of these components remains explicit.
- Do not introduce `atoms/`, `molecules/`, or other Atomic Design folders unless the project deliberately adopts Atomic Design as a whole.
- Do not create wrappers around native HTML elements merely because they exist.
- Create a shared UI component only when it adds real value through repeated styling, behavior, accessibility, variants, or consistency.
- Native elements such as `p`, `section`, `span`, and similar structural/text elements should generally remain native unless a reusable abstraction is genuinely justified.
- If a component is domain-specific rather than generic UI, keep it in its owning domain folder instead of moving it into `UI/`.

### Button guidance

The shared `Button` component should exist to centralize behavior or styling that is genuinely reused, such as:

- visual variants
- sizes
- focus states
- disabled state
- theme-token usage
- icon spacing
- loading state, if later required

Do not add complexity or variants before they are actually needed.

### Folder vs single-file components

Use a folder with `index.tsx` when a component has meaningful colocated files or is complex enough to benefit from a dedicated component directory.

Use a single `.tsx` file for small, self-contained components where a dedicated folder would add no value.

SVG icon components are the default example of the single-file approach and should live directly under `components/Icons/`.

## SVG icon components

When an SVG icon is required in the application, implement it as a reusable React component instead of writing raw SVG markup directly inside feature, layout, or page components.

Store simple SVG icon components as flat files under:

```text
components/
  Icons/
    IconName.tsx
```

Name each icon component/file according to the semantic meaning of the icon it represents.

### Rules

- Create SVG icons as React components under `components/Icons/`.
- Use a flat `IconName.tsx` file for simple, self-contained icons.
- Do not create a dedicated folder for an icon unless it genuinely needs additional colocated files.
- Import and use the icon component wherever the icon is needed instead of duplicating raw `<svg>` markup.
- Keep icon components small, focused, and presentation-only.
- Follow KISS; do not introduce icon registries, factories, providers, configuration systems, or other abstractions unless a real implementation need later justifies them.
- Preserve the SVG's required `viewBox`, paths, circles, strokes, fills, dimensions, and other rendering attributes.
- Prefer presentation props only when genuinely needed.
- Keep simple icon-specific props local to the icon file; see [type placement](coding-standards.md#type-placement).
- Extract a separate type file only when type complexity or reuse genuinely justifies it.
- Do not install an icon library solely to avoid implementing a small number of project-specific SVG icons.
- This rule applies to reusable SVG UI icons. It does not automatically apply to illustrations, large artwork, or other content assets.

Component declaration and export conventions belong to
[coding standards](coding-standards.md#react-component-declaration).

Do not define reusable application icons inline inside unrelated components.

## Component boundaries

- `app/page.tsx` primarily composes sections in order.
- Keep interaction boundaries narrow.
- Theme Provider, Theme Toggle, Mobile Menu, and Footer are currently Client Components. Footer needs client behavior for its back-to-top action.
- Static sections should remain server-rendered.
- Do not mark the whole page or root layout `"use client"` to support a small interactive control.
- Split a component when it starts mixing large data objects, multiple layouts, and interaction logic.
- Shared UI components are for genuinely repeated behavior or presentation patterns, not every wrapper.
