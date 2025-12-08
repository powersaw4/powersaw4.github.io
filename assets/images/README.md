# Images Directory

This directory is for storing your local project images.

---

## 📁 Recommended Structure

```
assets/images/
├── projects/           # Project slideshow images
├── clients/           # Client logo images
├── team/              # Team member photos
└── misc/              # Other images
```

---

## 🖼️ Image Guidelines

### Hero Slideshow Images (`/projects/`)

**Specifications:**
- **Format:** JPG or WebP
- **Dimensions:** 1920x1080px (landscape)
- **File Size:** < 500KB per image
- **Quantity:** 9 images minimum
- **Naming:** `project-1.jpg`, `project-2.jpg`, etc.

**Optimization Tools:**
- https://tinypng.com
- https://squoosh.app
- https://imageoptim.com

---

### Client Logos (`/clients/`)

**Specifications:**
- **Format:** PNG (with transparency) or SVG
- **Background:** Transparent
- **Dimensions:** 300x150px max
- **File Size:** < 50KB per logo
- **Naming:** `client-name.png`

**Tips:**
- Use transparent background
- Ensure logo is centered
- Test on both light and dark backgrounds

---

## 🌐 Using External Image Hosting

### Option 1: GitHub (Free)

1. Create new repository: `brickit-images`
2. Upload images
3. Get raw URLs:
   - Format: `https://raw.githubusercontent.com/USERNAME/REPO/main/IMAGE.jpg`

**Pros:**
- Free
- Reliable
- Version controlled

**Cons:**
- Not ideal for frequent changes
- Size limits per repo (1GB recommended)

---

### Option 2: Cloudinary (Free Tier)

1. Sign up at https://cloudinary.com
2. Upload images
3. Get URLs from dashboard

**Pros:**
- Automatic optimization
- Image transformations
- CDN delivery

**Cons:**
- Limited free tier (25GB/month)
- Requires account

---

### Option 3: Imgur (Free)

1. Go to https://imgur.com
2. Upload images
3. Get direct links

**Pros:**
- Simple
- Fast
- No account required

**Cons:**
- May compress images
- No guaranteed uptime
- Not ideal for commercial use

---

## 🔄 Updating Images in Website

After uploading images, update `index.html`:

### Hero Slideshow
**Location:** Lines 668-721

```html
<div class="slide active">
    <img src="YOUR-IMAGE-URL-HERE.jpg" alt="Project Name">
</div>
```

### Client Logos
**Location:** Lines 1127-1278

```html
<div class="client-logo">
    <img src="YOUR-LOGO-URL-HERE.png" alt="Client Name">
</div>
```

---

## ⚡ Performance Tips

1. **Compress Images**
   - Use TinyPNG or Squoosh
   - Target 80-85% quality

2. **Proper Format**
   - Photos: JPG or WebP
   - Logos: PNG or SVG
   - Icons: SVG preferred

3. **Lazy Loading** (Future Enhancement)
   - Images load as user scrolls
   - Improves initial page load

4. **Responsive Images** (Future Enhancement)
   - Different sizes for different devices
   - Saves bandwidth on mobile

---

## 📏 Dimension Guide

| Type | Width | Height | Format | Max Size |
|------|-------|--------|--------|----------|
| Hero Slides | 1920px | 1080px | JPG/WebP | 500KB |
| Client Logos | 300px | 150px | PNG/SVG | 50KB |
| Team Photos | 500px | 500px | JPG | 150KB |
| Icons | 64px | 64px | SVG/PNG | 10KB |

---

## 🔧 Tools & Resources

### Compression
- https://tinypng.com (PNG/JPG)
- https://squoosh.app (All formats)
- https://imageoptim.com (Mac app)

### Conversion
- https://cloudconvert.com (Format conversion)
- https://convertio.co (Batch conversion)

### Editing
- https://www.photopea.com (Free Photoshop alternative)
- https://pixlr.com/editor (Online editor)

### Stock Photos
- https://unsplash.com (Free, high-quality)
- https://pexels.com (Free stock photos)
- https://pixabay.com (Free images)

---

## ✅ Image Checklist

Before adding images to website:

- [ ] Images compressed (< 500KB for photos, < 50KB for logos)
- [ ] Correct dimensions (1920x1080 for slideshow)
- [ ] Proper format (JPG for photos, PNG for logos)
- [ ] Alt text prepared (for accessibility)
- [ ] Images uploaded to hosting service
- [ ] URLs copied and ready
- [ ] Tested in multiple browsers
- [ ] Mobile viewing verified

---

## 📞 Need Help?

**Email:** principal@brickitdesigns.com

---

**Last Updated:** December 8, 2024
