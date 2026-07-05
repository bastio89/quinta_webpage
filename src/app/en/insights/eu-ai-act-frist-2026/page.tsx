import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ArticleLayout, Lead, Section, PullQuote, Note } from "@/components/ArticleLayout";
import { AiActCountdown } from "@/components/AiActCountdown";
import { INSIGHTS_EN } from "@/lib/insights";

const PATH = "/en/insights/eu-ai-act-frist-2026";
const meta = INSIGHTS_EN.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: "/insights/eu-ai-act-frist-2026", en: PATH },
  },
};

const APPLIES = [
  "Requirements for many high-risk AI systems (including those under Annex III of the regulation)",
  "Transparency, documentation and oversight duties for operators and providers",
  "The penalty framework — fines up to €15M or 3% of global annual turnover",
  "National market surveillance and competences across the member states",
];

const DELIVERS = [
  { t: "Complete audit trail", d: "Every inference request traceable — the basis of any documentation." },
  { t: "Model provenance & versions", d: "Which model, which version, which approval — provable at any time." },
  { t: "Roles & permissions (RBAC)", d: "Access enforced server-side, not just in the UI." },
  { t: "Data residency", d: "Data never leaves your jurisdiction — no third-country risk." },
];

const CHECKLIST = [
  "Build an inventory: which AI systems are in use, which fall into the high-risk category?",
  "Review data flows: which data leaves your jurisdiction with cloud AI?",
  "Ensure traceability: is there a complete audit trail per request?",
  "Define governance: document roles, permissions and human oversight.",
  "Document model provenance: which models, in which version, with which approval?",
];

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      category={meta.category}
      title={meta.title}
      date={meta.date}
      readingMinutes={meta.readingMinutes}
      path={PATH}
      description={meta.excerpt}
      cta={{
        title: "Compliance built on architecture — not on paper.",
        text: "In the demo we show how audit trail, model provenance and access control work together on your own hardware.",
      }}
    >
      <div className="rounded-lg border border-stone-200 bg-stone-100 px-6 py-8 sm:px-10">
        <AiActCountdown lang="en" />
      </div>

      <div className="flex flex-col gap-4 text-md leading-relaxed text-ink-700">
        <Lead>
          The EU AI Act takes effect in stages. 2 August 2026 marks the stage that matters for most
          companies: from that date a central tranche of the regulation becomes applicable — including
          the obligations for many high-risk AI systems as well as the governance and penalty
          framework.
        </Lead>
        <p>
          Anyone running AI in production should by then know not only{" "}
          <em className="not-italic font-medium text-ink-900">which</em> systems are in the house, but
          also be able to prove <em className="not-italic font-medium text-ink-900">how</em> they are
          controlled, logged and managed. This is exactly where demonstrable compliance parts ways
          with good intentions.
        </p>
      </div>

      <Section heading="What becomes applicable on 2 August 2026">
        <p>
          The regulation entered into force on 1 August 2024 and applies in stages. As of 2 August
          2026 the following become particularly relevant:
        </p>
        <ul className="flex flex-col gap-2.5">
          {APPLIES.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
              <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Why cloud AI becomes a problem here">
        <p>
          The regulation demands traceability: who used which model in which version, and under whose
          oversight? With public cloud AI services you often have no insight into exactly these
          questions — the infrastructure belongs to a third party, and the audit trail ends at its
          system boundary.
        </p>
        <p>
          Add to that data sovereignty: especially sensitive data should not leave the EU legal area.
          A provider outside that legal order cannot guarantee that your data stays exclusively yours
          there.
        </p>
      </Section>

      <PullQuote>
        The difference between a demo and a system that passes an audit is not the model. It is the
        operating layer around it — access, log, control.
      </PullQuote>

      <Section heading="What sovereignty concretely delivers">
        <p>
          On-premise operation is not an end in itself — it delivers the evidence an audit demands,
          because everything stays in the house:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {DELIVERS.map((c) => (
            <div key={c.t} className="card-surface p-6">
              <h3 className="text-md font-semibold text-ink-900">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Your checklist before the deadline">
        <ul className="flex flex-col gap-2.5">
          {CHECKLIST.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
              <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Note>
        Note: this article gives a generally accessible overview and is not legal advice. Specific
        deadlines, classifications and duties depend on the individual case and should be reviewed
        with qualified counsel.
      </Note>
    </ArticleLayout>
  );
}
