import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { getAllBlogPosts } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";
import ServicePageClient from "./ServicePageClient";

const residential = ["house-cleaning", "deep-cleaning", "moving-cleaning", "eco-cleaning", "window-cleaning", "floor-cleaning", "one-time-cleaning", "weekly-cleaning", "bi-weekly-cleaning", "monthly-cleaning", "airbnb-cleaning", "apartment-cleaning"];
const commercial = ["commercial-cleaning", "church-cleaning", "warehouse-cleaning", "gym-cleaning", "daycare-cleaning", "medical-cleaning", "retail-cleaning", "janitorial-cleaning", "disinfecting-cleaning", "post-construction-cleaning"];

// Service slug → most relevant blog guide slug (internal linking, service → blog)
const serviceGuides: Record<string, string> = {
  "airbnb-cleaning": "airbnb-turnover-cleaning-guide-el-dorado-county-hosts",
  "apartment-cleaning": "apartment-cleaning-services-renters",
  "deep-cleaning": "deep-cleaning-vs-regular-cleaning",
  "one-time-cleaning": "deep-cleaning-vs-regular-cleaning",
  "eco-cleaning": "eco-friendly-cleaning-what-it-means",
  "gym-cleaning": "gym-cleaning-best-practices",
  "house-cleaning": "how-often-professional-house-cleaning",
  "weekly-cleaning": "weekly-biweekly-monthly-cleaning-guide",
  "bi-weekly-cleaning": "weekly-biweekly-monthly-cleaning-guide",
  "monthly-cleaning": "weekly-biweekly-monthly-cleaning-guide",
  "moving-cleaning": "moving-cleaning-checklist-get-deposit-back",
  "post-construction-cleaning": "post-construction-cleaning-what-builders-leave",
  "floor-cleaning": "professional-floor-cleaning-types-methods",
  "retail-cleaning": "retail-store-cleaning-first-impressions",
  "daycare-cleaning": "why-daycare-needs-professional-cleaning",
  "church-cleaning": "why-el-dorado-county-churches-need-professional-cleaning-services",
  "disinfecting-cleaning": "importance-of-disinfection-commercial-spaces",
  "commercial-cleaning": "importance-of-disinfection-commercial-spaces",
  "medical-cleaning": "importance-of-disinfection-commercial-spaces",
  "janitorial-cleaning": "what-professional-cleaners-do",
  "window-cleaning": "what-professional-cleaners-do",
  "warehouse-cleaning": "what-professional-cleaners-do",
};

const areaLinks = [
  { name: "Placerville", href: "/areas/placerville" },
  { name: "Cameron Park", href: "/areas/cameron-park" },
  { name: "Shingle Springs", href: "/areas/shingle-springs" },
  { name: "Diamond Springs", href: "/areas/diamond-springs" },
  { name: "El Dorado Hills", href: "/areas/el-dorado-hills" },
  { name: "Pollock Pines", href: "/areas/pollock-pines" },
];

