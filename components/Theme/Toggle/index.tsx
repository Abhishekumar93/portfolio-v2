"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import ThemeToggleIcon from "@/components/Icons/ThemeToggleIcon";
import Button from "@/components/UI/Button";

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
    <Button
      ariaLabel={mounted ? `Switch to ${nextTheme} theme` : "Theme toggle"}
      type="button"
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
      className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent hover:bg-surface-soft"
      extraContent={
        <ThemeToggleIcon
          theme={mounted && theme === "dark" ? "dark" : "light"}
        />
      }
    />
  );
};

export default ThemeToggle;
