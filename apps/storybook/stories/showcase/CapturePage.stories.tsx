import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  Input,
  Badge,
  Separator,
} from "@chrislittle/theme";
import {
  Mic,
  MessageSquare,
  FileText,
  BarChart3,
  Search,
  Command,
  CornerDownLeft,
  ArrowUpDown,
} from "lucide-react";

// Keyboard shortcut badge component
const KbdBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
    {children}
  </span>
);

// Mode card component
const ModeCard = ({
  icon: Icon,
  title,
  description,
  bullets,
  badge,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  badge?: React.ReactNode;
}) => (
  <Card className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
    <CardContent className="p-6">
      <div className="flex items-start gap-3 mb-3">
        <Icon className="h-5 w-5 text-muted-foreground mt-0.5" />
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {badge}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 ml-8">{description}</p>
      <p className="text-xs font-mono text-muted-foreground/70 ml-8">
        {bullets.join(" • ")}
      </p>
    </CardContent>
  </Card>
);

// Bottom shortcut item
const ShortcutItem = ({
  keys,
  label,
}: {
  keys: string;
  label: string;
}) => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <KbdBadge>{keys}</KbdBadge>
    <span>{label}</span>
  </div>
);

const CapturePage = () => {
  return (
    <div className="w-[1100px] min-h-[700px] bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-foreground">Finchly</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">Capture</span>
        </div>

        {/* Search */}
        <div className="flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-[200px] pl-9 pr-12 h-9 bg-muted/50"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <KbdBadge>
                <Command className="h-3 w-3" />K
              </KbdBadge>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-primary">
            Capture
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Knowledge
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Team
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Lab
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <p className="text-muted-foreground mb-12">
          Select a mode to begin your session
        </p>

        {/* Mode Cards Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[800px]">
          <ModeCard
            icon={Mic}
            title="Voice Note"
            description="Quick capture of thoughts and ideas"
            bullets={["Document an API pattern", "Note a technical learning", "Save a quick insight"]}
          />
          <ModeCard
            icon={MessageSquare}
            title="Brainstorm"
            description="Interactive discussion with AI pushback"
            bullets={["Explore architecture ideas", "Debug complex issues", "Refine concepts"]}
          />
          <ModeCard
            icon={FileText}
            title="Check-in"
            description="Reflect on tools, insights, and learnings"
            bullets={["Share helpful tools", "Document AI workflows", "Capture challenges"]}
          />
          <ModeCard
            icon={BarChart3}
            title="Project Update"
            description="Structured project update"
            bullets={["Progress tracking", "Status updates", "Blockers & risks"]}
            badge={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-purple-400"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            }
          />
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="border-t px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Prompt */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CornerDownLeft className="h-4 w-4" />
              <span className="text-sm">Select a mode first</span>
            </div>
          </div>

          {/* Start Call Button */}
          <Button className="gap-2">
            <Mic className="h-4 w-4" />
            Start call
          </Button>
        </div>

        {/* Keyboard Shortcuts */}
        <Separator className="my-4" />
        <div className="flex items-center gap-6">
          <ShortcutItem keys="G D" label="Capture" />
          <ShortcutItem keys="G P" label="Posts" />
          <ShortcutItem keys="G R" label="Resources" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowUpDown className="h-3 w-3" />
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CornerDownLeft className="h-3 w-3" />
            <span>Start</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const meta: Meta<typeof CapturePage> = {
  title: "Showcase/Capture Page",
  component: CapturePage,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CapturePage>;

export const Default: Story = {};
