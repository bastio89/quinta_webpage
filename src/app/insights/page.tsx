import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { INSIGHTS, formatInsightDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Fachbeiträge zu souveräner KI, EU AI Act, DSGVO und On-Premise-Betrieb — von twenty5ai, den Machern von Quinta.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const articles = [...INSIGHTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Navbar />
      <main>
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Insights</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Souveräne KI, klar erklärt.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Fachbeiträge zu Regulatorik, Architektur und Betrieb — sachlich, faktenstark und ohne
              Marketing-Rauschen.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-32">
          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="card-surface group flex flex-col p-7 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-raised"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
                  {a.category}
                  <span className="font-mono font-normal text-ink-400">
                    {formatInsightDate(a.date)} · {a.readingMinutes} Min.
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-ink-900">
                  {a.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-azul-600">
                  Lesen
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
