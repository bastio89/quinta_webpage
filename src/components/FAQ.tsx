"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    q: "Läuft Quinta wirklich vollständig ohne Internet?",
    a: "Ja. Sobald ein Modell einmal heruntergeladen und ein Deployment aktiv ist, beantwortet Quinta Anfragen komplett offline. Kein Byte verlässt Ihr Netzwerk.",
  },
  {
    q: "Können wir GPT-4, Claude oder andere Cloud-Modelle über Quinta laufen lassen?",
    a: "Noch nicht. Quinta betreibt Modelle auf Ihrer eigenen Hardware über austauschbare, lokale Inferenz-Engines. Eine Anbindung externer Cloud-Anbieter als zusätzliche Option steht auf der Roadmap.",
  },
  {
    q: "Was bedeutet „OpenAI-kompatibel“ genau?",
    a: "Ihre Anwendungen sprechen Quinta über dieselbe Schnittstelle an wie OpenAI. Bestehender Code ändert nur base_url und api_key — keine Umprogrammierung nötig.",
  },
  {
    q: "Welche Hardware brauchen wir?",
    a: "Für Demos genügt ein moderner Rechner mit 16 GB RAM. Für den Produktivbetrieb empfehlen wir eine GPU mit 16+ GB VRAM, z. B. einen dedizierten KI-Rechner wie den Asus GX10.",
  },
  {
    q: "Ist der Quellcode einsehbar?",
    a: "Der Motor (Gateway, Daemon, Infoserver, gemeinsame Bibliotheken) basiert auf Apache-2.0-Code und ist offen. Das Dashboard ist eine eigenständige Entwicklung von twenty5ai unter Elastic License 2.0 — quelloffen einsehbar.",
  },
  {
    q: "Wie schnell ist die Einrichtung beim Kunden vor Ort?",
    a: "Die Erstinstallation dauert typischerweise 30–45 Minuten: Datenbank starten, Dienste hochfahren, erstes Modell live schalten, ersten API-Key erzeugen.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-mist-300 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-base font-medium text-ink-950">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-mist-600 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-[250ms] ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p id={id} className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-700">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

const OBJECTIONS = [
  { blocker: "„Das geht nicht, wegen der DSGVO.“", answer: "Läuft vollständig on-premise, DSGVO- und DSG-konform von Grund auf." },
  { blocker: "„Zu teuer.“", answer: "Planbare Hardware- und Lizenzkosten statt wachsender Cloud-Rechnung pro Token." },
  { blocker: "„Unsere Daten landen alle in den USA.“", answer: "Ihre Daten verlassen Ihr Netzwerk nie." },
  { blocker: "„Die Tokens sprengen jedes Budget.“", answer: "Keine Tokenabrechnung — feste Kosten, volle Kontrolle." },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-mist-50 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-sovereign-600">FAQ</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Häufige Fragen
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="card-surface p-7">
            <p className="kicker text-sovereign-600">Worum es wirklich geht</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-800">
              Cloud-KI heißt mieten: Sie zahlen laufend pro Anfrage, und Ihre Daten durchlaufen
              fremde Server. On-Premise heißt besitzen: Die Hardware steht bei Ihnen, läuft unter
              Ihrer Kontrolle, und{" "}
              <strong className="font-semibold text-ink-950">niemand kann Ihnen den Zugang kappen</strong>{" "}
              oder über Nacht die Preise ändern.
            </p>
          </div>

          <div className="mt-6 grid gap-x-8 gap-y-4 border-t border-mist-300 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-base font-semibold text-ink-950">Vier Sätze bremsen Ihr Team jeden Tag aus:</p>
              <ul className="mt-4 space-y-3">
                {OBJECTIONS.map((o) => (
                  <li key={o.blocker} className="flex items-start gap-2 text-sm text-mist-500">
                    <span className="mt-0.5 text-mist-400">×</span>
                    <span className="italic line-through decoration-mist-400">{o.blocker}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold text-ink-950">Wir räumen alle vier weg.</p>
              <ul className="mt-4 space-y-3">
                {OBJECTIONS.map((o) => (
                  <li key={o.answer} className="flex items-start gap-2 text-sm font-medium text-ink-800">
                    <span className="mt-0.5 text-sovereign-600">→</span>
                    <span>{o.answer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {QUESTIONS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
