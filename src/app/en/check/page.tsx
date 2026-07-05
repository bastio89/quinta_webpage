import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComplianceCheck } from "@/components/ComplianceCheck";

export const metadata: Metadata = {
  title: "Compliance self-check: EU AI Act, NIS2 & GDPR",
  description:
    "Work out in five questions which AI regulation applies to you — EU AI Act, NIS2, GDPR and data sovereignty. Free, no sign-up, with an instant assessment.",
  alternates: { canonical: "/en/check", languages: { de: "/check", en: "/en/check" } },
};

export default function CheckPageEn() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <section className="container-quinta pt-16 pb-10 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Self-check</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Which AI regulation applies to you?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Five questions, an instant read-out: EU AI Act, NIS2, GDPR and data sovereignty. No
              sign-up, no storage — the assessment runs entirely in your browser.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-28">
          <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-stone-0 p-6 shadow-card sm:p-9">
            <ComplianceCheck lang="en" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
            Want to go deeper? Every topic in full in the{" "}
            <Link href="/en/insights" className="text-azul-600 underline underline-offset-2">
              Insights
            </Link>{" "}
            — or clarify terms in the{" "}
            <Link href="/en/glossar" className="text-azul-600 underline underline-offset-2">
              glossary
            </Link>
            .
          </p>
        </section>

        <section className="bg-ink-900 py-24 text-center sm:py-28">
          <div className="container-quinta">
            <h2 className="mx-auto max-w-[720px] text-display-sm font-semibold text-on-dark sm:text-display-md">
              Sovereignty delivers the evidence an audit demands.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-on-dark-muted">
              In the demo we show how on-premise operation logs access, prompts and models end to
              end — automatically.
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
