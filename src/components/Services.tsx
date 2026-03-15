const services = [
  {
    title: "House Cleaning",
    description:
      "Regular house cleaning on your schedule. Choose one-time, weekly, bi-weekly, or monthly visits. We handle everything from dusting and vacuuming to kitchen and bathroom deep cleans.",
    frequency: "One-time, weekly, bi-weekly, or monthly",
    icon: "\uD83C\uDFE0",
  },
  {
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom clean that reaches every corner. Baseboards, light fixtures, inside appliances, behind furniture. Perfect for seasonal refreshes or preparing your home for guests.",
    frequency: "One-time or as needed",
    icon: "\u2728",
  },
  {
    title: "Commercial & Office Cleaning",
    description:
      "Keep your workspace professional and hygienic. We clean offices, retail spaces, and commercial properties on flexible schedules that work around your business hours.",
    frequency: "Daily, weekly, or custom schedule",
    icon: "\uD83C\uDFE2",
  },
  {
    title: "Post-Construction Cleanup",
    description:
      "Just finished a renovation or new build? We remove construction dust, debris, and residue to make your space move-in ready. Detailed cleaning of every surface, fixture, and window.",
    frequency: "One-time",
    icon: "\uD83D\uDD28",
  },
  {
    title: "Airbnb & Vacation Rental Turnover",
    description:
      "Fast, reliable turnovers between guests. Fresh linens, spotless bathrooms, restocked essentials. We help you maintain 5-star reviews with consistent, guest-ready results.",
    frequency: "Per turnover",
    icon: "\uD83D\uDECF\uFE0F",
  },
  {
    title: "General Property & Apartment Cleaning",
    description:
      "Move-in and move-out cleaning for apartments and rental properties. We ensure units are spotless for inspections, new tenants, or property showings. Full deposit-back clean guaranteed.",
    frequency: "One-time or recurring",
    icon: "\uD83D\uDDDD\uFE0F",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Our Cleaning Services
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[17px] text-dark-gray">
            From routine house cleaning to specialized commercial work, we
            deliver consistent results across Placerville and El Dorado County.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-light-bg p-8 transition-shadow hover:shadow-lg"
              style={{
                borderRadius: "40px 40px 16px 16px",
                boxShadow: "0 2px 4px #00000040",
              }}
            >
              <span className="mb-4 text-[36px]">{service.icon}</span>
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[24px] text-burgundy">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-[16px] leading-relaxed text-dark-gray">
                {service.description}
              </p>
              <p className="text-[13px] font-semibold text-red-highlight uppercase">
                {service.frequency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
