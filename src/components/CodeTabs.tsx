"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

type Tab = { label: string; code: string };
type Lang = "de" | "en";

const T = {
  de: { copy: "Kopieren", copied: "Kopiert", aria: "Code kopieren" },
  en: { copy: "Copy", copied: "Copied", aria: "Copy code" },
} as const;

export function CodeTabs({ tabs, lang = "de" }: { tabs: Tab[]; lang?: Lang }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const t = T[lang];
  const current = tabs[active] ?? tabs[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* Clipboard nicht verfügbar — kein Fehlerfall für den Nutzer */
    }
  };

  return (
    <div className="code-window not-prose">
      <div className="code-window__bar justify-between">
        <div className="flex flex-wrap items-center gap-1">
          {tabs.length > 1 ? (
            tabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-xs px-2.5 py-1 text-xs font-medium transition-colors",
                  i === active
                    ? "bg-on-dark/10 text-on-dark"
                    : "text-on-dark-muted hover:text-on-dark",
                )}
              >
                {tab.label}
              </button>
            ))
          ) : (
            <span className="text-xs font-medium text-on-dark-muted">{current.label}</span>
          )}
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label={t.aria}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xs px-1.5 py-1 text-xs text-on-dark-muted transition-colors hover:text-on-dark"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-signal-green" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? t.copied : t.copy}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed text-on-dark">
        <code>{current.code}</code>
      </pre>
    </div>
  );
}
