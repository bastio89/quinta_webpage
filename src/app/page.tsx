import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Architecture } from "@/components/Architecture";
import { Migration } from "@/components/Migration";
import { Editions } from "@/components/Editions";
import { Benchmarks } from "@/components/Benchmarks";
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
        <Architecture />
        <Migration />
        <Editions />
        <Benchmarks />
        <Security />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
