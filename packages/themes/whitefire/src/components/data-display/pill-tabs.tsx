import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@chrislittle/ui-primitives";

const PillTabs = TabsPrimitive.Root;

const PillTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-full bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
PillTabsList.displayName = "PillTabsList";

const PillTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    icon?: React.ReactNode;
    badge?: React.ReactNode;
  }
>(({ className, icon, badge, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      "font-normal data-[state=active]:font-medium",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "data-[state=active]:[&_svg]:text-primary",
      className
    )}
    {...props}
  >
    {icon && <span className="[&_svg]:size-4">{icon}</span>}
    {children}
    {badge}
  </TabsPrimitive.Trigger>
));
PillTabsTrigger.displayName = "PillTabsTrigger";

const PillTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
PillTabsContent.displayName = "PillTabsContent";

export { PillTabs, PillTabsList, PillTabsTrigger, PillTabsContent };
