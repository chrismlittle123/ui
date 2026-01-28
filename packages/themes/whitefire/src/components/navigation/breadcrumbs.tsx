import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@chrislittle/ui-primitives";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex items-center text-sm", className)}
        {...props}
      />
    );
  }
);
Breadcrumbs.displayName = "Breadcrumbs";

export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  href?: string;
  current?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLSpanElement, BreadcrumbItemProps>(
  ({ className, href, current, children, ...props }, ref) => {
    const Comp = href ? "a" : "span";

    return (
      <span ref={ref} className="flex items-center" {...props}>
        <Comp
          href={href}
          aria-current={current ? "page" : undefined}
          className={cn(
            "transition-colors",
            current
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground",
            href && !current && "hover:text-primary",
            className
          )}
        >
          {children}
        </Comp>
      </span>
    );
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("mx-2 text-muted-foreground", className)}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
  </span>
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export { Breadcrumbs, BreadcrumbItem, BreadcrumbSeparator };
