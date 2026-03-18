const reasons = [
  {
    title: "No Contracts Ever",
    description:
      "We earn your business every visit. No long-term commitments, no cancellation fees. Stay because you want to, not because you have to.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <line x1="10" y1="12" x2="22" y2="12" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="10" y1="17" x2="18" y2="17" stroke="#3d0719" strokeWidth="1.5"/>
        <path d="M8 24l16-16" stroke="#ab1818" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "No Rescheduling Fees",
    description:
      "Life happens. If you need to reschedule, we make it easy and free. Flexibility is built into how we work.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="22" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <line x1="4" y1="12" x2="28" y2="12" stroke="#3d0719" strokeWidth="1.5"/>
        <line x1="10" y1="4" x2="10" y2="8" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <line x1="22" y1="4" x2="22" y2="8" stroke="#3d0719" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 20l3 3 5-6" stroke="#3d0719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Trusted Local Team",
    description:
      "We live and work in El Dorado County. Every member of our team is background-checked, insured, and trained to our high standards.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="5" stroke="#3d0719" strokeWidth="2"/>
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#3d0719" strokeWidth="2"/>
        <path d="M22 10l2 2 4-4" stroke="#3d0719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Consistent Quality",
    description:
      "We use detailed checklists for every job. You get the same thorough clean every time, not a different experience each visit.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#3d0719" strokeWidth="2"/>
        <path d="M11 12l2 2 4-4" stroke="#3d0719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 19l2 2 4-4" stroke="#3d0719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-light-bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            The Alexa&apos;s Difference
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Why Placerville Chooses Us
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[17px] text-dark-gray">
            We built this business on trust, reliability, and doing the job
            right. Here is what sets us apart from other cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white p-8 transition-shadow hover:shadow-md"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            >
              <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-burgundy/5">
                {reason.icon}
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
                {reason.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-dark-gray">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* USP Banner */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-full bg-burgundy px-8 py-5 sm:flex-row sm:gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="currentColor"/>
            </svg>
            <span className="text-[15px] font-semibold">No Contracts</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="currentColor"/>
            </svg>
            <span className="text-[15px] font-semibold">No Rescheduling Fees</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="currentColor"/>
            </svg>
            <span className="text-[15px] font-semibold">Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="currentColor"/>
            </svg>
            <span className="text-[15px] font-semibold">Instant Quotes</span>
          </div>
        </div>

        {/* Service Area callout */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-yellow">
          <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:gap-10 md:p-12">
            <div className="shrink-0">
              <img
                src="/images/el-dorado-seal.jpg"
                alt="El Dorado County California official seal"
                className="h-24 w-24 rounded-full border-4 border-white/80 md:h-32 md:w-32"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[28px] text-burgundy">
                Proudly Serving El Dorado County
              </h3>
              <p className="max-w-[600px] text-[17px] leading-relaxed text-dark-gray">
                Based in Placerville, we serve homes and businesses throughout El
                Dorado County including Cameron Park, Shingle Springs, Diamond
                Springs, El Dorado Hills, and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
