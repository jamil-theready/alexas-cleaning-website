import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alexa's Cleaning Services | Placerville CA",
  description:
    "Get in touch with Alexa's Cleaning Services in Placerville CA. Call (530) 214-6361 or send us a message for a free cleaning quote. No contracts, no obligations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
