"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Handle client-side routing for dynamic routes
    if (typeof window !== "undefined") {
      const path = window.location.pathname

      // Check if this is a project route that should exist
      const projectRoutes = [
        "/projects/kuchh-aur-zamana-kehta-hai",
        "/projects/do-ghaz-kranti",
        "/projects/lost",
        "/projects/dhoop-ka-tukda",
        "/projects/kadam-prateek-kuhad",
        "/projects/salaam-bombay-recreation",
      ]

      // If it's a valid project route, redirect to it
      if (projectRoutes.some((route) => path.includes(route.split("/").pop() || ""))) {
        const slug = path.split("/").pop()
        if (slug && projectRoutes.some((route) => route.includes(slug))) {
          router.push(`/projects/${slug}`)
          return
        }
      }

      // Handle other dynamic routes
      if (path.startsWith("/photography/")) {
        const category = path.split("/").pop()
        const validCategories = ["portrait", "street", "product", "event"]
        if (category && validCategories.includes(category)) {
          router.push(`/photography/${category}`)
          return
        } else {
          router.push("/photography")
          return
        }
      }

      if (path.startsWith("/bts/")) {
        const project = path.split("/").pop()
        const validProjects = ["kuchh-aur", "do-ghaz", "kadam", "salaam", "dhoop"]
        if (project && validProjects.includes(project)) {
          router.push(`/bts/${project}`)
          return
        } else {
          router.push("/bts")
          return
        }
      }
    }
  }, [router])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.back()} variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Link href="/">
            <Button className="gap-2 w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Home Page
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/photography" className="text-sm text-gray-400 hover:text-white transition-colors">
              Photography
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/bts" className="text-sm text-gray-400 hover:text-white transition-colors">
              BTS Gallery
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
