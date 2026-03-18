# MASTER FILE: Alexa's Cleaning Services Website
> Last updated: March 16, 2026
> Drop this file into any AI conversation. It contains everything needed to continue building.

---

## 1. BUSINESS OVERVIEW

| Field | Value |
|-------|-------|
| Business | Alexa's Cleaning Services |
| Tagline | Placerville's Top-Rated House & Commercial Cleaning Service |
| Owner | K.E. Coleman, M.B.A |
| Phone | (530) 214-6361 |
| Email | alexascleaningplacerville@gmail.com |
| Address | 2838 Schnell School Rd #2, Placerville, CA 95667 |
| License | #074540, County of El Dorado |
| Google Reviews | 5.0 stars, 9 reviews |
| Website | https://www.alexascleaningplacerville.com |
| Instagram | https://www.instagram.com/servicecleaners4you/ |
| Service Area | Placerville, CA and surrounding El Dorado County areas |

### Key Selling Points
- Instant Quotes
- No Rescheduling Fees
- No Contracts
- 307+ Residencies Cleaned
- 86+ Satisfied Customers
- Licensed & Insured
- Book in 3 steps: Free Estimate > Set a Time > Enjoy a Clean Space

### Residential Services
- One Time Cleaning
- Weekly Cleaning
- Bi-weekly Cleaning
- Monthly Cleaning
- House Cleaning
- Deep Cleaning

### Commercial Services
- Commercial Cleaning (offices, retail, facilities)
- Property Cleaning
- Post Construction Cleaning
- Church Cleaning
- Apartment Cleaning
- Warehouse Cleaning
- Airbnb Cleaning

---

## 2. TECH STACK

| Tech | Version/Details |
|------|----------------|
| Framework | Next.js 15.1 (App Router, TypeScript) |
| Styling | Tailwind CSS 4 (`@tailwindcss/postcss`, `@theme inline`) |
| Fonts | DM Serif Display (headings/serif), Inter (body/sans) |
| Output | Static export (`output: "export"`) |
| Path alias | `@/*` = `./src/*` |

### Color System (globals.css)
```css
--color-white: #ffffff
--color-light-bg: #faf7f8
--color-light-bg-alt: #f6f7f9
--color-burgundy: #3d0719       /* dark red/burgundy */
--color-red-highlight: #ab1818   /* accent red */
--color-yellow: #fae084          /* warm yellow */
--color-yellow-light: #fceaa9
--color-gray: #b0b0b0
--color-dark-gray: #3b3b3b
--color-footer-start: #010528    /* footer gradient start */
--color-footer-end: #000000      /* footer gradient end */
--color-border: #540922
```

---

## 3. REPO & GIT

```bash
# Clone and run
git clone https://github.com/jamil-theready/alexas-cleaning-website.git
cd alexas-cleaning-website
npm install
npm run dev -- --port 3002
# Runs on http://localhost:3002
```

**Local path**: `/Users/admin/Desktop/Clients/Alexas Cleaning/website/`

**Git history (2 commits):**
1. `f9a9cf4` - Polish: SVG icons, trust badges, improved testimonials, floating CTA, footer
2. `085e33d` - Initial commit: Alexa's Cleaning Services homepage

---

## 4. REFERENCE SITE
**CRITICAL**: The original site is live at **https://www.alexascleaningplacerville.com**
This is the PRIMARY design reference. Match it.

---

## 5. WHAT IS BUILT (Homepage Only)

The site is a **single page app**. Only the homepage exists.

### Components (8 total)
- `Header.tsx` - Navigation & logo
- `Hero.tsx` - Hero banner with SVG icons and CTA
- `Services.tsx` - Service cards (House Cleaning, Deep Cleaning, Commercial, Post-Construction) with inline SVG icons
- `WhyChooseUs.tsx` - Trust badges and selling points
- `Testimonials.tsx` - Customer reviews with 5-star ratings
- `CTASection.tsx` - Call to action section
- `FloatingCTA.tsx` - Sticky floating CTA button for mobile
- `Footer.tsx` - Dark gradient footer with business info

### What Does NOT Exist Yet
- No inner pages at all (no about, contact, services, blog, privacy)
- No SEO metadata or schema markup
- No contact form
- All images are placeholders (no real photos in the repo)
- No blog system
- No individual service pages
- No sitemap or robots.txt

---

## 6. DESIGN RULES

