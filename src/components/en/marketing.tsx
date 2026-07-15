"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CloudUpload,
  Receipt,
  Link2,
  AppWindow,
  ShieldCheck,
  Server,
  Cpu,
} from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { GrowBar } from "@/components/motion/GrowBar";
import { TerminalStream } from "@/components/motion/TerminalStream";

/* ---------------- Hero ---------------- */

const BADGES = ["GDPR-compliant", "EU-AI-Act-ready", "100% European", "OpenAI-compatible API"];
const ROW = "flex items-center justify-between border-b border-on-dark/10 py-2.5 font-mono text-[12.5px]";
const STREAM = [
  "Sovereignty costs no performance.",
  "Not a single byte leaves the building.",
  "Response generated — locally, no cloud.",
];

export function HeroEn() {
  const [offline, setOffline] = useState(false);
  return (
    <section id="top" className="container-quinta pb-24 pt-16 sm:pt-20 lg:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
        <div>
          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
            Sovereign on-premise AI by twenty5ai
          </div>
          <h1 className="text-display-lg font-semibold text-ink-900 sm:text-display-xl">
            Your AI.
            <br />
            Your hardware.
            <br />
            Not a single byte leaves the building.
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-ink-700">
            Quinta turns your own hardware into a private, OpenAI-compatible AI service — with
            enterprise management and a complete audit trail. Ready in hours, not months.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="btn btn-primary">
              Book a demo (30 min.)
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/quinta-whitepaper-en.pdf"
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
            >
              Technical whitepaper
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {BADGES.map((label) => (
              <span key={label} className="badge-quinta">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-ink-900 p-7 shadow-raised">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-on-dark-muted">
              The proof
            </span>
            <label className="flex cursor-pointer items-center gap-2.5 text-on-dark">
              <input
                type="checkbox"
                role="switch"
                className="absolute h-0 w-0 opacity-0"
                checked={offline}
                onChange={(e) => setOffline(e.target.checked)}
              />
              <span className="switch-track" />
              <span className="text-xs text-on-dark-muted">Pull the network cable</span>
            </label>
          </div>

          <div className={ROW}>
            <span className="text-on-dark-muted">Internet uplink</span>
            {offline ? (
              <span className="font-semibold text-red-500">● disconnected</span>
            ) : (
              <span className="text-on-dark">● connected</span>
            )}
          </div>
          <div className={ROW}>
            <span className="text-on-dark-muted">Gateway</span>
            <span className="text-signal-green">ready</span>
          </div>
          <div className={ROW}>
            <span className="text-on-dark-muted">GPU nodes</span>
            <span className="text-signal-green">3 / 3 online</span>
          </div>
          <div className={ROW}>
            <span className="text-on-dark-muted">llama-3.3-70b</span>
            <span className="animate-q-pulse text-signal-green">▮ answering …</span>
          </div>

          <div className="mt-3 flex items-start gap-2 font-mono text-[12px] leading-relaxed text-signal-green">
            <span className="text-on-dark-muted">›</span>
            <span>
              <TerminalStream phrases={STREAM} />
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">
            {offline
              ? "No uplink — and your AI keeps answering. It runs on your premises, not in the cloud."
              : "Pull the network cable. Quinta keeps answering — everything runs on your hardware."}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Risk ---------------- */

const RISK = [
  {
    icon: CloudUpload,
    title: "Data leaves Europe",
    text: "The most sensitive company data goes to US cloud APIs today — without an audit trail, with GDPR, EU AI Act and NIS2 risk.",
  },
  {
    icon: Receipt,
    title: "Costs without a ceiling",
    text: "Token billing makes AI budgets unpredictable. Every new use case keeps pushing the running cost up.",
  },
  {
    icon: Link2,
    title: "Dependence on vendors",
    text: "Models, prices and availability are set by an outside provider. Switching an API today means a rebuild, not a move.",
  },
];

export function RiskEn() {
  return (
    <section className="container-quinta pb-32">
      <div className="mb-12 max-w-[640px]">
        <div className="kicker mb-3.5">The risk today</div>
        <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
          Cloud AI means someone else’s infrastructure, someone else’s rules.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {RISK.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card-surface p-7">
            <Icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
            <h3 className="mt-4 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">{title}</h3>
            <p className="text-sm leading-relaxed text-ink-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Platform ---------------- */

const STAGES = [
  { icon: AppWindow, name: "Your application", sub: "OpenAI SDK, unchanged" },
  { icon: ShieldCheck, name: "Gateway", sub: "Auth · RBAC · Audit · Admission" },
  { icon: Server, name: "Daemon", sub: "per GPU machine, self-registering" },
  { icon: Cpu, name: "Model", sub: "vLLM or model runner" },
];
const MODELS = ["llama", "mistral", "qwen", "gemma", "deepseek"];

export function PlatformEn() {
  return (
    <section id="plattform" className="bg-ink-900 py-24 lg:py-28">
      <div className="container-quinta">
        <div className="mb-14 max-w-[680px]">
          <div className="kicker kicker--on-dark mb-3.5">The platform</div>
          <h2 className="text-display-md font-semibold text-on-dark sm:text-display-lg">
            Not a model runner.
            <br />
            The complete operating layer.
          </h2>
          <p className="mt-5 leading-relaxed text-on-dark-muted">
            Every request takes the same path: through the gateway (the gatekeeper), to the daemon on
            your GPU machine, into the model — connected through a central registry. Every additional
            machine running the Quinta daemon becomes part of the platform automatically.
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
                    <span className="flow-dot" style={{ animationDelay: `${i * 0.85}s` }} />
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
                Production
              </span>
            </div>
            <p className="mt-2 mb-3.5 text-sm leading-relaxed text-on-dark-muted">
              High-performance inference for the entire HuggingFace catalogue. Fully automated
              lifecycle: download → start → health check → warmup → ready.
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
              <span className="text-md font-semibold text-on-dark">Lightweight model runner</span>
              <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-azul-400">
                Entry
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
              The simple path to your first model — from a workstation to an AI appliance of the DGX
              Spark class. GPU detection for NVIDIA, AMD and Intel and automatic routing included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Migration ---------------- */

const APIS = ["/v1/chat/completions", "Embeddings", "Rerank", "Audio transcription", "Responses API"];
const CODE: Array<{ text: string; dim?: boolean; add?: boolean }> = [
  { text: "from openai import OpenAI", dim: true },
  { text: "" },
  { text: "client = OpenAI(", dim: true },
  { text: '    base_url="https://quinta.intern/v1",', add: true },
  { text: '    api_key="qnt-prod-…",', add: true },
  { text: ")", dim: true },
  { text: "" },
  { text: "resp = client.chat.completions.create(", dim: true },
  { text: '    model="llama-3.3-70b", …', dim: true },
  { text: ")", dim: true },
];

export function MigrationEn() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(CODE.map((l) => l.text).join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section id="migration" className="container-quinta py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
        <div>
          <div className="kicker mb-3.5">Migration</div>
          <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
            Two lines.
            <br />
            That’s all it takes.
          </h2>
          <p className="mt-5 mb-6 leading-relaxed text-ink-700">
            Existing applications move from OpenAI or Azure OpenAI by changing{" "}
            <code className="font-mono text-[13px]">base_url</code> and the API key. No reprogramming,
            no new SDK.
          </p>
          <ul className="flex flex-col gap-2.5">
            {APIS.map((api) => (
              <li key={api} className="flex items-center gap-2.5 text-sm text-ink-700">
                <Check className="h-4 w-4 text-green-500" strokeWidth={2} />
                <span className="font-mono text-[13px]">{api}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="code-window">
          <div className="code-window__bar">
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="ml-1.5 text-[11px] tracking-[0.04em] text-on-dark-muted">
              app.py — the entire switch
            </span>
            <button
              type="button"
              onClick={copy}
              className="ml-auto rounded-xs border border-on-dark/15 px-2 py-1 font-mono text-[10px] text-on-dark-muted transition-colors hover:border-on-dark/30 hover:text-on-dark"
            >
              {copied ? "copied ✓" : "copy"}
            </button>
          </div>
          <div className="overflow-x-auto px-5 py-4 text-[13px] leading-[1.7] text-on-dark">
            {CODE.map((line, i) => (
              <span
                key={i}
                className={
                  "code-window__line" +
                  (line.dim ? " code-window__line--dim" : "") +
                  (line.add ? " code-window__line--add" : "")
                }
              >
                {line.text || " "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benchmarks ---------------- */

const STATS = [
  {
    prefix: "",
    value: 18,
    suffix: "×",
    label: "higher success rate under extreme load",
    sub: "The gateway meters requests (bounded admission) and absorbs errors before users see them — against the bare inference server.",
    accent: true,
  },
  {
    prefix: "~",
    value: 56,
    suffix: " ms",
    label: "additional first-token latency",
    sub: "Pure network path through the platform layer — the per-user token rate stays identical.",
    accent: false,
  },
  {
    prefix: "",
    value: 512,
    suffix: "",
    label: "concurrent requests in the test",
    sub: "31,200 requests in total, Quinta gateway vs. vLLM alone.",
    accent: false,
  },
];

export function BenchmarksEn() {
  return (
    <section id="leistung" className="bg-ink-900 py-24 lg:py-28">
      <div className="container-quinta">
        <div className="mb-16 max-w-[720px]">
          <div className="kicker kicker--on-dark mb-3.5">Performance</div>
          <h2 className="text-display-md font-semibold text-on-dark sm:text-display-lg">
            Sovereignty costs no performance — it delivers it.
          </h2>
        </div>

        <div className="mb-16 grid gap-12 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <CountUp
                prefix={s.prefix}
                value={s.value}
                suffix={s.suffix}
                className={
                  "text-display-xl font-semibold tabular-nums " +
                  (s.accent ? "text-azul-400" : "text-on-dark")
                }
              />
              <span className="text-sm font-semibold text-on-dark">{s.label}</span>
              <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="max-w-[760px]">
          <div className="flex flex-col gap-3.5">
            <div>
              <div className="mb-1.5 flex justify-between text-xs text-on-dark">
                <span>Successful responses under extreme load — with the Quinta gateway</span>
                <span className="font-mono text-signal-green">18×</span>
              </div>
              <div className="h-2.5 rounded-full bg-ink-800">
                <GrowBar width="100%" className="bg-gradient-to-r from-azul-500 to-azul-400" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex justify-between text-xs text-on-dark-muted">
                <span>vLLM alone (bare inference server)</span>
                <span className="font-mono">1×</span>
              </div>
              <div className="h-2.5 rounded-full bg-ink-800">
                <GrowBar width="5.6%" className="bg-ink-500" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-on-dark-muted">
            Benchmark of the underlying engine, measured on an NVIDIA DGX Spark (128 GB): 31,200
            requests, up to 512 concurrent requests, Quinta gateway against vLLM alone. Identical
            per-user token rate.
          </p>
          <Link
            href="/en/benchmark"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-400 hover:text-azul-300"
          >
            Full benchmark — setup, numbers, framing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Rollout ---------------- */

const STEPS = [
  {
    n: "01",
    title: "Plan",
    time: "30 minutes",
    text: "One conversation: your use cases, your hardware, your compliance framework. The deployment plan follows.",
  },
  {
    n: "02",
    title: "Deploy",
    time: "Hours, not months",
    text: "The Quinta daemon onto your GPU machines, gateway and dashboard alongside — nodes register themselves, models start automatically.",
  },
  {
    n: "03",
    title: "Operate",
    time: "ongoing",
    text: "Deployments by click, API keys, usage per unit, Prometheus metrics and a complete audit trail in the dashboard.",
  },
];

export function RolloutEn() {
  return (
    <section id="einfuehrung" className="container-quinta pt-24 sm:pt-32">
      <div className="mb-12 max-w-[640px]">
        <div className="kicker mb-3.5">How rollout works</div>
        <h2 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
          Three steps to your own AI service.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="card-surface p-7">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm font-semibold text-azul-600">{s.n}</span>
              <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-ink-400">
                {s.time}
              </span>
            </div>
            <h3 className="mt-3.5 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-500">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function CtaEn() {
  return (
    <section id="kontakt" className="bg-ink-900 pt-24 text-center sm:pt-28">
      <div className="container-quinta">
        <p className="mb-4 font-serif text-2xl italic text-copper-400">
          Quinta — Portuguese for a country estate: the place where your data is at home.
        </p>
        <h2 className="mx-auto max-w-[760px] text-display-md font-semibold text-on-dark sm:text-display-lg">
          Bring your AI home.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
            Book a demo (30 min.)
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/quinta-whitepaper-en.pdf"
            target="_blank"
            rel="noopener"
            className="btn btn-inverse"
          >
            Technical whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}
