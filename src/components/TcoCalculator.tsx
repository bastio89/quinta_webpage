"use client";

import { useMemo, useState } from "react";

type Lang = "de" | "en";

const T = {
  de: {
    needs: "Ihr Bedarf",
    requests: "Anfragen pro Monat",
    tokens: "Tokens pro Anfrage",
    cloud: "Cloud",
    cloudPrice: "Cloud-Tarif je 1 Mio. Tokens",
    onprem: "On-Premise",
    hardware: "Hardware (einmalig)",
    amort: "Abschreibung",
    months: "Monate",
    ops: "Strom & Betrieb pro Monat",
    resultCloud: "Cloud",
    resultOnprem: "On-Premise",
    perMonth: "/ Monat",
    plusOnce: "zzgl. einmalig",
    running: "laufend",
    breakevenTitle: "Amortisation",
    breakevenAfter: (m: number) => `Nach rund ${m} Monaten ist On-Premise günstiger.`,
    neverBreakeven: "In diesem Szenario bleibt Cloud günstiger — der Betrieb übersteigt hier die Cloud-Kosten.",
    savings: (v: string, m: number) => `Ersparnis über ${m} Monate: ${v}`,
    extra: (v: string, m: number) => `Mehrkosten über ${m} Monate: ${v}`,
    chartTitle: "Kumulierte Kosten",
    legendCloud: "Cloud",
    legendOnprem: "On-Premise",
    axisMonths: "Monate",
    tokensPerMonth: "Tokens pro Monat",
    disclaimer:
      "Illustrative Modellrechnung — keine Preisaussage. Alle Werte sind frei anpassbar; reale Kosten hängen von Hardware, Auslastung und Tarifen ab. On-Premise-Kosten werden als Hardware (einmalig) plus laufender Betrieb modelliert, Cloud rein nutzungsbasiert.",
    basisTitle: "Grundlage der Voreinstellungen",
    basisIntro:
      "Die Startwerte sind keine Quinta-Preise, sondern öffentlich einsehbare Marktanker — bewusst konservativ gewählt und jederzeit mit den Reglern überschreibbar:",
    basisItems: [
      {
        text: "Cloud-Tarif 0,60 € je 1 Mio. Tokens — angelehnt an die Listenpreise günstiger API-Modelle. OpenAI nennt für GPT-4o mini 0,15 $ (Eingabe) bzw. 0,60 $ (Ausgabe) je 1 Mio. Tokens; leistungsstärkere Modelle liegen um ein Vielfaches darüber.",
        href: "https://developers.openai.com/api/docs/pricing",
        label: "openai.com",
      },
      {
        text: "Auch GitHub Copilot rechnet seit dem 1. Juni 2026 tokenbasiert ab: Input-, Output- und Cache-Tokens werden zu den API-Raten des jeweiligen Modells in AI Credits umgerechnet (1 Credit = 0,01 $), Basisrate 0,80 $ je 1 Mio. Input- und 3,20 $ je 1 Mio. Output-Tokens — zusätzlich zu einem festen monatlichen Credit-Guthaben je Sitz (Business ab 19 $, Enterprise ab 39 $). Das liegt nahe am Nutzungsmodell, das dieser Rechner abbildet.",
        href: "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing",
        label: "docs.github.com",
      },
      {
        text: "Hardware (30.000 €) und Betrieb (400 € / Monat) sind illustrative Annahmen für einen kleinen Inferenz-Server der DGX-Klasse; reale Werte hängen von Ausstattung, Strompreis und Auslastung ab.",
      },
    ],
    basisNote: "Stand der Referenzpreise: Juli 2026, in US-Dollar ausgewiesen. Anbieterpreise können sich jederzeit ändern.",
  },
  en: {
    needs: "Your demand",
    requests: "Requests per month",
    tokens: "Tokens per request",
    cloud: "Cloud",
    cloudPrice: "Cloud rate per 1M tokens",
    onprem: "On-premise",
    hardware: "Hardware (one-off)",
    amort: "Depreciation",
    months: "months",
    ops: "Power & operation per month",
    resultCloud: "Cloud",
    resultOnprem: "On-premise",
    perMonth: "/ month",
    plusOnce: "plus one-off",
    running: "running",
    breakevenTitle: "Break-even",
    breakevenAfter: (m: number) => `After about ${m} months on-premise is cheaper.`,
    neverBreakeven: "In this scenario the cloud stays cheaper — operation exceeds the cloud cost here.",
    savings: (v: string, m: number) => `Savings over ${m} months: ${v}`,
    extra: (v: string, m: number) => `Extra cost over ${m} months: ${v}`,
    chartTitle: "Cumulative cost",
    legendCloud: "Cloud",
    legendOnprem: "On-premise",
    axisMonths: "months",
    tokensPerMonth: "tokens per month",
    disclaimer:
      "Illustrative model calculation — not a price statement. All values are freely adjustable; real costs depend on hardware, utilization and rates. On-premise cost is modelled as hardware (one-off) plus running operation, cloud purely usage-based.",
    basisTitle: "Basis of the default values",
    basisIntro:
      "The starting values are not Quinta prices but publicly available market anchors — deliberately conservative and overridable with the sliders at any time:",
    basisItems: [
      {
        text: "Cloud rate €0.60 per 1M tokens — based on the list prices of low-cost API models. OpenAI lists GPT-4o mini at $0.15 (input) and $0.60 (output) per 1M tokens; more capable models cost several times more.",
        href: "https://developers.openai.com/api/docs/pricing",
        label: "openai.com",
      },
      {
        text: "Since 1 June 2026 GitHub Copilot also bills by token: input, output and cached tokens are converted to AI credits at each model's API rate (1 credit = $0.01), base rate $0.80 per 1M input and $3.20 per 1M output tokens — on top of a fixed monthly credit allowance per seat (Business from $19, Enterprise from $39). That puts it close to the usage model this calculator reflects.",
        href: "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing",
        label: "docs.github.com",
      },
      {
        text: "Hardware (€30,000) and operation (€400 / month) are illustrative assumptions for a small DGX-class inference server; real figures depend on configuration, electricity price and utilization.",
      },
    ],
    basisNote: "Reference prices as of July 2026, stated in US dollars. Provider prices can change at any time.",
  },
} as const;

