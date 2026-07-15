type Lang = "de" | "en";

const T = {
  de: {
    gateway: "Mit Quinta-Gateway",
    gatewayNote: "Zulassung dosiert — Anfragen warten geordnet und kommen an.",
    pure: "vLLM pur",
    pureNote: "Überlast trifft die Engine ungebremst — Anfragen kippen in Fehler.",
    gate: "Gateway",
    crash: "Überlast",
    caption:
      "Schematische Darstellung des Prinzips (bounded admission) — keine Messdaten. Die gemessenen Werte stehen oben.",
  },
  en: {
    gateway: "With Quinta gateway",
    gatewayNote: "Admission is metered — requests queue in order and arrive.",
    pure: "Plain vLLM",
    pureNote: "Overload hits the engine unchecked — requests tip into errors.",
    gate: "Gateway",
    crash: "Overload",
    caption:
      "Schematic illustration of the principle (bounded admission) — not measured data. The measured figures are above.",
  },
} as const;

/** Zwei animierte Bahnen: dosierter Strom vs. ungebremste Überlast. Rein dekorativ. */
export function BenchmarkVisual({ lang = "de" }: { lang?: Lang }) {
  const t = T[lang];
  // Gleichmäßiger Strom (Gateway) vs. Anfangs-Burst (pur)
  const passDelays = [0, 0.6, 1.2, 1.8, 2.4, 3.0];
  const dropDelays = [0, 0.12, 0.2, 0.32, 0.44, 0.55];

  return (
    <div className="rounded-2xl bg-ink-900 p-7 sm:p-10" aria-hidden>
      <div className="flex flex-col gap-8">
        <div>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="text-sm font-semibold text-on-dark">{t.gateway}</span>
            <span className="hidden text-xs text-on-dark-muted sm:block">{t.gatewayNote}</span>
          </div>
          <div className="relative">
            <div className="bench-track">
              {passDelays.map((d) => (
                <span key={d} className="bench-dot bench-dot--pass" style={{ animationDelay: `${d}s` }} />
              ))}
            </div>
            <div className="absolute left-[42%] top-1/2 h-6 w-px -translate-y-1/2 bg-azul-400/60" />
            <span className="absolute left-[42%] top-full mt-1.5 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.08em] text-azul-400">
              {t.gate}
            </span>
          </div>
        </div>

        <div className="pt-3">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="text-sm font-semibold text-on-dark-muted">{t.pure}</span>
            <span className="hidden text-xs text-on-dark-muted sm:block">{t.pureNote}</span>
          </div>
          <div className="relative">
            <div className="bench-track">
              {dropDelays.map((d) => (
                <span key={d} className="bench-dot bench-dot--drop" style={{ animationDelay: `${d}s` }} />
              ))}
            </div>
            <div className="absolute left-[45%] top-1/2 h-6 w-px -translate-y-1/2 bg-red-500/60" />
            <span className="absolute left-[45%] top-full mt-1.5 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.08em] text-red-500">
              {t.crash}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs leading-relaxed text-on-dark-muted">{t.caption}</p>
    </div>
  );
}
