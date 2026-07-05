import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqPageLd } from "@/lib/jsonLd";
import { LANDING_FAQ_EN } from "@/lib/faq";
import {
  HeroEn,
  RiskEn,
  PlatformEn,
  MigrationEn,
  BenchmarksEn,
  RolloutEn,
  CtaEn,
} from "@/components/en/marketing";
import { EditionsEn, SecurityEn, UseCasesEn, FaqEn } from "@/components/en/business";

export const metadata: Metadata = {
  title: "Quinta – The sovereign on-premise AI platform by twenty5ai",
  description:
    "Quinta turns your own hardware into a private, OpenAI-compatible AI service — enterprise management included. Not a single byte leaves the building.",
  alternates: {
    canonical: "/en",
    languages: { de: "/", en: "/en" },
  },
  openGraph: {
    title: "Quinta – The sovereign on-premise AI platform by twenty5ai",
    description:
      "Your own private AI hub — OpenAI-compatible, but your data stays 100% with you.",
    url: "/en",
    locale: "en",
    type: "website",
  },
};

export default function HomeEn() {
  return (
    <>
      <JsonLd data={faqPageLd(LANDING_FAQ_EN)} />
      <Navbar lang="en" />
      <main>
        <HeroEn />
        <RiskEn />
        <PlatformEn />
        <MigrationEn />
        <EditionsEn />
        <BenchmarksEn />
        <RolloutEn />
        <SecurityEn />
        <UseCasesEn />
        <FaqEn />
        <CtaEn />
      </main>
      <Footer lang="en" />
    </>
  );
}
