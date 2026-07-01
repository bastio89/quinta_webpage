import { Check, Minus, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/cn";

type Cell = true | false | string;

const TIERS = [
  { key: "business", name: "Business", price: "Auf Anfrage", period: "Lizenz je Standort/Instanz", highlight: true },
  { key: "enterprise", name: "Enterprise", price: "Individuell", period: "Custom-Vertrag & SLA", highlight: false },
] as const;

const GROUPS: { label: string; rows: { feature: string; cells: [Cell, Cell] }[] }[] = [
  {
    label: "Infrastruktur",
    rows: [
      { feature: "Quinta Gateway & Daemon", cells: [true, true] },
      { feature: "Austauschbare Inferenz-Backends", cells: [true, true] },
      { feature: "OpenAI-kompatible API", cells: [true, true] },
      { feature: "Anzahl Rechenknoten", cells: ["Mehrere", "Unbegrenzt"] },
      { feature: "Multi-Standort-Deployment", cells: [false, true] },
    ],
  },
  {
    label: "Zugriff & Nutzer",
    rows: [
      { feature: "Organisationen", cells: ["Unbegrenzt", "Unbegrenzt"] },
      { feature: "API-Keys & Scopes", cells: [true, true] },
      { feature: "Rollen (RBAC)", cells: [true, true] },
      { feature: "Kommerzielle Nutzung", cells: [true, true] },
    ],
  },
  {
    label: "Verwaltung",
    rows: [
      { feature: "Modell-Management", cells: [true, true] },
      { feature: "Usage-Analytics & Metrics", cells: [true, true] },
      { feature: "Instance-Admin & Einladungen", cells: [true, true] },
      { feature: "SSO / SAML", cells: [false, true] },
      { feature: "2FA & Passkeys", cells: [false, true] },
      { feature: "Audit-Trail", cells: [false, true] },
      { feature: "Fine-Tuning-UI & MCP", cells: [false, true] },
    ],
  },
  {
    label: "Support",
    rows: [
      { feature: "Support-Kanal", cells: ["E-Mail", "Slack / Teams"] },
      { feature: "Reaktionszeit", cells: ["24 h", "Custom"] },
      { feature: "Fester Ansprechpartner", cells: [false, true] },
      { feature: "Jährlicher Vor-Ort-Check", cells: [false, true] },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-sovereign-600" strokeWidth={2.5} />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-mist-400" strokeWidth={2} />;
  return <span className="text-sm font-medium text-ink-800">{value}</span>;
}

export function Editions() {
  return (
    <section id="funktionen" className="bg-mist-50 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-sovereign-600">Editionen &amp; Funktionen</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Business und Enterprise — für den produktiven Einsatz
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-mist-700">
            Beide Editionen laufen vollständig auf Ihrer eigenen Infrastruktur. Der
            Unterschied liegt in Skalierung, Governance und Supportumfang.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl overflow-x-auto rounded-2xl border border-mist-300 bg-mist-50 shadow-card">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-1/3 border-b border-mist-300 px-6 pb-6 pt-6 align-bottom" />
                {TIERS.map((tier) => (
                  <th
                    key={tier.key}
                    className={cn(
                      "relative w-1/3 border-b border-mist-300 px-6 pb-6 align-bottom",
                      tier.highlight ? "bg-sovereign-50 pt-10" : "pt-6",
                    )}
                  >
                    {tier.highlight && (
                      <span className="absolute left-1/2 top-3 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-sovereign-600 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-mist-50">
                        <BadgeCheck className="h-3 w-3" /> Empfohlen
                      </span>
                    )}
                    <p className="text-sm font-semibold text-ink-950">{tier.name}</p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink-950">{tier.price}</p>
                    <p className="mt-1 font-mono text-[11px] text-mist-600">{tier.period}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((group) => (
                <>
                  <tr key={group.label} className="bg-mist-100">
                    <td
                      colSpan={3}
                      className="px-6 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-sovereign-700"
                    >
                      {group.label}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-mist-200 last:border-b-0">
                      <td className="px-6 py-3.5 text-sm text-ink-800">{row.feature}</td>
                      {row.cells.map((cell, i) => (
                        <td
                          key={i}
                          className={cn("px-6 py-3.5 text-center", TIERS[i].highlight && "bg-sovereign-50/60")}
                        >
                          <CellValue value={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-mist-600">
          Alle Preise auf Basis von Selbsthosting auf Ihrer eigenen Hardware. Setup-Unterstützung
          und Betrieb vor Ort werden individuell in der Offerte festgelegt.
        </p>
      </div>
    </section>
  );
}
