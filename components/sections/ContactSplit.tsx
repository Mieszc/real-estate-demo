"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

export function ContactSplit() {
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            setTimeout(() => setFormState('idle'), 4000);
        }, 1500);
    };

    const contactOptions = [
        {
            icon: <Phone className="w-5 h-5 text-brand-amber" />,
            title: "Call Us",
            detail: "+44 (0) 20 7123 4567"
        },
        {
            icon: <Mail className="w-5 h-5 text-brand-amber" />,
            title: "Email",
            detail: "hello@apexhorizon.com"
        },
        {
            icon: <MapPin className="w-5 h-5 text-brand-amber" />,
            title: "Office Menu",
            detail: "1 Berkeley Square, Mayfair, London"
        }
    ];

    return (
        <section className="w-full bg-brand-ink py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Copy and Badges (Stacks on Top on Mobile due to standard DOM flow) */}
                    <AnimateInView delay={0.1} direction="right" className="flex flex-col gap-8">
                        <div>
                            <Typography variant="h2" className="text-white mb-4">
                                Let's Discuss Your <span className="text-brand-amber">Next Move.</span>
                            </Typography>
                            <Typography variant="lead" className="text-brand-stone/70">
                                Whether you're ready to list today or just want to understand the current London market, our Lead Strategists are standing by.
                            </Typography>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                            {contactOptions.map((opt, i) => (
                                <div key={i} className="flex items-center gap-6 glass-panel p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="bg-brand-stone/10 p-4 rounded-full">
                                        {opt.icon}
                                    </div>
                                    <div>
                                        <Typography variant="small" className="text-brand-stone/60 uppercase tracking-widest font-bold block mb-1">
                                            {opt.title}
                                        </Typography>
                                        <Typography variant="large" className="text-white">
                                            {opt.detail}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimateInView>

                    {/* Right Side: Contact Form (Stacks on Bottom on Mobile) */}
                    <AnimateInView delay={0.3} direction="left" className="relative">
                        <Card className="bg-white/5 border-white/10 p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                            <Typography variant="h3" className="text-white mb-8 border-b border-white/10 pb-4">
                                Send a Message
                            </Typography>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-brand-stone/80">First Name</label>
                                        <Input placeholder="James" required disabled={formState !== 'idle'} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-brand-stone/80">Last Name</label>
                                        <Input placeholder="Bond" required disabled={formState !== 'idle'} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-brand-stone/80">Email Address</label>
                                    <Input type="email" placeholder="james@example.com" required disabled={formState !== 'idle'} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-brand-stone/80">How can we help?</label>
                                    <textarea
                                        className="flex min-h-[120px] w-full rounded-md border text-white border-white/10 bg-white/5 px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-stone/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-amber disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="I want to value my property in Chelsea..."
                                        required
                                        disabled={formState !== 'idle'}
                                    />
                                </div>

                                <MagneticWrapper className="w-full mt-4">
                                    <Button
                                        type="submit"
                                        variant="amber"
                                        className="w-full h-12"
                                        disabled={formState === 'loading' || formState === 'success'}
                                    >
                                        {formState === 'loading' ? 'Sending...' : 'Send Message'}
                                        {formState === 'idle' && <Send className="ml-2 w-4 h-4" />}
                                    </Button>
                                </MagneticWrapper>
                            </form>

                            {/* Success Pop-up */}
                            <AnimatePresence>
                                {formState === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-ink/95 backdrop-blur-md rounded-xl border border-green-500/30 p-8 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                            <Send className="w-8 h-8 text-green-500" />
                                        </div>
                                        <Typography variant="h3" className="text-white mb-2">Message Sent!</Typography>
                                        <Typography variant="p" className="text-brand-stone/80">
                                            A Lead Strategist will contact you within 24 hours.
                                        </Typography>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>

                        {/* Decorative Glow behind form */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-amber/5 blur-[100px] rounded-full pointer-events-none -z-10" />
                    </AnimateInView>

                </div>
            </div>
        </section>
    );
}
