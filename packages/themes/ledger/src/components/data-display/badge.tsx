import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@chrislittle/ui-primitives";

const badgeVariants = cva(
  "inline-flex items-center font-mono uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-2 border-foreground bg-foreground text-background",
        secondary: "border-2 border-border bg-secondary text-secondary-foreground",
        outline: "border-2 border-foreground text-foreground",
        destructive: "border-2 border-destructive bg-destructive text-destructive-foreground",
        success: "border-2 border-success bg-success text-success-foreground",
        warning: "border-2 border-warning bg-warning text-warning-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
