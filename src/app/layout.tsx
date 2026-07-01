import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    "Quinta macht aus Ihrer eigenen Hardware eine private, OpenAI-kompatible KI-Zentrale. 100 % On-Premise, DSGVO-konform, mit offenem Kern. Ihre Daten bleiben zu Hause.",
  keywords: [
    "souveräne KI",
    "on-premise LLM",
    "OpenAI-kompatibles Gateway",
    "private KI-Plattform",
    "DSGVO KI",
    "Quinta",
    "twenty5ai",
    "vLLM",
    "Ollama Gateway",
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
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-dvh bg-mist-50 font-sans text-ink-900 antialiased">{children}</body>
    </html>
  );
}
