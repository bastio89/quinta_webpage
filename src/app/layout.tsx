import type { Metadata } from "next";
import { Archivo, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["italic"],
  weight: ["400", "500"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://quinta.twenty5ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quinta – Die souveräne KI-Plattform von twenty5ai",
    template: "%s · Quinta",
  },
  description:
    "Quinta macht aus Ihrer eigenen Hardware eine private, OpenAI-kompatible KI-Zentrale. 100 % On-Premise, DSGVO- und DSG-konform, mit offenem Kern. Ihre Daten bleiben zu Hause.",
  keywords: [
    "souveräne KI",
    "on-premise LLM",
    "OpenAI-kompatibles Gateway",
    "private KI-Plattform",
    "DSGVO KI",
    "DSG-konforme KI",
    "Quinta",
    "twenty5ai",
  ],
  authors: [{ name: "twenty5ai" }],
  openGraph: {
    title: "Quinta – Die souveräne KI-Plattform von twenty5ai",
    description:
      "Ihre eigene, private KI-Zentrale — OpenAI-kompatibel, aber Ihre Daten bleiben zu 100 % bei Ihnen.",
    url: siteUrl,
    siteName: "Quinta",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinta – Die souveräne KI-Plattform von twenty5ai",
    description:
      "Ihre eigene, private KI-Zentrale — OpenAI-kompatibel, aber Ihre Daten bleiben zu 100 % bei Ihnen.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh bg-stone-50 font-sans text-ink-700 antialiased">{children}</body>
    </html>
  );
}
