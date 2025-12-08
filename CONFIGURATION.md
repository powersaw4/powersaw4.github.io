# CONFIGURATION GUIDE

Complete guide to customizing your Brickit Designs website.

---

## 📧 1. Contact Form Configuration (REQUIRED)

### Update Web3Forms Access Key

**Location:** `index.html` - Line ~1324

**Current Configuration:**
```html
<input type="hidden" name="access_key" value="30c58dde-0154-43e9-b7a6-b4f0dd8c6142">
```

**Steps:**
1. Go to https://web3forms.com
2. Sign up for free account
3. Click "Create Access Key"
4. Copy your new access key
5. Replace in `index.html`

**Email Recipient:**
- Emails are sent to: `principal@brickitdesigns.com`
- To change: Update in Web3Forms dashboard

---

## 🖼️ 2. Update Project Images

### Hero Slideshow Images (Section 1)

**Location:** `index.html` - Lines 668-721

**Current Images:**
- 9 project images from GitHub
- URL format: `https://raw.githubusercontent.com/powersaw4/Website_Selected_Works/main/[FILENAME].jpg`

**To Replace:**

**Option A: Use Your Own GitHub Repository**
1. Create GitHub repository for images
2. Upload your images
3. Get raw image URLs
4. Replace in HTML

**Option B: Use External Image Hosting**
1. Upload to: imgur.com, cloudinary.com, or similar
2. Get direct image URLs
3. Replace in HTML

**Example:**
```html
<!-- OLD -->
<div class="slide active">
    <img src="https://raw.githubusercontent.com/powersaw4/Website_Selected_Works/main/NSD%20Gangtok%2C%20sikkim_R3.jpg" alt="NSD Gangtok, Sikkim">
</div>

<!-- NEW -->
<div class="slide active">
    <img src="YOUR-IMAGE-URL-HERE.jpg" alt="Your Project Name">
</div>
```

**Recommended Image Specifications:**
- Format: JPG or WebP
- Size: 1920x1080px (landscape)
- File size: < 500KB (optimized)
- Quality: 80-85%

---

## 🏢 3. Update Client Logos

### Client Logo Carousel (Section 3)

**Location:** `index.html` - Lines 1127-1278

**Current Logos:**
- 16 client logos (repeated 3 times for seamless loop)
- URL format: `https://raw.githubusercontent.com/powersaw4/Website_Client_images/main/[FILENAME].png`

**To Replace:**

1. **Upload Your Logos:**
   - Create GitHub repository OR
   - Use image hosting service

2. **Replace URLs in HTML:**
```html
<!-- OLD -->
<div class="client-logo">
    <img src="https://raw.githubusercontent.com/powersaw4/Website_Client_images/main/AFS%20India.png" alt="AFS India">
</div>

<!-- NEW -->
<div class="client-logo">
    <img src="YOUR-LOGO-URL-HERE.png" alt="Your Client Name">
</div>
```

3. **Important:** Replace logo in ALL 3 sets (for seamless loop)

**Logo Specifications:**
- Format: PNG (with transparency) or SVG
- Background: Transparent
- Size: 300x150px max
- File size: < 50KB

---

## 📍 4. Update Contact Information

### Email Addresses

**Location:** `index.html` - Lines 1394-1408

**Find and Replace:**
```html
<!-- Current -->
<a href="mailto:principal@brickitdesigns.com">principal@brickitdesigns.com</a>
<a href="mailto:contact@brickitdesigns.com">contact@brickitdesigns.com</a>

<!-- Update to your emails -->
<a href="mailto:YOUR-EMAIL@yourdomain.com">YOUR-EMAIL@yourdomain.com</a>
```

### Phone Number

**Find:**
```html
<a href="tel:+917062005660">+91-70620-05660</a>
```

**Replace with:**
```html
<a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
```

### Physical Address

**Find:**
```html
<a href="https://maps.app.goo.gl/MaHfbuRCoRneShet5" target="_blank">
Unit-807, Tower-2, ABC Business Park,<br/>
Sector 135, Noida, Uttar Pradesh 201305
</a>
```

**Replace with:**
```html
<a href="YOUR-GOOGLE-MAPS-LINK" target="_blank">
Your Address Line 1,<br/>
Your Address Line 2
</a>
```

**Get Google Maps Link:**
1. Go to Google Maps
2. Search your address
3. Click "Share" → "Copy Link"
4. Paste in HTML

