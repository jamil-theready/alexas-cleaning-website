# AI BUILD INSTRUCTIONS: Alexa's Cleaning Services Website

## SETUP
```bash
cd "/Users/admin/Desktop/Clients/Alexas Cleaning/website"
npm install
npm run dev -- --port 3002
# Runs on http://localhost:3002
```

## TECH STACK
- Next.js 15.1 (App Router, TypeScript)
- Tailwind CSS 4 (`@tailwindcss/postcss`, `@theme inline` in globals.css)
- Fonts: DM Serif Display (headings), Inter (body)
- Static export (`output: "export"`)
- Path alias: `@/*` = `./src/*`
- GitHub repo: https://github.com/jamil-theready/alexas-cleaning-website.git

---

## BUSINESS INFO
- **Business Name**: Alexa's Cleaning Services
- **Tagline**: Placerville's Top-Rated House & Commercial Cleaning Service
- **Owner**: K.E. Coleman, M.B.A
- **Phone**: (530) 214-6361
- **Email**: alexascleaningplacerville@gmail.com
- **Address**: 2838 Schnell School Rd #2, Placerville, CA 95667
- **Business License**: #074540, County of El Dorado
- **Google Reviews**: 5.0 stars, 9 reviews
- **Website (current)**: https://www.alexascleaningplacerville.com
- **Service Area**: Placerville, CA and surrounding El Dorado County areas

### Key Selling Points
- Instant Quotes
- No Rescheduling Fees
- No Contracts
- 307+ Residencies Cleaned
- 86+ Satisfied Customers
- Licensed & Insured
- Book in 3 steps: Free Estimate > Set a Time > Enjoy a Clean Space

### All Services
**Residential:**
- One Time Cleaning, Weekly Cleaning, Bi-weekly Cleaning, Monthly Cleaning
- House Cleaning, Deep Cleaning

**Commercial:**
- Commercial Cleaning (offices, retail, facilities)
- Property Cleaning, Post Construction Cleaning
- Church Cleaning, Apartment Cleaning
- Warehouse Cleaning, Airbnb Cleaning

---

## REFERENCE SITE
The original site is live at: **https://www.alexascleaningplacerville.com**
This is the PRIMARY design reference. Match it.

## COLOR SYSTEM
```
--burgundy: #3d0719       (dark red/burgundy)
--red: #ab1818             (accent red)
--yellow: #fae084          (warm yellow)
--dark: #1a1a1a
--light: #faf9f6
```

---

## WHAT IS ALREADY BUILT

### Homepage Only (single page app)
- Header.tsx - Navigation & logo
- Hero.tsx - Hero banner with SVG icons and CTA
- Services.tsx - Service cards (House, Deep, Commercial, Post-Construction)
- WhyChooseUs.tsx - Trust badges, selling points
- Testimonials.tsx - Customer reviews (5-star ratings)
- CTASection.tsx - Call to action
- FloatingCTA.tsx - Sticky floating CTA button
- Footer.tsx - Footer with business info

### NOT Built Yet
- No inner pages at all (no about, contact, services, blog)
- No SEO metadata or schema
- No contact form
- All images are placeholders (no real photos in repo)
- No blog system

---

## AVAILABLE ASSETS (on local machine, NOT in repo yet)

### Logos
`/Users/admin/Desktop/Clients/Alexa's Cleaning Services/logo/`
- logo.svg, logo-color.svg (vector)
- logo-2.jpg, fb.jpg (raster)

`/Users/admin/Desktop/Clients/Alexa's Cleaning Services/New Folder With Items/`
- new-logo.png, new-logo-WHITE.png
- logo-dark.png, logo-dark.svg
- cleaning-lady.png, cleaning-lady-2.png (hero images)
- background.jpg, pink-background.jpg
- icon.png, icon-2.png (favicons)
- Social image.png, Social-image.jpg (OG images)

### Stock Photos
`/Users/admin/Desktop/Clients/Alexa's Cleaning Services/images/`
- 37 high quality stock photos (cleaning, home interior)
- Blog images subfolder with 29 feature images (1.jpg through 30.jpg)

### SEO & Business Docs
`/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents/`
- `business-info.txt` - Complete business details
- `SEO_Execution_Plan.docx` - Full SEO strategy
- `keywords.pdf` - Keyword research
- `schema_jsonld.html` / `schema_jsonld_v2.html` - Pre-built schema markup (USE THESE)
- `301_redirects.txt` - Redirect rules from old site
- `Blog_Batch1_Upload.csv` through `Blog_Batch3_Upload.csv` - 3 batches of blog content ready to import
- `GBP_Post_Automation_Alexas.xlsx` - Google Business Profile posts
- `Metricool_GBP_Posts_Alexas.csv` - Social media posts

