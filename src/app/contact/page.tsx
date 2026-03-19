"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "65a02053-b647-4f1f-8619-b5dbefad1f77");
    formData.append("subject", "New Contact Form - Alexa's Cleaning");
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
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
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
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="We would love to hear from you. Reach out for a free quote or to schedule your first cleaning."
        />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-8 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[14px] font-semibold text-burgundy"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-burgundy/20 bg-light-bg px-4 py-3 text-[15px] text-dark-gray outline-none transition-colors focus:border-burgundy"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[14px] font-semibold text-burgundy"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-burgundy/20 bg-light-bg px-4 py-3 text-[15px] text-dark-gray outline-none transition-colors focus:border-burgundy"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[14px] font-semibold text-burgundy"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-xl border border-burgundy/20 bg-light-bg px-4 py-3 text-[15px] text-dark-gray outline-none transition-colors focus:border-burgundy"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-[14px] font-semibold text-burgundy"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-burgundy/20 bg-light-bg px-4 py-3 text-[15px] text-dark-gray outline-none transition-colors focus:border-burgundy"
                    >
                      <option value="">Select a service</option>
                      <option value="house-cleaning">House Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="commercial-cleaning">
                        Commercial Cleaning
                      </option>
                      <option value="post-construction-cleaning">
                        Post-Construction Cleaning
                      </option>
                      <option value="airbnb-cleaning">Airbnb Cleaning</option>
                      <option value="apartment-cleaning">
                        Apartment Cleaning
                      </option>
                      <option value="church-cleaning">Church Cleaning</option>
                      <option value="warehouse-cleaning">
                        Warehouse Cleaning
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[14px] font-semibold text-burgundy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-burgundy/20 bg-light-bg px-4 py-3 text-[15px] text-dark-gray outline-none transition-colors focus:border-burgundy"
                      placeholder="Tell us about your cleaning needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 rounded-full bg-burgundy px-10 py-4 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Quick Response - top priority */}
              <div className="mb-6 rounded-2xl bg-yellow/30 p-6 text-center">
                <p className="text-[15px] font-semibold text-burgundy">
                  Need a quicker response?
                </p>
                <p className="mt-1 text-[14px] text-dark-gray">
                  Call, text, or email us anytime.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="tel:+15302146361"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (530) 214-6361
                  </a>
                  <a
                    href="mailto:alexascleaningplacerville@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-burgundy px-6 py-2.5 text-[14px] font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>

              {/* More Info */}
              <div className="rounded-2xl bg-light-bg p-8">
                <h3 className="mb-6 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
                  More Info
                </h3>

                {/* Business Hours */}
                <div className="mb-6">
                  <h4 className="mb-2 text-[13px] font-semibold tracking-widest text-dark-gray/50 uppercase">
                    Business Hours
                  </h4>
                  <div className="flex flex-col gap-1.5 text-[15px] text-dark-gray">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mb-6">
                  <h4 className="mb-2 text-[13px] font-semibold tracking-widest text-dark-gray/50 uppercase">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/servicecleaners4you/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark-gray/50 transition-colors hover:text-burgundy">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-dark-gray/50 transition-colors hover:text-burgundy">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-dark-gray/50 transition-colors hover:text-burgundy">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                    </a>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h4 className="mb-2 text-[13px] font-semibold tracking-widest text-dark-gray/50 uppercase">
                    Service Areas
                  </h4>
                  <ul className="flex flex-wrap gap-2 text-[13px]">
                    {[
                      { name: "Placerville", href: "/areas/placerville" },
                      { name: "Cameron Park", href: "/areas/cameron-park" },
                      { name: "Shingle Springs", href: "/areas/shingle-springs" },
                      { name: "Diamond Springs", href: "/areas/diamond-springs" },
                      { name: "El Dorado Hills", href: "/areas/el-dorado-hills" },
                      { name: "Pollock Pines", href: "/areas/pollock-pines" },
                    ].map((area) => (
                      <li key={area.name}>
                        <a href={area.href} className="inline-block rounded-full bg-yellow/30 px-3 py-1 text-burgundy transition-colors hover:bg-yellow/60">{area.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
