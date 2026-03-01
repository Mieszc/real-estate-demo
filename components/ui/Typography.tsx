import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "small" | "muted" | "editorial";
    asChild?: boolean;
}

export function Typography({ className, variant = "p", asChild = false, ...props }: TypographyProps) {
    const isHeader = variant?.startsWith("h") && variant.length === 2;
    const Component = asChild ? Slot : (isHeader ? variant : "p") as React.ElementType;

    const variants = {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
        editorial: "font-serif text-3xl font-medium italic text-brand-amber lg:text-4xl",
    };

    return (
        <Component
            className={cn(variants[variant], className)}
            {...props}
        />
    );
}
