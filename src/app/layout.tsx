import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexa's Cleaning Services | Professional Cleaning in Placerville, CA",
  description:
    "Top-rated professional cleaning services in Placerville and El Dorado County. House cleaning, deep cleaning, commercial cleaning, and more. No contracts, no rescheduling fees.",
  keywords:
    "cleaning services Placerville, house cleaning El Dorado County, deep cleaning Placerville CA, commercial cleaning Placerville, Airbnb cleaning Placerville",
  openGraph: {
    title: "Alexa's Cleaning Services | Placerville, CA",
    description:
      "Professional cleaning services in Placerville and El Dorado County. No contracts, no rescheduling fees.",
    type: "website",
    locale: "en_US",
    url: "https://www.alexascleaningplacerville.com",
    images: [
      {
        url: "https://www.alexascleaningplacerville.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alexa's Cleaning Services - Professional Cleaning in Placerville, CA",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "Alexa's Cleaning Services",
  "url": "https://www.alexascleaningplacerville.com",
  "telephone": "+15302146361",
  "email": "alexascleaningplacerville@gmail.com",
  "image": "https://www.alexascleaningplacerville.com/images/og-image.jpg",
  "logo": "https://www.alexascleaningplacerville.com/images/logo.png",
  "description": "Placerville's top-rated house and commercial cleaning service. Licensed, insured, and trusted by hundreds of customers in El Dorado County.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2838 Schnell School Rd #2",
    "addressLocality": "Placerville",
    "addressRegion": "CA",
    "postalCode": "95667",
    "addressCountry": "US",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.7296, "longitude": -120.7986 },
  "areaServed": { "@type": "Place", "name": "Placerville, CA and surrounding El Dorado County areas" },
  "priceRange": "$",
  "sameAs": ["https://www.instagram.com/servicecleaners4you/"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cleaning Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post Construction Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airbnb Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apartment Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Church Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One Time Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weekly Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bi-Weekly Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Janitorial Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Cleaning" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FCT5ZJ1J4W" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-FCT5ZJ1J4W');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"e716baa6b1484524a0dd6332688afc52"})});`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
