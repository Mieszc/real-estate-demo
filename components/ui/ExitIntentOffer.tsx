"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, Download, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";

export function ExitIntentOffer() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const hasSeenOffer = sessionStorage.getItem("apexExitOfferSeen");

        if (!hasSeenOffer) {
            const handleMouseLeave = (e: MouseEvent) => {
                // Trigger only when mouse moves UP towards browser tabs
                // Usually clientY < 10 or 20 indicates attempting to close/switch tab
                if (e.clientY < 20) {
                    setIsVisible(true);
                    sessionStorage.setItem("apexExitOfferSeen", "true");
                    // Important: remove listener once triggered to avoid firing multiple times
                    document.removeEventListener("mouseleave", handleMouseLeave);
                }
            };

            document.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                document.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In a real app, send to API/CRM here
            setIsSubmitted(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
                        onClick={() => setIsVisible(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-2xl w-full relative z-10 flex flex-col md:flex-row"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-brand-navy hover:bg-slate-200 transition-colors z-20"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Visual side */}
                        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-brand-navy text-white text-center border-r border-slate-800">
                            <div className="w-24 h-32 bg-brand-amber text-brand-navy rounded-lg shadow-[0_0_30px_rgba(217,119,6,0.3)] flex items-center justify-center mb-6 transform -rotate-6 hover:rotate-0 transition-transform">
                                <BookOpen className="w-12 h-12" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-2">The Seller's Playbook</h3>
                            <p className="text-slate-400 text-sm">Free PDF Download</p>
                        </div>

                        {/* Content side */}
                        <div className="w-full md:w-3/5 p-8 md:p-12 relative">
                            {/* Texture */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <ShieldCheck className="w-32 h-32" />
                            </div>

                            {!isSubmitted ? (
                                <>
                                    <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-3 block">
                                        Wait before you go!
                                    </span>
                                    <Typography variant="h3" className="text-brand-navy mb-4 leading-tight font-serif min-h-[60px]">
                                        5 Red Flags Your Agent Is Overpricing Your Home
                                    </Typography>
                                    <p className="text-slate-600 mb-6 text-sm">
                                        Don't let your home become a stale listing. Download our insider playbook detailing the warning signs of a failing real estate strategy.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                        <div className="space-y-2">
                                            <Input
                                                type="email"
                                                placeholder="Enter your email address"
                                                required
                                                className="bg-slate-50 border-slate-200 text-brand-navy"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <Button type="submit" className="w-full bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold group">
                                            <Download className="w-4 h-4 mr-2" />
                                            Send Me The Playbook
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </form>
                                    <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-wider">
                                        We respect your privacy. Unsubscribe anytime.
                                    </p>
                                </>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <Typography variant="h3" className="text-brand-navy mb-2">
                                        Playbook Sent!
                                    </Typography>
                                    <p className="text-slate-600 text-sm">
                                        Check your inbox in a few minutes. Closing this window...
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
