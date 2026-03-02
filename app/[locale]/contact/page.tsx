import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Navigation } from "@/components/sections/Navigation";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'seo.contact' });

    return {
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `/${locale}/contact`,
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `/${locale}/contact`,
            siteName: 'Apex Horizon Realty',
            type: 'website',
        },
    };
}

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
