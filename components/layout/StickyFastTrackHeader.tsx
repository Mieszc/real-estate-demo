"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calculator } from "lucide-react";
import { useTranslations } from "next-intl";

export function StickyFastTrackHeader() {
    const t = useTranslations('Navigation');
    const { scrollY, scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Smooth physics for the reading progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollToHero = () => {
        const element = document.querySelector("#hero-form");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            // Show header after scrolling down 600px (roughly past the hero)
            if (latest > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [scrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200"
                >
                    {/* Reading Progress Bar */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-brand-amber origin-left"
                        style={{ scaleX }}
                    />

                    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-8 h-8 bg-brand-navy rounded-sm flex items-center justify-center">
                                <span className="text-white font-serif font-bold leading-none text-xl">A</span>
                            </div>
                            <span className="font-serif font-bold text-brand-navy hidden sm:inline-block">Apex Horizon</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-slate-500 hidden md:inline-block border-r border-slate-200 pr-4">
                                {t('stickyTitle')}
                            </span>
                            <Button
                                size="sm"
                                className="bg-brand-amber text-brand-navy hover:bg-brand-navy hover:text-white transition-colors group rounded-full px-6"
                                onClick={scrollToHero}
                            >
                                <Calculator className="w-4 h-4 mr-2" />
                                <span className="font-bold">{t('stickyButton')}</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
