# Content Contract

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

## Content and publication checks

The references are **visual designs**, not verified public copy. Do not invent technical details to fill a card.

- Keep the 90% reduction with the earlier **Senior Software Engineer** schema-driven form work. The 45% load-time result and mentoring of three engineers belong to the **Lead Engineer** work. Nearly eight years is a time-sensitive claim; update it when needed. The AI-assisted coverage result is **+5 percentage points**, not a 35% AI result.
- Draft the two professional case studies from actual, shareable context, decision, alternatives/trade-offs, and outcome. The reference's short problem and trade-off sentences are provisional. Do not claim TypeScript generics, Formik rejection, hook registries, 15+ workflows, or other specific architecture unless confirmed.
- Confirm employer/client naming, the six-person team description, all metrics, and the precise NDA/public-disclosure wording before publication. If “NDA Protected” is not legally accurate, use a truthful short label with the same badge treatment.
- No professional screenshots, proprietary code, private links, or customer data. A generic diagram is acceptable only if it accurately represents a shareable system.
- DevTinder and Chatbox get working repository links. Show “Live demo” only when a maintained live URL actually exists; otherwise remove that action and rebalance the card.
- Verify résumé path, email address, GitHub and LinkedIn URLs. Use `mailto:` for email. Do not ship empty `href`, `#` placeholders, or a decorative contact form.
- RAWG Games is not part of this approved visual reference; do not add it unless the content scope is deliberately revised.

## Case-study drafting workflow

- Draft professional case-study copy in `content/drafts/`.
- Use one Markdown file per case study, for example:
  - `content/drafts/schema-case-study.md`
  - `content/drafts/sony-liv-case-study.md`
- Drafts may contain unverified wording while they are being worked on, but must be clearly treated as drafts.
- Only move verified, publication-ready content into `content/portfolio.ts`.
- `content/portfolio.ts` is the source for shipped typed portfolio content.
- Do not copy speculative architecture, trade-offs, metrics, employer/client wording, or NDA claims into `content/portfolio.ts`.
