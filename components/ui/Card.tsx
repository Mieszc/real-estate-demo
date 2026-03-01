import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("glass-panel p-6 sm:p-8", className)}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
