export default function CTASection() {
  return (
    <section className="bg-burgundy py-20 md:py-28">
      <div className="mx-auto max-w-[1170px] px-6 text-center">
        <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[32px] text-white md:text-[48px]">
          Ready for a Cleaner Home?
        </h2>
        <p className="mx-auto mb-10 max-w-[550px] text-[18px] leading-relaxed text-white/80">
          Get a free quote in minutes. No contracts, no obligations. Just tell
          us what you need and we will take care of the rest.
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
        <p className="mt-6 text-[14px] text-white/60">
          Serving Placerville, Cameron Park, El Dorado Hills, Diamond Springs &amp; all of El Dorado County
        </p>
      </div>
    </section>
  );
}
