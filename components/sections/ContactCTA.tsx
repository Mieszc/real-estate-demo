"use client";

import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { useTranslations } from "next-intl";

export function ContactCTA() {
    const t = useTranslations("ContactCTA");
    return (
        <section className="w-full bg-brand-stone py-24 relative overflow-hidden border-t border-black/5">
            <div className="container mx-auto px-6 max-w-[1280px] relative z-10 text-center flex flex-col items-center">
                <AnimateInView delay={0.1}>
                    <div className="bg-brand-ink rounded-3xl p-12 lg:p-20 shadow-2xl relative overflow-hidden w-full max-w-5xl">
                        {/* Background glow effect inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                            <Typography variant="h2" className="text-white mb-6">
                                {t('title')}
                            </Typography>
                            <Typography variant="lead" className="text-brand-stone/80 mb-10 max-w-2xl">
                                {t('description')}
                            </Typography>

                            <MagneticWrapper>
                                <Button
                                    variant="amber"
                                    size="lg"
                                    className="shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_50px_rgba(255,184,0,0.5)] transition-shadow duration-300"
                                    onClick={() => {
                                        window.location.href = "/valuation";
                                    }}
                                >
                                    {t('button')}
                                </Button>
                            </MagneticWrapper>
                        </div>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}
