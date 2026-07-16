import { DemoForm } from "@/components/DemoForm";

export function CTA() {
  return (
    <section id="kontakt" className="bg-ink-900 py-24 sm:py-28">
      <div className="container-quinta">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 font-serif text-2xl italic text-copper-400">
              Quinta — portugiesisch für Landgut: der Ort, an dem Ihre Daten zuhause sind.
            </p>
            <h2 className="text-display-md font-semibold text-on-dark sm:text-display-lg">
              Holen Sie Ihre KI nach Hause.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-on-dark-muted">
              In 30 Minuten zeigen wir Quinta an Ihrem Fall — auf Ihrer Hardware, mit Ihren Daten,
              mit belastbaren Zahlen statt Marketing.
            </p>
            <a
              href="/quinta-whitepaper.pdf"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-400 hover:text-azul-300"
            >
              Zuerst das technische Whitepaper lesen →
            </a>
          </div>
          <DemoForm lang="de" />
        </div>
      </div>
    </section>
  );
}
