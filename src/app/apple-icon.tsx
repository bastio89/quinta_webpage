import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Vektor-Wortmarke „q." — als gefüllte Formen (Ring aus zwei Kreisen), damit es
// in next/og (Satori) zuverlässig rendert. Deckungsgleich mit src/app/icon.svg.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0C1120",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 100 100">
          <circle cx="41" cy="43" r="19.5" fill="#F4F3EF" />
          <circle cx="41" cy="43" r="10.5" fill="#0C1120" />
          <rect x="51.5" y="35" width="9" height="39" rx="1.5" fill="#F4F3EF" />
          <rect x="66" y="61" width="13" height="13" rx="3" fill="#5B7EF0" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
