export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 text-white"
      style={{
        background: "linear-gradient(180deg, #010528 0%, #000000 100%)",
      }}
    >
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand / About */}
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-serif)] text-[24px] text-white">
              Alexa&apos;s Cleaning
            </h3>
            <p className="mb-4 text-[15px] leading-relaxed text-white/70">
              Professional cleaning services for homes and businesses in
              Placerville and El Dorado County. Licensed, insured, and
              committed to your satisfaction.
            </p>
            <p className="text-[14px] font-semibold text-yellow">
              No contracts. No rescheduling fees.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-[14px] font-semibold tracking-widest uppercase text-white/50">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-[15px] text-white/70">
              <a
                href="tel:+15302146361"
                className="transition-colors hover:text-yellow"
              >
                (530) 214-6361
              </a>
              <a
                href="mailto:alexascleaningplacerville@gmail.com"
                className="transition-colors hover:text-yellow"
              >
                alexascleaningplacerville@gmail.com
              </a>
              <p>
                2838 Schnell School Rd #2
                <br />
                Placerville, CA 95667
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-[14px] font-semibold tracking-widest uppercase text-white/50">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2 text-[15px] text-white/70">
              <li>Placerville</li>
              <li>Cameron Park</li>
              <li>Shingle Springs</li>
              <li>Diamond Springs</li>
              <li>El Dorado Hills</li>
              <li>Pollock Pines</li>
              <li>All of El Dorado County</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Alexa&apos;s Cleaning Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
