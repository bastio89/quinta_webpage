import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/jsonLd";
import { INSIGHTS } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Nur interne Artikel-Routen (nicht /vergleich, das separat gelistet ist).
  const insightArticles: MetadataRoute.Sitemap = INSIGHTS.filter((a) =>
    a.href.startsWith("/insights/"),
  ).map((a) => ({
    url: `${SITE_URL}${a.href}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/en`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/vergleich`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/insights`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...insightArticles,
    { url: `${SITE_URL}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
