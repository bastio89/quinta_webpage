import type { Metadata } from "next";
import {
  ArticleLayout,
  Lead,
  Section,
  SubHeading,
  Bullets,
  CardGrid,
  PullQuote,
  Note,
} from "@/components/ArticleLayout";
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

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      category="Compliance"
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
          with good intentions — and where the architecture of your AI stack decides whether an audit
          becomes a formality or a problem.
        </p>
      </div>

      <Section heading="The timeline: why 2026 in particular">
        <p>
          The regulation entered into force on 1 August 2024, but its obligations apply in stages over
          several years. That is deliberate — and the reason 2 August 2026 is the date most
          organizations should have in their calendar:
        </p>
        <Bullets
          items={[
            "From 2 February 2025: the prohibited practices (unacceptable risk) apply — certain AI uses are banned.",
            "From 2 August 2025: obligations for providers of general-purpose AI (GPAI) models, plus parts of the governance structure.",
            "From 2 August 2026: the core obligations for high-risk AI systems under Annex III, and the penalty framework, become fully applicable.",
            "From 2 August 2027: obligations for high-risk systems that act as a safety component of already-regulated products (Annex I).",
          ]}
        />
        <p>
          For the common case — AI used independently in one of the high-risk areas — 2026 is the
          decisive deadline. 2027 mainly concerns products that already fall under sectoral safety
          regulation.
        </p>
      </Section>

      <Section heading="What becomes applicable on 2 August 2026">
        <p>The following become particularly relevant on that date:</p>
        <Bullets
          items={[
            "Requirements for many high-risk AI systems (including those under Annex III of the regulation).",
            "Transparency, documentation and oversight duties for providers and deployers.",
            "The penalty framework — fines up to €15M or 3% of global annual turnover, whichever is higher.",
            "National market surveillance, competences and the authority structure across the member states.",
          ]}
        />
      </Section>

      <Section heading="Am I affected? The four risk classes">
        <p>
          The EU AI Act does not regulate “AI” across the board, but by risk. Before thinking about
          obligations, classify your applications into one of four classes:
        </p>
        <SubHeading>Unacceptable risk</SubHeading>
        <p>
          Prohibited practices — such as manipulative behaviour or certain forms of social scoring.
          These systems have been banned since February 2025.
        </p>
        <SubHeading>High risk</SubHeading>
        <p>
          Systems in sensitive areas such as critical infrastructure, employment, credit scoring,
          education or justice. Here the full catalogue of obligations applies — this is the class
          2026 is about.
        </p>
        <SubHeading>Limited risk (transparency)</SubHeading>
        <p>
          For example chatbots or AI-generated content. The core duty is transparency: users must know
          they are interacting with an AI or that content is AI-generated.
        </p>
        <SubHeading>Minimal risk</SubHeading>
        <p>
          The majority of today’s applications. Largely free of new obligations — voluntary codes of
          conduct remain possible.
        </p>
        <p>
          Crucially: the same technology can fall into different classes depending on its purpose. It
          is not the model that determines the classification, but the concrete use case.
        </p>
      </Section>

      <Section heading="The obligations for high-risk systems">
        <p>
          If an application falls into the high-risk class, the regulation requires a whole bundle of
          measures. In short, it is about making the system controllable and provable across its
          entire lifecycle:
        </p>
        <Bullets
          items={[
            "A risk-management system across the whole lifecycle — continuous, not a one-off check.",
            "Data governance: quality, relevance and representativeness of the data used.",
            "Technical documentation that makes it possible to demonstrate conformity.",
            "Automatic logging of events during operation — the basis of traceability.",
            "Transparency and provision of information so deployers can use the system appropriately.",
            "Effective human oversight — a person must be able to intervene.",
            "Appropriate accuracy, robustness and cybersecurity.",
          ]}
        />
        <p>
          These requirements cannot be bolted on afterwards. They assume you have insight into your
          system — exactly what is often missing with a closed third-party service.
        </p>
      </Section>

      <Section heading="Provider or deployer — who is liable for what">
        <p>
          The regulation distinguishes roles. A common misconception is that responsibility lies with
          the model provider alone:
        </p>
        <Bullets
          items={[
            "Providers carry the main burden: conformity assessment, technical documentation, conformity marking.",
            "Deployers — that is you, when you run AI in production — have their own duties: use in line with the instructions, ensuring human oversight, monitoring operation and keeping the logs the system generates.",
          ]}
        />
        <p>
          So anyone running a high-risk system cannot rely entirely on the provider — the logging and
          oversight duties in particular sit with you. And you can only meet them if you own the logs.
        </p>
      </Section>

      <Section heading="The penalty framework">
        <p>
          Fines are tiered and follow the higher of a fixed amount and a share of turnover:
        </p>
        <Bullets
          items={[
            "Up to €35M or 7% of global annual turnover — for breaches of the prohibited practices.",
            "Up to €15M or 3% — for breaches of the other obligations (including those for high-risk systems).",
            "Up to €7.5M or 1% — for incorrect or incomplete information to authorities.",
          ]}
        />
        <p>
          Smaller companies benefit from caps that take their size into account. The point stands: the
          order of magnitude is chosen so that non-compliance becomes a board topic, not an IT detail.
        </p>
      </Section>

      <PullQuote>
        The difference between a demo and a system that passes an audit is not the model. It is the
        operating layer around it — access, log, control.
      </PullQuote>

      <Section heading="Why cloud AI becomes a problem here">
        <p>
          The regulation demands traceability: who used which model in which version, and under whose
          oversight? With public cloud AI services you often hit a wall on exactly these questions:
        </p>
        <Bullets
          items={[
            "The audit trail ends at the provider’s system boundary — what happens behind it, you cannot see.",
            "Model versions can change without you controlling it or documenting it completely.",
            "Human oversight and intervention are shaped by the provider’s product, not by you.",
            "Data sovereignty: especially sensitive data should not leave the EU legal area — a provider outside that legal order cannot guarantee this.",
          ]}
        />
        <p>
          None of these questions is unsolvable — but they are far easier to answer when the
          infrastructure is yours.
        </p>
      </Section>

      <Section heading="What sovereignty concretely delivers">
        <p>
          On-premise operation is not an end in itself — it delivers the evidence an audit demands,
          because everything stays in the house:
        </p>
        <CardGrid
          items={[
            { t: "Complete audit trail", d: "Every inference request traceable — the basis of any documentation and report." },
            { t: "Model provenance & versions", d: "Which model, which version, which approval — provable at any time, because you control the registry." },
            { t: "Roles & permissions (RBAC)", d: "Access enforced server-side, not just in the UI — the basis for oversight and governance." },
            { t: "Data residency", d: "Data never leaves your jurisdiction — no third-country transfer, no external processor for inference." },
          ]}
        />
      </Section>

      <Section heading="Your checklist before the deadline">
        <Bullets
          items={[
            "Build an inventory: which AI systems are in use — and which fall into the high-risk category?",
            "Clarify roles: for a given system, are you the provider, the deployer, or both? Which duties follow?",
            "Review data flows: which data leaves your jurisdiction with cloud AI?",
            "Ensure traceability: is there a complete audit trail per request — and do you own it?",
            "Document human oversight: who can intervene, how, and is it evidenced?",
            "Record model provenance: which models, in which version, with which approval?",
            "Anchor governance: put roles, permissions and responsibilities in writing — before the deadline, not after.",
          ]}
        />
      </Section>

      <div className="rounded-lg border border-stone-200 bg-stone-100 p-6">
        <p className="text-md leading-relaxed text-ink-800">
          You can work out whether and how the EU AI Act applies to you in five questions — together
          with NIS2 and GDPR, no sign-up.
        </p>
        <a
          href="/en/check"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
        >
          To the compliance self-check →
        </a>
      </div>

      <Note>
        Note: this article gives a generally accessible overview and is not legal advice. Specific
        deadlines, classifications and duties depend on the individual case and should be reviewed
        with qualified counsel.
      </Note>
    </ArticleLayout>
  );
}
