import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Laptop, Handshake } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { jobsList } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers at twenty5ai",
  description:
    "Help build Quinta — the sovereign on-premise AI platform. Open roles at twenty5ai for people who take real control over AI seriously.",
  alternates: { canonical: "/en/karriere", languages: { de: "/karriere", en: "/en/karriere" } },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Substance, not hype",
    text: "We build a product that delivers real control over AI — measurable, verifiable, without buzzwords.",
  },
  {
    icon: Globe2,
    title: "European & sovereign",
    text: "Data sovereignty isn't marketing here — it's the core of the product. That shapes how we work.",
  },
  {
    icon: Laptop,
    title: "Remote-first",
    text: "Work where you're most productive. We meet at the customer and regularly as a team.",
  },
  {
    icon: Handshake,
    title: "Close to the customer",
    text: "We solve real problems of regulated industries — at the source, not from a distance.",
  },
];

export default function CareersPageEn() {
  const jobs = jobsList("en");

  return (
    <>
      <Navbar lang="en" />
      <main id="inhalt" tabIndex={-1}>
        <section className="container-quinta pt-16 pb-14 sm:pt-20">
          <div className="max-w-2xl">
            <div className="kicker mb-3.5">Careers</div>
            <h1 className="text-display-md font-semibold text-ink-900 sm:text-display-lg">
              Help build sovereign AI.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              twenty5ai builds Quinta — the on-premise AI platform that lets organizations run AI on
              their own hardware. We’re looking for people who love technology and take control
              seriously. Not a single byte leaves the building — ours included.
            </p>
          </div>
        </section>

        <section className="container-quinta pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card-surface p-6">
                <v.icon className="h-[22px] w-[22px] text-azul-600" strokeWidth={1.75} />
                <h2 className="mt-4 text-md font-semibold text-ink-900">{v.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-quinta pb-24 sm:pb-28">
          <h2 className="text-display-sm font-semibold text-ink-900">Open positions</h2>
          <div className="mt-6 flex flex-col gap-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/en/karriere/${job.slug}`}
                className="card-surface group flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-azul-600">
                    {job.team}
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-ink-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{job.tagline}</p>
                  <p className="mt-2 font-mono text-xs text-ink-400">
                    {job.location} · {job.type}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-azul-600">
                  View role
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-stone-200 bg-stone-100 p-6">
            <p className="text-md leading-relaxed text-ink-800">
              No matching role but convinced by the idea? We welcome speculative applications.
            </p>
            <a
              href="mailto:hello@twenty5ai.com?subject=Speculative%20application"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
            >
              Apply speculatively →
            </a>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
