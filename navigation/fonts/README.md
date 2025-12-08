# Fonts Folder

This folder is for custom font files.

## Current Setup

The navigation menu uses **Google Fonts** loaded via CDN:
- **Primary Font**: Inter (weights: 300, 400, 500, 600, 700)
- **Loaded from**: https://fonts.googleapis.com

## Benefits of Google Fonts CDN

- ✅ Fast loading
- ✅ Cached across sites
- ✅ No download needed
- ✅ Always up-to-date
- ✅ Multiple weights included

## To Use Custom Fonts (Optional)

If you want to host fonts locally instead:

### 1. Download Font Files
- Get `.woff2` and `.woff` formats
- Place in this folder

### 2. Update CSS
Add to `css/style.css`:

```css
@font-face {
    font-family: 'Your Font Name';
    src: url('../fonts/your-font.woff2') format('woff2'),
         url('../fonts/your-font.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

### 3. Update Font Variable
In `css/style.css` (line 17):

```css
:root {
    --font-family: 'Your Font Name', -apple-system, sans-serif;
}
```

### 4. Remove Google Fonts
Remove this line from `index.html` (line 11):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter..." rel="stylesheet">
```

## Recommended Font Formats

- `.woff2` - Best compression, modern browsers
- `.woff` - Fallback for older browsers
- `.ttf` - Not recommended (large file size)

## File Naming Convention

```
inter-regular.woff2
inter-medium.woff2
inter-bold.woff2
```

## Font Optimization

- Use only needed font weights
- Subset fonts to required characters
- Use `font-display: swap` for faster loading
