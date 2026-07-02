import Link from "next/link";
import { Logo } from "./Logo";
import { LinkedinIcon } from "./icons";

const COLUMNS = [
  {
    title: "Produkt",
    links: [
      { label: "Architektur", href: "#architektur" },
      { label: "Funktionen", href: "#funktionen" },
      { label: "Benchmarks", href: "#benchmarks" },
      { label: "Sicherheit", href: "#sicherheit" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über twenty5ai", href: "mailto:hello@twenty5ai.com" },
      { label: "Kontakt", href: "#kontakt" },
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
    <footer className="bg-ink-950 py-16 text-ink-300">
      <div className="container-quinta">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              Die souveräne KI-Plattform von twenty5ai. Ihre Daten bleiben zu 100 % bei Ihnen.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="rounded-lg border border-white/10 p-2 transition-colors hover:border-white/25 hover:text-stone-100"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-200">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-ink-300 hover:text-stone-100">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} twenty5ai. Alle Rechte vorbehalten.</p>
          <p>Motor auf Basis von Apache-2.0-Komponenten · Dashboard unter Elastic License 2.0</p>
        </div>
      </div>
    </footer>
  );
}
