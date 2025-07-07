import type { Metadata } from "next"
import ProjectDetailPageClient from "./ProjectDetailPageClient"
import { projectsData } from "@/lib/projects-data"

// REQUIRED: This function is required for static export with dynamic routes
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Sameer Salmani`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailPageClient params={params} />
}
