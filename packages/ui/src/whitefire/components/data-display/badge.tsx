import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        outline: "border border-input bg-transparent text-foreground",
        // Firecrawl-style badges
        preview: "bg-primary/15 text-primary border border-primary/20",
        new: "bg-success/15 text-success border border-success/20",
        beta: "bg-info/15 text-info border border-info/20",
        // Tag styles from Firecrawl
        tag: "bg-primary/10 text-primary font-normal",
        "tag-outline": "border border-input bg-transparent text-muted-foreground font-normal",
        "tag-filled": "bg-primary text-primary-foreground font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
