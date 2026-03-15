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
          <p className="mb-8 max-w-[540px] text-[18px] leading-relaxed text-dark-gray">
            Professional cleaning you can count on. We keep your home or
            business spotless so you can focus on what matters. No contracts. No
            rescheduling fees. Just reliable, thorough cleaning every time.
          </p>
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
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[24px]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="text-[14px] font-semibold text-dark-gray">
                5-Star Rated
              </span>
            </div>
            <div className="h-5 w-px bg-gray" />
            <span className="text-[14px] text-dark-gray">
              100+ Happy Customers
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
