"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal, Clock, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

export function ListingSpeedSlider() {
    const sliderPosition = useMotionValue(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Derived values for motion styling
    const clipPath = useTransform(sliderPosition, (pos) => `polygon(0% 0%, ${pos}% 0%, ${pos}% 100%, 0% 100%)`);
    const draggerLeft = useTransform(sliderPosition, (pos) => `${pos}%`);

    const handleHandleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let clientX = 0;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = (e as React.MouseEvent).clientX;
        }

        const xPos = clientX - containerRect.left;
        const newPos = Math.max(0, Math.min(100, (xPos / containerRect.width) * 100));
        sliderPosition.set(newPos);
    };

    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleHandleDrag);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleHandleDrag);
            window.addEventListener('touchend', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleHandleDrag);
                window.removeEventListener('mouseup', handleMouseUp);
                window.removeEventListener('touchmove', handleHandleDrag);
                window.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -z-10 rounded-l-full blur-3xl" />

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-amber font-bold tracking-widest uppercase text-sm">
                        The Apex Advantage
                    </span>
                    <Typography variant="h2" className="text-brand-ink">
                        Why We Consistently Outperform
                    </Typography>
                    <Typography variant="lead" className="max-w-2xl mx-auto text-brand-ink/80">
                        Drag the slider to compare the traditional market reality against the Apex Horizon standard. Time is money in real estate.
                    </Typography>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl border border-border/50 bg-slate-100 select-none"
                    onMouseDown={(e) => {
                        setIsDragging(true);
                        handleHandleDrag(e);
                    }}
                    onTouchStart={(e) => {
                        setIsDragging(true);
                        handleHandleDrag(e);
                    }}
                >
                    {/* BOTTOM LAYER: Traditional Agent (Right side conceptually, revealed as you drag left) */}
                    <div className="absolute inset-0 bg-slate-100 flex flex-col justify-center p-8 md:p-16 text-brand-ink">
                        <div className="max-w-md ml-auto md:w-1/2 opacity-80 pl-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ink/10 text-brand-ink text-sm font-semibold mb-6">
                                <AlertCircle className="w-4 h-4" /> Traditional Broker
                            </span>

                            <h3 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6 font-serif">
                                Stale & Slow
                            </h3>

                            <div className="space-y-8">
                                <div className="space-y-2 border-l-4 border-slate-300 pl-4">
                                    <div className="flex items-center gap-2 text-brand-ink/70">
                                        <Clock className="w-5 h-5" />
                                        <span className="uppercase tracking-wider font-semibold text-sm">Time on Market</span>
                                    </div>
                                    <div className="text-3xl font-bold text-brand-ink">45+ Days</div>
                                    <p className="text-brand-ink/70 text-sm">Sitting on MLS, accumulating "Days on Market" stigma.</p>
                                </div>

                                <div className="space-y-2 border-l-4 border-slate-300 pl-4">
                                    <div className="flex items-center gap-2 text-brand-ink/70">
                                        <TrendingUp className="w-5 h-5" />
                                        <span className="uppercase tracking-wider font-semibold text-sm">Final Sales Price</span>
                                    </div>
                                    <div className="text-3xl font-bold text-brand-ink">96% of Ask</div>
                                    <p className="text-brand-ink/70 text-sm">Price drops required to generate buyer interest.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TOP LAYER: Apex Strategy (Clipped) */}
                    <motion.div
                        className="absolute inset-0 bg-slate-50 flex flex-col justify-center p-8 md:p-16 text-brand-ink"
                        style={{ clipPath, WebkitClipPath: clipPath }}
                    >
                        <div className="max-w-md md:w-1/2 flex flex-col items-start pr-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ink/10 text-brand-ink text-sm font-bold mb-6">
                                <CheckCircle2 className="w-4 h-4" /> The Apex Strategy
                            </span>

                            <h3 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6 font-serif">
                                Fast & Profitable
                            </h3>

                            <div className="space-y-8 w-full">
                                <div className="space-y-2 border-l-4 border-brand-amber pl-4">
                                    <div className="flex items-center gap-2 text-brand-ink/70">
                                        <Clock className="w-5 h-5 text-brand-amber" />
                                        <span className="uppercase tracking-wider font-semibold text-sm">Time on Market</span>
                                    </div>
                                    <div className="text-4xl font-bold text-brand-ink">7 Days</div>
                                    <p className="text-brand-ink/80 text-sm">Pre-market hype leading to opening weekend multiple-offers.</p>
                                </div>

                                <div className="space-y-2 border-l-4 border-brand-amber pl-4">
                                    <div className="flex items-center gap-2 text-brand-ink/70">
                                        <TrendingUp className="w-5 h-5 text-brand-amber" />
                                        <span className="uppercase tracking-wider font-semibold text-sm">Final Sales Price</span>
                                    </div>
                                    <div className="text-4xl font-bold text-green-600">104% of Ask</div>
                                    <p className="text-brand-ink/80 text-sm">Bidding wars generated by perfect presentation & positioning.</p>
                                </div>
                            </div>
                        </div>

                        {/* Faint watermark abstract geometry for Apex side */}
                        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/3 translate-y-1/3 blur-xl">
                            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-amber to-transparent rotate-45" />
                        </div>
                    </motion.div>

                    {/* THE DRAGGER LINE */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center transform -translate-x-1/2"
                        style={{ left: draggerLeft }}
                    >
                        {/* THE HANDLE */}
                        <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-brand-navy text-brand-navy active:scale-95 transition-transform hover:scale-110">
                            <MoveHorizontal className="w-6 h-6" />
                        </div>
                    </motion.div>
                </div>

                {/* Mobile instruction */}
                <p className="text-center text-sm text-slate-400 mt-6 md:hidden">
                    Swipe left and right to compare
                </p>
            </div>
        </section>
    );
}
