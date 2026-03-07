"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export function StickyFastTrackHeader() {
    const [isVisible, setIsVisible] = useState(false);
    const t = useTranslations("Navigation");
    const router = useRouter();

    const navigateToValuation = () => {
        router.push('/valuation');
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show header after scrolling down 600px (roughly past the hero)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Translate the header in/out based on scroll
    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-[80px]" : "-translate-y-full"
                }`}
        >
            <div className="w-full bg-brand-stone/95 backdrop-blur-md border-b border-brand-ink/10 shadow-sm py-3 line-clamp-1">
                <div className="container mx-auto px-6 max-w-[1280px] flex items-center justify-between">

                    {/* Value Proposition */}
                    <div className="flex items-center gap-3">
                        <span className="flex h-2 w-2 rounded-full bg-brand-amber animate-pulse" />
                        <p className="text-sm font-semibold text-brand-ink hidden sm:block">
                            {t("stickyTitle")}
                        </p>
                    </div>

                    {/* Fast Track CTA */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="amber"
                            size="sm"
                            className="font-medium text-sm px-5 h-9"
                            onClick={navigateToValuation}
                        >
                            <span>{t("stickyButton")}</span>
                            <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}
