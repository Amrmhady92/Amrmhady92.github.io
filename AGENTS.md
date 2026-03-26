# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

Static single-page portfolio site for Amr Saleh. No build system, no package manager, no framework — pure HTML/CSS/JS. Open `index.html` directly in a browser to preview, or serve it with any static file server.

## Running Locally

```bash
# Python (if available)
python -m http.server 8080

# Node.js (if available)
npx serve .
```

Then visit `http://localhost:8080`.

## Architecture

All content lives in a single `index.html` with six anchor-linked sections: `#home`, `#about`, `#projects`, `#skills`, `#contact`, and a footer.

**`styles.css`** — All styling. Theme colours and shared values are defined as CSS custom properties in `:root` (e.g. `--primary-color`, `--secondary-color`, `--border-radius`). Always use these variables rather than hard-coding values. Responsive breakpoints are at `768px` and `480px` at the bottom of the file.

**`script.js`** — Vanilla JS only. Three concerns:
1. Smooth-scroll for `<a href="#...">` links.
2. Navbar shadow on scroll + active nav-link highlighting via `scroll` event.
3. Fade-in entrance animations and counter animations for `.project-card`, `.skill-category`, `.stat`, and `.contact-card` via `IntersectionObserver`.

**External dependency:** Font Awesome 6.4.0 loaded from `cdnjs.cloudflare.com` CDN — no local copy.

**`AmrSaleh.pdf`** — Resume file referenced/downloadable from the site.

## Key Conventions

- Placeholder content (name, email, project links) in `index.html` still uses generic text like "Your Name" and `your.email@example.com` — update these when personalising.
- The `.hero-animation` div and `.floating-box` are set to `display: none` in CSS; they exist as an optional decorative element.
- A hamburger mobile-menu implementation is scaffolded but commented out in `script.js` — uncomment and add the corresponding HTML if a mobile menu is needed.
