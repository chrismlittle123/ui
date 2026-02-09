import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  Input,
  Textarea,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
} from "@chrislittle/theme";

/* ------------------------------------------------------------------ */
/*  SVG icons (inline to avoid external deps)                         */
/* ------------------------------------------------------------------ */

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="M12 5v14" />
  </svg>
);

const PaperclipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  </svg>
);

const ThumbsDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const MoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Typing dots animation                                             */
/* ------------------------------------------------------------------ */

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-1">
    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
  </div>
);

/* ------------------------------------------------------------------ */
/*  Inline code block (missing from most themes)                      */
/* ------------------------------------------------------------------ */

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
  <div className="rounded-lg border bg-muted/50 overflow-hidden my-3">
    <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
      <span className="text-xs text-muted-foreground font-mono">{language}</span>
      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
        <CopyIcon />
        Copy
      </button>
    </div>
    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Action button row on assistant messages                           */
/* ------------------------------------------------------------------ */

const MessageActions = () => (
  <TooltipProvider delayDuration={300}>
    <div className="flex items-center gap-0.5 mt-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <CopyIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom"><p>Copy</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <ThumbsUpIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom"><p>Good response</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <ThumbsDownIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom"><p>Bad response</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <RefreshIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom"><p>Regenerate</p></TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

/* ------------------------------------------------------------------ */
/*  Main chat showcase                                                */
/* ------------------------------------------------------------------ */

const ChatInterface = () => {
  const conversations = [
    { id: 1, title: "React performance tips", time: "Just now", active: true },
    { id: 2, title: "Python data pipeline", time: "2h ago", active: false },
    { id: 3, title: "Design system colors", time: "Yesterday", active: false },
    { id: 4, title: "Docker compose help", time: "Yesterday", active: false },
    { id: 5, title: "SQL query optimization", time: "3 days ago", active: false },
    { id: 6, title: "TypeScript generics", time: "1 week ago", active: false },
  ];

  return (
    <div className="w-[1100px] h-[700px] bg-background rounded-lg border flex overflow-hidden">
      {/* ---- Sidebar ---- */}
      <div className="w-[260px] border-r bg-muted/20 flex flex-col">
        {/* New chat */}
        <div className="p-3">
          <Button className="w-full justify-start gap-2" variant="outline" size="sm">
            <PlusIcon /> New chat
          </Button>
        </div>

        {/* Search */}
        <div className="px-3 pb-2">
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              <SearchIcon />
            </span>
            <Input placeholder="Search conversations..." className="h-8 pl-8 text-xs" />
          </div>
        </div>

        <Separator />

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider px-2 py-2">Today</p>
          {conversations.slice(0, 2).map((c) => (
            <div
              key={c.id}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
                c.active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              }`}
            >
              <MessageIcon />
              <span className="flex-1 truncate">{c.title}</span>
            </div>
          ))}

          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider px-2 py-2 pt-4">Yesterday</p>
          {conversations.slice(2, 4).map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground cursor-pointer transition-colors"
            >
              <MessageIcon />
              <span className="flex-1 truncate">{c.title}</span>
            </div>
          ))}

          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider px-2 py-2 pt-4">Previous</p>
          {conversations.slice(4).map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground cursor-pointer transition-colors"
            >
              <MessageIcon />
              <span className="flex-1 truncate">{c.title}</span>
            </div>
          ))}
        </div>

        {/* User footer */}
        <Separator />
        <div className="p-3 flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="text-xs">CL</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium flex-1 truncate">Chris Little</span>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreIcon />
          </button>
        </div>
      </div>

      {/* ---- Main chat area ---- */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 font-semibold text-sm hover:text-muted-foreground transition-colors">
                <SparkleIcon />
                GPT-4o
                <ChevronDownIcon />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>GPT-4o</DropdownMenuItem>
              <DropdownMenuItem>GPT-4o mini</DropdownMenuItem>
              <DropdownMenuItem>o1-preview</DropdownMenuItem>
              <DropdownMenuItem>o1-mini</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-[10px]">Pro</Badge>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[720px] mx-auto px-4 py-6 space-y-6">
            {/* User message 1 */}
            <div className="flex gap-3">
              <Avatar className="h-7 w-7 mt-0.5 shrink-0">
                <AvatarFallback className="text-xs">CL</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1">You</p>
                <p className="text-sm leading-relaxed">
                  What are the best practices for optimizing React component re-renders? I'm seeing performance issues in a large list.
                </p>
              </div>
            </div>

            {/* Assistant message 1 */}
            <div className="flex gap-3">
              <Avatar className="h-7 w-7 mt-0.5 shrink-0 bg-primary">
                <AvatarFallback className="text-xs text-primary-foreground">AI</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1">Assistant</p>
                <div className="text-sm leading-relaxed space-y-3">
                  <p>
                    Great question! Here are the key strategies for optimizing React re-renders in large lists:
                  </p>

                  <p><strong>1. Use React.memo</strong> — Wrap list item components to prevent re-renders when props haven't changed:</p>

                  <CodeBlock
                    language="tsx"
                    code={`const ListItem = React.memo(({ item }: Props) => {
  return (
    <div className="list-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
});`}
                  />

                  <p><strong>2. Virtualize long lists</strong> — Only render visible items using a library like <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">react-window</code> or <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@tanstack/virtual</code>:</p>

                  <CodeBlock
                    language="tsx"
                    code={`import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
  });
  // render only virtualizer.getVirtualItems()
}`}
                  />

                  <p><strong>3. Stabilize callbacks</strong> — Use <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">useCallback</code> for handlers passed to child components, and <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">useMemo</code> for derived data.</p>

                  <p><strong>4. Use proper keys</strong> — Always use stable, unique keys (not array index) so React can efficiently diff the list.</p>

                  <p>Would you like me to go deeper into any of these techniques?</p>
                </div>
                <MessageActions />
              </div>
            </div>

            {/* User message 2 */}
            <div className="flex gap-3">
              <Avatar className="h-7 w-7 mt-0.5 shrink-0">
                <AvatarFallback className="text-xs">CL</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1">You</p>
                <p className="text-sm leading-relaxed">
                  Can you show me a complete example with react-window for a list of 10,000 items?
                </p>
              </div>
            </div>

            {/* Assistant typing indicator */}
            <div className="flex gap-3">
              <Avatar className="h-7 w-7 mt-0.5 shrink-0 bg-primary">
                <AvatarFallback className="text-xs text-primary-foreground">AI</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1">Assistant</p>
                <TypingIndicator />
              </div>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-t p-4">
          <div className="max-w-[720px] mx-auto">
            <Card className="shadow-sm">
              <CardContent className="p-2">
                <Textarea
                  placeholder="Message ChatGPT..."
                  className="min-h-[44px] max-h-[200px] resize-none border-0 shadow-none focus-visible:ring-0 text-sm p-2"
                  rows={1}
                />
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1">
                    <TooltipProvider delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                            <PaperclipIcon />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top"><p>Attach file</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Button size="sm" className="h-8 w-8 p-0 rounded-lg">
                    <SendIcon />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <p className="text-[10px] text-muted-foreground text-center mt-2">
              AI can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Loading / skeleton state                                          */
/* ------------------------------------------------------------------ */

const ChatLoading = () => (
  <div className="w-[1100px] h-[700px] bg-background rounded-lg border flex overflow-hidden">
    {/* Sidebar skeleton */}
    <div className="w-[260px] border-r bg-muted/20 flex flex-col p-3 gap-3">
      <Skeleton className="h-9 w-full rounded-md" />
      <Skeleton className="h-8 w-full rounded-md" />
      <Separator />
      <div className="space-y-2 flex-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-full rounded-md" />
        ))}
      </div>
      <Separator />
      <div className="flex items-center gap-2">
        <Skeleton className="h-7 w-7 rounded-full" />
        <Skeleton className="h-4 w-24 rounded" />
      </div>
    </div>

    {/* Main area skeleton */}
    <div className="flex-1 flex flex-col">
      <div className="px-4 py-3 border-b flex items-center gap-2">
        <Skeleton className="h-5 w-20 rounded" />
      </div>
      <div className="flex-1 p-6 max-w-[720px] mx-auto w-full space-y-6">
        {/* User msg skeleton */}
        <div className="flex gap-3">
          <Skeleton className="h-7 w-7 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-12 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-3/4 rounded" />
          </div>
        </div>
        {/* Assistant msg skeleton */}
        <div className="flex gap-3">
          <Skeleton className="h-7 w-7 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-16 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <div className="max-w-[720px] mx-auto">
          <Skeleton className="h-[72px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Empty / new conversation state                                    */
/* ------------------------------------------------------------------ */

const ChatEmpty = () => (
  <div className="w-[1100px] h-[700px] bg-background rounded-lg border flex overflow-hidden">
    {/* Sidebar */}
    <div className="w-[260px] border-r bg-muted/20 flex flex-col">
      <div className="p-3">
        <Button className="w-full justify-start gap-2" variant="outline" size="sm">
          <PlusIcon /> New chat
        </Button>
      </div>
      <Separator />
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-xs text-muted-foreground text-center">No conversations yet</p>
      </div>
      <Separator />
      <div className="p-3 flex items-center gap-2">
        <Avatar className="h-7 w-7">
          <AvatarFallback className="text-xs">CL</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium flex-1 truncate">Chris Little</span>
      </div>
    </div>

    {/* Main area - empty state */}
    <div className="flex-1 flex flex-col">
      <div className="flex items-center px-4 py-3 border-b">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 font-semibold text-sm hover:text-muted-foreground transition-colors">
              <SparkleIcon />
              GPT-4o
              <ChevronDownIcon />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>GPT-4o</DropdownMenuItem>
            <DropdownMenuItem>GPT-4o mini</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
          <SparkleIcon />
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-lg font-semibold">How can I help you today?</h2>
          <p className="text-sm text-muted-foreground">Ask me anything — code, writing, analysis, and more.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 max-w-md w-full">
          {[
            { title: "Write code", desc: "Build a React component" },
            { title: "Analyze data", desc: "Help me understand a dataset" },
            { title: "Explain concept", desc: "Break down a complex topic" },
            { title: "Debug issue", desc: "Find and fix a bug" },
          ].map((s) => (
            <Card key={s.title} className="cursor-pointer hover:bg-accent/50 transition-colors">
              <CardContent className="p-3">
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="border-t p-4">
        <div className="max-w-[720px] mx-auto">
          <Card className="shadow-sm">
            <CardContent className="p-2">
              <Textarea
                placeholder="Message ChatGPT..."
                className="min-h-[44px] max-h-[200px] resize-none border-0 shadow-none focus-visible:ring-0 text-sm p-2"
                rows={1}
              />
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1">
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                          <PaperclipIcon />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top"><p>Attach file</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Button size="sm" className="h-8 w-8 p-0 rounded-lg" disabled>
                  <SendIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Storybook meta                                                    */
/* ------------------------------------------------------------------ */

const meta: Meta = {
  title: "Showcase/Chat Interface",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ChatInterface />,
};

export const EmptyState: Story = {
  render: () => <ChatEmpty />,
};

export const Loading: Story = {
  render: () => <ChatLoading />,
};
