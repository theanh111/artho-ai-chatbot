"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const UserCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const CrownIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
  </svg>
)

export function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState<"user" | "admin">("user")

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CrownIcon />
          Role Switcher
        </CardTitle>
        <CardDescription>Switch between user and admin views for testing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Current Role:</span>
          <Badge variant={currentRole === "admin" ? "destructive" : "secondary"}>
            {currentRole === "admin" ? "Administrator" : "User"}
          </Badge>
        </div>

        <div className="flex gap-2">
          <Button
            variant={currentRole === "user" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentRole("user")}
            className="flex-1"
          >
            <UserCircleIcon />
            User
          </Button>
          <Button
            variant={currentRole === "admin" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentRole("admin")}
            className="flex-1"
          >
            <ShieldIcon />
            Admin
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          {currentRole === "user"
            ? "Access to personal dashboard, chat history, and settings"
            : "Full administrative access to user management and system controls"}
        </div>
      </CardContent>
    </Card>
  )
}
