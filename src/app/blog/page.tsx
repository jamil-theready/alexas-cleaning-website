import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides | Alexa's Cleaning Services Blog",
  description:
    "Expert cleaning tips, guides, and advice from Alexa's Cleaning Services in Placerville, CA. Learn about house cleaning, deep cleaning, move-out cleaning, and more.",
};

function getBlogImage(index: number): string {
  // Round-robin assign images 1-15 to the 15 posts
  return `/images/blog/${index + 1}.jpg`;
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Cleaning Tips & Guides"
          subtitle="Practical advice from a team that cleans hundreds of homes across El Dorado County every month."
        />

        <section className="bg-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={getBlogImage(index)}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h2 className="mb-3 font-[family-name:var(--font-serif)] text-[20px] leading-snug text-burgundy transition-colors group-hover:text-red-highlight">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-dark-gray line-clamp-3">
                      {post.metaDescription}
                    </p>
                    <span className="inline-block text-[14px] font-semibold text-burgundy transition-colors group-hover:text-red-highlight">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
