import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BenchmarkVisual } from "@/components/BenchmarkVisual";
import { CountUp } from "@/components/motion/CountUp";
import { GrowBar } from "@/components/motion/GrowBar";

export const metadata: Metadata = {
  title: "Benchmark: Quinta gateway vs. plain vLLM",
  description:
    "Same engine, 18× higher success rate under extreme load: 31,200 requests, 512 concurrent, measured on an NVIDIA DGX Spark (128 GB). The numbers, the setup, the honest framing.",
  alternates: { canonical: "/en/benchmark", languages: { de: "/benchmark", en: "/en/benchmark" } },
};

const FACTS = [
  { k: "Hardware", v: "NVIDIA DGX Spark, 128 GB" },
  { k: "Scope", v: "31,200 requests, up to 512 concurrent" },
  { k: "Comparison", v: "Quinta gateway vs. plain vLLM — identical engine" },
  { k: "Constant", v: "Identical per-user token rate in both runs" },
  { k: "Metric", v: "Success rate: share of requests with a valid response" },
  { k: "Overhead", v: "~56 ms added first-token latency from the platform layer" },
];

export default function BenchmarkPageEn() {
  return (
    <>
      <Navbar lang="en" />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-12 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Benchmark</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Same engine. 18× more success under load.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              We put the same inference server under extreme load twice — once bare, once behind the
              Quinta gateway. The difference is not the model but the operating layer. Here are the
              numbers, the setup and the honest framing.
            </p>
          </div>
        </section>

        {/* Key figures */}
        <section className="container-quinta pb-14">
          <div className="grid gap-10 rounded-2xl border border-stone-200 bg-stone-0 p-8 shadow-card sm:grid-cols-3 sm:p-10">
            <div className="flex flex-col gap-1.5">
              <CountUp value={18} suffix="×" className="text-display-xl font-semibold tabular-nums text-azul-600" />
              <span className="text-sm font-semibold text-ink-900">higher success rate</span>
              <span className="text-xs leading-relaxed text-ink-500">
                under extreme load versus plain vLLM — on the identical engine.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <CountUp prefix="~" value={56} suffix=" ms" className="text-display-xl font-semibold tabular-nums text-ink-900" />
              <span className="text-sm font-semibold text-ink-900">added first-token latency</span>
              <span className="text-xs leading-relaxed text-ink-500">
                the only cost of the platform layer — per-user token rate stays the same.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <CountUp value={512} className="text-display-xl font-semibold tabular-nums text-ink-900" />
              <span className="text-sm font-semibold text-ink-900">concurrent requests</span>
              <span className="text-xs leading-relaxed text-ink-500">
                31,200 requests in total, measured on an NVIDIA DGX Spark (128 GB).
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[760px]">
            <div className="flex flex-col gap-3.5">
              <div>
                <div className="mb-1.5 flex justify-between text-xs text-ink-700">
                  <span>Successful responses — with Quinta gateway</span>
                  <span className="font-mono text-green-600">18×</span>
                </div>
                <div className="h-2.5 rounded-full bg-stone-200">
                  <GrowBar width="100%" className="bg-gradient-to-r from-azul-600 to-azul-400" />
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex justify-between text-xs text-ink-500">
                  <span>Plain vLLM (bare inference server)</span>
                  <span className="font-mono">1×</span>
                </div>
                <div className="h-2.5 rounded-full bg-stone-200">
                  <GrowBar width="5.6%" className="bg-ink-400" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-400">
              Relative view of the success rates (Quinta gateway = 18×, plain vLLM = 1×).
            </p>
          </div>
        </section>

        {/* Principle schematic */}
        <section className="container-quinta pb-16">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">
              Why does the bare server buckle?
            </h2>
            <p className="mt-4 text-md leading-relaxed text-ink-700">
              An inference server without admission control accepts every request immediately — until
              it blocks itself under too many parallel requests. The Quinta gateway meters the inflow
              (bounded admission): it admits only as much concurrent work as the hardware handles
              stably. The rest waits in order instead of tipping into timeouts.
            </p>
          </div>
          <BenchmarkVisual lang="en" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
            Go deeper:{" "}
            <Link href="/en/insights/bounded-admission-last" className="text-azul-600 underline underline-offset-2">
              Bounded admission: why an inference server buckles under load
            </Link>{" "}
            — or compact in the glossary:{" "}
            <Link href="/en/glossar/bounded-admission" className="text-azul-600 underline underline-offset-2">
              Bounded admission
            </Link>
            ,{" "}
            <Link href="/en/glossar/durchsatz" className="text-azul-600 underline underline-offset-2">
              Throughput
            </Link>
            .
          </p>
        </section>

        {/* Setup */}
        <section className="container-quinta pb-16">
          <div className="max-w-2xl">
            <h2 className="text-display-sm font-semibold text-ink-900">How it was measured</h2>
            <p className="mt-4 text-md leading-relaxed text-ink-700">
              Both runs used the same inference engine on the same machine — the only difference was
              the operating layer in front of it:
            </p>
          </div>
          <dl className="mt-7 grid max-w-3xl gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.k} className="bg-stone-0 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">{f.k}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-800">{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Honest framing */}
        <section className="container-quinta pb-20">
          <div className="max-w-2xl rounded-lg border border-stone-200 bg-stone-100 p-7 sm:p-8">
            <div className="kicker mb-2">Honest framing</div>
            <p className="text-md leading-relaxed text-ink-800">
              This is an internal measurement in a defined load scenario — not an independent
              certification. Results depend on hardware, model and load profile and do not transfer
              1:1 to every environment. That is why we walk through the setup in detail in the demo —
              and, on request, re-run the measurement on your own hardware.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Measure it, don’t take our word for it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In the demo we show the measurement setup — and gladly reproduce the test on your own
              hardware, with your load profile.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Book a demo (30 min)
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/en/vergleich" className="btn btn-inverse">
                Quinta compared
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
