import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, XCircle } from "lucide-react";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { FeeCalculator } from "@/components/ui/FeeCalculator";

export function Transparency() {
    return (
        <section id="transparency" className="w-full bg-brand-ink py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <AnimateInView delay={0.1} className="text-center mb-16">
                    <Typography variant="h2" className="text-white mb-4">
                        Fee Transparency
                    </Typography>
                    <Typography variant="lead" className="text-brand-stone/70 max-w-2xl mx-auto">
                        We operate differently. No hidden fees, no bloated commissions.
                        Just premier London service at a flat, predictable rate.
                    </Typography>
                </AnimateInView>

                {/* Interactive Fee Calculator */}
                <AnimateInView delay={0.2} className="w-full">
                    <FeeCalculator />
                </AnimateInView>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                    {/* Traditional Broker */}
                    <AnimateInView delay={0.2} direction="right">
                        <Card className="bg-white/5 border-white/5 p-8 lg:p-10 opacity-80 scale-95 transition-all">
                            <Typography variant="h3" className="text-brand-stone/60 mb-8 border-b border-white/10 pb-4">
                                Traditional Broker Fees
                            </Typography>
                            <ul className="space-y-6">
                                {[
                                    "High percentage-based commissions (up to 3%)",
                                    "Hidden marketing and photography fees",
                                    "Inconsistent communication and hand-offs",
                                    "Outdated listing technology"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <XCircle className="w-6 h-6 text-red-400/70 shrink-0" />
                                        <span className="text-brand-stone/60">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </AnimateInView>

                    {/* Apex Flat-Fee Advantage */}
                    <AnimateInView delay={0.4} direction="left" className="h-full">
                        <Card className="bg-brand-stone/5 border-brand-amber/30 p-8 lg:p-12 shadow-[0_0_50px_rgba(255,184,0,0.1)] relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="bg-brand-amber text-brand-ink text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                    The Apex Advantage
                                </span>
                            </div>
                            <Typography variant="h3" className="text-white mb-8 border-b border-white/10 pb-4 font-bold">
                                Transparent Flat-Fee
                            </Typography>
                            <ul className="space-y-6">
                                {[
                                    "One predictable, transparent flat fee",
                                    "Premium photography & marketing included",
                                    "Dedicated London Lead Strategist 24/7",
                                    "Proprietary AI valuation data"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-brand-amber shrink-0" />
                                        <span className="text-white font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
