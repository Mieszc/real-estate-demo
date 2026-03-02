import { Navigation } from "@/components/sections/Navigation";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main className="w-full min-h-screen bg-brand-ink selection:bg-brand-amber selection:text-brand-ink overflow-x-hidden pt-[80px]">
                <ContactSplit />
                <ContactCTA />
                <StackedCircularFooter />
            </main>
        </>
    );
}
