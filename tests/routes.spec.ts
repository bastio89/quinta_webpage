import { test, expect } from "@playwright/test";
import { PAGE_ROUTES, ASSET_ROUTES, collectErrors } from "./helpers";

/**
 * Jede Seite antwortet mit 200, rendert eine H1 und wirft keine
 * Konsolen- oder Laufzeitfehler.
 */
for (const route of PAGE_ROUTES) {
  test(`Seite ${route} rendert fehlerfrei`, async ({ page }) => {
    const errors = collectErrors(page);
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(errors).toEqual([]);
  });
}

for (const route of ASSET_ROUTES) {
  test(`Ressource ${route} ist erreichbar`, async ({ request }) => {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
  });
}

test("unbekannte Route liefert 404 mit eigener Fehlerseite", async ({ page }) => {
  const response = await page.goto("/diese-seite-gibt-es-nicht");
  expect(response?.status()).toBe(404);
  await expect(page.locator("main")).toContainText("404");
});

test("Sitemap enthält Kern-Routen", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const path of ["/vergleich", "/rechner", "/check", "/glossar", "/karriere", "/insights"]) {
    expect(xml).toContain(path);
  }
});
