import Image from "next/image";
import { Scale, Landmark, Factory, Building } from "lucide-react";

const USE_CASES = [
  {
    icon: Scale,
    title: "Kanzleien & Beratungen",
    image: "/images/usecases/law.jpg",
    problem: "Mandantendaten dürfen keine Cloud-KI eines Drittanbieters durchlaufen.",
    solution: "Quinta bleibt vollständig im eigenen Netz — Mandantengeheimnis bleibt gewahrt.",
  },
  {
    icon: Landmark,
    title: "Banken & Versicherungen",
    image: "/images/usecases/bank.jpg",
    problem: "Regulatorik verlangt nachvollziehbare, prüfbare KI-Nutzung.",
    solution: "Audit-Trail, RBAC und Instance-Admin schaffen die geforderte Governance.",
  },
  {
    icon: Factory,
    title: "Industrie & Mittelstand",
    image: "/images/usecases/factory.jpg",
    problem: "Betriebsgeheimnisse und Konstruktionsdaten sollen nicht an US-Clouds fließen.",
    solution: "KI-Modelle laufen auf eigener Hardware, vom Einzelrechner bis zum GPU-Server.",
  },
  {
    icon: Building,
    title: "Behörden & öffentliche Hand",
    image: "/images/usecases/government.jpg",
    problem: "Datenschutz und Souveränität stehen vor Feature-Wettrennen.",
    solution: "Selbst gehostet, offen einsehbarer Kern, volle Kontrolle über den Standort.",
  },
];

export function UseCases() {
  return (
    <section className="border-y border-stone-300 bg-stone-100 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-azul-600">Für wen Quinta gebaut ist</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Überall dort, wo Daten das Haus nicht verlassen dürfen
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <div key={uc.title} className="card-surface overflow-hidden p-0">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-900">
                <Image
                  src={uc.image}
                  alt={uc.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-lg bg-stone-50/95 px-3 py-2 shadow-card backdrop-blur">
                  <div className="inline-flex rounded-md bg-azul-50 p-1.5 text-azul-700">
                    <uc.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-950">{uc.title}</h3>
                </div>
              </div>
              <div className="space-y-3 p-7 text-sm leading-relaxed">
                <p className="text-ink-700">
                  <span className="font-semibold text-error">Heute:</span> {uc.problem}
                </p>
                <p className="text-ink-700">
                  <span className="font-semibold text-azul-700">Mit Quinta:</span> {uc.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
