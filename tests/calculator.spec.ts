import { test, expect, type Page } from "@playwright/test";
import { dismissCookies } from "./helpers";

/** Setzt einen Range-Slider so, dass React die Änderung mitbekommt. */
async function setRange(page: Page, label: string, value: string) {
  const input = page.locator("label", { hasText: label }).locator('input[type="range"]');
  await input.fill(value);
}

test.describe("TCO-Rechner (/rechner)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/rechner");
    await dismissCookies(page);
  });

  test("Standardszenario zeigt korrekte Werte", async ({ page }) => {
    // Cloud-Tarif als 2-Nachkommastellen-Betrag (Regression: wurde als „1 €“ gerundet)
    await expect(page.getByText("0,60 €", { exact: true })).toBeVisible();
    // Ergebnis-Karten
    await expect(page.getByText("1.800 €")).toBeVisible();
    await expect(page.getByText("zzgl. einmalig 30.000 €")).toBeVisible();
    // Amortisation
    await expect(page.getByText(/Nach rund 22 Monaten/)).toBeVisible();
    // \s statt Leerzeichen: Intl setzt ein geschütztes Leerzeichen vor dem €
    await expect(page.getByText(/Ersparnis über 36 Monate: 20\.400\s€/)).toBeVisible();
    // Diagramm vorhanden
    await expect(page.locator("svg[aria-label='Kumulierte Kosten']")).toBeVisible();
  });

  test("Slider-Änderung rechnet live neu", async ({ page }) => {
    await setRange(page, "Cloud-Tarif je 1 Mio. Tokens", "1");
    await expect(page.getByText("1,00 €")).toBeVisible();
    await expect(page.getByText("3.000 €")).toBeVisible(); // 3 Mrd. Tokens × 1 €/1M
  });

  test("unwirtschaftliches Szenario zeigt Cloud-günstiger-Hinweis", async ({ page }) => {
    await setRange(page, "Anfragen pro Monat", "10000");
    await expect(page.getByText(/bleibt Cloud günstiger/)).toBeVisible();
  });

  test("Quellen-Sektion ist aufklappbar und nennt Anker", async ({ page }) => {
    await page.getByText("Grundlage der Voreinstellungen").click();
    await expect(page.getByRole("link", { name: "openai.com" })).toBeVisible();
    await expect(page.getByRole("link", { name: "docs.github.com" })).toBeVisible();
  });
});

test("EN-Rechner rendert mit englischen Labels", async ({ page }) => {
  await page.goto("/en/rechner");
  await dismissCookies(page);
  await expect(page.getByText("Requests per month")).toBeVisible();
  await expect(page.getByText(/After about 22 months/)).toBeVisible();
});
