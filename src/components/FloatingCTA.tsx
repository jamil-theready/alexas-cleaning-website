"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const scrollY = window.scrollY;
      const pastHero = scrollY > 400;

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const nearFooter = footerTop < window.innerHeight + 50;
        setVisible(pastHero && !nearFooter);
      } else {
        setVisible(pastHero);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:+15302146361"
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2.5 rounded-full bg-burgundy px-6 py-3.5 text-[15px] font-semibold text-white transition-all md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ boxShadow: "0 8px 30px rgba(61, 7, 25, 0.45), 0 2px 8px rgba(0, 0, 0, 0.15)" }}
    >
      <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      (530) 214-6361
    </a>
  );
}
