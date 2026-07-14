import { JOBS, getJob } from "@/lib/jobs";
import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJob(slug);
  return renderOgImage({
    eyebrow: "Careers",
    title: job?.en.title ?? "Careers",
    lang: "en",
  });
}
