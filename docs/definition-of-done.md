# Definition of Done

This file is a **verification checklist**, not a rulebook.

The authoritative rules live in the focused documents referenced below. Do not duplicate those rules here.

## Universal Gate Execution Rule

These gates apply after **every implementation task**.

Every required verification must be reported as one of:

- **PASS**
- **N/A — reason**

A task must not be reported as complete while any applicable verification is failing.

For visual or UI changes, run the full responsive, theme, accessibility, and visual checks. For non-visual changes, visual-only checks may be marked `N/A` when the task cannot affect them, but the reason must be stated.

A task is complete only when:

1. every item in its Task-Specific DoD passes, and
2. every applicable Universal Gate below is reported as `PASS` or `N/A — reason`.

## Universal Gates

### Build and type safety

Verify:

- `npm run lint` passes with no warnings or errors.
- `npm run build` completes successfully.
- No TypeScript errors remain.
- No unjustified `any` types were introduced.
- No unused imports, variables, components, or files were introduced.

### Runtime health

Verify:

- No browser console errors caused by the implementation.
- No React hydration warnings.
- No uncaught runtime exceptions.
- No broken imports or failed local asset requests introduced by the task.

### Design and responsive behavior

Authoritative rules: `docs/design.md`

Verify every applicable requirement in that file passes for the implemented scope.

For UI changes, explicitly report at minimum:

- Required viewport checks at 320, 360, 390, 480, 640, 768, 1024, 1280, 1440, and 1920px.
- No horizontal scroll.
- No text clipping, unintended truncation, overlap, or gutter overflow.
- Light/dark layout parity.
- Semantic theme-token usage in component code.
- Portrait crop/alignment parity when the portrait is in scope.

### Architecture

Authoritative rules: `docs/architecture.md`

Verify every applicable requirement in that file passes for the implemented scope.

Explicitly report:

- Component placement follows the folder/component structure.
- `app/page.tsx` remains composition-focused.
- No unnecessary Client Component boundary was introduced.
- No duplicated theme/breakpoint markup was introduced.
- Component-specific `types.ts` files exist only where needed.

### Code quality

Authoritative rules: `docs/coding-standards.md`

Verify every applicable requirement in that file passes for the implemented scope.

Explicitly report:

- Named arrow-function component convention is followed.
- Default export is separate at the end of component files.
- Component-specific types are colocated correctly.
- If shared types were introduced, their placement follows `docs/coding-standards.md`; a root `types/` directory is not currently implemented.
- No long repeated `className` patterns were introduced.
- No business/content data was embedded inside layout-only components.
- No unnecessary `"use client"` directive was added.

### Accessibility

Authoritative rules: `docs/accessibility.md`

Verify every applicable requirement in that file passes for the implemented scope.

For UI changes, explicitly report at minimum:

- Keyboard reachability of every interactive element.
- Visible focus on every interactive element.
- Logical tab order.
- Native semantic controls instead of clickable `div`/`span`.
- WCAG 2.2 AA contrast in both themes.
- Appropriate image `alt` handling.
- Mobile-menu and theme-toggle accessibility when those controls are in scope.

### Content truthfulness

Authoritative rules: `docs/content.md`

Verify every applicable requirement in that file passes for the implemented scope.

Explicitly report:

- No invented metric, architecture, trade-off, employer/client, NDA, or project claim was introduced.
- Every shipped link has a verified destination.
- No `href="#"`, empty `href`, or placeholder URL exists in completed scope.
- No `lorem ipsum`, `TODO`, or `TBD` remains in completed scope.
- Shipped case-study copy in its owning files under `components/Sections/ProfessionalCaseStudies/` is verified, and unverified wording is kept out of published content according to `docs/content.md`.

### Motion

Authoritative rules: `docs/motion.md`

For tasks that add or modify motion, verify every applicable requirement in that file.

Explicitly report:

- `prefers-reduced-motion: reduce` behavior.
- No layout shift caused by animation.
- No hydration issue caused by animation.
- No forbidden decorative/continuous motion was introduced.
- Simple interaction motion uses CSS/Tailwind unless a motion library is genuinely justified.

For tasks with no motion impact, report this gate as `N/A — no motion added or changed`.

### Performance

Verify:

- The task does not introduce layout shift; target CLS remains below 0.1 where measurable.
- Images use `next/image` with explicit dimensions, or `fill` inside a stable-dimension/aspect-ratio container.
- Static content remains server-rendered where client behavior is unnecessary.
- Client-side JavaScript is introduced only where interaction requires it.
- No unused dependency is added.
- Primary content remains readable and usable if client-side JavaScript fails, except where the feature inherently requires JavaScript.

### Dependency and security hygiene

Verify:

- No unnecessary dependency was added.
- Existing libraries were reused when they already solve the requirement appropriately.
- The task does not knowingly introduce a new high- or critical-severity dependency vulnerability.

## Task-Specific DoD Template

Every implementation prompt must include a Task-Specific DoD in this form:

- **Scope:** What files, components, or behavior this task is allowed to touch.
- **Behavior:** The exact observable result required when the task is complete.
- **Verified by:** The concrete commands, browser checks, tests, or inspections that prove completion.
- **Out of scope:** What this task explicitly must not implement or modify.

A Task-Specific DoD must be concrete enough that completion can be checked objectively. Avoid vague criteria such as “looks good” or “works correctly” without defining how that will be verified.

A task is complete only when every Task-Specific DoD item passes **and** every applicable Universal Gate is reported as `PASS` or `N/A — reason`.
