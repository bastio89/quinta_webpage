"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const REDUCE =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Scroll-Reveal: fade + 12px rise (600ms), einmalig beim Eintritt ins Sichtfeld. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (REDUCE) {
      // prefers-reduced-motion ist nur im Browser bekannt; SSR rendert verborgen,
      // der Client zeigt Inhalte dann sofort ohne Animation.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(12px)",
        transition: `opacity 600ms cubic-bezier(.2,0,0,1) ${delay}ms, transform 600ms cubic-bezier(.2,0,0,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
