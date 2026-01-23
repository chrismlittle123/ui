import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@chrislittle/theme";

const BlogPost = () => {
  return (
    <div className="w-[800px] bg-background border rounded-lg overflow-hidden">
      {/* Header */}
      <header className="border-b py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl mr-8">The Daily</span>
          <nav className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Technology</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Business</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Culture</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Science</a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Subscribe</Button>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-[580px] mx-auto pt-12 pb-16 px-6">
        {/* Category & Reading Time */}
        <div className="flex items-center space-x-3 mb-6">
          <Badge variant="secondary">Technology</Badge>
          <span className="text-sm text-muted-foreground">8 min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight mb-4">
          The Future of AI: How Machine Learning is Reshaping Every Industry
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
          From healthcare to finance, artificial intelligence is transforming the way we work, live, and think about technology.
        </p>

        {/* Author */}
        <div className="flex items-center justify-between py-6 border-y mb-8">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">Jan 23, 2026</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            The rapid advancement of artificial intelligence has moved from science fiction to everyday reality faster than most experts predicted. Today, AI systems are diagnosing diseases, driving cars, writing code, and even creating art that rivals human creativity.
          </p>

          <p>
            But what does this mean for the future of work, creativity, and human potential? As we stand at this technological crossroads, understanding the implications of AI becomes crucial for everyone, not just technologists.
          </p>

          <h2 className="text-2xl font-bold pt-6 pb-2">The Healthcare Revolution</h2>

          <p>
            In hospitals around the world, AI is already making a difference. Machine learning algorithms can now detect certain cancers earlier than human radiologists, analyze genetic data to predict disease risk, and help develop new drugs in a fraction of the time it once took.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground text-lg">
            "We're not replacing doctors, we're augmenting their capabilities. AI handles the pattern recognition at scale, freeing physicians to focus on what humans do best: empathy, complex decision-making, and patient care."
          </blockquote>

          <p>
            Dr. Emily Chen, head of AI research at Stanford Medical Center, has seen firsthand how these tools are changing patient outcomes. Her team recently published a study showing a 23% improvement in early-stage cancer detection using AI-assisted diagnostics.
          </p>

          <h2 className="text-2xl font-bold pt-6 pb-2">What Comes Next?</h2>

          <p>
            As AI capabilities continue to expand, the question isn't whether these technologies will transform our world, but how we'll adapt to ensure the benefits are shared widely and the risks are managed responsibly.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold mb-1">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Senior Technology Writer covering AI, machine learning, and the future of work. Previously at Wired and MIT Technology Review.
                </p>
                <Button variant="outline" size="sm">Follow</Button>
              </div>
            </div>
          </CardContent>
        </Card>
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
