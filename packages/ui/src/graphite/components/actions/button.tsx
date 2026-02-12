import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const buttonVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
    // Focus styles - keyboard only
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    // Disabled state
    "disabled:pointer-events-none disabled:opacity-50",
    // SVG handling
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    // Smooth transitions - Linear style
    "transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]",
    // Subtle press effect
    "active:scale-[0.98]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.2),0_0_12px_0_hsl(var(--primary)/0.15)]",
        ].join(" "),
        destructive: [
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/90 hover:shadow-[0_0_0_1px_hsl(var(--destructive)/0.2),0_0_12px_0_hsl(var(--destructive)/0.15)]",
        ].join(" "),
        outline: [
          "border border-input bg-transparent",
          "hover:bg-accent/10 hover:border-accent/50 hover:text-accent-foreground",
        ].join(" "),
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80 hover:text-foreground",
        ].join(" "),
        ghost: [
          "hover:bg-accent/10 hover:text-accent-foreground",
        ].join(" "),
        link: [
          "text-primary underline-offset-4",
          "hover:underline hover:text-primary/80",
        ].join(" "),
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
