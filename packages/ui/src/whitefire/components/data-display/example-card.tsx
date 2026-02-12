import * as React from "react";
import { cn } from "../../../utils/cn";

export interface ExampleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: string;
  title: string;
  description?: string;
  tags?: Array<{
    label: string;
    variant?: "tag" | "tag-outline" | "tag-filled";
  }>;
}

const ExampleCard = React.forwardRef<HTMLDivElement, ExampleCardProps>(
  ({ className, prefix, title, description, tags, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative border-b border-border py-6 transition-colors",
          className
        )}
        {...props}
      >
        <div className="space-y-2">
          <h3 className="text-foreground">
            {prefix && (
              <span className="font-mono text-muted-foreground mr-2">{prefix}</span>
            )}
            <span className="font-medium">{title}</span>
          </h3>
          {description && (
            <p className="text-muted-foreground font-normal leading-relaxed">
              {description}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-normal",
                    tag.variant === "tag-filled"
                      ? "bg-primary/10 text-primary"
                      : tag.variant === "tag-outline"
                      ? "border border-input text-muted-foreground"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
);
ExampleCard.displayName = "ExampleCard";

export { ExampleCard };
