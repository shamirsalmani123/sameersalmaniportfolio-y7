"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { imagePaths, getImageWithFallback } from "@/lib/image-paths"

export default function PhotographyClientPage({ params }: { params: { category?: string[] } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Set the selected category from URL params
  useEffect(() => {
    if (params.category && params.category[0]) {
      setSelectedCategory(params.category[0])
    } else {
      setSelectedCategory("all")
    }
  }, [params.category])

  const photographyCategories = [
    { id: "all", name: "All" },
    { id: "portrait", name: "Portrait" },
    { id: "street", name: "Street" },
    { id: "documentary", name: "Documentary" },
    { id: "landscape", name: "Landscape" },
    { id: "event", name: "Event" },
  ]

  // Create photographs array from imagePaths
  const photographs = [
    // Portrait photos
    ...imagePaths.photography.portrait.map((image, index) => ({
      id: `portrait-${index + 1}`,
      title: `Portrait ${index + 1}`,
      category: "portrait",
      image,
      description: "Portrait photography capturing human emotion and character",
      location: "Delhi, India",
      year: "2023",
    })),

    // Street photos
    ...imagePaths.photography.street.map((image, index) => ({
      id: `street-${index + 1}`,
      title: `Street ${index + 1}`,
      category: "street",
      image,
      description: "Candid street photography showcasing urban life",
      location: "Delhi, India",
      year: "2023",
    })),

    // Documentary photos
    ...imagePaths.photography.documentary.map((image, index) => ({
      id: `documentary-${index + 1}`,
      title: `Documentary ${index + 1}`,
      category: "documentary",
      image,
      description: "Documentary photography telling important stories",
      location: "Various locations, India",
      year: "2022-2023",
    })),

    // Landscape photos
    ...imagePaths.photography.landscape.map((image, index) => ({
      id: `landscape-${index + 1}`,
      title: `Landscape ${index + 1}`,
      category: "landscape",
      image,
      description: "Landscape photography capturing natural beauty",
      location: "Various locations, India",
      year: "2022-2023",
    })),

    // Event photos
    ...imagePaths.photography.event.map((image, index) => ({
      id: `event-${index + 1}`,
      title: `Event ${index + 1}`,
      category: "event",
      image,
      description: "Event photography capturing special moments",
      location: "Delhi, India",
      year: "2023",
    })),
  ]

  const filteredPhotographs =
    selectedCategory === "all" ? photographs : photographs.filter((photo) => photo.category === selectedCategory)

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Photography</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my photographic work spanning portraits, street photography, documentaries, and landscapes
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {photographyCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="mb-2"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Photo Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredPhotographs.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setSelectedImage(filteredPhotographs.findIndex((p) => p.id === photo.id))
              setIsLightboxOpen(true)
            }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-gray-900 relative">
              <Image
                src={getImageWithFallback(photo.image) || "/placeholder.svg"}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-1">{photo.title}</h3>
                <p className="text-gray-300 text-sm">
                  {photo.location} • {photo.year}
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
            {filteredPhotographs[selectedImage] && (
              <>
                <Image
                  src={getImageWithFallback(filteredPhotographs[selectedImage].image) || "/placeholder.svg"}
                  alt={filteredPhotographs[selectedImage].title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{filteredPhotographs[selectedImage].title}</h3>
                  <p className="text-gray-300 mb-2">{filteredPhotographs[selectedImage].description}</p>
                  <p className="text-gray-400 text-sm">
                    {filteredPhotographs[selectedImage].location} • {filteredPhotographs[selectedImage].year}
                  </p>
                </div>

                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredPhotographs.length - 1)
                  }
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setSelectedImage(selectedImage < filteredPhotographs.length - 1 ? selectedImage + 1 : 0)
                  }
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 mt-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-4">Need Photography Services?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              I'm available for portrait sessions, event photography, and documentary projects.
            </p>
            <Button size="lg">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
