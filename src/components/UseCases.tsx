import { Scale, Landmark, Factory, Building } from "lucide-react";

const USE_CASES = [
  {
    icon: Scale,
    title: "Kanzleien & Beratungen",
    problem: "Mandantendaten dürfen keine Cloud-KI eines Drittanbieters durchlaufen.",
    solution: "Quinta bleibt vollständig im eigenen Netz — Mandantengeheimnis bleibt gewahrt.",
  },
  {
    icon: Landmark,
    title: "Banken & Versicherungen",
    problem: "Regulatorik verlangt nachvollziehbare, prüfbare KI-Nutzung.",
    solution: "Audit-Trail, RBAC und Instance-Admin schaffen die geforderte Governance.",
  },
  {
    icon: Factory,
    title: "Industrie & Mittelstand",
    problem: "Betriebsgeheimnisse und Konstruktionsdaten sollen nicht an US-Clouds fließen.",
    solution: "KI-Modelle laufen auf eigener Hardware, vom Einzelrechner bis zum GPU-Server.",
  },
  {
    icon: Building,
    title: "Behörden & öffentliche Hand",
    problem: "Datenschutz und Souveränität stehen vor Feature-Wettrennen.",
    solution: "Selbst gehostet, offen einsehbarer Kern, volle Kontrolle über den Standort.",
  },
];

export function UseCases() {
  return (
    <section className="border-y border-mist-300 bg-mist-100 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-sovereign-600">Für wen Quinta gebaut ist</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Überall dort, wo Daten das Haus nicht verlassen dürfen
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <div key={uc.title} className="card-surface p-7">
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-sovereign-50 p-2.5 text-sovereign-700">
                  <uc.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-ink-950">{uc.title}</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed">
                <p className="text-mist-700">
                  <span className="font-semibold text-error">Heute:</span> {uc.problem}
                </p>
                <p className="text-mist-700">
                  <span className="font-semibold text-sovereign-700">Mit Quinta:</span> {uc.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
