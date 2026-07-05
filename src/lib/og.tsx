import { ImageResponse } from "next/og";
import { INSIGHTS, INSIGHTS_EN } from "./insights";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Quinta — Souveräne On-Premise-KI von twenty5ai";
export const ogContentType = "image/png";

type Lang = "de" | "en";

// Gemeinsamer OG-Renderer: dunkle Marke, Kategorie-Chip, großer Titel.
export function renderOgImage({
  eyebrow,
  title,
  lang = "de",
}: {
  eyebrow: string;
  title: string;
  lang?: Lang;
}) {
  const len = title.length;
  const titleSize = len > 82 ? 44 : len > 58 ? 54 : len > 34 ? 64 : 76;
  const footer =
    lang === "en"
      ? "On-premise · OpenAI-compatible · GDPR & EU-AI-Act ready"
      : "On-Premise · OpenAI-kompatibel · DSGVO- & EU-AI-Act-ready";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C1120",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -2 }}>
            <span style={{ color: "#F4F3EF" }}>quinta</span>
            <span style={{ color: "#5B7EF0" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#93ABF6",
              fontWeight: 600,
              border: "1px solid #232E52",
              borderRadius: 6,
              padding: "8px 16px",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.08,
            color: "#F4F3EF",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#9AA3BE" }}>{footer}</div>
      </div>
    ),
    { ...ogSize },
  );
}

// Bequemer Helfer für Insights-Artikel: Meta anhand des Pfads nachschlagen.
export function insightOgImage(href: string, lang: Lang) {
  const list = lang === "en" ? INSIGHTS_EN : INSIGHTS;
  const meta = list.find((i) => i.href === href);
  return renderOgImage({
    eyebrow: meta?.category ?? (lang === "en" ? "Insights" : "Insights"),
    title: meta?.title ?? "Quinta",
    lang,
  });
}
