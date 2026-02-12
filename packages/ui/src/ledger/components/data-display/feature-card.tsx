"use client";

import * as React from "react";
import { cn } from "../../../utils/cn";
import { SectionLabel } from "./section-label";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Large watermark number (e.g., "01", "02") */
  number: string;
  /** The feature title */
  title: string;
  /** The feature description */
  description: string;
  /** Technical label displayed in the corner (e.g., "AI-Powered") */
  label?: string;
  /** Whether to show the animated underline on hover */
  showHoverLine?: boolean;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      number,
      title,
      description,
      label,
      showHoverLine = true,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "group relative bg-card p-10 lg:p-12 transition-all duration-500",
          className
        )}
        {...props}
      >
        {/* Animated background on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="relative">
          {/* Number + Label */}
          <div className="mb-8 flex items-start justify-between">
            <div
              className={cn(
                "font-serif text-8xl font-bold text-foreground/5 transition-all duration-500",
                isHovered && "text-primary/10 scale-110"
              )}
            >
              {number}
            </div>
            {label && (
              <div className="text-right">
                <SectionLabel>{label}</SectionLabel>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-foreground leading-tight">
              {title}
            </h3>
            <p className="font-mono text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Animated line indicator */}
          {showHoverLine && (
            <div
              className="absolute left-0 bottom-0 h-1 bg-primary transition-all duration-500"
              style={{ width: isHovered ? "100%" : "0%" }}
            />
          )}
        </div>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
