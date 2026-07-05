import { ImageResponse } from "next/og";

export const alt = "Quinta — Souveräne On-Premise-KI von twenty5ai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#93ABF6",
            fontWeight: 600,
          }}
        >
          Souveräne On-Premise-KI · twenty5ai
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            <span style={{ color: "#F4F3EF" }}>quinta</span>
            <span style={{ color: "#5B7EF0" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: -1,
              color: "#F4F3EF",
            }}
          >
            Kein Byte verlässt das Haus.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9AA3BE" }}>
          On-Premise · OpenAI-kompatibel · DSGVO- &amp; EU-AI-Act-ready
        </div>
      </div>
    ),
    { ...size },
  );
}