---

## 🎨 5. Customize Colors

### Color Palette

**Location:** `index.html` - Lines 20-27 (CSS Variables)

**Current Colors:**
```css
:root {
    --color-primary: hsl(11, 49%, 41%);           /* Terracotta */
    --color-background: hsl(35, 15%, 96%);        /* Light grey */
    --color-foreground: hsl(15, 10%, 15%);        /* Dark text */
    --color-secondary: hsl(30, 15%, 89%);         /* Secondary bg */
}
```

**To Change:**
1. Find the `:root` section
2. Update HSL values
3. Use https://hslpicker.com to find colors

**Example:**
```css
:root {
    --color-primary: hsl(210, 100%, 50%);     /* Blue */
    --color-background: hsl(0, 0%, 95%);       /* White */
}
```

---

## 🔤 6. Update Text Content

### Company Name

**Find and Replace:**
- "Brickit" → Your Company Name
- "BRICKIT" → YOUR COMPANY NAME
- "Brickit Designs" → Your Company Name

**Locations:**
- Navigation logo
- Footer branding
- Footer massive text
- Page title

### Company Description

**Section 2 - Who We Are**

**Location:** `index.html` - Lines 810-825

**Find:**
```html
<h2>Brickit is a multidisciplinary architecture studio...</h2>
<p>We combine high-performance design...</p>
```

**Replace with your text**

---

## 📱 7. Social Media Links

### Update Social Links

**Location:** `index.html` - Lines 1430-1445 (Footer)

**Instagram:**
```html
<!-- OLD -->
<a href="https://instagram.com/brickitdesigns">

<!-- NEW -->
<a href="https://instagram.com/YOUR-HANDLE">
```

**LinkedIn:**
```html
<!-- OLD -->
<a href="https://www.linkedin.com/in/brickit-designs-noida135/">

<!-- NEW -->
<a href="https://www.linkedin.com/in/YOUR-PROFILE/">
```

**Add More Social Icons:**
- Copy existing `<a>` tag structure
- Change icon SVG
- Update link

---

## 🌐 8. Meta Tags & SEO

### Page Title

**Location:** `index.html` - Line 7

```html
<!-- Current -->
<title>Brickit Designs - Architecture & Interior Design</title>

<!-- Update -->
<title>Your Company - Your Tagline</title>
```

### Meta Description

**Location:** `index.html` - Line 8

```html
<!-- Current -->
<meta name="description" content="Brickit Designs - Professional Architecture & Interior Design Studio...">

<!-- Update -->
<meta name="description" content="Your company description here...">
```

### Meta Keywords

**Location:** `index.html` - Line 9

```html
<meta name="keywords" content="your, keywords, here">
```

---

## 📊 9. Add Google Analytics (Optional)

### Get Tracking Code

1. Go to https://analytics.google.com
2. Create account & property
3. Get tracking ID (G-XXXXXXXXXX)

### Add to Website

**Location:** Before `</head>` tag in `index.html`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
</head>
```

---

## 🎭 10. Customize Fonts (Advanced)

### Current Fonts

- **Body:** Comme (Google Fonts)
- **Headings:** Monda (Google Fonts)
- **Special:** Space Grotesk (Google Fonts)

### Change Fonts

**Location:** `index.html` - Line 11

**Current:**
```html
<link href="https://fonts.googleapis.com/css2?family=Comme:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Steps:**
1. Go to https://fonts.google.com
2. Choose your fonts
3. Click "Get embed code"
4. Replace link in HTML
5. Update font-family in CSS

**Update CSS:**
```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Your-Heading-Font', sans-serif;
}
```

---

## ✅ Configuration Checklist

Before going live, verify:

- [ ] Web3Forms access key updated
- [ ] Contact email addresses updated
- [ ] Phone numbers updated
- [ ] Physical address updated
- [ ] Project images replaced
- [ ] Client logos updated
- [ ] Company name updated throughout
- [ ] Social media links updated
- [ ] Meta tags updated
- [ ] Colors customized (if desired)
- [ ] All text content reviewed
- [ ] Contact form tested
- [ ] All images loading correctly

---

## 🆘 Need Help?

- **Email:** principal@brickitdesigns.com
- **Documentation:** See README.md
- **Deployment:** See DEPLOYMENT.md

---

**Last Updated:** December 8, 2024  
**Version:** 1.0.0
