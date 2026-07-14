import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ReadingProgress } from "@/components/motion/ReadingProgress";
import { articleLd, breadcrumbLd } from "@/lib/jsonLd";
import { formatInsightDate } from "@/lib/insights";

type Lang = "de" | "en";

const CHROME = {
  de: {
    insights: "Insights",
    insightsHref: "/insights",
    meta: (min: number) => `${min} Min. Lesezeit`,
    more: "Weitere Insights",
    demo: "Demo buchen (30 Min.)",
    defaultCta: {
      title: "Sehen Sie es auf Ihrer eigenen Hardware.",
      text: "In 30 Minuten zeigen wir, wie Gateway, Daemon und Dashboard auf Ihrer Infrastruktur zusammenspielen.",
    },
  },
  en: {
    insights: "Insights",
    insightsHref: "/en/insights",
    meta: (min: number) => `${min} min read`,
    more: "More insights",
    demo: "Book a demo (30 min.)",
    defaultCta: {
      title: "See it on your own hardware.",
      text: "In 30 minutes we show how gateway, daemon and dashboard work together on your infrastructure.",
    },
  },
} as const;

export function ArticleLayout({
  lang = "de",
  category,
  title,
  date,
  readingMinutes,
  path,
  description,
  cta,
  children,
}: {
  lang?: Lang;
  category: string;
  title: string;
  date: string;
  readingMinutes: number;
  path: string;
  description: string;
  cta?: { title: string; text: string };
  children: ReactNode;
}) {
  const c = CHROME[lang];
  const resolvedCta = cta ?? c.defaultCta;
  const breadcrumb = breadcrumbLd([
    { name: lang === "en" ? "Home" : "Startseite", path: lang === "en" ? "/en" : "/" },
    { name: c.insights, path: c.insightsHref },
    { name: title, path },
  ]);

  return (
    <>
      <JsonLd data={articleLd({ title, description, path, datePublished: date })} />
      <JsonLd data={breadcrumb} />
      <ReadingProgress />
      <Navbar lang={lang} />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-12 sm:pt-20">
          <div className="max-w-2xl">
            <Link
              href={c.insightsHref}
              className="flex w-fit items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              <ArrowLeft className="h-4 w-4" />
              {c.insights}
            </Link>
            <div className="kicker mt-6">{category}</div>
            <h1 className="mt-3.5 text-display-md font-semibold text-ink-900 sm:text-display-lg">
              {title}
            </h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-400">
              twenty5ai · {formatInsightDate(date, lang)} · {c.meta(readingMinutes)}
            </p>
          </div>
        </section>

        <section className="container-quinta pb-16">
          <div className="flex max-w-2xl flex-col gap-10">{children}</div>
        </section>

        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              {resolvedCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">{resolvedCta.text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                {c.demo}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href={c.insightsHref} className="btn btn-inverse">
                {c.more}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
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

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">{children}</h3>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
          <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function CardGrid({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((c) => (
        <div key={c.t} className="card-surface p-6">
          <h3 className="text-md font-semibold text-ink-900">{c.t}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{c.d}</p>
        </div>
      ))}
    </div>
  );
}
