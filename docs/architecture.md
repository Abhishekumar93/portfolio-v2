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

## Project detail routes

- `app/projects/[slug]/page.tsx` is a Server Component shared by all project detail pages.
- `lib/projects.ts` reads local `content/projects/*.md` files on the server. Frontmatter slugs determine routes and static params; filenames do not determine public slugs.
- Frontmatter supplies page metadata and repository actions; the Markdown body supplies the detail sections. Unknown slugs use Next.js `notFound()`.
- Shared Header and Footer remain in the root layout. Header links target homepage sections from detail pages as well.

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

  Icons/
    MoonIcon/
      index.tsx
    SunIcon/
      index.tsx
    MenuIcon/
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

  Icons/
    MoonIcon/
      index.tsx
    SunIcon/
      index.tsx
    MenuIcon/
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
- Keep simple icon-specific props local to `index.tsx`.
- Extract a separate type file only when type complexity or reuse genuinely justifies it.
- Do not install an icon library solely to avoid implementing a small number of project-specific SVG icons.
- This rule applies to reusable SVG UI icons. It does not automatically apply to illustrations, large artwork, design-reference SVGs, or other content assets.

### Component convention

Follow the project's standard React component convention:

```tsx
const IconName = () => {
  return <svg>{/* SVG content */}</svg>;
};

export default IconName;
```

Use a named arrow-function component and export it separately.

Do not define SVG icons inline inside unrelated components when the SVG represents a reusable application icon.

## Component boundaries

- `app/page.tsx` primarily composes sections in order.
- Keep interaction boundaries narrow.
- Theme Toggle and Mobile Menu may be Client Components.
- Static sections should remain server-rendered.
- Do not mark the whole page or root layout `"use client"` to support a small interactive control.
- Split a component when it starts mixing large data objects, multiple layouts, and interaction logic.
- Shared UI components are for genuinely repeated behavior or presentation patterns, not every wrapper.
