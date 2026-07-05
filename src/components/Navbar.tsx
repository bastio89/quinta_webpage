"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/cn";

type Lang = "de" | "en";

const LABELS = {
  de: {
    links: [
      { id: "plattform", label: "Plattform" },
      { id: "funktionen", label: "Editionen" },
      { id: "leistung", label: "Leistung" },
      { id: "sicherheit", label: "Sicherheit" },
      { id: "faq", label: "FAQ" },
    ],
    demo: "Demo buchen",
    home: "Quinta Startseite",
    toggle: "Menü umschalten",
  },
  en: {
    links: [
      { id: "plattform", label: "Platform" },
      { id: "funktionen", label: "Editions" },
      { id: "leistung", label: "Performance" },
      { id: "sicherheit", label: "Security" },
      { id: "faq", label: "FAQ" },
    ],
    demo: "Book a demo",
    home: "Quinta home",
    toggle: "Toggle menu",
  },
} as const;

export function Navbar({ lang = "de" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const t = LABELS[lang];
  const home = lang === "en" ? "/en" : "/";
  const navLinks = t.links.map((l) => ({ href: `${home}#${l.id}`, label: l.label, id: l.id }));

  // Scroll-Spy: aktive Sektion hervorheben (nur auf der Startseite).
  const [activeId, setActiveId] = useState("");
  const isHome = pathname === "/" || pathname === "/en";
  useEffect(() => {
    if (!isHome) return;
    const ids = t.links.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome, t.links]);

  // Sprachumschalter. Nur Seiten mit vorhandener EN-Fassung mappen 1:1;
  // für alle anderen fällt der Wechsel auf die Sprach-Startseite zurück (kein 404).
  const EN_TRANSLATED = new Set([
    "/",
    "/vergleich",
    "/rechner",
    "/insights",
    "/insights/eu-ai-act-frist-2026",
    "/insights/bounded-admission-last",
    "/insights/datensouveraenitaet-cloud-act",
    "/insights/on-premise-vs-cloud-kosten",
    "/insights/nis2-ki-betrieb",
  ]); // DE-Pfade mit /en-Pendant
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const dePath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const altHref = isEn
    ? dePath // Rückweg nach DE existiert immer
    : EN_TRANSLATED.has(dePath)
      ? `/en${dePath === "/" ? "" : dePath}`
      : "/en";
  const altLabel = isEn ? "DE" : "EN";
  const altAria = isEn ? "Auf Deutsch wechseln" : "Switch to English";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-stone-50/85 backdrop-blur-md">
      <div className="container-quinta flex h-16 items-center gap-6">
        <Link href={home} aria-label={t.home} className="shrink-0">
          <Wordmark size={22} />
        </Link>

        <nav className="ml-2 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xs px-2.5 py-1.5 text-sm font-medium transition-colors",
                isHome && activeId === link.id
                  ? "text-azul-600"
                  : "text-ink-700 hover:text-ink-900",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          <Link
            href={altHref}
            aria-label={altAria}
            className="inline-flex items-center gap-1.5 rounded-xs px-2 py-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
          >
            <Globe className="h-4 w-4" />
            {altLabel}
          </Link>
          <Link href={`${home}#kontakt`} className="btn btn-primary btn-sm">
            {t.demo}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center justify-center rounded-sm border border-stone-300 p-2 text-ink-700 lg:hidden"
          aria-label={t.toggle}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-stone-100 bg-stone-50 transition-[grid-template-rows,opacity] duration-[250ms] ease-in-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        inert={!open}
      >
        <div className="min-h-0 overflow-hidden px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xs px-2.5 py-2 text-sm font-medium text-ink-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5">
            <Link
              href={`${home}#kontakt`}
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              {t.demo}
            </Link>
            <Link
              href={altHref}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-sm px-2 py-2 text-sm font-medium text-ink-500"
            >
              <Globe className="h-4 w-4" />
              {altLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