function getRelatedServices(currentSlug: string) {
  const isCommercial = commercial.includes(currentSlug);
  const pool = services.filter((s) => {
    if (s.slug === currentSlug) return false;
    if (isCommercial) return commercial.includes(s.slug);
    return residential.includes(s.slug);
  });
  return pool.slice(0, 3);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: {
        canonical: `https://www.alexascleaningplacerville.com/services/${slug}`,
      },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        type: "website",
        url: `https://www.alexascleaningplacerville.com/services/${slug}`,
        images: [
          {
            url: "https://www.alexascleaningplacerville.com/images/og-image.jpg",
            width: 1200,
            height: 630,
            alt: `${service.title} in Placerville CA - Alexa's Cleaning Services`,
          },
        ],
      },
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alexascleaningplacerville.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.alexascleaningplacerville.com/#services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://www.alexascleaningplacerville.com/services/${slug}` },
    ],
  };

  const guideSlug = serviceGuides[slug];
  const guide = guideSlug
    ? getAllBlogPosts().find((p) => p.slug === guideSlug) || null
    : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `https://www.alexascleaningplacerville.com/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.alexascleaningplacerville.com/#business",
      name: "Alexa's Cleaning Services",
      telephone: "+1-530-214-6361",
      email: "alexascleaningplacerville@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2838 Schnell School Rd #2",
        addressLocality: "Placerville",
        addressRegion: "CA",
        postalCode: "95667",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Placerville, CA and El Dorado County",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <PageHero
          title={service.title}
          subtitle={service.metaDescription}
          backgroundImage={service.heroImage}
        />

        {/* Quick Answer (AEO) */}
        <section className="bg-yellow/20 py-8">
          <div className="mx-auto max-w-[800px] px-6">
            <div className="rounded-2xl border border-yellow/60 bg-white p-6">
              <p className="mb-1 text-[12px] font-semibold tracking-widest text-burgundy/50 uppercase">
                Quick Answer
              </p>
              <p className="text-[16px] leading-relaxed text-dark-gray">
                Alexa&apos;s Cleaning Services provides {service.title.toLowerCase()}{" "}
                in Placerville and throughout El Dorado County, CA. Licensed
                (#074540) and insured, 15+ years in business, 5.0 stars on
                Google. No contracts and no rescheduling fees. Call (530)
                214-6361 for a free quote.
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            {service.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 text-[17px] leading-relaxed text-dark-gray last:mb-0"
              >
                {paragraph}
              </p>
            ))}

            {/* Area links (internal linking: service → area pages) */}
            <div className="mt-10 rounded-2xl bg-light-bg p-6">
              <p className="mb-3 text-[14px] font-semibold text-burgundy">
                {service.title} is available in:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {areaLinks.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="rounded-full bg-yellow/40 px-4 py-2 text-[14px] font-medium text-burgundy transition-colors hover:bg-yellow/70"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related guide (internal linking: service → blog) */}
            {guide && (
              <Link
                href={`/blog/${guide.slug}`}
                className="group mt-6 block rounded-2xl border border-burgundy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="mb-1 text-[12px] font-semibold tracking-widest text-burgundy/50 uppercase">
                  From Our Blog
                </p>
                <p className="text-[17px] font-semibold text-burgundy group-hover:text-red-highlight">
                  {guide.title} &rarr;
                </p>
              </Link>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              What You Get
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow/40">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z"
                        fill="#3d0719"
                      />
                    </svg>
                  </div>
                  <p className="text-[15px] font-medium leading-snug text-dark-gray">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              Frequently Asked Questions
            </h2>
            <ServicePageClient faqs={service.faqs} />
          </div>
        </section>

        {/* Related Services */}
        {(() => {
          const related = getRelatedServices(slug);
          if (related.length === 0) return null;
          return (
            <section className="bg-light-bg py-16 md:py-24">
              <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-10 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
                  Related Services
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/services/${r.slug}`}
                      className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[20px] text-burgundy group-hover:text-red-highlight">
                        {r.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-dark-gray line-clamp-3">
                        {r.metaDescription}
                      </p>
                      <span className="mt-4 inline-block text-[14px] font-semibold text-burgundy group-hover:text-red-highlight">
                        Learn More &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* CTA */}
        <section className="bg-burgundy py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[48px]">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-10 max-w-[550px] text-[18px] leading-relaxed text-white/80">
              Get a free quote today. No contracts, no obligations. We would love
              to hear from you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+15302146361"
                className="inline-block rounded-full bg-yellow px-[60px] py-[22px] text-[18px] font-semibold text-burgundy transition-opacity hover:opacity-90"
              >
                Call (530) 214-6361
              </a>
              <a
                href="mailto:alexascleaningplacerville@gmail.com"
                className="inline-block rounded-full border-2 border-white px-[60px] py-[20px] text-[18px] font-semibold text-white transition-colors hover:bg-white hover:text-burgundy"
              >
                Email Us
              </a>
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Serving Placerville, Cameron Park, El Dorado Hills, Diamond
              Springs &amp; all of El Dorado County
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
