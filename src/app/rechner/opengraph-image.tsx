import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Rechner", title: "Cloud vs. On-Premise: die Modellrechnung", lang: "de" });
}
