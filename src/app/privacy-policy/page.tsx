import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Alexa's Cleaning Services",
  description:
    "Privacy policy for Alexa's Cleaning Services in Placerville CA. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Privacy Policy" />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <p className="mb-12 text-[15px] text-dark-gray/70">
              Last updated: March 2026
            </p>

            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              Alexa&apos;s Cleaning Services (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) respects your privacy. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you visit our website at{" "}
              <a
                href="https://www.alexascleaningplacerville.com"
                className="text-burgundy underline"
              >
                www.alexascleaningplacerville.com
              </a>{" "}
              or use our cleaning services.
            </p>

            {/* Information We Collect */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Information We Collect
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              We may collect the following types of personal information when you
              contact us, request a quote, or book a service:
            </p>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-dark-gray">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Home or business address</li>
              <li>Service preferences and scheduling details</li>
              <li>
                Any additional information you choose to share with us directly
              </li>
            </ul>

            {/* How We Use Your Information */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              We use the information we collect to:
            </p>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-dark-gray">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and deliver cleaning services</li>
              <li>
                Communicate with you about appointments, updates, and follow ups
              </li>
              <li>Improve our services and customer experience</li>
              <li>Send occasional promotions or service reminders, if you have opted in</li>
            </ul>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              We will never sell your personal information. Your data is used
              solely to serve you better.
            </p>

            {/* Information Sharing */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Information Sharing
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              We do not sell, rent, or trade your personal information to third
              parties. We may share your information only in the following
              limited circumstances:
            </p>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-dark-gray">
              <li>
                With trusted service providers who assist us in operating our
                website or conducting our business, provided they agree to keep
                your information confidential
              </li>
              <li>When required by law or to comply with a legal process</li>
              <li>
                To protect the rights, property, or safety of Alexa&apos;s
                Cleaning Services, our customers, or others
              </li>
            </ul>

            {/* Data Security */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Data Security
            </h2>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              We take reasonable precautions to protect your personal
              information. Our website uses industry standard security measures
              to safeguard data transmitted online. However, no method of
              transmission over the internet is 100% secure. We cannot guarantee
              absolute security, but we are committed to protecting your
              information to the best of our ability.
            </p>

            {/* Cookies */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Cookies
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              Our website may use cookies and similar tracking technologies to
              improve your browsing experience. Cookies are small files stored on
              your device that help us understand how visitors use our site.
            </p>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              You can control cookie settings through your browser preferences.
              Disabling cookies may affect certain features of the website.
            </p>

            {/* Your Rights */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Your Rights
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              As a California resident, you have the right to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-dark-gray">
              <li>
                Request access to the personal information we hold about you
              </li>
              <li>
                Request correction or deletion of your personal information
              </li>
              <li>Opt out of promotional communications at any time</li>
              <li>
                Know whether your personal information is being sold (it is not)
              </li>
            </ul>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              To exercise any of these rights, please contact us using the
              information below. We will respond to your request within 30 days.
            </p>

            {/* Contact Us */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Contact Us
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              If you have questions about this Privacy Policy or how we handle
              your information, please reach out:
            </p>
            <div className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              <p className="font-semibold text-burgundy">
                Alexa&apos;s Cleaning Services
              </p>
              <p>2838 Schnell School Rd #2, Placerville, CA 95667</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:alexascleaningplacerville@gmail.com"
                  className="text-burgundy underline"
                >
                  alexascleaningplacerville@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+15302146361" className="text-burgundy underline">
                  (530) 214-6361
                </a>
              </p>
            </div>

            {/* Changes to This Policy */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Changes to This Policy
            </h2>
            <p className="text-[17px] leading-relaxed text-dark-gray">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically. Continued use of
              our website or services after changes are posted constitutes your
              acceptance of the updated policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
