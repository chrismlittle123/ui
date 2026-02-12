import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const sectionLabelVariants = cva(
  "inline-block font-mono uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "border-b-2 border-foreground px-2 pb-1 text-foreground",
        outline: "border border-foreground px-4 py-1.5 text-foreground",
        pill: "rounded-full border border-foreground px-4 py-1.5 text-foreground",
        filled: "bg-foreground px-4 py-1.5 text-background",
      },
      size: {
        sm: "text-[10px]",
        md: "text-xs",
        lg: "text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface SectionLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionLabelVariants> {}

const SectionLabel = React.forwardRef<HTMLDivElement, SectionLabelProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sectionLabelVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
SectionLabel.displayName = "SectionLabel";

export { SectionLabel, sectionLabelVariants };
