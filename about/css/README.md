# CSS Folder

This folder is reserved for external CSS files. Currently, all CSS is embedded directly in the HTML files for optimal simplicity and deployment ease.

---

## Current CSS Setup

All CSS is embedded in `<style>` tags within HTML files:

```html
<head>
    <style>
        /* All CSS code here */
    </style>
</head>
```

### Why Embedded CSS?

✅ **Single File Deployment:** No external dependencies  
✅ **Faster Initial Load:** No additional HTTP requests  
✅ **Easier Maintenance:** Everything in one place  
✅ **Simple Deployment:** Just upload HTML files  
✅ **No Build Process:** No compilation needed  

---

## Extracting CSS to External File

If you prefer to use external CSS files for better organization:

### Step 1: Create style.css

Create `css/style.css` and copy all CSS from the `<style>` tag:

```css
/* css/style.css */

/* Copy everything from <style> tags in HTML */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-primary: hsl(11, 49%, 41%);
    /* ... rest of CSS variables ... */
}

/* ... all other CSS rules ... */
```

### Step 2: Link External CSS

Remove `<style>` tags from HTML and add:

```html
<head>
    <!-- Other head elements -->
    <link rel="stylesheet" href="css/style.css">
</head>
```

### Step 3: Update Both Files

If using external CSS, remember to link it in:
- index.html
- about.html

---

## CSS File Structure (If Using External Files)

### Recommended Organization

```
css/
├── style.css           # Main stylesheet
├── variables.css       # CSS custom properties
├── reset.css          # CSS reset/normalize
├── typography.css     # Font styles
├── layout.css         # Grid/flexbox layouts
├── components.css     # Reusable components
├── navigation.css     # Navigation styles
├── forms.css          # Form styles
├── responsive.css     # Media queries
└── animations.css     # Transitions/animations
```

### Import Structure in Main CSS

```css
/* style.css */
@import url('variables.css');
@import url('reset.css');
@import url('typography.css');
@import url('layout.css');
@import url('components.css');
@import url('navigation.css');
@import url('forms.css');
@import url('animations.css');
@import url('responsive.css');
```

---

## CSS Architecture Options

### Option 1: Single File (Current - Embedded)
**Best for:** Simple sites, quick deployment

```
HTML file contains all CSS in <style> tags
```

**Pros:**
- Simple
- No external dependencies
- Fast initial load

**Cons:**
- Large HTML files
- CSS not cached separately
- Harder to reuse across pages

### Option 2: Single External File
**Best for:** Small to medium sites

```
index.html → css/style.css
about.html → css/style.css
```

**Pros:**
- CSS cached by browser
- Reused across pages
- Cleaner HTML

**Cons:**
- One extra HTTP request
- No modular organization

### Option 3: Modular Files
**Best for:** Large sites, teams

```
css/
├── base/
│   ├── reset.css
│   ├── variables.css
│   └── typography.css
├── components/
│   ├── buttons.css
│   ├── forms.css
│   └── cards.css
├── layout/
│   ├── header.css
│   ├── footer.css
│   └── grid.css
└── pages/
    ├── home.css
    └── about.css
```

**Pros:**
- Excellent organization
- Easy to maintain
- Team-friendly

**Cons:**
- Multiple HTTP requests
- Needs build process for production
- More complex setup

---

## Converting Current Setup

### Extract Variables

Create `css/variables.css`:

```css
:root {
    /* Colors */
    --color-primary: hsl(11, 49%, 41%);
    --color-primary-foreground: hsl(30, 20%, 96%);
    --color-background: hsl(35, 15%, 96%);
    --color-foreground: hsl(15, 10%, 15%);
    --color-secondary: hsl(30, 15%, 89%);
    --color-muted-foreground: hsl(15, 5%, 40%);
    --color-border: hsl(30, 10%, 82%);
    --color-dark-bg: hsl(0, 0%, 8%);
    --color-beige: hsl(30, 30%, 82%);

    /* Typography */
    --font-body: 'Comme', sans-serif;
    --font-heading: 'Monda', sans-serif;
    --font-special: 'Space Grotesk', sans-serif;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;

    /* Border Radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 1.5rem;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.4s ease;
}
```

