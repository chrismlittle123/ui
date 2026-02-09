import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@chrislittle/theme";

const BlogPost = () => {
  return (
    <div className="w-[600px] bg-background border rounded-lg overflow-hidden">
      {/* Header */}
      <header className="border-b py-3 px-5 flex items-center justify-between">
        <span className="font-bold text-lg">The Daily</span>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Subscribe</Button>
        </div>
      </header>

      {/* Article */}
      <article className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="secondary">Technology</Badge>
          <span className="text-sm text-muted-foreground">5 min read</span>
        </div>

        <h1 className="text-2xl font-bold leading-tight mb-3">
          The Rise of AI in Modern Healthcare
        </h1>

        <p className="text-muted-foreground mb-6">
          How machine learning is transforming patient care and diagnostics.
        </p>

        <div className="flex items-center space-x-3 py-4 border-y mb-6">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">Jan 23, 2026</p>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Artificial intelligence is revolutionizing healthcare. From early disease detection to personalized treatment plans, AI-powered tools are helping doctors make faster, more accurate decisions.
          </p>
          <p>
            Recent studies show AI can detect certain conditions earlier than traditional methods, improving outcomes for patients worldwide.
          </p>
        </div>
      </article>
    </div>
  );
};

const meta: Meta<typeof BlogPost> = {
  title: "Showcase/Blog Post",
  component: BlogPost,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BlogPost>;

export const Default: Story = {};