const HORIZON = 36;

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-ink-700">{label}</span>
        <span className="font-mono text-sm font-semibold text-ink-900 tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-stone-200 accent-azul-600"
      />
    </label>
  );
}

export function TcoCalculator({ lang = "de" }: { lang?: Lang }) {
  const t = T[lang];
  const locale = lang === "en" ? "en-GB" : "de-DE";
  const eur = (n: number) =>
    new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const eur2 = (n: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  const num = (n: number) => new Intl.NumberFormat(locale).format(Math.round(n));

  const [requests, setRequests] = useState(3_000_000);
  const [tokensPerReq, setTokensPerReq] = useState(1_000);
  const [cloudPer1M, setCloudPer1M] = useState(0.6);
  const [hardware, setHardware] = useState(30_000);
  const [amortMonths, setAmortMonths] = useState(36);
  const [ops, setOps] = useState(400);

  const m = useMemo(() => {
    const tokensPerMonth = requests * tokensPerReq;
    const cloudMonthly = (tokensPerMonth / 1_000_000) * cloudPer1M;
    const onpremEffective = hardware / amortMonths + ops; // rechnerisch inkl. Abschreibung
    const denom = cloudMonthly - ops;
    const breakEven = denom > 0 ? hardware / denom : null;
    const cloudCum = (mo: number) => mo * cloudMonthly;
    const onpremCum = (mo: number) => hardware + mo * ops;
    const points = Array.from({ length: HORIZON + 1 }, (_, i) => ({
      x: i,
      cloud: cloudCum(i),
      onprem: onpremCum(i),
    }));
    const savings = cloudCum(HORIZON) - onpremCum(HORIZON);
    const maxY = Math.max(cloudCum(HORIZON), onpremCum(HORIZON), 1);
    return { tokensPerMonth, cloudMonthly, onpremEffective, breakEven, points, savings, maxY };
  }, [requests, tokensPerReq, cloudPer1M, hardware, amortMonths, ops]);

  // Chart-Geometrie
  const W = 420;
  const H = 200;
  const PAD = { l: 8, r: 8, t: 10, b: 20 };
  const px = (x: number) => PAD.l + (x / HORIZON) * (W - PAD.l - PAD.r);
  const py = (y: number) => H - PAD.b - (y / m.maxY) * (H - PAD.t - PAD.b);
  const line = (key: "cloud" | "onprem") =>
    m.points.map((p) => `${px(p.x).toFixed(1)},${py(p[key]).toFixed(1)}`).join(" ");
  const beClamped = m.breakEven !== null && m.breakEven <= HORIZON ? m.breakEven : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Eingaben */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <div className="kicker">{t.needs}</div>
          <Slider
            label={t.requests}
            value={requests}
            display={num(requests)}
            min={10_000}
            max={20_000_000}
            step={10_000}
            onChange={setRequests}
          />
          <Slider
            label={t.tokens}
            value={tokensPerReq}
            display={num(tokensPerReq)}
            min={100}
            max={8_000}
            step={100}
            onChange={setTokensPerReq}
          />
          <p className="text-xs text-ink-400">
            = {num(m.tokensPerMonth)} {t.tokensPerMonth}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="kicker">{t.cloud}</div>
          <Slider
            label={t.cloudPrice}
            value={cloudPer1M}
            display={eur2(cloudPer1M)}
            min={0.1}
            max={15}
            step={0.1}
            onChange={setCloudPer1M}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="kicker">{t.onprem}</div>
          <Slider
            label={t.hardware}
            value={hardware}
            display={eur(hardware)}
            min={5_000}
            max={200_000}
            step={1_000}
            onChange={setHardware}
          />
          <Slider
            label={t.amort}
            value={amortMonths}
            display={`${amortMonths} ${t.months}`}
            min={12}
            max={60}
            step={6}
            onChange={setAmortMonths}
          />
          <Slider
            label={t.ops}
            value={ops}
            display={eur(ops)}
            min={50}
            max={3_000}
            step={50}
            onChange={setOps}
          />
        </div>
      </div>

      {/* Ergebnis */}
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="card-surface p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
              {t.resultCloud}
            </div>
            <div className="mt-2 text-display-sm font-semibold tabular-nums text-ink-900">
              {eur(m.cloudMonthly)}
            </div>
            <div className="mt-1 text-xs text-ink-400">{t.perMonth}</div>
          </div>
          <div className="card-surface border-azul-300 p-6 ring-1 ring-azul-200">
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
              {t.resultOnprem}
            </div>
            <div className="mt-2 text-display-sm font-semibold tabular-nums text-ink-900">
              {eur(ops)}
            </div>
            <div className="mt-1 text-xs text-ink-400">
              {t.running} · {t.plusOnce} {eur(hardware)}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-stone-100 p-5">
          <div className="kicker mb-1.5">{t.breakevenTitle}</div>
          {m.breakEven !== null ? (
            <p className="text-md leading-relaxed text-ink-800">
              {t.breakevenAfter(Math.ceil(m.breakEven))}
              <br />
              <span className="text-sm text-ink-600">
                {m.savings >= 0
                  ? t.savings(eur(m.savings), HORIZON)
                  : t.extra(eur(-m.savings), HORIZON)}
              </span>
            </p>
          ) : (
            <p className="text-md leading-relaxed text-ink-800">{t.neverBreakeven}</p>
          )}
        </div>

        {/* Diagramm */}
        <div className="card-surface p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
              {t.chartTitle}
            </span>
            <div className="flex items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 text-ink-500">
                <span className="h-2 w-2 rounded-full bg-ink-400" />
                {t.legendCloud}
              </span>
              <span className="inline-flex items-center gap-1.5 text-ink-700">
                <span className="h-2 w-2 rounded-full bg-azul-600" />
                {t.legendOnprem}
              </span>
            </div>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t.chartTitle}>
            {[0.25, 0.5, 0.75, 1].map((f) => (
              <line
                key={f}
                x1={PAD.l}
                x2={W - PAD.r}
                y1={py(m.maxY * f)}
                y2={py(m.maxY * f)}
                stroke="#E6E0D2"
                strokeWidth="1"
              />
            ))}
            {beClamped !== null && (
              <line
                x1={px(beClamped)}
                x2={px(beClamped)}
                y1={PAD.t}
                y2={H - PAD.b}
                stroke="#5B7EF0"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            )}
            <polyline points={line("cloud")} fill="none" stroke="#7B87AB" strokeWidth="2" />
            <polyline points={line("onprem")} fill="none" stroke="#2547C4" strokeWidth="2.5" />
            {beClamped !== null && (
              <circle cx={px(beClamped)} cy={py(m.points[Math.round(beClamped)]?.onprem ?? 0)} r="3.5" fill="#2547C4" />
            )}
            <text x={PAD.l} y={H - 6} fontSize="9" fill="#7B87AB">
              0
            </text>
            <text x={W - PAD.r} y={H - 6} fontSize="9" fill="#7B87AB" textAnchor="end">
              {HORIZON} {t.axisMonths}
            </text>
          </svg>
        </div>

        <p className="text-xs leading-relaxed text-ink-400">{t.disclaimer}</p>

        <details className="group rounded-lg border border-stone-200 bg-stone-100/60 px-4 py-3">
          <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.08em] text-ink-600 marker:content-none">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-ink-400 transition-transform group-open:rotate-90">›</span>
              {t.basisTitle}
            </span>
          </summary>
          <div className="mt-3 flex flex-col gap-2.5">
            <p className="text-xs leading-relaxed text-ink-500">{t.basisIntro}</p>
            <ul className="flex flex-col gap-2">
              {t.basisItems.map((it, i) => (
                <li key={i} className="text-xs leading-relaxed text-ink-500">
                  <span className="mr-1.5 text-azul-500">•</span>
                  {it.text}
                  {"href" in it && it.href ? (
                    <>
                      {" "}
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener nofollow"
                        className="font-medium text-azul-600 underline decoration-azul-300 underline-offset-2 hover:text-azul-700"
                      >
                        {it.label}
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="text-[0.7rem] leading-relaxed text-ink-400">{t.basisNote}</p>
          </div>
        </details>
      </div>
    </div>
  );
}
