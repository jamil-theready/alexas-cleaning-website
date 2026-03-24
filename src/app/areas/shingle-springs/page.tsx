import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cleaning Services in Shingle Springs CA | Alexa's Cleaning",
  description:
    "Professional house cleaning in Shingle Springs CA. Licensed, insured, 15+ years experience. Serving Gold Country families. No contracts. Call (530) 214-6361.",
  alternates: {
    canonical: "https://www.alexascleaningplacerville.com/areas/shingle-springs",
  },
};

const services = [
  { name: "House Cleaning", href: "/services/house-cleaning", desc: "Weekly, bi-weekly, or monthly cleaning tailored to your Shingle Springs home." },
  { name: "Deep Cleaning", href: "/services/deep-cleaning", desc: "Top-to-bottom deep clean for seasonal refreshes or move-in prep in Shingle Springs." },
  { name: "Commercial Cleaning", href: "/services/commercial-cleaning", desc: "Offices, retail, and commercial spaces along Shingle Springs Road and Mother Lode Drive." },
  { name: "Post-Construction Cleanup", href: "/services/post-construction-cleaning", desc: "Dust, debris, and residue removal after your Shingle Springs renovation." },
  { name: "Airbnb & Vacation Rental", href: "/services/airbnb-cleaning", desc: "Fast turnovers for Gold Country vacation rentals and Airbnbs in Shingle Springs." },
  { name: "Apartment Cleaning", href: "/services/apartment-cleaning", desc: "Move-in/move-out cleans for Shingle Springs apartments and rentals." },
];

const faqs = [
  {
    q: "How much does house cleaning cost in Shingle Springs?",
    a: "House cleaning in Shingle Springs typically ranges from $120 to $250 depending on the size of your home and the type of clean. We provide free quotes with no obligation so you know exactly what to expect before we start.",
  },
  {
    q: "Do you serve all areas of Shingle Springs?",
    a: "Yes. We clean homes and businesses throughout Shingle Springs including neighborhoods along Shingle Springs Road, Mother Lode Drive, Ponderosa Road, and all surrounding areas. We also serve nearby communities like Placerville, Cameron Park, and Diamond Springs.",
  },
  {
    q: "Are you licensed and insured in El Dorado County?",
    a: "Yes. Alexa's Cleaning Services holds El Dorado County Business License #074540 and carries full liability insurance. Every team member is background checked and personally trained by our owner Alejandra.",
  },
  {
    q: "Do you bring your own cleaning supplies to Shingle Springs homes?",
    a: "Yes. Our team arrives with all professional-grade supplies and equipment. You do not need to provide anything. If you have specific product preferences or sensitivities, just let us know and we will accommodate.",
  },
  {
    q: "How do I book a cleaning in Shingle Springs?",
    a: "Call or text us at (530) 214-6361 or fill out the contact form on our website. We respond same day and can usually schedule your first clean within a few days.",
  },
];

export default function ShingleSpringsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Cleaning Services in Shingle Springs, CA"
          subtitle="Trusted by Shingle Springs families for over 15 years. Licensed, insured, and committed to making your home or business spotless."
        />

        {/* Quick Answer Box (AEO) */}
        <section className="bg-yellow/20 py-8">
          <div className="mx-auto max-w-[800px] px-6">
            <div className="rounded-2xl border border-yellow/60 bg-white p-6">
              <p className="mb-1 text-[12px] font-semibold tracking-widest text-burgundy/50 uppercase">
                Quick Answer
              </p>
              <p className="text-[16px] leading-relaxed text-dark-gray">
                Alexa&apos;s Cleaning Services provides licensed and insured
                cleaning in Shingle Springs, CA with over 15 years of
                experience. We offer house cleaning, deep cleaning, commercial
                cleaning, and specialty services throughout Shingle Springs
                and El Dorado County. No contracts required. Call
                (530) 214-6361 for a free quote.
              </p>
            </div>
          </div>
        </section>

        {/* Intro with image */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
                  Shingle Springs&apos; Trusted Cleaning Company
                </h2>
                <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
                  Shingle Springs has that authentic Gold Country feel, and
                  we have been part of this community for over 15 years.
                  From the homes along Shingle Springs Road to the
                  properties off Mother Lode Drive and Ponderosa Road, we
                  know every corner of this town. Our founder Alejandra
                  Ortiz built this business one home at a time right here
                  in El Dorado County, and that local commitment shows in
                  every clean.
                </p>
                <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
                  Whether you live off Ponderosa Road, near Shingle Springs
                  Drive, or anywhere in the surrounding hills, we provide
                  consistent, reliable cleaning on your schedule. Weekly,
                  bi-weekly, monthly, or one-time deep cleans. No contracts.
                  No rescheduling fees. Just professional results every
                  single time.
                </p>
                <p className="text-[17px] leading-relaxed text-dark-gray">
                  We are fully licensed in El Dorado County (License #074540)
                  and carry complete liability insurance. Every team member is
                  personally trained and vetted by Alejandra. Your home is in
                  good hands.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/alexas-cleaning-team-placerville.jpg"
                  alt="Alexa's Cleaning Services team serving Shingle Springs CA homes"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="mb-8 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              What to Expect When You Book
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Free Quote",
                  desc: "Call or text (530) 214-6361. Tell us about your space and we give you an honest price upfront. No hidden fees.",
                },
                {
                  step: "02",
                  title: "We Show Up On Time",
                  desc: "Our team arrives in uniform, on schedule, with all supplies and equipment. You do not need to provide anything.",
                },
                {
                  step: "03",
                  title: "Thorough Clean",
                  desc: "Every room cleaned to a detailed checklist. Kitchens, bathrooms, floors, surfaces, baseboards. Nothing gets missed.",
                },
                {
                  step: "04",
                  title: "Walk-Through",
                  desc: "We do a final check before we leave. If anything is not right, we fix it on the spot. Your satisfaction is guaranteed.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <span className="flex-shrink-0 font-[family-name:var(--font-serif)] text-[28px] text-burgundy/30">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="mb-1 text-[17px] font-semibold text-burgundy">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-dark-gray">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Services Available in Shingle Springs
            </h2>
            <p className="mx-auto mb-12 max-w-[600px] text-center text-[17px] text-dark-gray">
              We offer a full range of residential and commercial cleaning
              services throughout Shingle Springs and the surrounding area.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group rounded-2xl bg-light-bg p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="mb-2 text-[18px] font-semibold text-burgundy transition-colors group-hover:text-red-highlight">
                    {service.name}
                  </h3>
                  <p className="mb-3 text-[14px] leading-relaxed text-dark-gray/70">
                    {service.desc}
                  </p>
                  <span className="text-[14px] font-medium text-burgundy/60 group-hover:text-burgundy">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Shingle Springs Chooses Us */}
        <section className="bg-burgundy py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-[28px] text-white md:text-[36px]">
              Why Shingle Springs Families Choose Us
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  stat: "15+",
                  label: "Years in El Dorado County",
                  detail: "Serving Shingle Springs and Gold Country.",
                },
                {
                  stat: "5.0",
                  label: "Google Rating",
                  detail: "Perfect score from real local customers.",
                },
                {
                  stat: "0",
                  label: "Contracts Required",
                  detail: "Stay because you love the service.",
                },
                {
                  stat: "$0",
                  label: "Rescheduling Fees",
                  detail: "Life changes. Your cleaning schedule adapts.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/10 p-6 text-center">
                  <p className="mb-1 font-[family-name:var(--font-serif)] text-[32px] text-yellow">
                    {item.stat}
                  </p>
                  <p className="mb-2 text-[15px] font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="text-[14px] text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (AEO + Schema) */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="mb-4 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mb-12 max-w-[550px] text-center text-[17px] text-dark-gray">
              Common questions from Shingle Springs homeowners about our cleaning services.
            </p>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-burgundy/10 bg-light-bg p-5 transition-colors hover:bg-burgundy/5"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-[16px] font-semibold text-burgundy">
                    {faq.q}
                    <svg
                      className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-dark-gray">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Also Serving Nearby Communities
            </h2>
            <p className="mx-auto mb-10 max-w-[600px] text-[17px] text-dark-gray">
              In addition to Shingle Springs, we provide cleaning services
              throughout El Dorado County.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Placerville", href: "/areas/placerville" },
                { name: "Cameron Park", href: "/areas/cameron-park" },
                { name: "Diamond Springs", href: "/areas/diamond-springs" },
                { name: "El Dorado Hills", href: "/areas/el-dorado-hills" },
                { name: "Pollock Pines", href: "/areas/pollock-pines" },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="rounded-full bg-yellow/40 px-5 py-2.5 text-[15px] font-medium text-burgundy transition-colors hover:bg-yellow/60"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-burgundy py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[48px]">
              Ready for a Cleaner Home in Shingle Springs?
            </h2>
            <p className="mx-auto mb-10 max-w-[550px] text-[18px] leading-relaxed text-white/80">
              Get a free quote today. No contracts, no pressure. Just honest
              pricing and professional results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+15302146361"
                className="inline-flex items-center gap-2 rounded-full bg-yellow px-[50px] py-[22px] text-[18px] font-semibold text-burgundy transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (530) 214-6361
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-full border-2 border-white px-[50px] py-[20px] text-[18px] font-semibold text-white transition-colors hover:bg-white hover:text-burgundy"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Schema: LocalBusiness + FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "CleaningService",
                name: "Alexa's Cleaning Services - Shingle Springs",
                url: "https://www.alexascleaningplacerville.com/areas/shingle-springs",
                telephone: "+15302146361",
                email: "alexascleaningplacerville@gmail.com",
                description:
                  "Professional house cleaning and commercial cleaning services in Shingle Springs CA. Licensed, insured, and trusted by local families for over 15 years.",
                areaServed: {
                  "@type": "City",
                  name: "Shingle Springs",
                  containedInPlace: {
                    "@type": "AdministrativeArea",
                    name: "El Dorado County, California",
                  },
                },
                priceRange: "$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5.0",
                  reviewCount: "9",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              },
            ]),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
