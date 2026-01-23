import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Avatar,
  AvatarFallback,
} from "@chrislittle/theme";

// Status badge for non-interactive status display
const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: Record<string, string> = {
    paid: "completed",
    active: "completed",
    pending: "pending",
    overdue: "failed",
    draft: "cancelled",
    cancelled: "cancelled",
    default: "processing",
  };
  const key = statusMap[status.toLowerCase()] || "pending";

  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{
        backgroundColor: `hsl(var(--status-${key}-bg))`,
        color: `hsl(var(--status-${key}))`,
      }}
    >
      {status}
    </span>
  );
};

const BillingTracker = () => {
  const invoices = [
    { id: "INV-001", date: "Jan 1, 2026", amount: "$2,500.00", status: "Paid", client: "Acme Corp" },
    { id: "INV-002", date: "Jan 8, 2026", amount: "$1,800.00", status: "Paid", client: "TechStart Inc" },
    { id: "INV-003", date: "Jan 15, 2026", amount: "$3,200.00", status: "Pending", client: "Global Systems" },
    { id: "INV-004", date: "Jan 20, 2026", amount: "$950.00", status: "Overdue", client: "Local Cafe" },
    { id: "INV-005", date: "Jan 22, 2026", amount: "$4,100.00", status: "Draft", client: "Acme Corp" },
  ];

  const subscriptions = [
    { name: "Pro Plan", price: "$49/mo", renewal: "Feb 1, 2026", status: "Active" },
    { name: "Cloud Storage", price: "$12/mo", renewal: "Feb 15, 2026", status: "Active" },
    { name: "Analytics Add-on", price: "$29/mo", renewal: "Mar 1, 2026", status: "Cancelled" },
  ];

  return (
    <div className="w-[1000px] bg-background p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Billing</h1>
          <p className="text-muted-foreground">Manage invoices and subscriptions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export</Button>
          <Button>+ New Invoice</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
            <p className="text-3xl font-bold">$12,550</p>
            <p className="text-sm text-accent mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Pending</p>
            <p className="text-3xl font-bold">$3,200</p>
            <p className="text-sm text-muted-foreground mt-1">1 invoice</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Overdue</p>
            <p className="text-3xl font-bold text-destructive">$950</p>
            <p className="text-sm text-muted-foreground mt-1">1 invoice</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Monthly Recurring</p>
            <p className="text-3xl font-bold">$90</p>
            <p className="text-sm text-muted-foreground mt-1">2 active subscriptions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Invoices Table */}
        <Card className="col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Recent Invoices</CardTitle>
              <Button variant="ghost" size="sm">View all</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <StatusBadge status={invoice.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Subscriptions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Subscriptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subscriptions.map((sub, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">{sub.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{sub.name}</p>
                      <p className="text-xs text-muted-foreground">{sub.price}</p>
                    </div>
                  </div>
                  <StatusBadge status={sub.status} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {sub.status === "Cancelled" ? "Ends" : "Renews"}: {sub.renewal}
                </p>
                {i < subscriptions.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-4">
              Manage Subscriptions
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods */}
      <Card className="mt-6">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Payment Methods</CardTitle>
            <Button variant="outline" size="sm">+ Add New</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg flex-1">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/27</p>
              </div>
              <StatusBadge status="Default" />
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg flex-1">
              <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-yellow-400 rounded flex items-center justify-center text-white text-xs font-bold">
                MC
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Mastercard ending in 8888</p>
                <p className="text-xs text-muted-foreground">Expires 09/26</p>
              </div>
              <Button variant="ghost" size="sm">Set Default</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof BillingTracker> = {
  title: "Showcase/Billing Tracker",
  component: BillingTracker,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BillingTracker>;

export const Default: Story = {};
