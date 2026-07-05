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
    readingMinutes: 11,
  },
  {
    href: "/insights/bounded-admission-last",
    category: "Architektur",
    title: "Bounded Admission: warum ein Inferenz-Server unter Last kippt",
    excerpt:
      "18× höhere Erfolgsquote bei identischer Engine — der Unterschied liegt nicht im Modell, sondern in der Warteschlange. Wie ein Gateway Überlast dosiert, statt daran zu zerbrechen.",
    date: "2026-07-04",
    readingMinutes: 10,
  },
  {
    href: "/insights/datensouveraenitaet-cloud-act",
    category: "Datensouveränität",
    title: "DSGVO, Schrems II und der US CLOUD Act: warum die „EU-Region“ nicht genügt",
    excerpt:
      "Ein europäisches Rechenzentrum eines US-Anbieters hebt die US-Zugriffsrechte nicht auf. Warum echte Datensouveränität heißt, dass Daten Ihre Kontrolle nie verlassen.",
    date: "2026-07-03",
    readingMinutes: 11,
  },
  {
    href: "/insights/on-premise-vs-cloud-kosten",
    category: "Wirtschaftlichkeit",
    title: "On-Premise vs. Cloud-KI: die ehrliche Kostenrechnung",
    excerpt:
      "Cloud-KI heißt mieten, On-Premise heißt besitzen. Was die Token-Rechnung verschweigt, wo der Break-even liegt — und wann sich eigene Hardware wirklich rechnet.",
    date: "2026-07-02",
    readingMinutes: 10,
  },
  {
    href: "/vergleich",
    category: "Vergleich",
    title: "Quinta im Vergleich zu vLLM, LocalAI und anderen Inferenz-Motoren",
    excerpt:
      "vLLM, LocalAI und andere Inferenz-Motoren führen ein Modell aus. Quinta ist die Betriebsschicht darum herum — Zugriffskontrolle, Orchestrierung, Governance und Audit. Der ehrliche Vergleich.",
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
    readingMinutes: 10,
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
    readingMinutes: 11,
  },
  {
    href: "/en/insights/bounded-admission-last",
    category: "Architecture",
    title: "Bounded admission: why an inference server buckles under load",
    excerpt:
      "18× higher success rate on the same engine — the difference is not the model, it’s the queue. How a gateway meters overload instead of breaking under it.",
    date: "2026-07-04",
    readingMinutes: 10,
  },
  {
    href: "/en/insights/datensouveraenitaet-cloud-act",
    category: "Data sovereignty",
    title: "GDPR, Schrems II and the US CLOUD Act: why an “EU region” is not enough",
    excerpt:
      "A European data centre run by a US provider does not remove US access rights. Why real data sovereignty means your data never leaves your control.",
    date: "2026-07-03",
    readingMinutes: 11,
  },
  {
    href: "/en/insights/on-premise-vs-cloud-kosten",
    category: "Economics",
    title: "On-premise vs. cloud AI: the honest cost calculation",
    excerpt:
      "Cloud AI means renting, on-premise means owning. What the token bill hides, where the break-even sits — and when your own hardware really pays off.",
    date: "2026-07-02",
    readingMinutes: 10,
  },
  {
    href: "/en/vergleich",
    category: "Comparison",
    title: "Quinta compared to vLLM, LocalAI and other inference engines",
    excerpt:
      "vLLM, LocalAI and other inference engines run a model. Quinta is the operating layer around it — access control, orchestration, governance and audit. The honest comparison.",
    date: "2026-07-01",
    readingMinutes: 5,
  },
  {
    href: "/en/insights/nis2-ki-betrieb",
    category: "Compliance",
    title: "NIS2 and running AI: the second regulation that applies to you",
    excerpt:
      "Beyond the EU AI Act, NIS2 extends cybersecurity duties to many industries — with management liability. What that means for your AI stack.",
    date: "2026-06-30",
    readingMinutes: 10,
  },
];

export function formatInsightDate(iso: string, lang: "de" | "en" = "de"): string {
  return new Date(iso).toLocaleDateString(lang === "en" ? "en-GB" : "de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
