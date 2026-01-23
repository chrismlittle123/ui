import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Card, CardContent, CardHeader, CardTitle, Button, Separator } from "@chrislittle/theme";

// Color swatch component
const ColorSwatch = ({
  name,
  cssVar,
  showLabel = true
}: {
  name: string;
  cssVar: string;
  showLabel?: boolean;
}) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className="w-12 h-12 rounded-md border border-border/50 shadow-sm"
      style={{ backgroundColor: `hsl(var(${cssVar}))` }}
    />
    {showLabel && (
      <span className="text-[10px] text-muted-foreground font-mono">{name}</span>
    )}
  </div>
);

// Color scale component
const ColorScale = ({
  name,
  prefix
}: {
  name: string;
  prefix: string;
}) => (
  <div className="space-y-2">
    <p className="text-sm font-medium capitalize">{name}</p>
    <div className="flex gap-1">
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
        <ColorSwatch
          key={shade}
          name={`${shade}`}
          cssVar={`--${prefix}-${shade}`}
        />
      ))}
    </div>
  </div>
);

// Status badge component
const StatusBadge = ({
  status,
  label
}: {
  status: string;
  label: string;
}) => (
  <div
    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium"
    style={{
      backgroundColor: `hsl(var(--status-${status}-bg))`,
      color: `hsl(var(--status-${status}))`
    }}
  >
    {label}
  </div>
);

// Color pairing card
const ColorPairing = ({
  title,
  bg,
  fg,
  accent,
  description
}: {
  title: string;
  bg: string;
  fg: string;
  accent?: string;
  description: string;
}) => (
  <div
    className="p-4 rounded-lg border"
    style={{
      backgroundColor: `hsl(var(${bg}))`,
      borderColor: `hsl(var(--border))`
    }}
  >
    <p
      className="font-semibold mb-1"
      style={{ color: `hsl(var(${fg}))` }}
    >
      {title}
    </p>
    <p
      className="text-sm mb-3 opacity-70"
      style={{ color: `hsl(var(${fg}))` }}
    >
      {description}
    </p>
    {accent && (
      <div
        className="inline-block px-2 py-1 rounded text-xs font-medium"
        style={{
          backgroundColor: `hsl(var(${accent}))`,
          color: `hsl(var(${accent}-foreground, var(--background)))`
        }}
      >
        Accent
      </div>
    )}
  </div>
);

const ColorPalette = () => {
  return (
    <div className="w-[1000px] bg-background p-8 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Color Palette</h1>
        <p className="text-muted-foreground">
          Complete color system with semantic colors, scales, and recommended pairings.
        </p>
      </div>

      {/* Core Semantic Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Core Semantic Colors</h2>
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--primary))` }}
            />
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-muted-foreground">Buttons, links, focus</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--accent))` }}
            />
            <p className="text-sm font-medium">Accent</p>
            <p className="text-xs text-muted-foreground">Highlights, badges</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--success))` }}
            />
            <p className="text-sm font-medium">Success</p>
            <p className="text-xs text-muted-foreground">Positive states</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--warning))` }}
            />
            <p className="text-sm font-medium">Warning</p>
            <p className="text-xs text-muted-foreground">Caution states</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--destructive))` }}
            />
            <p className="text-sm font-medium">Destructive</p>
            <p className="text-xs text-muted-foreground">Errors, danger</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--info))` }}
            />
            <p className="text-sm font-medium">Info</p>
            <p className="text-xs text-muted-foreground">Informational</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Surface Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Surface & Text Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <div
              className="h-16 rounded-lg border-2 border-dashed border-border"
              style={{ backgroundColor: `hsl(var(--background))` }}
            />
            <p className="text-sm font-medium">Background</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-16 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--card))` }}
            />
            <p className="text-sm font-medium">Card</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-16 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--muted))` }}
            />
            <p className="text-sm font-medium">Muted</p>
          </div>
          <div className="space-y-2">
            <div
              className="h-16 rounded-lg border"
              style={{ backgroundColor: `hsl(var(--secondary))` }}
            />
            <p className="text-sm font-medium">Secondary</p>
          </div>
        </div>
        <div className="mt-4 flex gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: `hsl(var(--foreground))` }}
            />
            <span className="text-sm">Foreground</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: `hsl(var(--muted-foreground))` }}
            />
            <span className="text-sm">Muted Foreground</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: `hsl(var(--border))` }}
            />
            <span className="text-sm">Border</span>
          </div>
        </div>
      </section>

      <Separator />

      {/* Status Badges */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Status Colors</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Pre-defined status colors with background variants for badges and indicators.
        </p>
        <div className="flex flex-wrap gap-3">
          <StatusBadge status="completed" label="Completed" />
          <StatusBadge status="processing" label="Processing" />
          <StatusBadge status="pending" label="Pending" />
          <StatusBadge status="failed" label="Failed" />
          <StatusBadge status="refunded" label="Refunded" />
          <StatusBadge status="cancelled" label="Cancelled" />
        </div>
      </section>

      <Separator />

      {/* Chart Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Chart Colors</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Optimized for data visualization with good contrast and accessibility.
        </p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="flex flex-col items-center gap-1">
              <div
                className="w-16 h-16 rounded-lg"
                style={{ backgroundColor: `hsl(var(--chart-${n}))` }}
              />
              <span className="text-xs text-muted-foreground">Chart {n}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Color Pairings */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recommended Pairings</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Color combinations that work well together for common UI patterns.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <ColorPairing
            title="Primary Card"
            bg="--card"
            fg="--card-foreground"
            accent="--primary"
            description="Main content areas with primary actions"
          />
          <ColorPairing
            title="Muted Section"
            bg="--muted"
            fg="--foreground"
            accent="--accent"
            description="Secondary sections, sidebars"
          />
          <ColorPairing
            title="Alert Card"
            bg="--destructive"
            fg="--destructive-foreground"
            description="Error messages and critical alerts"
          />
        </div>
      </section>

      <Separator />

      {/* Button Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Button Color Usage</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <Separator />

      {/* Badge Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Badge Color Usage</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <Separator />

      {/* Color Accessibility Note */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Accessibility Notes</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            All color combinations meet WCAG 2.1 AA contrast requirements for normal text (4.5:1 ratio).
          </p>
          <p>
            Semantic colors (success, warning, destructive) should always be paired with text or icons
            to ensure information is not conveyed by color alone.
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
