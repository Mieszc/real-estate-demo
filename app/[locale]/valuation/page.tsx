import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Navigation } from "@/components/sections/Navigation";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Typography } from "@/components/ui/Typography";
import { ValuationForm } from "@/components/sections/ValuationForm";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Building2 } from "lucide-react";
import { ValuationSchema } from "@/components/schema/ValuationSchema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'seo.valuation' });

    return {
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `/${locale}/valuation`,
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `/${locale}/valuation`,
            siteName: 'Apex Horizon Realty',
            type: 'website',
        },
    };
}

export default async function ValuationPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ValuationPage' });

    return (
        <>
            <ValuationSchema
                title={t('seo.valuation.title')}
                description={t('seo.valuation.description')}
                url={`https://apexhorizon.com/${locale}/valuation`}
                targetUrl={`https://apexhorizon.com/${locale}/valuation`}
                language={locale}
            />
            <Navigation />
            <main className="w-full min-h-screen bg-brand-ink selection:bg-brand-amber selection:text-brand-ink overflow-x-hidden pt-[80px] flex flex-col">
                {/* We use BeamsBackground to keep the visual identity consistent but tailor it for the focused task */}
                <BeamsBackground className="flex-1 flex flex-col justify-center py-20">
                    <div className="container mx-auto px-6 max-w-4xl text-center">

                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 rounded-full bg-brand-amber/10 flex items-center justify-center">
                                <Building2 className="w-8 h-8 text-brand-amber" />
                            </div>
                        </div>

                        <Typography variant="h1" className="text-white mb-6">
                            {t('titlePart1')}
                            <span className="text-brand-amber">{t('titlePart2')}</span>
                        </Typography>

                        <Typography variant="lead" className="text-brand-stone/80 mb-12 max-w-2xl mx-auto">
                            {t('subtitle')}
                        </Typography>

                        {/* A dedicated, elevated container for the form */}
                        <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl mx-auto text-left relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-amber/20 via-brand-amber to-brand-amber/20" />
                            <Typography variant="h3" className="text-white mb-2">
                                {t('formSectionTitle')}
                            </Typography>
                            <Typography variant="p" className="text-brand-stone/70 mb-8">
                                {t('formSectionDescription')}
                            </Typography>

                            <ValuationForm />

                            <p className="mt-6 text-xs text-brand-stone/40 uppercase tracking-wider font-semibold text-center">
                                {t('actionSubtext')}
                            </p>
                        </div>

                    </div>
                </BeamsBackground>

                <StackedCircularFooter />
            </main>
        </>
    );
}
