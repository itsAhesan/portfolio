"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const toggleClasses =
  "inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface/60 text-muted transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

const emptySubscribe = () => () => {};

/** Dark/light theme switch. Renders a neutral placeholder until mounted to avoid hydration mismatch. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  /* false during SSR and the hydration render, true right after mount. */
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className={toggleClasses}
        disabled
        aria-hidden="true"
        tabIndex={-1}
      >
        <Sun className="size-4" aria-hidden />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={toggleClasses}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden />
      ) : (
        <Moon className="size-4" aria-hidden />
      )}
    </button>
  );
}
