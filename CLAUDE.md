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
| `Customer Support.html` | `Customer-Support-kor.html` |
| `privacy.html` | `privacy-kor.html` |
| `terms.html` | `terms-kor.html` |
| `sitemap.html` | `sitemap-kor.html` |

Language switching is handled by `js/language.js`, which maps page names to their counterparts and stores the user's preference in `localStorage`. English filenames with spaces (e.g. `about us.html`) must be referenced as `%20`-encoded URLs in HTML `href` attributes, but the `languageMap` object in `language.js` uses literal spaces as keys (e.g. `'about us.html'`).

## Architecture

**All pages share the same template structure:**
1. Fixed header with logo, nav (4 items), and ENG/KOR language switcher
2. Hero section (headline with inline product thumbnails on homepage; catalogue-cover layout on Products; plain centered text hero such as `.about-hero` on other pages — all offset by `margin-top: var(--header-h)`)
3. Page-specific content (the Community pages were removed; nav has 4 items)
4. Consistent footer

**CSS (`css/style.css`):** Uses CSS custom properties for the design system. Responsive breakpoints at 1024px, 768px, and 480px. Hamburger menu activates below 768px. **Page-specific styles are in an inline `<style>` block inside each HTML file's `<head>`, not in `style.css`** — except the homepage (`index.html` / `index-kor.html`), which has no inline `<style>`; its styles (hero, news cards, why cards) live in `style.css`.

**JS (`js/language.js`):** Language switcher only. All other interactivity (scroll effects, Intersection Observer animations, mobile menu toggle) is written inline in `<script>` tags at the bottom of each HTML file.

**JS (`js/ie.js`):** Detects Internet Explorer and shows an unsupported-browser notice.

**No shared components:** Header, nav, and footer HTML is duplicated in every page. Changes to shared UI must be applied to all 16 HTML files.

## Design System (CSS Variables)

Based on the **2026 printed catalogue** (amber brand on white): Noto Sans KR body + Montserrat for English display/labels (both from Google Fonts via `@import` at the top of `style.css`), flat amber-outlined boxes, almost no shadows.

```css
--brand #F3A32B / --brand-ink #E8951C / --brand-dark / --brand-soft #FCEFD9 / --alert
--paper / --surface / --surface-2 / --card   /* white, warm off-whites */
--ink / --ink-2 / --ink-3 / --ink-dark       /* text: primary / body / caption / dark chip */
--line                                       /* hairlines */
--radius-sm … --radius-xl, --radius-pill     /* 4 / 8 / 14 / 14 / 999px */
--font-sans, --font-display (--font-mono aliases it), --tracking-display, --ease, --header-h
```

Legacy tokens (`--primary-color`, `--text-dark`, `--bg-light`, `--shadow-*` …) are remapped onto this palette so older inline page styles follow it. Use the new tokens in new code.

**Catalogue components in `style.css`** (reuse them instead of new one-offs): `.cat-head` (amber bar + spaced uppercase EN title, KR subtitle on the right), `.cat-lead`/`.cat-chip`, `.cat-sub` (amber-dot subheading; wrap long text in `<span>`), `.cat-note`, `.cert-strip`, `.prod-grid`/`.prod-card` + `.model-tag` (product cards with G2B number and price), `.swatch-grid`, `.feat-rows`, `.cat-box`, `.photo-card`.

**Products page is catalogue data.** The S1/S2 model list (size, G2B number, price, chair colour), colour swatches, function/performance tests and antibacterial results in `Products.html` / `Products-kor.html` mirror the catalogue — keep both languages and the catalogue in sync when any value changes.

**`DESIGN.md` and `DOC/03-design-system.md` are outdated** (they describe the original blue/purple design). Trust `css/style.css`.

## CSS Specificity Gotcha

The global rule `section .inner h1` (specificity 0,1,2) overrides a bare class like `.hero-title` (0,1,0). The homepage uses a higher-specificity selector in `style.css`:

```css
.hero-section .hero-inner h1.hero-title { /* ... */ }
```

Sub-page heroes do the same in their inline `<style>` (e.g. `section.products-intro .inner h1`). If you add new `h1` elements inside sections, scope them the same way.

## Scroll-Reveal Pattern

`.news-card` and `.why-card` are intentionally set to `opacity: 0; transform: translateY(24px)` in CSS. They become visible only when an `IntersectionObserver` (inline script at the bottom of the relevant HTML files) adds the `.fade-in` class. If cards appear invisible, verify the inline JS observer is present on that page.

## Policy / Sitemap Pages

`privacy*.html`, `terms*.html`, `sitemap*.html` were generated from the Customer Support page template (same header/footer). The privacy policy and terms are **drafts**: items the company must fill in (privacy officer name, effective date, retention period, outsourcing partners) are wrapped in `<mark class="todo">` and render highlighted — fill them and remove the `<mark>` before publishing. `sitemap.xml` / `robots.txt` at the repo root list the public URLs for search engines; update `sitemap.xml` when pages are added or removed.

## Deployment

The site is hosted on **GitHub Pages** at `songininc.com`. The `CNAME` file at the repo root maps the custom domain. Pushing to the `main` branch deploys automatically.

## Assets

- `catalogue.pdf` (repo root) — linked from "Download Catalogue" buttons on `Products.html` / `Products-kor.html`
- `img/` — all images; `visual.mp4` is no longer used (the homepage video was removed)
- `img/catalog/` — web-optimised images from the 2026 catalogue: `product/` (S1/S2 models, `thumb-*` crops for the home hero), `color/` (swatches), `logo/` (certification marks), `func/` (feature/test images), `site/` (delivery photos used in Gallery)
- `img/SI/` — older site photos (`JANG/`, `chung buk/` are no longer shown in the gallery)
- External CDNs: Font Awesome 6.4.0 (`<link>` in every page), Google Fonts Noto Sans KR + Montserrat (`@import` in `style.css`)

## Extended Documentation

`DOC/` contains detailed reference docs (Korean):

| File | Content |
|------|---------|
| `DOC/01-overview.md` | Project overview, tech stack, directory structure |
| `DOC/02-pages.md` | Page inventory, section breakdown, content list |
| `DOC/03-design-system.md` | CSS variables, typography, components (**outdated** — pre-catalogue design) |
| `DOC/04-javascript.md` | JS file structure, language switcher, page-by-page interactions |
| `DOC/05-assets.md` | Image/video inventory, file sizes, optimization recommendations |
| `DOC/06-dev-status.md` | Development status, known issues, and to-do list |

## Known Issues

These are pre-existing — do not introduce workarounds that mask them:

- **Customer Support has no contact form**: the pages contain only FAQ and "Get in Touch" contact-info sections. Any new form would need Formspree or similar (GitHub Pages has no backend).- **`js/ie.js` not loaded**: The file exists but is not referenced by any page. Do not rely on it for IE detection.
- **Language preference is only read on the English homepage**: `language.js` saves `'preferredLanguage'` on click. An inline script at the top of `index.html` redirects external first-time visitors to `index-kor.html` (Korean is the default landing language) unless the saved value is `'eng'` or the visitor came from an internal link (same-origin referrer). No other page reads the saved value.
- **`news2.png` is 6.5 MB**: Causes slow mobile loads. Flag if touching image-related code.
