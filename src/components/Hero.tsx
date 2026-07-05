"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TerminalStream } from "@/components/motion/TerminalStream";

const BADGES = ["GDPR-konform", "EU-AI-Act-ready", "100 % europäisch", "OpenAI-kompatible API"];

const STREAM = [
  "Souveränität kostet keine Leistung.",
  "Kein Byte verlässt das Haus.",
  "Antwort erzeugt — lokal, ohne Cloud.",
];

const ROW_CLASS =
  "flex items-center justify-between border-b border-on-dark/10 py-2.5 font-mono text-[12.5px]";

export function Hero() {
  const [offline, setOffline] = useState(false);

  return (
    <section id="top" className="container-quinta pb-24 pt-16 sm:pt-20 lg:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
        <div>
          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
            Souveräne On-Premise-KI von twenty5ai
          </div>
          <h1 className="text-display-lg font-semibold text-ink-900 sm:text-display-xl">
            Ihre KI.
            <br />
            Ihre Hardware.
            <br />
            Kein Byte verlässt das Haus.
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-ink-700">
            Quinta macht aus Ihrer eigenen Hardware einen privaten, OpenAI-kompatiblen KI-Dienst —
            mit Enterprise-Verwaltung und lückenlosem Audit-Trail. In Stunden einsatzbereit, nicht
            in Monaten.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="btn btn-primary">
              Demo buchen (30 Min.)
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/quinta-whitepaper.pdf"
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
            >
              Technisches Whitepaper
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {BADGES.map((label) => (
              <span key={label} className="badge-quinta">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-ink-900 p-7 shadow-raised">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-on-dark-muted">
              Der Beweis
            </span>
            <label className="flex cursor-pointer items-center gap-2.5 text-on-dark">
              <input
                type="checkbox"
                role="switch"
                className="absolute h-0 w-0 opacity-0"
                checked={offline}
                onChange={(e) => setOffline(e.target.checked)}
              />
              <span className="switch-track" />
              <span className="text-xs text-on-dark-muted">Netzwerkkabel ziehen</span>
            </label>
          </div>

          <div className={ROW_CLASS}>
            <span className="text-on-dark-muted">Internet-Uplink</span>
            {offline ? (
              <span className="font-semibold text-red-500">● getrennt</span>
            ) : (
              <span className="text-on-dark">● verbunden</span>
            )}
          </div>
          <div className={ROW_CLASS}>
            <span className="text-on-dark-muted">Gateway</span>
            <span className="text-signal-green">ready</span>
          </div>
          <div className={ROW_CLASS}>
            <span className="text-on-dark-muted">GPU-Knoten</span>
            <span className="text-signal-green">3 / 3 online</span>
          </div>
          <div className={ROW_CLASS}>
            <span className="text-on-dark-muted">llama-3.3-70b</span>
            <span className="animate-q-pulse text-signal-green">▮ antwortet …</span>
          </div>

          <div className="mt-3 flex items-start gap-2 font-mono text-[12px] leading-relaxed text-signal-green">
            <span className="text-on-dark-muted">›</span>
            <span>
              <TerminalStream phrases={STREAM} />
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">
            {offline
              ? "Kein Uplink — und Ihre KI antwortet weiter. Sie läuft bei Ihnen, nicht in der Cloud."
              : "Ziehen Sie das Netzwerkkabel. Quinta antwortet weiter — alles läuft auf Ihrer Hardware."}
          </p>
        </div>
      </div>
    </section>
  );
}
