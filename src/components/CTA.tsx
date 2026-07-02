import { ArrowRight, Mail } from "lucide-react";
import { LogoMark } from "./LogoMark";

export function CTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink-950 py-24 text-stone-50 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 opacity-[0.08]"
      >
        <LogoMark accent={false} className="h-96 w-96 text-azul-400" />
      </div>

      <div className="container-quinta relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Ihre Daten. Ihre Hardware. Ihre KI.
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-ink-300">
            Vereinbaren Sie eine unverbindliche Live-Demo — wir richten Quinta gemeinsam
            mit Ihnen auf Ihrer eigenen Infrastruktur ein.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="mailto:hello@twenty5ai.com" className="btn btn-primary px-6 py-3.5 text-base">
              Demo anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:hello@twenty5ai.com" className="btn btn-ghost px-6 py-3.5 text-base">
              <Mail className="h-4 w-4" />
              hello@twenty5ai.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
