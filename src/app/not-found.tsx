import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-light-bg pt-24 pb-16">
        <div className="mx-auto max-w-[500px] px-6 text-center">
          <p className="mb-4 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            Page Not Found
          </p>
          <h1 className="mb-6 font-[family-name:var(--font-serif)] text-[48px] text-burgundy md:text-[64px]">
            404
          </h1>
          <p className="mb-10 text-[17px] leading-relaxed text-dark-gray">
            The page you are looking for does not exist or has been moved.
            Let us help you find what you need.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-block rounded-full bg-burgundy px-8 py-3.5 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-burgundy px-8 py-3 text-[16px] font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
