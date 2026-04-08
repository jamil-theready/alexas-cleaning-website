import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cleaning Services in El Dorado County CA | Alexa's Cleaning",
  description:
    "Professional house cleaning across El Dorado County. Serving Placerville, Cameron Park, El Dorado Hills, Diamond Springs, Shingle Springs, and Pollock Pines. Call (530) 214-6361.",
  alternates: {
    canonical: "/areas",
  },
};

const areas = [
  {
    name: "Placerville",
    href: "/areas/placerville",
    desc: "Our home base. Serving downtown Placerville, Hangtown Creek, Cold Springs Road, Smith Flat, and all surrounding neighborhoods.",
  },
  {
    name: "Cameron Park",
    href: "/areas/cameron-park",
    desc: "Cleaning homes near Cameron Park Lake, Cameron Park Drive, Country Club Drive, and the Highway 50 corridor.",
  },
  {
    name: "El Dorado Hills",
    href: "/areas/el-dorado-hills",
    desc: "Serving Serrano, Town Center, Silva Valley Parkway, Blackstone, and all El Dorado Hills communities.",
  },
  {
    name: "Diamond Springs",
    href: "/areas/diamond-springs",
    desc: "Cleaning this historic Gold Rush town along Pleasant Valley Road, Diamond Road, and Missouri Flat.",
  },
  {
    name: "Shingle Springs",
    href: "/areas/shingle-springs",
    desc: "Serving homes along Shingle Springs Road, Mother Lode Drive, Ponderosa Road, and the surrounding Gold Country.",
  },
  {
    name: "Pollock Pines",
    href: "/areas/pollock-pines",
    desc: "Cleaning mountain homes and cabins along Sly Park Road, Pony Express Trail, and near Jenkinson Lake.",
  },
];

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Cleaning Services in El Dorado County"
          subtitle="Professional house cleaning and commercial cleaning across El Dorado County, CA. Licensed, insured, and trusted for over 15 years."
        />

        {/* Quick Answer Box (AEO) */}
        <section className="bg-yellow/20 py-8">
          <div className="mx-auto max-w-[800px] px-6">
            <div className="rounded-2xl border border-yellow/60 bg-white p-6">
              <p className="mb-1 text-[12px] font-semibold tracking-widest text-burgundy/50 uppercase">
                Quick Answer
              </p>
              <p className="text-[16px] leading-relaxed text-dark-gray">
                Alexa&apos;s Cleaning Services is a licensed and insured
                cleaning company serving all of El Dorado County, CA. We
                clean homes and businesses in Placerville, Cameron Park,
                El Dorado Hills, Diamond Springs, Shingle Springs, and
                Pollock Pines. Over 15 years of experience. No contracts.
                Call (530) 214-6361 for a free quote.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Areas We Serve
            </h2>
            <p className="mx-auto mb-12 max-w-[600px] text-center text-[17px] text-dark-gray">
              We provide residential and commercial cleaning services
              throughout El Dorado County. Click on any area below to learn
              more about our services in your community.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="group rounded-2xl border border-burgundy/10 bg-light-bg p-8 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[22px] text-burgundy transition-colors group-hover:text-red-highlight">
                    {area.name}
                  </h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-dark-gray/70">
                    {area.desc}
                  </p>
                  <span className="text-[14px] font-medium text-burgundy/60 group-hover:text-burgundy">
                    View {area.name} services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-burgundy py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-[28px] text-white md:text-[36px]">
              Why El Dorado County Trusts Us
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  stat: "15+",
                  label: "Years of Experience",
                  detail: "Cleaning El Dorado County homes since day one.",
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

        {/* CTA */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[48px]">
              Ready for a Cleaner Home?
            </h2>
            <p className="mx-auto mb-10 max-w-[550px] text-[18px] leading-relaxed text-dark-gray">
              No matter where you are in El Dorado County, we bring the same
              professional quality to every clean. Get a free quote today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+15302146361"
                className="inline-flex items-center gap-2 rounded-full bg-burgundy px-[50px] py-[22px] text-[18px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (530) 214-6361
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-full border-2 border-burgundy px-[50px] py-[20px] text-[18px] font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              name: "Alexa's Cleaning Services",
              url: "https://www.alexascleaningplacerville.com/areas",
              telephone: "+15302146361",
              email: "alexascleaningplacerville@gmail.com",
              description:
                "Professional house cleaning and commercial cleaning services across El Dorado County CA. Licensed, insured, and trusted by local families for over 15 years.",
              areaServed: [
                { "@type": "City", name: "Placerville" },
                { "@type": "City", name: "Cameron Park" },
                { "@type": "City", name: "El Dorado Hills" },
                { "@type": "City", name: "Diamond Springs" },
                { "@type": "City", name: "Shingle Springs" },
                { "@type": "City", name: "Pollock Pines" },
              ],
              priceRange: "$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "9",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Sarah T." },
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                  reviewBody: "Alexa and her team have been a lifesaver for our office in Placerville. They are professional, thorough, and always on time.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James L." },
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                  reviewBody: "I have tried several cleaning companies in Placerville, but Alexa and her team stand out. They pay attention to every detail and leave my home spotless every time.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Deborah A." },
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                  reviewBody: "Your team is always helpful with speedy turnover and friendly too. Have used them for 15 years. Could not be happier with the consistent quality.",
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
