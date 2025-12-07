# Image Assets Guide

This folder is for local image storage if you want to host images directly in your project instead of using external URLs.

## Current Setup

The website currently uses **external image URLs** for:
- Hero slideshow images (9 images from GitHub)
- Client logos (45+ logos from GitHub)

**Advantages:**
- ✅ Smaller repository size
- ✅ Faster git operations
- ✅ Images served via CDN
- ✅ No local storage needed

## To Use Local Images

If you prefer to host images locally:

### 1. Download Images

Create folders:
```
assets/images/
├── hero/           # Hero slideshow images
├── clients/        # Client logos
└── favicon/        # Favicon files
```

### 2. Update HTML

Replace external URLs with local paths:

**Current (External):**
```html
<img src="https://raw.githubusercontent.com/powersaw4/Website_Selected_Works/main/NSD_Gangtok_1.jpg" alt="NSD Gangtok">
```

**Update to (Local):**
```html
<img src="assets/images/hero/nsd-gangtok.jpg" alt="NSD Gangtok">
```

### 3. Image Optimization

Before adding images, optimize them:
- **Hero images:** 1920x1080px, JPG, < 500KB each
- **Client logos:** 400x250px, PNG with transparency, < 100KB each
- **Tools:** 
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/)

### 4. Recommended Formats

- **Hero photos:** JPG (better compression for photos)
- **Logos:** PNG (transparency support)
- **Icons:** SVG (scalable, smallest size)

## Image Requirements

### Hero Slideshow (Section 1)
- **Quantity:** 9 images
- **Dimensions:** 1920x1080px (16:9 ratio)
- **Format:** JPG
- **Size:** < 500KB per image
- **Total:** < 4.5MB for all

### Client Logos (Section 3)
- **Quantity:** 45+ logos
- **Dimensions:** 400x250px
- **Format:** PNG (with transparency)
- **Size:** < 100KB per logo
- **Background:** Transparent

### Favicon
- **Sizes needed:**
  - 16x16px
  - 32x32px
  - 180x180px (Apple)
  - 192x192px (Android)
  - 512x512px (Android)

## Current Image Sources

### Hero Images (9 total)
All from: `https://raw.githubusercontent.com/powersaw4/Website_Selected_Works/main/`

1. NSD_Gangtok_1.jpg
2. AFND_Gazebo_2.jpg
3. AFND_Gazebo_5.jpg
4. Shantiniketan_Dwarka_8.jpg
5. Indian_Museum_5.jpg
6. Swami_Vivekananda_Centre_1.jpg
7. Swami_Vivekananda_Centre_4.jpg
8. Indian_Museum_2.jpg
9. Swami_Vivekananda_Centre_2.jpg

### Client Logos (45+ total)
All from: `https://raw.githubusercontent.com/powersaw4/Website_Client_images/main/`

Including:
- Government agencies (CPWD, Ministry of Defence, etc.)
- Corporations (Amazon, Meesho, etc.)
- Educational institutions (NIFT, Sainik Schools, etc.)
- Logistics companies (FIBS, etc.)

## Adding New Images

### Method 1: Git LFS (Large Files)
```bash
# Install Git LFS
git lfs install

# Track image files
git lfs track "assets/images/**/*.jpg"
git lfs track "assets/images/**/*.png"

# Commit .gitattributes
git add .gitattributes
git commit -m "Configure Git LFS for images"

# Add images normally
git add assets/images/
git commit -m "Add image assets"
git push
```

### Method 2: Standard Git
```bash
# Simply add and commit
git add assets/images/
git commit -m "Add image assets"
git push
```

**Warning:** Keep total repository under 1GB for GitHub.

## External Image Hosting (Recommended)

### Option 1: GitHub Repository
- Create separate repo for images
- Use raw.githubusercontent.com URLs
- Free unlimited bandwidth via CDN

### Option 2: Cloudinary
- Free tier: 25GB storage, 25GB bandwidth
- Automatic optimization
- CDN delivery
- Image transformations

### Option 3: ImgBB
- Free image hosting
- Direct link support
- No expiration

### Option 4: Imgur
- Free hosting
- Easy upload
- Direct links available

## Performance Tips

1. **Lazy Loading**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Responsive Images**
   ```html
   <img 
     srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
     src="image-800.jpg"
     alt="Description"
   >
   ```

3. **WebP Format**
   ```html
   <picture>
     <source type="image/webp" srcset="image.webp">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

## Image Licenses

Ensure you have rights to use all images:
- ✅ Own photography
- ✅ Client-provided images
- ✅ Purchased stock photos
- ✅ Licensed from photographers
- ❌ Random Google images (copyright violation)

**Recommendation:** Use only images you own or have license for.

## Quick Reference

| Type | Dimensions | Format | Max Size | Quantity |
|------|-----------|--------|----------|----------|
| Hero | 1920x1080 | JPG | 500KB | 9 |
| Logo | 400x250 | PNG | 100KB | 45+ |
| Favicon | Various | ICO/PNG | 50KB | 5 |

---

**Note:** The website currently works perfectly with external URLs. Only move to local images if you have specific requirements for hosting images within your repository.
