import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard,
  IndianRupee,
  FileText,
  Video,
  Bell,
  Search,
  TrendingUp,
  Users,
  Building2,
  CheckCircle2,
  Clock,
  AlertCircle,
  LogOut,
  Menu,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("pmajay_user");
    if (!userData) {
      navigate("/auth");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("pmajay_user");
    navigate("/");
  };

  const getRoleLabel = (role: string) => {
    const labels: any = {
      central: "Central Authority",
      state: "State Authority",
      district: "District Officer",
      agency: "Implementing Agency",
    };
    return labels[role] || role;
  };

  const stats = [
    {
      title: "Total Fund Allocated",
      value: "₹2,450 Cr",
      change: "+12.5%",
      icon: IndianRupee,
      trend: "up",
    },
    {
      title: "Funds Utilized",
      value: "₹1,890 Cr",
      change: "77.1%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Active Projects",
      value: "1,234",
      change: "+8.2%",
      icon: Building2,
      trend: "up",
    },
    {
      title: "Pending Approvals",
      value: "42",
      change: "-15%",
      icon: Clock,
      trend: "down",
    },
  ];

  const recentActivities = [
    { type: "approval", message: "Fund release approved for Project MH-2024-001", time: "2 hours ago" },
    { type: "update", message: "Progress report submitted by District Pune", time: "5 hours ago" },
    { type: "alert", message: "Pending document verification for 3 projects", time: "1 day ago" },
  ];

  const announcements = [
    { title: "New Guidelines Released", date: "Jan 15, 2025", priority: "high" },
    { title: "Quarterly Review Meeting - Feb 5", date: "Jan 12, 2025", priority: "medium" },
    { title: "System Maintenance Schedule", date: "Jan 10, 2025", priority: "low" },
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: IndianRupee, label: "Fund Management", path: "/funds" },
    { icon: FileText, label: "Documents", path: "/documents" },
    { icon: Video, label: "Meetings", path: "/meetings" },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-card border-r border-border transition-all duration-300 flex flex-col shadow-elevated`}
      >
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h2 className="font-bold text-sm">PM-AJAY</h2>
                <p className="text-xs text-muted-foreground">Portal</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Icon className="w-5 h-5 text-primary" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-5 h-5" />
            {sidebarOpen && <span>Collapse</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Logged in as: <span className="font-medium text-foreground">{getRoleLabel(user.role)}</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search projects, files..." className="pl-10" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p
                      className={`text-xs flex items-center gap-1 mt-1 ${
                        stat.trend === "up" ? "text-success" : "text-muted-foreground"
                      }`}
                    >
                      <TrendingUp className="w-3 h-3" />
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <Card className="lg:col-span-2 shadow-card">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates and actions in the system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {activity.type === "approval" && <CheckCircle2 className="w-4 h-4 text-success" />}
                      {activity.type === "update" && <FileText className="w-4 h-4 text-primary" />}
                      {activity.type === "alert" && <AlertCircle className="w-4 h-4 text-secondary" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {announcements.map((announcement, idx) => (
                  <div key={idx} className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-sm font-medium">{announcement.title}</h4>
                      <Badge
                        variant={
                          announcement.priority === "high"
                            ? "destructive"
                            : announcement.priority === "medium"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {announcement.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/funds">
                <Card className="shadow-card hover:shadow-elevated transition-all cursor-pointer hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <IndianRupee className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-medium">View Funds</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/documents">
                <Card className="shadow-card hover:shadow-elevated transition-all cursor-pointer hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-medium">Upload Documents</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/meetings">
                <Card className="shadow-card hover:shadow-elevated transition-all cursor-pointer hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Video className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-medium">Schedule Meeting</p>
                  </CardContent>
                </Card>
              </Link>
              <Card className="shadow-card hover:shadow-elevated transition-all cursor-pointer hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Team Directory</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
