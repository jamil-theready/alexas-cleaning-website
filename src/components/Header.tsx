"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: "1px solid #540922" }}
    >
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-[family-name:var(--font-serif)] text-2xl text-burgundy">
          Alexa&apos;s Cleaning
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="text-[15px] font-medium text-dark-gray transition-colors hover:text-burgundy"
          >
            Contact
          </a>
          <a
            href="tel:+15302146361"
            className="rounded-full bg-burgundy px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="flex flex-col items-center gap-4 border-t border-border bg-white px-6 py-6 md:hidden">
          <a
            href="#services"
            className="text-[18px] text-dark-gray"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-[18px] text-dark-gray"
            onClick={() => setMobileOpen(false)}
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="text-[18px] text-dark-gray"
            onClick={() => setMobileOpen(false)}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="text-[18px] text-dark-gray"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <a
            href="tel:+15302146361"
            className="mt-2 rounded-full bg-burgundy px-6 py-3 text-[16px] font-semibold text-white"
          >
            (530) 214-6361
          </a>
        </nav>
      )}
    </header>
  );
}
