"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/#plattform", label: "Plattform" },
  { href: "/#funktionen", label: "Editionen" },
  { href: "/#leistung", label: "Leistung" },
  { href: "/#sicherheit", label: "Sicherheit" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-stone-50/85 backdrop-blur-md">
      <div className="container-quinta flex h-16 items-center gap-6">
        <Link href="/" aria-label="Quinta Startseite" className="shrink-0">
          <Wordmark size={22} />
        </Link>

        <nav className="ml-2 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xs px-2.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          <Link href="/#kontakt" className="btn btn-primary btn-sm">
            Demo buchen
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center justify-center rounded-sm border border-stone-300 p-2 text-ink-700 lg:hidden"
          aria-label="Menü umschalten"
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
            {NAV_LINKS.map((link) => (
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
              href="/#kontakt"
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Demo buchen
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
