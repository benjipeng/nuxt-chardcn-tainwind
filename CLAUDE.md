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
/assets/css
  tailwind.css        # Color palette (CSS variables)
```

## Project Status

**IMPORTANT: Always check `ROADMAP.md` before starting new work.**

**ROADMAP.md** tracks project progress with checkbox convention:
- `[ ]` = Todo
- `[-]` = In Progress
- `[x]` = Completed

**Current Status:**
- Phase 1 (Foundation & Landing Page) ✅ Complete
- Phase 2 (Core Content Pages) - Ready to start

When completing tasks, update checkboxes: `[ ]` → `[-]` → `[x]`

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

## Aviation Data

**Featured Disasters:**
- Tenerife (1977) - 583 deaths
- JAL 123 (1985) - 520 deaths
- Charkhi Dadri (1996) - 349 deaths
- Ethiopian 302 (2019) - 157 deaths
- Air France 447 (2009) - 228 deaths
- AA 191 (1979) - 273 deaths

**Categories:**
- Human Error (~166) - `aviation-amber`
- Mechanical (~43) - `alert-red`
- Weather (~23) - `radar-cyan`
- Other (~18) - `nav-magenta`

**Statistics:**
- 207+ major accidents (100+ fatalities)
- 400× safer than 1959
- 0.1 per million flights (2024)
- 0 CFIT incidents (2024)
