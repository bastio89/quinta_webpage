import { ArrowRight, Code2, ShieldCheck, Server, Lock } from "lucide-react";
import { LogoMark } from "./LogoMark";

const BADGES = [
  { icon: Server, label: "100 % On-Premise" },
  { icon: Lock, label: "OpenAI-kompatible API" },
  { icon: ShieldCheck, label: "DSGVO- & DSG-konform" },
  { icon: Code2, label: "Apache-2.0-Kern" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pb-24 pt-40 text-stone-50 sm:pb-28 sm:pt-48"
    >
      {/* Enclave-Motiv im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.10]"
      >
        <LogoMark accent={false} className="h-[62rem] w-[62rem] text-azul-400 blur-[2px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,71,196,0.35),transparent_70%)]"
      />

      <div className="container-quinta relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="animate-fade-up kicker rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-azul-200">
            <span className="h-1.5 w-1.5 animate-arch-pulse rounded-full bg-signal" />
            Souveräne KI-Plattform von twenty5ai
          </div>

          <h1
            className="mt-7 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-6xl"
            style={{ animation: "fade-up 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Ihre eigene, private
            <br />
            <span className="text-azul-300">KI-Zentrale.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-300 sm:text-xl"
            style={{ animation: "fade-up 0.7s 0.12s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Quinta macht aus der Hardware in Ihrem Haus einen privaten KI-Dienst —
            wie OpenAI, nur dass <strong className="font-medium text-stone-100">kein einziges Byte
            Ihr Unternehmen verlässt.</strong> OpenAI-kompatibel, DSGVO- und DSG-konform, mit offenem Kern.
          </p>

          <div
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
            style={{ animation: "fade-up 0.7s 0.18s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <a href="#kontakt" className="btn btn-primary px-6 py-3.5 text-base">
              Demo anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#architektur" className="btn btn-ghost px-6 py-3.5 text-base">
              So funktioniert&apos;s
            </a>
          </div>

          <div
            className="mt-14 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8"
            style={{ animation: "fade-up 0.7s 0.24s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-ink-300">
                <Icon className="h-4 w-4 text-azul-300" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
