"use client";

import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface WavyUnderlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The text to display with the wavy underline */
  children: React.ReactNode;
  /** Color of the underline - uses primary by default */
  color?: string;
  /** Stroke width of the underline */
  strokeWidth?: number;
  /** Whether to animate the underline on hover */
  animated?: boolean;
}

const WavyUnderline = React.forwardRef<HTMLSpanElement, WavyUnderlineProps>(
  (
    {
      className,
      children,
      color = "hsl(var(--primary))",
      strokeWidth = 3,
      animated = false,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn("relative inline-block", className)}
        {...props}
      >
        {children}
        <svg
          className={cn(
            "absolute -bottom-2 left-0 w-full",
            animated && "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
          viewBox="0 0 300 12"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M2 6C50 2 100 10 150 6C200 2 250 10 298 6"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }
);
WavyUnderline.displayName = "WavyUnderline";

export { WavyUnderline };
