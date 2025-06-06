"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.position = "unset"
      document.body.style.width = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.position = "unset"
      document.body.style.width = "unset"
    }
  }, [isOpen])

  // Generate random stars for the mobile menu
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

  const stars = generateStars(150)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Photography", path: "/photography" },
    { name: "BTS Gallery", path: "/bts" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">
              SAMEER SALMANI
            </Link>

            <nav className="hidden md:flex items-center space-x-6 justify-center">
              {navItems.map((item) => (
                <NavLink key={item.path} href={item.path} active={pathname === item.path}>
                  {item.name}
                </NavLink>
              ))}
              <Button size="sm" onClick={() => window.open("https://wa.me/919267915407", "_blank")}>
                Hire Me
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Portal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black md:hidden"
            style={{
              zIndex: 9999,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              margin: 0,
              padding: 0,
            }}
          >
            {/* Stars Background */}
            <div className="absolute inset-0 w-full h-full">
              {stars.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute bg-white rounded-full"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
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

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Menu Content */}
            <div className="relative flex flex-col h-full w-full">
              {/* Header */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between h-16 px-4 border-b border-white/20 bg-black/70 backdrop-blur-sm"
              >
                <Link href="/" className="font-bold text-xl text-white" onClick={() => setIsOpen(false)}>
                  SAMEER SALMANI
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </motion.div>

              {/* Menu Content */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                {/* Navigation Items */}
                <nav className="flex flex-col items-center justify-center space-y-4 w-full max-w-sm">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-xl font-medium py-4 px-6 rounded-lg transition-all duration-300 ${
                          pathname === item.path
                            ? "text-white bg-white/20 border border-white/30 shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Hire Me Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + navItems.length * 0.1 }}
                    className="w-full pt-6"
                  >
                    <Button
                      size="lg"
                      onClick={() => {
                        window.open("https://wa.me/919267915407", "_blank")
                        setIsOpen(false)
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 text-lg shadow-lg"
                    >
                      Hire Me
                    </Button>
                  </motion.div>
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="mt-8 text-center"
                >
                  <p className="text-gray-400 text-sm mb-2">Get in touch</p>
                  <p className="text-white text-sm">sameer.salmani1602@gmail.com</p>
                  <p className="text-white text-sm">+91 9267915407</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`relative font-medium transition-colors ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
        />
      )}
    </Link>
  )
}
