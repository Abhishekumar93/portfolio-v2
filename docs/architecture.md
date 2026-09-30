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

Keep small component-specific prop interfaces/types inside that component's `index.tsx`. Do not create a separate `types.ts` file for a small or simple prop contract.

Extract component-specific types into a sibling `types.ts` only when the type surface becomes substantial, when the component has multiple related types, or when another file in the same component/domain needs those types. This is a readability decision, not a mandatory file pattern.

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
    MobileMenu/
      index.tsx
    Footer/
      index.tsx

  Theme/
    Provider/
      index.tsx
    Toggle/
      index.tsx

  Sections/
    Hero/
      index.tsx
    Metrics/
      index.tsx
    ProfessionalCaseStudies/
      index.tsx
    SchemaCaseStudy/
      index.tsx
    SonyCaseStudy/
      index.tsx
    PersonalProjects/
      index.tsx
    ProjectCard/
      index.tsx
    Expertise/
      index.tsx
    EngineeringPractice/
      index.tsx
    Contact/
      index.tsx

  UI/
    Button/
      index.tsx
    Container/
      index.tsx
    SectionHeading/
      index.tsx

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

Do not create `types.ts` by default. Start with small local prop interfaces/types in `index.tsx`; extract them only when complexity or reuse justifies it.

## Reusable UI primitives

Use `components/UI/` for reusable, presentation-focused primitives that provide consistent styling, accessibility, or behavior across the portfolio.

Examples include:

```text
components/
  UI/
    Button/
      index.tsx
    Container/
      index.tsx
    SectionHeading/
      index.tsx
```

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

## Component boundaries

- `app/page.tsx` primarily composes sections in order.
- Keep interaction boundaries narrow.
- Theme Toggle and Mobile Menu may be Client Components.
- Static sections should remain server-rendered.
- Do not mark the whole page or root layout `"use client"` to support a small interactive control.
- Split a component when it starts mixing large data objects, multiple layouts, and interaction logic.
- Shared UI components are for genuinely repeated behavior or presentation patterns, not every wrapper.
