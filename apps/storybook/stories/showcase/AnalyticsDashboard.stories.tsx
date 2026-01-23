import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Avatar,
  AvatarFallback,
  Tabs,
  TabsList,
  TabsTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@chrislittle/theme";

// Status badge for non-interactive status display
const StatusBadge = ({ value, positive }: { value: string; positive: boolean }) => {
  const key = positive ? "completed" : "failed";

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
      style={{
        backgroundColor: `hsl(var(--status-${key}-bg))`,
        color: `hsl(var(--status-${key}))`,
      }}
    >
      {value}
    </span>
  );
};

const AnalyticsDashboard = () => {
  const stats = [
    { label: "Total Revenue", value: "$45,231", change: "+20.1%", positive: true },
    { label: "Subscriptions", value: "+2,350", change: "+180.1%", positive: true },
    { label: "Active Users", value: "12,234", change: "+19%", positive: true },
    { label: "Churn Rate", value: "2.4%", change: "-4%", positive: true },
  ];

  const recentActivity = [
    { user: "Alice", action: "upgraded to Pro", time: "2m ago" },
    { user: "Bob", action: "made a purchase", time: "5m ago" },
    { user: "Carol", action: "signed up", time: "12m ago" },
    { user: "David", action: "submitted feedback", time: "25m ago" },
    { user: "Eva", action: "renewed subscription", time: "1h ago" },
  ];

  const topProducts = [
    { name: "Pro Plan", revenue: "$12,450", sales: 145, growth: "+12%" },
    { name: "Enterprise Plan", revenue: "$24,300", sales: 81, growth: "+8%" },
    { name: "Starter Plan", revenue: "$3,200", sales: 320, growth: "+24%" },
    { name: "Add-ons", revenue: "$5,281", sales: 198, growth: "+15%" },
  ];

  return (
    <div className="w-[1100px] bg-background p-6 rounded-lg border space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your business performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button>Download Report</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center justify-between">
                {stat.label}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Revenue Chart Placeholder */}
        <Card className="col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Revenue Overview</CardTitle>
              <Tabs defaultValue="revenue">
                <TabsList>
                  <TabsTrigger value="revenue">Revenue</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-2 opacity-50">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
                <p className="text-sm">Revenue chart visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best performing products this period</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {topProducts.map((product) => (
              <div key={product.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{product.name}</span>
                  <StatusBadge value={product.growth} positive={true} />
                </div>
                <div className="text-2xl font-bold mb-1">{product.revenue}</div>
                <p className="text-sm text-muted-foreground">{product.sales} sales</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof AnalyticsDashboard> = {
  title: "Showcase/Analytics Dashboard",
  component: AnalyticsDashboard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AnalyticsDashboard>;

export const Default: Story = {};
