"use client";

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  shortcut?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ shortcut = "⌘K", className, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          ref={ref}
          type="search"
          className={cn(
            "flex h-9 w-full rounded-lg border border-border bg-muted/50 pl-9 pr-14 text-sm transition-colors",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          {...props}
        />
        {shortcut && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
            {shortcut}
          </span>
        )}
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
