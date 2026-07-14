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

export function articleLd(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    author: { "@type": "Organization", name: "twenty5ai" },
    publisher: {
      "@type": "Organization",
      name: "twenty5ai",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
  };
}

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

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function jobPostingLd(opts: {
  title: string;
  description: string;
  datePosted: string;
  employmentType: string;
  path: string;
  remote?: boolean;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opts.title,
    description: opts.description,
    datePosted: opts.datePosted,
    employmentType: opts.employmentType,
    directApply: true,
    url: `${SITE_URL}${opts.path}`,
    hiringOrganization: {
      "@type": "Organization",
      name: "twenty5ai",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "DE" },
    },
    ...(opts.remote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "EU" },
        }
      : {}),
  };
}

export function definedTermSetLd(opts: {
  name: string;
  description: string;
  path: string;
  terms: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    hasDefinedTerm: opts.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      url: `${SITE_URL}${t.path}`,
    })),
  };
}
