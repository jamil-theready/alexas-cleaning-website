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
                alt="Alejandra, Owner of Alexa's Cleaning Services in Placerville"
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
              Alejandra Ortiz
            </h2>
            <p className="mb-8 text-[17px] leading-relaxed text-white/70">
              Alejandra started cleaning homes in Placerville over 15 years ago
              with nothing but a car full of supplies and a commitment to doing
              things right. What began as a one-woman operation grew into
              Alexa&apos;s Cleaning Services, now one of the most trusted
              cleaning companies in El Dorado County. She still personally
              trains every member of her team and inspects jobs to make sure
              they meet her standards. For Alejandra, every home she cleans is
              a reflection of her name and her word.
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
                <p className="text-[28px] font-bold text-yellow">15+</p>
                <p className="text-[14px] text-white/60">Years in Business</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-yellow">500+</p>
                <p className="text-[14px] text-white/60">Homes Cleaned</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-yellow">5.0</p>
                <p className="text-[14px] text-white/60">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
