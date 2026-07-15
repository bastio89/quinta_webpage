import type { Page } from "@playwright/test";

/** Alle statischen Seiten-Routen der Website (DE + EN). */
export const PAGE_ROUTES = [
  "/",
  "/en",
  "/benchmark",
  "/en/benchmark",
  "/vergleich",
  "/en/vergleich",
  "/rechner",
  "/en/rechner",
  "/check",
  "/en/check",
  "/insights",
  "/en/insights",
  "/insights/quinta-openai-base-url",
  "/insights/eu-ai-act-frist-2026",
  "/insights/bounded-admission-last",
  "/insights/datensouveraenitaet-cloud-act",
  "/insights/on-premise-vs-cloud-kosten",
  "/insights/nis2-ki-betrieb",
  "/en/insights/quinta-openai-base-url",
  "/en/insights/eu-ai-act-frist-2026",
  "/en/insights/bounded-admission-last",
  "/en/insights/datensouveraenitaet-cloud-act",
  "/en/insights/on-premise-vs-cloud-kosten",
  "/en/insights/nis2-ki-betrieb",
  "/glossar",
  "/en/glossar",
  "/glossar/souveraene-ki",
  "/glossar/bounded-admission",
  "/glossar/eu-ai-act",
  "/en/glossar/souveraene-ki",
  "/en/glossar/bounded-admission",
  "/karriere",
  "/en/karriere",
  "/karriere/onboarding-engineer",
  "/karriere/freelance-software-engineer",
  "/en/karriere/onboarding-engineer",
  "/en/karriere/freelance-software-engineer",
  "/impressum",
  "/datenschutz",
  "/agb",
] as const;

/** Nicht-HTML-Ressourcen, die erreichbar sein müssen. */
export const ASSET_ROUTES = [
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
  "/icon.svg",
  "/apple-icon",
  "/opengraph-image",
  "/quinta-whitepaper.pdf",
  "/quinta-whitepaper-en.pdf",
  "/insights/eu-ai-act-frist-2026/opengraph-image",
  "/karriere/onboarding-engineer/opengraph-image",
] as const;

/** Blendet das Cookie-Banner aus, damit es keine Klicks verdeckt. */
export async function dismissCookies(page: Page) {
  const btn = page.getByRole("button", { name: /Verstanden|Got it/ });
  if (await btn.isVisible().catch(() => false)) {
    await btn.click();
  }
}

/** Sammelt Konsolen-Fehler und Page-Errors einer Seite ein. */
export function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  return errors;
}
