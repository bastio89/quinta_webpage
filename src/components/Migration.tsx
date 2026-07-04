"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const APIS = ["/v1/chat/completions", "Embeddings", "Rerank", "Audio-Transkription", "Responses-API"];

const CODE_LINES: Array<{ text: string; dim?: boolean; add?: boolean }> = [
  { text: "from openai import OpenAI", dim: true },
  { text: "" },
  { text: "client = OpenAI(", dim: true },
  { text: '    base_url="https://quinta.intern/v1",', add: true },
  { text: '    api_key="qnt-prod-…",', add: true },
  { text: ")", dim: true },
  { text: "" },
  { text: "resp = client.chat.completions.create(", dim: true },
  { text: '    model="llama-3.3-70b", …', dim: true },
  { text: ")", dim: true },
];

export function Migration() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const text = CODE_LINES.map((l) => l.text).join("\n");
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="migration" className="container-quinta py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
        <div>
          <div className="kicker mb-3.5">Migration</div>
          <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
            Zwei Zeilen.
            <br />
            Mehr ist es nicht.
          </h2>
          <p className="mt-5 mb-6 leading-relaxed text-ink-700">
            Bestehende Anwendungen ziehen von OpenAI oder Azure OpenAI um, indem Sie{" "}
            <code className="font-mono text-[13px]">base_url</code> und API-Key ändern. Kein
            Umprogrammieren, kein neues SDK.
          </p>
          <ul className="flex flex-col gap-2.5">
            {APIS.map((api) => (
              <li key={api} className="flex items-center gap-2.5 text-sm text-ink-700">
                <Check className="h-4 w-4 text-green-500" strokeWidth={2} />
                <span className="font-mono text-[13px]">{api}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="code-window">
          <div className="code-window__bar">
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="ml-1.5 text-[11px] tracking-[0.04em] text-on-dark-muted">
              app.py — der ganze Umstieg
            </span>
            <button
              type="button"
              onClick={copy}
              className="ml-auto rounded-xs border border-on-dark/15 px-2 py-1 font-mono text-[10px] text-on-dark-muted transition-colors hover:border-on-dark/30 hover:text-on-dark"
            >
              {copied ? "kopiert ✓" : "kopieren"}
            </button>
          </div>
          <div className="overflow-x-auto px-5 py-4 text-[13px] leading-[1.7] text-on-dark">
            {CODE_LINES.map((line, i) => (
              <span
                key={i}
                className={
                  "code-window__line" +
                  (line.dim ? " code-window__line--dim" : "") +
                  (line.add ? " code-window__line--add" : "")
                }
              >
                {line.text || " "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
