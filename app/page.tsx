import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { DataBar } from "@/components/sections/DataBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Transparency } from "@/components/sections/Transparency";
import { Guarantee } from "@/components/sections/Guarantee";
import { SuccessCarousel } from "@/components/sections/SuccessCarousel";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen bg-brand-ink selection:bg-brand-amber selection:text-brand-ink overflow-x-hidden pt-[80px]">
        <Hero />
        <DataBar />
        <ProcessSteps />
        <Transparency />
        <Guarantee />
        <SuccessCarousel />
        <FAQ />
        <ContactCTA />
        <StackedCircularFooter />
      </main>
    </>
  );
}
