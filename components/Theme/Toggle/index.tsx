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
      type="button"
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
      className="min-h-11 rounded-lg border border-border bg-white px-4 py-2 text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:opacity-50 dark:bg-neutral-950 dark:text-neutral-50"
    >
      {mounted ? `Switch to ${nextTheme} theme` : "Theme toggle"}
    </button>
  );
};

export default ThemeToggle;
