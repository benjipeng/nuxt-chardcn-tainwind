# Mayday Archive - Project Roadmap

**Checkbox Convention:**
- `[ ]` = Todo
- `[-]` = In Progress 🏗️ YYYY/MM/DD
- `[x]` = Completed ✅ YYYY/MM/DD

---

## Phase 1: Foundation & Landing Page ✅

### Infrastructure
- [x] ✅ 2025/01/15 - Nuxt 4.2.1 setup with SSG
- [x] ✅ 2025/01/15 - Tailwind CSS v3.4.17 configuration
- [x] ✅ 2025/01/15 - shadcn-nuxt v0.10.4 integration
- [x] ✅ 2025/01/15 - Font system (B612, Work Sans, B612 Mono)
- [x] ✅ 2025/01/15 - Icon system (@nuxt/icon with Lucide)
- [x] ✅ 2025/01/15 - Animation library (@oku-ui/motion)

### Color System
- [x] ✅ 2025/01/15 - WCAG AA/AAA validated aviation color palette
- [x] ✅ 2025/01/15 - Dual-theme (light/dark) implementation
- [x] ✅ 2025/01/15 - Semantic color tokens in tailwind.css
- [x] ✅ 2025/01/15 - Color palette documentation
- [x] ✅ 2025/01/15 - Hard-coded color audit and fixes

### Navigation
- [x] ✅ 2025/01/15 - Three-state responsive navbar (Full/Compact/Minimal)
- [x] ✅ 2025/01/15 - useNavbarScroll composable with debouncing
- [x] ✅ 2025/01/15 - HamburgerMenu overlay component
- [x] ✅ 2025/01/15 - Dark mode toggle (useDarkMode composable)
- [x] ✅ 2025/01/15 - Footer with navigation links

### Landing Page Components
- [x] ✅ 2025/01/15 - Hero section with grid pattern background
- [x] ✅ 2025/01/15 - Featured Disasters grid (6 disasters)
- [x] ✅ 2025/01/15 - Statistics Dashboard section
- [x] ✅ 2025/01/15 - Browse Categories section (4 categories)
- [x] ✅ 2025/01/15 - DisasterCard reusable component

### Documentation
- [x] ✅ 2025/01/15 - CLAUDE.md project context file
- [x] ✅ 2025/01/15 - ROADMAP.md project tracking file

---

## Phase 2: Core Content Pages

### Disaster Detail Pages
- [ ] Create disaster detail page layout (`/pages/disaster/[slug].vue`)
- [ ] Design header section with hero image placeholder
- [ ] Implement accident overview section (date, location, aircraft, fatalities)
- [ ] Create timeline of events component
- [ ] Add investigation findings section
- [ ] Implement safety improvements section
- [ ] Create related disasters component
- [ ] Add share/bookmark functionality

### Browse & Filter Page
- [ ] Create browse page layout (`/pages/browse.vue`)
- [ ] Implement category filter (Human Error, Mechanical, Weather, Other)
- [ ] Add decade/year filter
- [ ] Create fatality range filter
- [ ] Implement aircraft type filter
- [ ] Add sort options (date, fatalities, relevance)
- [ ] Create results grid with pagination
- [ ] Add "no results" state

### Timeline Page
- [ ] Design timeline visualization layout
- [ ] Create decade markers component
- [ ] Implement scrollable timeline with disaster markers
- [ ] Add hover states with disaster previews
- [ ] Create timeline filters (category, decade)
- [ ] Add zoom/pan functionality for dense periods
- [ ] Implement "jump to year" functionality

### Statistics Page
- [ ] Expand statistics dashboard from landing page
- [ ] Create interactive charts (Chart.js or similar)
- [ ] Add accidents by decade chart
- [ ] Create accidents by cause breakdown chart
- [ ] Implement safety improvements timeline
- [ ] Add fatalities trend chart
- [ ] Create geographical heatmap
- [ ] Add downloadable data exports

---

## Phase 3: Data & Content Management

### Data Structure
- [ ] Define disaster data schema (TypeScript interfaces)
- [ ] Create JSON data structure for disasters
- [ ] Implement data validation
- [ ] Add data sanitization utilities
- [ ] Create data import/export utilities

### Content Management
- [ ] Decide on content approach (JSON files vs CMS vs API)
- [ ] Create content structure for 207+ disasters
- [ ] Organize disaster images/assets
- [ ] Implement image optimization pipeline
- [ ] Create content validation scripts

