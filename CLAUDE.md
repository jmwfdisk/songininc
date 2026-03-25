# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **송인산업 (SONGIN INDUSTRY)**, a South Korean office and school furniture manufacturer. This is a **pure static site** — no build tools, no npm, no frameworks.

## Running the Site

Open any `.html` file directly in a browser, or serve with any HTTP server:

```bash
# Python
python3 -m http.server 8000

# Node (if installed)
npx serve .
```

No build, lint, or test commands exist.

## Bilingual Page Structure

Every page exists in two language variants. When editing content, **always update both files**:

| English | Korean |
|---------|--------|
| `index.html` | `index-kor.html` |
| `about us.html` | `about-us-kor.html` |
| `Products.html` | `Products-kor.html` |
| `Gallery.html` | `Gallery-kor.html` |
| `Community.html` | `Community-kor.html` |
| `Customer Support.html` | `Customer-Support-kor.html` |

Language switching is handled by `js/language.js`, which maps page names to their counterparts and stores the user's preference in `localStorage`. English filenames with spaces (e.g. `about us.html`) must be referenced as `%20`-encoded URLs in links and in the `languageMap` object.

## Architecture

**All pages share the same template structure:**
1. Fixed header with logo, nav (5 items), and ENG/KOR language switcher
2. Hero section (video background on homepage, gradient on others)
3. Page-specific content
4. Consistent footer

**CSS (`css/style.css`):** Uses CSS custom properties for the design system. Responsive breakpoints at 1024px, 768px, and 480px. Hamburger menu activates below 768px.

**JS (`js/language.js`):** Language switcher only. All other interactivity (scroll effects, Intersection Observer animations, mobile menu toggle) is written inline in `<script>` tags at the bottom of each HTML file.

**JS (`js/ie.js`):** Detects Internet Explorer and shows an unsupported-browser notice.

**No shared components:** Header, nav, and footer HTML is duplicated in every page. Changes to shared UI must be applied to all 12 HTML files.

## Key Design Tokens (CSS Variables)

```css
--primary-color:   #2563eb   /* blue — primary actions, links, icons */
--secondary-color: #7c3aed   /* purple — gradient end, accent numbers */
--accent-color:    #f59e0b   /* amber — hero title <em> highlight */
--text-dark:       #1f2937
--text-light:      #6b7280
--bg-light:        #f9fafb
--bg-white:        #ffffff
--border-color:    #e5e7eb
--shadow-sm / --shadow-md / --shadow-lg / --shadow-xl  /* elevation scale */
```

For the full colour system, gradients, typography scale, and section-by-section layout specs, see **`DESIGN.md`**.

## CSS Specificity Gotcha

The global rule `section .inner h1` (specificity 0,1,2) overrides the homepage `.hero-title` class (0,1,0). The fix is already in `style.css` as a higher-specificity override:

```css
.hero-section .hero-inner h1.hero-title { /* resets font, margin, padding, position */ }
.hero-section .hero-inner h1.hero-title::after { display: none; }
```

If you add new `h1` elements inside sections, check that global `section .inner h1` styles don't conflict.

## Scroll-Reveal Pattern

`.news-card` and `.why-card` are intentionally set to `opacity: 0; transform: translateY(24px)` in CSS. They become visible only when an `IntersectionObserver` (inline script at the bottom of the relevant HTML files) adds the `.fade-in` class. If cards appear invisible, verify the inline JS observer is present on that page.

## Assets

- `img/` — all images and `visual.mp4` (hero video)
- `img/SI/` — factory/location images (subfolders: `JANG/`, `chung buk/`)
- `backup/` — backup copies of all HTML/CSS/JS files (not served; do not edit)
- External CDNs: Font Awesome 6.4.0, Swiper 8.0

## Extended Documentation

`DOC/` contains detailed reference docs (Korean):

| File | Content |
|------|---------|
| `DOC/01-overview.md` | Project overview, tech stack, directory structure |
| `DOC/02-pages.md` | Page inventory, section breakdown, content list |
| `DOC/03-design-system.md` | CSS variables, typography, components, responsive system |
| `DOC/04-javascript.md` | JS file structure, language switcher, page-by-page interactions |
| `DOC/05-assets.md` | Image/video inventory, file sizes, optimization recommendations |
| `DOC/06-dev-status.md` | Development status, known issues, and to-do list |

## Known Issues

These are pre-existing — do not introduce workarounds that mask them:

- **Customer Support form** (`Customer Support.html`, `Customer-Support-kor.html`): `action` attribute is unset; form submissions go nowhere. Needs Formspree or server-side integration.
- **`js/ie.js` not loaded**: The file exists but is not referenced by any page. Do not rely on it for IE detection.
- **`localStorage` language preference not auto-applied**: `language.js` saves `'preferredLanguage'` to `localStorage` on click, but never reads it on page load — the saved value is currently unused.
- **`news2.png` is 6.5 MB**: Causes slow mobile loads. Flag if touching image-related code.
- **`Community.html` scroll-reveal uses inline JS styles** (sets `opacity`/`transform` directly), while `index.html` uses the CSS `.fade-in` class pattern. These are intentionally different; do not unify without checking both pages.
