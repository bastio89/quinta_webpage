import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="kontakt" className="bg-ink-900 pt-24 text-center sm:pt-28">
      <div className="container-quinta">
        <p className="mb-4 font-serif text-2xl italic text-copper-400">
          Quinta — portugiesisch für Landgut: der Ort, an dem Ihre Daten zuhause sind.
        </p>
        <h2 className="mx-auto max-w-[760px] text-display-md font-semibold text-on-dark sm:text-display-lg">
          Holen Sie Ihre KI nach Hause.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
            Demo buchen (30 Min.)
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/quinta-whitepaper.pdf"
            target="_blank"
            rel="noopener"
            className="btn btn-inverse"
          >
            Technisches Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}
