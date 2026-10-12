# Content Contract

## Non-negotiable structure

1. Header: linked AK identity, five section links, and visible theme toggle.
2. Hero: Lead Frontend Engineer, headline, supporting copy, two actions, location/social links, portrait.
3. Three-metric proof bar.
4. Professional Case Studies: schema-driven form system first; product delivery second (`SchemaDrivenCaseStudy.tsx` and `ProductDeliveryCaseStudy.tsx` under `components/Sections/ProfessionalCaseStudies/`). The second study covers the work previously described here as Sony LIV Bolt, but the current component does not display that client name. Both are text-led stories without proprietary screenshots or code.
5. Built in Public: DevTinder, Chatbox, and RAWG Games in separate cards with repository actions.
6. Technical Expertise: Frontend Systems, Quality & Delivery, Technical Leadership.
7. Engineering Practice: human-reviewed AI workflow and cloud-integrated frontend.
8. Contact: direct email, LinkedIn, GitHub. No contact form.
9. Minimal footer with copyright and back-to-top action.

The header's **Experience** link targets Professional Case Studies; **Work** targets Built in Public. Expertise, Practice, and Contact target their matching sections. Shared navigation definitions live in `components/Layout/Header/navigation.ts`; header links use homepage-qualified anchors so they also work from project detail pages. The primary hero action currently targets Built in Public (`#work`). Every visible link must have a real destination before launch.

## Current content ownership

- Homepage copy and data currently live in `components/Sections/`: professional study files, `PersonalProjects/index.tsx`, `TechnicalExpertise/index.tsx`, `EngineeringPractice/index.tsx`, `Metrics/index.tsx`, and the Hero and Contact files own their respective copy. Shared navigation labels live in `components/Layout/Header/navigation.ts`.
- `content/projects/*.md` owns personal project detail metadata and body copy; `lib/projects.ts` loads it for `app/projects/[slug]/page.tsx`. Homepage cards have separate concise summaries and selected technology pills.
- The approved portrait is `public/images/profile/abhishek-hero.png`, used by Hero through `next/image`; its visual protection rules belong to [design](design.md).
- The resume action in `components/Sections/Hero/HeroActions.tsx` downloads `Abhishek_Kumar_Resume.pdf` from the latest GitHub release of `Abhishekumar93/Abhishekumar93`. No resume PDF is currently bundled under `public/`. Verify the configured GitHub release download URL before publication.

There is no centralized typed portfolio-content file or repository draft
directory. A future content extraction requires an explicit implementation task;
do not document proposed files as current sources of truth.

## Content and publication checks

Visual specifications do not verify public copy. Do not invent technical details to fill a card.

- Keep the 90% reduction with the earlier **Senior Software Engineer** schema-driven form work. The 45% load-time result and mentoring of three engineers belong to the **Lead Engineer** work. Nearly eight years is a time-sensitive claim; update it when needed. The AI-assisted coverage result is **10+ percentage points**, not a 35% AI result.
- Draft the two professional case studies from actual, shareable context, decision, alternatives/trade-offs, and outcome. Existing short problem and trade-off sentences still require verification. Do not claim TypeScript generics, Formik rejection, hook registries, 15+ workflows, or other specific architecture unless confirmed.
- Confirm employer/client naming, the six-person team description, all metrics, and the precise NDA/public-disclosure wording before publication. If “NDA Protected” is not legally accurate, use a truthful short label with the same badge treatment.
- No professional screenshots, proprietary code, private links, or customer data. A generic diagram is acceptable only if it accurately represents a shareable system.
- DevTinder, Chatbox, and RAWG Games get working repository links. Show “Live demo” only when a maintained live URL actually exists; otherwise remove that action and rebalance the card.
- Verify resume path, email address, GitHub and LinkedIn URLs. Use `mailto:` for email. Do not ship empty `href`, `#` placeholders, or a decorative contact form.
- RAWG Games is implemented as the third Built in Public card using the existing project-card design. Its repository action links to the `rawg-games` frontend; reserve the companion `api-gateway-game-list` repository and architecture flow for the project detail page.

## Case-study publication workflow

- Review the current professional study files under `components/Sections/ProfessionalCaseStudies/` against actual, shareable context before publication.
- Keep unverified wording clearly marked as draft in the review process and out of shipped content. No draft storage workflow is implemented in this repository.
- Apply approved copy to its current owning section file. Do not ship speculative architecture, trade-offs, metrics, employer/client wording, or NDA claims.
- The current implementation is evidence of what is rendered, not proof that claims or disclosure wording have been approved.

## Personal project details

`content/projects/*.md` is the source of truth for personal project detail pages. Frontmatter supplies the title, slug, category, description, technologies, and repository URLs; the body supplies the available sections. Do not duplicate detail copy in React components or invent missing sections or live-demo URLs. Homepage cards keep their concise descriptions and selected technology pills.
