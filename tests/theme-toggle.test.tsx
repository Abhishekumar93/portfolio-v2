import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import ThemeProvider from '@/components/Theme/Provider';
import ThemeToggle from '@/components/Theme/Toggle';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  // Simulate a dark OS preference; the portfolio should still default to light.
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches: true,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  );
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  vi.unstubAllGlobals();
});

test('defaults to light and persists both theme choices with an accessible label', async () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );

  const darkToggle = screen.getByRole('button', {
    name: 'Switch to dark theme',
  });
  await waitFor(() => {
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  fireEvent.click(darkToggle);

  const lightToggle = screen.getByRole('button', {
    name: 'Switch to light theme',
  });
  await waitFor(() => {
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  fireEvent.click(lightToggle);

  expect(
    screen.getByRole('button', { name: 'Switch to dark theme' }),
  ).toBeDefined();
  await waitFor(() => {
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});

test('restores the saved theme on the next visit', async () => {
  localStorage.setItem('theme', 'dark');
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );

  expect(
    screen.getByRole('button', { name: 'Switch to light theme' }),
  ).toBeDefined();
  await waitFor(() => {
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
