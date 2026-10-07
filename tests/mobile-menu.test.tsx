import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import MobileMenu from '@/components/Layout/MobileMenu';

afterEach(cleanup);

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
