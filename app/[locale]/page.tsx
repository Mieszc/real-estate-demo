import dynamic from "next/dynamic";
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { SectorSnapshot } from "@/components/sections/SectorSnapshot";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`,
      siteName: 'Apex Horizon Realty',
      type: 'website',
    },
  };
}

// Lazy-loaded interactive & below-the-fold components
const ListingSpeedSlider = dynamic(() => import("@/components/ui/ListingSpeedSlider").then(m => m.ListingSpeedSlider));
const EquityBuilderCalculator = dynamic(() => import("@/components/sections/EquityBuilderCalculator").then(m => m.EquityBuilderCalculator));
const MicroCaseStudies = dynamic(() => import("@/components/sections/MicroCaseStudies").then(m => m.MicroCaseStudies));
const SellReadyDiagnostic = dynamic(() => import("@/components/sections/SellReadyDiagnostic").then(m => m.SellReadyDiagnostic));
const FoundersGuarantee = dynamic(() => import("@/components/sections/FoundersGuarantee").then(m => m.FoundersGuarantee));
const LaunchRoadmap = dynamic(() => import("@/components/sections/LaunchRoadmap").then(m => m.LaunchRoadmap));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ));
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA").then(m => m.ContactCTA));
const ExitIntentOffer = dynamic(() => import("@/components/ui/ExitIntentOffer").then(m => m.ExitIntentOffer));

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tFaq = await getTranslations({ locale, namespace: 'FAQ.items' });

  // Currently we use indices 0 to 3 based on FAQ.tsx
  const faqItems = [
    { question: tFaq('0.question'), answer: tFaq('0.answer') },
    { question: tFaq('1.question'), answer: tFaq('1.answer') },
    { question: tFaq('2.question'), answer: tFaq('2.answer') },
    { question: tFaq('3.question'), answer: tFaq('3.answer') },
  ];

  return (
    <>
      <OrganizationSchema
        name="Apex Horizon Realty"
        description="Proprietary residential real estate broker service in London achieving 12% higher returns."
        url="https://apexhorizon.com"
        areaServed="London"
      />
      <FAQSchema items={faqItems} />
      <Navigation />
      <ExitIntentOffer />
      <main className="w-full min-h-screen bg-brand-ink selection:bg-brand-amber selection:text-brand-ink overflow-x-hidden pt-[80px]">
        <Hero />
        <SectorSnapshot />
        <ListingSpeedSlider />
        <EquityBuilderCalculator />
        <LaunchRoadmap />
        <MicroCaseStudies />
        <SellReadyDiagnostic />
        <FAQ />
        <ContactCTA />
        <FoundersGuarantee />
        <StackedCircularFooter />
      </main>
    </>
  );
}
