import { Typography } from "@/components/ui/Typography";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function FAQ() {
    const faqItems = [
        {
            question: "Is this valuation just an automated algorithm?",
            answer: "Our initial estimate uses high-frequency market data to give you a baseline, but that’s just the start. Every valuation is audited by a local expert who factors in your home’s unique upgrades and neighborhood micro-trends. It’s technology speed with human expertise."
        },
        {
            question: "Why are your fees lower than the 'big name' brokerages?",
            answer: "We replaced bloated corporate overhead and expensive office leases with proprietary software that streamlines the paperwork. We pass those savings directly to you. We don't cut corners; we cut inefficiencies."
        },
        {
            question: "What if I sign up and change my mind?",
            answer: "We operate on the belief that we have to earn your business every single day. If you aren't 100% satisfied with our service, you can cancel your listing agreement at any time, for any reason, with zero penalties. No awkward conversations required."
        },
        {
            question: "Will I have a dedicated agent, or will I be handed off?",
            answer: "You are assigned a Lead Strategist who is your single point of contact from valuation to closing. You won't be passed around to different departments. You have their direct line."
        }
    ];

    return (
        <section id="faq" className="w-full bg-brand-stone py-24">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <AnimateInView className="text-center mb-16 px-4">
                    <Typography variant="h2" className="text-brand-ink mb-4">
                        Common Questions
                    </Typography>
                    <Typography variant="lead" className="text-brand-ink/70">
                        Transparency means no secrets. Everything you need to know.
                    </Typography>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                    <Accordion items={faqItems} className="bg-white border border-brand-ink/10 shadow-2xl rounded-2xl" />
                </AnimateInView>
            </div>
        </section>
    );
}
