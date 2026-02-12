import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const headingVariants = cva("font-serif leading-tight tracking-tight", {
  variants: {
    size: {
      h1: "text-6xl lg:text-8xl",
      h2: "text-5xl lg:text-6xl",
      h3: "text-4xl lg:text-5xl",
      h4: "text-3xl",
      h5: "text-2xl",
      h6: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "h2",
    weight: "bold",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** Render text in italic style */
  italic?: boolean;
  /** The HTML heading element to use */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, italic, as, children, ...props }, ref) => {
    const Component = as || "h2";

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({ size, weight }),
          italic && "italic font-light",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
