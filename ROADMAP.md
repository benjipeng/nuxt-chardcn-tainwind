# Mayday Archive - Project Roadmap

**Checkbox Convention:**
- `[ ]` = Todo
- `[-]` = In Progress
- `[x]` = Completed

---

## Phase 1: Foundation & Landing Page ✅

### Infrastructure
- [x] Nuxt 4.2.1 setup with SSG
- [x] Tailwind CSS v3.4.17 + shadcn-nuxt v0.10.4
- [x] Font system (B612, Work Sans, B612 Mono)
- [x] Icon system (@nuxt/icon with Lucide)
- [x] WCAG AA/AAA aviation color palette (dual-theme)

### Navigation
- [x] Three-state responsive navbar (Full/Compact/Minimal)
- [x] HamburgerMenu overlay component
- [x] Dark mode toggle
- [x] Footer with navigation links

### Landing Page
- [x] Hero section
- [x] Featured Disasters grid (6 disasters)
- [x] Statistics Dashboard section
- [x] Browse Categories section
- [x] DisasterCard reusable component

---

## Phase 2: Core Content Pages (In Progress ~60%)

### Content Management
- [x] @nuxt/content 3.8.2 with markdown files
- [x] 6 disaster markdown files created
- [x] Tailwind Typography plugin
- [x] Content structure (slug, title, date, fatalities, aircraft, categories, location, images, summary)

### Disaster Detail Pages
- [x] Page layout with hero image + gradient overlay
- [x] Accident overview (date, location, aircraft, fatalities)
- [x] Markdown content rendering with prose styling
- [x] SEO meta tags + 404 handling
- [ ] Timeline of events component
- [ ] Investigation findings section
- [ ] Safety improvements section
- [ ] Related disasters

### Browse Page
- [x] Layout with search + filters
- [x] Category filter dropdown
- [x] Sort (fatalities, date)
- [x] Search (title, aircraft, location)
- [x] Responsive grid + "no results" state
- [ ] Decade/year filter
- [ ] Pagination

### Timeline Page
- [x] Chronological layout with decade markers
- [x] Scrollable timeline with disaster cards
- [x] Responsive mobile/desktop layout
- [ ] Filters (category, decade)

### Recent Fixes
- [x] Fixed navbar duplication bug (browse/timeline pages)
- [x] Made featured cards clickable
- [x] Removed unnecessary React example files

---

## Phase 3: Content Expansion

- [ ] Complete detailed narratives for 6 featured disasters
- [ ] Add top 50 deadliest disasters
- [ ] Add remaining 150+ disasters (basic data)

---

## Phase 4: Informational Pages

- [ ] About page
- [ ] Methodology page
- [ ] Aviation Glossary
- [ ] Sources & Credits

---

## Phase 5: Optimization & Launch

### Performance
- [ ] Bundle optimization
- [ ] Lazy loading
- [ ] Caching strategy

### SEO
- [ ] Dynamic OG images
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml

### Accessibility
- [ ] WCAG AA/AAA audit
- [ ] Keyboard navigation testing

---

**Current Status:** Phase 2 (60% complete) | Browse, Timeline, and Detail pages functional with 6 disasters
