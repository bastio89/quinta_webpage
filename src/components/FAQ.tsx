"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { LANDING_FAQ } from "@/lib/faq";

const QUESTIONS = LANDING_FAQ;

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-[860px] px-8 pb-32">
      <div className="mb-10">
        <div className="kicker mb-3.5">Häufige Fragen</div>
        <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
          Die Fragen, die CIOs zuerst stellen.
        </h2>
      </div>

      <div className="border-t border-stone-200">
        {QUESTIONS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-b border-stone-200">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-1 py-5 text-left text-lg font-medium text-ink-900"
              >
                {item.q}
                <Plus
                  className={
                    "h-[18px] w-[18px] flex-none text-ink-400 transition-transform duration-200 ease-out " +
                    (isOpen ? "rotate-45" : "")
                  }
                />
              </button>
              <div
                className={
                  "grid overflow-hidden transition-[grid-template-rows,opacity] duration-[250ms] ease-in-out " +
                  (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                }
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-[700px] px-1 pb-5 leading-relaxed text-ink-700">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
