import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts } from "@/data/blog-posts";
import { markdownToHtml, slugify } from "@/lib/markdown";
import FAQAccordion from "./FAQAccordion";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  const blogImage = `/images/blog/${blogPosts.findIndex((p) => p.slug === slug) + 1}.jpg`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.alexascleaningplacerville.com/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: `https://www.alexascleaningplacerville.com/blog/${slug}`,
      images: [
        {
          url: `https://www.alexascleaningplacerville.com${blogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    notFound();
  }

  const contentHtml = markdownToHtml(post.content);
  const blogImage = `/images/blog/${postIndex + 1}.jpg`;
  const nextPost = blogPosts[postIndex + 1] || null;

  // Extract h2 headings for TOC
  const headings = (post.content.match(/^## .+/gm) || []).map((h) => {
    const text = h.replace(/^## /, "");
    return { text, id: slugify(text) };
  });

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alexascleaningplacerville.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.alexascleaningplacerville.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.alexascleaningplacerville.com/blog/${slug}` },
    ],
  };

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Alexa's Cleaning Services",
    },
    publisher: {
      "@type": "Organization",
      name: "Alexa's Cleaning Services",
    },
    image: `https://www.alexascleaningplacerville.com${blogImage}`,
  };

  // FAQ structured data
  const faqJsonLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header />

      <main className="pt-24 pb-16 bg-light-bg min-h-screen">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="relative lg:flex lg:gap-8">
            {/* Sticky Social Share - Desktop */}
            <aside className="hidden lg:block lg:w-12">
              <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] font-semibold tracking-widest text-dark-gray/40 uppercase">Share</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.alexascleaningplacerville.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dark-gray/50 shadow-sm transition-colors hover:bg-burgundy hover:text-white"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.alexascleaningplacerville.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dark-gray/50 shadow-sm transition-colors hover:bg-burgundy hover:text-white"
                  aria-label="Share on X"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.alexascleaningplacerville.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dark-gray/50 shadow-sm transition-colors hover:bg-burgundy hover:text-white"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-[800px]">
              {/* Back Link */}
              <Link
                href="/blog"
                className="mb-6 inline-block text-[14px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
              >
                &larr; Back to Blogs
              </Link>

              {/* Title Above Image */}
              <h1 className="mb-6 max-w-[600px] font-[family-name:var(--font-serif)] text-[28px] leading-tight text-burgundy md:text-[38px]">
                {post.title}
              </h1>

              {/* Hero Image */}
              <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={blogImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 800px) 100vw, 800px"
                  priority
                />
              </div>

              {/* Quick Answer */}
              {post.quickAnswer && (
                <div className="mb-8 rounded-xl border-l-4 border-burgundy bg-white p-6 shadow-sm">
                  <p className="mb-1 text-[12px] font-bold tracking-widest text-burgundy/60 uppercase">Quick Answer</p>
                  <p className="text-[15px] leading-relaxed text-dark-gray">{post.quickAnswer}</p>
                </div>
              )}

              {/* Key Takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="mb-10 rounded-xl bg-white p-6 shadow-sm">
                  <p className="mb-3 text-[12px] font-bold tracking-widest text-burgundy/60 uppercase">Key Takeaways</p>
                  <ul className="flex flex-col gap-2">
                    {post.keyTakeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-dark-gray">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-[11px] font-bold text-burgundy">{i + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Jump to Section */}
              {headings.length > 2 && (
                <nav className="mb-10 rounded-xl border border-burgundy/10 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-[12px] font-bold tracking-widest text-burgundy/60 uppercase">Jump to Section</p>
                  <ul className="flex flex-col gap-1.5">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="inline-block text-[14px] text-burgundy/80 transition-colors hover:text-burgundy hover:underline"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Article Content */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

          {/* FAQ Section */}
          {post.faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[32px]">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={post.faqs} />
            </section>
          )}

          {/* CTA Section */}
          <section className="mt-16 rounded-2xl bg-burgundy p-8 text-center md:p-12">
            <h2 className="mb-4 font-[family-name:var(--font-serif)] text-[28px] text-white md:text-[36px]">
              Ready for a Cleaner Home?
            </h2>
            <p className="mx-auto mb-8 max-w-[500px] text-[16px] leading-relaxed text-white/80">
              Get a free quote in minutes. No contracts, no obligations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+15302146361"
                className="inline-block rounded-full bg-yellow px-10 py-4 text-[17px] font-semibold text-burgundy transition-opacity hover:opacity-90"
              >
                Call (530) 214-6361
              </a>
              <a
                href="mailto:alexascleaningplacerville@gmail.com"
                className="inline-block rounded-full border-2 border-white px-10 py-[14px] text-[17px] font-semibold text-white transition-colors hover:bg-white hover:text-burgundy"
              >
                Email Us
              </a>
            </div>
          </section>

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="text-[15px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
                >
                  &larr; All Blogs
                </Link>
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="text-[15px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
                  >
                    Next Blog &rarr;
                  </Link>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
