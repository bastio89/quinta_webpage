import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCheck, Building2, FileCheck, Network } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqPageLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Quinta compared to Ollama, vLLM and LocalAI",
  description:
    "Ollama, vLLM and LocalAI run a model. Quinta is the operating layer around it — access control, multi-GPU orchestration, governance and a complete audit trail. The honest comparison.",
  alternates: { canonical: "/en/vergleich", languages: { de: "/vergleich", en: "/en/vergleich" } },
};

const OPS_QUESTIONS = [
  {
    icon: UserCheck,
    q: "Who accessed it, and when?",
    a: "Identity, role-based access control (RBAC) and enterprise login via password, 2-factor (TOTP), passkeys and SSO/SAML (Entra ID, Okta and others).",
  },
  {
    icon: Building2,
    q: "Under which policy?",
    a: "Tenant separation for multiple organizations — different teams and customers cleanly separated, with permissions per unit.",
  },
  {
    icon: FileCheck,
    q: "With which audit trail?",
    a: "Usage tracking per unit plus a complete, tamper-evident audit layer — the evidence your compliance teams need for GDPR, the EU AI Act and NIS2.",
  },
  {
    icon: Network,
    q: "Across how much infrastructure?",
    a: "Multi-model and multi-GPU orchestration with load balancing. Every additional machine running the daemon registers itself — scaling without manual tinkering.",
  },
];

const FAQ = [
  {
    q: "Is Quinta a replacement for Ollama or vLLM?",
    a: "No. Quinta uses inference engines like Ollama and vLLM in the background and adds the operating layer around them — access control, orchestration, governance and audit — that an enterprise needs in production.",
  },
  {
    q: "What is the difference between an inference engine and an operating layer?",
    a: "An inference engine runs a model efficiently. An operating layer makes that model usable in an organization — through identity, access control, observability, multi-tenancy, governance and orchestration. Quinta is an operating layer.",
  },
  {
    q: "Does Quinta run on-premise?",
    a: "Yes. Quinta is built to run entirely on your own infrastructure — not a single byte leaves the building. That makes it ideal for regulated industries with strict data-residency and data-sovereignty requirements.",
  },
  {
    q: "Is Quinta open source?",
    a: "The inference engine builds on proven open-source technology (Apache 2.0). The management layer — gateway, daemon, dashboard and registry — is developed in-house by twenty5ai.",
  },
  {
    q: "Who is Quinta for?",
    a: "Regulated European organizations in finance, healthcare, legal, the public sector, industry and similar fields — wherever running AI on controlled, auditable on-premise infrastructure is a hard requirement, not a mere preference.",
  },
  {
    q: "Why can’t I just use an inference engine in production?",
    a: "You can run a model with one — but you lack access control, tenant separation, usage tracking, governance and an audit trail. For a regulated enterprise, those are exactly the functions a supervisory authority will ask about.",
  },
];

