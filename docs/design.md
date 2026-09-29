# Design and Responsive Contract

## Sources of truth

Place the approved references in `design-reference/`:

- `design-reference/whitepaper-desktop-reference.svg` — light desktop, primary visual reference.
- `design-reference/whitepaper-dark-desktop-reference.svg` — dark desktop, same composition. Its portrait crop removes the bottom gap.
- `public/images/profile/abhishek-hero.png` — approved transparent portrait. Use this original with `next/image`; do not regenerate, retouch, or alter the face.

These are **desktop visual references at 1440px**, not fixed-coordinate layouts or completed mobile mockups. The responsive rules below define how to derive smaller screens. Light and dark must use **identical structure, spacing, responsive behavior, content order, and portrait crop**; only color and theme-control state change. Use the corrected bottom-aligned portrait treatment in both themes so no exposed strip appears below the cutout.

## Layout and breakpoints

Use a fluid container with `max-width: 1152px` and center it. Never reproduce the SVG's absolute x/y coordinates. A section can use an internal grid while its outer edges remain aligned to the same container.

| Viewport | Horizontal gutter | Layout behavior |
|---|---:|---|
| 320–639px | 24px | One column. Compact header with name, theme toggle, and accessible menu. Hero copy before portrait. Metrics stack. All cards stack. Buttons and pills wrap naturally. |
| 640–767px | 24px | Still a single main column; metrics may use three equal columns if captions wrap cleanly. Keep case studies stacked. |
| 768–1023px | 32px | Two personal-project cards and two practice cards where content fits. Hero, case-study interiors, expertise, and contact remain stacked. |
| 1024–1279px | 48px | Desktop navigation. Hero 7/5; featured study approximately 35/65; Sony study, expertise, and contact use desktop grids. |
| 1280px and wider | Centered 1152px container | Keep content width fixed; outer margins grow. Reference composition at 1440px. Do not stretch cards across 1920px screens. |

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

| Role | Light | Dark | Use |
|---|---|---|---|
| Page background | `#F9F9F9` | `#0D1416` | Main canvas |
| Card surface | `#FFFFFF` | `#152022` | Case studies, expertise, contact |
| Primary text | `#111111` | `#F3F6F4` | Headings, strong copy |
| Secondary text | `#4B5563` | `#AABBB6` | Body, supporting labels |
| Accent | `#1A4D2E` | `#78DDA8` | Eyebrows, links, metrics, selected controls |
| On solid accent | `#FFFFFF` | `#0D1416` | Button/toggle text and icon |
| Case-study tinted panel | `#EAF2EB` | `#263E34` | 90% and Sony LIV metric panels |
| Soft section/card surface | `#F3F4F6` | `#1B282A` | Practice band and subtle tiles |
| Standard border | `#DBDFDD` | `#354843` | 1px card and control borders |
| Portrait panel | `#EEF0ED` | `#4A5A50` | Behind transparent portrait |
| Built in Public band | `#FFFFFF` | `#111B1D` | Full-width section background |
| Built in Public card | `#F9F9F9` | `#223235` | Project cards |
| Project-card border | `#DBDFDD` | `#4B625C` | Project card outline |
| NDA badge background | `#FFF7F7` | `#22302E` | Small informational badge |
| NDA badge text/border | `#A83A3A` | `#AFC2BB` | Subtle in dark mode, never an error alert |
| Major divider | `#C9D0CC` | `#3D524A` | Proof-bar top/bottom rules |

The accent is sparse: eyebrows, primary buttons, links, numerical highlights, checkmarks, and small rules. No gradients, neon glow, skill progress bars, animated blobs, or large blocks of accent-colored body copy. Cards use borders; only the portrait may have a restrained shadow.

## Typography

Use **Inter** as a variable font, loaded through `next/font` if available. Define a sensible sans-serif fallback. Use real weights 400, 500, 600, and 700; the SVG's fractional weights are visual approximations. All text remains selectable and semantic HTML, never text embedded in images.

| Role | Mobile | Tablet | Desktop | Line height / treatment |
|---|---:|---:|---:|---|
| Hero H1 | 38px at 320px, fluid to 44px | 48–52px | 64px max | 1.08–1.12, bold, tight tracking |
| Section H2 | 32px | 38px | 44px | 1.12–1.18, bold |
| Card H3 | 23–24px | 26–28px | 30–35px as composition needs | 1.2–1.25, bold |
| Intro paragraph | 17px | 18px | 18px | 1.55–1.6 |
| Body and case-study detail | 16px | 16px | 16–17px | 1.6 |
| Outcome statements | 17px | 18px | 18px | 1.45, semibold |
| Proof-bar numbers | 36px | 40px | 44px | 1.0–1.1, bold |
| Featured 90% | 72px | 88px | 104px | 1.0, bold |
| Sony metric numbers | 44px | 52px | 59px | 1.0, bold |
| Eyebrows and small labels | 12px | 13px | 13px | Uppercase, bold, modest tracking |
| Captions | 14px | 14–15px | 15px | At least 1.4 |
| Navigation and buttons | 15–16px | 15–16px | 14px nav / 16px actions | Clear tap targets |

Do not solve clipping by reducing all text. Let titles wrap, let cards grow, and keep a readable measure for long paragraphs (roughly 65–75 characters per line). Use natural height rather than fixed-height content boxes.

## Spacing and components

- Spacing scale: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 100px`. Use 64–72px between major sections on mobile and about 96–112px on desktop. Preserve breathing room without leaving large empty columns.
- Professional cards: about 24px radius; other cards and portrait: 16–19px; controls: 8–12px or full pill radius where shown. Borders are 1px.
- Mobile card inner padding: 24px (reduce carefully only at 320px if content requires it). Desktop professional card padding: 32–36px. Card heights must grow with content.
- Buttons and interactive pills: minimum 44px target height; primary hero buttons are around 52–54px. Size from padding and text, not fixed widths. Keep visible focus outlines.
- Hover/focus states may change border or underline and use short, subtle transitions. Respect `prefers-reduced-motion`. No scroll-jacking.
