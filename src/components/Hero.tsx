import { ArrowRight, Code2, ShieldCheck, Server, Lock } from "lucide-react";
import { LogoMark } from "./LogoMark";

const BADGES = [
  { icon: Server, label: "100 % On-Premise" },
  { icon: Lock, label: "OpenAI-kompatible API" },
  { icon: ShieldCheck, label: "DSGVO-konform" },
  { icon: Code2, label: "Apache-2.0-Kern" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pb-24 pt-40 text-mist-50 sm:pb-28 sm:pt-48"
    >
      {/* Enclave-Motiv im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.10]"
      >
        <LogoMark accent={false} className="h-[62rem] w-[62rem] text-sovereign-400 blur-[2px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_50%_at_50%_0%,rgba(31,92,77,0.35),transparent_70%)]"
      />

      <div className="container-quinta relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="animate-fade-up kicker rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sovereign-200">
            <span className="h-1.5 w-1.5 animate-arch-pulse rounded-full bg-gold-400" />
            Souveräne KI-Plattform von twenty5ai
          </div>

          <h1
            className="mt-7 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-6xl"
            style={{ animation: "fade-up 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Ihre eigene, private
            <br />
            <span className="text-sovereign-300">KI-Zentrale.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-mist-300 sm:text-xl"
            style={{ animation: "fade-up 0.7s 0.12s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Quinta macht aus der Hardware in Ihrem Haus einen privaten KI-Dienst —
            wie OpenAI, nur dass <strong className="font-medium text-mist-100">kein einziges Byte
            Ihr Unternehmen verlässt.</strong> OpenAI-kompatibel, DSGVO-konform, mit offenem Kern.
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
            className="mt-14 w-full max-w-xl"
            style={{ animation: "fade-up 0.7s 0.24s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 text-left shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
                <span className="ml-3 font-mono text-xs text-mist-500">quinta-daemon · lokaler Rechner</span>
              </div>
              <div className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
                <p className="text-mist-500"># einmalig auf jedem Rechner mit GPU installieren</p>
                <p className="text-mist-100">
                  <span className="text-sovereign-300">$</span> curl -fsSL https://get.quinta.twenty5ai.com/install.sh | bash
                </p>
                <p className="mt-2 text-mist-500"># fertig — der Daemon meldet die Maschine automatisch an</p>
                <p className="text-gold-300">✓ Node „workstation-01“ verbunden · Ollama erkannt · bereit</p>
              </div>
            </div>
          </div>

          <div
            className="mt-14 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8"
            style={{ animation: "fade-up 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-mist-400">
                <Icon className="h-4 w-4 text-sovereign-300" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
