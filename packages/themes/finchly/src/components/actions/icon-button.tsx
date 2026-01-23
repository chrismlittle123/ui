import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          "relative *:relative",
          "before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-lg",
          "before:bg-background/75 before:backdrop-blur-sm",
          "hover:before:bg-muted focus:before:bg-muted",
          "focus:outline-none focus-visible:before:ring-2 focus-visible:before:ring-ring",
          "[&_svg]:size-5 [&_svg]:shrink-0",
          className
        )}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton };
