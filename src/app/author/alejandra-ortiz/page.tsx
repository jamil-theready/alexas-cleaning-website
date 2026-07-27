import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Alejandra Ortiz | Founder, Alexa's Cleaning Services",
  description:
    "Alejandra Ortiz founded Alexa's Cleaning Services in Placerville CA 15+ years ago. She trains every team member and writes the guides on this site.",
  alternates: {
    canonical: "https://www.alexascleaningplacerville.com/author/alejandra-ortiz",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.alexascleaningplacerville.com/author/alejandra-ortiz#person",
  name: "Alejandra Ortiz",
  url: "https://www.alexascleaningplacerville.com/author/alejandra-ortiz",
  jobTitle: "Founder & Owner",
  worksFor: {
    "@type": "CleaningService",
    "@id": "https://www.alexascleaningplacerville.com/#business",
    name: "Alexa's Cleaning Services",
  },
  image:
    "https://www.alexascleaningplacerville.com/images/alexas-cleaning-team-placerville.jpg",
  knowsAbout: [
    "house cleaning",
    "deep cleaning",
    "commercial cleaning",
    "move-out cleaning",
    "post construction cleaning",
    "Airbnb turnover cleaning",
    "eco-friendly cleaning products",
  ],
  sameAs: [
    "https://www.instagram.com/servicecleaners4you/",
    "https://www.yelp.com/biz/alexas-cleaning-services-placerville",
    "https://nextdoor.com/pages/alexas-cleaning-services/",
  ],
};

export default function AuthorPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <main>
        <PageHero
          title="Alejandra Ortiz"
          subtitle="Founder and owner of Alexa's Cleaning Services. 15+ years cleaning homes and businesses across El Dorado County."
        />

        {/* Bio */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="mb-8 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              About the Author
            </h2>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              Alejandra Ortiz started cleaning homes in Placerville over 15
              years ago with a car full of supplies and a promise to do things
              the right way. Today she runs Alexa&apos;s Cleaning Services, a
              licensed and insured cleaning company (El Dorado County Business
              License #074540) trusted by hundreds of families and businesses
              across El Dorado County.
            </p>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              She still personally trains every team member and inspects work
              against her own checklist. Every guide on this blog comes from
              what she has seen inside real homes in Placerville, Cameron Park,
              Shingle Springs, Diamond Springs, El Dorado Hills, and Pollock
              Pines. Real products, real timelines, real prices. No filler.
            </p>
            <p className="mb-8 text-[17px] leading-relaxed text-dark-gray">
              Her rule has not changed since day one: no contracts, no
              rescheduling fees, and every home gets equal care.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "15+ years experience", },
                { label: "Licensed #074540" },
                { label: "5.0 stars on Google" },
                { label: "Trains every cleaner personally" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="rounded-full bg-yellow/40 px-5 py-2.5 text-[15px] font-medium text-burgundy"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              Guides by Alejandra
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="mb-2 font-[family-name:var(--font-serif)] text-[18px] leading-snug text-burgundy group-hover:text-red-highlight">
                    {post.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-dark-gray line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-[14px] font-semibold text-burgundy group-hover:text-red-highlight">
                    Read &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-burgundy py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[48px]">
              Want Alejandra&apos;s Team in Your Home?
            </h2>
            <p className="mx-auto mb-10 max-w-[550px] text-[18px] leading-relaxed text-white/80">
              Free quotes, no contracts, no rescheduling fees. Serving all of
              El Dorado County.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+15302146361"
                className="inline-block rounded-full bg-yellow px-[60px] py-[22px] text-[18px] font-semibold text-burgundy transition-opacity hover:opacity-90"
              >
                Call (530) 214-6361
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-full border-2 border-white px-[60px] py-[20px] text-[18px] font-semibold text-white transition-colors hover:bg-white hover:text-burgundy"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
