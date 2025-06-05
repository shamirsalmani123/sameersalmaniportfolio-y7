"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <Mail className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">sameer.salmani1602@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <Phone className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <MapPin className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">New Delhi, IND</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <SocialIcon name="instagram" />
              <SocialIcon name="twitter" />
              <SocialIcon name="youtube" />
              <SocialIcon name="vimeo" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-400">
                Your message has been sent successfully. I'll get back to you as soon as possible.
              </p>
              <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-900/50 border-white/10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-gray-900/50 border-white/10"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

function SocialIcon({ name }: { name: string }) {
  return (
    <a
      href={`https://${name}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
    >
      <span className="sr-only">{name}</span>
      <div className="w-5 h-5 text-purple-500 capitalize">{name.charAt(0)}</div>
    </a>
  )
}
