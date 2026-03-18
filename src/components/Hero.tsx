"use client";

import { useEffect, useState } from "react";

const sparklePositions = [
  { top: "8%", left: "75%", delay: 0, size: 8 },
  { top: "20%", left: "85%", delay: 0.8, size: 6 },
  { top: "45%", left: "90%", delay: 1.6, size: 10 },
  { top: "65%", left: "80%", delay: 2.4, size: 7 },
  { top: "15%", left: "70%", delay: 3.2, size: 5 },
];

function Sparkle({ top, left, delay, size }: { top: string; left: string; delay: number; size: number }) {
  return (
    <div
      className="absolute animate-sparkle"
      style={{ top, left, animationDelay: `${delay}s` }}
    >
      <svg width={size * 2} height={size * 2} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.09 6.26L20 10.27l-5.91 1.73L12 18.26l-2.09-6.26L4 10.27l5.91-1.73L12 2z"
          fill="#fae084"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden bg-light-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-center">
        {/* Content - 62% width on desktop */}
        <div className={`md:w-[62%] transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="mb-4 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            Professional Cleaning in El Dorado County
          </p>
          <h1 className="mb-6 font-[family-name:var(--font-serif)] text-[36px] leading-tight text-burgundy md:text-[60px]" style={{ letterSpacing: "-0.04em" }}>
            Placerville&apos;s Top-Rated House &amp; Commercial Cleaning Service
          </h1>
          <p className="mb-4 max-w-[540px] text-[18px] leading-relaxed text-dark-gray">
            Professional cleaning you can count on. We keep your home or
            business spotless so you can focus on what matters.
          </p>
          {/* USP Badges */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {["Instant Quotes", "No Rescheduling Fees", "No Contracts"].map((badge) => (
              <div key={badge} className="inline-flex items-center gap-2 rounded-full bg-yellow/40 px-4 py-2.5">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="#d4a843"/>
                </svg>
                <span className="text-[14px] font-semibold text-burgundy">
                  {badge}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="group relative inline-block overflow-hidden rounded-full bg-burgundy px-[60px] py-[22px] text-center text-[18px] font-semibold text-white transition-all hover:shadow-lg"
            >
              <span className="relative z-10">Get an Instant Quote</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <span className="text-[14px] text-gray">
              Call or text anytime
            </span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5 text-yellow">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.47l-4.77 2.55.91-5.33L2.27 6.92l5.34-.78L10 1.3z"/>
                  </svg>
                ))}
              </span>
              <span className="text-[14px] font-semibold text-dark-gray">
                5-Star Rated
              </span>
            </div>
            <div className="h-5 w-px bg-gray" />
            <span className="text-[14px] text-dark-gray">
              100+ Happy Customers
            </span>
            <div className="h-5 w-px bg-gray hidden sm:block" />
            <span className="text-[14px] text-dark-gray hidden sm:block">
              Licensed &amp; Insured
            </span>
          </div>
        </div>

        {/* Hero Image - 38% width on desktop */}
        <div className={`relative md:w-[38%] transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Floating sparkles */}
          {sparklePositions.map((s, i) => (
            <Sparkle key={i} {...s} />
          ))}
          <div
            className="aspect-[4/5] overflow-hidden animate-float bg-burgundy/5"
            style={{
              borderRadius: "156px 156px 16px 16px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/images/cleaning-lady.png"
              alt="Professional cleaner from Alexa's Cleaning Services in Placerville"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
