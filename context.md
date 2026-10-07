# Portfolio V2 — Implementation Contract

**Owner:** Abhishek Kumar  
**Stack:** Next.js App Router, TypeScript, Tailwind CSS  
**Approach:** Mobile first, light mode default, dark mode toggle  
**Status:** Approved visual direction; public copy still requires verification

Build a restrained technical whitepaper: readable typography, generous space, thin borders, muted surfaces, and a single forest-green accent. Use Tailwind CSS as the primary styling system. Keep utility usage readable and avoid long, repeated `className` strings; extract reusable components or small helpers when patterns repeat. CSS Modules are optional only when a complex component is clearer with scoped styles.

## Testing source of truth

Testing strategy lives in `docs/testing.md`. Read it for tasks that add or change interactive behavior, state, accessibility behavior, or regression-prone logic. Do not require dedicated tests for every component by default.

## Protected visual tuning

Existing manually tuned visual values are intentional and protected. Do not modify established typography, spacing, dimensions, positioning, grid behavior, image treatment, or responsive classes as part of an unrelated task.

A protected visual value may change only when the current task explicitly requests that visual property to change or when an actual regression requires it. If a task appears to require changing a protected value, preserve it and report the conflict instead of silently changing it.

Mobile and tablet visual tuning that has already been manually finalized should be treated as stable. Desktop values may continue to evolve during implementation unless they have also been explicitly finalized.

See `docs/design.md` for the source-of-truth rule.

## Sources of truth

Place the approved references in `design-reference/`:

- `design-reference/whitepaper-desktop-reference.svg` — light desktop, primary visual reference.
- `design-reference/whitepaper-dark-desktop-reference.svg` — dark desktop, same composition. Its portrait crop removes the bottom gap.
- `public/images/profile/abhishek-hero.png` — approved transparent portrait. Use this original with `next/image`; do not regenerate, retouch, or alter the face.

These are **desktop visual references at 1440px**, not fixed-coordinate layouts or completed mobile mockups. The responsive rules below define how to derive smaller screens. Light and dark must use **identical structure, spacing, responsive behavior, content order, and portrait crop**; only color and theme-control state change. Use the corrected bottom-aligned portrait treatment in both themes so no exposed strip appears below the cutout.

## Non-negotiable structure

1. Header: name, five section links, and visible theme toggle.
2. Hero: Lead Frontend Engineer, headline, supporting copy, two actions, location/social links, portrait.
3. Three-metric proof bar.
4. Professional Case Studies: schema-driven form system first; Sony LIV Bolt second. These are professional, text-led stories without proprietary screenshots or code.
5. Built in Public: DevTinder and Chatbox in separate cards with repository actions.
6. Technical Expertise: Frontend Systems, Quality & Delivery, Technical Leadership.
7. Engineering Practice: human-reviewed AI workflow and cloud-integrated frontend.
8. Contact: direct email, LinkedIn, GitHub. No contact form.
9. Minimal footer with copyright and back-to-top action.

The header's **Experience** link targets Professional Case Studies; **Work** targets Built in Public. Expertise, Practice, and Contact target their matching sections. Every visible link must have a real destination before launch. The primary hero action scrolls to Professional Case Studies; the résumé action opens or downloads the actual résumé.

## Layout and breakpoints

Use a fluid container with `max-width: 1152px` and center it. Never reproduce the SVG's absolute x/y coordinates. A section can use an internal grid while its outer edges remain aligned to the same container.

| Viewport         |         Horizontal gutter | Layout behavior                                                                                                                                                       |
| ---------------- | ------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 320–639px        |                      24px | One column. Compact header with name, theme toggle, and accessible menu. Hero copy before portrait. Metrics stack. All cards stack. Buttons and pills wrap naturally. |
| 640–767px        |                      24px | Still a single main column; metrics may use three equal columns if captions wrap cleanly. Keep case studies stacked.                                                  |
| 768–1023px       |                      32px | Two personal-project cards and two practice cards where content fits. Hero, case-study interiors, expertise, and contact remain stacked.                              |
| 1024–1279px      |                      48px | Desktop navigation. Hero 7/5; featured study approximately 35/65; Sony study, expertise, and contact use desktop grids.                                               |
| 1280px and wider | Centered 1152px container | Keep content width fixed; outer margins grow. Reference composition at 1440px. Do not stretch cards across 1920px screens.                                            |

