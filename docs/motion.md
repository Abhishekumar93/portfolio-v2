# Motion Contract

Motion should reinforce hierarchy, feedback, and polish without becoming a visual feature of its own.

## Approved patterns

1. Subtle fade + small vertical translate when major sections enter the viewport.
2. Short button/link hover and focus transitions.
3. Subtle theme-toggle state transition.
4. Small card hover elevation and/or border-color change.
5. Compact mobile-menu open/close transition.
6. Optional light reveal for metrics or important case-study content.

## Constraints

- Keep motion subtle and fast.
- Avoid large travel distances, dramatic scaling, bouncing, spring-heavy movement, or long delays.
- Content must remain understandable and usable without animation.
- Do not hide essential content for prolonged entrance sequences.
- Do not add parallax, particles, animated backgrounds, text-scramble/typewriter effects, continuous decorative motion, scroll-jacking, or large 3D/WebGL effects.
- Prefer CSS/Tailwind transitions for simple interaction states.
- Add a motion library only if a later interaction genuinely requires it.
- Respect `prefers-reduced-motion: reduce`.
- Animation must not introduce layout shift, hydration issues, or noticeable performance regressions.
