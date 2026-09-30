"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  // Keep the server and initial hydration render independent of the saved theme.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={mounted ? `Switch to ${nextTheme} theme` : "Theme toggle"}
      type="button"
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
      className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:opacity-50"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {mounted && theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </>
        ) : (
          <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1a9 9 0 1 0 10 10Z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
