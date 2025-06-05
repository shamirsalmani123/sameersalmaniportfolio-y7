"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { imagePaths } from "@/lib/image-paths"

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
    { id: "product", name: "Product" },
    { id: "event", name: "Event" },
  ]

  // Portrait photos with detailed descriptions
  const portraitPhotos = [
    {
      id: "portrait-1",
      title: "Traditional Bridal Portrait",
      category: "portrait",
      image: "/images/photography/portrait/IMG_8012.jpg",
      description: "Elegant traditional Indian bridal portrait with ornate gold jewelry and floral backdrop",
      location: "Delhi, India",
      year: "2023",
    },
    {
      id: "portrait-2",
      title: "Veiled Beauty",
      category: "portrait",
      image: "/images/photography/portrait/IMG_7986.jpg",
      description: "Artistic portrait captured through traditional red veil creating ethereal mood",
      location: "Delhi, India",
      year: "2023",
    },
    {
      id: "portrait-3",
      title: "Joyful Bride",
      category: "portrait",
      image: "/images/photography/portrait/IMG_8002.jpg",
      description: "Radiant bridal portrait capturing genuine happiness and traditional elegance",
      location: "Delhi, India",
      year: "2023",
    },
    {
      id: "portrait-4",
      title: "Studio Bridal Session",
      category: "portrait",
      image: "/images/photography/portrait/IMG_7983.jpg",
      description: "Professional studio portrait showcasing traditional bridal makeup and jewelry",
      location: "Studio, Delhi",
      year: "2023",
    },
    {
      id: "portrait-5",
      title: "Contemplative Grace",
      category: "portrait",
      image: "/images/photography/portrait/IMG_8015.jpg",
      description: "Dramatic portrait with beautiful lighting capturing serene expression",
      location: "Delhi, India",
      year: "2023",
    },
    {
      id: "portrait-6",
      title: "Traditional Elegance",
      category: "portrait",
      image: "/images/photography/portrait/IMG_8047.jpg",
      description: "Classic bridal portrait emphasizing traditional attire and cultural beauty",
      location: "Studio, Delhi",
      year: "2023",
    },
  ]

  // Street photos with detailed descriptions
  const streetPhotos = [
    {
      id: "street-1",
      title: "Window to Life",
      category: "street",
      image: "/images/photography/street/IMG-20211230-WA0003.jpg",
      description: "Candid street moment capturing a young person in vibrant clothing against weathered architecture",
      location: "Delhi, India",
      year: "2021",
    },
    {
      id: "street-2",
      title: "Meena Bazaar Shopkeeper",
      category: "street",
      image: "/images/photography/street/meena-bazar.jpg",
      description: "Traditional bazaar vendor surrounded by ornate frames and decorative artwork",
      location: "Meena Bazaar, Delhi",
      year: "2023",
    },
    {
      id: "street-3",
      title: "Brass Treasures",
      category: "street",
      image: "/images/photography/street/meena-bazar-2.jpg",
      description: "Intricate display of traditional brass and metalwork in Old Delhi bazaar",
      location: "Meena Bazaar, Delhi",
      year: "2023",
    },
  ]

  // Product photos with detailed descriptions
  const productPhotos = [
    {
      id: "product-1",
      title: "Handwoven Basket - Yellow & Black",
      category: "product",
      image: "/images/photography/product/IMG_7562-removebg-preview.png",
      description: "Artisan handwoven basket with clean background removal for e-commerce",
      location: "Studio, Delhi",
      year: "2023",
      isPNG: true,
    },
    {
      id: "product-2",
      title: "Handwoven Tote Bag",
      category: "product",
      image: "/images/photography/product/IMG_7571-removebg-preview.png",
      description: "Professional product shot with transparent background for versatile use",
      location: "Studio, Delhi",
      year: "2023",
      isPNG: true,
    },
    {
      id: "product-3",
      title: "Botanical Necklace - Amber Leaf",
      category: "product",
      image: "/images/photography/product/IMG_7760.jpg",
      description: "Elegant jewelry photography showcasing handcrafted botanical pendant",
      location: "Studio, Delhi",
      year: "2023",
    },
    {
      id: "product-4",
      title: "Pressed Flower Necklace",
      category: "product",
      image: "/images/photography/product/IMG_7764.jpg",
      description: "Delicate jewelry piece with pressed botanical elements, soft lighting",
      location: "Studio, Delhi",
      year: "2023",
    },
    {
      id: "product-5",
      title: "Botanical Pendant - Oval",
      category: "product",
      image: "/images/photography/product/IMG_7779.jpg",
      description: "Handcrafted jewelry with preserved botanical elements in resin",
      location: "Studio, Delhi",
      year: "2023",
    },
    {
      id: "product-6",
      title: "Dried Flower Necklace",
      category: "product",
      image: "/images/photography/product/IMG_7786.jpg",
      description: "Artistic jewelry photography with dramatic lighting and texture",
      location: "Studio, Delhi",
      year: "2023",
    },
  ]

  // Create photographs array from imagePaths
  const photographs = [
    // Portrait photos (with detailed descriptions)
    ...portraitPhotos,

    // Street photos (with detailed descriptions)
    ...streetPhotos,

    // Product photos (with detailed descriptions)
    ...productPhotos,

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
          A collection of my photographic work spanning portraits, street photography, product photography, and events
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
            <div className={`aspect-[4/5] overflow-hidden ${photo.isPNG ? "bg-gray-100" : "bg-gray-900"} relative`}>
              <Image
                src={photo.image || "/placeholder.svg"}
                alt={photo.title}
                fill
                className={`${photo.isPNG ? "object-contain p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-1 text-sm">{photo.title}</h3>
                <p className="text-gray-300 text-xs">
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
                <div
                  className={`relative max-w-full max-h-full ${filteredPhotographs[selectedImage].isPNG ? "bg-gray-100 p-8 rounded-lg" : ""}`}
                >
                  <Image
                    src={filteredPhotographs[selectedImage].image || "/placeholder.svg"}
                    alt={filteredPhotographs[selectedImage].title}
                    width={1200}
                    height={800}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>

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
              I'm available for portrait sessions, product photography, event coverage, and more.
            </p>
            <Button size="lg">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
