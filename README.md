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

- Node.js 20.9 or later (required by the installed Next.js version)
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

There is no dedicated type-check or test script. The production build checks TypeScript.

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
