"use client"

import { useState } from "react"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account or create a new one</p>
        </div>

        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm onSuccess={() => console.log("Login successful")} />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm onSuccess={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