Only add a breakpoint when content actually needs it. The table describes target behavior, not a requirement to create a media query at every listed width. Check at **320, 360, 390, 480, 640, 768, 1024, 1280, 1440, and 1920px**. No horizontal scroll, clipped text, overlapping cards, or inaccessible controls.

### 1920 × 1080 desktop quality gate

Treat **1920 × 1080** as a required visual review size, not just a width check. At that size, the 1152px content area is centered with equal outer margins; the wider canvas is intentional to keep case-study text readable. Full-width section bands extend to the viewport edges, while header, hero, cards, and footer align to the same centered content edges. Do not enlarge the portrait or stretch cards simply to fill the monitor.

Review an actual 1920 × 1080 screenshot in **both themes**: the first screen should show the complete header and hero plus the proof bar without awkward vertical gaps; the headline, portrait, CTAs, and metrics should feel balanced; the navigation should not drift toward one side. Check the entire page at that width as well, especially case-study columns, project cards, contact alignment, and full-width band transitions. If the centered reading width genuinely looks too sparse in the implemented browser, adjust the wide-screen composition deliberately after reviewing it, while keeping paragraph line lengths controlled and the approved section hierarchy intact.

### Section layouts

- **Header:** on narrow screens, keep name and theme control visible and put the five links in a compact slide-down menu beneath the header. At desktop sizes, show links inline. The toggle visually indicates the active theme.
- **Hero:** one column through tablet, 7/5 at desktop. Copy first in DOM. Portrait follows copy on mobile. Keep the person centered, crop bottom aligned, and use the same placement in both themes.
- **Proof bar:** three equal columns from 640px when legible; otherwise three bordered rows. Numbers stay prominent and captions remain readable.
- **Featured case study:** metric panel before the narrative on mobile; approximately 35/65 split on desktop. Problem, Contribution, and Trade-offs stack on mobile and use three balanced columns on desktop. Outcome remains below their divider.
- **Sony LIV study:** colored metric area first, technical/leadership details second; stack on mobile. Both professional cards should carry comparable visual weight.
- **Built in Public:** one card per row on mobile, two equal cards from 768px. Do not force diagrams, code, or thumbnails that are unavailable.
- **Expertise:** one card per row on mobile, two columns only if useful at tablet, three equal cards from 1024px.
- **Practice:** one column on mobile, two equal cards from 768px.
- **Contact:** copy then direct-contact card on mobile; 5/7 split from 1024px. Email is the primary action; LinkedIn and GitHub are plainly visible.

## Color roles

Use semantic tokens rather than writing hex values throughout components. The dark theme changes colors, **not** layout or content.

| Role                      | Light     | Dark      | Use                                         |
| ------------------------- | --------- | --------- | ------------------------------------------- |
| Page background           | `#F9F9F9` | `#0D1416` | Main canvas                                 |
| Card surface              | `#FFFFFF` | `#152022` | Case studies, expertise, contact            |
| Primary text              | `#111111` | `#F3F6F4` | Headings, strong copy                       |
| Secondary text            | `#4B5563` | `#AABBB6` | Body, supporting labels                     |
| Accent                    | `#1A4D2E` | `#78DDA8` | Eyebrows, links, metrics, selected controls |
| On solid accent           | `#FFFFFF` | `#0D1416` | Button/toggle text and icon                 |
| Case-study tinted panel   | `#EAF2EB` | `#263E34` | 90% and Sony LIV metric panels              |
| Soft section/card surface | `#F3F4F6` | `#1B282A` | Practice band and subtle tiles              |
| Standard border           | `#DBDFDD` | `#354843` | 1px card and control borders                |
| Portrait panel            | `#EEF0ED` | `#4A5A50` | Behind transparent portrait                 |
| Built in Public band      | `#FFFFFF` | `#111B1D` | Full-width section background               |
| Built in Public card      | `#F9F9F9` | `#223235` | Project cards                               |
| Project-card border       | `#DBDFDD` | `#4B625C` | Project card outline                        |
| NDA badge background      | `#FFF7F7` | `#22302E` | Small informational badge                   |
| NDA badge text/border     | `#A83A3A` | `#AFC2BB` | Subtle in dark mode, never an error alert   |
| Major divider             | `#C9D0CC` | `#3D524A` | Proof-bar top/bottom rules                  |

