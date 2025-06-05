# How to Add Your Photographs

## Step 1: Prepare Your Images

1. **Resize your images** to the recommended dimensions
2. **Optimize file sizes** (keep under 500KB for web)
3. **Rename files** using the naming convention shown in each folder's README
4. **Convert to WebP** for better performance (optional but recommended)

## Step 2: Upload to Folders

1. **Photography**: Add to appropriate category folders
   - `/public/images/photography/portrait/`
   - `/public/images/photography/street/`
   - `/public/images/photography/documentary/`
   - `/public/images/photography/landscape/`
   - `/public/images/photography/event/`

2. **Project Images**: Add to project-specific folders
   - `/public/images/projects/kuchh-aur/`
   - `/public/images/projects/do-ghaz/`
   - `/public/images/projects/kadam/`
   - `/public/images/projects/salaam/`
   - `/public/images/projects/dhoop/`

3. **BTS Images**: Add to BTS project folders
   - `/public/images/bts/kuchh-aur/`
   - `/public/images/bts/do-ghaz/`
   - `/public/images/bts/kadam/`
   - `/public/images/bts/salaam/`
   - `/public/images/bts/dhoop/`

## Step 3: Update Code

After uploading images, update the image paths in:
- `lib/image-paths.ts` (centralized path management)
- Individual page components if needed

## Step 4: Test

1. Run your development server
2. Check that images load correctly
3. Test the lightbox functionality
4. Verify mobile responsiveness

## Tools for Image Optimization

- **Online**: TinyPNG, Squoosh.app
- **Software**: Photoshop, GIMP, ImageOptim
- **Command Line**: ImageMagick, Sharp
