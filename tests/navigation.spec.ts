import { test, expect } from "@playwright/test";
import { dismissCookies } from "./helpers";

test.describe("Top-Navigation (Desktop)", () => {
  test("Ressourcen-Dropdown öffnet und navigiert", async ({ page }) => {
    await page.goto("/");
    await dismissCookies(page);
    await page.getByRole("button", { name: "Ressourcen" }).hover();
    const dropdown = page.locator("nav .group");
    await expect(dropdown.getByRole("link", { name: "Kosten-Rechner" })).toBeVisible();
    await dropdown.getByRole("link", { name: "Self-Check" }).click();
    await expect(page).toHaveURL("/check");
    await expect(page.locator("h1")).toContainText("Welche KI-Regulatorik");
  });

  test("Anker-Links der Startseite springen zu Sektionen", async ({ page }) => {
    await page.goto("/");
    await dismissCookies(page);
    await page.getByRole("banner").getByRole("link", { name: "Leistung" }).click();
    await expect(page).toHaveURL(/#leistung/);
    await expect(page.locator("section#leistung")).toBeInViewport();
  });

  test("Demo-Button führt zum Kontakt-Anker", async ({ page }) => {
    await page.goto("/");
    await dismissCookies(page);
    await page.locator("header").getByRole("link", { name: "Demo buchen" }).click();
    await expect(page).toHaveURL(/#kontakt/);
  });
});

test.describe("Sprachumschalter", () => {
  const CASES: Array<[string, string]> = [
    ["/", "/en"],
    ["/benchmark", "/en/benchmark"],
    ["/rechner", "/en/rechner"],
    ["/vergleich", "/en/vergleich"],
    ["/glossar/bounded-admission", "/en/glossar/bounded-admission"],
    ["/karriere/onboarding-engineer", "/en/karriere/onboarding-engineer"],
    ["/insights/quinta-openai-base-url", "/en/insights/quinta-openai-base-url"],
  ];

  for (const [de, en] of CASES) {
    test(`DE→EN→DE: ${de}`, async ({ page }) => {
      await page.goto(de);
      await dismissCookies(page);
      await page.locator("header").getByRole("link", { name: "Switch to English" }).click();
      await expect(page).toHaveURL(en);
      await page.locator("header").getByRole("link", { name: "Auf Deutsch wechseln" }).click();
      await expect(page).toHaveURL(de);
    });
  }

  test("Seite ohne EN-Fassung fällt auf /en zurück", async ({ page }) => {
    await page.goto("/impressum");
    await dismissCookies(page);
    await page.locator("header").getByRole("link", { name: "Switch to English" }).click();
    await expect(page).toHaveURL("/en");
  });
});

test.describe("Mobile-Menü", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("öffnet, zeigt Ressourcen und navigiert", async ({ page }) => {
    await page.goto("/");
    await dismissCookies(page);
    await page.getByRole("button", { name: "Menü umschalten" }).click();
    const menu = page.locator("header");
    await expect(menu.getByRole("link", { name: "Glossar" })).toBeVisible();
    await menu.getByRole("link", { name: "Kosten-Rechner" }).click();
    await expect(page).toHaveURL("/rechner");
  });
});

test("Skip-Link ist erstes fokussierbares Element und springt zum Inhalt", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toHaveText("Zum Inhalt springen");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#inhalt/);
});
