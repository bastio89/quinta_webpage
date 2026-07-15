import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { GrowBar } from "@/components/motion/GrowBar";

const STATS = [
  {
    prefix: "",
    value: 18,
    suffix: "×",
    label: "höhere Erfolgsquote unter Extremlast",
    sub: "Das Gateway dosiert Anfragen (bounded admission) und fängt Fehler ab, bevor Nutzer sie sehen — gegenüber dem blanken Inferenz-Server.",
    accent: true,
  },
  {
    prefix: "~",
    value: 56,
    suffix: " ms",
    label: "zusätzliche Erst-Latenz",
    sub: "Reiner Netzwerkweg durch die Plattform-Schicht — die Token-Rate pro Nutzer bleibt identisch.",
    accent: false,
  },
  {
    prefix: "",
    value: 512,
    suffix: "",
    label: "gleichzeitige Anfragen im Test",
    sub: "31.200 Requests insgesamt, Quinta-Gateway vs. vLLM pur.",
    accent: false,
  },
];

export function Benchmarks() {
  return (
    <section id="leistung" className="bg-ink-900 py-24 lg:py-28">
      <div className="container-quinta">
        <div className="mb-16 max-w-[720px]">
          <div className="kicker kicker--on-dark mb-3.5">Leistung</div>
          <h2 className="text-display-md font-semibold text-on-dark sm:text-display-lg">
            Souveränität kostet keine Leistung — sie liefert sie.
          </h2>
        </div>

        <div className="mb-16 grid gap-12 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <CountUp
                prefix={stat.prefix}
                value={stat.value}
                suffix={stat.suffix}
                className={
                  "text-display-xl font-semibold tabular-nums " +
                  (stat.accent ? "text-azul-400" : "text-on-dark")
                }
              />
              <span className="text-sm font-semibold text-on-dark">{stat.label}</span>
              <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-[760px]">
          <div className="flex flex-col gap-3.5">
            <div>
              <div className="mb-1.5 flex justify-between text-xs text-on-dark">
                <span>Erfolgreiche Antworten unter Extremlast — mit Quinta-Gateway</span>
                <span className="font-mono text-signal-green">18×</span>
              </div>
              <div className="h-2.5 rounded-full bg-ink-800">
                <GrowBar width="100%" className="bg-gradient-to-r from-azul-500 to-azul-400" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex justify-between text-xs text-on-dark-muted">
                <span>vLLM pur (blanker Inferenz-Server)</span>
                <span className="font-mono">1×</span>
              </div>
              <div className="h-2.5 rounded-full bg-ink-800">
                <GrowBar width="5.6%" className="bg-ink-500" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-on-dark-muted">
            Benchmark der zugrunde liegenden Engine, gemessen auf NVIDIA DGX Spark (128 GB): 31.200
            Requests, bis 512 gleichzeitige Anfragen, Quinta-Gateway gegen vLLM pur. Identische
            Token-Rate pro Nutzer.
          </p>
          <Link
            href="/benchmark"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-400 hover:text-azul-300"
          >
            Zum ausführlichen Benchmark — Aufbau, Zahlen, Einordnung
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
