"use client"

import { motion } from "framer-motion"
import { Video, Camera, PenTool, Globe } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: Video,
      title: "Video & Post-Production",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "Video Editing", tools: "Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve", level: 95 },
        { name: "Motion Graphics", tools: "Adobe After Effects", level: 85 },
        { name: "Color Grading & Sound Design", tools: "Professional workflow", level: 90 },
        { name: "Visual Storytelling & Pacing", tools: "Narrative techniques", level: 95 },
      ],
    },
    {
      icon: Camera,
      title: "Photography & Cinematography",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "Still Photography", tools: "Portrait, Street, Product", level: 90 },
        { name: "Event & Wedding Photography", tools: "Professional coverage", level: 85 },
        { name: "Cinematography", tools: "DSLR/Mirrorless cameras", level: 90 },
        { name: "Framing, Lighting, and Composition", tools: "Technical expertise", level: 95 },
      ],
    },
    {
      icon: PenTool,
      title: "Writing & Content Creation",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Screenwriting & Storyboarding", tools: "Script development", level: 85 },
        { name: "Scripted & Documentary Narratives", tools: "Story structure", level: 90 },
        { name: "Copywriting & Caption Writing", tools: "Content creation", level: 80 },
        { name: "Interview-based Content", tools: "Research & preparation", level: 85 },
      ],
    },
    {
      icon: Globe,
      title: "Media & Communication",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Content Strategy for Social Media", tools: "Platform optimization", level: 80 },
        { name: "SEO & Digital Marketing Basics", tools: "Online presence", level: 75 },
        { name: "Research & Fieldwork", tools: "Documentary preparation", level: 90 },
        { name: "Production Management & Coordination", tools: "Project leadership", level: 85 },
      ],
    },
  ]

  const software = [
    { name: "Adobe Premiere Pro", level: 95, category: "Video Editing" },
    { name: "Final Cut Pro", level: 90, category: "Video Editing" },
    { name: "DaVinci Resolve", level: 90, category: "Color & Audio" },
    { name: "Adobe After Effects", level: 85, category: "Motion Graphics" },
    { name: "Adobe Photoshop", level: 85, category: "Photo Editing" },
    { name: "Adobe Lightroom", level: 90, category: "Photo Processing" },
  ]

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Professional expertise and technical abilities I've developed throughout my career in visual storytelling
        </p>
      </motion.div>

      {/* Skills Categories */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {skillCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon
          return (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.bgColor} p-3 rounded-lg mr-4`}>
                  <IconComponent className={`h-6 w-6 ${category.color}`} />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <p className="text-sm text-gray-400">{skill.tools}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} delay={skillIndex * 0.1} color={category.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Software Proficiency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Software Proficiency</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {software.map((sw, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center"
            >
              <h3 className="font-semibold text-lg mb-2">{sw.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{sw.category}</p>
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${sw.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">{sw.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Professional Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-purple-400">Experience & Expertise</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Specialized in documentary filmmaking and narrative storytelling</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Proficient in end-to-end production from pre-production to post-production</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Expert in both technical execution and creative direction</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Project Types</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Short films and narrative projects</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Documentary films and social issue coverage</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Music videos and audio-visual projects</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Event coverage and wedding photography</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I bring technical expertise and creative vision to every project, ensuring high-quality results that tell
              compelling stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function SkillBar({ level, delay = 0, color = "text-purple-500" }: { level: number; delay?: number; color?: string }) {
  const gradientClass = color.includes("purple")
    ? "from-purple-600 to-purple-400"
    : color.includes("blue")
      ? "from-blue-600 to-blue-400"
      : color.includes("green")
        ? "from-green-600 to-green-400"
        : "from-orange-600 to-orange-400"

  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className={`h-2 bg-gradient-to-r ${gradientClass} rounded-full`}
      />
    </div>
  )
}
