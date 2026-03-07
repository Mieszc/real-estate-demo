"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, Paintbrush, Rocket, Key } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { useTranslations } from 'next-intl';

const steps = [
    {
        title: "Market Analysis",
        description: "Deep-dive data mining to find your home's true competitive edge. We don't guess; we calculate the optimal entry point.",
        icon: Search,
        align: "right",
    },
    {
        title: "Staging & Preparation",
        description: "Our in-house design team styles your home to evoke maximum emotional response from luxury buyers.",
        icon: Paintbrush,
        align: "left",
    },
    {
        title: "Digital Launch",
        description: "Cinematic video tours, targeted social ads, and exclusive off-market previews to build fierce anticipation.",
        icon: Rocket,
        align: "right",
    },
    {
        title: "Sold & Closed",
        description: "Expert negotiation to secure terms that protect your wealth, closing the transaction smoothly and silently.",
        icon: Key,
        align: "left",
    }
];

export function LaunchRoadmap() {
    const t = useTranslations('LaunchRoadmap');
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="how-it-works" className="py-32 bg-slate-50 overflow-hidden relative" ref={containerRef}>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-24">
                    <span className="text-brand-amber font-bold tracking-widest uppercase text-sm mb-4 block">
                        {t('tagline')}
                    </span>
                    <Typography variant="h2" className="mb-4 text-brand-ink">
                        {t('title')}
                    </Typography>
                    <Typography variant="lead" className="text-brand-ink/80 max-w-2xl mx-auto">
                        {t('description')}
                    </Typography>
                </div>

                <div className="relative">
                    {/* The Animated Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-brand-navy origin-top"
                            style={{
                                scaleY: smoothProgress,
                                height: "100%"
                            }}
                        />
                    </div>

                    {/* The Steps */}
                    <div className="space-y-24 relative">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0; // for desktop alternating

                            // Map step index to a threshold roughly representing its position
                            // For 4 steps, thresholds are roughly 0, 0.33, 0.66, 1
                            const threshold = index / (steps.length - 1);

                            return (
                                <RoadmapStep
                                    key={index}
                                    step={step}
                                    index={index}
                                    isEven={isEven}
                                    progress={smoothProgress}
                                    threshold={threshold}
                                    label={t('stepLabel', { number: index + 1 })}
                                    title={t(`steps.${index}.title`)}
                                    description={t(`steps.${index}.description`)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RoadmapStep({ step, isEven, progress, threshold, label, title, description }: any) {
    // When progress passes this step's threshold, it becomes "active"
    const isActive = useTransform(progress, (p: number) => p >= (threshold - 0.1));
    const opacity = useTransform(progress, [threshold - 0.3, threshold - 0.1], [0.3, 1]);
    const scale = useTransform(progress, [threshold - 0.3, threshold - 0.1], [0.8, 1]);

    // For the icon background color
    const bgColor = useTransform(isActive, (active) => active ? "var(--brand-navy, #0f172a)" : "var(--slate-200, #e2e8f0)");
    const iconColor = useTransform(isActive, (active) => active ? "#ffffff" : "var(--slate-400, #94a3b8)");
    const borderColor = useTransform(isActive, (active) => active ? "var(--brand-amber, #d97706)" : "transparent");

    return (
        <div className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

            {/* The Node */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg transition-colors duration-500 ease-out"
                    style={{
                        backgroundColor: bgColor,
                        borderColor: borderColor,
                        color: iconColor
                    }}
                >
                    <step.icon className="w-6 h-6" />
                </motion.div>
            </div>

            {/* Content Box */}
            <motion.div
                className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                style={{ opacity, scale }}
            >
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow relative overflow-hidden group text-brand-ink">
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-ink group-hover:scale-110 transition-transform duration-500">
                        <step.icon className="w-32 h-32 transform translate-x-1/4 -translate-y-1/4" />
                    </div>

                    <div className="relative z-10">
                        <span className="text-sm font-bold text-brand-ink/70 mb-2 block">
                            {label}
                        </span>
                        <Typography variant="h3" className="mb-4 text-brand-ink font-serif">
                            {title}
                        </Typography>
                        <p className="text-brand-ink/80 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
