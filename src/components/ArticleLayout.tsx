import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { articleLd } from "@/lib/jsonLd";
import { formatInsightDate } from "@/lib/insights";

export function ArticleLayout({
  category,
  title,
  date,
  readingMinutes,
  path,
  description,
  cta = {
    title: "Sehen Sie es auf Ihrer eigenen Hardware.",
    text: "In 30 Minuten zeigen wir, wie Gateway, Daemon und Dashboard auf Ihrer Infrastruktur zusammenspielen.",
  },
  children,
}: {
  category: string;
  title: string;
  date: string;
  readingMinutes: number;
  path: string;
  description: string;
  cta?: { title: string; text: string };
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={articleLd({ title, description, path, datePublished: date })} />
      <Navbar />
      <main>
        <section className="container-quinta pt-16 pb-12 sm:pt-20">
          <div className="max-w-2xl">
            <Link
              href="/insights"
              className="flex w-fit items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Insights
            </Link>
            <div className="kicker mt-6">{category}</div>
            <h1 className="mt-3.5 text-display-md font-semibold text-ink-900 sm:text-display-lg">
              {title}
            </h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-400">
              twenty5ai · {formatInsightDate(date)} · {readingMinutes} Min. Lesezeit
            </p>
          </div>
        </section>

        <section className="container-quinta pb-16">
          <div className="flex max-w-2xl flex-col gap-10">{children}</div>
        </section>

        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">{cta.text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Demo buchen (30 Min.)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/insights" className="btn btn-inverse">
                Weitere Insights
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* Kleine, wiederverwendbare Bausteine für Artikel-Fließtext. */

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-relaxed text-ink-800">{children}</p>;
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-display-sm font-semibold text-ink-900">{heading}</h2>
      <div className="mt-4 flex flex-col gap-4 text-md leading-relaxed text-ink-700">{children}</div>
    </div>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-copper-400 pl-6">
      <p className="text-xl font-medium leading-relaxed text-ink-800">{children}</p>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-stone-200 bg-stone-100 p-5 text-sm leading-relaxed text-ink-500">
      {children}
    </p>
  );
}
