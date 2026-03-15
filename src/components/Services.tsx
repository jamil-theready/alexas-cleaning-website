const services = [
  {
    title: "House Cleaning",
    description:
      "Regular house cleaning on your schedule. Choose one-time, weekly, bi-weekly, or monthly visits. We handle everything from dusting and vacuuming to kitchen and bathroom deep cleans.",
    frequency: "One-time, weekly, bi-weekly, or monthly",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 3L3 15h4v15h10v-9h2v9h10V15h4L18 3z" stroke="#3d0719" strokeWidth="2" fill="none"/>
        <rect x="15" y="20" width="6" height="10" stroke="#3d0719" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom clean that reaches every corner. Baseboards, light fixtures, inside appliances, behind furniture. Perfect for seasonal refreshes or preparing your home for guests.",
    frequency: "One-time or as needed",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#3d0719" strokeWidth="2"/>
        <path d="M18 8v10l6 6" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 4l2 3M24 4l-2 3" stroke="#3d0719" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Commercial & Office Cleaning",
    description:
      "Keep your workspace professional and hygienic. We clean offices, retail spaces, and commercial properties on flexible schedules that work around your business hours.",
    frequency: "Daily, weekly, or custom schedule",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="28" height="22" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <rect x="10" y="4" width="16" height="8" rx="1" stroke="#3d0719" strokeWidth="2"/>
        <line x1="12" y1="18" x2="24" y2="18" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="12" y1="23" x2="20" y2="23" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Post-Construction Cleanup",
    description:
      "Just finished a renovation or new build? We remove construction dust, debris, and residue to make your space move-in ready. Detailed cleaning of every surface, fixture, and window.",
    frequency: "One-time",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 32l10-20 4 8 6-16" stroke="#3d0719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="22" y="8" width="8" height="8" stroke="#3d0719" strokeWidth="2" fill="none"/>
        <line x1="26" y1="16" x2="26" y2="28" stroke="#3d0719" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Airbnb & Vacation Rental Turnover",
    description:
      "Fast, reliable turnovers between guests. Fresh linens, spotless bathrooms, restocked essentials. We help you maintain 5-star reviews with consistent, guest-ready results.",
    frequency: "Per turnover",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M4 28V14l14-10 14 10v14a2 2 0 01-2 2H6a2 2 0 01-2-2z" stroke="#3d0719" strokeWidth="2"/>
        <path d="M12 30v-8a2 2 0 012-2h8a2 2 0 012 2v8" stroke="#3d0719" strokeWidth="2"/>
        <circle cx="26" cy="8" r="5" stroke="#3d0719" strokeWidth="1.5"/>
        <path d="M24 8l1.5 1.5L28 6" stroke="#3d0719" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Property & Apartment Cleaning",
    description:
      "Move-in and move-out cleaning for apartments and rental properties. We ensure units are spotless for inspections, new tenants, or property showings. Full deposit-back clean guaranteed.",
    frequency: "One-time or recurring",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <rect x="12" y="10" width="5" height="5" rx="1" stroke="#3d0719" strokeWidth="1.5"/>
        <rect x="19" y="10" width="5" height="5" rx="1" stroke="#3d0719" strokeWidth="1.5"/>
        <rect x="12" y="19" width="5" height="5" rx="1" stroke="#3d0719" strokeWidth="1.5"/>
        <rect x="19" y="19" width="5" height="5" rx="1" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
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
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <div className="mb-5 flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-burgundy/5">
                {service.icon}
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-[15px] leading-relaxed text-dark-gray">
                {service.description}
              </p>
              <p className="text-[13px] font-semibold tracking-wide text-red-highlight uppercase">
                {service.frequency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
