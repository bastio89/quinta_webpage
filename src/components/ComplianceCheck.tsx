"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, ShieldCheck, AlertTriangle, Info } from "lucide-react";

type Lang = "de" | "en";
type Answers = Record<string, string>;
type Tone = "action" | "attention" | "ok";

type Finding = {
  id: string;
  tone: Tone;
  title: string;
  body: string;
  link?: { href: string; label: string };
};

/* Fragen sind wertbasiert (sprachneutrale option-values), Labels je Sprache. */
const QUESTIONS = [
  {
    id: "sector",
    values: ["critical", "other", "unsure"],
  },
  {
    id: "useCase",
    values: ["highrisk", "support", "lowrisk"],
  },
  {
    id: "data",
    values: ["sensitive", "personal", "none"],
  },
  {
    id: "deployment",
    values: ["us_cloud", "eu_cloud", "onprem", "none"],
  },
  {
    id: "documentation",
    values: ["full", "partial", "no"],
  },
] as const;

const T = {
  de: {
    ui: {
      progress: (a: number, b: number) => `Frage ${a} von ${b}`,
      back: "Zurück",
      restart: "Neu starten",
      resultKicker: "Ihre Einschätzung",
      disclaimer:
        "Orientierungshilfe, keine Rechtsberatung. Die Auswertung basiert allein auf Ihren Angaben und ersetzt keine Prüfung im Einzelfall. Eine verbindliche Bewertung nehmen Ihre Rechts- und Compliance-Verantwortlichen vor.",
      toneLabel: { action: "Handlungsbedarf", attention: "Zu prüfen", ok: "Solide" },
      ctaTitle: "Ihre Themen gemeinsam einordnen.",
      ctaText:
        "In einer 30-minütigen Demo gehen wir Ihre Punkte durch und zeigen, wie souveräner Betrieb die geforderte Nachweisbarkeit liefert.",
      ctaBtn: "Demo buchen (30 Min.)",
    },
    questions: {
      sector: {
        q: "In welchem Sektor sind Sie tätig?",
        help: "Entscheidet, ob NIS2 greift.",
        options: {
          critical: "Kritische oder wichtige Einrichtung (Energie, Gesundheit, Finanz, Verwaltung, digitale Dienste, Verkehr …)",
          other: "Andere Branche",
          unsure: "Unsicher",
        },
      },
      useCase: {
        q: "Wofür setzen Sie KI ein — oder planen es?",
        help: "Bestimmt die Risikoklasse nach EU AI Act.",
        options: {
          highrisk: "Entscheidungen über Personen (Bewerbung, Kredit, Zugang, Bewertung, Biometrie)",
          support: "Unterstützung interner Prozesse und Wissensarbeit",
          lowrisk: "Reine Textverarbeitung ohne Personenbezug",
        },
      },
      data: {
        q: "Mit welchen Daten arbeitet die KI?",
        help: "Entscheidet über die DSGVO-Anforderungen.",
        options: {
          sensitive: "Besondere Kategorien personenbezogener Daten (Gesundheit, Biometrie u. a., Art. 9 DSGVO)",
          personal: "Personenbezogene Daten (Kunden, Beschäftigte)",
          none: "Keine personenbezogenen Daten",
        },
      },
      deployment: {
        q: "Wie betreiben Sie KI heute?",
        help: "Bestimmt Ihre Datensouveränität.",
        options: {
          us_cloud: "Cloud-API eines US-Anbieters",
          eu_cloud: "Cloud-API in der „EU-Region“ eines US-Anbieters",
          onprem: "On-Premise / eigene Infrastruktur",
          none: "Noch keine KI im Einsatz",
        },
      },
      documentation: {
        q: "Könnten Sie Zugriffe, Prompts und eingesetzte Modelle lückenlos belegen?",
        help: "Prüft die Audit-Fähigkeit.",
        options: {
          full: "Ja, vollständig nachvollziehbar",
          partial: "Teilweise",
          no: "Nein oder unklar",
        },
      },
    },
    summary: {
      action: "Es gibt Punkte mit Handlungsbedarf. Sie sollten sie strukturiert angehen — je früher, desto weniger Druck vor den Fristen.",
      attention: "Grundsätzlich solide, aber einige Punkte sollten Sie prüfen und dokumentieren.",
      ok: "Ihre Ausgangslage wirkt solide. Halten Sie den Stand nachweisbar — das ist bei einer Prüfung die halbe Miete.",
    },
    findings: {
      aiact_high: {
        tone: "action" as Tone,
        title: "EU AI Act: Hochrisiko wahrscheinlich",
        body: "KI, die über Menschen entscheidet, fällt voraussichtlich in die Hochrisiko-Klasse. Ab dem 2. August 2026 gelten dafür Pflichten zu Risikomanagement, Protokollierung und menschlicher Aufsicht.",
        link: { href: "/insights/eu-ai-act-frist-2026", label: "EU AI Act & die Frist 2026 →" },
      },
      aiact_support: {
        tone: "attention" as Tone,
        title: "EU AI Act: Transparenzpflichten möglich",
        body: "Unterstützende KI ist meist kein Hochrisiko, kann aber Transparenz- und Kennzeichnungspflichten auslösen. Prüfen Sie die Einordnung, bevor der Anwendungsfall wächst.",
        link: { href: "/insights/eu-ai-act-frist-2026", label: "EU AI Act eingeordnet →" },
      },
      nis2_critical: {
        tone: "action" as Tone,
        title: "NIS2 betrifft Sie",
        body: "Als kritische oder wichtige Einrichtung unterliegen Sie den erweiterten Cybersicherheitspflichten der NIS2 — inklusive Geschäftsleitungshaftung. Ihr KI-Stack gehört zum Risikomanagement.",
        link: { href: "/insights/nis2-ki-betrieb", label: "NIS2 & der KI-Betrieb →" },
      },
      nis2_unsure: {
        tone: "attention" as Tone,
        title: "NIS2-Betroffenheit klären",
        body: "Der Anwendungsbereich von NIS2 ist breiter, als viele annehmen. Klären Sie früh, ob Sie als wichtige Einrichtung gelten — die Pflichten haben Vorlauf.",
        link: { href: "/insights/nis2-ki-betrieb", label: "NIS2 verständlich →" },
      },
      sovereignty_us: {
        tone: "action" as Tone,
        title: "Datenabfluss über US-Cloud",
        body: "Personenbezogene Daten an eine US-Cloud zu geben, öffnet sie potenziell dem US CLOUD Act — unabhängig vom Serverstandort. Für sensible Daten ist das ein reales Compliance-Risiko.",
        link: { href: "/insights/datensouveraenitaet-cloud-act", label: "DSGVO, Schrems II & CLOUD Act →" },
      },
      sovereignty_eu: {
        tone: "attention" as Tone,
        title: "„EU-Region“ genügt nicht automatisch",
        body: "Ein europäisches Rechenzentrum eines US-Anbieters hebt die US-Zugriffsrechte nicht auf. Für personenbezogene Daten sollten Sie die Rechtsgrundlage des Transfers belastbar dokumentieren.",
        link: { href: "/insights/datensouveraenitaet-cloud-act", label: "Warum die EU-Region nicht reicht →" },
      },
      sovereignty_onprem: {
        tone: "ok" as Tone,
        title: "Daten bleiben in Ihrer Kontrolle",
        body: "On-Premise-Betrieb bedeutet: Ihre Daten verlassen Ihre Infrastruktur nicht. Das ist die stärkste Ausgangslage für DSGVO und Datensouveränität.",
      },
      doc_no: {
        tone: "action" as Tone,
        title: "Nachweisbarkeit fehlt",
        body: "Ohne lückenlose Protokolle über Zugriffe, Prompts und Modelle lässt sich eine Prüfung kaum bestehen. Genau diese Audit-Spur liefert eine souveräne Betriebsschicht automatisch.",
        link: { href: "/insights/eu-ai-act-frist-2026", label: "Was eine Prüfung verlangt →" },
      },
      doc_partial: {
        tone: "attention" as Tone,
        title: "Nachweisbarkeit lückenhaft",
        body: "Teilweise Dokumentation reicht im Ernstfall selten. Sorgen Sie dafür, dass Zugriffe und Modell-Änderungen durchgängig protokolliert sind.",
      },
      doc_full: {
        tone: "ok" as Tone,
        title: "Audit-Fähigkeit gegeben",
        body: "Lückenlose Nachvollziehbarkeit ist der Kern jeder Prüfung. Halten Sie diesen Stand — er ist Ihr stärkstes Argument.",
      },
      cost_hint: {
        tone: "attention" as Tone,
        title: "Wirtschaftlichkeit mitdenken",
        body: "Wenn ohnehin ein Wechsel weg von der Cloud ansteht, lohnt der Blick auf die Gesamtkosten. Ab stetiger Last rechnet sich eigene Hardware oft schneller als gedacht.",
        link: { href: "/rechner", label: "Zum Kosten-Rechner →" },
      },
    },
  },
  en: {
    ui: {
      progress: (a: number, b: number) => `Question ${a} of ${b}`,
      back: "Back",
      restart: "Start over",
      resultKicker: "Your assessment",
      disclaimer:
        "Orientation aid, not legal advice. The result is based solely on your answers and does not replace a case-by-case review. A binding assessment is made by your legal and compliance owners.",
      toneLabel: { action: "Action needed", attention: "To review", ok: "Solid" },
      ctaTitle: "Let’s sort your topics out together.",
      ctaText:
        "In a 30-minute demo we walk through your points and show how sovereign operation delivers the auditability that is required.",
      ctaBtn: "Book a demo (30 min)",
    },
    questions: {
      sector: {
        q: "Which sector do you operate in?",
        help: "Determines whether NIS2 applies.",
        options: {
          critical: "Critical or important entity (energy, health, finance, public administration, digital services, transport …)",
          other: "Other industry",
          unsure: "Not sure",
        },
      },
      useCase: {
        q: "What do you use AI for — or plan to?",
        help: "Sets the risk class under the EU AI Act.",
        options: {
          highrisk: "Decisions about people (hiring, credit, access, scoring, biometrics)",
          support: "Support for internal processes and knowledge work",
          lowrisk: "Pure text processing without personal reference",
        },
      },
      data: {
        q: "What data does the AI work with?",
        help: "Determines the GDPR requirements.",
        options: {
          sensitive: "Special categories of personal data (health, biometrics etc., Art. 9 GDPR)",
          personal: "Personal data (customers, employees)",
          none: "No personal data",
        },
      },
      deployment: {
        q: "How do you run AI today?",
        help: "Determines your data sovereignty.",
        options: {
          us_cloud: "Cloud API of a US provider",
          eu_cloud: "Cloud API in the “EU region” of a US provider",
          onprem: "On-premise / own infrastructure",
          none: "No AI in use yet",
        },
      },
      documentation: {
        q: "Could you fully evidence access, prompts and the models used?",
        help: "Checks auditability.",
        options: {
          full: "Yes, fully traceable",
          partial: "Partially",
          no: "No or unclear",
        },
      },
    },
    summary: {
      action: "There are points that need action. Tackle them in a structured way — the earlier, the less pressure before the deadlines.",
      attention: "Solid in principle, but some points you should review and document.",
      ok: "Your starting position looks solid. Keep it evidenced — in an audit that is half the battle.",
    },
    findings: {
      aiact_high: {
        tone: "action" as Tone,
        title: "EU AI Act: high-risk likely",
        body: "AI that decides about people is likely to fall into the high-risk class. From 2 August 2026 it carries duties for risk management, logging and human oversight.",
        link: { href: "/en/insights/eu-ai-act-frist-2026", label: "The EU AI Act & the 2026 deadline →" },
      },
      aiact_support: {
        tone: "attention" as Tone,
        title: "EU AI Act: transparency duties possible",
        body: "Supporting AI is usually not high-risk but can trigger transparency and labelling duties. Check the classification before the use case grows.",
        link: { href: "/en/insights/eu-ai-act-frist-2026", label: "The EU AI Act explained →" },
      },
      nis2_critical: {
        tone: "action" as Tone,
        title: "NIS2 applies to you",
        body: "As a critical or important entity you fall under NIS2’s extended cybersecurity duties — including management liability. Your AI stack is part of that risk management.",
        link: { href: "/en/insights/nis2-ki-betrieb", label: "NIS2 & running AI →" },
      },
      nis2_unsure: {
        tone: "attention" as Tone,
        title: "Clarify NIS2 scope",
        body: "NIS2’s scope is broader than many assume. Clarify early whether you count as an important entity — the duties have lead time.",
        link: { href: "/en/insights/nis2-ki-betrieb", label: "NIS2 made clear →" },
      },
      sovereignty_us: {
        tone: "action" as Tone,
        title: "Data outflow via US cloud",
        body: "Sending personal data to a US cloud potentially exposes it to the US CLOUD Act — regardless of server location. For sensitive data that is a real compliance risk.",
        link: { href: "/en/insights/datensouveraenitaet-cloud-act", label: "GDPR, Schrems II & CLOUD Act →" },
      },
      sovereignty_eu: {
        tone: "attention" as Tone,
        title: "An “EU region” is not automatically enough",
        body: "A European data centre run by a US provider does not remove US access rights. For personal data you should robustly document the legal basis of the transfer.",
        link: { href: "/en/insights/datensouveraenitaet-cloud-act", label: "Why the EU region isn’t enough →" },
      },
      sovereignty_onprem: {
        tone: "ok" as Tone,
        title: "Data stays under your control",
        body: "On-premise operation means your data never leaves your infrastructure. That is the strongest starting position for GDPR and data sovereignty.",
      },
      doc_no: {
        tone: "action" as Tone,
        title: "Evidence is missing",
        body: "Without complete logs of access, prompts and models an audit is hard to pass. A sovereign operating layer produces exactly this audit trail automatically.",
        link: { href: "/en/insights/eu-ai-act-frist-2026", label: "What an audit demands →" },
      },
      doc_partial: {
        tone: "attention" as Tone,
        title: "Evidence has gaps",
        body: "Partial documentation rarely suffices when it counts. Make sure access and model changes are logged end to end.",
      },
      doc_full: {
        tone: "ok" as Tone,
        title: "Auditability in place",
        body: "Complete traceability is the core of any audit. Keep this standard — it is your strongest argument.",
      },
      cost_hint: {
        tone: "attention" as Tone,
        title: "Factor in economics",
        body: "If a move away from the cloud is coming anyway, look at total cost. From steady load your own hardware often pays off faster than expected.",
        link: { href: "/en/rechner", label: "To the cost calculator →" },
      },
    },
  },
} as const;

