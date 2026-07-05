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
import { faqPageLd } from "@/lib/jsonLd";
import { LANDING_FAQ } from "@/lib/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageLd(LANDING_FAQ)} />
      <Navbar />
      <main>
        <Hero />
        <Risk />
        <Platform />
        <Migration />
        <Editions />
        <Benchmarks />
        <Rollout />
        <Security />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
