import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImageBreaker from "@/components/ImageBreaker";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutOwner from "@/components/AboutOwner";
import Testimonials from "@/components/Testimonials";
import HomeFAQ from "@/components/HomeFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

// Homepage-only metadata. Declared here (not in layout.tsx) so /contact keeps
// inheriting the generic site-wide default title from the root layout.
// openGraph is re-declared in full because Next.js SHALLOW-merges it: a partial
// page-level openGraph would replace the root object and drop og:image.
export const metadata: Metadata = {
  title: "House Cleaning in Placerville, CA | Alexa's Cleaning",
  description:
    "House cleaning, deep cleaning, and move-out cleaning across Placerville and El Dorado County. Licensed and insured, no contracts, no rescheduling fees.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "House Cleaning in Placerville, CA | Alexa's Cleaning",
    description:
      "House cleaning, deep cleaning, and move-out cleaning across Placerville and El Dorado County. Licensed and insured, no contracts.",
    type: "website",
    locale: "en_US",
    url: "https://www.alexascleaningplacerville.com",
    images: [
      {
        url: "https://www.alexascleaningplacerville.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alexa's Cleaning Services - Professional Cleaning in Placerville, CA",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageBreaker />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <AboutOwner />
        <Testimonials />
        <HomeFAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
