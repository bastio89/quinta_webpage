import { test, expect, type Page } from "@playwright/test";
import { dismissCookies } from "./helpers";

async function answer(page: Page, optionText: string | RegExp) {
  await page.getByRole("button", { name: optionText }).click();
}

test.describe("Compliance-Self-Check (/check)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/check");
    await dismissCookies(page);
  });

  test("kompletter Durchlauf mit Handlungsbedarf-Ergebnis", async ({ page }) => {
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
    await answer(page, /Kritische oder wichtige Einrichtung/);
    await answer(page, /Entscheidungen über Personen/);
    await answer(page, /Personenbezogene Daten \(Kunden/);
    await answer(page, /Cloud-API eines US-Anbieters/);
    await answer(page, /Nein oder unklar/);

    await expect(page.getByText("Ihre Einschätzung")).toBeVisible();
    await expect(page.getByText("EU AI Act: Hochrisiko wahrscheinlich")).toBeVisible();
    await expect(page.getByText("NIS2 betrifft Sie")).toBeVisible();
    await expect(page.getByText("Datenabfluss über US-Cloud")).toBeVisible();
    // Befunde verlinken in die Fachartikel
    await expect(page.getByRole("link", { name: /EU AI Act & die Frist 2026/ })).toBeVisible();
    // Disclaimer bleibt sichtbar
    await expect(page.getByText(/keine Rechtsberatung/)).toBeVisible();
  });

  test("positives Szenario endet mit Solide-Befund", async ({ page }) => {
    await answer(page, "Andere Branche");
    await answer(page, /Reine Textverarbeitung/);
    await answer(page, /Keine personenbezogenen Daten/);
    await answer(page, /On-Premise \/ eigene Infrastruktur/);
    await answer(page, /Ja, vollständig/);

    await expect(page.getByText("Audit-Fähigkeit gegeben")).toBeVisible();
    await expect(page.getByText("Daten bleiben in Ihrer Kontrolle")).toBeVisible();
  });

  test("Zurück-Button führt zur vorherigen Frage", async ({ page }) => {
    await answer(page, "Andere Branche");
    await expect(page.getByText("Frage 2 von 5")).toBeVisible();
    await page.getByRole("button", { name: "Zurück" }).click();
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
  });

  test("Neu starten setzt den Check zurück", async ({ page }) => {
    await answer(page, "Andere Branche");
    await answer(page, /Reine Textverarbeitung/);
    await answer(page, /Keine personenbezogenen Daten/);
    await answer(page, /On-Premise \/ eigene Infrastruktur/);
    await answer(page, /Ja, vollständig/);
    await page.getByRole("button", { name: "Neu starten" }).click();
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
  });
});

test("EN-Self-Check läuft durch", async ({ page }) => {
  await page.goto("/en/check");
  await dismissCookies(page);
  await expect(page.getByText("Question 1 of 5")).toBeVisible();
  await page.getByRole("button", { name: /Critical or important entity/ }).click();
  await page.getByRole("button", { name: /Decisions about people/ }).click();
  await page.getByRole("button", { name: /Personal data \(customers/ }).click();
  await page.getByRole("button", { name: /Cloud API of a US provider/ }).click();
  await page.getByRole("button", { name: /No or unclear/ }).click();
  await expect(page.getByText("Your assessment")).toBeVisible();
  await expect(page.getByText("NIS2 applies to you")).toBeVisible();
});
