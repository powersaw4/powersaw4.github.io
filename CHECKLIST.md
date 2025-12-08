# BRICKIT DESIGNS WEBSITE - PROJECT CHECKLIST

Complete checklist for deploying your website successfully.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### 1. Configuration (REQUIRED)

- [ ] **Update Web3Forms Access Key**
  - File: `index.html` (Line ~1324)
  - Action: Replace with your key from web3forms.com
  - Current: `30c58dde-0154-43e9-b7a6-b4f0dd8c6142`

- [ ] **Update Email Addresses**
  - File: `index.html` (Lines 1394-1408)
  - Replace: `principal@brickitdesigns.com`
  - Replace: `contact@brickitdesigns.com`

- [ ] **Update Phone Number**
  - File: `index.html` (Line ~1405)
  - Replace: `+91-70620-05660`

- [ ] **Update Physical Address**
  - File: `index.html` (Lines 1397-1400)
  - Replace with your address
  - Update Google Maps link

---

### 2. Content Updates (OPTIONAL)

- [ ] **Replace Project Images**
  - File: `index.html` (Lines 668-721)
  - Upload your images to GitHub or image host
  - Replace all 9 slideshow image URLs

- [ ] **Update Client Logos**
  - File: `index.html` (Lines 1127-1278)
  - Upload your logos
  - Replace logo URLs (in all 3 sets)

- [ ] **Update Company Text**
  - File: `index.html` (Lines 810-825)
  - Update "Who We Are" section
  - Customize description

- [ ] **Update Social Media Links**
  - File: `index.html` (Lines 1430-1445)
  - Instagram: Replace `/brickitdesigns`
  - LinkedIn: Replace profile URL

- [ ] **Update Meta Tags**
  - File: `index.html` (Lines 7-9)
  - Page title
  - Description
  - Keywords

---

### 3. Testing (REQUIRED)

- [ ] **Open `index.html` in Browser**
  - Double-click file
  - Should open in default browser

- [ ] **Test Navigation**
  - Click navigation menu
  - Verify all sections work
  - Test smooth scrolling

- [ ] **Test Contact Form**
  - Fill all fields
  - Submit form
  - Check for success popup
  - Verify email received

- [ ] **Test Slideshow**
  - Verify images load
  - Check auto-rotation (every 4 seconds)
  - Ensure smooth transitions

- [ ] **Test Responsive Design**
  - Desktop view (Chrome, Firefox, Safari)
  - Tablet view (iPad, Android tablet)
  - Mobile view (iPhone, Android phone)
  - Use browser dev tools (F12 → Device toolbar)

- [ ] **Check All Links**
  - Email links
  - Phone links
  - Address/Maps link
  - Social media links
  - Footer navigation

- [ ] **Verify Images Load**
  - Hero slideshow (9 images)
  - Client logos (16+ logos)
  - All images display correctly

---

## 🚀 DEPLOYMENT CHECKLIST

### Option A: GitHub Pages

- [ ] **Create GitHub Account**
  - Go to github.com
  - Sign up if needed

- [ ] **Create Repository**
  - Click "+" → "New repository"
  - Name: `brickit-designs`
  - Make it Public
  - Don't initialize with README

- [ ] **Upload Files**
  - Click "uploading an existing file"
  - Drag ALL files from package
  - Commit changes

- [ ] **Enable Pages**
  - Settings → Pages
  - Source: "Deploy from a branch"
  - Branch: `main` / `/ (root)`
  - Save

- [ ] **Verify Live Site**
  - Wait 2-3 minutes
  - Visit: `https://YOUR-USERNAME.github.io/brickit-designs/`
  - Test all functionality

---

### Option B: Netlify

- [ ] **Create Netlify Account**
  - Go to netlify.com
  - Sign up

- [ ] **Deploy Site**
  - Drag & drop entire folder
  - Wait for deployment (30 seconds)

- [ ] **Verify Live Site**
  - Click generated URL
  - Test all functionality

- [ ] **Custom Domain** (Optional)
  - Site settings → Domain management
  - Add your domain
  - Configure DNS

---

### Option C: Vercel

- [ ] **Install Vercel CLI**
  ```bash
  npm install -g vercel
  ```

- [ ] **Deploy**
  ```bash
  cd brickit-website-package
  vercel --prod
  ```

- [ ] **Verify Live Site**
  - Visit generated URL
  - Test all functionality

---

## 🌐 POST-DEPLOYMENT CHECKLIST

