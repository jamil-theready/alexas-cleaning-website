"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

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

function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "65a02053-b647-4f1f-8619-b5dbefad1f77");
    formData.append("subject", "New Hero Form - Alexa's Cleaning");
    formData.append("from_name", "Alexa's Cleaning Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Log to Google Sheet (fire and forget)
      fetch("https://script.google.com/macros/s/AKfycbxVET_StVWwbKJ5WGqk5XzeRZUfe_treYDv6FsHPj10qxyI_dvFI3yAkg6OdSgG2YlE/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client: "Alexa's Cleaning",
          name: `${formData.get("first_name")} ${formData.get("last_name")}`,
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("frequency"),
          message: formData.get("message"),
        }),
      }).catch(() => {});

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        setIsSubmitting(false);
        alert("Something went wrong. Please call us at (530) 214-6361.");
      }
    } catch {
      setIsSubmitting(false);
      alert("Something went wrong. Please call us at (530) 214-6361.");
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg" style={{ boxShadow: "0 8px 30px rgba(61, 7, 25, 0.12)" }}>
      <h2 className="mb-4 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
        Get a Free Estimate
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="hero_first_name" className="sr-only">First Name</label>
            <input
              type="text"
              id="hero_first_name"
              name="first_name"
              required
              placeholder="First Name"
              className="w-full rounded-lg border border-burgundy/20 bg-light-bg px-3 py-2.5 text-[14px] text-dark-gray outline-none transition-colors focus:border-burgundy"
            />
          </div>
          <div>
            <label htmlFor="hero_last_name" className="sr-only">Last Name</label>
            <input
              type="text"
              id="hero_last_name"
              name="last_name"
              required
              placeholder="Last Name"
              className="w-full rounded-lg border border-burgundy/20 bg-light-bg px-3 py-2.5 text-[14px] text-dark-gray outline-none transition-colors focus:border-burgundy"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="hero_phone" className="sr-only">Phone</label>
            <input
              type="tel"
              id="hero_phone"
              name="phone"
              placeholder="Phone"
              className="w-full rounded-lg border border-burgundy/20 bg-light-bg px-3 py-2.5 text-[14px] text-dark-gray outline-none transition-colors focus:border-burgundy"
            />
          </div>
          <div>
            <label htmlFor="hero_email" className="sr-only">Email</label>
            <input
              type="email"
              id="hero_email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-lg border border-burgundy/20 bg-light-bg px-3 py-2.5 text-[14px] text-dark-gray outline-none transition-colors focus:border-burgundy"
            />
          </div>
        </div>
        <div>
          <label htmlFor="hero_frequency" className="sr-only">Cleaning Frequency</label>
          <select
            id="hero_frequency"
            name="frequency"
            className="w-full rounded-lg border border-burgundy/20 bg-light-bg px-3 py-2.5 text-[14px] text-dark-gray outline-none transition-colors focus:border-burgundy"
          >
            <option value="">Cleaning Frequency</option>
            <option value="one-time">One Time</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div>
          <label htmlFor="hero_message" className="sr-only">Message</label>
          <textarea
            id="hero_message"
            name="message"
            rows={2}
            placeholder="Tell us about your cleaning needs..."
            className="w-full resize-none rounded-lg border border-burgundy/20 bg-light-bg px-3 py-2.5 text-[14px] text-dark-gray outline-none transition-colors focus:border-burgundy"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-burgundy px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Get My Free Quote"}
        </button>
      </form>
      {/* License badge */}
      <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-light-bg px-3 py-2">
        <svg className="h-4 w-4 shrink-0 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="text-[12px] font-medium text-burgundy/80">
          Licensed &amp; Insured | License #074540 | County of El Dorado
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden bg-light-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        {/* Content */}
        <div className={`lg:w-[55%] transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
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
          {/* Mobile: CTA button; Desktop: hidden */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:hidden">
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
          {/* Mobile license badge */}
          <div className="mt-6 flex items-center gap-2 lg:hidden">
            <svg className="h-4 w-4 shrink-0 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[13px] font-medium text-burgundy/80">
              Licensed &amp; Insured | License #074540 | County of El Dorado
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

        {/* Desktop: Inline form; Mobile: Hero image */}
        <div className={`lg:w-[45%] transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Desktop form */}
          <div className="hidden lg:block">
            <HeroForm />
          </div>
          {/* Mobile hero image */}
          <div className="relative lg:hidden">
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
                src="/images/cleaning-lady.jpg"
                alt="Professional cleaner from Alexa's Cleaning Services in Placerville"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
