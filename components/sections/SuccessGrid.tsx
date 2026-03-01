import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { User } from "lucide-react";

export function SuccessGrid() {
    const stories = [
        {
            result: "Sold £45k over asking in 7 days",
            text: "We were skeptical of the flat fee at first, but the Apex team provided better service than our previous 3% broker. Transparency at its finest.",
            location: "Kensington"
        },
        {
            result: "Listed and closed in 14 days",
            text: "The staging advice and premium photography made our property stand out immediately. The constant communication gave us total peace of mind.",
            location: "Notting Hill"
        },
        {
            result: "Saved £22,000 in commissions",
            text: "Why would anyone pay traditional commissions anymore? The process was fully transparent, from valuation to the final close.",
            location: "Chelsea"
        },
        {
            result: "Multiple offers within 48 hours",
            text: "Their proprietary data accurately priced our home to drive a bidding war. The Lead Strategist handled everything perfectly.",
            location: "Islington"
        },
    ];

    return (
        <section className="w-full bg-brand-ink py-24">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="text-center mb-16 px-4">
                    <Typography variant="h2" className="text-white mb-4">
                        Success Stories
                    </Typography>
                    <Typography variant="lead" className="text-brand-stone/70">
                        Real results for London homeowners who chose the smarter path.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stories.map((story, idx) => (
                        <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300 p-6 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-stone/10 flex items-center justify-center overflow-hidden">
                                    <User className="text-brand-stone/50 w-6 h-6" />
                                </div>
                                <div>
                                    <Typography variant="small" className="text-brand-amber font-bold uppercase tracking-wider block">
                                        {story.location}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h4" className="text-white mb-4 line-clamp-2">
                                "{story.result}"
                            </Typography>
                            <Typography variant="p" className="text-brand-stone/70 text-sm flex-1 leading-relaxed">
                                {story.text}
                            </Typography>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
