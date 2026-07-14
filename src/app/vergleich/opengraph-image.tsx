import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Vergleich", title: "Quinta vs. vLLM, LocalAI und andere Inferenz-Engines", lang: "de" });
}