The accent is sparse: eyebrows, primary buttons, links, numerical highlights, checkmarks, and small rules. No gradients, neon glow, skill progress bars, animated blobs, or large blocks of accent-colored body copy. Cards use borders; only the portrait may have a restrained shadow.

## Typography

Use **Inter** as a variable font, loaded through `next/font` if available. Define a sensible sans-serif fallback. Use real weights 400, 500, 600, and 700; the SVG's fractional weights are visual approximations. All text remains selectable and semantic HTML, never text embedded in images.

| Role                       |                       Mobile |  Tablet |                      Desktop | Line height / treatment          |
| -------------------------- | ---------------------------: | ------: | ---------------------------: | -------------------------------- |
| Hero H1                    | 38px at 320px, fluid to 44px | 48–52px |                     64px max | 1.08–1.12, bold, tight tracking  |
| Section H2                 |                         32px |    38px |                         44px | 1.12–1.18, bold                  |
| Card H3                    |                      23–24px | 26–28px | 30–35px as composition needs | 1.2–1.25, bold                   |
| Intro paragraph            |                         17px |    18px |                         18px | 1.55–1.6                         |
| Body and case-study detail |                         16px |    16px |                      16–17px | 1.6                              |
| Outcome statements         |                         17px |    18px |                         18px | 1.45, semibold                   |
| Proof-bar numbers          |                         36px |    40px |                         44px | 1.0–1.1, bold                    |
| Featured 90%               |                         72px |    88px |                        104px | 1.0, bold                        |
| Sony metric numbers        |                         44px |    52px |                         59px | 1.0, bold                        |
| Eyebrows and small labels  |                         12px |    13px |                         13px | Uppercase, bold, modest tracking |
| Captions                   |                         14px | 14–15px |                         15px | At least 1.4                     |
| Navigation and buttons     |                      15–16px | 15–16px |      14px nav / 16px actions | Clear tap targets                |

Do not solve clipping by reducing all text. Let titles wrap, let cards grow, and keep a readable measure for long paragraphs (roughly 65–75 characters per line). Use natural height rather than fixed-height content boxes.

## Spacing and components