### Data Population
- [ ] Complete data for 6 featured disasters (detailed)
- [ ] Add data for top 50 deadliest disasters (moderate detail)
- [ ] Add basic data for remaining 150+ disasters
- [ ] Source and optimize disaster images
- [ ] Add aircraft type metadata
- [ ] Create category taxonomy

---

## Phase 4: Search & Discovery

### Search Functionality
- [ ] Choose search solution (local search vs Algolia/Meilisearch)
- [ ] Implement search input component
- [ ] Create search results page
- [ ] Add search suggestions/autocomplete
- [ ] Implement fuzzy search for misspellings
- [ ] Add search filters
- [ ] Create "no results" with suggestions

### Enhanced Discovery
- [ ] Implement "Related Disasters" algorithm
- [ ] Create "You might also be interested in" section
- [ ] Add tag-based discovery
- [ ] Implement "This Day in Aviation History"
- [ ] Create "Random Disaster" feature

---

## Phase 5: Informational Pages

### About & Context
- [ ] Create About page (`/pages/about.vue`)
- [ ] Write project mission and goals
- [ ] Add team/creator information
- [ ] Create Methodology page explaining data sources
- [ ] Implement Sources & Credits page
- [ ] Add Privacy Policy page
- [ ] Create Terms of Use page

### Educational Resources
- [ ] Create Aviation Glossary page
- [ ] Add common abbreviations (NTSB, CVR, FDR, TCAS, etc.)
- [ ] Implement Safety Improvements timeline page
- [ ] Create "How Aviation Became Safer" explainer
- [ ] Add external resources/links section

### Interactive Features
- [ ] Create Contact/Feedback form
- [ ] Add newsletter signup (if applicable)
- [ ] Implement social sharing meta tags

---

## Phase 6: Optimization & Launch Prep

### Performance
- [ ] Audit and optimize bundle size
- [ ] Implement lazy loading for images
- [ ] Add progressive image loading
- [ ] Optimize font loading
- [ ] Enable Nuxt performance optimizations
- [ ] Test and optimize SSG build times
- [ ] Implement caching strategy

### SEO
- [ ] Add meta tags to all pages
- [ ] Create dynamic OG images for disasters
- [ ] Implement structured data (JSON-LD)
- [ ] Generate sitemap.xml
- [ ] Create robots.txt
- [ ] Add canonical URLs
- [ ] Implement breadcrumbs

### Accessibility
- [ ] Run WCAG AA/AAA compliance audit
- [ ] Test keyboard navigation
- [ ] Add skip links
- [ ] Test screen reader compatibility
- [ ] Ensure sufficient color contrast (already done)
- [ ] Add ARIA labels where missing
- [ ] Test with accessibility tools

### Analytics & Monitoring
- [ ] Choose analytics solution (Plausible/Fathom for privacy-focused)
- [ ] Implement basic analytics tracking
- [ ] Add error tracking (Sentry or similar)
- [ ] Create performance monitoring
- [ ] Add user feedback collection

### Testing & QA
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Test dark/light mode consistency
- [ ] Validate all forms
- [ ] Test all navigation flows
- [ ] Proofread all content
- [ ] Test SSG build on production-like environment

### Deployment
- [ ] Choose hosting (Vercel, Netlify, Cloudflare Pages)
- [ ] Set up CI/CD pipeline
- [ ] Configure domain and DNS
- [ ] Set up SSL certificate
- [ ] Test production deployment
- [ ] Create deployment documentation

---

## Phase 7: Post-Launch (Future)

### Content Expansion
- [ ] Add more detailed disaster narratives
- [ ] Include survivor stories (with sensitivity)
- [ ] Add investigator interviews/quotes
- [ ] Create video content embeds
- [ ] Add audio clips (CVR transcripts with context warnings)

### Advanced Features
- [ ] Implement user accounts (if needed)
- [ ] Add bookmark/save functionality
- [ ] Create learning paths/guided tours
- [ ] Add interactive accident reconstructions
- [ ] Implement comparison tool (compare 2+ disasters)
- [ ] Create quiz/educational assessment

### Community
- [ ] Add comment system (with moderation)
- [ ] Create contribution guidelines
- [ ] Implement content suggestions from users
- [ ] Add fact-checking workflow

---

## Technical Debt & Maintenance

- [ ] Regular dependency updates (monthly)
- [ ] Security vulnerability scanning
- [ ] Performance monitoring and optimization
- [ ] Content accuracy reviews
- [ ] Broken link checks
- [ ] Analytics review and insights

---

**Last Updated:** 2025/01/15
**Current Phase:** Phase 1 ✅ Complete | Phase 2 Ready to Start
