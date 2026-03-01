import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "amber";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        const variants = {
            default: "bg-brand-ink text-white hover:bg-brand-ink/90 shadow",
            amber: "bg-brand-amber text-brand-ink hover:bg-brand-amber/90 font-bold shadow-lg shadow-brand-amber/20",
            outline: "border border-glass-border bg-glass-bg hover:bg-white/10 text-white",
            ghost: "hover:bg-white/10 text-white",
            link: "text-brand-amber underline-offset-4 hover:underline",
        };

        const sizes = {
            default: "h-12 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-md px-8 text-lg",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
