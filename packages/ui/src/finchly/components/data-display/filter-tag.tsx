"use client";

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface FilterTagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const FilterTag = React.forwardRef<HTMLButtonElement, FilterTagProps>(
  ({ active = false, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium transition-colors",
          active
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
FilterTag.displayName = "FilterTag";

export { FilterTag };