function buildFindings(lang: Lang, a: Answers): Finding[] {
  const f = T[lang].findings;
  const out: Finding[] = [];
  const push = (key: keyof typeof f) => out.push({ id: key, ...f[key] });

  // EU AI Act
  if (a.useCase === "highrisk") push("aiact_high");
  else if (a.useCase === "support") push("aiact_support");

  // NIS2
  if (a.sector === "critical") push("nis2_critical");
  else if (a.sector === "unsure") push("nis2_unsure");

  // Datensouveränität
  const hasPersonal = a.data === "sensitive" || a.data === "personal";
  if (a.deployment === "us_cloud" && hasPersonal) push("sovereignty_us");
  else if (a.deployment === "eu_cloud" && hasPersonal) push("sovereignty_eu");
  else if (a.deployment === "onprem") push("sovereignty_onprem");

  // Dokumentation / Audit
  if (a.documentation === "no") push("doc_no");
  else if (a.documentation === "partial") push("doc_partial");
  else if (a.documentation === "full") push("doc_full");

  // Wirtschaftlichkeit — nur wenn Cloud + personenbezogen (Wechsel-Anlass)
  if ((a.deployment === "us_cloud" || a.deployment === "eu_cloud") && hasPersonal) push("cost_hint");

  // Sortierung: action → attention → ok
  const order: Record<Tone, number> = { action: 0, attention: 1, ok: 2 };
  return out.sort((x, y) => order[x.tone] - order[y.tone]);
}

