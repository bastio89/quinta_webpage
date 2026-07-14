import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Laptop, Handshake } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { jobsList } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Karriere bei twenty5ai",
  description:
    "Bau mit an Quinta — der souveränen On-Premise-KI-Plattform. Offene Stellen bei twenty5ai für Menschen, die echte Kontrolle über KI ernst nehmen.",
  alternates: { canonical: "/karriere", languages: { de: "/karriere", en: "/en/karriere" } },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Substanz statt Hype",
    text: "Wir bauen ein Produkt, das echte Kontrolle über KI liefert — messbar, nachweisbar, ohne Buzzwords.",
  },
  {
    icon: Globe2,
    title: "Europäisch & souverän",
    text: "Datensouveränität ist bei uns kein Marketing, sondern der Kern des Produkts. Das prägt, wie wir arbeiten.",
  },
  {
    icon: Laptop,
    title: "Remote-first",
    text: "Arbeite dort, wo du am produktivsten bist. Wir treffen uns beim Kunden und regelmäßig als Team.",
  },
  {
    icon: Handshake,
    title: "Nah am Kunden",
    text: "Wir lösen echte Probleme regulierter Branchen — direkt an der Quelle, nicht aus der Distanz.",
  },
];

export default function KarrierePage() {
  const jobs = jobsList("de");

  return (
    <>
      <Navbar />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Karriere</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Bau mit an souveräner KI.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              twenty5ai entwickelt Quinta — die On-Premise-KI-Plattform, mit der Unternehmen KI auf
              ihrer eigenen Hardware betreiben. Wir suchen Menschen, die Technik lieben und Kontrolle
              ernst nehmen. Kein Byte verlässt das Haus — auch nicht bei uns.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card-surface p-6">
                <v.icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
                <h2 className="mt-4 text-md font-semibold text-ink-900">{v.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-28">
          <h2 className="text-display-sm font-semibold text-ink-900">Offene Stellen</h2>
          <div className="mt-6 flex flex-col gap-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/karriere/${job.slug}`}
                className="card-surface group flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
                    {job.team}
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-ink-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{job.tagline}</p>
                  <p className="mt-2 font-mono text-xs text-ink-400">
                    {job.location} · {job.type}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-azul-600">
                  Zur Stelle
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-stone-200 bg-stone-100 p-6">
            <p className="text-md leading-relaxed text-ink-800">
              Keine passende Stelle dabei, aber überzeugt von der Idee? Wir freuen uns über
              Initiativbewerbungen.
            </p>
            <a
              href="mailto:hello@twenty5ai.com?subject=Initiativbewerbung"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
            >
              Initiativ bewerben →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
