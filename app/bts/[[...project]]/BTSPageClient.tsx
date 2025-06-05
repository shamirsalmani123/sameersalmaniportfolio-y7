"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Camera, Video, Clapperboard } from "lucide-react"
import { imagePaths, getImageWithFallback } from "@/lib/image-paths"

export default function BTSPageClient({ params }: { params: { project?: string[] } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState("all")

  // Set the selected project from URL params
  useEffect(() => {
    if (params.project && params.project[0]) {
      setSelectedProject(params.project[0])
    } else {
      setSelectedProject("all")
    }
  }, [params.project])

  const btsProjects = [
    { id: "all", name: "All Projects", icon: Camera },
    { id: "kuchh-aur", name: "Kuchh Aur Zamana", icon: Video },
    { id: "do-ghaz", name: "Do Ghaz Kranti", icon: Video },
    { id: "kadam", name: "Kadam Music Video", icon: Clapperboard },
    { id: "salaam", name: "Salaam Bombay", icon: Video },
    { id: "dhoop", name: "Dhoop Ka Tukda", icon: Camera },
  ]

  // Create BTS images array from imagePaths
  const btsImages = [
    // Kuchh Aur Zamana BTS
    ...imagePaths.bts["kuchh-aur"].map((image, index) => ({
      id: `kuchh-aur-${index + 1}`,
      title: `Kuchh Aur Zamana BTS ${index + 1}`,
      project: "kuchh-aur",
      image,
      description: "Behind the scenes from the short film production",
      location: "Delhi, India",
      year: "2023",
    })),

    // Do Ghaz Kranti BTS
    ...imagePaths.bts["do-ghaz"].map((image, index) => ({
      id: `do-ghaz-${index + 1}`,
      title: `Do Ghaz Kranti BTS ${index + 1}`,
      project: "do-ghaz",
      image,
      description: "Documentary production process with farmers",
      location: "Greater Noida, India",
      year: "2021",
    })),

    // Kadam BTS
    ...imagePaths.bts.kadam.map((image, index) => ({
      id: `kadam-${index + 1}`,
      title: `Kadam Music Video BTS ${index + 1}`,
      project: "kadam",
      image,
      description: "Behind the scenes of music video production",
      location: "Delhi, India",
      year: "2023",
    })),

    // Salaam Bombay BTS
    ...imagePaths.bts.salaam.map((image, index) => ({
      id: `salaam-${index + 1}`,
      title: `Salaam Bombay Recreation BTS ${index + 1}`,
      project: "salaam",
      image,
      description: "Behind the scenes of the homage project",
      location: "Delhi, India",
      year: "2023",
    })),

    // Dhoop Ka Tukda BTS
    ...imagePaths.bts.dhoop.map((image, index) => ({
      id: `dhoop-${index + 1}`,
      title: `Dhoop Ka Tukda BTS ${index + 1}`,
      project: "dhoop",
      image,
      description: "Behind the scenes of the audio-visual project",
      location: "Delhi, India",
      year: "2023",
    })),
  ]

  const filteredImages =
    selectedProject === "all" ? btsImages : btsImages.filter((image) => image.project === selectedProject)

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Behind the Scenes</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A glimpse into my creative process - from pre-production planning to post-production magic
        </p>
      </motion.div>

      {/* Project Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {btsProjects.map((project) => {
          const IconComponent = project.icon
          return (
            <Button
              key={project.id}
              variant={selectedProject === project.id ? "default" : "outline"}
              onClick={() => setSelectedProject(project.id)}
              className="mb-2 gap-2"
            >
              <IconComponent className="h-4 w-4" />
              {project.name}
            </Button>
          )
        })}
      </div>

      {/* BTS Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setSelectedImage(filteredImages.findIndex((img) => img.id === image.id))
              setIsLightboxOpen(true)
            }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-900 relative">
              <Image
                src={getImageWithFallback(image.image) || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{image.description}</p>
                <p className="text-gray-400 text-xs">
                  {image.location} • {image.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-7xl w-full h-full p-0 bg-black/95">
          <div className="relative w-full h-full flex items-center justify-center">
            {filteredImages[selectedImage] && (
              <>
                <Image
                  src={getImageWithFallback(filteredImages[selectedImage].image) || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{filteredImages[selectedImage].title}</h3>
                  <p className="text-gray-300 mb-2">{filteredImages[selectedImage].description}</p>
                  <p className="text-gray-400 text-sm">
                    {filteredImages[selectedImage].location} • {filteredImages[selectedImage].year}
                  </p>
                </div>

                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1)}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={() => setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0)}
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Process Section */}
      <section className="py-16 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Creative Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to completion, here's how I approach each project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10"
          >
            <Camera className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Pre-Production</h3>
            <p className="text-gray-400">
              Detailed planning, location scouting, equipment preparation, and creative conceptualization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10"
          >
            <Video className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Production</h3>
            <p className="text-gray-400">
              Hands-on filming, directing talent, managing crew, and capturing the perfect shots
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10"
          >
            <Clapperboard className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Post-Production</h3>
            <p className="text-gray-400">
              Editing, color grading, sound design, and bringing the vision to life in the final cut
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Interested in collaborating or learning more about my creative process? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Me</Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
