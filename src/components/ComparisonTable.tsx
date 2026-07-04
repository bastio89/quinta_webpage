import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

type Cell = true | false | string;

const PRODUCTS = [
  { key: "ollama", name: "Ollama", role: "Modell-Runner", highlight: false },
  { key: "vllm", name: "vLLM", role: "Inferenz-Server", highlight: false },
  { key: "localai", name: "LocalAI", role: "Modell-Runner", highlight: false },
  { key: "quinta", name: "quinta.", role: "Betriebsschicht", highlight: true },
] as const;

// Reihenfolge der Zellen: [Ollama, vLLM, LocalAI, Quinta]
const GROUPS: { label: string; rows: { feature: string; cells: [Cell, Cell, Cell, Cell] }[] }[] = [
  {
    label: "Inferenz & API",
    rows: [
      { feature: "Läuft vollständig On-Premise", cells: [true, true, true, true] },
      { feature: "OpenAI-kompatible API", cells: [true, true, true, true] },
      { feature: "Inferenz-Engine", cells: ["llama.cpp", "vLLM", "mehrere", "Ollama + vLLM"] },
      { feature: "Ganzer HuggingFace-Katalog", cells: ["teilweise", true, "teilweise", true] },
      { feature: "Automatischer Modell-Lebenszyklus", cells: [false, false, "teilweise", "Download → Warmup → ready"] },
    ],
  },
  {
    label: "Betrieb & Skalierung",
    rows: [
      { feature: "Skalierung über mehrere Rechner", cells: [false, "manuell", false, "Selbst-Registrierung"] },
      { feature: "GPU-Erkennung (NVIDIA/AMD/Intel)", cells: ["teilweise", "manuell", "teilweise", true] },
      { feature: "Automatisches Routing zwischen Knoten", cells: [false, false, false, true] },
      { feature: "Lastschutz (bounded admission)", cells: [false, false, false, "18× Erfolgsquote"] },
    ],
  },
  {
    label: "Zugriff & Governance",
    rows: [
      { feature: "Authentifizierung & API-Keys", cells: [false, false, "einfach", true] },
      { feature: "Rollen & Rechte (RBAC)", cells: [false, false, false, true] },
      { feature: "Multi-Organisation / Mandantenfähig", cells: [false, false, false, true] },
      { feature: "Enterprise-Login (SSO/SAML, 2FA, Passkeys)", cells: [false, false, false, true] },
      { feature: "Lückenloser Audit-Trail", cells: [false, false, false, true] },
    ],
  },
  {
    label: "Verwaltung",
    rows: [
      { feature: "Verwaltungs-Dashboard", cells: ["CLI", "API", "einfach", true] },
      { feature: "Verbrauchs-Tracking & Prometheus", cells: [false, "Basis", false, true] },
      { feature: "Fine-Tuning-Oberfläche", cells: [false, false, false, true] },
      { feature: "MCP-Schnittstelle", cells: [false, false, false, true] },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-azul-600" strokeWidth={2.5} />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-ink-300" strokeWidth={2} />;
  return <span className="text-[13px] font-medium text-ink-800">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="mx-auto max-w-5xl overflow-x-auto rounded-2xl border border-stone-300 bg-stone-50 shadow-card">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-1/4 border-b border-stone-300 px-5 pb-5 pt-6 align-bottom" />
            {PRODUCTS.map((p) => (
              <th
                key={p.key}
                className={cn(
                  "border-b border-stone-300 px-5 pb-5 align-bottom",
                  p.highlight ? "bg-azul-50 pt-6" : "pt-6",
                )}
              >
                <p
                  className={cn(
                    "font-semibold tracking-[-0.02em]",
                    p.highlight ? "font-display text-lg text-ink-950" : "text-base text-ink-900",
                  )}
                >
                  {p.name}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500">
                  {p.role}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GROUPS.map((group) => (
            <>
              <tr key={group.label} className="bg-stone-100">
                <td
                  colSpan={5}
                  className="px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-azul-700"
                >
                  {group.label}
                </td>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.feature} className="border-b border-stone-200 last:border-b-0">
                  <td className="px-5 py-3.5 text-sm text-ink-800">{row.feature}</td>
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={cn("px-5 py-3.5 text-center", PRODUCTS[i].highlight && "bg-azul-50/60")}
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
  );
}
