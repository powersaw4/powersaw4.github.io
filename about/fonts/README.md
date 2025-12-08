# Fonts Folder

This folder is reserved for local font files. Currently, all fonts are loaded from Google Fonts CDN for optimal performance and reliability.

---

## Current Font Setup

All fonts are currently loaded from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Monda:wght@400;700&family=Bebas+Neue&display=swap" rel="stylesheet">
```

### Fonts Used

1. **Comme** (Body Text)
   - Weights: 300, 400, 500, 600, 700
   - Source: Google Fonts
   - License: SIL Open Font License

2. **Monda** (Headings)
   - Weights: 400, 700
   - Source: Google Fonts
   - License: SIL Open Font License

3. **Space Grotesk** (Special Elements)
   - Weights: 400, 500, 600, 700
   - Source: Google Fonts
   - License: SIL Open Font License

4. **Inter** (Alternative)
   - Weights: 300, 400, 500, 600, 700
   - Source: Google Fonts
   - License: SIL Open Font License

5. **Bebas Neue** (Display)
   - Weight: Regular
   - Source: Google Fonts
   - License: SIL Open Font License

---

## Adding Local Fonts

If you want to host fonts locally instead of using Google Fonts CDN:

### Step 1: Download Fonts

**From Google Fonts:**
1. Go to [Google Fonts](https://fonts.google.com)
2. Search for each font
3. Select weights needed
4. Download font families
5. Extract .ttf or .woff2 files

**Format Recommendations:**
- **WOFF2:** Best compression, modern browsers
- **WOFF:** Backup for older browsers
- **TTF:** Fallback for very old browsers

### Step 2: Add Font Files to This Folder

```
fonts/
├── Comme-Regular.woff2
├── Comme-Bold.woff2
├── Monda-Regular.woff2
├── Monda-Bold.woff2
├── SpaceGrotesk-Regular.woff2
└── SpaceGrotesk-Bold.woff2
```

### Step 3: Update CSS

**Remove Google Fonts link from HTML:**
```html
<!-- Remove this line: -->
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

