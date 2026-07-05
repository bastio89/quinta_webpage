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
    href: "/vergleich",
    category: "Vergleich",
    title: "Quinta im Vergleich zu Ollama, vLLM und LocalAI",
    excerpt:
      "Ollama, vLLM und LocalAI führen ein Modell aus. Quinta ist die Betriebsschicht darum herum — Zugriffskontrolle, Orchestrierung, Governance und Audit. Der ehrliche Vergleich.",
    date: "2026-07-01",
    readingMinutes: 5,
  },
];

export function formatInsightDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
