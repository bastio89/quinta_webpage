"use client";

import { useEffect, useRef, useState } from "react";

const REDUCE =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Tippt eine rotierende Liste kurzer Phrasen Zeichen für Zeichen (mit Cursor). */
export function TerminalStream({ phrases }: { phrases: string[] }) {
  // Startet leer wie das Server-HTML — sonst Hydration-Mismatch bei reduced motion.
  const [text, setText] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (REDUCE) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setText(phrases[0]);
      return;
    }
    let p = 0;
    let i = 0;
    let deleting = false;

    const step = () => {
      const full = phrases[p];
      if (!deleting) {
        i++;
        setText(full.slice(0, i));
        if (i >= full.length) {
          deleting = true;
          timer.current = setTimeout(step, 1900);
          return;
        }
        timer.current = setTimeout(step, 42 + Math.random() * 45);
      } else {
        i--;
        setText(full.slice(0, i));
        if (i <= 0) {
          deleting = false;
          p = (p + 1) % phrases.length;
          timer.current = setTimeout(step, 260);
          return;
        }
        timer.current = setTimeout(step, 22);
      }
    };
    timer.current = setTimeout(step, 500);
    return () => clearTimeout(timer.current);
  }, [phrases]);

  return (
    <span>
      {text}
      <span className="animate-q-pulse" aria-hidden>
        ▋
      </span>
    </span>
  );
}
