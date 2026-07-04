import { CloudUpload, Receipt, Link2 } from "lucide-react";

const ITEMS = [
  {
    icon: CloudUpload,
    title: "Daten verlassen Europa",
    text: "Sensibelste Unternehmensdaten gehen heute an US-Cloud-APIs — ohne Audit-Trail, mit GDPR-, EU-AI-Act- und NIS2-Risiko.",
  },
  {
    icon: Receipt,
    title: "Kosten ohne Obergrenze",
    text: "Token-Abrechnung macht KI-Budgets unkalkulierbar. Jeder neue Anwendungsfall verteuert den Betrieb weiter.",
  },
  {
    icon: Link2,
    title: "Abhängigkeit von Anbietern",
    text: "Modelle, Preise und Verfügbarkeit bestimmt ein fremder Anbieter. Ein API-Wechsel bedeutet heute Umbau statt Umzug.",
  },
];

export function Risk() {
  return (
    <section className="container-quinta pb-32">
      <div className="mb-12 max-w-[640px]">
        <div className="kicker mb-3.5">Das Risiko heute</div>
        <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
          Cloud-KI heißt: fremde Infrastruktur, fremde Regeln.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card-surface p-7">
            <Icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
            <h3 className="mt-4 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
