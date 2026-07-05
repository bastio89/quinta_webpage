import { GLOSSARY, getGlossaryEntry, CATEGORY_LABELS } from "@/lib/glossary";
import { renderOgImage, ogSize, ogAlt, ogContentType } from "@/lib/og";

export const size = ogSize;
export const alt = ogAlt;
export const contentType = ogContentType;

export function generateStaticParams() {
  return GLOSSARY.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  return renderOgImage({
    eyebrow: entry ? CATEGORY_LABELS[entry.category].de : "Glossar",
    title: entry?.de.term ?? "Glossar",
    lang: "de",
  });
}
