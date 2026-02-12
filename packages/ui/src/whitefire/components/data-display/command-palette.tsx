import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../../../utils/cn";

export interface CommandPaletteProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const CommandPalette = React.forwardRef<HTMLDivElement, CommandPaletteProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col w-full max-w-lg rounded-xl border bg-popover text-popover-foreground shadow-elevated overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandPalette.displayName = "CommandPalette";

export interface CommandPaletteInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const CommandPaletteInput = React.forwardRef<
  HTMLInputElement,
  CommandPaletteInputProps
>(({ className, icon, ...props }, ref) => {
  return (
    <div className="flex items-center border-b px-4">
      {icon || <Search className="mr-3 h-4 w-4 shrink-0 text-muted-foreground" />}
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full bg-transparent py-3 text-sm font-normal outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
});
CommandPaletteInput.displayName = "CommandPaletteInput";

const CommandPaletteList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-2", className)}
    {...props}
  />
));
CommandPaletteList.displayName = "CommandPaletteList";

export interface CommandPaletteItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  selected?: boolean;
  shortcut?: string;
}

const CommandPaletteItem = React.forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ className, icon, selected, shortcut, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm outline-none transition-colors",
        selected
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent hover:text-accent-foreground",
        "font-normal",
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn("mr-3 [&_svg]:size-4", selected && "text-primary")}>
          {icon}
        </span>
      )}
      <span className={cn("flex-1", selected && "text-primary font-medium")}>
        {children}
      </span>
      {shortcut && (
        <CommandPaletteShortcut>{shortcut}</CommandPaletteShortcut>
      )}
    </div>
  );
});
CommandPaletteItem.displayName = "CommandPaletteItem";

const CommandPaletteShortcut = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandPaletteShortcut.displayName = "CommandPaletteShortcut";

export {
  CommandPalette,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteItem,
  CommandPaletteShortcut,
};
