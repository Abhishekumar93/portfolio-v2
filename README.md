# Portfolio V2

Personal portfolio project for Lead and Senior Frontend Engineer opportunities. The site is in early development; the current page is a Next.js starter screen with a temporary theme toggle.

## Tech Stack

- Next.js 16.3.6 App Router and React 19.2.8
- TypeScript 5 and Tailwind CSS 4, using the Tailwind PostCSS plugin
- `next-themes` 0.4.6 for theme selection and persistence
- ESLint 9 with the Next.js configuration
- npm (`package-lock.json`)

## Current Features

- Light theme by default, with a keyboard-accessible toggle for light and dark themes. A saved choice persists across visits; the operating-system theme does not override the default.
- Semantic color tokens in `app/globals.css` and a Tailwind `dark:` variant tied to `data-theme="dark"` on the root element.
- Approved light and dark desktop design references and a portrait asset are present for later implementation. The portrait is not yet used on the page.

## Project Structure

```text
app/                       Root layout, starter page, global styles
components/Theme/
  Provider/                next-themes client wrapper
  Toggle/                  Temporary theme switch
docs/                      Focused design and implementation rules
public/images/profile/     Approved portrait asset
design-reference/          Light and dark desktop SVG references
context.md                 Implementation contract entry point
```

## Getting Started

### Prerequisites

- Node.js 24.16.0 (recorded in `.nvmrc` and used by CI)
- npm

### Install

```bash
npm ci
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Build and Run

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

### Quality Checks

```bash
npm run format:check
npm run lint
npm test
npm run build
```

Tests use Vitest, jsdom, and React Testing Library to cover mobile-navigation
focus/closing behavior and theme selection/persistence. Hook tests verify that
each failing check stops the pre-push sequence. `npm test` runs once and exits;
the production build checks TypeScript.

`npm ci` installs the Husky hooks through the `prepare` script. For an existing
installation, run `npm run prepare` once. Before every push, `.husky/pre-push`
runs `npm run format:check`, `npm run lint`, then `npm test`. The first failure
blocks the push. This hook does not format files or run a production build.

`.github/workflows/ci.yml` runs on pushes to all branches (including `develop`)
and pull requests. Its **Portfolio quality checks** job runs `npm ci`, followed
by the four quality commands above. Any failure fails the job. Hook installation
is skipped in CI and production installs; the checks themselves still run in CI.

### Deployment Gates

Vercel remains connected to `develop` and keeps its existing automatic deployment
integration. CI runs independently; adding a workflow does not make Vercel wait
for its result. No deployment workflow or Vercel configuration is added here.

Configure these dashboard settings after the workflow has run on GitHub:

- In GitHub, protect `develop` with a ruleset or branch-protection rule requiring
  pull requests and the **Portfolio quality checks** status check. Require branches
  to be up to date before merging, and restrict bypass/direct pushes as supported
  by the repository's plan and permissions.
- In Vercel, open the project's **Settings → Deployment Checks**, add GitHub as
  the provider, and select **Portfolio quality checks**. Verify that `develop` is
  the production branch and automatic production aliasing is enabled. Where this
  feature is available, Vercel can build immediately while holding promotion to
  production domains until the required check passes.
- Confirm the Vercel project's Node.js version is 24.x to match local and CI
  validation. This dashboard setting is not changed by this repository update.

See [Vercel Deployment Checks](https://vercel.com/docs/deployment-checks) for the
production-promotion gate and [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
for required-check enforcement. Remote settings are not changed by this update.

## Architecture and Conventions

Tailwind is the primary styling system. Theme colors use CSS variables, and `next-themes` supplies the root `data-theme` attribute. The root layout and page remain Server Components; the theme provider and toggle are Client Components. Theme components use named folders with `index.tsx` entry points. The detailed conventions and planned section structure live in the documentation below.

## Project Documentation

[context.md](context.md) is the contract entry point. These focused documents cover the implementation rules:

- [Design and responsive behavior](docs/design.md)
- [Architecture](docs/architecture.md)
- [Coding standards](docs/coding-standards.md)
- [Accessibility](docs/accessibility.md)
- [Motion](docs/motion.md)
- [Content and publication checks](docs/content.md)
- [Definition of done](docs/definition-of-done.md)

## Status

The project scaffold and theme foundation are in place. The portfolio sections and verified public content described in the contract have not been implemented yet.
