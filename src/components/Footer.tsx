import Link from "next/link";
import { Wordmark } from "./Wordmark";

type Lang = "de" | "en";

const CONTENT = {
  de: {
    columns: [
      {
        title: "Produkt",
        links: [
          { label: "Plattform", href: "/#plattform" },
          { label: "Leistung", href: "/#leistung" },
          { label: "Vergleich", href: "/vergleich" },
          { label: "Insights", href: "/insights" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        title: "Kontakt",
        links: [
          { label: "Demo buchen", href: "/#kontakt" },
          { label: "hello@twenty5ai.com", href: "mailto:hello@twenty5ai.com" },
        ],
      },
      {
        title: "Rechtliches",
        links: [
          { label: "Impressum", href: "/impressum" },
          { label: "Datenschutz", href: "/datenschutz" },
          { label: "AGB", href: "/agb" },
        ],
      },
    ],
    tagline: "Die souveräne On-Premise-KI-Plattform. Entwickelt in Europa.",
    rights: "Alle Rechte vorbehalten.",
    engine: "Motor: Open Source (Apache 2.0) · Verwaltungsebene: Eigenentwicklung",
    home: "Quinta Startseite",
  },
  en: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Platform", href: "/en#plattform" },
          { label: "Performance", href: "/en#leistung" },
          { label: "Comparison", href: "/en/vergleich" },
          { label: "Insights", href: "/en/insights" },
          { label: "FAQ", href: "/en#faq" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Book a demo", href: "/en#kontakt" },
          { label: "hello@twenty5ai.com", href: "mailto:hello@twenty5ai.com" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Imprint (DE)", href: "/impressum" },
          { label: "Privacy (DE)", href: "/datenschutz" },
          { label: "Terms (DE)", href: "/agb" },
        ],
      },
    ],
    tagline: "The sovereign on-premise AI platform. Built in Europe.",
    rights: "All rights reserved.",
    engine: "Engine: open source (Apache 2.0) · Management layer: in-house",
    home: "Quinta home",
  },
} as const;

export function Footer({ lang = "de" }: { lang?: Lang }) {
  const c = CONTENT[lang];
  const home = lang === "en" ? "/en" : "/";

  return (
    <footer className="bg-ink-900 pb-10 pt-22 sm:pt-24">
      <div className="container-quinta">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-on-dark/10 pb-8 sm:flex-row">
          <div className="flex flex-col gap-3">
            <Link href={home} aria-label={c.home}>
              <Wordmark size={26} onDark byline />
            </Link>
            <span className="max-w-[300px] text-xs leading-relaxed text-on-dark-muted">
              {c.tagline}
            </span>
          </div>

          <nav className="flex flex-wrap gap-10 sm:gap-12">
            {c.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2.5">
                <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-on-dark">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-on-dark-muted hover:text-on-dark"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-2 pt-5 text-2xs text-on-dark-muted sm:flex-row">
          <span>© {new Date().getFullYear()} twenty5ai. {c.rights}</span>
          <span>{c.engine}</span>
        </div>
      </div>
    </footer>
  );
}
