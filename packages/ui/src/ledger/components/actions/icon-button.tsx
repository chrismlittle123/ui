import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background border-2 border-foreground hover:bg-primary hover:border-primary",
        outline:
          "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        ghost: "hover:bg-muted text-foreground",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80",
      },
      size: {
        sm: "h-8 w-8 [&_svg]:size-4",
        md: "h-10 w-10 [&_svg]:size-5",
        lg: "h-12 w-12 [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
