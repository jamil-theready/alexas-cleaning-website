export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-light-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto flex max-w-[1170px] flex-col gap-12 px-6 md:flex-row md:items-center">
        {/* Content - 62% width on desktop */}
        <div className="md:w-[62%]">
          <p className="mb-4 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            Professional Cleaning in El Dorado County
          </p>
          <h1 className="mb-6 font-[family-name:var(--font-serif)] text-[36px] leading-tight text-burgundy md:text-[54px]">
            Placerville&apos;s Top-Rated Cleaning Service
          </h1>
          <p className="mb-4 max-w-[540px] text-[18px] leading-relaxed text-dark-gray">
            Professional cleaning you can count on. We keep your home or
            business spotless so you can focus on what matters.
          </p>
          {/* USP Banner */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-yellow/40 px-5 py-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="#3d0719"/>
            </svg>
            <span className="text-[15px] font-semibold text-burgundy">
              No Contracts. No Rescheduling Fees.
            </span>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="tel:+15302146361"
              className="inline-block rounded-full bg-burgundy px-[60px] py-[22px] text-center text-[18px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get an Instant Quote
            </a>
            <span className="text-[14px] text-gray">
              Call or text anytime
            </span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5 text-yellow">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.47l-4.77 2.55.91-5.33L2.27 6.92l5.34-.78L10 1.3z"/>
                  </svg>
                ))}
              </span>
              <span className="text-[14px] font-semibold text-dark-gray">
                5-Star Rated
              </span>
            </div>
            <div className="h-5 w-px bg-gray" />
            <span className="text-[14px] text-dark-gray">
              100+ Happy Customers
            </span>
            <div className="h-5 w-px bg-gray hidden sm:block" />
            <span className="text-[14px] text-dark-gray hidden sm:block">
              Licensed &amp; Insured
            </span>
          </div>
        </div>

        {/* Image placeholder - 38% width on desktop */}
        <div className="md:w-[38%]">
          <div
            className="flex aspect-[4/5] items-center justify-center bg-yellow-light text-center text-[16px] text-dark-gray"
            style={{
              borderRadius: "156px 156px 16px 16px",
            }}
          >
            <div>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-4 text-burgundy opacity-30">
                <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2"/>
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 44l12-12 8 8 12-16 16 20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <p className="font-[family-name:var(--font-serif)] text-[20px] text-burgundy">
                Hero Image
              </p>
              <p className="mt-2 text-[14px] text-gray">
                Professional cleaner at work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
