"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Users,
  MessageSquare,
  BarChart3,
  Shield,
  Database,
  Activity,
  TrendingUp,
  AlertTriangle,
  Search,
  MoreHorizontal,
  Eye,
  UserX,
  Crown,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [systemStats] = useState({
    totalUsers: 12847,
    activeUsers: 8234,
    totalChats: 45621,
    messagesPerDay: 15234,
    systemUptime: "99.9%",
    avgResponseTime: "0.7s",
  });

  const [users] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      plan: "Pro",
      status: "active",
      joinDate: "2024-01-15",
      chats: 127,
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@example.com",
      plan: "Free",
      status: "active",
      joinDate: "2024-02-20",
      chats: 45,
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      email: "mike@example.com",
      plan: "Enterprise",
      status: "inactive",
      joinDate: "2024-01-08",
      chats: 289,
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma@example.com",
      plan: "Pro",
      status: "active",
      joinDate: "2024-03-01",
      chats: 78,
    },
    {
      id: 5,
      name: "David Kim",
      email: "david@example.com",
      plan: "Free",
      status: "suspended",
      joinDate: "2024-02-14",
      chats: 23,
    },
  ]);

  const [recentActivity] = useState([
    {
      id: 1,
      type: "user_signup",
      user: "Emma Wilson",
      time: "2 minutes ago",
      details: "New Pro user registration",
    },
    {
      id: 2,
      type: "system_alert",
      user: "System",
      time: "15 minutes ago",
      details: "High API usage detected",
    },
    {
      id: 3,
      type: "user_upgrade",
      user: "Alex Johnson",
      time: "1 hour ago",
      details: "Upgraded from Free to Pro",
    },
    {
      id: 4,
      type: "chat_spike",
      user: "System",
      time: "2 hours ago",
      details: "Chat volume increased by 25%",
    },
    {
      id: 5,
      type: "user_report",
      user: "Sarah Chen",
      time: "3 hours ago",
      details: "Reported inappropriate content",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-yellow-500";
      case "suspended":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_signup":
        return <Users className="h-4 w-4" />;
      case "system_alert":
        return <AlertTriangle className="h-4 w-4" />;
      case "user_upgrade":
        return <Crown className="h-4 w-4" />;
      case "chat_spike":
        return <TrendingUp className="h-4 w-4" />;
      case "user_report":
        return <Shield className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-xl font-bold text-foreground drop-shadow-sm"
              >
                Artho Admin
              </Link>
              <Badge variant="destructive" className="shadow-sm">
                Admin
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
              >
                <Link href="/dashboard">
                  <Users className="h-4 w-4 mr-2" />
                  User View
                </Link>
              </Button>
              <Avatar className="h-8 w-8 shadow-md ring-2 ring-white/10">
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 drop-shadow-lg">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground drop-shadow-sm">
            Monitor and manage your ChatAI platform
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* System Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {systemStats.totalUsers.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {systemStats.activeUsers.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    64% of total users
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Chats
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {systemStats.totalChats.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last week
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Messages/Day
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {systemStats.messagesPerDay.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Peak: 18.2K messages
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    System Uptime
                  </CardTitle>
                  <Database className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {systemStats.systemUptime}
                  </div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg Response
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {systemStats.avgResponseTime}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    -0.1s from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle className="drop-shadow-sm">
                  Recent Activity
                </CardTitle>
                <CardDescription className="drop-shadow-sm">
                  Latest system events and user activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-3 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <div className="flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {activity.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Manage user accounts and permissions
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        className="pl-8 w-64"
                      />
                    </div>
                    <Button className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Add User
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={`/generic-placeholder-graphic.png?key=${user.id}`}
                            alt={user.name}
                          />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">
                              {user.name}
                            </p>
                            <div
                              className={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`}
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <Badge
                            variant={
                              user.plan === "Enterprise"
                                ? "default"
                                : user.plan === "Pro"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {user.plan}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">
                            {user.chats} chats
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:shadow-md transition-all duration-300 hover:scale-105"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:shadow-md transition-all duration-300 hover:scale-105"
                          >
                            <UserX className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:shadow-md transition-all duration-300 hover:scale-105"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>
                  Detailed insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">
                      Usage Trends
                    </h4>
                    <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Chart: Daily Active Users
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">
                      Revenue Metrics
                    </h4>
                    <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Chart: Monthly Revenue
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>
                  Monitor system performance and health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        API Response Time
                      </span>
                      <span className="text-sm text-green-500">Healthy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Database Performance
                      </span>
                      <span className="text-sm text-green-500">Optimal</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Server Load</span>
                      <span className="text-sm text-yellow-500">Moderate</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Error Rate</span>
                      <span className="text-sm text-green-500">Low</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Storage Usage</span>
                      <span className="text-sm text-muted-foreground">
                        67% of 1TB
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bandwidth</span>
                      <span className="text-sm text-muted-foreground">
                        2.3TB this month
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Active Connections
                      </span>
                      <span className="text-sm text-muted-foreground">
                        1,247
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Queue Length</span>
                      <span className="text-sm text-muted-foreground">
                        23 requests
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure platform settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Rate Limiting
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Configure API rate limits
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                    >
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Content Moderation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Manage content filtering rules
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                    >
                      Manage
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Backup Settings
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Configure automated backups
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                    >
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Security Policies
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Manage security settings
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                    >
                      Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
