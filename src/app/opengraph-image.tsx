import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0E1A24 0%, #14222E 55%, #123830 100%)",
          color: "#F4F6F5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              position: "relative",
              width: 64,
              height: 64,
              borderRadius: 19,
              background: "#1F5C4D",
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 11,
                transform: "translateX(-50%)",
                width: 22,
                height: 29,
                borderTopLeftRadius: 11,
                borderTopRightRadius: 11,
                background: "#0E1A24",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 7,
                bottom: 4,
                width: 11,
                height: 26,
                borderRadius: 6,
                background: "#1F5C4D",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5, display: "flex" }}>quinta</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 600, lineHeight: 1.12, letterSpacing: -1.5 }}>
            Ihre eigene, private KI-Zentrale.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9DB0BE", fontWeight: 400 }}>
            OpenAI-kompatibel · 100&nbsp;% On-Premise · Open Source Kern
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 20, color: "#C6D2DA" }}>
          <div style={{ display: "flex" }}>Souverän</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>DSGVO- &amp; DSG-konform</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>Made in Austria</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
