"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
  const [input, setInput] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [user] = useState({
    isLoggedIn: false,
    name: "",
    role: null,
  })

  type Message = {
    id: string
    role: "user" | "assistant"
    content: string
  }

  const SendIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  )

  const BotIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  const UserIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )

  const SparklesIcon = () => (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#E3F2FD" }} />
          <stop offset="100%" style={{ stopColor: "#BBDEFB" }} />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1976D2" }} />
          <stop offset="100%" style={{ stopColor: "#0D47A1" }} />
        </linearGradient>
        <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      <circle cx="12" cy="12" r="11" fill="url(#bgGrad)" />

      <text
        x="12"
        y="12"
        fontFamily="Inter, 'Segoe UI', Roboto, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="url(#textGrad)"
        textAnchor="middle"
        dominantBaseline="middle"
        filter="url(#textShadow)"
      >
        A
      </text>
    </svg>
  )

  const LoginIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      />
    </svg>
  )

  const UserCircleIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )

  const ShieldIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  )

  const MenuIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )

  const XIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/30 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-black/5">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 hover:bg-accent/50 hover:shadow-md transition-all duration-200 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </Button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200">
                  <Link href="/" ><SparklesIcon /></Link>
                </div>
                <Link href="/" className="text-xl font-semibold text-foreground drop-shadow-sm">Artho</Link>
              </div>

              <nav className="hidden md:flex items-center gap-6 ml-8">
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-sm hover:scale-105"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-sm hover:scale-105"
                >
                  Pricing
                </Link>
                <Link
                  href="/download"
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:drop-shadow-sm hover:scale-105"
                >
                  Download
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-2 md:gap-4">

              {user.isLoggedIn ? (
                <div className="flex items-center gap-1 md:gap-2">
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 md:gap-2 bg-card/50 backdrop-blur-sm border-border/50 text-xs md:text-sm px-2 md:px-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      <UserCircleIcon />
                      <span className="hidden sm:inline">Dashboard</span>
                    </Button>
                  </Link>

                  {user.role === "admin" && (
                    <Link href="/admin">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 md:gap-2 bg-card/50 backdrop-blur-sm border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs md:text-sm px-2 md:px-3 shadow-md shadow-red-500/10 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 transition-all duration-200"
                      >
                        <ShieldIcon />
                        <span className="hidden sm:inline">Admin</span>
                      </Button>
                    </Link>
                  )}

                  <span className="hidden md:block text-sm text-muted-foreground drop-shadow-sm">
                    Welcome, {user.name}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3 hover:bg-accent/50 hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      <LoginIcon />
                      <span className="hidden sm:inline">Sign In</span>
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button
                      size="sm"
                      className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                    >
                      <UserIcon />
                      <span className="hidden sm:inline">Get Started</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className="md:hidden border-t border-border/20 bg-card/40 backdrop-blur-lg relative z-50 shadow-xl">
              <nav className="max-w-4xl mx-auto px-4 py-4 space-y-2">
                <Link
                  href="/about"
                  className="block text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-200 py-3 px-2 rounded-md hover:shadow-md hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="block text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-200 py-3 px-2 rounded-md hover:shadow-md hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/download"
                  className="block text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-200 py-3 px-2 rounded-md hover:shadow-md hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download
                </Link>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 mb-8 shadow-md backdrop-blur-sm">
            AI for Everyone
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance drop-shadow-lg">
            The fastest and most powerful platform for AI conversations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty drop-shadow-sm">
            Build transformative AI experiences powered by industry-leading models and tools. Empower your conversations
            with intelligence that understands context and delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Chatting
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-muted-foreground mb-12">Trusted by builders at</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-center text-lg font-semibold">OpenAI</div>
            <div className="text-center text-lg font-semibold">Anthropic</div>
            <div className="text-center text-lg font-semibold">Google</div>
            <div className="text-center text-lg font-semibold">Microsoft</div>
            <div className="text-center text-lg font-semibold">Meta</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Flagship Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI models are designed for a variety of real-world tasks with cutting-edge capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Lightning Fast</h3>
              <p className="text-muted-foreground mb-4 drop-shadow-sm">
                Fastest response times for complex tasks with optimized performance and low latency.
              </p>
              <div className="flex items-center text-sm text-muted-foreground drop-shadow-sm">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Real-time responses
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Smart Context</h3>
              <p className="text-muted-foreground mb-4 drop-shadow-sm">
                Advanced context understanding that maintains conversation flow and remembers important details.
              </p>
              <div className="flex items-center text-sm text-muted-foreground drop-shadow-sm">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Context awareness
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Secure & Private</h3>
              <p className="text-muted-foreground mb-4 drop-shadow-sm">
                Enterprise-grade security with end-to-end encryption and privacy-first architecture.
              </p>
              <div className="flex items-center text-sm text-muted-foreground drop-shadow-sm">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                End-to-end encryption
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who are already experiencing the future of AI conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-foreground mb-4">ChatAI</div>
              <p className="text-muted-foreground text-sm">
                The fastest and most powerful platform for AI conversations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-foreground transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ChatAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