const TONE_STYLES: Record<Tone, { box: string; icon: string; badge: string }> = {
  action: {
    box: "border-azul-200 bg-azul-50",
    icon: "text-azul-600",
    badge: "bg-azul-100 text-azul-700",
  },
  attention: {
    box: "border-amber-600/25 bg-amber-100",
    icon: "text-amber-600",
    badge: "bg-amber-100 text-amber-600",
  },
  ok: {
    box: "border-green-600/20 bg-green-100",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-600",
  },
};

function ToneIcon({ tone, className }: { tone: Tone; className?: string }) {
  if (tone === "action") return <AlertTriangle className={className} />;
  if (tone === "attention") return <Info className={className} />;
  return <ShieldCheck className={className} />;
}

export function ComplianceCheck({ lang = "de" }: { lang?: Lang }) {
  const t = T[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const total = QUESTIONS.length;
  const done = step >= total;

  const findings = useMemo(() => (done ? buildFindings(lang, answers) : []), [done, lang, answers]);
  const overallTone: Tone = findings.some((x) => x.tone === "action")
    ? "action"
    : findings.some((x) => x.tone === "attention")
      ? "attention"
      : "ok";

  const select = (qid: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
    setStep((s) => s + 1);
  };
  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  if (done) {
    return (
      <div className="flex flex-col gap-6">
        <div className={`rounded-xl border p-6 sm:p-7 ${TONE_STYLES[overallTone].box}`}>
          <div className="flex items-start gap-3.5">
            <ToneIcon tone={overallTone} className={`mt-0.5 h-6 w-6 shrink-0 ${TONE_STYLES[overallTone].icon}`} />
            <div>
              <div className="kicker mb-1">{t.ui.resultKicker}</div>
              <p className="text-md leading-relaxed text-ink-800">{t.summary[overallTone]}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {findings.map((fd) => {
            const s = TONE_STYLES[fd.tone];
            return (
              <div key={fd.id} className={`rounded-lg border p-5 ${s.box}`}>
                <div className="flex items-center gap-2.5">
                  <ToneIcon tone={fd.tone} className={`h-4 w-4 shrink-0 ${s.icon}`} />
                  <h3 className="text-md font-semibold text-ink-900">{fd.title}</h3>
                  <span
                    className={`ml-auto rounded-xs px-2 py-0.5 text-2xs font-semibold uppercase tracking-[0.06em] ${s.badge}`}
                  >
                    {t.ui.toneLabel[fd.tone]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{fd.body}</p>
                {fd.link && (
                  <a
                    href={fd.link.href}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-azul-600 hover:text-azul-700"
                  >
                    {fd.link.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl bg-ink-900 p-7 sm:p-8">
          <h3 className="text-display-sm font-semibold text-on-dark">{t.ui.ctaTitle}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-on-dark-muted">{t.ui.ctaText}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
              {t.ui.ctaBtn}
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-on-dark-muted hover:text-on-dark"
            >
              <RotateCcw className="h-4 w-4" />
              {t.ui.restart}
            </button>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-ink-400">{t.ui.disclaimer}</p>
      </div>
    );
  }

  const current = QUESTIONS[step];
  const q = t.questions[current.id];
  const pct = (step / total) * 100;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-medium text-ink-500">
          <span className="font-mono">{t.ui.progress(step + 1, total)}</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-azul-600 transition-[width] duration-300 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-display-sm font-semibold tracking-[-0.025em] text-ink-900">{q.q}</h2>
        <p className="mt-1.5 text-sm text-ink-500">{q.help}</p>
      </div>

      <div className="flex flex-col gap-2.5">
        {current.values.map((v) => {
          const selected = answers[current.id] === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => select(current.id, v)}
              className={`group flex items-center gap-3 rounded-lg border p-4 text-left transition-colors ${
                selected
                  ? "border-azul-400 bg-azul-50"
                  : "border-stone-200 bg-stone-0 hover:border-azul-300 hover:bg-azul-50/40"
              }`}
            >
              <span
                className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
                  selected ? "border-azul-600 bg-azul-600" : "border-stone-300 group-hover:border-azul-400"
                }`}
              />
              <span className="text-sm leading-snug text-ink-800">
                {q.options[v as keyof typeof q.options]}
              </span>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-stone-300 transition-colors group-hover:text-azul-500" />
            </button>
          );
        })}
      </div>

      {step > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.ui.back}
          </button>
        </div>
      )}
    </div>
  );
}
