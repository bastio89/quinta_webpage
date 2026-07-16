import { test, expect } from "@playwright/test";
import { dismissCookies } from "./helpers";

test.describe("FAQ-Accordion (Startseite)", () => {
  test("öffnet und schließt Einträge", async ({ page }) => {
    await page.goto("/");
    await dismissCookies(page);
    const second = page.getByRole("button", { name: "Welche Modelle können wir betreiben?" });
    await second.scrollIntoViewIfNeeded();
    await expect(second).toHaveAttribute("aria-expanded", "false");
    await second.click();
    await expect(second).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByText(/leichtgewichtiger Modell-Runner steht für den einfachen/)).toBeVisible();
    await second.click();
    await expect(second).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("CodeTabs im Integrations-Ratgeber", () => {
  test.use({ permissions: ["clipboard-read", "clipboard-write"] });

  test("Tab-Wechsel zeigt anderen Code, Kopieren füllt die Zwischenablage", async ({ page }) => {
    await page.goto("/insights/quinta-openai-base-url");
    await dismissCookies(page);
    const firstWindow = page.locator(".code-window").first();
    await firstWindow.scrollIntoViewIfNeeded();

    // Standard-Tab: Python
    await expect(firstWindow.locator("pre")).toContainText("from openai import OpenAI");
    // Wechsel auf cURL
    await firstWindow.getByRole("button", { name: "cURL" }).click();
    await expect(firstWindow.locator("pre")).toContainText("curl https://quinta");

    // Kopieren
    await firstWindow.getByRole("button", { name: "Code kopieren" }).click();
    await expect(firstWindow.getByText("Kopiert")).toBeVisible();
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toContain("chat/completions");
  });
});

test.describe("Demo-Formular (#kontakt)", () => {
  test("rendert alle Felder und ist ausfüllbar", async ({ page }) => {
    await page.goto("/#kontakt");
    await dismissCookies(page);
    const form = page.locator("#kontakt form");
    await form.scrollIntoViewIfNeeded();
    await form.getByLabel("Name").fill("Erika Muster");
    await form.getByLabel("Firma").fill("Musterbank AG");
    await form.getByLabel("E-Mail").fill("erika@musterbank.example");
    await form.getByLabel("Branche").selectOption("Finanzen");
    await form.getByLabel("Ihr Anliegen").fill("Interne Wissenssuche on-premise.");
    await expect(page.getByRole("button", { name: /Anfrage per E-Mail senden/ })).toBeVisible();
  });

  test("Pflichtfelder verhindern leeres Absenden", async ({ page }) => {
    await page.goto("/#kontakt");
    await dismissCookies(page);
    await page.getByRole("button", { name: /Anfrage per E-Mail senden/ }).click();
    // HTML5-Validierung: das Formular bleibt, Name ist ungültig
    await expect(page.locator("#kontakt input:invalid").first()).toBeAttached();
  });

  test("baut korrekten mailto-Link beim Absenden", async ({ page }) => {
    await page.goto("/#kontakt");
    await dismissCookies(page);
    // Der versteckte Anker soll nicht wirklich navigieren — Klick abfangen.
    await page.evaluate(() => {
      const a = document.querySelector("#kontakt [data-mailto-target]") as HTMLAnchorElement;
      a.addEventListener("click", (e) => e.preventDefault(), { capture: true });
    });
    const form = page.locator("#kontakt form");
    await form.getByLabel("Firma").fill("Musterbank AG");
    await form.getByLabel("Name").fill("Erika Muster");
    await form.getByLabel("E-Mail").fill("erika@musterbank.example");
    await form.getByLabel("Branche").selectOption("Finanzen");
    await form.getByLabel("Ihr Anliegen").fill("Interne Wissenssuche.");
    await page.getByRole("button", { name: /Anfrage per E-Mail senden/ }).click();

    const href = await page.locator("#kontakt [data-mailto-target]").getAttribute("href");
    expect(href).toContain("mailto:hello@twenty5ai.com");
    const decoded = decodeURIComponent(href ?? "");
    expect(decoded).toContain("Musterbank AG");
    expect(decoded).toContain("Finanzen");
    expect(decoded).toContain("Interne Wissenssuche.");
  });
});

test.describe("Cookie-Banner", () => {
  test("erscheint beim ersten Besuch, verschwindet dauerhaft nach Zustimmung", async ({ page }) => {
    await page.goto("/");
    const banner = page.getByRole("dialog", { name: "Cookie-Hinweis" });
    await expect(banner).toBeVisible();
    await expect(banner.getByRole("link", { name: "Datenschutzerklärung" })).toHaveAttribute(
      "href",
      "/datenschutz",
    );
    await banner.getByRole("button", { name: "Verstanden" }).click();
    await expect(banner).toBeHidden();
    await page.reload();
    await expect(page.getByRole("dialog", { name: "Cookie-Hinweis" })).toHaveCount(0);
  });

  test("zeigt englischen Text unter /en", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("dialog", { name: "Cookie notice" })).toBeVisible();
  });
});

test.describe("Vergleichstabelle", () => {
  test("rendert alle vier Spalten und Gruppen", async ({ page }) => {
    await page.goto("/vergleich");
    await dismissCookies(page);
    const table = page.locator("table");
    await table.scrollIntoViewIfNeeded();
    for (const head of ["Modell-Runner", "vLLM", "LocalAI", "quinta."]) {
      await expect(table.locator("th", { hasText: head }).first()).toBeVisible();
    }
    await expect(table.getByText("18× Erfolgsquote")).toBeVisible();
  });
});

test.describe("Karriere", () => {
  test("Stellenliste verlinkt auf Detailseite mit Bewerbungs-CTA", async ({ page }) => {
    await page.goto("/karriere");
    await dismissCookies(page);
    await page.getByRole("link", { name: /Onboarding Engineer/ }).click();
    await expect(page).toHaveURL("/karriere/onboarding-engineer");
    const apply = page.getByRole("link", { name: "Jetzt bewerben" });
    await expect(apply).toBeVisible();
    await expect(apply).toHaveAttribute("href", /^mailto:hello@twenty5ai\.com/);
  });
});

test.describe("Benchmark-Seite", () => {
  test("zeigt Messzahlen, Aufbau und ehrliche Einordnung", async ({ page }) => {
    await page.goto("/benchmark");
    await dismissCookies(page);
    await expect(page.locator("h1")).toContainText("18× mehr Erfolg");
    // Messaufbau-Fakten
    await expect(page.getByText("NVIDIA DGX Spark, 128 GB")).toBeVisible();
    await expect(page.getByText("31.200 Requests, bis 512 gleichzeitige Anfragen")).toBeVisible();
    // Transparenz-Box
    await expect(page.getByText("Ehrliche Einordnung", { exact: true })).toBeVisible();
    await expect(page.getByText(/keine unabhängige\s+Zertifizierung/)).toBeVisible();
    // Verweise auf Artikel und Glossar
    await expect(
      page.getByRole("link", { name: /Bounded Admission: warum ein Inferenz-Server/ }),
    ).toBeVisible();
  });

  test("Startseite verlinkt auf den Benchmark", async ({ page }) => {
    await page.goto("/");
    await dismissCookies(page);
    const link = page.getByRole("link", { name: /Zum ausführlichen Benchmark/ });
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(page).toHaveURL("/benchmark");
  });
});

test.describe("Glossar", () => {
  test("Begriffskarte öffnet Detailseite mit Weiterlesen-Links", async ({ page }) => {
    await page.goto("/glossar");
    await dismissCookies(page);
    await page.getByRole("link", { name: /Bounded Admission/ }).click();
    await expect(page).toHaveURL("/glossar/bounded-admission");
    await expect(page.getByText("Weiterlesen")).toBeVisible();
    await page.getByRole("link", { name: /Quinta-Gateway/ }).click();
    await expect(page).toHaveURL("/glossar/quinta-gateway");
  });
});
