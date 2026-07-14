"use client";

import { useEffect, useRef, useState } from "react";

const REDUCE =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Balken, der beim Eintritt ins Sichtfeld von 0 auf `width` wächst. */
export function GrowBar({ width, className = "" }: { width: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Startet bei 0 % wie das Server-HTML — sonst Hydration-Mismatch bei reduced motion.
  const [w, setW] = useState("0%");

  useEffect(() => {
    if (REDUCE) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setW(width);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setW(width);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className={"h-full rounded-full transition-[width] duration-[900ms] ease-out " + className}
      style={{ width: w }}
    />
  );
}
