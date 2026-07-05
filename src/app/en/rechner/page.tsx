import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TcoCalculator } from "@/components/TcoCalculator";

export const metadata: Metadata = {
  title: "Cost calculator: cloud vs. on-premise",
  description:
    "Interactive model calculation: compare the cost of cloud AI (usage-based) with on-premise operation (hardware + power) and find the break-even.",
  alternates: { canonical: "/en/rechner", languages: { de: "/rechner", en: "/en/rechner" } },
};

export default function RechnerEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <section className="container-quinta pt-16 pb-10 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Calculator</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Cloud vs. on-premise: the model calculation
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Cloud AI means renting, on-premise means owning. Move the sliders to see from when your
              own hardware pays off — and how large the saving is over three years.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-28">
          <div className="rounded-2xl border border-stone-200 bg-stone-0 p-6 shadow-card sm:p-10">
            <TcoCalculator lang="en" />
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
            More on the topic in the article{" "}
            <Link href="/en/insights/on-premise-vs-cloud-kosten" className="text-azul-600 underline underline-offset-2">
              “On-premise vs. cloud AI: the honest cost calculation”
            </Link>
            .
          </p>
        </section>

        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Let’s work through your real case together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In the demo we look at your volume, your hardware and your use cases — with solid
              numbers instead of estimates.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@twenty5ai.com" className="btn btn-primary">
                Book a demo (30 min.)
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
