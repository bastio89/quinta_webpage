# Regressionstests

End-to-End-Tests (Playwright) gegen den Production-Build. Sie decken ab:

- **routes** — jede Seite (DE+EN) rendert mit Status 200, H1 und ohne Konsolenfehler; Assets (Sitemap, Manifest, PDFs, OG-Bilder) erreichbar; 404-Seite.
- **navigation** — Ressourcen-Dropdown, Anker-Links, Demo-Button, Sprachumschalter (inkl. Fallback), Mobile-Menü, Skip-Link.
- **calculator** — TCO-Rechner: Standardwerte, Live-Neuberechnung per Slider, Grenzfall „Cloud bleibt günstiger“, Quellen-Sektion.
- **check** — Compliance-Self-Check: kompletter Durchlauf (kritisches + positives Szenario), Zurück-Button, Neustart, EN-Fassung.
- **widgets** — FAQ-Accordion, CodeTabs (Tab-Wechsel + Zwischenablage), Cookie-Banner (Persistenz), Vergleichstabelle, Karriere-Flow, Glossar-Querverlinkung.
- **links** — kein interner Link auf den Kernseiten liefert ≥ 400.

## Ausführen

```bash
bun run build        # einmalig (oder nach Änderungen)
bun run test         # startet den Server selbst auf Port 4545
```

Beim ersten Mal lokal: `bunx playwright install chromium`.
In Umgebungen mit vorinstalliertem Browser stattdessen:

```bash
PW_EXECUTABLE_PATH=/pfad/zu/chromium bun run test
```
