import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { definedTermSetLd } from "@/lib/jsonLd";
import { glossaryList } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossary: sovereign AI, EU AI Act, on-premise & more",
  description:
    "The key terms around sovereign AI explained clearly — from bounded admission and data sovereignty to the EU AI Act.",
  alternates: { canonical: "/en/glossar", languages: { de: "/glossar", en: "/en/glossar" } },
};

export default function GlossaryPageEn() {
  const terms = glossaryList("en");

  return (
    <>
      <JsonLd
        data={definedTermSetLd({
          name: "Quinta Glossary",
          description:
            "Key terms around sovereign AI, on-premise operation, regulation and data sovereignty.",
          path: "/en/glossar",
          terms: terms.map((t) => ({ name: t.term, path: `/en/glossar/${t.slug}` })),
        })}
      />
      <Navbar lang="en" />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Glossary</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Sovereign AI, term by term.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              The central terms around AI operation, regulation and data sovereignty — briefly
              defined, cleanly linked, without the jargon fog.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-32">
          <div className="grid gap-4 md:grid-cols-2">
            {terms.map((term) => (
              <Link
                key={term.slug}
                href={`/en/glossar/${term.slug}`}
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
                  Open term
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
