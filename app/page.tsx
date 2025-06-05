"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Portrait */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-20 px-4 md:px-6"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
              >
                Sameer Salmani
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 mb-8"
              >
                Visual Artist & Filmmaker
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/projects">
                  <Button size="lg" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Portrait" fill className="object-cover" />
              </div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 blur-xl" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div style={{ y, opacity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0 z-0" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my best work in photography, cinematography, and video editing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="Kuchh Aur Zamana Kehta Hai" category="Short Film" slug="kuchh-aur-zamana-kehta-hai" />
            <ProjectCard title="Do Ghaz Kranti" category="Documentary" slug="do-ghaz-kranti" />
            <ProjectCard title="Kadam: Prateek Kuhad" category="Music Video" slug="kadam-prateek-kuhad" />
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-6 relative bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 z-0" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional tools and techniques I've mastered over the years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard title="Photography" software="Lightroom, Photoshop" />
            <SkillCard title="Cinematography" software="DaVinci Resolve" />
            <SkillCard title="Video Editing" software="Premiere Pro, Final Cut Pro" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Have a project in mind? I'm available for freelance work and collaborations.
            </p>
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, category, slug }: { title: string; category: string; slug: string }) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-lg cursor-pointer"
      >
        <div className="aspect-video overflow-hidden bg-gray-900 relative">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-sm text-gray-300 mb-2 inline-block">{category}</span>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-lg transition-all duration-300" />
      </motion.div>
    </Link>
  )
}

function SkillCard({ title, software }: { title: string; software: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{software}</p>
    </motion.div>
  )
}
