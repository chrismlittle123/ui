import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface PrefixInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: React.ReactNode;
}

const PrefixInput = React.forwardRef<HTMLInputElement, PrefixInputProps>(
  ({ className, prefix, suffix, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full items-center rounded-xl border border-input bg-background ring-offset-background transition-shadow focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        {prefix && (
          <span className="flex h-full items-center border-r border-input bg-muted/50 px-3 text-[13px] text-muted-foreground rounded-l-xl">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className="flex-1 h-full bg-transparent px-3 text-[13px] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
        {suffix && (
          <div className="flex items-center pr-2">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);
PrefixInput.displayName = "PrefixInput";

export { PrefixInput };
