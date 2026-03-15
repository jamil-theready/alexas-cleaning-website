import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexa's Cleaning Services | Professional Cleaning in Placerville, CA",
  description:
    "Top-rated professional cleaning services in Placerville and El Dorado County. House cleaning, deep cleaning, commercial cleaning, and more. No contracts, no rescheduling fees.",
  keywords:
    "cleaning services Placerville, house cleaning El Dorado County, deep cleaning Placerville CA, commercial cleaning Placerville, Airbnb cleaning Placerville",
  openGraph: {
    title: "Alexa's Cleaning Services | Placerville, CA",
    description:
      "Professional cleaning services in Placerville and El Dorado County. No contracts, no rescheduling fees.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
