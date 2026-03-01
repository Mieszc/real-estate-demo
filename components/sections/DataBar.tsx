"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/Typography";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type NeighborhoodData = {
    name: string;
    daysOnMarket: string;
    soldVsAsking: string;
    homesSold: string;
};

const metricsData: NeighborhoodData[] = [
    { name: "London Average", daysOnMarket: "45 Days", soldVsAsking: "98%", homesSold: "10,000+" },
    { name: "Mayfair", daysOnMarket: "14 Days", soldVsAsking: "102%", homesSold: "120+" },
    { name: "Chelsea", daysOnMarket: "11 Days", soldVsAsking: "105%", homesSold: "210+" },
    { name: "Kensington", daysOnMarket: "9 Days", soldVsAsking: "106%", homesSold: "185+" },
    { name: "Apex Average", daysOnMarket: "8 Days", soldVsAsking: "104%", homesSold: "450+" },
];

export function DataBar() {
    const [selectedId, setSelectedId] = useState(4); // Apex Average by default

    return (
        <section className="w-full bg-brand-stone py-16 border-y border-black/5 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1280px]">

                <AnimateInView delay={0.1} className="flex flex-col items-center mb-12">
                    <Typography variant="small" className="text-brand-ink/60 uppercase tracking-widest font-bold mb-6">
                        Compare Our Performance
                    </Typography>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                        {metricsData.map((data, idx) => (
                            <button
                                key={data.name}
                                onClick={() => setSelectedId(idx)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                                    selectedId === idx
                                        ? "bg-brand-ink text-brand-amber border-brand-ink shadow-lg scale-105"
                                        : "bg-white/50 text-brand-ink/70 border-brand-ink/10 hover:bg-white hover:border-brand-ink/30"
                                )}
                            >
                                {data.name}
                            </button>
                        ))}
                    </div>
                </AnimateInView>

                <div className="relative min-h-[300px] md:min-h-0 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedId}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10 w-full"
                        >
                            <div className="flex flex-col items-center justify-center p-4">
                                <Typography variant="h2" className="text-brand-ink mb-2 text-5xl lg:text-6xl font-extrabold tracking-tighter">
                                    {metricsData[selectedId].daysOnMarket}
                                </Typography>
                                <Typography variant="small" className="text-brand-ink/70 uppercase tracking-widest font-bold mt-2">
                                    Average Days on Market
                                </Typography>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <Typography variant="h2" className="text-brand-ink mb-2 text-5xl lg:text-6xl font-extrabold tracking-tighter">
                                    {metricsData[selectedId].soldVsAsking}
                                </Typography>
                                <Typography variant="small" className="text-brand-ink/70 uppercase tracking-widest font-bold mt-2">
                                    Sold vs. Asking
                                </Typography>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <Typography variant="h2" className="text-brand-ink mb-2 text-5xl lg:text-6xl font-extrabold tracking-tighter">
                                    {metricsData[selectedId].homesSold}
                                </Typography>
                                <Typography variant="small" className="text-brand-ink/70 uppercase tracking-widest font-bold mt-2">
                                    Homes Sold in Area
                                </Typography>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
