# Mayday Archive - Aviation Disaster Educational Platform

Educational webapp documenting aviation's most significant accidents and safety improvements.

**Tagline:** "Insights from aviation's most significant accidents"

## Tech Stack

- **Framework**: Nuxt 4.2.1 (Vue 3, SSG)
- **Styling**: Tailwind CSS v3.4.17 (NEVER upgrade to v4 - shadcn incompatibility)
- **UI**: shadcn-nuxt v0.10.4
- **Fonts**: B612 (display), Work Sans (body), B612 Mono (mono)
- **Icons**: @nuxt/icon (Lucide)
- **Animations**: @oku-ui/motion

## Project Structure

```
/components
  /sections/          # Hero, FeaturedDisasters, StatsDashboard, BrowseCategories
  Navbar.vue          # Three-state scroll navbar
  Footer.vue
  HamburgerMenu.vue   # Overlay menu
  DisasterCard.vue    # Reusable card
/composables
  useNavbarScroll.ts  # Scroll detection
  useDarkMode.ts      # Theme toggle
/pages
  index.vue           # Landing page
  browse.vue          # Browse/filter disasters
  timeline.vue        # Timeline visualization
  disaster/[slug].vue # Disaster detail pages
/content
  /disasters          # Markdown files (one per disaster)
/public/images
  /disasters          # Disaster images organized by slug
/assets/css
  tailwind.css        # Color palette (CSS variables)
```

## Content Management

**Content is managed via Markdown files** using @nuxt/content module.

### Adding a Disaster

1. Create `/content/disasters/[slug].md` (slug = `tenerife-1977`, `jal123-1985`, etc.)
2. Add frontmatter (YAML) at top with required fields
3. Write article content in markdown below frontmatter
4. Add images to `/public/images/disasters/[slug]/`

### Frontmatter Structure

**All fields are required unless marked optional.**

```yaml
---
slug: tenerife-1977
title: Tenerife Airport Disaster
date: 1977-03-27
fatalities: 583
aircraft: Boeing 747
categories:
  - Human Error
location:
  city: Tenerife
  country: Spain
images:
  hero: /images/disasters/tenerife-1977/hero.jpg
  thumbnail: /images/disasters/tenerife-1977/thumb.jpg
summary: Two Boeing 747s collided on a foggy runway, killing 583 in aviation's deadliest accident.
---

# Article content starts here...
```

### Field Reference

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `slug` | string | `tenerife-1977` | Unique identifier (lowercase, hyphenated) |
| `title` | string | `Tenerife Airport Disaster` | Display name |
| `date` | ISO date | `1977-03-27` | YYYY-MM-DD format |
| `fatalities` | number | `583` | Do not quote numbers |
| `aircraft` | string | `Boeing 747` | Aircraft type |
| `categories` | array | See below | 1-2 values max |
| `location.city` | string | `Tenerife` | City or location |
| `location.country` | string | `Spain` | Country |
| `images.hero` | path | `/images/disasters/.../hero.jpg` | Detail page header |
| `images.thumbnail` | path | `/images/disasters/.../thumb.jpg` | Browse/timeline cards |
| `summary` | string | `Brief description...` | 1-2 sentences for cards |

### Category Values

Use **exactly** these values (1-2 per disaster):
- `Human Error`
- `Mechanical`
- `Weather`
- `Other`

### How It Works

- **Browse/Timeline pages** automatically query ALL .md files in `/content/disasters/`
- **Detail pages** automatically generated for each .md file at `/disaster/[slug]`
- **No code changes** needed when adding new disasters
- **SSG** generates static HTML at build time

## Project Status

**ROADMAP.md** is the single source of truth for project progress.

**Workflow:**

1. **Before starting ANY new work**: Read ROADMAP.md to understand current phase and next tasks
2. **When starting a task**: Update checkbox from `[ ]` to `[-]` in ROADMAP.md
3. **When completing a task**: Update checkbox from `[-]` to `[x]` in ROADMAP.md
4. **After completing a task**: Check ROADMAP.md for the next task

**Checkbox Convention:**
- `[ ]` = Not started
- `[-]` = In progress (you are currently working on this)
- `[x]` = Complete

**Current Status:**
- Phase 1 (Foundation & Landing Page) ✅ Complete
- Phase 2 (Core Content Pages) - Ready to start

**IMPORTANT:** Update ROADMAP.md as you work, not at the end of the session.

## Color System - CRITICAL

**ALL components MUST use semantic tokens from `assets/css/tailwind.css` and `tailwind.config.js`**

### Tokens

**Backgrounds:**
- `bg-primary` `bg-secondary` `bg-tertiary` `bg-overlay` `bg-backdrop`

**Text:**
- `text-primary` (AAA) `text-secondary` (AAA) `text-tertiary` (AA) `text-disabled`

**Aviation Colors:**
- `cockpit-green` / `cockpit-green-text` - Primary (HUD green)
- `aviation-amber` / `aviation-amber-text` - Warnings
- `alert-red` / `alert-red-text` - Alerts, fatalities
- `radar-cyan` - Data, technical
- `nav-magenta` - Secondary accents

**Borders:**
- `border-subtle` `border-default` `border-strong`

**Shadcn:**
- `primary` `secondary` `destructive` `muted` `accent`

### Rules

**DO:**
- ✅ `bg-primary` `text-cockpit-green-text`
- ✅ Use `-text` variants for text elements (higher contrast)
- ✅ `bg-cockpit-green/10` `border-alert-red/30`

**NEVER:**
- ❌ `text-white` `bg-black` `bg-gray-800`
- ❌ Tailwind gray scale: `text-gray-600` `bg-gray-100`
- ❌ Dynamic classes: `` `bg-${color}/10` `` (won't compile - use switch statements)
- ❌ Hex/RGB values in components

## Navbar Architecture

Three-state responsive navbar (useNavbarScroll composable):

1. **Full** (0-99px): `h-20`, full branding, all links
2. **Compact** (100-399px): `h-16`, smaller logo, all links
3. **Minimal** (400px+): `h-14`, logo + hamburger only

**Mobile:** Always shows hamburger
**Desktop:** Shows hamburger only in minimal state

## Conventions

**Fonts:**
- `font-display` (B612) - Headings
- `font-body` (Work Sans) - Body text
- `font-mono` (B612 Mono) - Technical/data

**Responsive:**
- Mobile-first, breakpoints: `md:` (768px) `lg:` (1024px)
- `container mx-auto` for layouts

**Animations:**
- 200-300ms transitions
- `hover:transform hover:-translate-y-1` `hover:scale-105`

**Accessibility:**
- All interactive elements need `aria-label`
- WCAG AA minimum (AAA preferred)

## Commands

```bash
npm run dev        # Dev server
npm run build      # Production build (SSG)
npm run generate   # Generate static site
```

## Git

**Branch:** `claude/project-setup-foundation-01LqUAessRVCxJbtb9iSDth2`

Always push to `claude/*` branches.

## Critical Rules

1. NEVER upgrade Tailwind to v4
2. NEVER use hard-coded colors
3. NEVER use dynamic Tailwind classes (use helper functions)
4. NEVER nest lifecycle hooks
5. ALWAYS validate WCAG contrast
6. ALWAYS use `process.client` for browser-only code
