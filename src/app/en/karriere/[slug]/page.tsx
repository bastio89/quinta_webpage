import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JobDetail } from "@/components/JobDetail";
import { JsonLd } from "@/components/JsonLd";
import { JOBS, getJob } from "@/lib/jobs";
import { jobPostingLd, breadcrumbLd } from "@/lib/jsonLd";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  const c = job.en;
  return {
    title: c.title,
    description: c.summary,
    alternates: {
      canonical: `/en/karriere/${slug}`,
      languages: { de: `/karriere/${slug}`, en: `/en/karriere/${slug}` },
    },
  };
}

export default async function JobPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  const c = job.en;

  const description = [c.tagline, ...c.intro, `Responsibilities: ${c.responsibilities.join(" ")}`].join(
    " ",
  );

  return (
    <>
      <JsonLd
        data={jobPostingLd({
          title: c.title,
          description,
          datePosted: job.datePosted,
          employmentType: job.employmentType,
          path: `/en/karriere/${slug}`,
          remote: job.remote,
          location: c.location,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/en" },
          { name: "Careers", path: "/en/karriere" },
          { name: c.title, path: `/en/karriere/${slug}` },
        ])}
      />
      <Navbar lang="en" />
      <main id="inhalt" tabIndex={-1}>
        <JobDetail lang="en" content={c} />
      </main>
      <Footer lang="en" />
    </>
  );
}