- Spacing scale: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 100px`. Use 64–72px between major sections on mobile and about 96–112px on desktop. Preserve breathing room without leaving large empty columns.
- Professional cards: about 24px radius; other cards and portrait: 16–19px; controls: 8–12px or full pill radius where shown. Borders are 1px.
- Mobile card inner padding: 24px (reduce carefully only at 320px if content requires it). Desktop professional card padding: 32–36px. Card heights must grow with content.
- Buttons and interactive pills: minimum 44px target height; primary hero buttons are around 52–54px. Size from padding and text, not fixed widths. Keep visible focus outlines.
- Hover/focus states may change border or underline and use short, subtle transitions. Respect `prefers-reduced-motion`. No scroll-jacking.

### Motion and animation

Motion should reinforce hierarchy, feedback, and polish without becoming a visual feature of its own. Keep animations restrained, fast, and consistent with the technical whitepaper direction.

Approved animation patterns:

1. **Section entry:** subtle fade + small vertical translate as major sections enter the viewport.
2. **Buttons and links:** short hover/focus transitions for color, border, background, underline, or similarly restrained feedback.
3. **Theme toggle:** a subtle state transition when switching between light and dark. Theme changes must not alter layout or portrait crop.
4. **Cards:** small hover elevation and/or border-color change on interactive cards. Avoid exaggerated transforms or floating effects.
5. **Mobile menu:** a compact open/close transition for the slide-down navigation panel.
6. **Metrics and case-study content:** optional very light reveal for metrics or important case-study content when it first enters the viewport.

Animation constraints:

- Keep motion subtle; avoid large travel distances, dramatic scaling, bouncing, spring-heavy movement, or long delays.
- Content must remain understandable and usable without animation.
- Do not hide essential content for prolonged entrance sequences.
- Do not add parallax, particles, animated backgrounds, text-scramble/typewriter effects, continuous decorative motion, scroll-jacking, or large 3D/WebGL effects.
- Prefer CSS/Tailwind transitions for simple interaction states. Add a motion library only if a later interaction genuinely requires it; do not add one solely for basic fades or hover effects.
- Respect `prefers-reduced-motion`: remove or substantially reduce non-essential transforms and entrance animations for users who request reduced motion.
- Animation must not introduce layout shift, hydration problems, or noticeable performance regressions.

- Theme toggle: an accessible button with a label such as “Switch to dark mode” / “Switch to light mode”, visible selected state, keyboard support, and persisted user choice. First visit defaults to **light**; a saved choice wins thereafter. Avoid a flash of the wrong theme during initial render.
- Mobile navigation: use a compact slide-down panel beneath the header for the five links, rather than a full-screen overlay. Its labeled trigger exposes `aria-expanded`; opening moves focus into the menu, Escape closes it and returns focus to the trigger, and choosing a section closes it. Keep visible focus states.
- External destinations use ↗; in-page scroll actions use ↓ or no arrow. Do not put external-link arrows on section anchors.

## Modularity and styling policy

The page must **not** become one large `page.tsx` with long `className` strings. Use a small, clear component for each section and extract subcomponents where a repeated pattern or distinct behavior warrants it. `app/page.tsx` should primarily compose the sections in order.

Suggested starting structure (adapt names only when there is a concrete reason):

```text
app/
  layout.tsx
  page.tsx
  globals.css                 # font setup, semantic theme tokens, reset only
components/
  layout/
    Header.tsx
    MobileMenu.tsx
    Footer.tsx
  Theme/
    Toggle/
      index.tsx
      types.ts
  sections/
    Hero.tsx
    Metrics.tsx
    ProfessionalCaseStudies.tsx
    SchemaCaseStudy.tsx
    SonyCaseStudy.tsx
    PersonalProjects.tsx
    ProjectCard.tsx
    Expertise.tsx
    EngineeringPractice.tsx
    Contact.tsx
  ui/
    Container.tsx
    SectionHeading.tsx
types/
  portfolio.ts
  navigation.ts
  theme.ts
content/
  portfolio.ts                # typed public content and link destinations
public/images/profile/
  abhishek-hero.png
design-reference/
  whitepaper-desktop-reference.svg
  whitepaper-dark-desktop-reference.svg
```

- Use Tailwind CSS as the default styling approach for layouts, spacing, typography, responsive behavior, states, and component variants. Keep utility lists readable; when the same pattern repeats, extract a reusable component, variant helper, or small utility rather than duplicating long `className` strings. CSS Modules are optional when a genuinely complex component is clearer with scoped styles.
- Keep `globals.css` small: Tailwind setup, semantic theme variables, font/body defaults, reset, and truly global behavior. Do not move section-specific styling into global CSS. Use semantic custom properties where appropriate so light and dark share the same layout and component structure.
- Avoid repeated one-off values and duplicated utility combinations. Extract repeated layout or action patterns into a component, variant helper, or shared utility. If CSS Modules are used for a complex component, keep them narrowly scoped to that component.
- Separate **content data** from display: typed case-study/project objects may hold titles, metrics, descriptions, and verified links. Do not hide an entire page of hard-coded copy inside one component or introduce a generic page-builder abstraction for a handful of sections.
- Use shared UI components only for genuine repeated behavior: for example `Container`, `SectionHeading`, or a link/button variant. Do not create a component for every wrapper or every single line of text.
- Keep interaction boundaries narrow. The theme toggle and mobile menu need client behavior; static sections should stay server-rendered. Do not mark the whole page `"use client"` to support two controls.
- Define React components as named arrow-function expressions, then export them separately at the end of the file. Do not use `export default function ComponentName(...) { ... }` for components. Preferred pattern:

```tsx
const ComponentName = (props: ComponentNameProps) => {
  // ...
};

