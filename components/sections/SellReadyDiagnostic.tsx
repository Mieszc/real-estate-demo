"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Home, User, PaintRoller, TrendingUp, HandCoins, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { useTranslations } from "next-intl";

export function SellReadyDiagnostic() {
    const t = useTranslations("SellReadyDiagnostic");
    const [step, setStep] = useState(1);

    // Form state (simulated collection)
    const [goal, setGoal] = useState("");
    const [renovation, setRenovation] = useState("");
    const [listed, setListed] = useState("");

    const nextStep = () => setStep(prev => prev + 1);

    // Animation variants
    const formVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
    };

    return (
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -z-10 rounded-l-full blur-3xl opacity-20" />
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 w-[600px] h-[600px] bg-brand-amber/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-amber font-bold tracking-widest uppercase text-sm">
                        {t('badge')}
                    </span>
                    <Typography variant="h2" className="text-white">
                        {t('title')}
                    </Typography>
                    <Typography variant="lead" className="text-slate-300 max-w-2xl mx-auto">
                        {t('description')}
                    </Typography>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    {/* Progress Indicator */}
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-sm font-semibold text-slate-400">
                            {t('stepProgress', { step: step, total: step < 4 ? '3' : '4' })}
                        </span>
                        <div className="flex gap-2">
                            {[1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className={`h-1.5 w-12 rounded-full transition-all duration-300 ${i <= step ? 'bg-brand-amber' : 'bg-slate-800'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Step Containers */}
                    <AnimatePresence mode="wait">

                        {/* STEP 1: Goal */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <Typography variant="h3" className="text-white text-center mb-8">
                                    {t('step1.question')}
                                </Typography>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { id: "speed", label: t('step1.options.speed.label'), icon: ArrowRight, desc: t('step1.options.speed.desc') },
                                        { id: "price", label: t('step1.options.price.label'), icon: TrendingUp, desc: t('step1.options.price.desc') },
                                        { id: "privacy", label: t('step1.options.privacy.label'), icon: ShieldCheck, desc: t('step1.options.privacy.desc') }
                                    ].map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => { setGoal(option.id); nextStep(); }}
                                            className={`text-left p-6 rounded-2xl border-2 transition-all group ${goal === option.id ? 'border-brand-amber bg-brand-amber/10' : 'border-slate-800 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'}`}
                                        >
                                            <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-full flex items-center justify-center border border-slate-700">
                                                <option.icon className={`w-6 h-6 ${goal === option.id ? 'text-brand-amber' : 'text-slate-400 group-hover:text-white'}`} />
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">{option.label}</h4>
                                            <p className="text-sm text-slate-400">{option.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Renovation */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <Typography variant="h3" className="text-white text-center mb-8">
                                    {t('step2.question')}
                                </Typography>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { id: "none", label: t('step2.options.none.label'), icon: Home, desc: t('step2.options.none.desc') },
                                        { id: "partial", label: t('step2.options.partial.label'), icon: PaintRoller, desc: t('step2.options.partial.desc') },
                                        { id: "full", label: t('step2.options.full.label'), icon: HandCoins, desc: t('step2.options.full.desc') }
                                    ].map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => { setRenovation(option.id); nextStep(); }}
                                            className={`text-left p-6 rounded-2xl border-2 transition-all group ${renovation === option.id ? 'border-brand-amber bg-brand-amber/10' : 'border-slate-800 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'}`}
                                        >
                                            <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-full flex items-center justify-center border border-slate-700">
                                                <option.icon className={`w-6 h-6 ${renovation === option.id ? 'text-brand-amber' : 'text-slate-400 group-hover:text-white'}`} />
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">{option.label}</h4>
                                            <p className="text-sm text-slate-400">{option.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Current Broker Status */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8 max-w-2xl mx-auto"
                            >
                                <Typography variant="h3" className="text-white text-center mb-8">
                                    {t('step3.question')}
                                </Typography>

                                <div className="flex flex-col gap-4">
                                    {[
                                        { id: "no", label: t('step3.options.no.label'), icon: CheckCircle2 },
                                        { id: "yes_active", label: t('step3.options.yes_active.label'), icon: User },
                                        { id: "expired", label: t('step3.options.expired.label'), icon: Clock }
                                    ].map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => { setListed(option.id); nextStep(); }}
                                            className={`flex items-center text-left p-6 rounded-2xl border-2 transition-all group ${listed === option.id ? 'border-brand-amber bg-brand-amber/10' : 'border-slate-800 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'}`}
                                        >
                                            <div className="mr-6 bg-slate-900/50 w-12 h-12 rounded-full flex items-center justify-center border border-slate-700 shrink-0">
                                                <option.icon className={`w-6 h-6 ${listed === option.id ? 'text-brand-amber' : 'text-slate-400 group-hover:text-white'}`} />
                                            </div>
                                            <h4 className="text-lg font-bold text-white flex-1">{option.label}</h4>
                                            <ChevronRight className={`w-5 h-5 ${listed === option.id ? 'text-brand-amber opacity-100' : 'text-slate-600 opacity-0 group-hover:opacity-100'}`} />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Success / Assessment Complete */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                className="text-center space-y-8 max-w-xl mx-auto py-8"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                                </div>
                                <Typography variant="h3" className="text-white">
                                    {t('step4.title')}
                                </Typography>
                                <p className="text-slate-300 text-lg">
                                    {t.rich('step4.resultText', {
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        goal: t(`step4.goals.${goal}` as any),
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        renovation: t(`step4.renovations.${renovation}` as any),
                                        bold: (chunks) => <strong>{chunks}</strong>
                                    })}
                                </p>
                                <div className="pt-4">
                                    <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-white w-full sm:w-auto font-bold px-8 py-6 rounded-full text-lg shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                                        {t('step4.ctaButton')}
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <p className="text-slate-500 text-xs mt-4">{t('step4.ctaDisclaimer')}</p>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
