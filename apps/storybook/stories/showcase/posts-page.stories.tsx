import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Input,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
} from "@chrislittle/theme";
import {
  Search,
  Command,
  Plus,
} from "lucide-react";

// Keyboard shortcut badge component
const KbdBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
    {children}
  </span>
);

// Filter tag pill
const FilterTag = ({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) => (
  <button
    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
      active
        ? "bg-primary text-primary-foreground"
        : "bg-muted text-muted-foreground hover:bg-muted/80"
    }`}
  >
    {label}
  </button>
);

// Post card component
const PostCard = ({
  author,
  timestamp,
  title,
  description,
}: {
  author: string;
  timestamp: string;
  title: string;
  description: string;
}) => {
  const initials = author
    .split("@")[0]
    .split("")
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="py-4 border-b last:border-0 cursor-pointer hover:bg-muted/30 -mx-4 px-4 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Avatar className="h-6 w-6 text-xs">
          <AvatarFallback className="text-xs bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <span className="font-mono text-xs text-muted-foreground">
          {author} • {timestamp}
        </span>
      </div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

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

const PostsPage = () => {
  const tags = [
    { label: "All", active: true },
    { label: "sdk", active: false },
    { label: "Gemini", active: false },
    { label: "Updates", active: false },
    { label: "finchly", active: false },
    { label: "tutorial", active: false },
    { label: "search", active: false },
    { label: "nodejs", active: false },
    { label: "Excitement", active: false },
    { label: "knowledge-base", active: false },
    { label: "agents", active: false },
    { label: "livekit", active: false },
    { label: "real-time", active: false },
    { label: "python", active: false },
    { label: "mcp", active: false },
  ];

  const posts = [
    {
      author: "chris@progression-labs.ai",
      timestamp: "about 4 hours ago",
      title: "Description of Agentation",
      description: "please add a description of Agentation",
    },
    {
      author: "chris@progression-labs.ai",
      timestamp: "2 days ago",
      title: "Productivity tool for personal use",
      description: "add this as a productivity tool for personal use",
    },
    {
      author: "chris@progression-labs.ai",
      timestamp: "3 days ago",
      title: "Claude design plugin recommendation",
      description:
        "In Claude skills? Thanks I'll check it out. add claude design plugin as a great frontend design plugin",
    },
    {
      author: "chris@progression-labs.ai",
      timestamp: "4 days ago",
      title: "MCP server integration notes",
      description: "Documentation on setting up MCP servers with the finchly platform",
    },
    {
      author: "alex@progression-labs.ai",
      timestamp: "5 days ago",
      title: "Real-time voice processing architecture",
      description: "Overview of the livekit integration for real-time voice capture",
    },
  ];

  return (
    <div className="w-[1100px] min-h-[700px] bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-foreground">Finchly</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">Posts</span>
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
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Capture
          </a>
          <a href="#" className="text-sm font-medium text-primary">
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
      <main className="flex-1 px-6 py-6">
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <FilterTag key={tag.label} label={tag.label} active={tag.active} />
          ))}
        </div>

        {/* Posts List */}
        <div className="max-w-[800px]">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="border-t px-6 py-4">
        <div className="flex items-center gap-6">
          <ShortcutItem keys="G D" label="Capture" />
          <ShortcutItem keys="G P" label="Posts" />
          <ShortcutItem keys="G R" label="Resources" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
            <KbdBadge>N</KbdBadge>
            <span>New Post</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const meta: Meta<typeof PostsPage> = {
  title: "Showcase/Posts Page",
  component: PostsPage,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PostsPage>;

export const Default: Story = {};
