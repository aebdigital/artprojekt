import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt nenájdený",
    };
  }

  return {
    title: project.title,
    description: `${project.description} ${project.location}, ${project.year}. ART PROJEKT s.r.o.`,
    alternates: { canonical: `https://artprojekt.sk/referencie/${slug}` },
    openGraph: {
      title: `${project.title} | ART PROJEKT s.r.o.`,
      description: project.description,
      url: `https://artprojekt.sk/referencie/${slug}`,
      images: project.thumbnail ? [{ url: project.thumbnail, alt: project.title }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
