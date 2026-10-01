# Testing Contract

Testing should evolve alongside implementation, but tests should be added based on behavioral risk rather than mechanically for every component or file.

## What to test

Prioritize tests for user-observable behavior, state, interaction, accessibility, and regression-prone logic.

Typical candidates include:

- theme switching and persistence
- mobile menu open/close behavior
- keyboard interaction and focus behavior
- ARIA state changes
- forms and validation
- conditional rendering driven by user interaction
- behavior that previously regressed or is easy to break during refactoring

## What not to test by default

Do not create dedicated tests solely because a component exists.

Simple presentational components usually do not require isolated tests when they contain no meaningful behavior, including:

- SVG icon components
- static wrappers
- simple headings
- layout-only components
- trivial markup with no interaction or conditional logic

Test these indirectly through the behavior of the component that uses them when appropriate.

## Testing principles

- Test behavior from the user's perspective rather than implementation details.
- Prefer accessible queries such as role, name, label, and visible text.
- Avoid coupling tests to internal state, private functions, exact component structure, or raw SVG path data.
- Use `data-testid` only when a reliable semantic or accessible query is not practical.
- Add or update tests in the same implementation pass when behavior changes or regression risk is meaningful.
- Do not add tests merely to increase coverage.
- Coverage is a signal, not the goal; useful behavioral protection is the goal.
- Refactors that should preserve behavior should keep existing tests passing and add new tests only when they protect a meaningful gap.
- Keep tests readable and focused; avoid oversized tests that verify unrelated behaviors together.

## Component-level guidance

### Interactive components

Interactive components should generally have tests when they contain meaningful behavior.

Examples of useful assertions include:

- the expected state is rendered
- user interaction changes the expected state
- keyboard behavior works
- focus moves or returns correctly where required
- accessible names and ARIA state remain correct
- disabled controls do not execute actions

### Presentational components

Do not test simple presentational components in isolation unless:

- they contain meaningful conditional behavior
- they have an accessibility requirement that is not adequately covered by a parent/component test
- they previously caused a regression
- the rendered contract is important enough to protect independently

## Project-specific testing direction

For this portfolio:

- Theme Toggle tests should focus on theme-changing behavior, persistence-related integration where practical, and accessibility.
- Mobile Menu tests should focus on open/close behavior, keyboard interaction, focus management, navigation state, and ARIA attributes.
- SVG icons should normally be covered through the owning interactive component rather than dedicated icon tests.
- Static portfolio sections should not receive tests purely for coverage unless they contain meaningful behavior or data transformation.

Use the testing tools already configured in the repository. Do not introduce a new testing framework without a demonstrated need.

## Definition of Done relationship

`docs/testing.md` owns the testing strategy.

`docs/definition-of-done.md` should verify that relevant tests were added or updated and that the applicable test suite passes; it should not duplicate the detailed testing rules from this file.

For each task:

- add or update tests when the task changes meaningful behavior or regression-prone logic
- mark testing as `N/A — reason` when the change genuinely does not warrant a test
- never add low-value tests only to avoid using `N/A`