### 1. Functionality Tests

- [ ] **Contact Form**
  - Submit test enquiry
  - Verify email received
  - Check all fields validate

- [ ] **Navigation**
  - Test menu on desktop
  - Test menu on mobile
  - Verify smooth scrolling

- [ ] **Images**
  - All slideshow images load
  - All client logos load
  - No broken images

- [ ] **Responsive Design**
  - Test on actual mobile device
  - Test on tablet
  - Test on desktop

- [ ] **Performance**
  - Load time < 3 seconds
  - Test on https://pagespeed.web.dev
  - Lighthouse score > 90

---

### 2. SEO & Analytics (Optional)

- [ ] **Submit to Google**
  - Google Search Console
  - Submit sitemap

- [ ] **Submit to Bing**
  - Bing Webmaster Tools

- [ ] **Add Analytics**
  - Google Analytics
  - Add tracking code to HTML

- [ ] **Social Media**
  - Update website link on Instagram
  - Update website link on LinkedIn
  - Update website link on Facebook

---

### 3. Custom Domain (Optional)

- [ ] **Purchase Domain**
  - Buy from Namecheap, GoDaddy, etc.

- [ ] **Configure DNS**
  - Add A records (GitHub Pages)
  - OR Add CNAME (Netlify/Vercel)
  - Wait for propagation (24-48 hours)

- [ ] **Enable HTTPS**
  - Automatic on all platforms
  - Verify SSL certificate active

- [ ] **Test Custom Domain**
  - Visit your domain
  - Verify site loads correctly

---

## 📱 MOBILE OPTIMIZATION CHECKLIST

- [ ] **Test on iPhone**
  - Safari browser
  - Form works
  - Navigation works

- [ ] **Test on Android**
  - Chrome browser
  - Form works
  - Navigation works

- [ ] **Tablet Testing**
  - iPad (Safari)
  - Android tablet (Chrome)

---

## 🔒 SECURITY CHECKLIST

- [ ] **HTTPS Enabled**
  - SSL certificate active
  - All pages use HTTPS

- [ ] **Form Validation**
  - Email format checked
  - Phone format checked (10 digits)
  - Required fields enforced

- [ ] **No Exposed Credentials**
  - No passwords in code
  - No API keys exposed (except Web3Forms public key)

---

## 📊 PERFORMANCE CHECKLIST

- [ ] **Image Optimization**
  - Images compressed (< 500KB each)
  - Appropriate formats (JPG for photos, PNG for logos)

- [ ] **Load Speed**
  - First paint < 1 second
  - Full load < 2 seconds
  - Test at https://pagespeed.web.dev

- [ ] **Mobile Performance**
  - Mobile score > 85
  - No layout shifts

---

## ✅ FINAL REVIEW CHECKLIST

Before announcing your website:

- [ ] All contact information updated
- [ ] All images replaced/optimized
- [ ] Contact form tested and working
- [ ] Site loads correctly on all devices
- [ ] All links working
- [ ] No broken images
- [ ] HTTPS enabled
- [ ] Performance score > 90
- [ ] Responsive design verified
- [ ] Social media links updated
- [ ] Meta tags updated for SEO

---

## 🎉 LAUNCH CHECKLIST

- [ ] **Announce Launch**
  - Post on social media
  - Email clients/contacts
  - Update email signatures

- [ ] **Monitor**
  - Check analytics daily (first week)
  - Monitor form submissions
  - Check for errors

- [ ] **Backup**
  - Keep copy of all files
  - Document any changes made

---

## 🆘 TROUBLESHOOTING

If something doesn't work:

1. **Check Browser Console** (F12)
   - Look for errors
   - Red messages indicate issues

2. **Clear Cache**
   - Ctrl+Shift+R (Chrome/Firefox)
   - Cmd+Shift+R (Mac)

3. **Verify Changes Saved**
   - Re-upload files if needed
   - Check GitHub/Netlify/Vercel dashboard

4. **Test in Incognito Mode**
   - Rules out caching issues

5. **Contact Support**
   - Email: principal@brickitdesigns.com

---

## 📞 SUPPORT CONTACTS

- **Email:** principal@brickitdesigns.com
- **GitHub Issues:** (if using GitHub Pages)
- **Netlify Support:** https://answers.netlify.com
- **Vercel Support:** https://vercel.com/discord

---

**Print this checklist and mark off items as you complete them!**

**Last Updated:** December 8, 2024  
**Version:** 1.0.0
