import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Calculator", title: "Cloud vs. on-premise: the model calculation", lang: "en" });
}
