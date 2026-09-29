# Architecture Contract

## Page composition tree

The high-level composition is:

```text
RootLayout
└── ThemeProvider
    ├── Header
    │   ├── Container
    │   ├── ThemeToggle
    │   └── MobileMenu
    ├── Main
    │   ├── Hero
    │   ├── Metrics
    │   ├── ProfessionalCaseStudies
    │   │   ├── SchemaCaseStudy
    │   │   └── SonyCaseStudy
    │   ├── PersonalProjects
    │   │   └── ProjectCard
    │   ├── Expertise
    │   ├── EngineeringPractice
    │   └── Contact
    └── Footer
        └── Container
```

`app/page.tsx` should primarily compose the section components in the required order. Do not duplicate the full page markup across breakpoints or themes.

## Project structure

Use a modular, folder-based component structure. A component lives in its own named folder and its implementation entry point is `index.tsx`.

Create a sibling `types.ts` only when that component has component-specific interfaces or type aliases; do not create empty `types.ts` files.

Suggested structure:

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  Layout/
    Header/
      index.tsx
      types.ts
    MobileMenu/
      index.tsx
      types.ts
    Footer/
      index.tsx

  Theme/
    Provider/
      index.tsx
      types.ts
    Toggle/
      index.tsx
      types.ts

  Sections/
    Hero/
      index.tsx
      types.ts
    Metrics/
      index.tsx
      types.ts
    ProfessionalCaseStudies/
      index.tsx
      types.ts
    SchemaCaseStudy/
      index.tsx
      types.ts
    SonyCaseStudy/
      index.tsx
      types.ts
    PersonalProjects/
      index.tsx
      types.ts
    ProjectCard/
      index.tsx
      types.ts
    Expertise/
      index.tsx
      types.ts
    EngineeringPractice/
      index.tsx
      types.ts
    Contact/
      index.tsx
      types.ts

  UI/
    Container/
      index.tsx
      types.ts
    SectionHeading/
      index.tsx
      types.ts

types/
  portfolio.ts
  navigation.ts
  theme.ts

content/
  drafts/
    schema-case-study.md
    sony-liv-case-study.md
  portfolio.ts

public/images/profile/
  abhishek-hero.png

design-reference/
  whitepaper-desktop-reference.svg
  whitepaper-dark-desktop-reference.svg
```

Only create `types.ts` where a component actually needs component-specific types.

## Component boundaries

- `app/page.tsx` primarily composes sections in order.
- Keep interaction boundaries narrow.
- Theme Toggle and Mobile Menu may be Client Components.
- Static sections should remain server-rendered.
- Do not mark the whole page or root layout `"use client"` to support a small interactive control.
- Split a component when it starts mixing large data objects, multiple layouts, and interaction logic.
- Shared UI components are for genuinely repeated behavior or presentation patterns, not every wrapper.
