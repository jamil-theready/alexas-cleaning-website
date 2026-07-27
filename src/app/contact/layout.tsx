import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alexa's Cleaning Services | Placerville CA",
  description:
    "Contact Alexa's Cleaning Services in Placerville CA. Call (530) 214-6361 for a free cleaning quote. No contracts, no obligations.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
