import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCheck, Building2, FileCheck, Network } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqPageLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Quinta im Vergleich zu vLLM, LocalAI und anderen Inferenz-Engines",
  description:
    "vLLM, LocalAI und andere Inferenz-Engines führen ein Modell aus. Quinta ist die Betriebsschicht darum herum — Zugriffskontrolle, Multi-GPU-Orchestrierung, Governance und lückenloser Audit-Trail. Der ehrliche Vergleich.",
  alternates: { canonical: "/vergleich", languages: { de: "/vergleich", en: "/en/vergleich" } },
};

const OPS_QUESTIONS = [
  {
    icon: UserCheck,
    q: "Wer hat wann zugegriffen?",
    a: "Identität, rollenbasierte Zugriffskontrolle (RBAC) und Enterprise-Login über Passwort, 2-Faktor (TOTP), Passkeys und SSO/SAML (Entra ID, Okta u. a.).",
  },
  {
    icon: Building2,
    q: "Unter welcher Richtlinie?",
    a: "Mandantentrennung für mehrere Organisationen — verschiedene Teams und Kunden sauber voneinander getrennt, mit Rechten je Einheit.",
  },
  {
    icon: FileCheck,
    q: "Mit welchem Prüfpfad?",
    a: "Verbrauchs-Tracking je Einheit plus eine lückenlose, revisionssichere Audit-Ebene — die Nachweise, die Ihre Compliance-Teams für GDPR, EU AI Act und NIS2 brauchen.",
  },
  {
    icon: Network,
    q: "Über wie viel Infrastruktur?",
    a: "Multi-Modell- und Multi-GPU-Orchestrierung mit Lastverteilung. Jeder weitere Rechner mit dem Daemon registriert sich selbst — Skalierung ohne manuelle Bastelei.",
  },
];

const FAQ = [
  {
    q: "Ist Quinta ein Ersatz für vLLM oder einen Modell-Runner?",
    a: "Nein. Quinta nutzt Inferenz-Engines wie vLLM und leichtgewichtige Modell-Runner im Hintergrund und legt die Betriebsschicht darum herum — Zugriffskontrolle, Orchestrierung, Governance und Audit —, die ein Unternehmen in Produktion braucht.",
  },
  {
    q: "Was ist der Unterschied zwischen einer Inferenz-Engine und einer Betriebsschicht?",
    a: "Eine Inferenz-Engine führt ein Modell effizient aus. Eine Betriebsschicht macht dieses Modell in einer Organisation nutzbar — durch Identität, Zugriffskontrolle, Observability, Mandantenfähigkeit, Governance und Orchestrierung. Quinta ist eine Betriebsschicht.",
  },
  {
    q: "Läuft Quinta On-Premise?",
    a: "Ja. Quinta ist so gebaut, dass es vollständig auf Ihrer eigenen Infrastruktur läuft — kein Byte verlässt das Haus. Das macht es ideal für regulierte Branchen mit strengen Anforderungen an Datenresidenz und Datensouveränität.",
  },
  {
    q: "Ist Quinta quelloffen?",
    a: "Die Inferenz-Engine basiert auf bewährter, quelloffener Technologie (Apache 2.0). Die Verwaltungsebene — Gateway, Daemon, Dashboard und Registry — ist eine Eigenentwicklung von twenty5ai.",
  },
  {
    q: "Für wen ist Quinta gedacht?",
    a: "Regulierte europäische Unternehmen in Finanzen, Gesundheitswesen, Recht, öffentlicher Hand, Industrie und ähnlichen Sektoren — überall dort, wo der Betrieb von KI auf kontrollierter, überprüfbarer On-Premise-Infrastruktur eine zwingende Anforderung ist, keine bloße Präferenz.",
  },
  {
    q: "Warum kann ich nicht einfach eine Inferenz-Engine in Produktion nutzen?",
    a: "Sie können ein Modell damit betreiben — aber es fehlen Zugriffskontrolle, Mandantentrennung, Nutzungsverfolgung, Governance und ein Prüfpfad. Für ein reguliertes Unternehmen sind das genau die Funktionen, nach denen eine Aufsichtsbehörde fragt.",
  },
];

