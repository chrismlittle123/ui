import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Badge,
  Avatar,
  AvatarFallback,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@chrislittle/theme-core";

const CRMDashboard = () => {
  const customers = [
    { id: 1, name: "Alice Johnson", email: "alice@company.com", status: "Active", value: "$12,500", lastContact: "Today" },
    { id: 2, name: "Bob Smith", email: "bob@startup.io", status: "Lead", value: "$8,200", lastContact: "Yesterday" },
    { id: 3, name: "Carol Williams", email: "carol@enterprise.com", status: "Active", value: "$45,000", lastContact: "3 days ago" },
    { id: 4, name: "David Brown", email: "david@tech.co", status: "Churned", value: "$5,100", lastContact: "1 week ago" },
    { id: 5, name: "Eva Martinez", email: "eva@agency.net", status: "Lead", value: "$15,800", lastContact: "2 days ago" },
  ];

  const stats = [
    { label: "Total Customers", value: "2,847", change: "+12%" },
    { label: "Revenue", value: "$284,500", change: "+8%" },
    { label: "Active Deals", value: "48", change: "+23%" },
    { label: "Conversion Rate", value: "24%", change: "+4%" },
  ];

  return (
    <div className="w-[1000px] bg-background p-6 rounded-lg border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Customers</h1>
          <p className="text-muted-foreground">Manage your customer relationships</p>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Search customers..." className="w-64" />
          <Button>+ Add Customer</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                <Badge variant="secondary" className="text-xs">{stat.change}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{customer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-muted-foreground">{customer.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        customer.status === "Active" ? "default" :
                        customer.status === "Lead" ? "secondary" :
                        "outline"
                      }
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{customer.value}</TableCell>
                  <TableCell className="text-muted-foreground">{customer.lastContact}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Send Email</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof CRMDashboard> = {
  title: "Showcase/CRM Dashboard",
  component: CRMDashboard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CRMDashboard>;

export const Default: Story = {};