### Style Direction
Burgundy Trust — deep burgundy (#3D0719) with warm yellow (#FAE084) accents. Trust-first local service design.

### Landing Page Pattern
Hero with phone + trust badges > Services Grid > Why Choose Us > Reviews/Testimonials > Booking CTA

### Key UX Rules
- Phone number visible EVERYWHERE: header, hero, floating mobile CTA, footer
- Floating mobile CTA: sticky bottom pill button with phone link (already built as FloatingCTA.tsx)
- Trust badges prominent: Licensed #074540, Insured, No Contracts, No Rescheduling Fees, 5.0 Stars
- Star ratings and review counts visible above fold
- Section padding: py-16 md:py-24 consistent
- Max content width: max-w-7xl mx-auto px-6
- Footer: dark gradient from #010528 to #000000
- Service cards: consistent grid, hover states with border + shadow
- Before/after imagery for cleaning results (when real photos available)
- Touch targets: minimum 44x44px on mobile
- Breakpoints: 375px > 768px > 1024px > 1280px
- Yellow (#FAE084) for CTAs and badges — stands out against burgundy
- White card backgrounds for contrast against light-bg (#FAF7F8)
- Body text: Inter 16px minimum, line-height 1.75
- All images: descriptive alt text including "Placerville cleaning" naturally
- tel: links on all phone numbers, mailto: on all emails

### Anti-Patterns to AVOID
- No phone number above fold (losing mobile conversions) — HIGH severity
- Generic stock photos instead of real cleaning work — MEDIUM
- Burgundy for body text (too dark/hard to read, use dark-gray #3B3B3B) — HIGH
- Overusing yellow (overwhelming) — MEDIUM
- No trust indicators visible (license, insurance, reviews) — HIGH
- Complex booking flow (should be 3 steps max) — MEDIUM
- Missing schema markup for local business — HIGH

---

## 6b. WHAT NEEDS TO BE DONE (Priority Order)

### 1. COPY REAL IMAGES INTO REPO
Copy from local asset folders into `/public/images/`:

**Logos:**
```
Source: /Users/admin/Desktop/Clients/Alexa's Cleaning Services/New Folder With Items/
- new-logo.png → /public/images/logo.png
- new-logo-WHITE.png → /public/images/logo-white.png
- logo-dark.png → /public/images/logo-dark.png
- icon.png → /public/images/favicon.png
- Social-image.jpg → /public/images/og-image.jpg
```

**Hero Images:**
```
- cleaning-lady.png → /public/images/hero/cleaning-lady.png
- cleaning-lady-2.png → /public/images/hero/cleaning-lady-2.png
- background.jpg → /public/images/hero/background.jpg
```

**Stock Photos (pick best ones):**
```
Source: /Users/admin/Desktop/Clients/Alexa's Cleaning Services/images/
- 37 stock photos of cleaning, home interiors
- /blog images/ subfolder with 29 blog feature images (1.jpg through 30.jpg)
```

**Vector Logos:**
```
Source: /Users/admin/Desktop/Clients/Alexa's Cleaning Services/logo/
- logo.svg, logo-color.svg
```

### 2. MATCH ORIGINAL SITE DESIGN
Visit https://www.alexascleaningplacerville.com and compare every section:
- Spacing, padding, margins, fonts
- Colors and gradients (burgundy/red/yellow scheme)
- Layout and grid structure
- Mobile responsiveness
- Hover states and transitions

### 3. BUILD ALL INNER PAGES

#### Service Pages (8 pages at `/services/[slug]`)
Each needs: hero, service description, benefits, pricing info, CTA, FAQ section.

| Page | Slug | Focus |
|------|------|-------|
| House Cleaning | house-cleaning | Recurring residential cleaning |
| Deep Cleaning | deep-cleaning | One-time thorough cleaning |
| Commercial Cleaning | commercial-cleaning | Offices, retail, businesses |
| Post Construction | post-construction-cleaning | After renovation/build |
| Airbnb Cleaning | airbnb-cleaning | Short-term rental turnover |
| Apartment Cleaning | apartment-cleaning | Move-in/move-out + regular |
| Church Cleaning | church-cleaning | Religious facility care |
| Warehouse Cleaning | warehouse-cleaning | Industrial/storage spaces |

#### About Page (`/about`)
- Owner: K.E. Coleman, M.B.A
- Licensed (#074540, El Dorado County) and insured
- Local Placerville business
- Commitment to quality and customer satisfaction
- Stats: 307+ residencies, 86+ customers, 5.0 stars

#### Contact Page (`/contact`)
- Contact form (name, email, phone, service type dropdown, message)
- Phone: (530) 214-6361
- Email: alexascleaningplacerville@gmail.com
- Address: 2838 Schnell School Rd #2, Placerville, CA 95667
- Business hours
- Map embed (optional)

#### Privacy Policy (`/privacy-policy`)
Standard privacy policy for a cleaning service.

### 4. BUILD BLOG SYSTEM
Blog content is ALREADY WRITTEN in CSV files. Read and import:

**Source files:**
- `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents/Blog_Batch1_Upload.csv`
- `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents/Blog_Batch2_Upload.csv`
- `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents/Blog_Batch3_Upload.csv`

**Known posts include:**
- "The Complete Guide to House Cleaning Services in Sacramento"
- "How Often Should You Get Your House Professionally Cleaned"
- "Deep Cleaning vs Regular Cleaning"
- "What Professional House Cleaners Do That You Probably Skip"
- "Apartment Cleaning Services: What Renters Should Know Before Booking"
- Plus many more across 3 batches

**Blog feature images**: 29 images at `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/images/blog images/`

Build:
- `/blog` - Blog index page with post cards
- `/blog/[slug]` - Individual blog post pages

### 5. IMPLEMENT SEO

#### Schema Markup
Pre-built schema available at `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents/schema_jsonld_v2.html`. Use it as reference:

```json
{
  "@type": "CleaningService",
  "name": "Alexa's Cleaning Services",
  "url": "https://www.alexascleaningplacerville.com",
  "telephone": "+15302146361",
  "email": "alexascleaningplacerville@gmail.com",
  "address": {
    "streetAddress": "2838 Schnell School Rd #2",
    "addressLocality": "Placerville",
    "addressRegion": "CA",
    "postalCode": "95667"
  },
  "geo": { "latitude": 38.7296, "longitude": -120.7986 },
  "priceRange": "$"
}
```

Add:
- CleaningService + LocalBusiness schema on homepage
- Service schema on each service page
- FAQPage schema where FAQ sections exist
- BlogPosting schema on blog posts

#### Page Metadata
- Homepage: "Alexa's Cleaning Services | Placerville's Top-Rated House & Commercial Cleaning"
- Service pages: "[Service Name] in Placerville CA | Alexa's Cleaning Services"
- Blog posts: "[Post Title] | Alexa's Cleaning Services"
- Include target keywords from the SEO execution plan

#### Technical SEO
- Sitemap generation
- robots.txt
- Canonical URLs on all pages
- Image alt text (descriptive, include "Placerville cleaning" naturally)
- Internal linking between service pages
- OpenGraph images (use Social-image.jpg)

#### 301 Redirects
43 redirects defined in `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents/301_redirects.txt`
These redirect old Sacramento-focused URLs to Placerville versions. Implement in Next.js config or netlify.toml.

### 6. POLISH
- All buttons link correctly
- Phone links: `tel:+15302146361`
- Email links: `mailto:alexascleaningplacerville@gmail.com`
- Proper favicon from icon files
- OG/social images for sharing
- FloatingCTA should trigger phone call or booking
- Footer gradient (dark blue/black)
- All hover states working

---

## 7. EXTERNAL ASSETS (not in repo)

All docs at `/Users/admin/Desktop/Clients/Alexa's Cleaning Services/`

| Folder | Contents |
|--------|----------|
| `documents/business-info.txt` | Business details (source of truth) |
| `documents/seo/SEO_Execution_Plan.docx` | Full SEO strategy |
| `documents/seo/schema.html` | Pre-built JSON-LD schema markup |
| `documents/seo/301_redirects.txt` | 43 redirect rules from old site |
| `documents/keywords/keywords.pdf` | Keyword reference |
| `documents/keywords/keyword-research.pdf` | Detailed keyword data with volumes |
| `documents/blog-content/Blog_Batch1_Upload.csv` | Blog batch 1 |
| `documents/blog-content/Blog_Batch2_Upload.csv` | Blog batch 2 |
| `documents/blog-content/Blog_Batch3_Upload.csv` | Blog batch 3 |
| `documents/social/GBP_Post_Automation_Alexas.xlsx` | Google Business Profile posts |
| `documents/social/Metricool_GBP_Posts_Alexas.csv` | Social media posts |
| `logo/` | SVG logos (logo.svg, logo-color.svg) |
| `New Folder With Items/` | PNG logos, hero images, social images, favicons |
| `images/` | 37 stock photos |
| `images/blog images/` | 29 blog feature images |

---

## 8. CONTENT RULES
- Professional, trustworthy, friendly tone
- No hyphens or em dashes
- No AI filler language ("In today's fast-paced world...")
- Short punchy sentences
- CTA on every page: phone (530) 214-6361 or "Get a Free Estimate"
- Emphasize: Licensed, Insured, No Contracts, No Rescheduling Fees
- Local focus: Placerville, El Dorado County
- Max 1-2 exclamation marks per piece

---

## 9. DEFINITION OF DONE

- [ ] `npm run build` passes with zero errors
- [ ] Site matches alexascleaningplacerville.com in design
- [ ] Real logos and images replace ALL placeholders
- [ ] 8 individual service pages with unique content + FAQs
- [ ] About page built with owner bio and credentials
- [ ] Contact page with working form
- [ ] Privacy policy page
- [ ] Blog system with posts imported from CSV batches
- [ ] CleaningService + LocalBusiness schema on homepage
- [ ] Service schema + FAQPage schema on each service page
- [ ] BlogPosting schema on blog posts
- [ ] Every page has optimized meta title + description
- [ ] 301 redirects implemented
- [ ] sitemap.xml and robots.txt
- [ ] Mobile responsive
- [ ] All CTAs work (phone links, email links, form)
- [ ] Proper favicon and OG images
- [ ] Committed and pushed to GitHub
