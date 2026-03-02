import dynamic from "next/dynamic";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { SectorSnapshot } from "@/components/sections/SectorSnapshot";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

// Lazy-loaded interactive & below-the-fold components
const ListingSpeedSlider = dynamic(() => import("@/components/ui/ListingSpeedSlider").then(m => m.ListingSpeedSlider));
const EquityBuilderCalculator = dynamic(() => import("@/components/sections/EquityBuilderCalculator").then(m => m.EquityBuilderCalculator));
const LaunchRoadmap = dynamic(() => import("@/components/sections/LaunchRoadmap").then(m => m.LaunchRoadmap));
const MicroCaseStudies = dynamic(() => import("@/components/sections/MicroCaseStudies").then(m => m.MicroCaseStudies));
const SellReadyDiagnostic = dynamic(() => import("@/components/sections/SellReadyDiagnostic").then(m => m.SellReadyDiagnostic));
const FoundersGuarantee = dynamic(() => import("@/components/sections/FoundersGuarantee").then(m => m.FoundersGuarantee));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ));
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA").then(m => m.ContactCTA));
const ExitIntentOffer = dynamic(() => import("@/components/ui/ExitIntentOffer").then(m => m.ExitIntentOffer));

export default function Home() {
  return (
    <>
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
