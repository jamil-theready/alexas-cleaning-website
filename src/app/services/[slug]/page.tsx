import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";
import ServicePageClient from "./ServicePageClient";

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
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
