import * as React from "react";
import { cn } from "../../../utils/cn";

export interface PageSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title: React.ReactNode;
}

const PageSection = React.forwardRef<HTMLElement, PageSectionProps>(
  ({ className, title, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "grid grid-cols-4 border-t border-border",
        className
      )}
      {...props}
    >
      <div className="col-span-full sm:col-span-1">
        <div className="-mt-px inline-flex border-t border-foreground pt-px">
          <div className="pt-4 text-sm font-semibold text-foreground sm:pt-10">
            {title}
          </div>
        </div>
      </div>
      <div className="col-span-full pt-6 sm:col-span-3 sm:pt-10">{children}</div>
    </section>
  )
);
PageSection.displayName = "PageSection";

export { PageSection };
