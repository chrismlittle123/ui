"use client";

import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface StatsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The stat label */
  label: string;
  /** The stat value */
  value: string;
  /** Trend or additional info text */
  trend?: string;
  /** Progress percentage (0-100) for the animated bar */
  progress?: number;
  /** Whether to show the animated progress bar */
  showProgress?: boolean;
}

const StatsBar = React.forwardRef<HTMLDivElement, StatsBarProps>(
  (
    {
      className,
      label,
      value,
      trend,
      progress = 90,
      showProgress = true,
      ...props
    },
    ref
  ) => {
    const [animatedProgress, setAnimatedProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }, [progress]);

    return (
      <div
        ref={ref}
        className={cn(
          "group relative bg-card border-2 border-foreground p-6 transition-all duration-300 hover:translate-x-2 hover:shadow-brutal-lg",
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-1">
              {label}
            </div>
            <div className="font-mono text-4xl font-bold text-foreground">
              {value}
            </div>
          </div>
          {trend && (
            <div className="text-right">
              <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 font-mono text-xs uppercase tracking-wider">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                {trend}
              </div>
            </div>
          )}
        </div>

        {/* Animated progress bar */}
        {showProgress && (
          <div className="relative h-2 bg-muted overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out"
              style={{ width: `${animatedProgress}%` }}
            />
            {/* Animated scan line */}
            <div
              className="absolute inset-y-0 w-1 bg-background opacity-50"
              style={{
                left: `${animatedProgress}%`,
                animation: "scan 2s ease-in-out infinite",
              }}
            />
          </div>
        )}

        {/* Decorative corners on hover */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    );
  }
);
StatsBar.displayName = "StatsBar";

export { StatsBar };
