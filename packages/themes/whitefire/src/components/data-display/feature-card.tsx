import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  badge?: React.ReactNode;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, badge, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-xl border bg-card p-6 transition-all duration-200 hover:shadow-card",
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {icon && (
              <div className="flex-shrink-0 text-primary [&_svg]:size-6">
                {icon}
              </div>
            )}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{title}</h3>
                {badge}
              </div>
              {description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
