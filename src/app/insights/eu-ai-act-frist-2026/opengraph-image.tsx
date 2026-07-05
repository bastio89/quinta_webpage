import { insightOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return insightOgImage("/insights/eu-ai-act-frist-2026", "de");
}
