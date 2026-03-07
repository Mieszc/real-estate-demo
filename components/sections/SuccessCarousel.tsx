"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const stories = [
    {
        result: "Sold £45k over asking in 7 days",
        text: "We were skeptical of the flat fee at first, but the Apex team provided better service than our previous 3% broker. Transparency at its finest.",
        location: "Kensington",
        stars: 5
    },
    {
        result: "Listed and closed in 14 days",
        text: "The staging advice and premium photography made our property stand out immediately. The constant communication gave us total peace of mind.",
        location: "Notting Hill",
        stars: 5
    },
    {
        result: "Saved £22,000 in commissions",
        text: "Why would anyone pay traditional commissions anymore? The process was fully transparent, from valuation to the final close.",
        location: "Chelsea",
        stars: 5
    },
    {
        result: "Multiple offers within 48 hours",
        text: "Their proprietary data accurately priced our home to drive a bidding war. The Lead Strategist handled everything perfectly.",
        location: "Islington",
        stars: 5
    },
];

export function SuccessCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = stories.length - 1;
            if (nextIndex >= stories.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section id="success" className="w-full bg-brand-ink py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="text-center mb-16 px-4">
                    <Typography variant="h2" className="text-white mb-4">
                        Success Stories
                    </Typography>
                    <Typography variant="lead" className="text-brand-stone/70">
                        Real results for London homeowners who chose the smarter path.
                    </Typography>
                </div>

                <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) paginate(1);
                                else if (swipe > swipeConfidenceThreshold) paginate(-1);
                            }}
                            className="absolute w-full px-4"
                        >
                            <TiltCard>
                                <Card className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 lg:p-12 flex flex-col items-center text-center shadow-2xl">
                                    <div className="flex gap-1 mb-6 text-brand-amber">
                                        {[...Array(stories[currentIndex].stars)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 fill-current" />
                                        ))}
                                    </div>
                                    <Typography variant="h3" className="text-white mb-6">
                                        &quot;{stories[currentIndex].result}&quot;
                                    </Typography>
                                    <Typography variant="lead" className="text-brand-stone/80 mb-8 italic">
                                        {stories[currentIndex].text}
                                    </Typography>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-brand-amber/20 flex items-center justify-center">
                                            <User className="text-brand-amber w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-brand-stone text-sm font-medium">Homeowner</span>
                                            <Typography variant="small" className="text-brand-amber font-bold uppercase tracking-wider block">
                                                {stories[currentIndex].location}
                                            </Typography>
                                        </div>
                                    </div>
                                </Card>
                            </TiltCard>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors z-10"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors z-10"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {stories.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                currentIndex === idx ? "bg-brand-amber w-8" : "bg-white/20 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
