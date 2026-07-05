import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AiActCountdown } from "@/components/AiActCountdown";
import { JsonLd } from "@/components/JsonLd";
import { articleLd } from "@/lib/jsonLd";
import { INSIGHTS, formatInsightDate } from "@/lib/insights";

const PATH = "/insights/eu-ai-act-frist-2026";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: PATH },
};

const CHECKLIST = [
  "Inventar erstellen: Welche KI-Systeme sind im Einsatz, welche fallen in den Hochrisiko-Bereich?",
  "Datenflüsse prüfen: Welche Daten verlassen bei Cloud-KI die eigene Rechtshoheit?",
  "Nachvollziehbarkeit sicherstellen: Gibt es einen lückenlosen Audit-Trail je Anfrage?",
  "Governance festlegen: Rollen, Rechte und menschliche Kontrolle dokumentieren.",
  "Modell-Herkunft dokumentieren: Welche Modelle in welcher Version, mit welcher Freigabe?",
];

export default function EuAiActArticle() {
  return (
    <>
      <JsonLd
        data={articleLd({
          title: meta.title,
          description: meta.excerpt,
          path: PATH,
          datePublished: meta.date,
        })}
      />
      <Navbar />
      <main>
        {/* Header */}
        <section className="container-quinta pt-16 pb-12 sm:pt-20">
          <div className="max-w-2xl">
            <Link
              href="/insights"
              className="flex w-fit items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Insights
            </Link>
            <div className="kicker mt-6">Compliance</div>
            <h1 className="mt-3.5 text-display-md font-semibold text-ink-900 sm:text-display-lg">
              {meta.title}
            </h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-400">
              twenty5ai · {formatInsightDate(meta.date)} · {meta.readingMinutes} Min. Lesezeit
            </p>
          </div>
        </section>

        {/* Countdown */}
        <section className="container-quinta pb-14">
          <div className="max-w-2xl rounded-lg border border-stone-200 bg-stone-100 px-6 py-8 sm:px-10">
            <AiActCountdown />
          </div>
        </section>

        {/* Lead + Sektionen */}
        <section className="container-quinta pb-16">
          <div className="flex max-w-2xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p className="text-lg text-ink-800">
                Der EU AI Act wird in Stufen wirksam. Der 2. August 2026 markiert die Stufe, die für
                die meisten Unternehmen zählt: Ab diesem Datum wird eine zentrale Tranche der
                Verordnung anwendbar — darunter die Pflichten für viele Hochrisiko-KI-Systeme sowie
                der Governance- und Sanktionsrahmen.
              </p>
              <p>
                Wer KI produktiv einsetzt, sollte bis dahin nicht nur wissen, <em className="not-italic font-medium text-ink-900">welche</em>{" "}
                Systeme im Haus laufen, sondern auch nachweisen können, <em className="not-italic font-medium text-ink-900">wie</em>{" "}
                sie kontrolliert, protokolliert und verwaltet werden. Genau hier trennt sich
                nachweisbare Compliance von guten Absichten.
              </p>
            </div>

            <div>
              <h2 className="text-display-sm font-semibold text-ink-900">
                Was am 2. August 2026 anwendbar wird
              </h2>
              <p className="mt-4 text-md leading-relaxed text-ink-700">
                Die Verordnung ist am 1. August 2024 in Kraft getreten und gilt gestaffelt. Zum 2.
                August 2026 werden insbesondere relevant:
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {[
                  "Anforderungen an viele Hochrisiko-KI-Systeme (u. a. nach Anhang III der Verordnung)",
                  "Transparenz-, Dokumentations- und Aufsichtspflichten für Betreiber und Anbieter",
                  "Der Sanktionsrahmen — bei Verstößen bis zu 15 Mio. € oder 3 % des weltweiten Jahresumsatzes",
                  "Nationale Marktüberwachung und Zuständigkeiten in den Mitgliedsstaaten",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
                    <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-display-sm font-semibold text-ink-900">
                Warum Cloud-KI hier zum Problem wird
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
                <p>
                  Die Verordnung verlangt Nachvollziehbarkeit: Wer hat wann welches Modell in welcher
                  Version genutzt, unter welcher Aufsicht? Bei öffentlichen Cloud-KI-Diensten haben
                  Sie in genau diese Fragen oft keinen Einblick — die Infrastruktur gehört einem
                  Dritten, der Audit-Trail endet an dessen Systemgrenze.
                </p>
                <p>
                  Hinzu kommt die Datenhoheit: Besonders schützenswerte Daten sollen den
                  EU-Rechtsraum nicht verlassen. Ein Anbieter außerhalb dieser Rechtsordnung kann
                  nicht garantieren, dass Ihre Daten dort ausschließlich Ihre bleiben.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-copper-400 pl-6">
              <p className="text-xl font-medium leading-relaxed text-ink-800">
                Der Unterschied zwischen einer Demo und einem System, das eine Prüfung besteht, ist
                nicht das Modell. Es ist die Betriebsebene darum herum — Zugriff, Protokoll,
                Kontrolle.
              </p>
            </div>

            <div>
              <h2 className="text-display-sm font-semibold text-ink-900">
                Was Souveränität konkret liefert
              </h2>
              <p className="mt-4 text-md leading-relaxed text-ink-700">
                On-Premise-Betrieb ist kein Selbstzweck — er liefert die Nachweise, die eine Prüfung
                verlangt, weil alles im eigenen Haus bleibt:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Lückenloser Audit-Trail", d: "Jede Inferenz-Anfrage nachvollziehbar — die Grundlage jeder Dokumentation." },
                  { t: "Modell-Herkunft & Versionen", d: "Welches Modell, welche Version, welche Freigabe — jederzeit belegbar." },
                  { t: "Rollen & Rechte (RBAC)", d: "Zugriff serverseitig durchgesetzt, nicht nur in der Oberfläche." },
                  { t: "Datenresidenz", d: "Daten verlassen Ihre Rechtshoheit nie — kein Drittstaaten-Risiko." },
                ].map((c) => (
                  <div key={c.t} className="card-surface p-6">
                    <h3 className="text-md font-semibold text-ink-900">{c.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-display-sm font-semibold text-ink-900">
                Ihre Checkliste bis zur Frist
              </h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {CHECKLIST.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
                    <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="rounded-md border border-stone-200 bg-stone-100 p-5 text-sm leading-relaxed text-ink-500">
              Hinweis: Dieser Beitrag gibt den Stand allgemein verständlich wieder und ist keine
              Rechtsberatung. Konkrete Fristen, Einstufungen und Pflichten hängen vom Einzelfall ab
              und sollten mit fachkundiger Beratung geprüft werden.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Compliance, die auf Architektur beruht — nicht auf Papier.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In der Demo zeigen wir, wie Audit-Trail, Modell-Herkunft und Zugriffskontrolle auf
              Ihrer eigenen Hardware zusammenspielen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Demo buchen (30 Min.)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/vergleich" className="btn btn-inverse">
                Quinta vs. Ollama, vLLM, LocalAI
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
