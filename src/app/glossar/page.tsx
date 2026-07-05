import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { glossaryList } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossar: souveräne KI, EU AI Act, On-Premise & mehr",
  description:
    "Die wichtigsten Begriffe rund um souveräne KI verständlich erklärt — von Bounded Admission über Datensouveränität bis zum EU AI Act.",
  alternates: { canonical: "/glossar", languages: { de: "/glossar", en: "/en/glossar" } },
};

export default function GlossarPage() {
  const terms = glossaryList("de");

  return (
    <>
      <Navbar />
      <main>
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Glossar</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Souveräne KI, Begriff für Begriff.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Die zentralen Begriffe rund um KI-Betrieb, Regulatorik und Datensouveränität — kurz
              definiert, sauber verlinkt, ohne Fachjargon-Nebel.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-32">
          <div className="grid gap-4 md:grid-cols-2">
            {terms.map((term) => (
              <Link
                key={term.slug}
                href={`/glossar/${term.slug}`}
                className="card-surface group flex flex-col p-6"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-900">
                    {term.term}
                  </h2>
                  <span className="rounded-xs bg-stone-100 px-2 py-0.5 text-2xs font-semibold uppercase tracking-[0.06em] text-ink-500">
                    {term.categoryLabel}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{term.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-azul-600">
                  Begriff öffnen
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
