import { Typography } from "@/components/ui/Typography";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { useTranslations } from "next-intl";

export function FAQ() {
    const t = useTranslations("FAQ");

    const faqItems = [
        {
            question: t('items.0.question'),
            answer: t('items.0.answer')
        },
        {
            question: t('items.1.question'),
            answer: t('items.1.answer')
        },
        {
            question: t('items.2.question'),
            answer: t('items.2.answer')
        },
        {
            question: t('items.3.question'),
            answer: t('items.3.answer')
        }
    ];

    return (
        <section id="faq" className="w-full bg-brand-stone py-24">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <AnimateInView className="text-center mb-16 px-4">
                    <Typography variant="h2" className="text-brand-ink mb-4">
                        {t('title')}
                    </Typography>
                    <Typography variant="lead" className="text-brand-ink/70">
                        {t('description')}
                    </Typography>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                    <Accordion items={faqItems} className="bg-white border border-brand-ink/10 shadow-2xl rounded-2xl" />
                </AnimateInView>
            </div>
        </section>
    );
}
