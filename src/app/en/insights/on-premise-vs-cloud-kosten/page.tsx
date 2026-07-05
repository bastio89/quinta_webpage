import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS_EN } from "@/lib/insights";

const PATH = "/en/insights/on-premise-vs-cloud-kosten";
const meta = INSIGHTS_EN.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: "/insights/on-premise-vs-cloud-kosten", en: PATH },
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
        title: "Let’s work through your case together.",
        text: "In the demo we look at your volume, your hardware and your use cases — and what running it yourself concretely means.",
      }}
    >
      <Lead>
        Cloud AI means renting. On-premise means owning. Both models have their place — the question
        is not which one sounds cheaper, but from which point owning pays off against renting. And
        that calculation has more line items than the token price list shows.
      </Lead>

      <Section heading="Renting vs. owning">
        <p>
          Cloud AI is attractive as ongoing operating cost (OpEx): no capital outlay, ready
          instantly, billed per token. For a first prototype that is ideal — and precisely the
          psychological catch. The low entry makes the total cost look harmless, even though it rises
          with every productive use.
        </p>
        <p>
          On-premise flips this: hardware and electricity are predictable, largely fixed costs (CapEx
          plus operation). Whether you run one application or fifty, a thousand requests a day or a
          million — the price barely changes. You pay for capacity, not for usage. That shifts the
          risk: away from a bill that grows with your success, toward a one-off investment decision.
        </p>
      </Section>

      <Section heading="The five hidden cost items of the cloud">
        <p>The pure token price is rarely the whole price. Commonly overlooked:</p>
        <Bullets
          items={[
            "Growth as a cost driver: success scales the bill. The productive, frequently used cases become the most expensive — you are penalized for your own success.",
            "Pricing power at the provider: tariffs, models, quotas and availability can change. Your calculation hangs on decisions you do not control.",
            "Compliance effort for the transfer: every transfer to an external AI requires a legal basis, review and documentation — effort that appears on no token price list.",
            "Operating side costs: data egress, monitoring, vendor management and hedging against outages or the provider’s rate limits.",
            "Lock-in: a later switch means a rebuild, not a move — a cost risk that only surfaces at the end, when it is most expensive.",
          ]}
        />
      </Section>

      <Section heading="What on-premise really costs — honestly">
        <p>
          Running it yourself is not free, and anyone who claims so is calculating as one-sidedly as
          the pure token list. Realistically you should budget for:
        </p>
        <Bullets
          items={[
            "Hardware acquisition (CapEx) — the investment, written off over its useful life.",
            "Electricity and cooling — ongoing, but predictable and largely decoupled from usage volume.",
            "Operation and maintenance — the effort to keep a system running, update models, absorb outages.",
          ]}
        />
        <p>
          This is exactly where the operating layer comes in: automatic node registration, a fully
          automated model lifecycle and a dashboard reduce the operating effort that is otherwise the
          most expensive part of running it yourself. The difference between “a GPU in the basement”
          and “an operational platform” is precisely that effort.
        </p>
      </Section>

      <Section heading="Amortization: a machine you own keeps running">
        <p>
          With cloud billing you pay per request — every request costs, every idle night costs
          nothing, but every load spike hits in full. With your own hardware it is the reverse: the
          capacity is paid for, whether it is 20% or 90% utilized. That means two things. Unused
          capacity is lost money — but every additional use is practically free. Anyone who bundles
          many use cases onto the same hardware lowers the price per request with every new use.
          Utilization is thus the single most important lever of economics.
        </p>
      </Section>

      <PullQuote>
        The break-even is not a fixed amount but a point: where an experiment turns into steady,
        predictable load. From there on, renting costs extra.
      </PullQuote>

      <div className="rounded-lg border border-stone-200 bg-stone-100 p-6">
        <p className="text-md leading-relaxed text-ink-800">
          Where that point sits in your case, you can try for yourself — with the volume, hardware
          and rate of your choice.
        </p>
        <a
          href="/en/rechner"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
        >
          To the interactive cost calculator →
        </a>
      </div>

      <Section heading="When the cloud remains the right choice">
        <p>Sovereignty is not a dogma but a trade-off. There are cases where renting stays the better model:</p>
        <Bullets
          items={[
            "Prototypes and one-off experiments, where speed matters more than continuous operation.",
            "Very low, sporadic usage without steady load.",
            "The need for an exotic frontier model you only use rarely and not on your own hardware — provided the data is uncritical.",
          ]}
        />
        <p>
          The point is not “cloud is bad”, but: renting and owning have different strengths. Being
          sovereign means making the choice deliberately — not leaving it to a provider.
        </p>
      </Section>

      <Section heading="When your own hardware pays off">
        <Bullets
          items={[
            "Steady, growing volume instead of isolated calls.",
            "Several use cases sharing the same capacity and raising utilization.",
            "Sensitive data where the cloud transfer is off the table anyway — then on-premise is not a nice-to-have but a prerequisite.",
            "Predictability as a goal: a fixed budget instead of a bill that grows with usage.",
          ]}
        />
      </Section>

      <Section heading="Common errors in the cost calculation">
        <Bullets
          items={[
            "Comparing only the token price and ignoring transfer, compliance and operating costs.",
            "Treating a pilot’s cost as a steady state — the real bill arrives with scaling.",
            "Ignoring growth: the case that is cheap today is the most expensive tomorrow.",
            "Seeing unused capacity as waste rather than as paid-for headroom for the next use case.",
          ]}
        />
      </Section>

      <Note>
        Note: this comparison describes the cost models, not concrete prices. What running it yourself
        means in your case depends on hardware, volume and use cases and is determined individually.
      </Note>
    </ArticleLayout>
  );
}
