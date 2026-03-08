"use client";

import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    showText?: boolean;
}

export function Logo({
    className,
    iconClassName,
    textClassName,
    showText = true
}: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2 select-none pointer-events-none", className)}>
            <Icons.logo className={cn("w-8 h-8 text-brand-amber shrink-0", iconClassName)} />
            {showText && (
                <span className={cn(
                    "font-bold text-xl tracking-tighter uppercase",
                    textClassName
                )}>
                    Apex<span className="text-brand-amber">Horizon</span>
                </span>
            )}
        </div>
    );
}
