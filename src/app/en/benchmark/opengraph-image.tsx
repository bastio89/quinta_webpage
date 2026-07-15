import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Benchmark",
    title: "Same engine. 18× more success under load.",
    lang: "en",
  });
}
