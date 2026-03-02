import { Typography } from "@/components/ui/Typography";
import { ValuationForm } from "@/components/sections/ValuationForm";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { BeamsBackground } from "@/components/ui/beams-background";
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <BeamsBackground className="pt-20 pb-20">
            {/* The BeamsBackground acts as the relative wrapper with min-h-screen out of the box. */}

            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content (Left 7 cols) */}
                    <AnimateInView delay={0.1} className="lg:col-span-7 flex flex-col items-start text-left z-10 w-full">
                        <div id="hero-form" className="w-full">
                            <Typography variant="h1" className="text-white mb-6">
                                {t('titlePart1')} <br className="hidden sm:block" />
                                <span className="text-brand-amber">{t('titlePart2')}</span>
                            </Typography>

                            <Typography variant="lead" className="text-brand-stone/80 mb-10 max-w-2xl">
                                {t('subtitle')}
                            </Typography>

                            <ValuationForm />

                            <p className="mt-8 text-xs text-brand-stone/40 uppercase tracking-wider font-semibold">
                                {t('actionSubtext')}
                            </p>
                        </div>
                    </AnimateInView>

                    {/* High-Impact Imagery (Right 5 cols) */}
                    <AnimateInView delay={0.4} direction="left" className="lg:col-span-5 relative w-full h-[500px] lg:h-[650px] rounded-2xl overflow-hidden glass-panel p-2">
                        <div
                            className="w-full h-full rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/hero_london_luxury.png')" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent mix-blend-multiply" />
                        </div>
                    </AnimateInView>

                </div>
            </div>
        </BeamsBackground>
    );
}
