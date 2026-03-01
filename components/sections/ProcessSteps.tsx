import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { TiltCard } from "@/components/ui/TiltCard";
import { LineChart, ClipboardCheck, Zap } from "lucide-react";

const steps = [
    {
        icon: <LineChart className="w-8 h-8 text-brand-amber" />,
        title: "Step 1: Data-Driven Discovery",
        description: "We start by analyzing high-frequency market data, not just local averages. We determine your property’s optimal listing price based on current demand, recent sales, and the unique features that make your home stand out."
    },
    {
        icon: <ClipboardCheck className="w-8 h-8 text-brand-amber" />,
        title: "Step 2: Precision Preparation",
        description: "We don't believe in generic staging or cookie-cutter marketing. Your Lead Strategist builds a custom preparation roadmap to maximize your home's equity, focusing only on the high-ROI improvements that actually move the needle."
    },
    {
        icon: <Zap className="w-8 h-8 text-brand-amber" />,
        title: "Step 3: Aggressive Market Launch",
        description: "We bypass the inefficiencies of traditional brokerages. Our proprietary launch system ensures your listing is placed exactly where the most motivated buyers are looking, maximizing visibility and driving competitive offers within days."
    }
];

export function ProcessSteps() {
    return (
        <section className="w-full bg-brand-stone py-24 relative overflow-hidden" id="process">
            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <AnimateInView delay={0.1} className="text-center mb-20">
                    <Typography variant="h2" className="text-brand-ink mb-4 flex flex-col sm:inline-block items-center">
                        The Apex Horizon Difference: <Typography variant="editorial" asChild><span className="block sm:inline mt-2 sm:mt-0 sm:ml-2">Three Steps to Sold.</span></Typography>
                    </Typography>
                </AnimateInView>

                {/* Stepper Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Desktop Horizontal Connecting Line */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent z-0" />

                    {/* Mobile Vertical Connecting Line */}
                    <div className="lg:hidden absolute top-[10%] bottom-[10%] left-[38px] w-[2px] bg-gradient-to-b from-brand-amber/0 via-brand-amber/30 to-brand-amber/0 z-0" />

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between relative z-10">
                        {steps.map((step, index) => (
                            <AnimateInView
                                key={index}
                                delay={0.2 + (index * 0.1)}
                                direction="up"
                                className="flex-1 w-full flex flex-col relative"
                            >
                                {/* Mobile Timeline Alignment Wrapper */}
                                <div className="flex flex-row lg:flex-col items-start lg:items-center w-full gap-6 lg:gap-0 h-full">

                                    {/* Icon / Number Container */}
                                    <div className="w-20 h-20 rounded-full bg-brand-ink border flex-shrink-0 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center mb-0 lg:mb-8 relative z-10">
                                        {step.icon}
                                    </div>

                                    {/* Card Container */}
                                    <TiltCard className="flex-1 w-full mt-0 lg:mt-4 h-full z-20">
                                        <Card className="w-full bg-white border border-brand-ink/10 hover:border-brand-amber transition-all duration-300 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(255,184,0,0.2)] rounded-2xl flex flex-col items-start lg:items-center text-left lg:text-center h-full">
                                            <Typography variant="h3" className="text-brand-ink mb-4 text-xl font-bold">
                                                {step.title}
                                            </Typography>
                                            <Typography variant="p" className="text-brand-ink/80 leading-relaxed">
                                                {step.description}
                                            </Typography>
                                        </Card>
                                    </TiltCard>
                                </div>
                            </AnimateInView>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
