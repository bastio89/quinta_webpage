"use client";

import { useEffect, useState } from "react";

// Art. 6 Abs. 1 i. V. m. Anhang I EU AI Act: Hochrisiko-KI-Systeme, die
// Sicherheitsbauteile bereits regulierter Produkte sind, müssen ab diesem
// Datum konform sein.
const DEADLINE = new Date("2026-08-02T00:00:00Z");

function getRemaining() {
  const diff = Math.max(0, DEADLINE.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function AiActCountdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const timer = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  const parts = [
    { label: "Tage", value: remaining?.days },
    { label: "Std", value: remaining?.hours },
    { label: "Min", value: remaining?.minutes },
    { label: "Sek", value: remaining?.seconds },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline gap-2 font-mono text-3xl font-semibold text-ink-950 sm:text-4xl">
        {parts.map((p, i) => (
          <span key={p.label} className="flex items-baseline gap-2">
            <span className="tabular-nums">
              {p.value === undefined ? "--" : String(p.value).padStart(2, "0")}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-mist-500">{p.label}</span>
            {i < parts.length - 1 && <span className="text-mist-300">:</span>}
          </span>
        ))}
      </div>
      <p className="mt-2 text-sm text-mist-600">Bis zum 2. August 2026 — Hochrisiko-Pflichten des EU AI Act</p>
    </div>
  );
}
