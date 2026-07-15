import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BenchmarkVisual } from "@/components/BenchmarkVisual";
import { CountUp } from "@/components/motion/CountUp";
import { GrowBar } from "@/components/motion/GrowBar";

export const metadata: Metadata = {
  title: "Benchmark: Quinta-Gateway vs. vLLM pur",
  description:
    "Gleiche Engine, 18× höhere Erfolgsquote unter Extremlast: 31.200 Requests, 512 gleichzeitige Anfragen, gemessen auf NVIDIA DGX Spark (128 GB). Die Zahlen, der Aufbau, die Einordnung.",
  alternates: { canonical: "/benchmark", languages: { de: "/benchmark", en: "/en/benchmark" } },
};

const FACTS = [
  { k: "Hardware", v: "NVIDIA DGX Spark, 128 GB" },
  { k: "Umfang", v: "31.200 Requests, bis 512 gleichzeitige Anfragen" },
  { k: "Vergleich", v: "Quinta-Gateway vs. vLLM pur — identische Engine" },
  { k: "Konstante", v: "Identische Token-Rate pro Nutzer in beiden Läufen" },
  { k: "Kennzahl", v: "Erfolgsquote: Anteil der Anfragen mit gültiger Antwort" },
  { k: "Mehrkosten", v: "~56 ms zusätzliche Erst-Latenz durch die Plattform-Schicht" },
];

export default function BenchmarkPage() {
  return (
    <>
      <Navbar />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-12 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Benchmark</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Gleiche Engine. 18× mehr Erfolg unter Last.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Wir haben denselben Inferenz-Server zweimal unter Extremlast gesetzt — einmal blank,
              einmal hinter dem Quinta-Gateway. Der Unterschied liegt nicht im Modell, sondern in
              der Betriebsschicht. Hier sind die Zahlen, der Aufbau und die ehrliche Einordnung.
            </p>
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="container-quinta pb-14">
          <div className="grid gap-10 rounded-2xl border border-stone-200 bg-stone-0 p-8 shadow-card sm:grid-cols-3 sm:p-10">
            <div className="flex flex-col gap-1.5">
              <CountUp value={18} suffix="×" className="text-display-xl font-semibold tabular-nums text-azul-600" />
              <span className="text-sm font-semibold text-ink-900">höhere Erfolgsquote</span>
              <span className="text-xs leading-relaxed text-ink-500">
                unter Extremlast, gegenüber vLLM pur — bei identischer Engine.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <CountUp prefix="~" value={56} suffix=" ms" className="text-display-xl font-semibold tabular-nums text-ink-900" />
              <span className="text-sm font-semibold text-ink-900">zusätzliche Erst-Latenz</span>
              <span className="text-xs leading-relaxed text-ink-500">
                der einzige Preis der Plattform-Schicht — die Token-Rate pro Nutzer bleibt gleich.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <CountUp value={512} className="text-display-xl font-semibold tabular-nums text-ink-900" />
              <span className="text-sm font-semibold text-ink-900">gleichzeitige Anfragen</span>
              <span className="text-xs leading-relaxed text-ink-500">
                31.200 Requests insgesamt, gemessen auf NVIDIA DGX Spark (128 GB).
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[760px]">
            <div className="flex flex-col gap-3.5">
              <div>
                <div className="mb-1.5 flex justify-between text-xs text-ink-700">
                  <span>Erfolgreiche Antworten — mit Quinta-Gateway</span>
                  <span className="font-mono text-green-600">18×</span>
                </div>
                <div className="h-2.5 rounded-full bg-stone-200">
                  <GrowBar width="100%" className="bg-gradient-to-r from-azul-600 to-azul-400" />
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex justify-between text-xs text-ink-500">
                  <span>vLLM pur (blanker Inferenz-Server)</span>
                  <span className="font-mono">1×</span>
                </div>
                <div className="h-2.5 rounded-full bg-stone-200">
                  <GrowBar width="5.6%" className="bg-ink-400" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-400">
              Relative Darstellung der Erfolgsquoten (Quinta-Gateway = 18×, vLLM pur = 1×).
            </p>
          </div>
        </section>

        {/* Prinzip-Schema */}
        <section className="container-quinta pb-16">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">
              Warum kippt der blanke Server?
            </h2>
            <p className="mt-4 text-md leading-relaxed text-ink-700">
              Ein Inferenz-Server ohne Zulassungssteuerung nimmt jede Anfrage sofort an — bis er
              sich unter zu vielen parallelen Anfragen selbst blockiert. Das Quinta-Gateway dosiert
              den Zufluss (bounded admission): Es lässt nur so viel gleichzeitige Arbeit zu, wie die
              Hardware stabil bewältigt. Der Rest wartet geordnet, statt in Timeouts zu kippen.
            </p>
          </div>
          <BenchmarkVisual lang="de" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
            Tiefer einsteigen:{" "}
            <Link href="/insights/bounded-admission-last" className="text-azul-600 underline underline-offset-2">
              Bounded Admission: warum ein Inferenz-Server unter Last kippt
            </Link>{" "}
            — oder kompakt im Glossar:{" "}
            <Link href="/glossar/bounded-admission" className="text-azul-600 underline underline-offset-2">
              Bounded Admission
            </Link>
            ,{" "}
            <Link href="/glossar/durchsatz" className="text-azul-600 underline underline-offset-2">
              Durchsatz
            </Link>
            .
          </p>
        </section>

        {/* Messaufbau */}
        <section className="container-quinta pb-16">
          <div className="max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">So wurde gemessen</h2>
            <p className="mt-4 text-md leading-relaxed text-ink-700">
              Beide Läufe nutzten dieselbe Inferenz-Engine auf derselben Maschine — der einzige
              Unterschied war die Betriebsschicht davor:
            </p>
          </div>
          <dl className="mt-7 grid max-w-3xl gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.k} className="bg-stone-0 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">{f.k}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-800">{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Ehrliche Einordnung */}
        <section className="container-quinta pb-20">
          <div className="max-w-2xl rounded-lg border border-stone-200 bg-stone-100 p-7 sm:p-8">
            <div className="kicker mb-2">Ehrliche Einordnung</div>
            <p className="text-md leading-relaxed text-ink-800">
              Das ist eine interne Messung in einem definierten Lastszenario — keine unabhängige
              Zertifizierung. Ergebnisse hängen von Hardware, Modell und Lastprofil ab und lassen
              sich nicht 1:1 auf jede Umgebung übertragen. Deshalb gehen wir den Aufbau in der Demo
              im Detail durch — und messen auf Wunsch auf Ihrer eigenen Hardware nach.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Nachmessen statt glauben.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In der Demo zeigen wir den Messaufbau — und reproduzieren den Test gern auf Ihrer
              eigenen Hardware, mit Ihrem Lastprofil.
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
