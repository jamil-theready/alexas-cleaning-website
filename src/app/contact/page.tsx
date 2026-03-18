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
              <div className="rounded-2xl bg-light-bg p-8">
                <h3 className="mb-6 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
                  Get in Touch
                </h3>

                <div className="mb-6">
                  <h4 className="mb-2 text-[13px] font-semibold tracking-widest text-dark-gray/50 uppercase">
                    Phone
                  </h4>
                  <a
                    href="tel:+15302146361"
                    className="text-[16px] font-medium text-burgundy transition-colors hover:text-red-highlight"
                  >
                    (530) 214-6361
                  </a>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-[13px] font-semibold tracking-widest text-dark-gray/50 uppercase">
                    Email
                  </h4>
                  <a
                    href="mailto:alexascleaningplacerville@gmail.com"
                    className="text-[15px] font-medium text-burgundy transition-colors hover:text-red-highlight"
                  >
                    alexascleaningplacerville@gmail.com
                  </a>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-[13px] font-semibold tracking-widest text-dark-gray/50 uppercase">
                    Service Area
                  </h4>
                  <p className="text-[15px] leading-relaxed text-dark-gray">
                    📍 Placerville & surrounding areas
                  </p>
                </div>

                <div>
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
              </div>

              <div className="mt-6 rounded-2xl bg-yellow/30 p-6 text-center">
                <p className="text-[15px] font-semibold text-burgundy">
                  Need a quick response?
                </p>
                <p className="mt-1 text-[14px] text-dark-gray">
                  Call or text us anytime for the fastest reply.
                </p>
                <a
                  href="tel:+15302146361"
                  className="mt-4 inline-block rounded-full bg-burgundy px-8 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Call (530) 214-6361
                </a>
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
