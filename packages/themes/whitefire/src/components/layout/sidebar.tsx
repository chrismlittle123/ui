import * as React from "react";
import { cn } from "@chrislittle/ui-primitives";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full w-64 flex-col border-r bg-background",
          className
        )}
        {...props}
      />
    );
  }
);
Sidebar.displayName = "Sidebar";

export interface SidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1 px-3 py-2", className)}
        {...props}
      />
    );
  }
);
SidebarSection.displayName = "SidebarSection";

export interface SidebarLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarLabel = React.forwardRef<HTMLDivElement, SidebarLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarLabel.displayName = "SidebarLabel";

export interface SidebarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
}

const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ className, icon, active, badge, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
          active
            ? "bg-accent text-primary font-medium"
            : "text-muted-foreground font-normal hover:bg-muted hover:text-foreground",
          className
        )}
        {...props}
      >
        {icon && (
          <span className={cn("[&_svg]:size-5", active && "text-primary")}>
            {icon}
          </span>
        )}
        <span className="flex-1 text-left">{children}</span>
        {badge}
      </button>
    );
  }
);
SidebarItem.displayName = "SidebarItem";

export { Sidebar, SidebarSection, SidebarLabel, SidebarItem };
