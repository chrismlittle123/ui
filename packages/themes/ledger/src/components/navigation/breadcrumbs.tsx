import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@chrislittle/ui-primitives";

const Breadcrumbs = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn("flex items-center", className)}
    {...props}
  />
));
Breadcrumbs.displayName = "Breadcrumbs";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  active?: boolean;
}

const Breadcrumb = React.forwardRef<HTMLAnchorElement, BreadcrumbProps>(
  ({ className, href, active, children, ...props }, ref) => {
    const Component = href ? "a" : "span";
    return (
      <Component
        ref={ref}
        href={href}
        className={cn(
          "font-mono text-sm uppercase tracking-wider transition-colors",
          active
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground",
          href && !active && "hover:text-primary",
          className
        )}
        aria-current={active ? "page" : undefined}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

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

export { Breadcrumbs, Breadcrumb, BreadcrumbSeparator };
