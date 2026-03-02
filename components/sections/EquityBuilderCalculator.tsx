"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Home, PiggyBank, TrendingUp, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Typography } from "@/components/ui/Typography";
import { useTranslations } from "next-intl";

export function EquityBuilderCalculator() {
    const t = useTranslations("EquityBuilderCalculator");
    const [mortgageBalance, setMortgageBalance] = useState<number | "">("");
    const [estimatedValue, setEstimatedValue] = useState<number | "">("");
    const [isCalculated, setIsCalculated] = useState(false);

    // Default values for visual preview before calculation
    const displayMortgage = mortgageBalance || 350000;
    const displayValue = estimatedValue || 850000;

    // Safety check to prevent negative equity in visual calculation
    const equityUnlocked = Math.max(0, Number(displayValue) - Number(displayMortgage));

    // Calculate percentages for the visual bar (cap at 100%)
    const mortgagePercentage = Math.min(100, (Number(displayMortgage) / Number(displayValue)) * 100) || 40;
    const equityPercentage = Math.max(0, 100 - mortgagePercentage);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        if (mortgageBalance && estimatedValue) {
            setIsCalculated(true);
        }
    };

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left side: Context & Form */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-brand-amber text-sm font-bold tracking-wider uppercase mb-3 inline-block">
                                {t('badge')}
                            </span>
                            <Typography variant="h2" className="mb-4">
                                {t('title')}
                            </Typography>
                            <Typography variant="lead" className="text-muted-foreground">
                                {t('description')}
                            </Typography>
                        </div>

                        <Card className="shadow-lg border-border/50 bg-background/50 backdrop-blur-sm p-0 sm:p-0">
                            <div className="flex flex-col space-y-1.5 p-6 border-b border-border/50">
                                <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2 text-xl">
                                    <Calculator className="w-5 h-5 text-brand-amber" />
                                    <span>{t('calculatorTitle')}</span>
                                </h3>
                                <p className="text-sm text-muted-foreground">{t('calculatorDescription')}</p>
                            </div>
                            <div className="p-6">
                                <form onSubmit={handleCalculate} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="estimatedValue">{t('homeValueLabel')}</Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                            <Input
                                                id="estimatedValue"
                                                type="number"
                                                placeholder="850,000"
                                                className="pl-8 text-lg"
                                                value={estimatedValue}
                                                onChange={(e) => {
                                                    setEstimatedValue(e.target.value ? Number(e.target.value) : "");
                                                    setIsCalculated(false);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mortgageBalance">{t('mortgageBalanceLabel')}</Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                            <Input
                                                id="mortgageBalance"
                                                type="number"
                                                placeholder="350,000"
                                                className="pl-8 text-lg"
                                                value={mortgageBalance}
                                                onChange={(e) => {
                                                    setMortgageBalance(e.target.value ? Number(e.target.value) : "");
                                                    setIsCalculated(false);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white group"
                                        size="lg"
                                    >
                                        {t('calculateButton')}
                                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </div>
                            <div className="bg-muted/50 rounded-b-xl border-t border-border/50 text-xs text-muted-foreground p-4">
                                {t('disclaimer')}
                            </div>
                        </Card>
                    </div>

                    {/* Right side: Visualization */}
                    <div className="relative h-full flex flex-col justify-center">
                        <div className="absolute inset-0 bg-brand-amber/5 blur-[100px] rounded-full -z-10" />

                        <div className="space-y-8">
                            {/* The Value Chart */}
                            <div className="bg-background rounded-2xl p-8 shadow-xl border border-border/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <TrendingUp className="w-32 h-32" />
                                </div>

                                <Typography variant="h4" className="mb-6 relative z-10">
                                    {isCalculated ? t('chartTitleAfter') : t('chartTitleBefore')}
                                </Typography>

                                {/* Visual Bar */}
                                <div className="h-16 w-full rounded-full bg-muted overflow-hidden flex mb-8 relative z-10 shadow-inner">
                                    <motion.div
                                        className="h-full bg-slate-200 border-r border-background flex items-center justify-center relative overflow-hidden group"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${mortgagePercentage}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        {mortgagePercentage > 15 && (
                                            <span className="text-xs font-semibold text-slate-500 truncate px-2">
                                                {t('banksShare')}
                                            </span>
                                        )}
                                    </motion.div>
                                    <motion.div
                                        className="h-full bg-brand-amber flex items-center justify-center relative overflow-hidden"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${equityPercentage}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 w-1/2 skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]" />
                                        {equityPercentage > 15 && (
                                            <span className="text-xs font-bold text-white tracking-wider truncate px-2 drop-shadow-sm">
                                                {t('yourEquity')}
                                            </span>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Metrics Breakdown */}
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                                            <Home className="w-4 h-4" />
                                            <span className="text-sm font-medium">{t('homeValueMetric')}</span>
                                        </div>
                                        <Typography variant="h3" className="text-slate-900">
                                            {formatCurrency(Number(displayValue))}
                                        </Typography>
                                    </div>

                                    <div className="space-y-2 p-4 rounded-xl bg-brand-amber/10 border border-brand-amber/20">
                                        <div className="flex items-center gap-2 text-brand-amber mb-1">
                                            <PiggyBank className="w-4 h-4" />
                                            <span className="text-sm font-medium">{t('cashOutPotential')}</span>
                                        </div>
                                        <Typography variant="h3" className="text-brand-amber">
                                            {formatCurrency(equityUnlocked)}
                                        </Typography>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic CTA based on calculation state */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isCalculated ? 1 : 0.5, y: 0 }}
                                className="text-center"
                            >
                                <Button
                                    className={`rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all ${isCalculated ? 'bg-brand-navy text-white hover:bg-brand-navy/90 hover:scale-105 hover:shadow-xl' : 'bg-background border-2 border-brand-navy text-brand-navy hover:bg-muted'}`}
                                >
                                    {isCalculated ? t('ctaAfter') : t('ctaBefore')}
                                </Button>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
