import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Alexa's Cleaning Services",
  description: "Your message has been received. We will get back to you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-light-bg px-6">
        <div className="max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[36px] text-burgundy md:text-[44px]">
            Message Received
          </h1>
          <p className="mb-2 text-[17px] leading-relaxed text-dark-gray">
            Thank you for reaching out. We typically respond within a few hours
            during business hours.
          </p>
          <p className="mb-8 text-[15px] text-dark-gray/70">
            Need immediate help? Call or text us at{" "}
            <a
              href="tel:+15302146361"
              className="font-semibold text-burgundy underline"
            >
              (530) 214-6361
            </a>
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-burgundy px-8 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
