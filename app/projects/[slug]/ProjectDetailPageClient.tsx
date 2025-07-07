"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Play, ExternalLink, Calendar, MapPin, Camera, Clock, Youtube } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { projectsData } from "@/lib/projects-data"

export default function ProjectDetailPageClient({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="container mx-auto py-16 px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    )
  }

  const nextProject = projectsData[project.nextProject as keyof typeof projectsData]
  const prevProject = projectsData[project.prevProject as keyof typeof projectsData]

  const isYouTubeLink = project.videoUrl?.includes("youtube.com") || project.videoUrl?.includes("youtu.be")
  const isDriveLink = project.videoUrl?.includes("drive.google.com")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>

            <Badge className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.description}</p>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                    <p className="text-gray-400">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                    <p className="text-gray-400">{project.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
                  <p className="text-gray-400">{project.results}</p>
                </div>

                {/* Video Player */}
                {project.videoUrl && (
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Watch the Project</h3>
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                        <Button size="lg" className="gap-2">
                          {isYouTubeLink && <Youtube className="h-5 w-5" />}
                          {isDriveLink && <ExternalLink className="h-5 w-5" />}
                          {!isYouTubeLink && !isDriveLink && <Play className="h-5 w-5" />}
                          {isYouTubeLink ? "Watch on YouTube" : isDriveLink ? "View on Drive" : "Play Video"}
                        </Button>
                      </a>
                    </div>
                  </div>
                )}

                {/* Awards */}
                {project.awards && project.awards.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Awards & Recognition</h3>
                    <div className="space-y-2">
                      {project.awards.map((award, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 sticky top-24"
              >
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm text-gray-400 mr-2">Year:</span>
                    {project.year}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm text-gray-400 mr-2">Location:</span>
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm text-gray-400 mr-2">Duration:</span>
                    {project.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Camera className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm text-gray-400 mr-2">Role:</span>
                    {project.role}
                  </div>
                  {project.client && (
                    <div className="flex items-center text-gray-300">
                      <ExternalLink className="h-4 w-4 mr-3 text-purple-500" />
                      <span className="text-sm text-gray-400 mr-2">Client:</span>
                      {project.client}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Equipment Used</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {project.equipment.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Software */}
                <div>
                  <h4 className="font-semibold mb-3">Software</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {project.software.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>

            {/* Main Image */}
            <div className="mb-8">
              <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
                <DialogTrigger asChild>
                  <div className="aspect-video overflow-hidden rounded-lg cursor-pointer group">
                    <Image
                      src={project.images[selectedImage] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${selectedImage + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-full h-full p-0 bg-black/95">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={project.images[selectedImage] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${selectedImage + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Navigation */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.images.length - 1)
                      }
                    >
                      <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        setSelectedImage(selectedImage < project.images.length - 1 ? selectedImage + 1 : 0)
                      }
                    >
                      <ArrowRight className="h-6 w-6" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`aspect-square overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                    selectedImage === index ? "border-purple-500" : "border-transparent hover:border-white/30"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Thumbnail ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous Project */}
            {prevProject && (
              <Link href={`/projects/${prevProject.slug}`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="text-sm text-gray-400">Previous Project</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                    {prevProject.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{prevProject.category}</p>
                </motion.div>
              </Link>
            )}

            {/* Next Project */}
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all text-right"
                >
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-sm text-gray-400">Next Project</span>
                    <ArrowRight className="h-4 w-4 ml-2 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{nextProject.category}</p>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always excited to take on new projects and collaborate with creative individuals and brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Start a Project</Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
