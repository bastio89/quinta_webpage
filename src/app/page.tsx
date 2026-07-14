import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Risk } from "@/components/Risk";
import { Platform } from "@/components/Platform";
import { Migration } from "@/components/Migration";
import { Editions } from "@/components/Editions";
import { Benchmarks } from "@/components/Benchmarks";
import { Rollout } from "@/components/Rollout";
import { Security } from "@/components/Security";
import { UseCases } from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { faqPageLd } from "@/lib/jsonLd";
import { LANDING_FAQ } from "@/lib/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { de: "/", en: "/en" },
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageLd(LANDING_FAQ)} />
      <Navbar />
      <main id="inhalt" tabIndex={-1}>
        <Hero />
        <Reveal><Risk /></Reveal>
        <Reveal><Platform /></Reveal>
        <Reveal><Migration /></Reveal>
        <Reveal><Editions /></Reveal>
        <Reveal><Benchmarks /></Reveal>
        <Reveal><Rollout /></Reveal>
        <Reveal><Security /></Reveal>
        <Reveal><UseCases /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
