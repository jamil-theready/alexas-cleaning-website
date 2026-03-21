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
                href="https://www.yelp.com/biz/alexas-cleaning-services-placerville"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy transition-all hover:bg-burgundy hover:text-white hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.285 7.285 0 012.1 3.596c.243.81-.51 1.38-1.13 1.115zm-3.977 5.37l-2.365-4.59c-.467-.906.4-1.9 1.353-1.55l4.947 1.8c.806.294.944 1.164.42 1.756a7.268 7.268 0 01-3.39 2.268c-.412.134-.774.026-.965-.684zM12.46 20.677l-.96-5.167c-.19-1.02 1.02-1.7 1.832-1.028l3.878 3.177c.64.524.41 1.4-.33 1.768a7.29 7.29 0 01-3.907.712c-.357-.035-.457-.96-.513-1.462zm-5.78-3.397a7.285 7.285 0 01-1.56-3.758c-.1-.845.766-1.335 1.392-.98l4.56 2.58c.87.49.66 1.757-.318 1.926l-5.035.87c-.34.06-.67-.182-1.04-.638zm1.57-7.9a7.285 7.285 0 012.927-2.84c.727-.43 1.51.2 1.34 1.06l-1.52 5.06c-.254.848-1.376.95-1.764.16L7.21 10.16c-.196-.388-.12-.47.04-.78z" /></svg>
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
