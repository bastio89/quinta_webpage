import { DoorOpen, Cpu, LayoutDashboard, BookOpen, Database, ArrowRight, ArrowDown } from "lucide-react";

const FLOW = [
  {
    icon: DoorOpen,
    name: "Gateway",
    pkg: "quinta-gateway",
    role: "Der Pförtner",
    text: "Nimmt jede KI-Anfrage OpenAI-kompatibel entgegen, prüft den API-Schlüssel, routet an den passenden Rechner und zählt den Verbrauch.",
  },
  {
    icon: Cpu,
    name: "Daemon",
    pkg: "quinta-daemon",
    role: "Der Arbeiter",
    text: "Läuft auf jedem Rechner mit GPU, lädt Modelle herunter, startet sie über Ollama oder vLLM und meldet sich automatisch an der Zentrale an.",
  },
];

const SUPPORT = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    pkg: "quinta-dashboard",
    role: "Das Cockpit",
    text: "Web-Oberfläche für Deployments, API-Keys, Organisationen, Rollen, Verbrauch und Metriken.",
  },
  {
    icon: BookOpen,
    name: "Infoserver",
    pkg: "quinta-infoserver",
    role: "Der Katalog",
    text: "Verzeichnis aller Modelle, die Quinta kennt und automatisch bereitstellen kann.",
  },
  {
    icon: Database,
    name: "Datenbank & Co.",
    pkg: "Postgres · Redis",
    role: "Das Gedächtnis",
    text: "Speichert Benutzer, Schlüssel, Deployments und Verbrauch. Fertig verpackt, nichts manuell einzurichten.",
  },
];

export function Architecture() {
  return (
    <section id="architektur" className="bg-mist-50 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-sovereign-600">Architektur</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Fünf Bausteine, ein Kreislauf im eigenen Haus
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-mist-700">
            Jede Anfrage bleibt vollständig innerhalb Ihrer Infrastruktur — vom Mitarbeitenden
            bis zum antwortenden Modell.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {/* Primärer Anfragepfad */}
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            <div className="card-surface flex-1 px-5 py-5 text-center">
              <p className="font-mono text-xs text-mist-600">Mitarbeiter · App · Software</p>
              <p className="mt-1 text-sm font-medium text-ink-900">„Schreibe mir eine E-Mail…“ + API-Key</p>
            </div>
            <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-mist-500 lg:block" />
            <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-mist-500 lg:hidden" />

            {FLOW.map((step, i) => (
              <div key={step.name} className="contents">
                <div className="flex-1 rounded-xl border border-sovereign-200 bg-sovereign-50 px-5 py-5 text-center shadow-card">
                  <step.icon className="mx-auto h-6 w-6 text-sovereign-700" strokeWidth={1.75} />
                  <p className="mt-2 text-sm font-semibold text-ink-950">{step.name}</p>
                  <p className="font-mono text-[11px] text-sovereign-700">{step.role}</p>
                </div>
                {i < FLOW.length - 1 ? (
                  <>
                    <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-mist-500 lg:block" />
                    <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-mist-500 lg:hidden" />
                  </>
                ) : null}
              </div>
            ))}

            <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-mist-500 lg:block" />
            <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-mist-500 lg:hidden" />
            <div className="flex-1 rounded-xl border border-gold-300 bg-gold-50 px-5 py-5 text-center shadow-card">
              <p className="text-sm font-semibold text-ink-950">KI-Modell</p>
              <p className="font-mono text-[11px] text-gold-700">Ollama / vLLM</p>
            </div>
          </div>

          {/* Unterstützende Bausteine */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SUPPORT.map((item) => (
              <div key={item.name} className="card-surface p-6">
                <item.icon className="h-6 w-6 text-sovereign-700" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold text-ink-950">
                  {item.name} <span className="font-mono text-xs font-normal text-mist-600">· {item.pkg}</span>
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wide text-sovereign-700">{item.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist-700">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-mist-600">
            Merksatz: <span className="text-ink-800">Gateway = Eingang für Anfragen · Dashboard = Eingang für Menschen ·
            Daemon = läuft dort, wo die Grafikkarte steckt.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
