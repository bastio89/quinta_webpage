import { test, expect } from "@playwright/test";

/**
 * Alle internen Links auf Kernseiten antworten mit 200 —
 * fängt tote Links nach Umbenennungen/Umzügen ab.
 */
const SOURCES = ["/", "/en", "/insights", "/glossar", "/karriere", "/vergleich"] as const;

test("keine toten internen Links auf Kernseiten", async ({ page, request }) => {
  const seen = new Set<string>();

  for (const src of SOURCES) {
    await page.goto(src);
    const hrefs = await page.$$eval("a[href]", (as) =>
      as.map((a) => a.getAttribute("href") ?? ""),
    );
    for (const href of hrefs) {
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const path = href.split("#")[0];
      if (!path || seen.has(path)) continue;
      seen.add(path);
    }
  }

  const broken: string[] = [];
  for (const path of [...seen].sort()) {
    const res = await request.get(path);
    if (res.status() >= 400) broken.push(`${path} → ${res.status()}`);
  }
  expect(broken, `Tote Links:\n${broken.join("\n")}`).toEqual([]);
});
