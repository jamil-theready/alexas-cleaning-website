export default function AboutOwner() {
  return (
    <section className="bg-burgundy py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Owner Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/cleaning-lady.png"
                alt="K.E. Coleman, Owner of Alexa's Cleaning Services"
                className="h-[320px] w-[320px] rounded-full border-4 border-[#c4365a] object-cover md:h-[400px] md:w-[400px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-[14px] font-semibold tracking-widest uppercase text-yellow">
              Meet the Owner
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] leading-tight text-white md:text-[48px]">
              K.E. Coleman, M.B.A
            </h2>
            <p className="mb-8 text-[17px] leading-relaxed text-white/70">
              With a Master of Business Administration and a lifelong passion for
              creating clean, healthy spaces, K.E. Coleman founded Alexa&apos;s
              Cleaning Services to bring professional grade cleaning to every
              home in El Dorado County. She leads every aspect of the business
              with the same attention to detail you will find in every clean we
              deliver.
            </p>

            {/* Urgency Counter */}
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <p className="text-[15px] font-medium text-white/90">
                34 cleans booked in the last 24 hours
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-[28px] font-bold text-yellow">307+</p>
                <p className="text-[14px] text-white/60">Homes</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-yellow">86+</p>
                <p className="text-[14px] text-white/60">Customers</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-yellow">5.0</p>
                <p className="text-[14px] text-white/60">Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
