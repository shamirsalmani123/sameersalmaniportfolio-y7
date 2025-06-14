"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Video, Camera, PenTool, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Generate random stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 3 + 2,
    }))
  }

  const stars = generateStars(100)

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Portrait */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 z-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: star.animationDuration,
                delay: star.animationDelay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-20 px-4 md:px-6 text-center"
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative">
                <Image
                  src="/images/portfolio/sameer portrait.jpg"
                  alt="Sameer Salmani Portrait"
                  fill
                  className="object-cover scale-150 object-top"
                  priority
                />
              </div>
            </motion.div>

            <div className="text-center">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProjectCard
              title="Kuchh Aur Zamana Kehta Hai"
              category="Short Film"
              slug="kuchh-aur-zamana-kehta-hai"
              image="/images/projects/kuchh-aur/kuchh-aur-poster.jpg"
            />
            <ProjectCard
              title="Do Ghaz Kranti"
              category="Documentary"
              slug="do-ghaz-kranti"
              image="/images/projects/do-ghaz/do-ghaz-poster.png"
            />
            <ProjectCard title="Lost" category="Short Film" slug="lost" image="/images/projects/lost/lost-poster.png" />
            <ProjectCard
              title="Dhoop Ka Tukda"
              category="Audio-Visual"
              slug="dhoop-ka-tukda"
              image="/images/projects/dhoop/dhoop-poster.png"
            />
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
              Professional expertise across the complete spectrum of visual storytelling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={Video}
              title="Video & Post-Production"
              skills={["Video Editing", "Motion Graphics", "Color Grading", "Visual Storytelling"]}
              color="text-purple-500"
              bgColor="bg-purple-500/10"
            />
            <SkillCard
              icon={Camera}
              title="Photography & Cinematography"
              skills={["Still Photography", "Event Photography", "Cinematography", "Lighting & Composition"]}
              color="text-blue-500"
              bgColor="bg-blue-500/10"
            />
            <SkillCard
              icon={PenTool}
              title="Writing & Content Creation"
              skills={["Screenwriting", "Documentary Narratives", "Copywriting", "Interview Content"]}
              color="text-green-500"
              bgColor="bg-green-500/10"
            />
            <SkillCard
              icon={Globe}
              title="Media & Communication"
              skills={["Social Media Strategy", "Digital Marketing", "Research & Fieldwork", "Production Management"]}
              color="text-orange-500"
              bgColor="bg-orange-500/10"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/skills">
              <Button variant="outline" size="lg">
                View All Skills
              </Button>
            </Link>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://wa.me/919267915407", "_blank")}
                className="inline-flex items-center gap-2 w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
                WhatsApp Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({
  title,
  category,
  slug,
  image,
}: { title: string; category: string; slug: string; image: string }) {
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
        <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
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

function SkillCard({
  icon: Icon,
  title,
  skills,
  color,
  bgColor,
}: {
  icon: any
  title: string
  skills: string[]
  color: string
  bgColor: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center group"
    >
      <div
        className={`${bgColor} p-3 rounded-lg mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center justify-center">
            <span className={`inline-block w-1.5 h-1.5 ${color.replace("text-", "bg-")} rounded-full mr-2`}></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
