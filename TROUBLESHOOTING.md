# TROUBLESHOOTING GUIDE

Common issues and solutions for Brickit Designs website.

---

## 🚫 Contact Form Issues

### Problem: Form doesn't submit

**Symptoms:**
- Click submit button, nothing happens
- No success popup appears
- No email received

**Solutions:**

1. **Check Web3Forms Access Key**
   - File: `index.html` (Line ~1324)
   - Verify key is correct
   - Check at https://web3forms.com

2. **Check Browser Console**
   - Press F12
   - Go to "Console" tab
   - Look for red error messages

3. **Test Internet Connection**
   - Form requires internet to work
   - Check you're online

4. **Disable Browser Extensions**
   - Ad blockers may block form
   - Try in Incognito mode (Ctrl+Shift+N)

5. **Check Email Spam Folder**
   - Emails may go to spam
   - Add Web3Forms to contacts

---

### Problem: Phone number won't accept input

**Symptoms:**
- Can't type in phone field
- Only accepts 10 digits

**This is CORRECT behavior:**
- Field only accepts numbers
- Exactly 10 digits required
- Auto-adds +91 prefix

**Solution:**
- Enter 10-digit number only
- Example: 7062005660
- Don't include +91 or spaces

---

### Problem: Email not received

**Check:**
1. Web3Forms dashboard (web3forms.com)
2. Spam/junk folder
3. Email address correct in dashboard
4. Form successfully submitted (popup appeared)

**Solution:**
- Add `notifications@web3forms.com` to contacts
- Check Web3Forms submission logs
- Verify recipient email in dashboard

---

## 🖼️ Image Loading Issues

### Problem: Images not displaying

**Symptoms:**
- Broken image icons
- Gray boxes instead of images
- Some images work, others don't

**Solutions:**

