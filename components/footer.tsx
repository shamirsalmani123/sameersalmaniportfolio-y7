import type React from "react"
import Link from "next/link"
import { Instagram, Twitter, Youtube, VideoIcon as Vimeo } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SAMEER SALMANI</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Visual Artist and Filmmaker specializing in documentaries, short films, music videos and photography.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="https://youtube.com" icon={<Youtube className="h-5 w-5" />} />
              <SocialLink href="https://vimeo.com" icon={<Vimeo className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>New York, NY</p>
              <p>sameer.salmani1602@gmail.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Visual Artist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
    >
      {icon}
    </a>
  )
}
