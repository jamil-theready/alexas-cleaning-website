"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Placerville, Cameron Park, Shingle Springs, Diamond Springs, El Dorado Hills, Pollock Pines, and all surrounding communities in El Dorado County. If you are not sure whether we cover your area, give us a call and we will let you know.",
  },
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "We offer a full range of residential and commercial cleaning services including house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, Airbnb and vacation rental cleaning, office cleaning, church cleaning, warehouse cleaning, and more. We also offer one-time, weekly, bi-weekly, and monthly scheduling options.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Yes. We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. If you have specific allergies or product preferences, let us know and we will accommodate your needs.",
  },
  {
    question: "How much do your cleaning services cost?",
    answer:
      "Our pricing depends on the size of your space, the type of cleaning, and the frequency. We offer free estimates with no obligation. Call us or fill out our contact form for a transparent quote. No hidden fees, no surprises.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. Our team arrives fully equipped with all the cleaning supplies and equipment needed to get the job done. We bring our own eco-friendly products, vacuums, mops, and everything else. You do not need to provide anything.",
  },
  {
    question: "How often should I schedule a cleaning?",
    answer:
      "It depends on your lifestyle and needs. Families with children or pets often benefit from weekly or bi-weekly cleaning. For general maintenance, monthly cleaning works well. We recommend starting with a deep clean and then transitioning to a regular schedule that fits your needs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-light-bg py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[13px] font-semibold tracking-[0.2em] text-burgundy/60 uppercase">
            Common Questions
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-burgundy/10 bg-white transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-burgundy/5"
              >
                <span className="pr-4 text-[16px] font-semibold text-burgundy">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-[20px] text-burgundy/50 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-[15px] leading-relaxed text-dark-gray">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
