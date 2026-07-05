import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComplianceCheck } from "@/components/ComplianceCheck";

export const metadata: Metadata = {
  title: "Compliance-Self-Check: EU AI Act, NIS2 & DSGVO",
  description:
    "In fünf Fragen einordnen, welche KI-Regulatorik Sie betrifft — EU AI Act, NIS2, DSGVO und Datensouveränität. Kostenlos, ohne Anmeldung, mit sofortiger Auswertung.",
  alternates: { canonical: "/check", languages: { de: "/check", en: "/en/check" } },
};

export default function CheckPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container-quinta pt-16 pb-10 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Self-Check</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Welche KI-Regulatorik betrifft Sie?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Fünf Fragen, sofortige Einordnung: EU AI Act, NIS2, DSGVO und Datensouveränität. Keine
              Anmeldung, keine Speicherung — die Auswertung passiert allein in Ihrem Browser.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-28">
          <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-stone-0 p-6 shadow-card sm:p-9">
            <ComplianceCheck lang="de" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
            Tiefer einsteigen? Alle Themen ausführlich in den{" "}
            <Link href="/insights" className="text-azul-600 underline underline-offset-2">
              Insights
            </Link>{" "}
            — oder Begriffe klären im{" "}
            <Link href="/glossar" className="text-azul-600 underline underline-offset-2">
              Glossar
            </Link>
            .
          </p>
        </section>

        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Souveränität liefert die Nachweise, die eine Prüfung verlangt.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In der Demo zeigen wir, wie On-Premise-Betrieb Zugriffe, Prompts und Modelle
              lückenlos protokolliert — automatisch.
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
