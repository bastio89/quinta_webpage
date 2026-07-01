# Quinta – Marketing-Webseite

Neues Designkonzept & vollständiges Markenpaket für **Quinta**, die souveräne
On-Premise-KI-Plattform von twenty5ai (Clean-Room-Nachfolger von xinity-ai).
Design-Inspiration: [onyx.app](https://onyx.app) (technische Tiefe, dunkler
Hero, Terminal-Ästhetik), [anny.co](https://anny.co) und
[nextesy.com](https://nextesy.com) (klares DACH-Enterprise-SaaS-Layout, große
Kennzahlen, FAQ-Aufbau).

## Design-System

| Token | Wert | Verwendung |
|---|---|---|
| `sovereign-600` | `#1F5C4D` | Primärfarbe – Buttons, Akzente, Icons |
| `ink-950` | `#0E1A24` | Dunkle Flächen (Hero, Navbar, Footer, CTA) |
| `gold-500` | `#C9A227` | Sparsamer Akzent (Schlussstein im Logo, Kennzahlen) |
| `mist-50…900` | `#FFFFFF…#232A28` | Helle Flächen, Text, Trennlinien |
| `ok` / `warn` / `error` | `#2E7D57` / `#B4881B` / `#B23A48` | Statusfarben |

Typografie: **Inter** (UI/Fließtext), **JetBrains Mono** (Code, Terminal,
technische Labels). Alle Tokens sind in [src/app/globals.css](src/app/globals.css)
als Tailwind-v4-`@theme`-Variablen definiert — Farben/Fonts lassen sich zentral
anpassen.

### Logo-Konzept
Die Bildmarke ([src/components/LogoMark.tsx](src/components/LogoMark.tsx),
statisch auch unter [public/brand/](public/brand/)) zeigt einen geschlossenen
**Torbogen in einem Gewölbe-Quadrat** — die Enclave. Der Bogen ist die Tür nach
innen, ein Schweif macht daraus ein „Q": *Alles kommt an, nichts verlässt das
Haus.* Der Gold-Punkt am Bogenscheitel ist der „Schlussstein" (Vertrauen,
Wertigkeit). Die Marke nutzt `currentColor`, ist also für helle und dunkle
Flächen gleichermaßen einsetzbar.

Favicon/App-Icons werden von Next.js automatisch generiert:
[src/app/icon.svg](src/app/icon.svg) (Browser-Favicon),
[src/app/apple-icon.tsx](src/app/apple-icon.tsx) und
[src/app/opengraph-image.tsx](src/app/opengraph-image.tsx) (Social-Share-Karte).

## Seitenstruktur (`src/app/page.tsx`)
1. **Hero** – Kernversprechen, Terminal-Snippet (Install-Command), Vertrauens-Badges
2. **Architektur** – die fünf Bausteine (Gateway, Daemon, Dashboard, Infoserver, DB) als Fluss-Diagramm
3. **Migration** – Vorher/Nachher-Code (OpenAI → Quinta, zwei geänderte Zeilen)
4. **Funktionen** – 9 Dashboard-Kernfunktionen als Karten
5. **Benchmarks** – Kennzahlen der zugrunde liegenden Engine (klar als solche gekennzeichnet)
6. **Sicherheit** – Datenhoheit, DSGVO, RBAC, vier Login-Methoden
7. **Für-wen-Sektion** – Kanzleien, Banken, Industrie, Behörden (Problem/Lösung)
8. **FAQ**, **CTA**, **Footer** (inkl. Impressum/Datenschutz-Platzhalter)

Alle Texte sind bewusst **ehrlich formuliert** (keine erfundenen
Kundenlogos/Testimonials) und decken sich mit `HANDBUCH-QUINTA.md` und
`DASHBOARD-QUINTA.md` aus dem übergeordneten Projektordner.

## Entwicklung

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # Produktions-Build
bun run start    # Produktions-Server
```

## Vor dem Go-Live noch zu tun
- Platzhalter in `/impressum` (Firmendaten) und `/datenschutz` (juristisch prüfen) ausfüllen
- Echte Domain/Kontakt-Mailadresse statt `hello@twenty5ai.com` / `twenty5ai.com` hinterlegen
- LinkedIn-/GitHub-Links auf die echten twenty5ai-Profile setzen