export default function VergleichEnPage() {
  return (
    <>
      <JsonLd data={faqPageLd(FAQ)} />
      <Navbar lang="en" />
      <main>
        {/* Header */}
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-3xl">
            <div className="kicker mb-3.5">Comparison</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Quinta compared to Ollama, vLLM and LocalAI
            </h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-400">
              twenty5ai · Sovereign AI · July 2026
            </p>
          </div>
        </section>

        {/* Short answer */}
        <section className="container-quinta pb-16">
          <div className="max-w-3xl rounded-lg border border-stone-200 bg-stone-100 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
              Short answer
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-800">
              Tools like Ollama, vLLM and LocalAI are excellent inference engines. They run a model.{" "}
              <strong className="font-semibold text-ink-950">Quinta is the operating layer</strong>{" "}
              around the model — what a regulated enterprise needs to run AI in production: access
              control, multi-model and multi-GPU orchestration, governance and a complete audit trail.
              Quinta uses such inference engines in the background. They answer the question “Does the
              model run?”. Quinta answers:{" "}
              <em className="not-italic font-medium text-ink-950">
                Who may use it — under which policy, with which audit trail and across how many GPUs?
              </em>
            </p>
          </div>
        </section>

        {/* Running a model is the easy part */}
        <section className="container-quinta pb-16">
          <div className="max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">Running a model is the easy part.</h2>
            <div className="mt-5 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p>
                Anyone who has loaded a model with Ollama or started vLLM knows how far open tools have
                come. In minutes you have an OpenAI-compatible endpoint serving a capable open model on
                your own hardware. For a developer’s prototype, that is often all it takes.
              </p>
              <p>
                Production in a regulated organization is a different problem. The model is the easy
                part. The hard part is everything around it: who may call it? How is access controlled
                across teams? How is every request logged tamper-evidently for compliance? How is load
                spread across the GPUs — and the whole system managed under EU regulation? Inference
                engines were not built to answer these questions. That was never their job.
              </p>
              <p>
                That is the difference most comparisons miss. It is not a question of which tool is
                better — but which layer of the stack you are looking at.
              </p>
            </div>
          </div>
        </section>

        {/* Inference engine vs. operating layer */}
        <section className="container-quinta pb-16">
          <div className="max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">
              Inference engine vs. operating layer: what’s the difference?
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p>
                An inference engine takes a model and serves it efficiently. Ollama, vLLM and LocalAI
                are inference engines: they optimize throughput, manage GPU memory and expose an API.
                They do that well.
              </p>
              <p>
                An operating layer sits above and makes AI usable in an organization. It handles access
                control, identity, observability, multi-tenancy, governance and orchestration across
                several models and machines. Quinta is such an operating layer — it runs on the
                inference engines instead of replacing them.
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-2xl border-l-2 border-copper-400 pl-6">
            <p className="text-xl font-medium leading-relaxed text-ink-800">
              An inference engine is like a database engine. An operating layer is everything that
              turns a database into a system a bank can run on — the access controls, the audit logs,
              the user management, the compliance reports.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              No one would put a bare database engine into production in a regulated environment. The
              same is true for AI.
            </p>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="container-quinta pb-8">
          <div className="mx-auto mb-10 max-w-5xl">
            <div className="kicker mb-3.5">Feature comparison</div>
            <h2 className="max-w-2xl text-display-sm font-semibold text-ink-900">
              Quinta vs. Ollama, vLLM and LocalAI
            </h2>
            <p className="mt-4 max-w-2xl text-md leading-relaxed text-ink-700">
              This is not about the inference engines being inadequate — they are excellent at what
              they do. The point is: running AI in regulated production requires functions above the
              inference layer.
            </p>
          </div>
          <ComparisonTable lang="en" />
          <div className="mx-auto mt-6 max-w-5xl">
            <p className="max-w-3xl text-md leading-relaxed text-ink-700">
              Both Ollama and vLLM are very strong tools; vLLM in particular delivers excellent
              multi-GPU throughput. What none of them ship by default is the access control, governance
              and multi-tenant operation a regulated enterprise needs before AI comes anywhere near
              production data.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-ink-500">
              ✓ integrated · — not a built-in part. The comparison concerns the built-in platform
              functions, not the inference quality of the engines. Details on Ollama, vLLM and LocalAI
              describe the standard scope of the respective projects and do not replace your own review.
            </p>
          </div>
        </section>

        {/* The four operating questions */}
        <section className="container-quinta py-24 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <div className="kicker mb-3.5">The four operating questions</div>
            <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
              What an operating layer answers — often to a supervisory authority.
            </h2>
            <p className="mt-4 text-md leading-relaxed text-ink-700">
              An inference engine answers one question: does the model run? An operating layer answers
              the questions a regulated enterprise actually has to answer.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {OPS_QUESTIONS.map(({ icon: Icon, q, a }) => (
              <div key={q} className="card-surface p-7">
                <Icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
                <h3 className="mt-4 mb-2 text-xl font-semibold tracking-[-0.025em] text-ink-900">{q}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-md leading-relaxed text-ink-700">
            These are not functions you bolt on later. They are the difference between a demo and a
            system you can defend in an audit.
          </p>
        </section>

        {/* Benchmark (dark) */}
        <section className="bg-ink-900 py-24 lg:py-28">
          <div className="container-quinta">
            <div className="mb-14 max-w-[720px]">
              <div className="kicker kicker--on-dark mb-3.5">The proof under load</div>
              <h2 className="text-display-sm font-semibold text-on-dark sm:text-display-md">
                Same engine. A different behaviour at the limit.
              </h2>
            </div>
            <div className="grid gap-12 sm:grid-cols-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-display-lg font-semibold tabular-nums text-azul-400">18×</span>
                <span className="text-sm font-semibold text-on-dark">
                  higher success rate under extreme load
                </span>
                <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                  Quinta gateway vs. vLLM alone — the same inference, but metered requests instead of
                  overload.
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-display-lg font-semibold tabular-nums text-on-dark">~56 ms</span>
                <span className="text-sm font-semibold text-on-dark">additional first-token latency</span>
                <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                  Pure network path through the platform layer — the per-user token rate stays identical.
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-display-lg font-semibold tabular-nums text-on-dark">512</span>
                <span className="text-sm font-semibold text-on-dark">concurrent requests in the test</span>
                <span className="max-w-[260px] text-xs leading-relaxed text-on-dark-muted">
                  31,200 requests in total, measured on an NVIDIA DGX Spark (128 GB).
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters for regulated industries */}
        <section className="container-quinta py-24 sm:py-28">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Regulated industries</div>
            <h2 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">
              Why the operating layer is not optional here.
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-md leading-relaxed text-ink-700">
              <p>
                For financial services, healthcare, legal, the public sector and industry, the
                operating layer is mandatory. These are the sectors that held back from public AI
                services — precisely because they could not give up control of their data.
              </p>
              <p>
                For them, the value is not access to a model. Any company can access a model. The value
                is running AI on your own infrastructure, under your own jurisdiction, with the access
                controls and audit trails your regulators expect. That is exactly what Quinta is built
                for.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[860px] px-8 pb-24">
          <div className="mb-10">
            <div className="kicker mb-3.5">FAQ</div>
            <h2 className="text-display-sm font-semibold text-ink-900">The comparison, in short.</h2>
          </div>
          <FaqAccordion items={FAQ} />
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <p className="mb-4 font-serif text-2xl italic text-copper-400">
              The others run a model. Quinta makes sure it stays a service.
            </p>
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              See the difference on your own hardware.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Book a demo (30 min.)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/en" className="btn btn-inverse">
                Back to overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
