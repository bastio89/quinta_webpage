import type { Metadata } from "next";
import { Archivo, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://quinta.twenty5ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quinta – Die souveräne On-Premise-KI-Plattform von twenty5ai",
    template: "%s · Quinta",
  },
  description:
    "Quinta macht aus Ihrer eigenen Hardware einen privaten, OpenAI-kompatiblen KI-Dienst — Enterprise-Verwaltung inklusive. Kein Byte verlässt das Haus.",
  keywords: [
    "souveräne KI",
    "on-premise LLM",
    "OpenAI-kompatibles Gateway",
    "private KI-Plattform",
    "DSGVO KI",
    "DSG-konforme KI",
    "EU AI Act",
    "Quinta",
    "twenty5ai",
  ],
  authors: [{ name: "twenty5ai" }],
  openGraph: {
    title: "Quinta – Die souveräne On-Premise-KI-Plattform von twenty5ai",
    description:
      "Ihre eigene, private KI-Zentrale — OpenAI-kompatibel, aber Ihre Daten bleiben zu 100 % bei Ihnen.",
    url: siteUrl,
    siteName: "Quinta",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinta – Die souveräne On-Premise-KI-Plattform von twenty5ai",
    description:
      "Ihre eigene, private KI-Zentrale — OpenAI-kompatibel, aber Ihre Daten bleiben zu 100 % bei Ihnen.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh bg-stone-50 font-sans text-ink-700 antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
