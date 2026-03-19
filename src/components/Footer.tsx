import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 text-white bg-burgundy"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About */}
          <div>
            <Link href="/">
              <img src="/images/nav-logo.svg" alt="Alexa's Cleaning Services" className="mb-4 h-10 max-h-10 w-auto max-w-[200px] brightness-0 invert" />
            </Link>
            <p className="mb-4 text-[15px] leading-relaxed text-white/70">
              Professional cleaning services for homes and businesses in
              Placerville and El Dorado County. Licensed, insured, and
              committed to your satisfaction.
            </p>
            <p className="text-[14px] font-semibold text-yellow">
              No contracts. No rescheduling fees.
            </p>
            {/* Social Media */}
            <div className="mt-4 flex gap-6 md:gap-4">
              <a
                href="https://www.instagram.com/servicecleaners4you/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 transition-colors hover:text-yellow"
              >
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-yellow"
              >
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white/60 transition-colors hover:text-yellow"
              >
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[14px] font-semibold tracking-widest uppercase text-white/50">
              Services
            </h4>
            <ul className="flex flex-col gap-2 text-[15px] text-white/70">
              <li><Link href="/services/house-cleaning" className="transition-colors hover:text-yellow">House Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning" className="transition-colors hover:text-yellow">Deep Cleaning</Link></li>
              <li><Link href="/services/commercial-cleaning" className="transition-colors hover:text-yellow">Commercial Cleaning</Link></li>
              <li><Link href="/services/post-construction-cleaning" className="transition-colors hover:text-yellow">Post-Construction</Link></li>
              <li><Link href="/services/airbnb-cleaning" className="transition-colors hover:text-yellow">Airbnb Cleaning</Link></li>
              <li><Link href="/services/apartment-cleaning" className="transition-colors hover:text-yellow">Apartment Cleaning</Link></li>
              <li><Link href="/services/church-cleaning" className="transition-colors hover:text-yellow">Church Cleaning</Link></li>
              <li><Link href="/services/warehouse-cleaning" className="transition-colors hover:text-yellow">Warehouse Cleaning</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-[14px] font-semibold tracking-widest uppercase text-white/50">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2 text-[15px] text-white/70">
              <li><Link href="/areas/placerville" className="transition-colors hover:text-yellow">Placerville</Link></li>
              <li><Link href="/areas/cameron-park" className="transition-colors hover:text-yellow">Cameron Park</Link></li>
              <li><Link href="/areas/shingle-springs" className="transition-colors hover:text-yellow">Shingle Springs</Link></li>
              <li><Link href="/areas/diamond-springs" className="transition-colors hover:text-yellow">Diamond Springs</Link></li>
              <li><Link href="/areas/el-dorado-hills" className="transition-colors hover:text-yellow">El Dorado Hills</Link></li>
              <li><Link href="/areas/pollock-pines" className="transition-colors hover:text-yellow">Pollock Pines</Link></li>
              <li><Link href="/areas" className="transition-colors hover:text-yellow">All of El Dorado County</Link></li>
            </ul>
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
                className="break-all transition-colors hover:text-yellow"
              >
                alexascleaningplacerville@gmail.com
              </a>
              <p>📍 Placerville & surrounding areas</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Alexa&apos;s Cleaning Services.
            All rights reserved.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[13px] text-white/40">
            <Link href="/privacy-policy" className="transition-colors hover:text-yellow">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="transition-colors hover:text-yellow">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="mt-2 text-[12px] text-white/30">
            License #074540, County of El Dorado
          </p>
        </div>
      </div>
    </footer>
  );
}
