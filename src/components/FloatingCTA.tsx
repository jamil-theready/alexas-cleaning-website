"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:+15302146361"
      className={`fixed bottom-[30px] left-1/2 z-50 -translate-x-1/2 rounded-full bg-burgundy px-8 py-4 text-[15px] font-semibold text-white transition-all ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ boxShadow: "0 4px 24px rgba(61, 7, 25, 0.4)" }}
    >
      Get a Free Quote — (530) 214-6361
    </a>
  );
}
