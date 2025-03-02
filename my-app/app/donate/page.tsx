"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CreditCard, Heart } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Support Our Educational Projects</h1>
          <p className="text-center text-muted-foreground mb-12">
            Your contribution helps us create a brighter future for children in need
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">Why Donate?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Provide free education to underprivileged children</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Supply learning materials and resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Support teacher training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Improve educational infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center mb-6">Donation Options</h2>

              <div className="space-y-4">
                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">One-time Donation</span>
                    <span className="text-primary font-semibold">$25</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Provide learning materials for one child</p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">One-time Donation</span>
                    <span className="text-primary font-semibold">$50</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Support a child's education for one month</p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">One-time Donation</span>
                    <span className="text-primary font-semibold">$100</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Fund a teacher training program</p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Monthly Donation</span>
                    <span className="text-primary font-semibold">$10/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Provide ongoing support for our programs</p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Custom Amount</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Choose your own donation amount</p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full" size="lg" asChild>
                  <Link href="https://whydonate.com/en/fundraising/support-the-largest-quran-printing-company">
                    Proceed to Donate
                  </Link>
                </Button>
                <p className="text-xs text-center mt-4 text-muted-foreground">
                  All donations are secure and encrypted. You can also donate by contacting us directly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Other Ways to Support</h3>
            <p className="mb-6">
              If you prefer to donate through other means or have questions about donations, please contact us at{" "}
              <a href="mailto:t-ally@outlook.com" className="text-primary hover:underline">
                t-ally@outlook.com
              </a>
            </p>
            <Button asChild variant="outline">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

