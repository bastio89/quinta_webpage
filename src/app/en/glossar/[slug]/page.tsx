import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GLOSSARY, getGlossaryEntry, CATEGORY_LABELS } from "@/lib/glossary";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, breadcrumbLd } from "@/lib/jsonLd";

export function generateStaticParams() {
  return GLOSSARY.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) return {};
  const c = entry.en;
  return {
    title: `${c.term} — Glossary`,
    description: c.short,
    alternates: {
      canonical: `/en/glossar/${slug}`,
      languages: { de: `/glossar/${slug}`, en: `/en/glossar/${slug}` },
    },
  };
}

export default async function GlossaryTermPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) notFound();
  const c = entry.en;

  const ld = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: c.term,
    description: c.short,
    inDefinedTermSet: `${SITE_URL}/en/glossar`,
    url: `${SITE_URL}/en/glossar/${slug}`,
  };

  const breadcrumb = breadcrumbLd([
    { name: "Home", path: "/en" },
    { name: "Glossary", path: "/en/glossar" },
    { name: c.term, path: `/en/glossar/${slug}` },
  ]);

  return (
    <>
      <Navbar lang="en" />
      <main id="inhalt" tabIndex={-1}>
        <article className="container-quinta max-w-3xl pt-16 pb-10 sm:pt-20">
          <Link
            href="/en/glossar"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Glossary
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="kicker">{CATEGORY_LABELS[entry.category].en}</span>
          </div>
          <h1 className="mt-2 text-display-md font-semibold tracking-[-0.025em] text-ink-900 sm:text-display-lg">
            {c.term}
          </h1>
          <p className="mt-4 border-l-2 border-azul-300 pl-4 text-lg leading-relaxed text-ink-700">
            {c.short}
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {c.body.map((p, i) => (
              <p key={i} className="text-md leading-relaxed text-ink-800">
                {p}
              </p>
            ))}
          </div>

          {c.related && c.related.length > 0 && (
            <div className="mt-10 border-t border-stone-200 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
                Read on
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {c.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-azul-600 hover:text-azul-700"
                  >
                    {r.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <section className="bg-ink-900 py-20 text-center sm:py-24">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[640px] text-display-sm font-semibold text-on-dark">
              From terms to operation.
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-on-dark-muted">
              In the demo we show what sovereign AI looks like in practice — on your hardware, with
              your data.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Book a demo (30 min)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/en/check" className="btn btn-inverse">
                Compliance self-check
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
