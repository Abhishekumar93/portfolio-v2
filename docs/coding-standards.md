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

- Component-specific types live beside the component in `types.ts`.
- Do not declare substantial component prop types directly inside `index.tsx`.
- Shared cross-component/domain types live under the root `types/` directory.
- Organize shared types by domain, for example `portfolio.ts`, `navigation.ts`, and `theme.ts`.
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

- Keep typed portfolio content separate from presentation components.
- Do not hard-code a large page of business/content data inside layout components.
- Do not introduce a generic page-builder abstraction for a small fixed portfolio.
