import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface ModeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
  badge?: React.ReactNode;
  selected?: boolean;
}

const ModeCard = React.forwardRef<HTMLDivElement, ModeCardProps>(
  (
    { icon, title, description, bullets, badge, selected = false, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border bg-card p-6 cursor-pointer transition-all",
          "hover:shadow-md hover:border-primary/30",
          selected && "border-primary shadow-md",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3 mb-3">
          {icon && (
            <div className="text-muted-foreground mt-0.5">{icon}</div>
          )}
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {badge}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 ml-8">
          {description}
        </p>
        {bullets && bullets.length > 0 && (
          <p className="font-mono text-xs text-muted-foreground/70 ml-8">
            {bullets.join(" • ")}
          </p>
        )}
      </div>
    );
  }
);
ModeCard.displayName = "ModeCard";

export { ModeCard };
