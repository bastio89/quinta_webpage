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
  const c = job.de;
  return {
    title: c.title,
    description: c.summary,
    alternates: {
      canonical: `/karriere/${slug}`,
      languages: { de: `/karriere/${slug}`, en: `/en/karriere/${slug}` },
    },
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  const c = job.de;

  const description = [c.tagline, ...c.intro, `Aufgaben: ${c.responsibilities.join(" ")}`].join(" ");

  return (
    <>
      <JsonLd
        data={jobPostingLd({
          title: c.title,
          description,
          datePosted: job.datePosted,
          employmentType: job.employmentType,
          path: `/karriere/${slug}`,
          remote: job.remote,
          location: c.location,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "Karriere", path: "/karriere" },
          { name: c.title, path: `/karriere/${slug}` },
        ])}
      />
      <Navbar />
      <main id="inhalt" tabIndex={-1}>
        <JobDetail lang="de" content={c} />
      </main>
      <Footer />
    </>
  );
}
