import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TcoCalculator } from "@/components/TcoCalculator";

export const metadata: Metadata = {
  title: "Kosten-Rechner: Cloud vs. On-Premise",
  description:
    "Interaktive Modellrechnung: Vergleichen Sie die Kosten von Cloud-KI (nutzungsbasiert) mit On-Premise-Betrieb (Hardware + Strom) und finden Sie den Break-even.",
  alternates: { canonical: "/rechner", languages: { de: "/rechner", en: "/en/rechner" } },
};

export default function RechnerPage() {
  return (
    <>
      <Navbar />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-10 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Rechner</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Cloud vs. On-Premise: die Modellrechnung
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Cloud-KI heißt mieten, On-Premise heißt besitzen. Verschieben Sie die Regler und sehen
              Sie, ab wann sich eigene Hardware rechnet — und wie hoch die Ersparnis über drei Jahre
              ausfällt.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-28">
          <div className="rounded-2xl border border-stone-200 bg-stone-0 p-6 shadow-card sm:p-10">
            <TcoCalculator lang="de" />
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
            Mehr zum Thema im Fachartikel{" "}
            <Link href="/insights/on-premise-vs-cloud-kosten" className="text-azul-600 underline underline-offset-2">
              „On-Premise vs. Cloud-KI: die ehrliche Kostenrechnung“
            </Link>
            .
          </p>
        </section>

        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Rechnen wir Ihren echten Fall gemeinsam durch.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In der Demo schauen wir auf Ihr Volumen, Ihre Hardware und Ihre Anwendungsfälle — mit
              belastbaren Zahlen statt Schätzern.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Demo buchen (30 Min.)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/vergleich" className="btn btn-inverse">
                Quinta im Vergleich
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
