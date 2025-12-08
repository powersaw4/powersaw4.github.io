# QUICK START GUIDE - Brickit Designs Website

## 🚀 Get Your Website Live in 5 Minutes

This guide will get your website live as quickly as possible.

---

## Option 1: GitHub Pages (Free, Simple)

### Step 1: Create GitHub Account
- Go to github.com
- Sign up if you don't have an account

### Step 2: Create New Repository
1. Click the "+" icon → "New repository"
2. Repository name: `brickit-designs`
3. Make it **Public**
4. Click "Create repository"

### Step 3: Upload Files
1. Click "uploading an existing file"
2. Drag ALL files from this folder
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `/ (root)`
4. Click "Save"

### Step 5: Access Your Website
- Wait 2-3 minutes
- Your site: `https://YOUR-USERNAME.github.io/brickit-designs/`

**Done! Your website is live!** ✅

---

## Option 2: Netlify (Drag & Drop - Easiest!)

### Step 1: Go to Netlify
- Visit netlify.com
- Sign up with email or GitHub

### Step 2: Deploy
1. Look for "Want to deploy a new site without connecting to Git?"
2. Drag this entire folder
3. Drop it on the deploy area

### Step 3: Done!
- Your site is live immediately!
- URL: `https://random-name.netlify.app`
- You can change the name in Site Settings

**That's it!** ✅

---

## Option 3: Vercel (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd brickit-website-package
vercel --prod
```

### Step 3: Done!
- Follow the prompts
- Live in 30 seconds!

---

## ⚙️ IMPORTANT: Before Going Live

### Update Contact Form (Required!)

1. Go to **web3forms.com**
2. Create free account
3. Get your access key
4. Open `index.html`
5. Find line ~1324:
```html
<input type="hidden" name="access_key" value="YOUR-KEY-HERE">
```
6. Replace with your key

**Current key:** `30c58dde-0154-43e9-b7a6-b4f0dd8c6142`  
**Emails go to:** principal@brickitdesigns.com

### Test Your Site

1. Open `index.html` in browser
2. Test contact form
3. Check all sections scroll
4. Verify images load

---

## 📞 Need Help?

- **Email:** principal@brickitdesigns.com
- **Full Documentation:** See README.md
- **Deployment Guide:** See DEPLOYMENT.md

---

## ✅ Next Steps

After your site is live:

1. **Custom Domain** (Optional)
   - Buy domain at namecheap.com or godaddy.com
   - Configure DNS (see DEPLOYMENT.md)

2. **Add Analytics** (Optional)
   - Google Analytics
   - See README.md for instructions

3. **Update Content**
   - Replace images
   - Update text
   - Add your client logos

---

**Congratulations! Your website is live!** 🎉

For detailed instructions, see README.md and DEPLOYMENT.md
