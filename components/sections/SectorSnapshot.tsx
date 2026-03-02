"use client";

import { Trees, Building2, Castle, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export function SectorSnapshot() {
    const t = useTranslations('SectorSnapshot');

    const sectors = [
        { name: t('sectors.familySuburbs'), icon: Trees },
        { name: t('sectors.downtownLofts'), icon: Building2 },
        { name: t('sectors.luxuryEstates'), icon: Castle },
        { name: t('sectors.highYieldInvestments'), icon: MapPin },
    ];

    return (
        <section className="py-12 border-y border-border/10 bg-brand-navy/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                    <div className="shrink-0 text-center md:text-left">
                        <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                            {t('trustedBy')}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 w-full opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        {sectors.map((sector) => (
                            <div key={sector.name} className="flex flex-col items-center gap-3 w-24 sm:w-auto group">
                                <sector.icon className="w-8 h-8 text-slate-400 group-hover:text-brand-amber transition-colors duration-300" strokeWidth={1.5} />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors uppercase tracking-wider text-center">
                                    {sector.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
