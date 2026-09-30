"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
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
      title={mounted ? `Switch to ${nextTheme} theme` : "Theme toggle"}
      type="button"
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
    />
  );
};

export default ThemeToggle;
