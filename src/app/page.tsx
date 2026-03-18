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
