"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "#architektur", label: "Architektur" },
  { href: "#funktionen", label: "Funktionen" },
  { href: "#benchmarks", label: "Benchmarks" },
  { href: "#sicherheit", label: "Sicherheit" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/75 backdrop-blur-md">
      <div className="container-quinta flex h-16 items-center justify-between">
        <a href="#top" className="shrink-0" aria-label="Quinta Startseite">
          <Logo tone="light" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-stone-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#kontakt" className="btn btn-primary">
            Demo anfragen
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-stone-100 lg:hidden"
          aria-label="Menü umschalten"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-ink-950 transition-[grid-template-rows,opacity] duration-[250ms] ease-in-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        inert={!open}
      >
        <div className="min-h-0 overflow-hidden px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-stone-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={cn("mt-5 flex flex-col gap-2.5")}>
            <a href="#kontakt" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
              Demo anfragen
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
