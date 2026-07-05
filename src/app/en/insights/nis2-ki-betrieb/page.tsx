import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS_EN } from "@/lib/insights";

const PATH = "/en/insights/nis2-ki-betrieb";
const meta = INSIGHTS_EN.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: "/insights/nis2-ki-betrieb", en: PATH },
  },
};

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
        title: "An AI stack that fits inside your security zone.",
        text: "See how access control, audit trail and operation in your own network feed into NIS2.",
      }}
    >
      <Lead>
        The EU AI Act gets the attention — but for many companies NIS2 is the regulation that applies
        to running AI just as directly. It extends cybersecurity duties to considerably more
        industries, requires concrete measures and puts management explicitly on the hook. Anyone
        running AI in production is introducing another critical system — and has to secure it
        accordingly.
      </Lead>

      <Section heading="What NIS2 is and who it applies to">
        <p>
          NIS2 is the revised EU directive on network and information security. Compared with its
          predecessor it considerably widens the circle of affected organizations and distinguishes
          two categories:
        </p>
        <Bullets
          items={[
            "“Essential” entities — such as energy, transport, banking, health, digital infrastructure.",
            "“Important” entities — including parts of manufacturing, postal and courier services, food, chemicals, research, digital providers.",
          ]}
        />
        <p>
          Whether an organization is covered depends on sector and size. The circle reaches well
          beyond classic critical-infrastructure operators — many mid-sized companies fall under it
          for the first time. Transposition into national law was scheduled across Europe for autumn
          2024; the concrete shape is set by the member states.
        </p>
      </Section>

      <Section heading="The minimum risk-management measures">
        <p>
          NIS2 does not require vague “efforts”, but a concrete catalogue of technical and
          organizational measures. Particularly relevant for running AI, among them:
        </p>
        <Bullets
          items={[
            "Risk analysis and information-system security policies.",
            "Handling of security incidents (detection, response, recovery).",
            "Business continuity — backup, emergency management, crisis response.",
            "Supply-chain security, including relationships with service providers.",
            "Access control, policies for the use of cryptography and, where appropriate, multi-factor authentication.",
            "Measures to assess effectiveness — security must be verifiable, not just asserted.",
          ]}
        />
      </Section>

      <Section heading="AI as part of your attack surface and supply chain">
        <p>
          From a NIS2 perspective, an AI service in someone else’s cloud is two things: an additional
          dependency in the supply chain and an extension of your attack surface into which you have
          only limited insight. If the service fails, the provider changes the terms, or it is itself
          compromised, you carry the risk — without holding the control the directive demands. And
          because AI requests process sensitive content, the AI service quickly becomes one of the
          most protection-worthy elements of your architecture.
        </p>
      </Section>

      <Section heading="Reporting duties: the clock runs in hours">
        <p>
          A central element of NIS2 is staged reporting duties for significant incidents — with tight
          deadlines:
        </p>
        <Bullets
          items={[
            "An initial early warning must be submitted without undue delay, at the latest within 24 hours of becoming aware.",
            "A more detailed notification typically follows within 72 hours.",
            "A final report is usually to be submitted within one month.",
          ]}
        />
        <p>
          These deadlines assume you can detect and reconstruct an incident at all. Without continuous
          logging across the whole AI stack that is hardly feasible — and at a foreign system boundary
          your visibility ends.
        </p>
      </Section>

      <Section heading="Management liability: security is a board matter">
        <p>
          Perhaps the sharpest lever of NIS2: responsibility lies explicitly with the management
          level. Management and boards must approve the risk-management measures, oversee their
          implementation, and can be held personally accountable for breaches. Training duties are
          also foreseen. Cybersecurity is therefore not something that can be fully delegated to IT —
          and running an uncontrolled AI service becomes a question the management level has to be able
          to answer.
        </p>
      </Section>

      <PullQuote>
        NIS2 does not ask whether your AI works. It asks whether you can prove who controls it, secures
        it and restores it in an emergency.
      </PullQuote>

      <Section heading="How on-premise operation feeds into the measures">
        <p>
          Running in your own security zone brings exactly the control NIS2 demands — and maps point by
          point onto the catalogue of measures:
        </p>
        <Bullets
          items={[
            "Access control via SSO and RBAC, enforced server-side — directly onto the required access and authentication measures.",
            "A complete audit trail — the basis for incident detection, reconstruction and timely reporting.",
            "A reduced supply chain: the AI service is yours, not a third party’s — less external dependency, less attack surface.",
            "Operational control: no dependence on the availability of an external AI service; emergency and recovery plans apply in-house.",
          ]}
        />
      </Section>

      <Section heading="NIS2 and the EU AI Act: two regulations, one stack">
        <p>
          NIS2 and the EU AI Act address different goals — cybersecurity here, AI governance there —
          but they require overlapping capabilities: access control, traceability, audit, operational
          control. Set up your AI stack sovereignly once, and you feed into both at the same time. A
          complete audit trail, for instance, is at once evidence for the AI documentation and the
          basis for an incident report. Double regulation does not necessarily mean double effort — if
          the architecture is right.
        </p>
      </Section>

      <div className="rounded-lg border border-stone-200 bg-stone-100 p-6">
        <p className="text-md leading-relaxed text-ink-800">
          Whether NIS2 captures your organization, you can clarify in five questions — alongside the
          EU AI Act and GDPR, assessed right in your browser.
        </p>
        <a
          href="/en/check"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
        >
          To the compliance self-check →
        </a>
      </div>

      <Note>
        Note: this article gives a generally accessible overview and is not legal advice. Whether and
        how NIS2 applies to your organization, and which measures are concretely required, should be
        reviewed by qualified experts.
      </Note>
    </ArticleLayout>
  );
}