### Extract Components

Create `css/components.css`:

```css
/* Navigation */
.nav-box { /* ... */ }
.hamburger { /* ... */ }
.menu-overlay { /* ... */ }

/* Buttons */
.submit-btn { /* ... */ }
.submit-btn:hover { /* ... */ }

/* Forms */
.form-group { /* ... */ }
.form-group input { /* ... */ }
.form-group textarea { /* ... */ }

/* Cards */
.philosophy-card { /* ... */ }
.value-item { /* ... */ }
```

---

## CSS Optimization

### Minification

To reduce file size, minify CSS:

**Online Tools:**
- [CSSMinifier.com](https://cssminifier.com)
- [MinifyCSS.com](https://www.minifycss.com)

**Command Line:**
```bash
# Using npm package
npx cssnano style.css style.min.css

# Using online curl
curl -X POST -s --data-urlencode "input=$(cat style.css)" https://cssminifier.com/raw > style.min.css
```

### Purge Unused CSS

Remove unused CSS rules:

```bash
# Using PurgeCSS
npx purgecss --css style.css --content index.html about.html --output style.purged.css
```

### Combine & Compress

For production:

1. Combine all CSS files
2. Minify combined CSS
3. Use minified version in production
4. Keep unminified for development

---

## CSS Naming Conventions

### BEM (Block Element Modifier)

```css
/* Block */
.nav { }

/* Element */
.nav__item { }
.nav__link { }

/* Modifier */
.nav--fixed { }
.nav__link--active { }
```

### Current Convention (Used in Website)

```css
/* Semantic class names */
.team-section { }
.team-container { }
.team-heading { }
.team-row { }
.team-text { }
```

---

## CSS Custom Properties (Variables)

Already used throughout the CSS:

```css
/* Define */
:root {
    --color-primary: hsl(11, 49%, 41%);
}

/* Use */
.button {
    background: var(--color-primary);
}

/* With Fallback */
.button {
    background: var(--color-primary, #b54431);
}
```

---

## Responsive Design

### Mobile-First Approach (Current Setup)

```css
/* Base styles for mobile */
.container {
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 980px) {
    .container {
        padding: 3rem;
    }
}
```

### Breakpoints Used

```css
/* Mobile: Default (no media query) */

/* Tablet */
@media (max-width: 980px) { }

/* Mobile */
@media (max-width: 768px) { }
```

---

## Modern CSS Features Used

### Flexbox
```css
.team-row {
    display: flex;
    align-items: stretch;
    gap: 3rem;
}
```

### CSS Grid
```css
.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}
```

### Custom Properties
```css
:root {
    --color-primary: hsl(11, 49%, 41%);
}
```

### Modern Units
```css
.heading {
    font-size: clamp(1.5rem, 2.5vw, 2.25rem);
}
```

---

## Browser Compatibility

All CSS features used are supported in:
- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

Coverage: 97%+ of global users

---

## CSS Linting

To ensure CSS quality:

**StyleLint** (Recommended)
```bash
# Install
npm install -g stylelint stylelint-config-standard

# Create config
echo '{"extends": "stylelint-config-standard"}' > .stylelintrc

# Lint
stylelint "css/**/*.css"
```

---

## Git Tracking

By default, this folder is ignored by Git (see `.gitignore`). To track CSS files:

```bash
# Add specific file
git add -f css/style.css

# Or update .gitignore to track all CSS
# Remove this line from .gitignore: css/*
```

---

## Performance Tips

1. **Minimize HTTP Requests:**
   - Current setup (embedded) = 0 extra requests ✅
   - External CSS = 1 extra request per file

2. **Use CSS Variables:**
   - Already implemented
   - Makes theme changes easy

3. **Avoid @import:**
   - Slows down loading
   - Use <link> or embedded CSS instead

4. **Critical CSS:**
   - Inline critical styles
   - Load rest asynchronously
   - (Current embedded approach already optimal)

5. **Compress:**
   - Minify for production
   - Remove comments
   - Combine files

---

## Support

For CSS questions:
- Check main README.md
- Review MDN CSS documentation
- Email: principal@brickitdesigns.com
