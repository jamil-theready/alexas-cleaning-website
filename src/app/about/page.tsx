import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Alexa's Cleaning Services | Placerville CA",
  description:
    "Learn about Alexa's Cleaning Services in Placerville CA. Founded by Alejandra Ortiz with 15+ years of experience. Licensed, insured, and trusted across El Dorado County.",
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
              Alejandra Ortiz started cleaning homes in Placerville over 15
              years ago with nothing but a car full of supplies and a promise
              to do things the right way. What began as a solo operation
              quickly grew through word of mouth. Neighbors told neighbors.
              Clients became friends. And Alexa&apos;s Cleaning Services became
              one of the most trusted names in El Dorado County.
            </p>
            <p className="mb-6 text-[17px] leading-relaxed text-dark-gray">
              Alejandra still personally trains every team member and holds
              each job to her own standards. She believes that every home
              deserves the same level of care, whether it is a first-time deep
              clean or a weekly visit. That hands-on approach is what keeps
              families coming back year after year.
            </p>
            <p className="text-[17px] leading-relaxed text-dark-gray">
              No contracts. No rescheduling fees. No hidden charges. Just
              honest, reliable cleaning from a team that treats your home like
              their own. That is the standard Alejandra set 15 years ago, and
              it has not changed.
            </p>
          </div>
        </section>

        {/* Team Photo */}
        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-3 text-[14px] font-semibold tracking-widest text-burgundy/50 uppercase">
              Our Team
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[40px]">
              The People Behind Every Clean
            </h2>
            <p className="mx-auto mb-10 max-w-[600px] text-[17px] leading-relaxed text-dark-gray">
              Every member of our crew is hand-picked and personally trained by
              Alejandra. We show up in uniform, on time, and ready to make your
              space shine.
            </p>
            <img
              src="/images/alexas-cleaning-team-placerville.jpg"
              alt="Alexa's Cleaning Services team in Placerville CA ready to clean your home"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
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
                  label: "500+ Homes Cleaned",
                  detail:
                    "Hundreds of homes and businesses across El Dorado County.",
                },
                {
                  label: "15+ Years of Experience",
                  detail:
                    "Serving Placerville and surrounding areas since day one.",
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
