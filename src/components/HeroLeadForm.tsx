"use client";

import { useState, type FormEvent } from "react";
import { appendLeadAttribution } from "@/lib/lead-attribution";

const field = "w-full rounded-lg border border-dark-gray/20 bg-white px-3.5 py-3.5 text-[13px] text-dark-gray outline-none placeholder:text-dark-gray/70 focus:border-burgundy";
const label = "sr-only";

export default function HeroLeadForm() {
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const data = new FormData(event.currentTarget);
    const attribution = appendLeadAttribution(data, "hero_form");
    data.append("access_key", "65a02053-b647-4f1f-8619-b5dbefad1f77");
    data.append("subject", "New Contact Form - Alexa's Cleaning");
    data.append("from_name", "Alexa's Cleaning Website");
    data.append("lead_page", window.location.pathname);
    data.append("lead_referrer", document.referrer || "direct");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      fetch("https://script.google.com/macros/s/AKfycbxVET_StVWwbKJ5WGqk5XzeRZUfe_treYDv6FsHPj10qxyI_dvFI3yAkg6OdSgG2YlE/exec", { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client: "Alexa's Cleaning", name: data.get("name"), email: data.get("email"), phone: data.get("phone"), service: data.get("service"), message: data.get("message"), ...attribution }) }).catch(() => {});
      if (response.ok) {
        type Gtag = (command: string, event: string, params?: Record<string, unknown>) => void;
        const gtag = (window as unknown as { gtag?: Gtag }).gtag;
        if (typeof gtag === "function") {
          gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: window.location.pathname,
            value: 1,
          });
        }
        window.location.href = "/thank-you";
      }
      else throw new Error("Form failed");
    } catch { alert("Something went wrong. Please call us at (530) 214-6361."); setSending(false); }
  }
  return <form onSubmit={submit} className="grid gap-[.9rem]">
    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="grid grid-cols-2 gap-3"><div><label className={label} htmlFor="hero-name">Full Name</label><input id="hero-name" name="name" required className={field} placeholder="Full Name *" /></div><div><label className={label} htmlFor="hero-email">Email</label><input id="hero-email" name="email" type="email" required className={field} placeholder="Email *" /></div></div>
    <div><label className={label} htmlFor="hero-phone">Phone</label><input id="hero-phone" name="phone" className={field} placeholder="Phone" /></div>
    <div><label className={label} htmlFor="hero-service">Service Type</label><select id="hero-service" name="service" className={field} defaultValue=""><option value="">What type of cleaning do you need? *</option><option value="house-cleaning">House Cleaning</option><option value="deep-cleaning">Deep Cleaning</option><option value="commercial-cleaning">Commercial Cleaning</option><option value="post-construction-cleaning">Post-Construction Cleaning</option><option value="airbnb-cleaning">Airbnb Cleaning</option><option value="apartment-cleaning">Apartment Cleaning</option><option value="church-cleaning">Church Cleaning</option><option value="warehouse-cleaning">Warehouse Cleaning</option></select></div>
    <div><label className={label} htmlFor="hero-message">Message</label><textarea id="hero-message" name="message" required rows={1} className={`${field} resize-none`} placeholder="Home details (size, bedrooms, etc.) *" /></div>
    <div><label className={label} htmlFor="hero-heard">How did you hear about us?</label><select id="hero-heard" name="how_heard" className={field} defaultValue=""><option value="">How did you hear about us? (optional)</option><option>Google Search or Maps</option><option>Google ad</option><option>Facebook or Instagram</option><option>Friend or referral</option><option>Other</option></select></div>
    <button type="submit" disabled={sending} className="rounded-lg bg-yellow px-6 py-4 text-[14px] font-bold uppercase text-burgundy transition-opacity hover:opacity-90 disabled:opacity-60">{sending ? "Sending..." : "Get a free estimate"}</button>
  </form>;
}
