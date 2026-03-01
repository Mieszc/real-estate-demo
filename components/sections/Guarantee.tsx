import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, EyeOff, Scale } from "lucide-react";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Guarantee() {
    const points = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-brand-amber" />,
            title: "30-Day Listing Guarantee",
            description: "If your home isn't under contract in 30 days, our listing fee drops by 50%. We put our money where our mouth is."
        },
        {
            icon: <EyeOff className="w-10 h-10 text-brand-amber" />,
            title: "Zero-Hidden Fees",
            description: "What you see is what you pay. Marketing, staging consultation, and premium photography are all included in a single flat fee."
        },
        {
            icon: <Scale className="w-10 h-10 text-brand-amber" />,
            title: "The Apex Promise",
            description: "You can cancel your listing agreement at any time, for any reason, with zero penalty. If we don't earn your trust, we don't earn your business."
        }
    ];

    return (
        <section id="guarantee" className="w-full bg-brand-stone py-24">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <AnimateInView delay={0.1} className="text-center mb-16">
                    <Typography variant="h2" className="text-brand-ink mb-4">
                        Peace of Mind Guarantee
                    </Typography>
                    <Typography variant="lead" className="text-brand-ink/70 max-w-2xl mx-auto">
                        Real estate transactions don't have to be stressful. We've removed the risk so you can focus on your next chapter.
                    </Typography>
                </AnimateInView>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {points.map((val, idx) => (
                        <AnimateInView key={idx} delay={0.2 + (idx * 0.1)}>
                            <Card className="bg-white border-black/5 shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 h-full">
                                <div className="mb-6 bg-brand-stone/50 w-20 h-20 rounded-2xl flex items-center justify-center">
                                    {val.icon}
                                </div>
                                <Typography variant="h4" className="text-brand-ink mb-3">{val.title}</Typography>
                                <Typography variant="p" className="text-brand-ink/70 leading-relaxed mt-0">
                                    {val.description}
                                </Typography>
                            </Card>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
