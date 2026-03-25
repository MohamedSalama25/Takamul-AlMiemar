import * as React from "react";
import { cn } from "@/shared/lib/cn";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-brand-primary-container text-brand-primary border-l-2 border-brand-tertiary hover:shadow-[0_0_20px_rgba(234,195,74,0.3)]",
            secondary: "bg-surface-container text-foreground hover:bg-surface-container-high",
            outline: "bg-transparent border border-surface-container-highest text-foreground hover:bg-surface-container-low",
            ghost: "bg-transparent text-foreground hover:bg-surface-container-low",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs",
            md: "px-6 py-3 text-sm",
            lg: "px-8 py-4 text-md",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-display font-medium uppercase tracking-widest rounded-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
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
