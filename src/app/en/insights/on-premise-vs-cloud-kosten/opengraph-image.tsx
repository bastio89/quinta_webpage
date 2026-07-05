import { insightOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export default function Image() {
  return insightOgImage("/en/insights/on-premise-vs-cloud-kosten", "en");
}
