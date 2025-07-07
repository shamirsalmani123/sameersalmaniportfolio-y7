/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add base path if deploying to GitHub Pages subdirectory
  // basePath: '/photographer-portfolio', // Uncomment if deploying to GitHub Pages
  
  // Ensure all dynamic routes are properly generated
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

export default nextConfig
