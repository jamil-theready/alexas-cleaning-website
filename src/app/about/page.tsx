import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Alexa's Cleaning Services | Placerville CA",
  description:
    "Learn about Alexa's Cleaning Services in Placerville CA. Licensed, insured, and trusted by hundreds of families across El Dorado County. Founded by K.E. Coleman, M.B.A.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Us"
          subtitle="Professional cleaning built on trust, consistency, and attention to detail."
        />

        {/* Owner Story */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="mb-8 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              Meet the Owner
            </h2>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              Alexa&apos;s Cleaning Services was founded by K.E. Coleman, M.B.A.
              What started as a commitment to providing honest, reliable cleaning
              for local families has grown into one of the most trusted cleaning
              companies in El Dorado County.
            </p>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              Every detail matters. That belief drives everything we do. From the
              products we use to the people we hire, quality is never an
              afterthought. We show up on time. We follow through on every
              promise. And we treat your space with the same respect we would
              give our own home.
            </p>
            <p className="text-[17px] leading-relaxed text-dark-gray">
              Our mission is simple. Deliver exceptional cleaning with zero
              hassle. No contracts locking you in. No fees when life changes your
              plans. Just reliable, professional service from a team that
              genuinely cares about your satisfaction.
            </p>
          </div>
        </section>

        {/* Values / Stats */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              Why Families Trust Us
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: "Licensed",
                  detail: "California License #074540",
                },
                {
                  label: "Fully Insured",
                  detail:
                    "Complete liability coverage for your peace of mind.",
                },
                {
                  label: "No Contracts",
                  detail:
                    "Stay because you love the service, not because of fine print.",
                },
                {
                  label: "No Rescheduling Fees",
                  detail:
                    "Life happens. Change your appointment anytime without penalty.",
                },
                {
                  label: "307+ Residencies Cleaned",
                  detail:
                    "Hundreds of homes and businesses across El Dorado County.",
                },
                {
                  label: "86+ Satisfied Customers",
                  detail:
                    "Real families who count on us week after week.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-[18px] font-semibold text-burgundy">
                    {item.label}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark-gray">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="mb-8 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              Our Approach
            </h2>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              We believe great cleaning starts with great communication. Before
              we ever pick up a mop, we listen. We learn about your space, your
              priorities, and your expectations. Then we build a cleaning plan
              around your life.
            </p>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              Every visit follows a detailed checklist customized to your
              property. We use professional grade supplies and equipment. We
              arrive on schedule. And if something is not right, we make it
              right.
            </p>
            <p className="text-[17px] leading-relaxed text-dark-gray">
              Consistency is what separates a good cleaning company from a great
              one. You will get the same high standard every single visit. That
              is our guarantee.
            </p>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              Proudly Serving El Dorado County
            </h2>
            <p className="mx-auto mb-10 max-w-[600px] text-[17px] leading-relaxed text-dark-gray">
              We provide cleaning services throughout the greater Placerville
              area, including Cameron Park, Shingle Springs, Diamond Springs,
              El Dorado Hills, Pollock Pines, and the surrounding communities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Placerville",
                "Cameron Park",
                "Shingle Springs",
                "Diamond Springs",
                "El Dorado Hills",
                "Pollock Pines",
                "El Dorado County",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-yellow/40 px-5 py-2.5 text-[15px] font-medium text-burgundy"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-burgundy py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[48px]">
              Let Us Take Care of the Cleaning
            </h2>
            <p className="mx-auto mb-10 max-w-[550px] text-[18px] leading-relaxed text-white/80">
              Get a free, no obligation quote. We would love to show you the
              difference a professional cleaning makes.
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
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
