# Images Folder

This folder is reserved for local image assets. Currently, all images are hosted externally on GitHub CDN for optimal performance and reliability.

---

## Current Image Hosting

All images are currently hosted on GitHub repositories:

### Homepage Images
- **Hero Slideshow:** `https://raw.githubusercontent.com/powersaw4/Website_Selected_Works/main/`
- **Client Logos:** `https://raw.githubusercontent.com/powersaw4/Website_Client_images/main/`

### About Page Images
- **Team Photos:** `https://raw.githubusercontent.com/powersaw4/Website_About_images/main/`

---

## Adding Local Images

If you want to host images locally instead of using CDN:

### Step 1: Add Image Files
Place your images in this folder:
```
images/
├── hero-image-1.jpg
├── hero-image-2.jpg
├── client-logo-1.png
├── client-logo-2.png
└── team-photo.jpg
```

### Step 2: Update HTML References

**In index.html (Hero Slideshow):**
```html
<!-- Replace: -->
<img src="https://raw.githubusercontent.com/powersaw4/Website_Selected_Works/main/image.jpg">

<!-- With: -->
<img src="images/hero-image-1.jpg">
```

**In index.html (Client Logos):**
```html
<!-- Replace: -->
<img src="https://raw.githubusercontent.com/powersaw4/Website_Client_images/main/logo.png">

<!-- With: -->
<img src="images/client-logo-1.png">
```

**In about.html (Team Photo):**
```html
<!-- Replace: -->
<img src="https://raw.githubusercontent.com/powersaw4/Website_About_images/main/photo.png">

<!-- With: -->
<img src="images/team-photo.jpg">
```

### Step 3: Optimize Images

Before adding images to this folder, optimize them for web:

**Recommended Tools:**
- [TinyPNG](https://tinypng.com) - PNG/JPG compression
- [Squoosh](https://squoosh.app) - Google's image optimizer
- [ImageOptim](https://imageoptim.com) - Mac app

**Recommended Formats:**
- **Photos:** JPG (quality 85%)
- **Logos:** PNG (transparent backgrounds)
- **Graphics:** SVG (if applicable)

**Recommended Sizes:**
- **Hero Images:** 1920x1080px (Full HD)
- **Client Logos:** 400x300px (will be scaled)
- **Team Photos:** 800x1000px (portrait aspect)

---

## Image Naming Convention

Use clear, descriptive names:
```
hero-project-name.jpg
client-logo-company-name.png
team-member-name.jpg
```

**Good:**
- `hero-supreme-court-india.jpg`
- `client-logo-amazon.png`
- `team-pavitra-jain.jpg`

**Avoid:**
- `IMG_1234.jpg`
- `logo1.png`
- `pic.jpg`

---

## Image Requirements

### Hero Slideshow Images
- **Format:** JPG
- **Dimensions:** 1920x1080px (16:9 aspect ratio)
- **File Size:** < 500KB each
- **Total:** 9 images for slideshow

### Client Logos
- **Format:** PNG (with transparency)
- **Dimensions:** Approximately 400x300px
- **File Size:** < 100KB each
- **Total:** 45+ logos for carousel

### Team Photos
- **Format:** JPG or PNG
- **Aspect Ratio:** 3:4 (portrait)
- **Dimensions:** 800x1000px recommended
- **File Size:** < 300KB

---

## CDN vs Local Hosting

### Benefits of CDN (Current Setup)
✅ **Fast Loading:** GitHub CDN has global distribution  
✅ **No Storage:** Doesn't count against repo size  
✅ **Reliability:** GitHub infrastructure  
✅ **Easy Updates:** Update images without redeploying site  

### Benefits of Local Hosting
✅ **Full Control:** Images in your repository  
✅ **Self-Contained:** No external dependencies  
✅ **Offline Work:** Can develop without internet  
✅ **Privacy:** Images not publicly accessible on GitHub  

### Recommendation
For production websites, CDN hosting (current setup) is recommended. For development or if you need full control, use local hosting.

---

## Adding Favicon

Place your favicon in this folder and add to HTML `<head>`:

```html
<link rel="icon" type="image/png" href="images/favicon.png">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
```

**Favicon Specifications:**
- **Format:** PNG or ICO
- **Sizes:** 16x16, 32x32, 48x48, 192x192
- **Tools:** [Favicon.io](https://favicon.io) - Generate from text or image

---

## Git Tracking

By default, this folder is ignored by Git (see `.gitignore`). To track specific images:

```bash
# Add specific image
git add -f images/hero-image-1.jpg

# Or update .gitignore to track all images
# Remove this line from .gitignore: images/*
```

---

## Image Optimization Tips

1. **Compress Before Upload:**
   - Use TinyPNG or Squoosh
   - Target 50-70% size reduction
   - Maintain visual quality

2. **Use Correct Format:**
   - JPG for photographs
   - PNG for logos/graphics with transparency
   - SVG for icons/simple graphics
   - WebP for modern browsers (optional)

3. **Responsive Images:**
   - Provide multiple sizes if needed
   - Use `srcset` attribute
   - Let browser choose best size

4. **Lazy Loading:**
   - Images already use `loading="lazy"` in HTML
   - No additional work needed

---

## Support

For questions about images:
- Check main README.md
- Review DEPLOYMENT.md
- Email: principal@brickitdesigns.com
