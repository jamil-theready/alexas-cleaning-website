"use client";

import { useState } from "react";
import Link from "next/link";

const residential = [
  { name: "House Cleaning", href: "/services/house-cleaning" },
  { name: "Deep Cleaning", href: "/services/deep-cleaning" },
  { name: "Move-In/Move-Out", href: "/services/moving-cleaning" },
  { name: "Eco-Friendly", href: "/services/eco-cleaning" },
  { name: "Window Cleaning", href: "/services/window-cleaning" },
  { name: "Floor Cleaning", href: "/services/floor-cleaning" },
];

const commercial = [
  { name: "Commercial & Office", href: "/services/commercial-cleaning" },
  { name: "Church", href: "/services/church-cleaning" },
  { name: "Warehouse", href: "/services/warehouse-cleaning" },
  { name: "Gym", href: "/services/gym-cleaning" },
  { name: "Daycare", href: "/services/daycare-cleaning" },
  { name: "Medical", href: "/services/medical-cleaning" },
  { name: "Retail Store", href: "/services/retail-cleaning" },
  { name: "Janitorial", href: "/services/janitorial-cleaning" },
];

const frequency = [
  { name: "One-Time", href: "/services/one-time-cleaning" },
  { name: "Weekly", href: "/services/weekly-cleaning" },
  { name: "Bi-Weekly", href: "/services/bi-weekly-cleaning" },
  { name: "Monthly", href: "/services/monthly-cleaning" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <img src="/images/nav-logo.svg" alt="Alexa's Cleaning Services" className="h-10 max-h-10 w-auto max-w-[200px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
            onClick={() => setServicesOpen(!servicesOpen)}
            onMouseEnter={() => setServicesOpen(true)}
          >
            Services
            <svg className={`ml-1 inline h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <Link
            href="/about"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            Contact
          </Link>
          <a
            href="tel:+15302146361"
            className="flex items-center gap-2 rounded-full bg-red-highlight px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
            (530) 214-6361
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-burgundy transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-burgundy transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-burgundy transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Services Mega Dropdown - Desktop */}
      {servicesOpen && (
        <div
          className="hidden border-t border-burgundy/10 bg-white md:block"
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-6 py-8">
            <div>
              <h4 className="mb-3 text-[12px] font-bold tracking-widest text-burgundy/50 uppercase">Residential</h4>
              <ul className="flex flex-col gap-1.5">
                {residential.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[14px] text-dark-gray transition-colors hover:text-burgundy"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[12px] font-bold tracking-widest text-burgundy/50 uppercase">Commercial</h4>
              <ul className="flex flex-col gap-1.5">
                {commercial.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[14px] text-dark-gray transition-colors hover:text-burgundy"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[12px] font-bold tracking-widest text-burgundy/50 uppercase">By Frequency</h4>
              <ul className="flex flex-col gap-1.5">
                {frequency.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[14px] text-dark-gray transition-colors hover:text-burgundy"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/#services"
                className="mt-4 inline-block text-[13px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
                onClick={() => setServicesOpen(false)}
              >
                View All Services &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-border bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-1 px-6 py-4">
          <Link
            href="/#services"
            className="w-full rounded-xl py-3 text-center text-[17px] font-medium text-dark-gray transition-colors hover:bg-light-bg hover:text-burgundy"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="w-full rounded-xl py-3 text-center text-[17px] font-medium text-dark-gray transition-colors hover:bg-light-bg hover:text-burgundy"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="w-full rounded-xl py-3 text-center text-[17px] font-medium text-dark-gray transition-colors hover:bg-light-bg hover:text-burgundy"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-xl py-3 text-center text-[17px] font-medium text-dark-gray transition-colors hover:bg-light-bg hover:text-burgundy"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:+15302146361"
            className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-full bg-burgundy px-6 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (530) 214-6361
          </a>
        </nav>
      </div>
    </header>

    {/* Overlay behind dropdowns */}
    {(mobileOpen || servicesOpen) && (
      <div
        className={`fixed inset-0 z-40 ${mobileOpen ? "bg-black/50 md:hidden" : "hidden bg-black/20 md:block"}`}
        onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
      />
    )}
    </>
  );
}
