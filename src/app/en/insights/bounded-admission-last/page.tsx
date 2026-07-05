import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS_EN } from "@/lib/insights";

const PATH = "/en/insights/bounded-admission-last";
const meta = INSIGHTS_EN.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: "/insights/bounded-admission-last", en: PATH },
  },
};

const STATS = [
  { value: "18×", label: "higher success rate under extreme load", accent: true },
  { value: "~56 ms", label: "additional first-token latency", accent: false },
  { value: "512", label: "concurrent requests in the test", accent: false },
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
        title: "Pull the network cable — it keeps answering.",
        text: "In the demo we show the behaviour under load live: the same engine, a different result at the limit.",
      }}
    >
      <Lead>
        Between a demo and a production system, it is rarely the model that stands in the way. It is
        the load. A bare inference server delivers impressive numbers at idle — and buckles as soon as
        many requests arrive at once. Why that happens is not chance, but a property of queues. And
        that is exactly where the operating layer comes in.
      </Lead>

      <Section heading="The model is not the problem — the queue is">
        <p>
          An inference server accepts every request by default. Under moderate load that works well:
          throughput and latency stay stable, and the GPU operates in its efficient range. But once
          the number of concurrent requests exceeds what the GPU can handle, the behaviour changes
          abruptly — not linearly, but with a knee.
        </p>
        <p>
          The reason is simple queueing logic: as long as requests arrive faster than they are
          processed, the queue grows. And the longer the queue, the longer every single request
          waits. Just before the capacity limit, latencies do not rise gently but steeply — the server
          is not yet “full” by the numbers, yet to the user it already feels frozen.
        </p>
      </Section>

      <Section heading="Why latency explodes before the GPU is full">
        <p>With LLM inference, several effects combine to sharpen the knee:</p>
        <Bullets
          items={[
            "Shared memory: every active request occupies GPU memory for its context (KV cache). Too many concurrent requests cause memory pressure — requests get evicted or aborted.",
            "Batching has limits: modern engines bundle requests for high throughput. Above a certain number, though, the response time per user drops noticeably.",
            "Timeouts create retries: when a request times out, the client often resends it — extra load at exactly the moment the system is already overloaded.",
          ]}
        />
        <p>
          The result is a feedback loop: overload creates timeouts, timeouts create retries, retries
          create more overload.
        </p>
      </Section>

      <Section heading="What happens without protection: the cascade">
        <p>
          An unprotected server has no defence against this feedback loop. It keeps accepting every
          request until memory is exhausted or the queue grows so long that practically all requests
          time out. For the user, the difference between “slow” and “down” then disappears — both feel
          the same. In distributed systems, an overloaded node can also drag others down when requests
          are routed to it.
        </p>
      </Section>

      <Section heading="What “bounded admission” means">
        <p>
          The gateway sits as a gatekeeper in front of the model and limits how many requests enter
          inference at once. Instead of flooding the server beyond its efficient range, it keeps it
          right inside it. Concretely:
        </p>
        <Bullets
          items={[
            "Admission control: only as many requests enter inference at once as the hardware can serve efficiently.",
            "Bounded queue: excess requests wait briefly and predictably — not indefinitely.",
            "Controlled shedding: if the queue is full too, requests are rejected cleanly and immediately instead of hanging for minutes.",
            "Backpressure: the “full right now” signal reaches the caller quickly, so it can react sensibly.",
          ]}
        />
        <p>
          Errors are absorbed before the user sees them — and the server stays in the range where it
          works fastest and most reliably.
        </p>
      </Section>

      <div className="rounded-lg bg-ink-900 px-6 py-8 sm:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span
                className={
                  "text-display-md font-semibold tabular-nums " +
                  (s.accent ? "text-azul-400" : "text-on-dark")
                }
              >
                {s.value}
              </span>
              <span className="text-xs leading-relaxed text-on-dark-muted">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-on-dark-muted">
          Benchmark of the underlying engine, measured on an NVIDIA DGX Spark (128 GB): 31,200
          requests, up to 512 concurrent requests, Quinta gateway against vLLM alone.
        </p>
      </div>

      <Section heading="What the numbers mean">
        <p>
          Under extreme load, the gateway achieves an 18× higher success rate than the bare server.
          “Success rate” here means the share of requests that receive a valid response instead of
          running into a timeout or error. Importantly: this is not because the gateway computes
          faster — the actual inference is identical. It is because it meters the load so that the
          requests that do get through are actually answered.
        </p>
        <p>
          Equally important is what does not change: the per-user token rate stays the same. The
          operating layer therefore costs no generation performance — it only orders who goes when.
        </p>
      </Section>

      <Section heading="Why ~56 ms is the whole price">
        <p>
          This robustness costs practically no performance. The platform layer adds around 56
          milliseconds of additional first-token latency — the pure network path through the gateway.
          That is a one-off, barely perceptible surcharge on the first token, not ongoing compute. You
          pay it once per request and get, in return, a system that does not buckle under extreme
          load.
        </p>
      </Section>

      <Section heading="Admission control is not rate limiting">
        <p>
          Both limit requests — but in fundamentally different ways. Rate limiting hands out fixed
          quotas per client (say “100 requests per minute”), regardless of how busy the system
          currently is. Admission control follows actual capacity dynamically: when there is headroom
          it lets requests through, under overload it meters. A pure rate limit protects against
          individual heavy talkers, but not against collapse when many legitimate users arrive at
          once. Bounded admission guards exactly against that.
        </p>
      </Section>

      <PullQuote>
        Sovereignty costs no performance — it delivers it. The same engine, but metered instead of
        flooded.
      </PullQuote>

      <Section heading="Why it matters in operation">
        <p>
          Capacity spikes are the normal case, not the exception: the Monday morning, the quarterly
          report, the use case that suddenly becomes popular internally. A system that stays reliable
          exactly then is the difference between “AI in a pilot” and “AI the company relies on”. And
          because behaviour under load is a property of the operating layer, not of the model, you get
          it regardless of which model you deploy tomorrow.
        </p>
      </Section>

      <Note>
        The figures stated come from the measurement of the underlying engine (Quinta gateway vs. vLLM
        alone) and are reported exactly as such — not rounded and not generalized.
      </Note>
    </ArticleLayout>
  );
}
