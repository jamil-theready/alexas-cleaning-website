export default function ImageBreaker() {
  return (
    <section className="bg-burgundy py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <p className="mb-6 text-[14px] font-semibold tracking-widest text-yellow uppercase">
          Trusted By Our Customers
        </p>

        {/* Review platforms */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Google Reviews */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-white">Google</span>
            <span className="flex gap-0.5 text-yellow">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.47l-4.77 2.55.91-5.33L2.27 6.92l5.34-.78L10 1.3z" />
                </svg>
              ))}
            </span>
            <span className="text-[16px] font-semibold text-white">5.0</span>
            <span className="text-[14px] text-white/70">9 reviews</span>
          </div>

          {/* Angi */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-white">Angi</span>
            <span className="flex gap-0.5 text-yellow">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.47l-4.77 2.55.91-5.33L2.27 6.92l5.34-.78L10 1.3z" />
                </svg>
              ))}
            </span>
          </div>

          {/* Yelp */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-white">Yelp</span>
            <span className="flex gap-0.5 text-yellow">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.47l-4.77 2.55.91-5.33L2.27 6.92l5.34-.78L10 1.3z" />
                </svg>
              ))}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div>
            <p className="font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[44px]">
              500+
            </p>
            <p className="text-[14px] text-white/70">Homes Cleaned</p>
          </div>
          <div className="hidden h-12 w-px bg-white/20 sm:block" />
          <div>
            <p className="font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[44px]">
              15+
            </p>
            <p className="text-[14px] text-white/70">Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  );
}
