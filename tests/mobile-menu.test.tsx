import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import MobileMenu from '@/components/Layout/MobileMenu';
import Header from '@/components/Layout/Header';
import ThemeProvider from '@/components/Theme/Provider';
import Home from '@/app/page';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

test('the header links target the real portfolio sections with native anchors', () => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches: false,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  );

  render(
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>,
  );

  const navigation = within(
    screen.getByRole('navigation', { name: 'Main navigation' }),
  );
  const destinations = [
    ['Experience', 'experience'],
    ['Work', 'work'],
    ['Expertise', 'expertise'],
    ['Practice', 'practice'],
    ['Contact', 'contact'],
  ];

  expect(navigation.getAllByRole('link')).toHaveLength(destinations.length);
  for (const [label, id] of destinations) {
    const link = navigation.getByRole('link', { name: label });
    expect(link.getAttribute('href')).toBe(`#${id}`);
    expect(document.getElementById(id)?.tagName).toBe('SECTION');
  }
});

test('opens navigation, focuses the first link, and restores focus on Escape', async () => {
  render(<MobileMenu />);

  const trigger = screen.getByRole('button', { name: 'Open navigation' });
  expect(trigger.getAttribute('aria-expanded')).toBe('false');
  expect(screen.queryByRole('navigation')).toBeNull();

  fireEvent.click(trigger);

  const navigation = screen.getByRole('navigation', {
    name: 'Main navigation',
  });
  expect(trigger.getAttribute('aria-expanded')).toBe('true');
  expect(trigger.getAttribute('aria-controls')).toBe(navigation.id);
  await waitFor(() => {
    expect(document.activeElement).toBe(
      screen.getByRole('link', { name: 'Experience' }),
    );
  });

  fireEvent.keyDown(document, { key: 'Escape' });

  expect(trigger.getAttribute('aria-expanded')).toBe('false');
  expect(screen.queryByRole('navigation')).toBeNull();
  expect(document.activeElement).toBe(trigger);
});

test('choosing a section closes navigation and restores focus to its trigger', () => {
  render(<MobileMenu />);

  const trigger = screen.getByRole('button', { name: 'Open navigation' });
  fireEvent.click(trigger);

  const workLink = screen.getByRole('link', { name: 'Work' });
  expect(workLink.getAttribute('href')).toBe('/#work');
  fireEvent.click(workLink);

  expect(trigger.getAttribute('aria-expanded')).toBe('false');
  expect(screen.queryByRole('navigation')).toBeNull();
  expect(document.activeElement).toBe(trigger);
});