1. **Check Image URLs**
   - Must be full URLs (https://...)
   - Test URL in browser address bar
   - Verify image is publicly accessible

2. **Check File Names**
   - No spaces in filenames
   - Use hyphens: `my-image.jpg` ✓
   - Avoid: `my image.jpg` ✗

3. **Check CORS Settings**
   - Some hosts block external access
   - Use GitHub for reliable hosting
   - Or use Cloudinary/Imgur

4. **Clear Browser Cache**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

---

### Problem: Slideshow not working

**Symptoms:**
- Only first image shows
- No auto-rotation
- Images don't fade

**Solutions:**

1. **Check GSAP Library**
   - Ensure GSAP CDN loads
   - Check browser console for errors

2. **Check JavaScript**
   - Verify all `<script>` tags present
   - No syntax errors in console

3. **Wait for Images to Load**
   - First visit may be slow
   - Give 5-10 seconds for preload

---

## 🧭 Navigation Issues

### Problem: Navigation doesn't hide

**Symptoms:**
- Navigation stays visible in all sections
- Should only show in Section 1 (hero)

**Solutions:**

1. **Check Section ID**
   - Section 1 must have `id="home"`
   - Verify in HTML (Line ~667)

2. **Clear Browser Cache**
   - Old JavaScript may be cached
   - Hard refresh: Ctrl+Shift+R

3. **Check JavaScript Console**
   - Look for errors
   - Verify IntersectionObserver supported

---

### Problem: Menu doesn't open

**Symptoms:**
- Click hamburger, menu doesn't appear
- Menu overlay stuck

**Solutions:**

1. **Check z-index**
   - Menu should be z-index: 2000
   - Verify in CSS

2. **Clear Cache**
   - Old CSS may be cached

3. **Check Console**
   - JavaScript errors may prevent opening

---

## 📱 Mobile/Responsive Issues

### Problem: Site doesn't look right on mobile

**Symptoms:**
- Text too small/large
- Elements overlapping
- Horizontal scroll appears

**Solutions:**

1. **Check Viewport Meta Tag**
   - Verify present in `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Test in Different Browsers**
   - Try Safari (iPhone)
   - Try Chrome (Android)

3. **Clear Mobile Browser Cache**
   - Settings → Clear browsing data

---

### Problem: Form doesn't work on mobile

**Solutions:**

1. **Check Auto-fill Settings**
   - Disable browser auto-fill
   - Try manual entry

2. **Check Virtual Keyboard**
   - Keyboard may hide form
   - Scroll to see submit button

3. **Test in Desktop Browser**
   - Use device emulator (F12 → Device toolbar)

---

## 🌐 Deployment Issues

### GitHub Pages Not Working

**Problem:** Site not loading after deployment

**Solutions:**

1. **Wait 2-3 Minutes**
   - GitHub Pages takes time to deploy
   - Check back after waiting

2. **Check Pages Settings**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `/ (root)`

3. **Check Repository Name**
   - Must match URL structure
   - Public repository required

4. **Check index.html Location**
   - Must be in root directory
   - Not in subdirectory

---

### Netlify Deployment Failed

**Solutions:**

1. **Check File Structure**
   - `index.html` must be in root
   - No build process required

2. **Redeploy**
   - Drag and drop again
   - Or reconnect Git repository

3. **Check Deploy Logs**
   - Site → Deploys → View logs
   - Look for error messages

---

### Vercel Deployment Issues

**Solutions:**

1. **Check Project Settings**
   - Framework preset: "Other"
   - Build command: (empty)
   - Output directory: ./

2. **Redeploy**
   - Run `vercel --prod` again

3. **Check Logs**
   - Vercel dashboard → Deployments
   - View build logs

---

## 🔐 HTTPS/SSL Issues

### Problem: "Not Secure" warning

**Solutions:**

1. **Wait for SSL Certificate**
   - Auto-generated after deployment
   - Can take 24 hours

2. **Force HTTPS**
   - All platforms auto-enable HTTPS
   - Check platform settings

3. **Check Mixed Content**
   - Ensure all URLs use HTTPS
   - Not HTTP

---

## ⚡ Performance Issues

### Problem: Slow loading

**Solutions:**

1. **Optimize Images**
   - Compress to < 500KB
   - Use https://tinypng.com

2. **Check Image Hosting**
   - Use CDN (Cloudinary, GitHub)
   - Not slow hosting services

3. **Clear Browser Cache**
   - Old files may be cached

4. **Test Connection Speed**
   - Test on https://fast.com
   - Slow internet affects loading

---

### Problem: Low Lighthouse score

**Solutions:**

1. **Optimize Images**
   - Proper size and format
   - Compression applied

2. **Add Alt Text**
   - All images need alt attributes

3. **Remove Unused Code**
   - (Already minimal in this template)

---

## 🎨 Display Issues

### Problem: Colors look different

**Solutions:**

1. **Check Color Calibration**
   - Display settings vary
   - Test on multiple devices

2. **Check CSS Variables**
   - Verify colors in `:root` section
   - HSL values correct

---

### Problem: Fonts not loading

**Symptoms:**
- System fonts display instead
- Text looks different

**Solutions:**

1. **Check Google Fonts**
   - Verify CDN link in `<head>`
   - Test URL in browser

2. **Check Internet Connection**
   - Fonts load from CDN
   - Requires internet

3. **Clear Cache**
   - Old font files cached

---

## 🔧 Development Issues

### Problem: Changes not showing

**Solutions:**

1. **Hard Refresh**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

2. **Clear All Cache**
   - Browser settings → Clear data
   - Select "Cached images and files"

3. **Try Incognito Mode**
   - Ctrl+Shift+N (Chrome)
   - Bypasses cache

4. **Check File Saved**
   - Verify changes saved in editor
   - Re-upload if using web host

---

## 🐛 JavaScript Errors

### Common Console Errors

**Error:** "Cannot read property..."

**Solution:**
- Element ID may be wrong
- Check HTML element IDs match JavaScript

---

**Error:** "Failed to fetch"

**Solution:**
- Internet connection issue
- CORS blocked (use different image host)
- API endpoint down

---

**Error:** "Unexpected token"

**Solution:**
- Syntax error in JavaScript
- Missing closing bracket/quote
- Check code carefully

---

## 📞 Still Having Issues?

### Before Contacting Support

1. **Check Browser Console** (F12)
   - Note any error messages
   - Screenshot if possible

2. **Test in Different Browser**
   - Chrome, Firefox, Safari
   - Helps identify browser-specific issues

3. **Test on Different Device**
   - Desktop vs. mobile
   - Different operating system

4. **Document the Issue**
   - What were you doing?
   - What did you expect?
   - What actually happened?
   - Any error messages?

### Contact Support

**Email:** principal@brickitdesigns.com

**Include:**
- Detailed description of issue
- Browser and version
- Operating system
- Screenshots (if applicable)
- Error messages from console
- Steps to reproduce

---

## 🔍 Debugging Tools

### Browser DevTools (F12)

1. **Console Tab**
   - Shows JavaScript errors
   - Red messages = errors

2. **Network Tab**
   - Shows file loading
   - Failed requests in red

3. **Elements Tab**
   - Inspect HTML/CSS
   - See computed styles

### Online Testing Tools

- **Lighthouse:** Built into Chrome DevTools
- **PageSpeed:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com
- **Mobile Test:** https://search.google.com/test/mobile-friendly

---

## ✅ Prevention Checklist

Avoid issues by:

- [ ] Testing before deploying
- [ ] Checking all links
- [ ] Verifying image URLs
- [ ] Testing contact form
- [ ] Using supported browsers
- [ ] Clearing cache regularly
- [ ] Keeping backups
- [ ] Testing on mobile

---

**Last Updated:** December 8, 2024  
**Version:** 1.0.0