**Add @font-face rules in CSS:**
```css
@font-face {
    font-family: 'Comme';
    src: url('fonts/Comme-Regular.woff2') format('woff2'),
         url('fonts/Comme-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Comme';
    src: url('fonts/Comme-Bold.woff2') format('woff2'),
         url('fonts/Comme-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Monda';
    src: url('fonts/Monda-Regular.woff2') format('woff2'),
         url('fonts/Monda-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Monda';
    src: url('fonts/Monda-Bold.woff2') format('woff2'),
         url('fonts/Monda-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Space Grotesk';
    src: url('fonts/SpaceGrotesk-Regular.woff2') format('woff2'),
         url('fonts/SpaceGrotesk-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

---

## Font Format Comparison

| Format | Size | Browser Support | Recommendation |
|--------|------|----------------|----------------|
| WOFF2 | Smallest | Modern (95%+) | Use this |
| WOFF | Small | All browsers | Include as fallback |
| TTF/OTF | Larger | All browsers | Optional fallback |
| EOT | Larger | IE only | Not needed |

---

## Benefits of Google Fonts CDN (Current Setup)

✅ **Fast Loading:** Google's global CDN  
✅ **Already Cached:** Users may have fonts cached from other sites  
✅ **Auto-Updates:** Google handles font updates  
✅ **No Storage:** Doesn't count against your hosting  
✅ **Easy Management:** Simple link tag  

## Benefits of Local Fonts

✅ **Full Control:** No external dependencies  
✅ **Privacy:** No requests to Google  
✅ **Offline Work:** Fonts available locally  
✅ **Custom Fonts:** Can use any font, not just Google Fonts  
✅ **Reliability:** Not dependent on CDN uptime  

---

## Font Loading Optimization

### Current Implementation

The website already uses `font-display: swap` for optimal loading:

```css
@import url('https://fonts.googleapis.com/css2?family=Comme:wght@300;400;500;600;700&display=swap');
```

This means:
1. Text is visible immediately with system font
2. Custom font swaps in when loaded
3. No FOIT (Flash of Invisible Text)

### For Local Fonts

Always include `font-display: swap` in @font-face:

```css
@font-face {
    font-family: 'Comme';
    src: url('fonts/Comme-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;  /* Important! */
}
```

---

## Font Weight Reference

| Weight | Name | Usage |
|--------|------|-------|
| 300 | Light | Subtle text, captions |
| 400 | Regular | Body text, paragraphs |
| 500 | Medium | Emphasis, subheadings |
| 600 | Semi-Bold | Strong emphasis |
| 700 | Bold | Headings, important text |

---

## Subsetting Fonts

To reduce font file size, include only the characters you need:

### Using Google Fonts
```html
<!-- Only Latin characters -->
<link href="https://fonts.googleapis.com/css2?family=Comme:wght@400;700&subset=latin" rel="stylesheet">
```

### Using fonttools (for local fonts)
```bash
# Install fonttools
pip install fonttools brotli

# Subset font to Latin characters only
pyftsubset Comme-Regular.ttf \
    --output-file=Comme-Regular-subset.woff2 \
    --flavor=woff2 \
    --layout-features=* \
    --unicodes=U+0020-007F,U+00A0-00FF
```

---

## Font File Size Guidelines

**Per Font File:**
- **WOFF2:** 15-50 KB (well optimized)
- **WOFF:** 20-70 KB (acceptable)
- **TTF:** 50-150 KB (large, avoid if possible)

**Total Font Load:**
- Target: < 200 KB total
- Good: 200-400 KB
- Heavy: > 400 KB (consider reducing)

---

## Changing Fonts

To use different fonts:

### Option 1: Replace with Other Google Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select new fonts
3. Copy the `<link>` tag
4. Replace in HTML files (line ~8)
5. Update CSS font-family declarations

### Option 2: Use System Fonts (Fastest)

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 
                 "Segoe UI", Roboto, "Helvetica Neue", 
                 Arial, sans-serif;
}
```

### Option 3: Use Custom Purchased Fonts

1. Purchase font license (e.g., from MyFonts, FontShop)
2. Download font files
3. Add to this folder
4. Follow local font setup above
5. Ensure web license covers your usage

---

## Font Testing Tools

- **Google Fonts Tester:** [fonts.google.com](https://fonts.google.com)
- **FontSquirrel Generator:** [fontsquirrel.com/tools/webfont-generator](https://www.fontsquirrel.com/tools/webfont-generator)
- **Transfonter:** [transfonter.org](https://transfonter.org) - Convert fonts to web formats

---

## License Compliance

### Google Fonts (Current Setup)
- **License:** SIL Open Font License 1.1
- **Commercial Use:** ✅ Allowed
- **Modification:** ✅ Allowed
- **Attribution:** Not required (but appreciated)
- **Redistribution:** ✅ Allowed

### Custom Fonts
- Check license before using
- Many fonts require web license
- Free fonts may have usage restrictions
- Always keep license file with fonts

---

## Git Tracking

By default, this folder is ignored by Git (see `.gitignore`). To track font files:

```bash
# Add specific font
git add -f fonts/Comme-Regular.woff2

# Or update .gitignore to track all fonts
# Remove this line from .gitignore: fonts/*
```

---

## Performance Tips

1. **Load Only What You Need:**
   - Don't load all weights if you only use Regular and Bold
   - Remove unused font families

2. **Use Modern Formats:**
   - Prefer WOFF2 over other formats
   - 30% smaller than WOFF

3. **Preload Critical Fonts:**
   ```html
   <link rel="preload" href="fonts/Comme-Regular.woff2" as="font" type="font/woff2" crossorigin>
   ```

4. **Use font-display: swap:**
   - Already implemented in current setup
   - Prevents invisible text during load

5. **Consider Font Fallbacks:**
   ```css
   font-family: 'Comme', 'Helvetica Neue', Arial, sans-serif;
   ```

---

## Support

For questions about fonts:
- Check main README.md
- Review Google Fonts documentation
- Email: principal@brickitdesigns.com
