import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const progressStepperVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const stepCircleVariants = cva(
  "flex shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
  {
    variants: {
      state: {
        completed: "bg-primary text-primary-foreground",
        current: "border-2 border-primary bg-background text-primary",
        upcoming: "bg-muted text-muted-foreground",
      },
      size: {
        sm: "h-6 w-6 text-[10px]",
        md: "h-7 w-7 text-xs",
        lg: "h-8 w-8 text-sm",
      },
    },
    defaultVariants: {
      state: "upcoming",
      size: "md",
    },
  }
);

const stepConnectorVariants = cva("h-0.5 flex-1 rounded-full transition-colors", {
  variants: {
    filled: {
      true: "bg-primary",
      false: "bg-muted",
    },
  },
  defaultVariants: {
    filled: false,
  },
});

export interface ProgressStepperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressStepperVariants> {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

const ProgressStepper = React.forwardRef<HTMLDivElement, ProgressStepperProps>(
  ({ className, currentStep, totalSteps, labels, size, ...props }, ref) => {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    const getStepState = (step: number): "completed" | "current" | "upcoming" => {
      if (step < currentStep) return "completed";
      if (step === currentStep) return "current";
      return "upcoming";
    };

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Step ${currentStep} of ${totalSteps}`}
        className={cn(progressStepperVariants({ size, className }))}
        {...props}
      >
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-1">
              <div className={cn(stepCircleVariants({ state: getStepState(step), size }))}>
                {step}
              </div>
              {labels && labels[index] && (
                <span
                  className={cn(
                    "max-w-16 truncate text-center text-xs",
                    getStepState(step) === "current"
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {labels[index]}
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  stepConnectorVariants({ filled: step < currentStep }),
                  labels ? "mb-5" : ""
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);
ProgressStepper.displayName = "ProgressStepper";

export {
  ProgressStepper,
  progressStepperVariants,
  stepCircleVariants,
  stepConnectorVariants,
};
