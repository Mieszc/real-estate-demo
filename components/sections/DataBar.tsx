import { Typography } from "@/components/ui/Typography";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function DataBar() {
    return (
        <section className="w-full bg-brand-stone py-16 border-y border-black/5 relative z-10">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
                    <AnimateInView delay={0.1} className="flex flex-col items-center justify-center p-4">
                        <Typography variant="h2" className="text-brand-ink mb-2 text-5xl lg:text-6xl font-extrabold tracking-tighter">8 Days</Typography>
                        <Typography variant="small" className="text-brand-ink/70 uppercase tracking-widest font-bold mt-2">Average Days on Market</Typography>
                    </AnimateInView>
                    <AnimateInView delay={0.2} className="flex flex-col items-center justify-center p-4">
                        <Typography variant="h2" className="text-brand-ink mb-2 text-5xl lg:text-6xl font-extrabold tracking-tighter">104%</Typography>
                        <Typography variant="small" className="text-brand-ink/70 uppercase tracking-widest font-bold mt-2">Sold vs. Asking</Typography>
                    </AnimateInView>
                    <AnimateInView delay={0.3} className="flex flex-col items-center justify-center p-4">
                        <Typography variant="h2" className="text-brand-ink mb-2 text-5xl lg:text-6xl font-extrabold tracking-tighter">450+</Typography>
                        <Typography variant="small" className="text-brand-ink/70 uppercase tracking-widest font-bold mt-2">Homes Sold in London</Typography>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
