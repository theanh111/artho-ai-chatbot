"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function PricingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-foreground drop-shadow-sm">
              ChatAI
            </Link>

            <button
              className="md:hidden p-2 rounded-md text-foreground hover:bg-accent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12M6 12l12-12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 drop-shadow-sm hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-primary font-medium drop-shadow-sm hover:scale-105 transition-all duration-300"
              >
                Pricing
              </Link>
              <Link
                href="/download"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 drop-shadow-sm hover:scale-105"
              >
                Download
              </Link>
            </nav>
            <Link href="/login" className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent/50 backdrop-blur-sm"
              >
                Login
              </Button>
            </Link>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-xl shadow-lg">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 drop-shadow-sm hover:scale-105 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-primary font-medium px-4 py-2 drop-shadow-sm hover:scale-105 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/download"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 drop-shadow-sm hover:scale-105 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download
                </Link>
                <div className="px-4 py-2">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance drop-shadow-lg">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty drop-shadow-sm">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2 drop-shadow-sm">Free</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground drop-shadow-sm">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-8 drop-shadow-sm">Perfect for getting started</p>
                <Button
                  variant="outline"
                  className="w-full mb-8 bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">100 messages/month</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Basic AI model</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Community support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Web access</span>
                </div>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-primary relative shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ring-1 ring-primary/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2 drop-shadow-sm">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground drop-shadow-sm">$20</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-8 drop-shadow-sm">For power users and professionals</p>
                <Button className="w-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Unlimited messages</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Advanced AI models</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Priority support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">API access</span>
                </div>
              </div>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2 drop-shadow-sm">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground drop-shadow-sm">Custom</span>
                </div>
                <p className="text-muted-foreground mb-8 drop-shadow-sm">For large organizations</p>
                <Button
                  variant="outline"
                  className="w-full mb-8 bg-transparent/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Sales
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Everything in Pro</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Dedicated support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Custom deployment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">SLA guarantee</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground drop-shadow-sm">Advanced security</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 drop-shadow-lg">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground drop-shadow-sm">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-border pb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 drop-shadow-sm">
                Can I change my plan at any time?
              </h3>
              <p className="text-muted-foreground drop-shadow-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>

            <div className="border-b border-border pb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 drop-shadow-sm">
                Is there a free trial for the Pro plan?
              </h3>
              <p className="text-muted-foreground drop-shadow-sm">
                Yes, we offer a 14-day free trial for the Pro plan. No credit card required to get started.
              </p>
            </div>

            <div className="border-b border-border pb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 drop-shadow-sm">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground drop-shadow-sm">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 drop-shadow-sm">Do you offer refunds?</h3>
              <p className="text-muted-foreground drop-shadow-sm">
                Yes, we offer a 30-day money-back guarantee for all paid plans. Contact support for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 drop-shadow-lg">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8 drop-shadow-sm">
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
