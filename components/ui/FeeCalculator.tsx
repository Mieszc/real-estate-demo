"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/Typography";

export function FeeCalculator() {
    const [propertyValue, setPropertyValue] = useState(1000000);
    const apexFee = 4995;
    const traditionalPercentage = 0.025; // 2.5%
    const traditionalFee = Math.round(propertyValue * traditionalPercentage);
    const savings = traditionalFee - apexFee;

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="w-full bg-brand-ink/80 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-xl mb-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Background glow decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <Typography variant="h3" className="text-white mb-8 text-center relative z-10">
                Calculate Your Savings
            </Typography>

            <div className="mb-12 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                    <Typography variant="p" className="text-brand-stone/80 text-lg">Estimated Property Value</Typography>
                    <Typography variant="lead" className="text-brand-amber font-bold text-2xl sm:text-3xl bg-white/5 py-2 px-6 rounded-lg border border-white/10">
                        {formatCurrency(propertyValue)}
                    </Typography>
                </div>

                <input
                    type="range"
                    min="300000"
                    max="5000000"
                    step="50000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-amber outline-none hover:bg-white/20 transition-colors"
                />
                <div className="flex justify-between mt-3 text-xs font-semibold text-brand-stone/40 uppercase tracking-widest">
                    <span>£300k</span>
                    <span>£2.5M</span>
                    <span>£5M+</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                    <Typography variant="small" className="text-brand-stone/60 uppercase tracking-widest block mb-3 font-semibold">
                        Traditional Broker (2.5%)
                    </Typography>
                    <span className="text-3xl lg:text-4xl font-light text-red-400/80 mb-1 line-through decoration-red-400/50">
                        {formatCurrency(traditionalFee)}
                    </span>
                </div>

                <div className="p-6 bg-brand-amber/10 rounded-2xl border border-brand-amber/30 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-amber/5 z-0" />
                    <Typography variant="small" className="text-brand-amber uppercase tracking-widest block mb-3 font-semibold relative z-10">
                        Apex Flat Fee
                    </Typography>
                    <span className="text-3xl lg:text-4xl font-bold text-brand-amber relative z-10">
                        {formatCurrency(apexFee)}
                    </span>
                </div>

                <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/30 flex flex-col items-center justify-center">
                    <Typography variant="small" className="text-green-400 uppercase tracking-widest block mb-3 font-semibold">
                        Your Total Savings
                    </Typography>
                    <span className="text-4xl lg:text-5xl font-bold text-green-400">
                        {formatCurrency(savings > 0 ? savings : 0)}
                    </span>
                </div>
            </div>
        </div>
    );
}
