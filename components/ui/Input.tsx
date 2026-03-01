import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, ...props }, ref) => {
        return (
            <div className="relative flex items-center w-full">
                {icon && (
                    <div className="absolute left-4 text-brand-stone/60">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-md border border-glass-border bg-glass-bg px-4 py-2 text-sm text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-stone/40 hover:border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-amber disabled:cursor-not-allowed disabled:opacity-50",
                        icon && "pl-11",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
