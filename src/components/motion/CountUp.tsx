"use client";

import { useEffect, useRef, useState } from "react";

const REDUCE =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Zählt beim Eintritt ins Sichtfeld von 0 auf `value` hoch. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1100,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Startet bei 0 wie das Server-HTML — sonst Hydration-Mismatch bei reduced motion.
  const [n, setN] = useState(0);

  useEffect(() => {
    if (REDUCE) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setN(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(value * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setN(value);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(n)}
      {suffix}
    </span>
  );
}
