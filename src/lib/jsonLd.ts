import type { FaqItem } from "./faq";

export const SITE_URL = "https://quinta.twenty5ai.com";

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "twenty5ai",
  url: SITE_URL,
  email: "hello@twenty5ai.com",
  description:
    "twenty5ai entwickelt Quinta — die souveräne On-Premise-KI-Plattform, die aus eigener Hardware einen privaten, OpenAI-kompatiblen KI-Dienst macht.",
  logo: `${SITE_URL}/icon.svg`,
  brand: {
    "@type": "Brand",
    name: "Quinta",
  },
};

export function faqPageLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
