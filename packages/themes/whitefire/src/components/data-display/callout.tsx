import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@chrislittle/ui-primitives";

const calloutVariants = cva(
  "flex items-start gap-3 rounded-xl p-4 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground",
        info: "bg-info/10 text-info",
        success: "bg-success/10 text-success",
        warning: "bg-warning/10 text-warning",
        destructive: "bg-destructive/10 text-destructive",
        // The "What's New" style - soft peach background
        announcement: "bg-primary/10 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant, icon, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(calloutVariants({ variant }), className)}
        {...props}
      >
        {icon && (
          <div className="flex-shrink-0 text-primary [&_svg]:size-5">
            {icon}
          </div>
        )}
        <div className="flex-1 space-y-1">
          {title && (
            <p className="font-semibold text-foreground">{title}</p>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {children}
        </div>
      </div>
    );
  }
);
Callout.displayName = "Callout";

export { Callout, calloutVariants };
