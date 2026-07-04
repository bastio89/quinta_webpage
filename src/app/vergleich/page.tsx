import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Boxes, Gauge } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Quinta vs. Ollama, vLLM und LocalAI",
  description:
    "Ollama, vLLM und LocalAI führen Modelle aus. Quinta betreibt die Plattform darum herum — mit Gateway, Multi-Node-Skalierung, RBAC, Audit-Trail und Dashboard. Der ehrliche Vergleich.",
  alternates: { canonical: "/vergleich" },
};

const WHY = [
  {
    icon: Layers,
    title: "Modell-Runner vs. Betriebsschicht",
    text: "Ollama, vLLM und LocalAI lösen eine Aufgabe hervorragend: ein Modell auf einer Maschine ausführen. Quinta löst die andere — den Betrieb: Zugriff, Skalierung, Governance und Nachvollziehbarkeit für die ganze Organisation.",
  },
  {
    icon: Boxes,
    title: "Quinta baut auf ihnen auf",
    text: "Quinta ersetzt vLLM oder Ollama nicht — es betreibt sie. Beide sind als Inferenz-Motoren eingebaut. Sie behalten die Leistung dieser Engines und bekommen die Enterprise-Schicht obendrauf.",
  },
  {
    icon: Gauge,
    title: "Der Unterschied zeigt sich unter Last",
    text: "Ein blanker Inferenz-Server nimmt jede Anfrage an, bis er kippt. Das Quinta-Gateway dosiert Anfragen (bounded admission) und fängt Fehler ab, bevor Nutzer sie sehen — unter Extremlast messbar 18× höhere Erfolgsquote.",
  },
];

export default function VergleichPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Intro */}
        <section className="container-quinta pt-16 pb-20 sm:pt-20">
          <div className="max-w-3xl">
            <div className="kicker mb-3.5">Vergleich</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Quinta vs. Ollama, vLLM und LocalAI
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              Diese drei Werkzeuge werden oft in einem Atemzug mit Quinta genannt — dabei lösen sie
              eine andere Aufgabe. Sie <strong className="font-medium text-ink-900">führen ein
              Modell aus</strong>. Quinta <strong className="font-medium text-ink-900">betreibt
              die Plattform</strong> darum herum. Der ehrliche Vergleich, Zeile für Zeile.
            </p>
          </div>
        </section>

        {/* Reframe */}
        <section className="container-quinta pb-16">
          <div className="rounded-lg border border-stone-200 bg-stone-100 p-8 sm:p-10">
            <p className="max-w-3xl text-xl leading-relaxed text-ink-800 sm:text-2xl">
              Die Frage ist selten „welcher Inferenz-Server?" — sondern „wer verwaltet Zugriff,
              Skalierung, Compliance und Audit, wenn aus einem Modell ein Dienst für das ganze
              Unternehmen wird?"
            </p>
          </div>
        </section>

        {/* Tabelle */}
        <section className="container-quinta pb-8">
          <ComparisonTable />
          <p className="mx-auto mt-5 max-w-5xl text-xs leading-relaxed text-ink-500">
            <span className="font-medium text-ink-700">✓ integriert · — nicht integraler Bestandteil.</span>{" "}
            Der Vergleich betrifft die eingebauten Plattform-Funktionen, nicht die Inferenz-Qualität
            der Engines — die ist bei vLLM und Ollama exzellent, weshalb Quinta sie einbindet.
            Angaben zu Ollama, vLLM und LocalAI beschreiben den Standardumfang der jeweiligen
            Projekte und ersetzen keine eigene Prüfung.
          </p>
        </section>

        {/* Warum der Unterschied zählt */}
        <section className="container-quinta py-24 sm:py-28">
          <div className="mb-12 max-w-[640px]">
            <div className="kicker mb-3.5">Warum das zählt</div>
            <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
              Drei Unterschiede, die im Betrieb entscheiden.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WHY.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-surface p-7">
                <Icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
                <h3 className="mt-4 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benchmark-Moment (dunkel) */}
        <section className="bg-ink-900 py-24 lg:py-28">
          <div className="container-quinta">
            <div className="mb-14 max-w-[720px]">
              <div className="kicker kicker--on-dark mb-3.5">Der Beweis unter Last</div>
              <h2 className="text-display-sm font-semibold text-on-dark sm:text-display-md">
                Gleiche Engine. Ein anderes Verhalten am Limit.
              </h2>
            </div>
            <div className="grid gap-12 sm:grid-cols-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-display-lg font-semibold tabular-nums text-azul-400">18×</span>
                <span className="text-sm font-semibold text-on-dark">
                  höhere Erfolgsquote unter Extremlast
                </span>
                <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                  Quinta-Gateway gegen vLLM pur — dieselbe Inferenz, aber dosierte Anfragen statt
                  Überlastung.
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-display-lg font-semibold tabular-nums text-on-dark">~56 ms</span>
                <span className="text-sm font-semibold text-on-dark">zusätzliche Erst-Latenz</span>
                <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                  Reiner Netzwerkweg durch die Plattform-Schicht — die Token-Rate pro Nutzer bleibt
                  identisch.
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-display-lg font-semibold tabular-nums text-on-dark">512</span>
                <span className="text-sm font-semibold text-on-dark">
                  gleichzeitige Anfragen im Test
                </span>
                <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                  31.200 Requests insgesamt, gemessen auf NVIDIA DGX Spark (128 GB).
                </span>
              </div>
            </div>
            <p className="mt-14 max-w-3xl font-serif text-xl italic text-copper-400">
              Die anderen führen ein Modell aus. Quinta sorgt dafür, dass es unter Last ein Dienst
              bleibt.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container-quinta py-24 text-center sm:py-28">
          <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-ink-900 sm:text-display-md">
            Sehen Sie den Unterschied auf Ihrer eigenen Hardware.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-700">
            In der Demo laufen Ihre Modelle über dieselben Engines — mit der Betriebsschicht
            darum herum. 30 Minuten, auf Wunsch mit dem Netzwerkkabel-Beweis.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
              Demo buchen (30 Min.)
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/" className="btn btn-secondary">
              Zurück zur Übersicht
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
