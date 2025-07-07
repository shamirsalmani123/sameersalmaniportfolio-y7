# Deployment Guide

## 🚀 Deployment Options

### 1. Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
\`\`\`

### 2. Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### 3. GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions (see `.github/workflows/deploy.yml`)
3. Set custom domain in repository settings

## ⚙️ Configuration for Different Hosts

### For GitHub Pages Subdirectory
Uncomment the basePath in `next.config.mjs`:
\`\`\`javascript
basePath: '/photographer-portfolio'
\`\`\`

### For Custom Domain
1. Add your domain to `CNAME` file in `public/` folder
2. Update the GitHub Actions workflow
3. Configure DNS settings

## 🔧 Troubleshooting

### Dynamic Routes Not Working
- Ensure `output: 'export'` is set in `next.config.mjs`
- Check that `generateStaticParams()` is implemented
- Verify hosting service supports SPA routing

### Images Not Loading
- Set `images: { unoptimized: true }` in `next.config.mjs`
- Use relative paths for images
- Check image file extensions match imports

### 404 Errors on Refresh
- Add appropriate redirect rules for your hosting service
- Use the provided `.htaccess` or `_redirects` files
- Implement proper fallback routing
