"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Percent, ThumbsUp } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { useTranslations } from "next-intl";

export function MicroCaseStudies() {
    const t = useTranslations("MicroCaseStudies");

    const caseStudies = [
        {
            metric: t('studies.0.metric'),
            metricLabel: t('studies.0.metricLabel'),
            icon: Clock,
            result: t('studies.0.result'),
            highlight: t('studies.0.highlight'),
        },
        {
            metric: t('studies.1.metric'),
            metricLabel: t('studies.1.metricLabel'),
            icon: Percent,
            result: t('studies.1.result'),
            highlight: t('studies.1.highlight'),
        },
        {
            metric: t('studies.2.metric'),
            metricLabel: t('studies.2.metricLabel'),
            icon: TrendingUp,
            result: t('studies.2.result'),
            highlight: t('studies.2.highlight'),
        },
        {
            metric: t('studies.3.metric'),
            metricLabel: t('studies.3.metricLabel'),
            icon: ThumbsUp,
            result: t('studies.3.result'),
            highlight: t('studies.3.highlight'),
        }
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-brand-amber font-bold tracking-widest uppercase text-sm mb-4 block">
                        {t('badge')}
                    </span>
                    <Typography variant="h2" className="mb-4 text-brand-ink">
                        {t('title')}
                    </Typography>
                    <Typography variant="lead" className="text-brand-ink/80 max-w-2xl mx-auto">
                        {t('description')}
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all group overflow-hidden relative text-brand-ink"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-bl-full -z-10 group-hover:bg-brand-amber/10 transition-colors" />

                            <div className="flex justify-between items-start mb-6">
                                <span className="inline-block px-3 py-1 bg-brand-ink/5 text-brand-ink text-xs font-bold rounded-full uppercase tracking-wider">
                                    {study.highlight}
                                </span>
                                <study.icon className="w-5 h-5 text-brand-amber" />
                            </div>

                            <div className="mb-4">
                                <div className="text-4xl font-extrabold text-brand-ink font-serif mb-1 group-hover:text-brand-amber transition-colors">
                                    {study.metric}
                                </div>
                                <div className="text-xs font-semibold text-brand-ink/70 uppercase tracking-widest">
                                    {study.metricLabel}
                                </div>
                            </div>

                            <p className="text-brand-ink/80 font-medium leading-relaxed">
                                {study.result}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
