import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS_EN } from "@/lib/insights";

const PATH = "/en/insights/datensouveraenitaet-cloud-act";
const meta = INSIGHTS_EN.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: "/insights/datensouveraenitaet-cloud-act", en: PATH },
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
        title: "Sovereignty that does not rest on assurances.",
        text: "See how Quinta runs models entirely within your network — no transfer, no foreign jurisdiction.",
      }}
    >
      <Lead>
        Many teams believe the problem is solved the moment a cloud provider offers an “EU region”.
        That is a misconception — and an expensive one when a supervisory authority looks closer. The
        storage location is only one half of the question. The other is the legal order the provider
        is subject to. And that does not travel to Europe with the data centre.
      </Lead>

      <Section heading="Two questions that get conflated">
        <p>
          Data sovereignty consists of two separate questions that sales conversations often merge
          into one:
        </p>
        <Bullets
          items={[
            "Where does the data physically sit? — That is what the “EU region” answers. Necessary, but not sufficient.",
            "Whose law applies to the provider? — That decides who can compel the data to be handed over. And it depends on corporate affiliation, not on the server location.",
          ]}
        />
        <p>
          A US company remains subject to US law, even when its servers stand in Frankfurt. “The data
          is in Europe” therefore answers only the first question — the second stays open.
        </p>
      </Section>

      <Section heading="Schrems II: what the ruling actually says">
        <p>
          With the Schrems II ruling (2020), the Court of Justice of the EU invalidated the “Privacy
          Shield” for data transfers to the US. The core of the reasoning: US surveillance law enables
          access against which EU data subjects have no equivalent legal protection. The level of
          protection was therefore not “essentially equivalent”, as the GDPR requires.
        </p>
        <p>
          Standard contractual clauses remained available as an instrument — but not as a formality.
          The court requires a case-by-case assessment and, where necessary, supplementary protective
          measures. A one-off contract clause thus becomes an ongoing burden of proof you have to
          discharge for every transfer.
        </p>
      </Section>

      <Section heading="The CLOUD Act — and why the EU subsidiary often doesn’t help">
        <p>
          The US CLOUD Act (2018) allows US authorities to compel US providers to hand over data —
          even when that data sits on servers outside the US. What matters is control over the data,
          not its location. A European subsidiary changes little as long as the US parent can arrange
          access legally or in practice. Add to that surveillance powers under US law aimed
          specifically at providers of electronic communications.
        </p>
        <p>
          For especially sensitive data, this creates a risk that is hard to exclude by contract —
          because it does not stem from the contract, but from the law the provider is subject to.
        </p>
      </Section>

      <Section heading="And the new Data Privacy Framework?">
        <p>
          Since 2023, the EU-US Data Privacy Framework has provided a successor to the Privacy Shield
          that again eases transfers to certified US companies. Anyone relying on it should keep two
          things in mind: first, it applies only to certified recipients under certain conditions.
          Second, its predecessor was before the courts within a few years — the durability of such
          adequacy decisions is historically limited. A data strategy that rests on the continuation
          of a political agreement carries a residual risk that cannot be negotiated away.
        </p>
      </Section>

      <Section heading="Why encryption only partly solves the problem">
        <p>
          “We encrypt everything” is a common counter-argument — correct, but incomplete. Encryption
          at rest and in transit protects stored data. For AI inference that is not enough: the model
          must process the plaintext of your request in order to answer. In that moment the most
          sensitive part — the content of your prompt — sits unencrypted in the provider’s system.
          Whoever manages the keys or has runtime access can undermine the protection. Encryption
          shifts the trust problem; it does not remove it.
        </p>
      </Section>

      <PullQuote>
        Data sovereignty is not the question of where your data sits. It is the question of who can
        compel it to be handed over — and under whose law.
      </PullQuote>

      <Section heading="Why this weighs especially heavily with AI">
        <p>
          With classic cloud use you often transfer metadata or dormant files. With AI inference you
          transfer the opposite: the active processing of your most sensitive content. Prompts contain
          client files, design data, patient findings, draft contracts — exactly the material that
          should not leave the EU legal area. Every request to an external AI is therefore a transfer
          you have to be able to justify.
        </p>
      </Section>

      <Section heading="Sovereignty means: no transfer">
        <p>
          The cleanest way to solve the transfer problem is not to let it arise in the first place.
          When models run entirely on your own hardware, the data never leaves your jurisdiction: no
          third-country transfer, no external processor for inference, no dependence on the
          availability of an external service. Data-subject and supervisory rights can be enforced
          against your own infrastructure — not against an assurance from across the Atlantic.
        </p>
      </Section>

      <Section heading="Questions to ask a provider">
        <Bullets
          items={[
            "Which law is your parent company subject to — and can it be compelled to hand over data?",
            "Does the model process the plaintext of my prompts, and who has runtime access to it?",
            "On which legal basis do you rely for the transfer, and which supplementary measures do you implement?",
            "Do I get a complete audit trail of my own — or does it end at your system boundary?",
            "What happens to my application if an adequacy decision falls again?",
          ]}
        />
      </Section>

      <Note>
        Note: this article gives a generally accessible overview of the legal situation and is not
        legal advice. The assessment in the individual case — in particular on transfers and suitable
        safeguards — should be made with qualified counsel.
      </Note>
    </ArticleLayout>
  );
}
