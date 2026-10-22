"use client";

import type React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { unified } from "unified";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SendIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

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
        <feDropShadow
          dx="0"
          dy="0.5"
          stdDeviation="0.5"
          floodColor="#000"
          floodOpacity="0.3"
        />
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
);

const LoginIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    />
  </svg>
);

const UserCircleIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useState({
    isLoggedIn: false,
    name: "",
    role: null,
  });

  const profileUrl = process.env.UPWORK_PROFILE_URL!;

  const logWelcomeMessage = () => {
    return "Hi, I'm The Anh (John). Feel free to book me for your upcoming projects right here: ";
  };

  console.log(
    "%cWelcome to the dev console!\n%c" +
      logWelcomeMessage() +
      "\n%c" +
      profileUrl,
    "color: #34d399; font-weight: 600; font-size: 18px;",
    "color: #cbd5e1; font-style: italic;",
    "color: #60a5fa; text-decoration: underline;",
  );

  const handleMarkdownResponse = async (response: string) => {
    const html = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkBreaks)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(response);

    return String(html);
  };

  const askGemini = async (content: string) => {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    return (
      handleMarkdownResponse(data.text) ??
      "Sorry, I couldn't get a response right now."
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const answer = await askGemini(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: answer,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I couldn't get a response right now.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative z-10">
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
                  <Link href="/">
                    <SparklesIcon />
                  </Link>
                </div>
                <Link
                  href="/"
                  className="text-xl font-semibold text-foreground drop-shadow-sm"
                >
                  Artho
                </Link>
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

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col h-[calc(100vh-140px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 px-4">
                <div className="w-16 h-16 bg-muted/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-border/20">
                  <SparklesIcon />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground drop-shadow-md">
                    Start a conversation
                  </h2>
                  <p className="text-muted-foreground max-w-md text-sm md:text-base drop-shadow-sm">
                    Ask me anything! I'm here to help with questions, creative
                    tasks, problem-solving, and more.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center max-w-sm md:max-w-none">
                  {[
                    "Explain quantum computing",
                    "Write a creative story",
                    "Help with coding",
                    "Plan a trip",
                  ].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => setInput(suggestion)}
                      className="text-xs md:text-sm px-2 md:px-3 bg-card/60 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-card/80 transition-all duration-200"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 md:gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200">
                      <SparklesIcon />
                    </div>
                  )}

                  <Card
                    className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border-border/50 ${
                      message.role === "user"
                        ? "bg-primary/90 text-primary-foreground shadow-primary/20 hover:shadow-primary/30"
                        : "bg-card/80 shadow-black/5 hover:shadow-black/10"
                    }`}
                  >
                    <div
                      className="space-y-2 whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: message.content || "",
                      }}
                    />
                  </Card>

                  {message.role === "user" && (
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-muted/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md hover:shadow-lg transition-all duration-200 border border-border/20">
                      <UserIcon />
                    </div>
                  )}
                </div>
              ))
            )}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25 animate-pulse">
                  <SparklesIcon />
                </div>
                <Card className="bg-card/80 backdrop-blur-sm p-4 shadow-lg border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s] drop-shadow-sm"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s] drop-shadow-sm"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce drop-shadow-sm"></div>
                    </div>
                    <span className="text-sm drop-shadow-sm">
                      Artho AI is thinking...
                    </span>
                  </div>
                </Card>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask everything..."
              disabled={isLoading}
              className="flex-1 bg-card/80 backdrop-blur-sm border-border/50 focus:ring-2 focus:ring-primary/20 text-sm md:text-base shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-200"
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-3 md:px-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <SendIcon />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
