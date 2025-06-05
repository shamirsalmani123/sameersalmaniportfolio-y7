"use client"

import { motion } from "framer-motion"

export default function SkillsPage() {
  const skills = [
    {
      category: "Photography",
      items: [
        { name: "Portrait Photography", level: 95 },
        { name: "Landscape Photography", level: 90 },
        { name: "Studio Lighting", level: 85 },
        { name: "Photo Composition", level: 95 },
      ],
    },
    {
      category: "Cinematography",
      items: [
        { name: "Camera Operation", level: 90 },
        { name: "Lighting Design", level: 85 },
        { name: "Shot Composition", level: 95 },
        { name: "Color Grading", level: 80 },
      ],
    },
    {
      category: "Video Editing",
      items: [
        { name: "Narrative Editing", level: 90 },
        { name: "Sound Design", level: 80 },
        { name: "Motion Graphics", level: 75 },
        { name: "Color Correction", level: 85 },
      ],
    },
  ]

  const software = [
    { name: "DaVinci Resolve", level: 90 },
    { name: "Adobe Premiere Pro", level: 95 },
    { name: "Final Cut Pro", level: 85 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Adobe Lightroom", level: 90 },
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
          Professional expertise and technical abilities I've developed over my career
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>

          {skills.map((skillGroup, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} delay={0.1 * skillIndex} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8">Software Proficiency</h2>

          <div className="space-y-6">
            {software.map((sw, index) => (
              <SkillBar key={index} name={sw.name} level={sw.level} delay={0.1 * index} />
            ))}
          </div>

          <div className="mt-16 p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                <span>Over 8 years of experience in visual storytelling</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                <span>Worked on award-winning documentary films</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                <span>Collaborated with international brands on commercial projects</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                <span>Specialized in emotive visual storytelling</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay }}
        className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
      />
    </div>
  )
}
