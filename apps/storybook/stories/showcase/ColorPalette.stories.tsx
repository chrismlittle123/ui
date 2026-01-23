import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Card, CardContent, CardHeader, CardTitle, Button, Separator } from "@chrislittle/theme";

// Compact color swatch with label
const ColorSwatch = ({
  name,
  cssVar,
  size = "md"
}: {
  name: string;
  cssVar: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-16"
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizeClasses[size]} rounded-md border border-border/30 shadow-sm`}
        style={{ backgroundColor: `hsl(var(${cssVar}))` }}
      />
      <span className="text-[10px] text-muted-foreground font-medium">{name}</span>
    </div>
  );
};

// Status badge component
const StatusBadge = ({
  status,
  label
}: {
  status: string;
  label: string;
}) => (
  <div
    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
    style={{
      backgroundColor: `hsl(var(--status-${status}-bg))`,
      color: `hsl(var(--status-${status}))`
    }}
  >
    {label}
  </div>
);

// Surface layer visualization
const SurfaceLayer = ({
  name,
  cssVar,
  level
}: {
  name: string;
  cssVar: string;
  level: number;
}) => (
  <div
    className="flex items-center gap-3 p-3 rounded-lg border border-border/30"
    style={{ backgroundColor: `hsl(var(${cssVar}))` }}
  >
    <div className="w-8 h-8 rounded bg-foreground/10 flex items-center justify-center text-xs font-mono text-muted-foreground">
      L{level}
    </div>
    <div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-[10px] text-muted-foreground font-mono">{cssVar}</p>
    </div>
  </div>
);

const ColorPalette = () => {
  return (
    <div className="w-[900px] bg-background p-6 space-y-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-1">Color Palette</h1>
        <p className="text-sm text-muted-foreground">
          Complete color system with semantic colors, surface hierarchy, and status indicators.
        </p>
      </div>

      {/* Core Semantic Colors - Compact Grid */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Semantic Colors</h2>
        <div className="flex gap-4">
          <ColorSwatch name="Primary" cssVar="--primary" size="lg" />
          <ColorSwatch name="Accent" cssVar="--accent" size="lg" />
          <ColorSwatch name="Success" cssVar="--success" size="lg" />
          <ColorSwatch name="Warning" cssVar="--warning" size="lg" />
          <ColorSwatch name="Destructive" cssVar="--destructive" size="lg" />
          <ColorSwatch name="Info" cssVar="--info" size="lg" />
        </div>
      </section>

      <Separator />

      {/* Surface Hierarchy - Stacked Layers */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Surface Hierarchy</h2>
        <p className="text-xs text-muted-foreground mb-3">
          Layered surfaces create visual depth. Lower levels are deeper, higher levels are elevated.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <SurfaceLayer name="Background" cssVar="--background" level={0} />
          <SurfaceLayer name="Card" cssVar="--card" level={1} />
          <SurfaceLayer name="Secondary" cssVar="--secondary" level={2} />
          <SurfaceLayer name="Muted" cssVar="--muted" level={3} />
        </div>
        <div className="mt-3 flex gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded border border-border/50"
              style={{ backgroundColor: `hsl(var(--foreground))` }}
            />
            <span className="text-xs">Foreground</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded border border-border/50"
              style={{ backgroundColor: `hsl(var(--muted-foreground))` }}
            />
            <span className="text-xs">Muted FG</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded border border-border/50"
              style={{ backgroundColor: `hsl(var(--border))` }}
            />
            <span className="text-xs">Border</span>
          </div>
        </div>
      </section>

      <Separator />

      {/* Status & Chart Colors Side by Side */}
      <div className="grid grid-cols-2 gap-6">
        {/* Status Colors */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Status Colors</h2>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="completed" label="Completed" />
            <StatusBadge status="processing" label="Processing" />
            <StatusBadge status="pending" label="Pending" />
            <StatusBadge status="failed" label="Failed" />
            <StatusBadge status="refunded" label="Refunded" />
            <StatusBadge status="cancelled" label="Cancelled" />
          </div>
        </section>

        {/* Chart Colors */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Chart Colors</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <ColorSwatch key={n} name={`${n}`} cssVar={`--chart-${n}`} size="md" />
            ))}
          </div>
        </section>
      </div>

      <Separator />

      {/* Color Pairings - More Compact */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Recommended Pairings</h2>
        <div className="grid grid-cols-3 gap-3">
          <div
            className="p-3 rounded-lg border border-border/30"
            style={{ backgroundColor: `hsl(var(--card))` }}
          >
            <p className="text-sm font-medium mb-1">Primary Card</p>
            <p className="text-xs text-muted-foreground mb-2">Main content areas</p>
            <Button size="sm">Action</Button>
          </div>
          <div
            className="p-3 rounded-lg border border-border/30"
            style={{ backgroundColor: `hsl(var(--muted))` }}
          >
            <p className="text-sm font-medium mb-1">Muted Section</p>
            <p className="text-xs text-muted-foreground mb-2">Secondary sections</p>
            <Button size="sm" variant="secondary">Action</Button>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: `hsl(var(--destructive))`, color: `hsl(var(--destructive-foreground))` }}
          >
            <p className="text-sm font-medium mb-1">Alert Card</p>
            <p className="text-xs opacity-80 mb-2">Critical alerts</p>
            <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Dismiss
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Component Examples - Compact Row */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Component Examples</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Buttons</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
              <Button size="sm" variant="destructive">Destructive</Button>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Badges</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Accessibility Note - More Compact */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <p className="text-xs font-medium mb-1">Accessibility</p>
          <p className="text-xs text-muted-foreground">
            All color combinations meet WCAG 2.1 AA contrast requirements (4.5:1 ratio).
            Semantic colors should be paired with text/icons to not rely on color alone.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof ColorPalette> = {
  title: "Showcase/Color Palette",
  component: ColorPalette,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {};
