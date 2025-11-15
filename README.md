# Mayday Archive

![Deploy Status](https://github.com/benjipeng/nuxt-chardcn-tainwind/actions/workflows/deploy.yml/badge.svg)

> **Insights from aviation's most significant accidents**

Educational webapp documenting major aviation disasters (100+ fatalities) and the safety improvements they inspired. Explore 207+ accidents, understand their causes, and learn how aviation became 400× safer since 1959.

**[View Live Demo →](https://benjipeng.github.io/nuxt-chardcn-tainwind/)**

## Tech Stack

- **Framework**: Nuxt 4.2.1 (Vue 3, SSG)
- **Styling**: Tailwind CSS v3.4.17
- **UI**: shadcn-nuxt v0.10.4
- **Fonts**: B612, Work Sans, B612 Mono
- **Icons**: @nuxt/icon (Lucide)
- **Deployment**: GitHub Pages (Static)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Generate static site
npm run generate

# Preview static build
npm run preview:static
```

## Project Structure

```
/components
  /sections/          # Hero, FeaturedDisasters, StatsDashboard, etc.
  Navbar.vue          # Three-state scroll navbar
  Footer.vue
  DisasterCard.vue
/composables
  useNavbarScroll.ts  # Scroll detection
/pages
  index.vue           # Landing page
/assets/css
  tailwind.css        # Aviation-themed color palette
```

## Development

See [CLAUDE.md](./CLAUDE.md) for detailed project guidelines and [ROADMAP.md](./ROADMAP.md) for current progress.

**Color System**: All components use semantic tokens from `tailwind.css`:
- `cockpit-green` - Primary (HUD green)
- `aviation-amber` - Warnings
- `alert-red` - Alerts/fatalities
- `radar-cyan` - Data/technical

**Never use**: hard-coded colors, Tailwind gray scale, or dynamic class names.

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

The `.nojekyll` file ensures Nuxt's `_nuxt/` assets are properly served.

## License

Educational purposes only. © 2025
