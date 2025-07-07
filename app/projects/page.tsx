"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { projectsData } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Convert projectsData to array format
  const projects = Object.values(projectsData).map((project) => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    category: project.category.toLowerCase().replace(/\s+/g, ""),
    image: project.images[0],
    description: project.description,
    year: project.year,
  }))

  // Other projects data
  const otherProjects = [
    { title: "Dastkaar", category: "Short AV Project", year: "2023" },
    { title: "Portrait Documentary on Sohail Hashmi", category: "Documentary", year: "2022" },
    { title: "Handy Hints", category: "TV Production (Art Show Format)", year: "2022" },
    { title: "The Art of Waiting", category: "Photo Feature", year: "2022" },
    { title: "Stop Motion Animation", category: "Animation", year: "2022" },
    { title: "Nazia Hassan", category: "Radio Feature", year: "2022" },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => {
          const categoryMap: { [key: string]: string } = {
            film: "shortfilm",
            documentary: "documentary",
            music: "musicvideo",
            audiovisual: "audio-visual",
            homage: "homageproject",
          }

          return (
            project.category === categoryMap[activeTab] ||
            project.category.includes(activeTab) ||
            (activeTab === "film" && (project.category.includes("short") || project.category.includes("film")))
          )
        })

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my work in filmmaking, documentaries, music videos, and visual storytelling
        </p>
      </motion.div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-gray-900/50 backdrop-blur-sm">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="film">Film</TabsTrigger>
              <TabsTrigger value="documentary">Documentary</TabsTrigger>
              <TabsTrigger value="music">Music Video</TabsTrigger>
              <TabsTrigger value="audiovisual">Audio-Visual</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Other Projects */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Other Projects</h2>
          <p className="text-gray-400 mb-8 text-center">Additional works and experimental projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{project.category}</p>
              <p className="text-gray-500 text-xs">{project.year}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`} prefetch={true}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-lg cursor-pointer"
      >
        <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.id <= 4}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300 capitalize">{project.category}</span>
              <span className="text-xs text-gray-400">{project.year}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.description.substring(0, 100)}...
            </p>
          </div>
        </div>
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-lg transition-all duration-300" />
      </motion.div>
    </Link>
  )
}
