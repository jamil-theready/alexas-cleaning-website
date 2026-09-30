"use client";

import { useState, type FormEvent } from "react";
import { appendLeadAttribution } from "@/lib/lead-attribution";

const field = "w-full rounded-xl border border-burgundy/20 bg-light-bg px-3 py-2.5 text-sm text-dark-gray outline-none focus:border-burgundy";
const label = "mb-1 block text-xs font-semibold text-burgundy";

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
      if (response.ok) window.location.href = "/thank-you";
      else throw new Error("Form failed");
    } catch { alert("Something went wrong. Please call us at (530) 214-6361."); setSending(false); }
  }
  return <form onSubmit={submit} className="grid gap-3">
    <div><label className={label} htmlFor="hero-name">Full Name</label><input id="hero-name" name="name" required className={field} /></div>
    <div className="grid grid-cols-2 gap-3"><div><label className={label} htmlFor="hero-email">Email</label><input id="hero-email" name="email" type="email" required className={field} /></div><div><label className={label} htmlFor="hero-phone">Phone</label><input id="hero-phone" name="phone" className={field} /></div></div>
    <div><label className={label} htmlFor="hero-service">Service Type</label><select id="hero-service" name="service" className={field} defaultValue=""><option value="">Select a service</option><option>House Cleaning</option><option>Deep Cleaning</option><option>Commercial Cleaning</option><option>Post-Construction Cleaning</option><option>Airbnb Cleaning</option><option>Apartment Cleaning</option><option>Church Cleaning</option><option>Warehouse Cleaning</option></select></div>
    <div><label className={label} htmlFor="hero-message">Message</label><textarea id="hero-message" name="message" required rows={3} className={field} placeholder="Tell us about your cleaning needs..." /></div>
    <div><label className={label} htmlFor="hero-heard">How did you hear about us? <span className="font-normal">(optional)</span></label><select id="hero-heard" name="how_heard" className={field}><option value="">Select one</option><option>Google Search or Maps</option><option>Google ad</option><option>Facebook or Instagram</option><option>Friend or referral</option><option>Other</option></select></div>
    <button type="submit" disabled={sending} className="rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-burgundy transition-opacity hover:opacity-90 disabled:opacity-60">{sending ? "Sending..." : "Book Cleaning"}</button>
  </form>;
}
