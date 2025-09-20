"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function DownloadPage() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance drop-shadow-lg">
            Download Artho
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty drop-shadow-sm">
            Get the Artho app on all your devices. Available for Windows, macOS, Linux, iOS, and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download for Desktop
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Download for Mobile
            </Button>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 drop-shadow-lg">Choose your platform</h2>
            <p className="text-xl text-muted-foreground drop-shadow-sm">
              Artho is available on all major platforms and devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Windows */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Windows</h3>
              <p className="text-muted-foreground mb-6 drop-shadow-sm">Windows 10 or later</p>
              <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download for Windows
              </Button>
              <p className="text-sm text-muted-foreground mt-3">Version 2.1.0 • 85 MB</p>
            </Card>

            {/* macOS */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">macOS</h3>
              <p className="text-muted-foreground mb-6 drop-shadow-sm">macOS 11.0 or later</p>
              <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download for Mac
              </Button>
              <p className="text-sm text-muted-foreground mt-3">Version 2.1.0 • 92 MB</p>
            </Card>

            {/* Linux */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 01-.088.094c-.196.184-.4.213-.634.255-.233.043-.484.095-.708.23-.127.077-.236.203-.331.324-.095.12-.177.226-.259.334-.41.542-.7 1.116-.918 1.693-.109.29-.2.559-.267.818-.067.334-.118.607-.118.937 0 .254.055.511.139.777.166.519.47 1.074.944 1.395.948.64 1.683.988 2.775.5.214-.092.41-.233.547-.417.24-.327.413-.68.617-1.099.069-.141.15-.3.225-.462.075-.157.155-.658.134-.962-.01-.150-.025-.299-.061-.436-.128-.562-.318-.853-.318-1.457 0-.277.04-.623.093-.942.053-.319.114-.611.185-.92.139-.607.32-1.228.585-1.817.131-.295.284-.576.461-.827.09-.129.175-.235.259-.343.167-.219.37-.416.581-.597.45-.384.94-.685 1.463-.962.562-.297 1.156-.6 1.463-1.205.153-.304.23-.66.23-1.067 0-.739-.421-1.6-.632-2.288-.19-.624-.319-1.084-.088-1.555.221-.464.632-.623.632-.623.179-.061.279-.184.279-.327 0-.22-.251-.389-.632-.389-.459 0-.996.198-1.626.498-.748.357-1.626.847-2.298 1.555-.758.795-1.293 1.61-1.293 2.617 0 .313.055.65.139.962.166.615.47 1.287.944 1.693.948.812 1.683 1.252 2.775.934.214-.062.41-.14.547-.249.24-.196.413-.408.617-.661.069-.085.15-.18.225-.277.075-.094.155-.395.134-.579-.01-.090-.025-.178-.061-.26-.128-.336-.318-.511-.318-.863 0-.166.04-.373.093-.564.053-.191.114-.366.185-.551.139-.364.32-.735.585-1.088.131-.177.284-.345.461-.495.09-.077.175-.141.259-.205.167-.131.37-.249.581-.357.45-.23.94-.41 1.463-.576.562-.178 1.156-.36 1.463-.722.153-.182.23-.396.23-.641 0-.4-.421-.763-.632-1.371-.19-.551-.319-.995-.088-1.176.221-.181.632-.181.632-.181.179 0 .279-.066.279-.148 0-.1-.251-.181-.632-.181-.459 0-.996.066-1.626.181-.748.137-1.626.341-2.298.681-.758.383-1.293.747-1.293 1.271 0 .203.055.423.139.641.166.427.47.795.944 1.048.948.507 1.683.761 2.775.507.214 0 .41-.014.547-.027.24-.014.413-.027.617-.027.069 0 .15.014.225.027.075.014.155.027.134.027-.01 0-.025 0-.061 0-.128 0-.318 0-.318.181 0 .1.04.181.093.181.053 0 .114 0 .185 0 .139 0 .32 0 .585 0 .131 0 .284 0 .461 0 .09 0 .175 0 .259 0 .167 0 .37 0 .581 0 .45 0 .94 0 1.463 0 .562 0 1.156 0 1.463 0 .153 0 .23 0 .23 0 0 0-.421 0-.632 0-.19 0-.319 0-.088 0 .221 0 .632 0 .632 0 .179 0 .279 0 .279 0 0 0-.251 0-.632 0-.459 0-.996 0-1.626 0-.748 0-1.626 0-2.298 0-.758 0-1.293 0-1.293 0 0 0 .055 0 .139 0 .166 0 .47 0 .944 0 .948 0 1.683 0 2.775 0 .214 0 .41 0 .547 0 .24 0 .413 0 .617 0 .069 0 .15 0 .225 0 .075 0 .155 0 .134 0-.01 0-.025 0-.061 0-.128 0-.318 0-.318 0 0 0 .04 0 .093 0 .053 0 .114 0 .185 0 .139 0 .32 0 .585 0 .131 0 .284 0 .461 0 .09 0 .175 0 .259 0 .167 0 .37 0 .581 0 .45 0 .94 0 1.463 0 .562 0 1.156 0 1.463 0 .153 0 .23 0 .23 0 0 0-.421 0-.632 0-.19 0-.319 0-.088 0 .221 0 .632 0 .632 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Linux</h3>
              <p className="text-muted-foreground mb-6 drop-shadow-sm">Ubuntu 18.04 or later</p>
              <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download for Linux
              </Button>
              <p className="text-sm text-muted-foreground mt-3">Version 2.1.0 • 78 MB</p>
            </Card>

            {/* iOS */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">iOS</h3>
              <p className="text-muted-foreground mb-6 drop-shadow-sm">iOS 14.0 or later</p>
              <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download on App Store
              </Button>
              <p className="text-sm text-muted-foreground mt-3">Version 2.1.0 • Free</p>
            </Card>

            {/* Android */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Android</h3>
              <p className="text-muted-foreground mb-6 drop-shadow-sm">Android 8.0 or later</p>
              <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get it on Google Play
              </Button>
              <p className="text-sm text-muted-foreground mt-3">Version 2.1.0 • Free</p>
            </Card>

            {/* Web App */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 drop-shadow-sm">Web App</h3>
              <p className="text-muted-foreground mb-6 drop-shadow-sm">Works in any browser</p>
              <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Launch Web App
              </Button>
              <p className="text-sm text-muted-foreground mt-3">No download required</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why download Artho?</h2>
            <p className="text-xl text-muted-foreground">Get the best experience with our native applications.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Faster Performance</h3>
              <p className="text-muted-foreground">
                Native apps provide better performance and faster response times compared to web versions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Offline Mode</h3>
              <p className="text-muted-foreground">
                Continue your AI conversations even when you're offline with cached responses and local storage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM16 3H4v2h12V3zM4 7h12v2H4V7zM4 11h12v2H4v-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">System Integration</h3>
              <p className="text-muted-foreground">
                Deep system integration with notifications, shortcuts, and native OS features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 drop-shadow-lg">System Requirements</h2>
            <p className="text-xl text-muted-foreground drop-shadow-sm">
              Make sure your device meets the minimum requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Desktop</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Windows</h4>
                  <p className="text-sm text-muted-foreground">Windows 10 (64-bit) or later, 4GB RAM, 200MB storage</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">macOS</h4>
                  <p className="text-sm text-muted-foreground">macOS 11.0 or later, 4GB RAM, 200MB storage</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Linux</h4>
                  <p className="text-sm text-muted-foreground">Ubuntu 18.04+ or equivalent, 4GB RAM, 200MB storage</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Mobile</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">iOS</h4>
                  <p className="text-sm text-muted-foreground">iOS 14.0 or later, iPhone 7 or newer, 100MB storage</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Android</h4>
                  <p className="text-sm text-muted-foreground">
                    Android 8.0 (API level 26) or later, 2GB RAM, 100MB storage
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Internet</h4>
                  <p className="text-sm text-muted-foreground">Stable internet connection required for AI responses</p>
                </div>
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
            Download Artho today and experience the future of AI conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Try Web Version
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-foreground mb-4">Artho</div>
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
            © 2025 Artho. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