export default ComponentName;
```

- Do not add `Readonly<...>` merely because a component uses arrow-function syntax. Function syntax and prop immutability are separate concerns. Only make props explicitly readonly when the project's TypeScript/SonarQube rules or the type design genuinely require it.
- Keep component-specific types colocated with the component in a sibling `types.ts` file rather than declaring substantial prop types directly inside `index.tsx`. Example:

```text
components/
  Theme/
    Toggle/
      index.tsx
      types.ts
```

```ts
// components/Theme/Toggle/types.ts
export interface ThemeToggleProps {
  // ...
}
```

```tsx
// components/Theme/Toggle/index.tsx
import type { ThemeToggleProps } from './types';

const ThemeToggle = (props: ThemeToggleProps) => {
  // ...
};

export default ThemeToggle;
```

- If a type is used by multiple unrelated components or across multiple domains, move it to the root `types/` directory instead of duplicating it. Organize shared types by domain, for example:

```text
types/
  portfolio.ts
  navigation.ts
  theme.ts
```

Prefer domain-based shared type files over a large generic `common.ts` dumping ground.

- Use `interface` or `type` according to what best represents the model; do not force every definition to use one form.
- A component should remain easy to scan. If it mixes a large data object, multiple layouts, and interaction logic, split those responsibilities. Keep responsive Tailwind classes with the component they style; use scoped CSS only when that makes a complex component materially clearer.

## Content and publication checks

The references are **visual designs**, not verified public copy. Do not invent technical details to fill a card.

- Keep the 90% reduction with the earlier **Senior Software Engineer** schema-driven form work. The 45% load-time result and mentoring of three engineers belong to the **Lead Engineer** work. Nearly eight years is a time-sensitive claim; update it when needed. The AI-assisted coverage result is **+5 percentage points**, not a 35% AI result.
- Draft the two professional case studies from actual, shareable context, decision, alternatives/trade-offs, and outcome. The reference's short problem and trade-off sentences are provisional. Do not claim TypeScript generics, Formik rejection, hook registries, 15+ workflows, or other specific architecture unless confirmed.
- Confirm employer/client naming, the six-person team description, all metrics, and the precise NDA/public-disclosure wording before publication. If “NDA Protected” is not legally accurate, use a truthful short label with the same badge treatment.
- No professional screenshots, proprietary code, private links, or customer data. A generic diagram is acceptable only if it accurately represents a shareable system.
- DevTinder and Chatbox get working repository links. Show “Live demo” only when a maintained live URL actually exists; otherwise remove that action and rebalance the card.
- Verify résumé path, email address, GitHub and LinkedIn URLs. Use `mailto:` for email. Do not ship empty `href`, `#` placeholders, or a decorative contact form.
- RAWG Games is not part of this approved visual reference; do not add it unless the content scope is deliberately revised.

## Implementation and review order

1. Scaffold with Next.js App Router, TypeScript, Tailwind CSS, and ESLint; choose **Yes** for Tailwind and **No** for a `src/` directory. Place the two SVG references in `design-reference/` plus the approved portrait in `public/images/profile/`.
2. Set up font, semantic color tokens, container, responsive type/spacing, and the small Tailwind-first component structure above. Confirm light and dark surfaces before sections.
3. Build mobile header, hero, portrait, and proof bar; then add desktop layouts without duplicating markup.
4. Build the two professional case studies, then personal projects, expertise, practice, direct contact, and footer.
5. Wire real links, theme persistence, metadata, keyboard behavior, and reduced-motion handling.
6. Verify at the listed widths in both themes; run lint/build and check keyboard navigation, contrast, image loading, and content truthfulness.

The final site should feel like the same page at every width, not a collection of unrelated breakpoint-specific mockups.
