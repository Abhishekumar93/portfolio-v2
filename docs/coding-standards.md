# Coding Standards

Accessibility rules are defined in `docs/accessibility.md` and are not duplicated here.

## React component declaration

Use named arrow-function components and export them separately at the end of the file.

Preferred:

```tsx
const ComponentName = (props: ComponentNameProps) => {
  // ...
};

export default ComponentName;
```

Do not use:

```tsx
export default function ComponentName() {
  // ...
}
```

Do not add `Readonly<...>` merely because a component uses arrow-function syntax. Function syntax and prop immutability are separate concerns.

## Type placement

- Keep small component-specific prop interfaces/types in the component's implementation file (`index.tsx` or a colocated `.tsx` file). Simple icon props stay in the flat icon file.
- Extract substantial component-specific types into a sibling `types.ts` only when complexity or reuse within that component/domain justifies it. Do not create type files by default.
- Types currently live with their owning components or module, including project metadata in `lib/projects.ts`; there is no root shared-type directory or component-specific `types.ts` file at present.
- If future unrelated components/domains need shared types, introduce a root `types/` directory organized by domain. This is a convention for future extraction, not current repository structure.
- Avoid a large generic `common.ts` dumping ground.
- Use `interface` or `type` according to what best represents the model.

## Tailwind and styling

- Tailwind CSS is the default styling approach.
- Use Tailwind for layout, spacing, typography, responsive behavior, states, and component variants.
- Keep utility lists readable.
- Do not repeat long `className` strings; extract repeated components, helpers, or variants.
- CSS Modules are optional only when a complex component is materially clearer with scoped styles.
- Keep `globals.css` limited to Tailwind setup, semantic theme variables, font/body defaults, reset, and truly global behavior.
- Use semantic theme tokens rather than raw hex values inside component code.
- Avoid repeated one-off values and duplicated utility combinations.

## Data and content separation

- Keep large content/data collections separate from layout-only components when practical. Current homepage content is colocated with its owning sections; personal project details are Markdown. See [content ownership](content.md#current-content-ownership) for the implemented sources.
- Do not hard-code a large page of business/content data inside layout components.
- Do not introduce a generic page-builder abstraction for a small fixed portfolio.
