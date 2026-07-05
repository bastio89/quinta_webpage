"use client";

import Image from "next/image";
import {
  Check,
  Minus,
  BadgeCheck,
  KeyRound,
  ShieldCheck,
  Fingerprint,
  Building2,
  MapPinned,
  FileLock2,
  Gavel,
  AlertTriangle,
  Scale,
  ClipboardCheck,
  Landmark,
  Factory,
  Building,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { AiActCountdown } from "@/components/AiActCountdown";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LANDING_FAQ_EN } from "@/lib/faq";

/* ---------------- Editions ---------------- */

type Cell = true | false | string;

const TIERS = [
  { key: "business", name: "Business", price: "On request", period: "License per site/instance", highlight: true },
  { key: "enterprise", name: "Enterprise", price: "Custom", period: "Custom contract & SLA", highlight: false },
] as const;

const GROUPS: { label: string; rows: { feature: string; cells: [Cell, Cell] }[] }[] = [
  {
    label: "Infrastructure",
    rows: [
      { feature: "Quinta gateway & daemon", cells: [true, true] },
      { feature: "Swappable inference backends", cells: [true, true] },
      { feature: "OpenAI-compatible API", cells: [true, true] },
      { feature: "Compute nodes", cells: ["Multiple", "Unlimited"] },
      { feature: "Multi-site deployment", cells: [false, true] },
    ],
  },
  {
    label: "Access & users",
    rows: [
      { feature: "Organizations", cells: ["Unlimited", "Unlimited"] },
      { feature: "API keys & scopes", cells: [true, true] },
      { feature: "Roles (RBAC)", cells: [true, true] },
      { feature: "Commercial use", cells: [true, true] },
    ],
  },
  {
    label: "Management",
    rows: [
      { feature: "Model management", cells: [true, true] },
      { feature: "Usage analytics & metrics", cells: [true, true] },
      { feature: "Instance admin & invitations", cells: [true, true] },
      { feature: "SSO / SAML", cells: [false, true] },
      { feature: "2FA & passkeys", cells: [false, true] },
      { feature: "Audit trail", cells: [false, true] },
      { feature: "Fine-tuning UI & MCP", cells: [false, true] },
    ],
  },
  {
    label: "Support",
    rows: [
      { feature: "Support channel", cells: ["Email", "Slack / Teams"] },
      { feature: "Response time", cells: ["24 h", "Custom"] },
      { feature: "Dedicated contact", cells: [false, true] },
      { feature: "Annual on-site check", cells: [false, true] },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-azul-600" strokeWidth={2.5} />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-ink-300" strokeWidth={2} />;
  return <span className="text-sm font-medium text-ink-800">{value}</span>;
}

export function EditionsEn() {
  return (
    <section id="funktionen" className="bg-stone-50 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mb-12 max-w-[640px]">
          <div className="kicker mb-3.5">Editions &amp; features</div>
          <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
            Business and Enterprise — for production use
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Both editions run entirely on your own infrastructure. The difference is in scale,
            governance and support.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-x-auto rounded-2xl border border-stone-300 bg-stone-50 shadow-card">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-1/3 border-b border-stone-300 px-6 pb-6 pt-6 align-bottom" />
                {TIERS.map((tier) => (
                  <th
                    key={tier.key}
                    className={cn(
                      "relative w-1/3 border-b border-stone-300 px-6 pb-6 align-bottom",
                      tier.highlight ? "bg-azul-50 pt-10" : "pt-6",
                    )}
                  >
                    {tier.highlight && (
                      <span className="absolute left-1/2 top-3 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-azul-600 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-stone-50">
                        <BadgeCheck className="h-3 w-3" /> Recommended
                      </span>
                    )}
                    <p className="text-sm font-semibold text-ink-900">{tier.name}</p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink-900">{tier.price}</p>
                    <p className="mt-1 font-mono text-[11px] text-ink-500">{tier.period}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((group) => (
                <>
                  <tr key={group.label} className="bg-stone-100">
                    <td
                      colSpan={3}
                      className="px-6 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-azul-700"
                    >
                      {group.label}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-stone-200 last:border-b-0">
                      <td className="px-6 py-3.5 text-sm text-ink-800">{row.feature}</td>
                      {row.cells.map((cell, i) => (
                        <td
                          key={i}
                          className={cn("px-6 py-3.5 text-center", TIERS[i].highlight && "bg-azul-50/60")}
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

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-500">
          All pricing is based on self-hosting on your own hardware. Setup support and on-site
          operation are agreed individually in the offer.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Security ---------------- */

const LOGIN_METHODS = [
  { icon: KeyRound, title: "Password", text: "The standard login path." },
  { icon: ShieldCheck, title: "2-factor (TOTP)", text: "Numeric code from an authenticator app." },
  { icon: Fingerprint, title: "Passkeys", text: "Sign in with fingerprint or Face ID, no password at all." },
  { icon: Building2, title: "SSO / SAML", text: "Sign in via your corporate login, e.g. Entra ID or Okta." },
];

const PILLARS = [
  {
    icon: MapPinned,
    title: "Data sovereignty",
    text: "Models run on your own hardware — in your data centre, not in someone else’s cloud.",
  },
  {
    icon: FileLock2,
    title: "GDPR by design",
    text: "No data sharing with third parties, no training of foreign models with your data.",
  },
  {
    icon: ShieldCheck,
    title: "Roles & permissions",
    text: "Fine-grained RBAC enforced server-side and client-side — not just hidden in the UI.",
  },
  {
    icon: Gavel,
    title: "EU AI Act ready",
    text: "A complete audit trail, traceable model deployments and human oversight meet the documentation and transparency duties for high-risk AI — where many cloud providers hit limits for lack of insight into their own infrastructure.",
  },
];

const AI_ACT_CARDS = [
  {
    icon: AlertTriangle,
    kicker: "Compliance",
    title: "Compliance crunch",
    text: "2 August 2026 is the date every CIO should know. The high-risk obligations of the EU AI Act apply in full from then. Now is the time to prepare your own AI stack.",
    points: [
      "High-risk AI systems must be compliant by 2 August 2026",
      "Fines up to €15M or 3% of global annual turnover",
      "Your current cloud AI stack often does not meet the requirements",
      "Quinta supports compliance through architecture, not just paper",
    ],
  },
  {
    icon: Scale,
    kicker: "Legal",
    title: "Legal position",
    text: "Especially sensitive GDPR data should not leave the EU legal area. US cloud providers are subject to a different legal order — your data does not necessarily stay only yours there.",
    points: [
      "Data never leaves EU legal jurisdiction",
      "No access risk through the US CLOUD Act",
      "Full control over processors",
      "Legal authority stays with your organization",
    ],
  },
  {
    icon: ClipboardCheck,
    kicker: "Audit",
    title: "Audit-ready?",
    text: "Only demonstrably compliant AI infrastructure passes an audit. We help you reach that state before the deadline — not after.",
    points: [
      "Complete audit trail for every inference request",
      "Model provenance and version logging",
      "Role-based access control built in",
      "Audit-ready from day one",
    ],
  },
];

export function SecurityEn() {
  return (
    <section id="sicherheit" className="bg-stone-50 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mb-12 max-w-[640px]">
          <div className="kicker mb-3.5">Security &amp; compliance</div>
          <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
            Enterprise-grade, because it has to be
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Banking and client confidentiality, trade secrets, GDPR, the Swiss DSG and the EU AI Act —
            Quinta is built for data and use cases that demand demonstrable governance.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="card-surface p-6">
              <div className="inline-flex rounded-lg bg-azul-50 p-2.5 text-azul-700">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="text-center">
            <h3 className="text-display-sm font-semibold text-ink-900">
              GDPR- &amp; EU AI Act-compliant AI infrastructure
            </h3>
            <div className="mt-8">
              <AiActCountdown lang="en" />
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {AI_ACT_CARDS.map((c, i) => (
              <div
                key={c.title}
                className={"card-surface p-6" + (i === 1 ? " border-azul-300 ring-1 ring-azul-200" : "")}
              >
                <div className="inline-flex rounded-lg bg-azul-50 p-2.5 text-azul-700">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-4 kicker">{c.kicker}</p>
                <h4 className="mt-1 text-base font-semibold text-ink-900">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-azul-600" strokeWidth={2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-ink-800 bg-ink-950 p-8 text-stone-50 sm:p-10">
          <h3 className="text-center text-lg font-semibold sm:text-left">
            Four login methods, freely combinable
          </h3>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOGIN_METHODS.map((m) => (
              <div key={m.title}>
                <m.icon className="h-5 w-5 text-copper-400" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold">{m.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-300">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Use cases ---------------- */

const USE_CASES = [
  {
    icon: Scale,
    title: "Law firms & consultancies",
    image: "/images/usecases/law.jpg",
    problem: "Client data must not pass through a third party’s cloud AI.",
    solution: "Quinta stays entirely within your own network — client confidentiality is preserved.",
  },
  {
    icon: Landmark,
    title: "Banks & insurers",
    image: "/images/usecases/bank.jpg",
    problem: "Regulation requires traceable, auditable AI usage.",
    solution: "Audit trail, RBAC and instance admin provide the governance required.",
  },
  {
    icon: Factory,
    title: "Industry & mid-market",
    image: "/images/usecases/factory.jpg",
    problem: "Trade secrets and design data should not flow to US clouds.",
    solution: "AI models run on your own hardware, from a single machine to a GPU server.",
  },
  {
    icon: Building,
    title: "Public sector",
    image: "/images/usecases/government.jpg",
    problem: "Data protection and sovereignty come before a feature race.",
    solution: "Self-hosted, an openly auditable core, full control over the location.",
  },
];

export function UseCasesEn() {
  return (
    <section className="border-y border-stone-300 bg-stone-100 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mb-12 max-w-[640px]">
          <div className="kicker mb-3.5">Who Quinta is built for</div>
          <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
            Wherever data must not leave the building
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
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
                  <h3 className="text-sm font-semibold text-ink-900">{uc.title}</h3>
                </div>
              </div>
              <div className="space-y-3 p-7 text-sm leading-relaxed">
                <p className="text-ink-700">
                  <span className="font-semibold text-red-600">Today:</span> {uc.problem}
                </p>
                <p className="text-ink-700">
                  <span className="font-semibold text-azul-700">With Quinta:</span> {uc.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqEn() {
  return (
    <section id="faq" className="mx-auto max-w-[860px] px-8 pb-32">
      <div className="mb-10">
        <div className="kicker mb-3.5">FAQ</div>
        <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
          The questions CIOs ask first.
        </h2>
      </div>
      <FaqAccordion items={LANDING_FAQ_EN} />
    </section>
  );
}
