"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const QUESTIONS = [
  {
    q: "Was heißt „souverän“ konkret?",
    a: "Alle Komponenten — Gateway, Daemon, Dashboard, Modell-Registry und Datenbank — laufen auf Ihrer Hardware, in Ihrem Netz. Es gibt keinen Cloud-Anteil, keine Telemetrie nach außen und keinen Anbieter, der Ihre Anfragen sieht.",
  },
  {
    q: "Welche Hardware brauchen wir?",
    a: "Von der einzelnen GPU-Workstation bis zu KI-Appliances der DGX-Spark-Klasse (z. B. Asus GX10). Quinta erkennt NVIDIA-, AMD- und Intel-GPUs automatisch; jeder weitere Rechner mit dem Daemon wird selbstständig Teil der Plattform.",
  },
  {
    q: "Welche Modelle können wir betreiben?",
    a: "Über vLLM den gesamten HuggingFace-Katalog — Llama, Mistral, Qwen, Gemma, DeepSeek und mehr. Ollama steht für den einfachen Einstieg bereit. Der Lebenszyklus (Download, Start, Health-Check, Warmup) läuft automatisch.",
  },
  {
    q: "Was kostet der Betrieb?",
    a: "Hardware und Strom. Es gibt keine Token-Kosten und keine Cloud-Rechnung — die Nutzung ist unbegrenzt und das Budget planbar.",
  },
  {
    q: "Wie lange dauert die Einführung?",
    a: "Der Rollout auf vorhandene Hardware dauert Stunden, nicht Monate. Davor steht ein 30-minütiges Planungsgespräch zu Anwendungsfällen und Compliance-Rahmen.",
  },
  {
    q: "Müssen wir unsere Anwendungen umbauen?",
    a: "Nein. Quinta spricht die OpenAI-API (/v1/chat/completions, Embeddings, Rerank, Audio-Transkription, Responses-API). Bestehende Apps ändern base_url und API-Key — das ist der ganze Umstieg.",
  },
  {
    q: "Können wir parallel weiter Cloud-KI nutzen?",
    a: "Ja. Quinta betreibt Modelle auf Ihrer Hardware und ersetzt Cloud-APIs dort, wo Datenhoheit zählt. Unkritische Workloads können Sie unabhängig davon weiter in der Cloud laufen lassen — die Entscheidung liegt bei Ihnen.",
  },
  {
    q: "Wer steht hinter Quinta?",
    a: "Quinta ist eine Eigenentwicklung von twenty5ai. Der Inferenz-Motor basiert auf bewährter Open-Source-Technologie (Apache 2.0); die Verwaltungsebene — Gateway, Dashboard, Registry — ist eigene Entwicklung.",
  },
];

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
