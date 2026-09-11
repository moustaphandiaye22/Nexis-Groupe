"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  if (!mounted) {
    return (
      <button className="theme-toggle-btn" aria-label="Changer le thème">
        <Sun size={17} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn ${theme === "dark" ? "is-dark" : "is-light"}`}
      aria-label={`Passer au mode ${theme === "light" ? "sombre" : "clair"}`}
      title={`Passer au mode ${theme === "light" ? "sombre" : "clair"}`}
    >
      <div className="theme-icon-wrap">
        {theme === "dark" ? (
          <Sun size={17} className="theme-icon sun-icon" />
        ) : (
          <Moon size={17} className="theme-icon moon-icon" />
        )}
      </div>
    </button>
  );
}
