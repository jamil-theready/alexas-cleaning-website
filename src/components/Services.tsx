import Link from "next/link";

const serviceSlugMap: Record<string, string> = {
  "House Cleaning": "/services/house-cleaning",
  "Deep Cleaning": "/services/deep-cleaning",
  "Commercial & Office Cleaning": "/services/commercial-cleaning",
  "Post-Construction Cleanup": "/services/post-construction-cleaning",
  "Airbnb & Vacation Rental Turnover": "/services/airbnb-cleaning",
  "Property & Apartment Cleaning": "/services/apartment-cleaning",
  "Church Cleaning": "/services/church-cleaning",
  "Warehouse Cleaning": "/services/warehouse-cleaning",
  "Gym Cleaning": "/services/gym-cleaning",
  "Daycare Cleaning": "/services/daycare-cleaning",
  "Medical Cleaning": "/services/medical-cleaning",
  "Eco-Friendly Cleaning": "/services/eco-cleaning",
  "Floor Cleaning": "/services/floor-cleaning",
  "Disinfecting & Sanitization": "/services/disinfecting-cleaning",
  "Retail Store Cleaning": "/services/retail-cleaning",
  "Weekly Cleaning": "/services/weekly-cleaning",
  "Monthly Cleaning": "/services/monthly-cleaning",
  "Move-In/Move-Out Cleaning": "/services/moving-cleaning",
};

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
  {
    title: "Church Cleaning",
    description:
      "Respectful, thorough cleaning for houses of worship. Sanctuaries, fellowship halls, classrooms, and restrooms kept spotless for your congregation.",
    frequency: "Weekly or custom schedule",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4v8M14 8h8" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 16l8-4 8 4v14H10V16z" stroke="#3d0719" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 30v-6a3 3 0 016 0v6" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Warehouse Cleaning",
    description:
      "Industrial strength cleaning for warehouses and distribution centers. Floor scrubbing, break room sanitization, and high dust removal to keep your facility safe.",
    frequency: "Weekly, biweekly, or monthly",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="12" width="28" height="20" rx="1" stroke="#3d0719" strokeWidth="2"/>
        <path d="M4 12l14-8 14 8" stroke="#3d0719" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="12" y1="20" x2="12" y2="32" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="24" y1="20" x2="24" y2="32" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Gym Cleaning",
    description:
      "Keep your fitness facility fresh and hygienic. Equipment sanitization, locker room disinfection, and floor care that meets the demands of high traffic gyms.",
    frequency: "Daily or custom schedule",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="15" y="14" width="6" height="8" rx="1" stroke="#3d0719" strokeWidth="2"/>
        <rect x="8" y="16" width="7" height="4" rx="1" stroke="#3d0719" strokeWidth="1.5"/>
        <rect x="21" y="16" width="7" height="4" rx="1" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="5" y1="18" x2="8" y2="18" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="18" x2="31" y2="18" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Daycare Cleaning",
    description:
      "Specialized cleaning for childcare centers using nontoxic, child safe products. Toy sanitization, play area disinfection, and restroom care for healthy little ones.",
    frequency: "Daily or custom schedule",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="12" r="5" stroke="#3d0719" strokeWidth="2"/>
        <path d="M10 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="10" r="3" stroke="#3d0719" strokeWidth="1.5"/>
        <circle cx="8" cy="10" r="3" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Medical Cleaning",
    description:
      "Healthcare grade cleaning for medical and dental offices. OSHA compliant protocols, hospital grade disinfectants, and meticulous exam room sanitization.",
    frequency: "Daily or five days per week",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="8" width="20" height="20" rx="3" stroke="#3d0719" strokeWidth="2"/>
        <line x1="18" y1="13" x2="18" y2="23" stroke="#3d0719" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="13" y1="18" x2="23" y2="18" stroke="#3d0719" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Cleaning",
    description:
      "Green cleaning with nontoxic, biodegradable products. Safe for children, pets, and allergy sensitive households. Same thorough results, gentler on the planet.",
    frequency: "One-time, weekly, biweekly, or monthly",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 32V18" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 18c-4-6-12-4-12-12 8 0 10 6 12 12z" stroke="#3d0719" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M18 22c4-6 12-4 12-12-8 0-10 6-12 12z" stroke="#3d0719" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Floor Cleaning",
    description:
      "Dedicated floor care for hardwood, tile, laminate, and vinyl surfaces. Grout scrubbing, stain removal, and surface specific treatment to restore and protect your floors.",
    frequency: "One-time or recurring",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="24" width="28" height="4" rx="1" stroke="#3d0719" strokeWidth="2"/>
        <path d="M8 24V10l6-4v18" stroke="#3d0719" strokeWidth="1.5"/>
        <path d="M14 24V10l6-4v18" stroke="#3d0719" strokeWidth="1.5"/>
        <path d="M20 24V10l6-4v18" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Disinfecting & Sanitization",
    description:
      "Professional disinfection using EPA approved products. Targets high touch surfaces and eliminates bacteria and viruses for a healthier home or office.",
    frequency: "One-time, weekly, or seasonal",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M14 4h8v6h-8V4z" stroke="#3d0719" strokeWidth="2"/>
        <path d="M12 10h12l2 4H10l2-4z" stroke="#3d0719" strokeWidth="1.5"/>
        <rect x="10" y="14" width="16" height="18" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <path d="M18 19v6M15 22h6" stroke="#3d0719" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Retail Store Cleaning",
    description:
      "Keep your storefront inviting for customers. Sales floor maintenance, fitting room sanitization, and display dusting that makes a great first impression.",
    frequency: "Daily or custom schedule",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="14" width="24" height="18" rx="1" stroke="#3d0719" strokeWidth="2"/>
        <path d="M6 14l3-8h18l3 8" stroke="#3d0719" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="14" y="22" width="8" height="10" stroke="#3d0719" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Weekly Cleaning",
    description:
      "Consistent weekly service that keeps your home in peak condition. Same team, same day, same thorough results. Buildup never stands a chance.",
    frequency: "Weekly",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="8" width="24" height="22" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <line x1="6" y1="14" x2="30" y2="14" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="12" y1="4" x2="12" y2="10" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="4" x2="24" y2="10" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="20" r="1.5" fill="#3d0719"/>
        <circle cx="18" cy="20" r="1.5" fill="#3d0719"/>
        <circle cx="23" cy="20" r="1.5" fill="#3d0719"/>
      </svg>
    ),
  },
  {
    title: "Monthly Cleaning",
    description:
      "A thorough monthly refresh for homes that stay relatively tidy. More detailed than a routine visit, perfect for maintaining a clean baseline all year.",
    frequency: "Monthly",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="8" width="24" height="22" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <line x1="6" y1="14" x2="30" y2="14" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="12" y1="4" x2="12" y2="10" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="4" x2="24" y2="10" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 21l3 3 5-6" stroke="#3d0719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description:
      "Comprehensive cleaning for moving day. Inside appliances, cabinets, closets, and every surface inspected by landlords. Protect your deposit or start fresh.",
    frequency: "One-time",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="12" width="16" height="16" rx="1" stroke="#3d0719" strokeWidth="2"/>
        <path d="M12 12V8h12v12h-4" stroke="#3d0719" strokeWidth="1.5"/>
        <path d="M14 20h6M14 24h4" stroke="#3d0719" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 18l4-2v12l-4-2" stroke="#3d0719" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            What We Offer
          </p>
          <div className="relative inline-block">
            <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
              Our Cleaning Services
            </h2>
            <div className="mx-auto mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-burgundy/30" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow">
                <path d="M12 2l2.09 6.26L20 10.27l-5.91 1.73L12 18.26l-2.09-6.26L4 10.27l5.91-1.73L12 2z" fill="currentColor"/>
              </svg>
              <span className="h-px w-12 bg-burgundy/30" />
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-[600px] text-[17px] text-dark-gray">
            From routine house cleaning to specialized commercial work, we
            deliver consistent results across Placerville and El Dorado County.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-light-bg p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy/[0.03]"
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(61,7,25,0.06)",
              }}
            >
              <div className="mb-5 flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-burgundy/5">
                {service.icon}
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
                {serviceSlugMap[service.title] ? (
                  <Link href={serviceSlugMap[service.title]} className="hover:underline">
                    {service.title}
                  </Link>
                ) : (
                  service.title
                )}
              </h3>
              <p className="mb-4 flex-1 text-[15px] leading-relaxed text-dark-gray">
                {service.description}
              </p>
              <p className="mb-4 text-[13px] font-semibold tracking-wide text-red-highlight uppercase">
                {service.frequency}
              </p>
              {serviceSlugMap[service.title] && (
                <Link
                  href={serviceSlugMap[service.title]}
                  className="text-[14px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
                >
                  Learn More &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
