export type InsightMeta = {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
};

export const INSIGHTS: InsightMeta[] = [
  {
    href: "/insights/eu-ai-act-frist-2026",
    category: "Compliance",
    title: "Der EU AI Act und die Frist am 2. August 2026",
    excerpt:
      "Ab dem 2. August 2026 gilt eine zentrale Tranche des EU AI Act. Was das für Hochrisiko-KI bedeutet — und warum Souveränität die Dokumentation liefert, die eine Prüfung verlangt.",
    date: "2026-07-05",
    readingMinutes: 6,
  },
  {
    href: "/insights/bounded-admission-last",
    category: "Architektur",
    title: "Bounded Admission: warum ein Inferenz-Server unter Last kippt",
    excerpt:
      "18× höhere Erfolgsquote bei identischer Engine — der Unterschied liegt nicht im Modell, sondern in der Warteschlange. Wie ein Gateway Überlast dosiert, statt daran zu zerbrechen.",
    date: "2026-07-04",
    readingMinutes: 6,
  },
  {
    href: "/insights/datensouveraenitaet-cloud-act",
    category: "Datensouveränität",
    title: "DSGVO, Schrems II und der US CLOUD Act: warum die „EU-Region“ nicht genügt",
    excerpt:
      "Ein europäisches Rechenzentrum eines US-Anbieters hebt die US-Zugriffsrechte nicht auf. Warum echte Datensouveränität heißt, dass Daten Ihre Kontrolle nie verlassen.",
    date: "2026-07-03",
    readingMinutes: 7,
  },
  {
    href: "/insights/on-premise-vs-cloud-kosten",
    category: "Wirtschaftlichkeit",
    title: "On-Premise vs. Cloud-KI: die ehrliche Kostenrechnung",
    excerpt:
      "Cloud-KI heißt mieten, On-Premise heißt besitzen. Was die Token-Rechnung verschweigt, wo der Break-even liegt — und wann sich eigene Hardware wirklich rechnet.",
    date: "2026-07-02",
    readingMinutes: 6,
  },
  {
    href: "/vergleich",
    category: "Vergleich",
    title: "Quinta im Vergleich zu Ollama, vLLM und LocalAI",
    excerpt:
      "Ollama, vLLM und LocalAI führen ein Modell aus. Quinta ist die Betriebsschicht darum herum — Zugriffskontrolle, Orchestrierung, Governance und Audit. Der ehrliche Vergleich.",
    date: "2026-07-01",
    readingMinutes: 5,
  },
  {
    href: "/insights/nis2-ki-betrieb",
    category: "Compliance",
    title: "NIS2 und der KI-Betrieb: die zweite Regulatorik, die Sie betrifft",
    excerpt:
      "Neben dem EU AI Act erweitert NIS2 die Cybersicherheitspflichten auf viele Branchen — mit Geschäftsleitungshaftung. Was das für Ihren KI-Stack bedeutet.",
    date: "2026-06-30",
    readingMinutes: 6,
  },
];

export const INSIGHTS_EN: InsightMeta[] = [
  {
    href: "/en/insights/eu-ai-act-frist-2026",
    category: "Compliance",
    title: "The EU AI Act and the 2 August 2026 deadline",
    excerpt:
      "From 2 August 2026 a central tranche of the EU AI Act applies. What that means for high-risk AI — and why sovereignty delivers the documentation an audit demands.",
    date: "2026-07-05",
    readingMinutes: 6,
  },
  {
    href: "/en/vergleich",
    category: "Comparison",
    title: "Quinta compared to Ollama, vLLM and LocalAI",
    excerpt:
      "Ollama, vLLM and LocalAI run a model. Quinta is the operating layer around it — access control, orchestration, governance and audit. The honest comparison.",
    date: "2026-07-01",
    readingMinutes: 5,
  },
];

export function formatInsightDate(iso: string, lang: "de" | "en" = "de"): string {
  return new Date(iso).toLocaleDateString(lang === "en" ? "en-GB" : "de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
