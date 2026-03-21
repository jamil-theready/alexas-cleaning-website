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
                href="https://www.yelp.com/biz/alexas-cleaning-services-placerville"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="text-white/60 transition-colors hover:text-yellow"
              >
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.285 7.285 0 012.1 3.596c.243.81-.51 1.38-1.13 1.115zm-3.977 5.37l-2.365-4.59c-.467-.906.4-1.9 1.353-1.55l4.947 1.8c.806.294.944 1.164.42 1.756a7.268 7.268 0 01-3.39 2.268c-.412.134-.774.026-.965-.684zM12.46 20.677l-.96-5.167c-.19-1.02 1.02-1.7 1.832-1.028l3.878 3.177c.64.524.41 1.4-.33 1.768a7.29 7.29 0 01-3.907.712c-.357-.035-.457-.96-.513-1.462zm-5.78-3.397a7.285 7.285 0 01-1.56-3.758c-.1-.845.766-1.335 1.392-.98l4.56 2.58c.87.49.66 1.757-.318 1.926l-5.035.87c-.34.06-.67-.182-1.04-.638zm1.57-7.9a7.285 7.285 0 012.927-2.84c.727-.43 1.51.2 1.34 1.06l-1.52 5.06c-.254.848-1.376.95-1.764.16L7.21 10.16c-.196-.388-.12-.47.04-.78z" />
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
