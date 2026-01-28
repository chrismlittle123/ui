import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark";
}

const PageSection = React.forwardRef<HTMLElement, PageSectionProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative py-24 lg:py-32",
          variant === "default" && "bg-background",
          variant === "muted" && "bg-muted",
          variant === "dark" && "bg-foreground text-background",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      </section>
    );
  }
);
PageSection.displayName = "PageSection";

export { PageSection };
