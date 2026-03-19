import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Confetti from "@/components/Confetti";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Thank You | Alexa's Cleaning Services",
  description: "Your message has been received. We will get back to you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <>
      <Header />
      <Confetti />
      <main>
        {/* Hero confirmation */}
        <section className="bg-white pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="mx-auto max-w-xl px-6 text-center">
            {/* Checkmark */}
            <div
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-light-bg"
              style={{ boxShadow: "0 8px 30px rgba(61, 7, 25, 0.15)" }}
            >
              <svg
                className="h-12 w-12 text-burgundy"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[36px] text-burgundy md:text-[48px]">
              Message Received
            </h1>
            <p className="mb-2 text-[18px] leading-relaxed text-dark-gray">
              Thank you for reaching out. We typically respond within a few
              hours during business hours.
            </p>
            <p className="mb-10 text-[16px] text-dark-gray/60">
              Need immediate help? Call or text us at{" "}
              <a
                href="tel:+15302146361"
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                (530) 214-6361
              </a>
            </p>

            {/* Action buttons */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-block rounded-full bg-burgundy px-8 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-full border-2 border-burgundy px-8 py-3 text-[15px] font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-white"
              >
                Send Another Message
              </Link>
            </div>
          </div>
        </section>

        {/* Social follow */}
        <section className="bg-white pb-8 pt-4">
          <div className="mx-auto max-w-md px-6 text-center">
            <p className="mb-4 text-[13px] font-semibold tracking-widest text-dark-gray/40 uppercase">
              Follow Us
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/servicecleaners4you/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy transition-all hover:bg-burgundy hover:text-white hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy transition-all hover:bg-burgundy hover:text-white hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy transition-all hover:bg-burgundy hover:text-white hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Blog carousel */}
        <section className="bg-light-bg py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="mb-1 text-[12px] font-semibold tracking-widest text-dark-gray/40 uppercase">
                  While You Wait
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-[24px] text-burgundy md:text-[28px]">
                  Browse Our Latest Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-[14px] font-semibold text-burgundy transition-colors hover:text-red-highlight sm:block"
              >
                View all →
              </Link>
            </div>

            <div className="relative">
            <div
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex-shrink-0 snap-start w-[280px] rounded-2xl bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="h-[160px] overflow-hidden bg-burgundy/5">
                    <img
                      src={post.image || "/images/background.jpg"}
                      alt={post.imageAlt || post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="mb-1.5 text-[11px] font-semibold tracking-wider text-burgundy/40 uppercase">
                      {post.date}
                    </p>
                    <h3 className="mb-2 text-[15px] font-semibold leading-snug text-burgundy line-clamp-2 group-hover:text-red-highlight">
                      {post.title}
                    </h3>
                    <p className="mb-3 text-[13px] leading-relaxed text-dark-gray/60 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-[13px] font-medium text-burgundy/50 group-hover:text-burgundy">
                      Read article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* Fade edge */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-light-bg to-transparent" />
            </div>

            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/blog"
                className="text-[14px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
              >
                View all articles →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
