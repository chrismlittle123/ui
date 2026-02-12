import * as React from "react";
import { cn } from "../../../utils/cn";

export interface TimelineStepProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineStep = React.forwardRef<HTMLDivElement, TimelineStepProps>(
  ({ number, title, description, isLast = false, className, ...props }, ref) => (
    <div ref={ref} className={cn("relative flex gap-6", className)} {...props}>
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {number}
        </div>
        {!isLast && (
          <div className="mt-2 h-full w-px bg-gradient-to-b from-primary to-primary/20" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
);
TimelineStep.displayName = "TimelineStep";

export { TimelineStep };
