import { renderToStaticMarkup } from 'react-dom/server';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import RootLayout from '@/app/layout';
import Home from '@/app/page';
import Footer from '@/components/Layout/Footer';

// next/font requires Next.js build processing, which is unavailable in Vitest.
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: 'font-geist-sans' }),
  Geist_Mono: () => ({ variable: 'font-geist-mono' }),
}));

const initialUrl = window.location.href;
const initialHistoryState = window.history.state;

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  window.history.replaceState(initialHistoryState, '', initialUrl);
  document.body.replaceChildren();
  document.body.removeAttribute('id');
  document.body.removeAttribute('class');
});

test('the root layout renders one footer after the page with an accessible back-to-top button', () => {
  const markup = renderToStaticMarkup(
    <RootLayout params={Promise.resolve({})}>
      <Home />
    </RootLayout>,
  );
  const page = new DOMParser().parseFromString(markup, 'text/html');
  document.body.replaceChildren(
    ...Array.from(page.body.childNodes, (node) =>
      document.importNode(node, true),
    ),
  );
  const content = within(document.body);
  const main = content.getByRole('main');
  const footer = content.getByRole('contentinfo');
  const backToTop = within(footer).getByRole('button', { name: 'Back to top' });

  expect(content.getAllByRole('contentinfo')).toHaveLength(1);
  expect(main.contains(footer)).toBe(false);
  expect(
    main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
  expect(within(footer).getByText('© Abhishek Kumar')).toBeTruthy();
  expect(backToTop.getAttribute('type')).toBe('button');
  expect(within(footer).queryByRole('link')).toBeNull();
});

test.each(['#contact', ''])(
  'back-to-top smoothly scrolls and clears fragment "%s" while preserving the path, query, and history entry',
  () => {
    // jsdom does not implement browser scrolling.
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    window.history.replaceState({ portfolio: true }, '', '/portfolio');

    render(<Footer />);
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));

    expect(scrollTo).toHaveBeenCalledExactlyOnceWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    expect(window.location.pathname).toBe('/portfolio');
    expect(window.location.hash).toBe('');
    expect(window.history.state).toEqual({ portfolio: true });
  },
);
