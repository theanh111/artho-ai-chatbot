"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const MessageSquareIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const UserIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const BarChart3Icon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ZapIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

export default function UserDashboard() {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/diverse-user-avatars.png",
    plan: "Pro",
    joinDate: "March 2024",
  })

  const [stats] = useState({
    totalChats: 127,
    messagesThisMonth: 1234,
    averageResponseTime: "0.8s",
    favoriteTopics: ["Technology", "Business", "Creative Writing"],
  })

  const [recentChats] = useState([
    { id: 1, title: "Project Planning Discussion", date: "2 hours ago", messages: 23 },
    { id: 2, title: "Code Review Help", date: "1 day ago", messages: 15 },
    { id: 3, title: "Marketing Strategy Ideas", date: "2 days ago", messages: 31 },
    { id: 4, title: "Technical Documentation", date: "3 days ago", messages: 18 },
    { id: 5, title: "Creative Writing Session", date: "1 week ago", messages: 42 },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-bold text-foreground drop-shadow-sm">
                ChatAI
              </Link>
              <Badge variant="secondary" className="shadow-sm">
                Dashboard
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
              >
                <Link href="/">
                  <MessageSquareIcon />
                  New Chat
                </Link>
              </Button>
              <Avatar className="h-8 w-8 shadow-md ring-2 ring-white/10">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 drop-shadow-lg">Welcome back, {user.name}</h1>
          <p className="text-muted-foreground drop-shadow-sm">Here's your AI chat activity and insights</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Chat History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Chats</CardTitle>
                  <MessageSquareIcon />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalChats}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Messages This Month</CardTitle>
                  <BarChart3Icon />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.messagesThisMonth.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                  <ZapIcon />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageResponseTime}</div>
                  <p className="text-xs text-muted-foreground">-0.2s from last month</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Plan</CardTitle>
                  <UserIcon />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.plan}</div>
                  <p className="text-xs text-muted-foreground">Unlimited messages</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle className="drop-shadow-sm">Recent Chat Sessions</CardTitle>
                <CardDescription className="drop-shadow-sm">Your most recent AI conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentChats.map((chat) => (
                    <div
                      key={chat.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <div>
                          <p className="font-medium text-foreground">{chat.title}</p>
                          <p className="text-sm text-muted-foreground">{chat.messages} messages</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ClockIcon />
                        {chat.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle>Chat History</CardTitle>
                <CardDescription>All your previous conversations with AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentChats.map((chat) => (
                    <div
                      key={chat.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            <MessageSquareIcon />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{chat.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {chat.messages} messages • {chat.date}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-lg">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{user.name}</h3>
                    <p className="text-muted-foreground">{user.email}</p>
                    <Badge variant="secondary" className="mt-2">
                      {user.plan} Plan
                    </Badge>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground">Member Since</label>
                    <p className="text-muted-foreground">{user.joinDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Favorite Topics</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {stats.favoriteTopics.map((topic) => (
                        <Badge key={topic} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                  >
                    Change Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm ring-1 ring-white/5">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your preferences and account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive updates about your account</p>
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
                      <h4 className="font-medium text-foreground">Privacy Settings</h4>
                      <p className="text-sm text-muted-foreground">Control your data and privacy</p>
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
                      <h4 className="font-medium text-foreground">API Access</h4>
                      <p className="text-sm text-muted-foreground">Generate API keys for integrations</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                    >
                      View Keys
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Export Data</h4>
                      <p className="text-sm text-muted-foreground">Download your chat history</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
                    >
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
