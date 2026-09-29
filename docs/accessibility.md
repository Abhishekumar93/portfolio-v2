# Accessibility Contract

- All interactive elements must be reachable by keyboard.
- Focus must be visibly indicated.
- Tab order must follow visual and semantic order.
- Use semantic HTML where appropriate: `header`, `main`, `section`, `footer`, `nav`, `button`, `a`, and related native elements.
- Never use a `div` or `span` as a substitute for a native button or link.
- Every meaningful image must have appropriate `alt` text; decorative images use `alt=""`.
- Text and interactive UI must meet WCAG 2.2 AA contrast requirements in both themes.
- Buttons and interactive pills should have at least a 44px target height.
- The mobile navigation trigger must expose `aria-expanded`.
- Opening the mobile navigation moves focus into the menu.
- Escape closes the menu and returns focus to the trigger.
- Choosing a section closes the mobile menu.
- Theme toggle must have an accessible label such as `Switch to dark mode` / `Switch to light mode`.
- External destinations use ↗ only where useful; in-page section anchors use ↓ or no arrow.
