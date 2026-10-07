# Test Writer

This document defines how an AI coding agent should implement or update tests in this portfolio project.

`docs/testing.md` remains the source of truth for testing strategy. This file defines the execution workflow for writing tests and must not contradict it.

## Purpose

Write meaningful tests that exercise real UI and user-observable behavior.

Prefer integration-style tests over isolated implementation-detail tests. Protect behavior, accessibility, and regression-prone logic without adding low-value tests purely for coverage.

## Before writing tests

1. Read `docs/testing.md`.
2. Read the target source file completely.
3. Inspect the current test setup and scripts in `package.json`.
4. Read the existing test file if one exists.
5. Inspect one nearby test file, if available, to follow project conventions.
6. Inspect directly used project components when their behavior matters.
7. Update an existing test file instead of creating a duplicate.

Do not modify production code merely to make tests pass. Report source issues instead.

## Real UI first

Render real project components wherever practical.

Prefer:

- real child components
- real shared UI components
- real props
- real state transitions
- real DOM behavior
- user-visible assertions
- accessibility-oriented queries

Do not test private handlers, internal state names, implementation-specific helper calls, or exact JSX structure unless they are part of a meaningful public contract.

## Mocking policy

### Do not mock by default

Normally keep these real:

- project-owned React components
- child components
- shared UI components
- project utility functions
- project hooks that can run normally
- React state
- normal DOM behavior
- component composition

Do not mock a child merely to assert that it rendered. Render it and assert the visible result.

### Mock only real boundaries when necessary

Mock only when the dependency cannot reasonably run in the test environment or using it would make the test unreliable.

Valid examples:

- backend/network requests
- third-party services or SDKs
- analytics
- browser APIs unavailable in jsdom
- framework APIs that require unavailable runtime context
- timers/debounce when real waiting would make tests slow or unstable

Examples of browser APIs that may need a minimal stub:

- `matchMedia`
- `IntersectionObserver`
- `ResizeObserver`
- `scrollTo`

Keep mocks minimal and scoped to the boundary.

If something is mocked, report what was mocked and why.

## Next.js/framework boundaries

Prefer real behavior where the configured test environment supports it.

Mock framework APIs only when necessary, for example:

- navigation hooks
- routing context
- `next-themes`
- browser-only APIs

Do not replace an entire project component with a mock just because one framework dependency is inconvenient.

## Rendering and interaction

Use the testing tools already configured in the repository.

For React Testing Library:

- prefer `userEvent` for user interactions
- use `fireEvent` only when a lower-level event is specifically required or existing project conventions justify it
- use `findBy*` or `waitFor` for meaningful async behavior
- never use arbitrary sleep delays

Interact through rendered UI instead of manually invoking handlers.

Prefer semantic queries:

- `getByRole`
- `getByLabelText`
- `getByText`
- `findByRole`

Use `data-testid` only when a semantic/accessibility query is not practical.

## What to cover

Choose tests based on actual behavior in the target file.

For interactive components, consider:

- initial state
- meaningful conditional states
- user interactions
- keyboard behavior
- focus behavior
- ARIA state changes
- disabled behavior
- navigation/link behavior
- async success/failure when genuinely present
- important regression-prone branches

For presentational components, follow `docs/testing.md`: do not create isolated tests unless there is meaningful behavior, accessibility logic, conditional output, or a regression worth protecting.

## Page and section integration

When testing a page or section composed from project-owned components:

- render the real composition
- do not mock child sections/cards just to make the test smaller
- assert important visible content, landmarks, headings, links, and interactions
- avoid asserting every static text node separately

One cohesive test may verify several related expectations for the same rendered state.

## Accessibility

Where relevant, verify:

- accessible name
- semantic role
- heading/landmark structure
- `aria-expanded`
- `aria-controls`
- keyboard activation
- focus movement or restoration
- correct link/button semantics

Do not add unnecessary ARIA assertions when native semantics already cover the behavior and there is no meaningful regression risk.

## Avoid redundant tests

Do not create multiple tests that render the same component with identical state just to assert one element per test.

Avoid:

- snapshot-only testing as the primary strategy
- duplicate prop permutations with no distinct branch
- raw Tailwind-class assertions unless they represent behavior that cannot be tested otherwise
- SVG path assertions
- isolated tests for trivial icons
- copy-paste tests that differ only in unimportant values

Prefer one cohesive test for one UI state or user journey.

## Test structure

Use behavior-oriented names.

Example:

```ts
describe('MobileMenu', () => {
  it('opens the navigation and updates the expanded state', async () => {
    // ...
  });
});
```

Use nested `describe` blocks only when they improve readability.

## Shared setup

Create a small `renderComponent` helper only when it actually removes repeated setup.

Do not create helper abstractions that make tests harder to read.

Reuse realistic project test data where available.

## Coverage workflow

Coverage is a diagnostic tool, not the goal.

1. Run the target test file.
2. Fix all failures.
3. Run coverage for the relevant source scope.
4. Review uncovered meaningful lines and branches.
5. Add tests only when uncovered code represents meaningful behavior or regression risk.
6. Do not add artificial tests just to increase percentage.
7. Run lint and applicable validation.

Do not impose arbitrary 100%, 95%, or 90% targets unless project configuration already defines them.

## Execution loop

For each target:

1. Read `docs/testing.md`.
2. Read the complete target source file.
3. Read the existing test file, if present.
4. Inspect relevant directly used project components.
5. Identify user-visible states, interactions, accessibility behavior, and external boundaries.
6. Decide what truly requires mocking.
7. Write or update focused integration tests.
8. Run the target tests.
9. Fix failures until the suite passes.
10. Run coverage.
11. Review uncovered meaningful behavior.
12. Add useful missing coverage where justified.
13. Remove redundant or implementation-detail tests.
14. Run lint and other applicable checks.
15. Report results.

Do not stop with known failing tests.

## File changes

Prefer modifying only the target test file and test-support files genuinely required by the test environment.

Do not refactor production code as part of a test-writing task unless explicitly requested.

Do not introduce a new test framework when the existing configured framework can do the job.

## File naming

Follow the repository's existing test-file convention.

If no convention exists, prefer co-located files such as:

```text
ComponentName.test.tsx
```

## Browser tests

Use Playwright only where a real browser materially improves confidence, such as:

- responsive mobile navigation
- theme persistence across reload
- critical page-level navigation
- behavior dependent on actual browser layout/runtime

Do not duplicate the whole React Testing Library suite in Playwright.

## Validation

Use the repository's actual scripts.

Typical commands may include:

```bash
npm run test
npm run test:coverage
npm run lint
npm run build
```

For focused coverage, use the configured test runner's supported file filtering instead of inventing commands that do not match the repository.

## Final report

Report:

1. target tested
2. test file created or updated
3. user-visible scenarios covered
4. accessibility behavior covered
5. what was mocked and why
6. coverage result
7. meaningful uncovered areas, if any
8. test/lint/build results
9. any source issue that prevented meaningful testing

Do not claim a scenario is tested unless the test actually exercises it.
