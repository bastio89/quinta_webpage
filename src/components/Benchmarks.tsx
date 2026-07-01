const STATS = [
  { value: "1×", label: "Identische Token-Rate pro Nutzer", detail: "gegenüber vLLM pur, nur ~56 ms zusätzliche Netzwerk-Latenz bis zum ersten Zeichen" },
  { value: "18×", label: "Höhere Erfolgsquote unter Volllast", detail: "das Gateway dosiert Anfragen und hält vLLM im effizienten Bereich" },
  { value: "512", label: "Gleichzeitige Anfragen getestet", detail: "31.200 Requests pro Lauf auf einem NVIDIA DGX Spark (128 GB)" },
];

export function Benchmarks() {
  return (
    <section id="benchmarks" className="bg-ink-950 py-24 text-mist-50 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-sovereign-300">Benchmarks</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Souveränität kostet keine Leistung
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-mist-400">
            Gemessen mit dem Quinta-Gateway vor vLLM, verglichen gegen vLLM pur — auf
            derselben Geräteklasse wie ein Asus GX10 / DGX-Spark.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <p className="font-mono text-5xl font-semibold text-gold-400">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold text-mist-100">{stat.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-mist-500">{stat.detail}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
          Unter Volllast sogar zuverlässiger als vLLM pur: Das Gateway fängt Fehler ab,
          bevor Ihre Nutzer sie sehen.{" "}
          <span className="text-mist-400">
            Benchmark der zugrunde liegenden Open-Source-Engine (Apache 2.0) — Werte aus der
            Plattform-Dokumentation, nicht Quinta-spezifisch gemessen.
          </span>
        </p>
      </div>
    </section>
  );
}
