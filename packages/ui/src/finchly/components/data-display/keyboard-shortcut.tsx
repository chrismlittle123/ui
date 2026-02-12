import * as React from "react";
import { cn } from "../../../utils/cn";

export interface KeyboardShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  keys: string | string[];
}

const KeyboardShortcut = React.forwardRef<HTMLSpanElement, KeyboardShortcutProps>(
  ({ keys, className, ...props }, ref) => {
    const keyArray = Array.isArray(keys) ? keys : [keys];

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
          className
        )}
        {...props}
      >
        {keyArray.map((key, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-muted-foreground/50">+</span>}
            <kbd className="font-mono">{key}</kbd>
          </React.Fragment>
        ))}
      </span>
    );
  }
);
KeyboardShortcut.displayName = "KeyboardShortcut";

export { KeyboardShortcut };
