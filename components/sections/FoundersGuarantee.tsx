import { ShieldCheck, FileSignature } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function FoundersGuarantee() {
    return (
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
            {/* Elegant Background Texture */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="bg-slate-900 border border-slate-800 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden">
                    {/* Watermark Icon */}
                    <div className="absolute -bottom-16 -right-16 opacity-5 pointer-events-none">
                        <ShieldCheck className="w-96 h-96" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-brand-amber text-brand-navy rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(217,119,6,0.3)]">
                            <FileSignature className="w-12 h-12 md:w-16 md:h-16" />
                        </div>

                        <div className="space-y-6 text-center md:text-left">
                            <span className="text-brand-amber font-bold tracking-widest uppercase text-sm">
                                Commitment to Transparency
                            </span>

                            <Typography variant="h2" className="text-white font-serif leading-tight">
                                The Apex Founder's Guarantee
                            </Typography>

                            <div className="space-y-4 text-slate-300 text-lg">
                                <p>
                                    "When you list your home with Apex Horizon, we put our reputation and our revenue on the line. Our strategy is built on data, execution, and extreme accountability."
                                </p>
                                <p className="font-semibold text-white bg-white/5 inline-block px-4 py-2 rounded-lg">
                                    If we fail to meet our agreed-upon performance metrics in the first 30 days, you can fire us immediately. Zero penalties. Zero fees. Zero hassle.
                                </p>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                                <div className="text-left hidden md:block">
                                    <h4 className="font-serif text-2xl italic text-slate-400">— Michael Apex</h4>
                                    <p className="text-sm font-semibold text-brand-amber tracking-wider uppercase">Founder & CEO</p>
                                </div>
                                <Button
                                    className="bg-white text-brand-navy hover:bg-slate-100 hover:scale-105 transition-all w-full sm:w-auto px-8"
                                    size="lg"
                                >
                                    Start with Confidence
                                </Button>
                                <div className="text-center md:hidden block">
                                    <h4 className="font-serif text-xl italic text-slate-400">— Michael Apex</h4>
                                    <p className="text-xs font-semibold text-brand-amber tracking-wider uppercase">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
