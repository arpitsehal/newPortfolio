"use client";

import { useEffect, useState } from "react";

const lines = [
  "> booting Arpit.dev",
  "> loading projects, experience, achievements",
  "> ready.",
];

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const exitTimer = setTimeout(() => setExiting(true), 2800);
    const removeTimer = setTimeout(() => setVisible(false), 3300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-1.5 bg-foreground text-background font-mono text-xs sm:text-sm ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transition: "opacity 400ms ease-out" }}
    >
      {lines.map((line, i) => (
        <p
          key={line}
          className="opacity-0"
          style={{
            animation: "line-in 0.4s ease-out forwards",
            animationDelay: `${i * 250}ms`,
          }}
        >
          {line}
        </p>
      ))}
      <span
        className="mt-1 inline-block h-3 w-1.5 bg-background"
        style={{ animation: "blink 1s step-end infinite" }}
      />
    </div>
  );
}
