import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Horizon Realty | Sell Smarter, Net 12% More",
  description:
    "Proprietary market data meets local London expertise. Sell your home faster and for a higher price with Apex Horizon.",
  keywords: ["Real Estate", "London Broker", "Apex Horizon", "Home Valuation", "Flat Fee Broker"],
  openGraph: {
    title: "Apex Horizon Realty",
    description: "Sell your home faster and for a higher price with Apex Horizon's local London expertise.",
    url: "https://apexhorizon.com",
    siteName: "Apex Horizon Realty",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Horizon Realty | London's Premier Broker",
    description: "Proprietary market data meets local London expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
