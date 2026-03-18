import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | Alexa's Cleaning Services",
  description:
    "Terms and conditions for Alexa's Cleaning Services in Placerville CA. Review the terms that govern our cleaning services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Terms & Conditions" />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[800px] px-6">
            <p className="mb-12 text-[15px] text-dark-gray/70">
              Last updated: March 2026
            </p>

            {/* Acceptance of Terms */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Acceptance of Terms
            </h2>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              By booking or using any services provided by Alexa&apos;s Cleaning
              Services, you agree to be bound by these Terms and Conditions. If
              you do not agree with any part of these terms, please do not use
              our services. These terms apply to all clients, visitors, and
              others who access or use our services.
            </p>

            {/* Services */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Services
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              Alexa&apos;s Cleaning Services provides residential and commercial
              cleaning services throughout El Dorado County, California. Our
              services include but are not limited to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-dark-gray">
              <li>Standard recurring cleaning (weekly, biweekly, monthly)</li>
              <li>Deep cleaning</li>
              <li>Move in and move out cleaning</li>
              <li>One time cleaning</li>
              <li>Commercial and office cleaning</li>
            </ul>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              The specific scope of work for each cleaning will be agreed upon
              prior to the scheduled appointment. Any additional services
              requested during a visit may be subject to additional charges.
            </p>

            {/* Booking and Cancellation */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Booking and Cancellation
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              All bookings are confirmed via phone, email, or our online
              scheduling system. By confirming a booking, you agree to the
              scheduled date, time, and scope of services.
            </p>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              We kindly request at least 24 hours notice for any cancellations
              or rescheduling. There are no rescheduling fees. However,
              cancellations made with less than 24 hours notice may be subject
              to a cancellation fee at our discretion.
            </p>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              If we need to cancel or reschedule a cleaning due to unforeseen
              circumstances, we will notify you as soon as possible and work
              with you to find a suitable alternative time.
            </p>

            {/* Payment */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Payment
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              Payment is due upon completion of each cleaning service unless
              other arrangements have been agreed upon in advance. We accept
              cash, check, and major credit or debit cards.
            </p>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              Prices are based on the scope of work, size of the home or
              business, and the condition of the space. Quotes are provided
              before any work begins. Final pricing may be adjusted if the
              actual conditions differ significantly from what was described at
              the time of booking.
            </p>

            {/* Liability */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Liability
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              Alexa&apos;s Cleaning Services is licensed and insured. We take
              every precaution to protect your property while providing our
              services. In the unlikely event of accidental damage, please
              notify us within 24 hours of the service so we can assess and
              resolve the situation promptly.
            </p>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              We are not responsible for damage caused by pre-existing
              conditions, improper installation of fixtures, or items that are
              inherently fragile and not disclosed prior to cleaning. Our total
              liability for any claim shall not exceed the amount paid for the
              service during which the damage occurred.
            </p>

            {/* Indemnification */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Indemnification
            </h2>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              You agree to indemnify and hold harmless Alexa&apos;s Cleaning
              Services, its owner, employees, and agents from any claims,
              damages, losses, or expenses arising out of your use of our
              services, your violation of these terms, or your negligence. This
              includes any claims made by third parties related to services
              performed at your property.
            </p>

            {/* Changes to Terms */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Changes to Terms
            </h2>
            <p className="mb-12 text-[17px] leading-relaxed text-dark-gray">
              We reserve the right to update or modify these Terms and
              Conditions at any time. Any changes will be posted on this page
              with an updated revision date. Continued use of our services after
              changes are posted constitutes your acceptance of the revised
              terms. We encourage you to review this page periodically.
            </p>

            {/* Contact */}
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-[28px] text-burgundy md:text-[36px]">
              Contact
            </h2>
            <p className="mb-4 text-[17px] leading-relaxed text-dark-gray">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="text-[17px] leading-relaxed text-dark-gray">
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
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
