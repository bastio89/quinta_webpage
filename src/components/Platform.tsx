import { AppWindow, ShieldCheck, Server, Cpu } from "lucide-react";

const STAGES = [
  { icon: AppWindow, name: "Ihre Anwendung", sub: "OpenAI-SDK, unverändert" },
  { icon: ShieldCheck, name: "Gateway", sub: "Auth · RBAC · Audit · Dosierung" },
  { icon: Server, name: "Daemon", sub: "je GPU-Rechner, selbstregistrierend" },
  { icon: Cpu, name: "Modell", sub: "vLLM oder Modell-Runner" },
];

const MODELS = ["llama", "mistral", "qwen", "gemma", "deepseek"];

export function Platform() {
  return (
    <section id="plattform" className="bg-ink-900 py-24 lg:py-28">
      <div className="container-quinta">
        <div className="mb-14 max-w-[680px]">
          <div className="kicker kicker--on-dark mb-3.5">Die Plattform</div>
          <h2 className="text-display-md font-semibold text-on-dark sm:text-display-lg">
            Kein Model-Runner.
            <br />
            Die komplette Betriebsschicht.
          </h2>
          <p className="mt-5 leading-relaxed text-on-dark-muted">
            Jede Anfrage nimmt denselben Weg: durch das Gateway (Pförtner), zum Daemon auf Ihrem
            GPU-Rechner, ins Modell — verbunden über eine zentrale Registry. Jeder weitere Rechner
            mit dem Quinta-Daemon wird automatisch Teil der Plattform.
          </p>
        </div>

        <div className="flex items-stretch overflow-x-auto">
          {STAGES.map((stage, i) => (
            <div key={stage.name} className="flex items-center">
              <div className="w-[220px] flex-none rounded-md border border-on-dark/10 bg-ink-850 p-5 shadow-inset-dark sm:w-60">
                <stage.icon className="h-5 w-5 text-azul-400" strokeWidth={1.75} />
                <div className="mt-3 text-md font-semibold text-on-dark">{stage.name}</div>
                <div className="mt-1 text-xs leading-snug text-on-dark-muted">{stage.sub}</div>
              </div>
              {i < STAGES.length - 1 && (
                <div className="flex w-14 flex-none items-center px-2">
                  <div className="relative h-px w-full bg-on-dark/10">
                    <span
                      className="flow-dot"
                      style={{ animationDelay: `${i * 0.85}s` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-on-dark/10 bg-ink-850 p-5 shadow-inset-dark">
            <div className="flex items-center gap-2.5">
              <span className="text-md font-semibold text-on-dark">vLLM</span>
              <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-signal-green">
                Produktion
              </span>
            </div>
            <p className="mt-2 mb-3.5 text-sm leading-relaxed text-on-dark-muted">
              Hochleistungs-Inferenz für den ganzen HuggingFace-Katalog. Vollautomatischer
              Lebenszyklus: Download → Start → Health-Check → Warmup → ready.
            </p>
            <div className="flex flex-wrap gap-2">
              {MODELS.map((m) => (
                <span key={m} className="tag-quinta">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-on-dark/10 bg-ink-850 p-5 shadow-inset-dark">
            <div className="flex items-center gap-2.5">
              <span className="text-md font-semibold text-on-dark">Leichter Modell-Runner</span>
              <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-azul-400">
                Einstieg
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
              Der einfache Weg zum ersten Modell — von der Workstation bis zur KI-Appliance der
              DGX-Spark-Klasse. GPU-Erkennung für NVIDIA, AMD und Intel, automatisches Routing
              inklusive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
