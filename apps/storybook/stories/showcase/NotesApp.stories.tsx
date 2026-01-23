import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
} from "@chrislittle/theme";

// Status badge for non-interactive tag display
const TagBadge = ({ tag }: { tag: string }) => {
  const tagMap: Record<string, string> = {
    work: "processing",
    personal: "completed",
    learning: "pending",
  };
  const key = tagMap[tag.toLowerCase()] || "processing";

  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{
        backgroundColor: `hsl(var(--status-${key}-bg))`,
        color: `hsl(var(--status-${key}))`,
      }}
    >
      {tag}
    </span>
  );
};

const NotesApp = () => {
  const notes = [
    { id: 1, title: "Project Ideas", preview: "Brainstorming session notes from the team meeting...", tag: "Work", time: "2h ago" },
    { id: 2, title: "Shopping List", preview: "Milk, eggs, bread, cheese, vegetables for dinner...", tag: "Personal", time: "5h ago" },
    { id: 3, title: "Meeting Notes", preview: "Q1 planning discussion with the product team...", tag: "Work", time: "1d ago" },
    { id: 4, title: "Book Recommendations", preview: "The Pragmatic Programmer, Clean Code, Design Patterns...", tag: "Learning", time: "2d ago" },
  ];

  return (
    <div className="w-[900px] h-[600px] bg-background rounded-lg border flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/30 p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Notes</h2>
          <Button size="sm">+ New</Button>
        </div>
        <Input placeholder="Search notes..." className="h-8" />
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">All</Badge>
          <Badge variant="secondary">Work</Badge>
          <Badge variant="secondary">Personal</Badge>
          <Badge variant="secondary">Learning</Badge>
        </div>
        <Separator />
        <div className="flex-1 space-y-2 overflow-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-3 rounded-md hover:bg-accent cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{note.title}</span>
                <span className="text-xs text-muted-foreground">{note.time}</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{note.preview}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold">Project Ideas</h1>
            <p className="text-sm text-muted-foreground">Last edited 2 hours ago</p>
          </div>
          <div className="flex items-center gap-2">
            <TagBadge tag="Work" />
            <Button variant="outline" size="sm">Share</Button>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </Button>
          </div>
        </div>
        <Separator className="mb-4" />
        <div className="flex-1 prose prose-sm max-w-none">
          <p className="text-muted-foreground">
            Brainstorming session notes from the team meeting about upcoming features and improvements.
          </p>
          <h3>Key Points</h3>
          <ul>
            <li>Implement dark mode across all components</li>
            <li>Add keyboard shortcuts for power users</li>
            <li>Improve mobile responsiveness</li>
            <li>Create comprehensive documentation</li>
          </ul>
          <h3>Action Items</h3>
          <ul>
            <li>Schedule follow-up meeting with design team</li>
            <li>Create technical specifications document</li>
            <li>Review competitor features</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof NotesApp> = {
  title: "Showcase/Notes App",
  component: NotesApp,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof NotesApp>;

export const Default: Story = {};