export default function VergleichPage() {
  return (
    <>
      <JsonLd data={faqPageLd(FAQ)} />
      <Navbar />
      <main id="inhalt" tabIndex={-1}>
        {/* Header */}
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-3xl">
            <div className="kicker mb-3.5">Vergleich</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Quinta im Vergleich zu vLLM, LocalAI und anderen Inferenz-Engines
            </h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-400">
              twenty5ai · Sovereign-AI · Juli 2026
            </p>
          </div>
        </section>

        {/* Kurze Antwort */}
        <section className="container-quinta pb-16">
          <div className="max-w-3xl rounded-lg border border-stone-200 bg-stone-100 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
              Kurze Antwort
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-800">
              Werkzeuge wie vLLM, LocalAI und andere Modell-Runner sind hervorragende
              Inferenz-Engines. Sie führen ein Modell aus. <strong className="font-semibold text-ink-950">Quinta ist die
              Betriebsschicht</strong> um das Modell herum — das, was ein reguliertes Unternehmen
              braucht, um KI in Produktion zu betreiben: Zugriffskontrolle, Multi-Modell- und
              Multi-GPU-Orchestrierung, Governance und ein lückenloser Prüfpfad. Quinta nutzt solche
              Inferenz-Engines im Hintergrund. Sie beantworten die Frage „Läuft das Modell?“. Quinta
              beantwortet die Frage: <em className="not-italic font-medium text-ink-950">Wer darf es
              nutzen — unter welcher Richtlinie, mit welchem Prüfpfad und auf wie vielen GPUs?</em>
            </p>
          </div>
        </section>

        {/* Ein Modell auszuführen ist der einfache Teil */}
        <section className="container-quinta pb-16">
          <div className="max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">
              Ein Modell auszuführen ist der einfache Teil.
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p>
                Wer schon einmal ein Modell mit einem Modell-Runner geladen oder vLLM gestartet hat,
                weiß, wie weit offene Werkzeuge inzwischen sind. In wenigen Minuten steht ein
                OpenAI-kompatibler Endpunkt, der ein leistungsfähiges offenes Modell auf Ihrer
                eigenen Hardware bereitstellt. Für den Prototyp eines Entwicklers ist das oft schon
                alles.
              </p>
              <p>
                Produktion in einer regulierten Organisation ist ein anderes Problem. Das Modell ist
                der einfache Teil. Der schwierige Teil ist das Drumherum: Wer darf es aufrufen? Wie
                wird der Zugriff über Teams hinweg kontrolliert? Wie wird jede Anfrage revisionssicher
                für die Compliance protokolliert? Wie wird die Last auf die GPUs verteilt — und das
                ganze System unter EU-Regulierung verwaltet? Inferenz-Engines wurden nicht gebaut, um
                diese Fragen zu beantworten. Das war nie ihre Aufgabe.
              </p>
              <p>
                Das ist der Unterschied, den die meisten Vergleiche übersehen. Es ist keine Frage,
                welches Werkzeug besser ist — sondern welche Ebene des Stacks Sie betrachten.
              </p>
            </div>
          </div>
        </section>

        {/* Inferenz-Engine vs. Betriebsschicht */}
        <section className="container-quinta pb-16">
          <div className="max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">
              Inferenz-Engine vs. Betriebsschicht: Was ist der Unterschied?
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p>
                Eine Inferenz-Engine nimmt ein Modell und stellt es effizient bereit. vLLM, LocalAI und
                vergleichbare Modell-Runner sind Inferenz-Engines: Sie optimieren den Durchsatz,
                verwalten den GPU-Speicher und stellen eine API bereit. Das machen sie gut.
              </p>
              <p>
                Eine Betriebsschicht sitzt darüber und macht KI in einer Organisation nutzbar. Sie
                kümmert sich um Zugriffskontrolle, Identität, Observability, Mandantenfähigkeit,
                Governance und die Orchestrierung über mehrere Modelle und Maschinen hinweg. Quinta
                ist eine solche Betriebsschicht — sie läuft auf den Inferenz-Engines, statt sie zu
                ersetzen.
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-2xl border-l-2 border-copper-400 pl-6">
            <p className="text-xl font-medium leading-relaxed text-ink-800">
              Eine Inferenz-Engine ist wie eine Datenbank-Engine. Eine Betriebsschicht ist alles, was
              aus einer Datenbank ein System macht, auf dem eine Bank laufen kann — die
              Zugriffskontrollen, die Audit-Logs, die Benutzerverwaltung, die Compliance-Berichte.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Eine nackte Datenbank-Engine würde im regulierten Umfeld niemand in Betrieb nehmen. Für
              KI gilt dasselbe.
            </p>
          </div>
        </section>

        {/* Funktionsvergleich */}
        <section className="container-quinta pb-8">
          <div className="mx-auto mb-10 max-w-5xl">
            <div className="kicker mb-3.5">Funktionsvergleich</div>
            <h2 className="max-w-2xl text-display-sm font-semibold text-ink-900">
              Quinta vs. vLLM, LocalAI und andere Inferenz-Engines
            </h2>
            <p className="mt-4 max-w-2xl text-md leading-relaxed text-ink-700">
              Es geht nicht darum, dass die Inferenz-Engines unzureichend wären — sie sind exzellent
              in dem, was sie tun. Der Punkt ist: Der Betrieb von KI in regulierter Produktion
              verlangt Funktionen oberhalb der Inferenz-Ebene.
            </p>
          </div>
          <ComparisonTable />
          <div className="mx-auto mt-6 max-w-5xl">
            <p className="max-w-3xl text-md leading-relaxed text-ink-700">
              Diese Werkzeuge sind allesamt sehr stark; vLLM liefert insbesondere exzellenten
              Multi-GPU-Durchsatz. Was keines von ihnen standardmäßig mitbringt, sind die
              Zugriffskontrolle, die Governance und der mandantenfähige Betrieb, die ein reguliertes
              Unternehmen zwingend braucht, bevor KI überhaupt in die Nähe von Produktionsdaten
              kommt.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-ink-500">
              ✓ integriert · — nicht integraler Bestandteil. Der Vergleich betrifft die eingebauten
              Plattform-Funktionen, nicht die Inferenz-Qualität der Engines. Angaben zu vLLM, LocalAI
              und vergleichbaren Modell-Runnern beschreiben den Standardumfang der jeweiligen
              Projekte und ersetzen keine eigene Prüfung.
            </p>
          </div>
        </section>

        {/* Die Fragen, die eine Betriebsschicht beantwortet */}
        <section className="container-quinta py-24 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <div className="kicker mb-3.5">Die vier Betriebsfragen</div>
            <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
              Was eine Betriebsschicht beantwortet — oft gegenüber einer Aufsichtsbehörde.
            </h2>
            <p className="mt-4 text-md leading-relaxed text-ink-700">
              Eine Inferenz-Engine beantwortet eine Frage: Läuft das Modell? Eine Betriebsschicht
              beantwortet die Fragen, die ein reguliertes Unternehmen tatsächlich beantworten muss.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {OPS_QUESTIONS.map(({ icon: Icon, q, a }) => (
              <div key={q} className="card-surface p-7">
                <Icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
                <h3 className="mt-4 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">
                  {q}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-md leading-relaxed text-ink-700">
            Das sind keine Funktionen, die man später anflanscht. Sie sind der Unterschied zwischen
            einer Demo und einem System, das Sie in einem Audit verteidigen können.
          </p>
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
          </div>
        </section>

        {/* Warum das für regulierte Branchen zählt */}
        <section className="container-quinta py-24 sm:py-28">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Regulierte Branchen</div>
            <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
              Warum die Betriebsschicht hier nicht optional ist.
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p>
                Für Finanzdienstleister, Gesundheitswesen, Rechtsbereich, öffentliche Hand und
                Industrie ist die Betriebsschicht Pflicht. Das sind die Sektoren, die sich bei
                öffentlichen KI-Diensten zurückgehalten haben — eben weil sie die Kontrolle über ihre
                Daten nicht abgeben konnten.
              </p>
              <p>
                Für sie liegt der Wert nicht im Zugriff auf ein Modell. Auf ein Modell kann jedes
                Unternehmen zugreifen. Der Wert liegt darin, KI auf der eigenen Infrastruktur, unter
                der eigenen Rechtsprechung und mit den Zugriffskontrollen und Prüfpfaden zu betreiben,
                die ihre Regulierungsbehörden erwarten. Genau dafür ist Quinta gebaut.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[860px] px-8 pb-24">
          <div className="mb-10">
            <div className="kicker mb-3.5">Häufige Fragen</div>
            <h2 className="text-display-sm font-semibold text-ink-900">Zum Vergleich, kurz erklärt.</h2>
          </div>
          <FaqAccordion items={FAQ} />
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <p className="mb-4 font-serif text-2xl italic text-copper-400">
              Die anderen führen ein Modell aus. Quinta sorgt dafür, dass es ein Dienst bleibt.
            </p>
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Sehen Sie den Unterschied auf Ihrer eigenen Hardware.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Demo buchen (30 Min.)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/" className="btn btn-inverse">
                Zurück zur Übersicht
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
