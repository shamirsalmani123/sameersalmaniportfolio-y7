"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import MoonPhase from "./moon-phase"

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
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
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

  const stars = generateStars(100)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Photography", path: "/photography" },
    { name: "BTS Gallery", path: "/bts" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 md:hidden overflow-hidden"
          >
            {/* Stars Background */}
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

            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
                <Link href="/" className="font-bold text-xl">
                  SAMEER SALMANI
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
                {/* Moon Phase */}
                <MoonPhase />

                <nav className="flex flex-col items-center justify-center space-y-8 p-4 w-full">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <Link
                        href={item.path}
                        className={`text-2xl font-medium block py-2 ${
                          pathname === item.path ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-full pt-4"
                  >
                    <Button
                      size="lg"
                      onClick={() => window.open("https://wa.me/919267915407", "_blank")}
                      className="w-full"
                    >
                      Hire Me
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
