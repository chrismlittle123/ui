import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-x-2 text-sm", className)}
      {...props}
    />
  )
);
Breadcrumbs.displayName = "Breadcrumbs";

export interface BreadcrumbProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrentPage?: boolean;
}

const Breadcrumb = React.forwardRef<HTMLAnchorElement, BreadcrumbProps>(
  ({ className, isCurrentPage, children, href, ...props }, ref) => {
    if (isCurrentPage || !href) {
      return (
        <span
          className={cn(
            "min-w-0 truncate text-muted-foreground",
            className
          )}
        >
          {children}
        </span>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "min-w-0 truncate text-foreground hover:text-primary transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-muted-foreground/50", className)}
    {...props}
  >
    {children ?? "/"}
  </span>
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export { Breadcrumbs, Breadcrumb, BreadcrumbSeparator };
