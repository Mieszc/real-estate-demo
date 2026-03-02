import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import "@/app/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Metadata is now handled dynamically in page components via generateMetadata

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} ${playfair.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <NoiseOverlay />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
