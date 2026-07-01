import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#0E1A24",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 132,
            height: 132,
            borderRadius: 40,
            background: "#1F5C4D",
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 22,
              transform: "translateX(-50%)",
              width: 46,
              height: 60,
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              background: "#0E1A24",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 14,
              bottom: 8,
              width: 22,
              height: 54,
              borderRadius: 11,
              background: "#1F5C4D",
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 26,
              transform: "translateX(-50%)",
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#C9A227",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
