const STEPS = [
  {
    n: "01",
    title: "Planen",
    time: "30 Minuten",
    text: "Ein Gespräch: Ihre Anwendungsfälle, Ihre Hardware, Ihr Compliance-Rahmen. Danach steht der Deployment-Plan.",
  },
  {
    n: "02",
    title: "Deployen",
    time: "Stunden, nicht Monate",
    text: "Quinta-Daemon auf Ihre GPU-Rechner, Gateway und Dashboard dazu — Knoten registrieren sich selbst, Modelle starten automatisch.",
  },
  {
    n: "03",
    title: "Betreiben",
    time: "laufend",
    text: "Deployments per Klick, API-Keys, Verbrauch pro Einheit, Prometheus-Metriken und lückenloser Audit-Trail im Dashboard.",
  },
];

export function Rollout() {
  return (
    <section id="einfuehrung" className="container-quinta pt-24 sm:pt-32">
      <div className="mb-12 max-w-[640px]">
        <div className="kicker mb-3.5">So läuft die Einführung</div>
        <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
          Drei Schritte bis zum eigenen KI-Dienst.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.n} className="card-surface p-7">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm font-semibold text-azul-600">{step.n}</span>
              <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-ink-400">
                {step.time}
              </span>
            </div>
            <h3 className="mt-3.5 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-500">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
