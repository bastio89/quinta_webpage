import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Benchmark",
    title: "Gleiche Engine. 18× mehr Erfolg unter Last.",
    lang: "de",
  });
}
