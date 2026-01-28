import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@chrislittle/ui-primitives";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-solid border-border border-t-primary",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-4",
        xl: "h-12 w-12 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label || "Loading"}
        className={cn(spinnerVariants({ size, className }))}
        {...props}
      >
        {label && <span className="sr-only">{label}</span>}
      </div>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
