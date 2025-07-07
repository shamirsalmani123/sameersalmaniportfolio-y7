/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
  },
  
  // Ensure proper static generation
  experimental: {
    isrMemoryCacheSize: 0,
  },
  
  // Add base path if deploying to GitHub Pages subdirectory
  // basePath: '/photographer-portfolio', // Uncomment if deploying to GitHub Pages subdirectory
  
  async generateBuildId() {
    // Use a consistent build ID for static export
    return 'static-build'
  },
}

export default nextConfig
