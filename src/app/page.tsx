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

export default function Home() {
  return (
    <>
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
