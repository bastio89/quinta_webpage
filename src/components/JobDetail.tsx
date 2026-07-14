import { ArrowLeft, ArrowRight, Check, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import type { JobContent } from "@/lib/jobs";

type Lang = "de" | "en";

const L = {
  de: {
    back: "Alle Stellen",
    backHref: "/karriere",
    responsibilities: "Deine Aufgaben",
    requirements: "Dein Profil",
    niceToHave: "Schön, aber kein Muss",
    offer: "Was wir bieten",
    applyTitle: "Klingt nach dir?",
    applyText:
      "Schick uns deinen Lebenslauf und ein paar Sätze, warum die Rolle zu dir passt — formlos genügt. Wir melden uns schnell.",
    applyBtn: "Jetzt bewerben",
    subject: "Bewerbung",
  },
  en: {
    back: "All positions",
    backHref: "/en/karriere",
    responsibilities: "Your responsibilities",
    requirements: "Your profile",
    niceToHave: "Nice to have, not required",
    offer: "What we offer",
    applyTitle: "Sounds like you?",
    applyText:
      "Send us your CV and a few sentences on why the role fits you — informal is fine. We'll get back to you quickly.",
    applyBtn: "Apply now",
    subject: "Application",
  },
} as const;

function List({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-display-sm font-semibold text-ink-900">{heading}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
            <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function JobDetail({ lang = "de", content }: { lang?: Lang; content: JobContent }) {
  const t = L[lang];
  const mailto = `mailto:hello@twenty5ai.com?subject=${encodeURIComponent(
    `${t.subject}: ${content.title}`,
  )}`;

  return (
    <>
      <section className="container-quinta pt-16 pb-12 sm:pt-20">
        <div className="max-w-2xl">
          <Link
            href={t.backHref}
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
          <div className="kicker mt-6">{content.team}</div>
          <h1 className="mt-3.5 text-display-md font-semibold text-ink-900 sm:text-display-lg">
            {content.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-ink-400" strokeWidth={1.75} />
              {content.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-ink-400" strokeWidth={1.75} />
              {content.type}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-ink-400" strokeWidth={1.75} />
              {content.team}
            </span>
          </div>
          <p className="mt-6 border-l-2 border-azul-300 pl-4 text-lg leading-relaxed text-ink-800">
            {content.tagline}
          </p>
        </div>
      </section>

      <section className="container-quinta pb-16">
        <div className="flex max-w-2xl flex-col gap-10">
          <div className="flex flex-col gap-4 text-md leading-relaxed text-ink-700">
            {content.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <List heading={t.responsibilities} items={content.responsibilities} />
          <List heading={t.requirements} items={content.requirements} />
          {content.niceToHave && content.niceToHave.length > 0 && (
            <List heading={t.niceToHave} items={content.niceToHave} />
          )}
          <List heading={t.offer} items={content.offer} />

          <p className="rounded-md border border-stone-200 bg-stone-100 p-5 text-sm leading-relaxed text-ink-600">
            {content.closing}
          </p>
        </div>
      </section>

      <section className="bg-ink-900 py-24 text-center sm:py-28">
        <div className="container-quinta">
          <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
            {t.applyTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">{t.applyText}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={mailto} className="btn btn-primary">
              {t.applyBtn}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href={t.backHref} className="btn btn-inverse">
              {t.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
