"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-full border border-line transition-colors duration-300"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[#f7f1e6] transition-transform duration-300 ease-out"
        style={{ transform: dark ? "translateY(-100%)" : "translateY(0%)" }}
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[#241a14] transition-transform duration-300 ease-out"
        style={{ transform: dark ? "translateY(0%)" : "translateY(100%)" }}
      />
    </button>
  );
}
