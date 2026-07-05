import Link from "next/link";
import { Wordmark } from "./Wordmark";

const COLUMNS = [
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
];

export function Footer() {
  return (
    <footer className="bg-ink-900 pb-10 pt-22 sm:pt-24">
      <div className="container-quinta">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-on-dark/10 pb-8 sm:flex-row">
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label="Quinta Startseite">
              <Wordmark size={26} onDark byline />
            </Link>
            <span className="max-w-[300px] text-xs leading-relaxed text-on-dark-muted">
              Die souveräne On-Premise-KI-Plattform. Entwickelt in Europa.
            </span>
          </div>

          <nav className="flex flex-wrap gap-10 sm:gap-12">
            {COLUMNS.map((col) => (
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
          <span>© {new Date().getFullYear()} twenty5ai. Alle Rechte vorbehalten.</span>
          <span>Motor: Open Source (Apache 2.0) · Verwaltungsebene: Eigenentwicklung</span>
        </div>
      </div>
    </footer>
  );
}
