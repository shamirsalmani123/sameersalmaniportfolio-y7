import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetailPageClient from "./ProjectDetailPageClient"
import { projectsData, projectSlugs } from "@/lib/projects-data"

// CRITICAL: This function generates static pages for each project
export async function generateStaticParams() {
  console.log("Generating static params for projects:", projectSlugs)

  return projectSlugs.map((slug) => {
    console.log("Generating static page for:", slug)
    return {
      slug: slug,
    }
  })
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    return {
      title: "Project Not Found - Sameer Salmani",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Sameer Salmani`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Sameer Salmani`,
      description: project.description,
      images: [project.images[0]],
    },
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Server-side check for project existence
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    console.log("Project not found for slug:", params.slug)
    notFound()
  }

  console.log("Rendering project page for:", params.slug)
  return <ProjectDetailPageClient params={params} />
}