---

## WHAT NEEDS TO BE DONE

### 1. COPY REAL IMAGES INTO REPO
Copy logos and images from asset folders into `/public/images/`. Replace all placeholders.
```bash
# Example
cp "/Users/admin/Desktop/Clients/Alexa's Cleaning Services/New Folder With Items/new-logo.png" public/images/logo.png
cp "/Users/admin/Desktop/Clients/Alexa's Cleaning Services/New Folder With Items/new-logo-WHITE.png" public/images/logo-white.png
# Copy stock photos for service pages, etc.
```

### 2. MATCH THE ORIGINAL SITE DESIGN
Visit https://www.alexascleaningplacerville.com and compare every section. Fix:
- Spacing, padding, margins, fonts
- Colors and gradients
- Layout and grid structure
- Mobile responsiveness

### 3. BUILD ALL INNER PAGES

#### Individual Service Pages (8 pages)
Create at `/services/[slug]`:
- `/services/house-cleaning`
- `/services/deep-cleaning`
- `/services/commercial-cleaning`
- `/services/post-construction-cleaning`
- `/services/airbnb-cleaning`
- `/services/apartment-cleaning`
- `/services/church-cleaning`
- `/services/warehouse-cleaning`

Each page needs: hero section, service description, benefits list, CTA, FAQ section with FAQPage schema.

#### About Page (`/about`)
- Owner: K.E. Coleman, M.B.A
- Licensed (#074540) and insured
- Local Placerville business
- Commitment to quality and customer satisfaction

#### Contact Page (`/contact`)
- Contact form (name, email, phone, service type dropdown, message)
- Phone: (530) 214-6361
- Email: alexascleaningplacerville@gmail.com
- Address: 2838 Schnell School Rd #2, Placerville, CA 95667
- Business hours

### 4. BUILD BLOG SYSTEM
Blog content is ALREADY WRITTEN in CSV files:
- `Blog_Batch1_Upload.csv` (32 KB)
- `Blog_Batch2_Upload.csv` (32 KB)
- `Blog_Batch3_Upload.csv` (43 KB)

Read these CSVs and create blog posts at `/blog/[slug]`. These are SEO articles targeting local cleaning keywords. Build:
- `/blog` - Blog index page with post cards
- `/blog/[slug]` - Individual blog post pages

### 5. IMPLEMENT SEO

#### Schema Markup
Use the pre-built schemas in `Documents/schema_jsonld.html` and `schema_jsonld_v2.html` as reference. Add:
- LocalBusiness schema on homepage
- Service schema on each service page
- FAQPage schema where FAQ sections exist
- BlogPosting schema on blog posts

#### Page Metadata
- Homepage: "Alexa's Cleaning Services | Placerville's Top-Rated House & Commercial Cleaning"
- Service pages: "[Service Name] in Placerville CA | Alexa's Cleaning Services"
- Blog posts: "[Post Title] | Alexa's Cleaning Services"
- Include target keywords from keyword research files

#### Technical SEO
- Sitemap generation
- robots.txt
- Canonical URLs
- Image alt text (descriptive, include "Placerville cleaning" naturally)
- Internal linking between service pages
- 301 redirects from `301_redirects.txt`

### 6. POLISH
- All buttons link to correct pages
- Phone links: `tel:+15302146361`
- Email links: `mailto:alexascleaningplacerville@gmail.com`
- Proper favicon from icon files
- OG/social images for sharing
- FloatingCTA should link to phone or booking

---

## CONTENT RULES
- Professional, trustworthy, friendly tone
- No hyphens or em dashes
- No AI filler language
- Short punchy sentences
- CTA on every page: phone (530) 214-6361 or "Get a Free Estimate"
- Emphasize: Licensed, Insured, No Contracts, No Rescheduling Fees
- Local focus: Placerville, El Dorado County

---

## WHAT "DONE" LOOKS LIKE
1. Site matches alexascleaningplacerville.com in design
2. All pages render without errors, `npm run build` passes
3. Real logos/images replace all placeholders
4. 8 individual service pages with unique content and FAQs
5. Contact and About pages built
6. Blog system with posts imported from CSVs
7. SEO metadata and schema on every page
8. Mobile responsive
9. All CTAs work (phone links, email links, form)
10. Site looks polished and professional
