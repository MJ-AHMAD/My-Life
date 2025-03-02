"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function JoinOurEcoEffortsPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [activities, setActivities] = useState({
    treePlanting: false,
    recycling: false,
    cleanupDrives: false,
    awarenessWorkshops: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, phone, message, activities })
    // Reset form or show success message
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary">
              Education Program
            </Link>
            <Link href="/social-initiatives" className="font-medium hover:text-primary">
              Social Initiatives
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary">
              Environmental Development
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Join Our Eco-Efforts</h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg mb-6">
            Your participation can make a significant impact on our environment. Join our eco-efforts and help create a
            sustainable future for generations to come. Here are ways you can get involved:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tree Planting Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Help us increase green cover and combat climate change by participating in our tree planting drives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recycling Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join our community recycling programs and learn how to reduce waste and promote circular economy.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clean-up Drives</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Participate in our regular clean-up drives to keep our neighborhoods, beaches, and parks litter-free.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Awareness Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Attend or help organize workshops to spread awareness about environmental issues and sustainable
                  practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up to Join Our Eco-Efforts</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <Label>I'm interested in participating in:</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="treePlanting"
                    checked={activities.treePlanting}
                    onCheckedChange={(checked) =>
                      setActivities((prev) => ({ ...prev, treePlanting: checked === true }))
                    }
                  />
                  <Label htmlFor="treePlanting">Tree Planting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="recycling"
                    checked={activities.recycling}
                    onCheckedChange={(checked) => setActivities((prev) => ({ ...prev, recycling: checked === true }))}
                  />
                  <Label htmlFor="recycling">Recycling Programs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cleanupDrives"
                    checked={activities.cleanupDrives}
                    onCheckedChange={(checked) =>
                      setActivities((prev) => ({ ...prev, cleanupDrives: checked === true }))
                    }
                  />
                  <Label htmlFor="cleanupDrives">Clean-up Drives</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="awarenessWorkshops"
                    checked={activities.awarenessWorkshops}
                    onCheckedChange={(checked) =>
                      setActivities((prev) => ({ ...prev, awarenessWorkshops: checked === true }))
                    }
                  />
                  <Label htmlFor="awarenessWorkshops">Awareness Workshops</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your interests or any ideas you have for eco-friendly initiatives"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">TRUSTED-ALLY</h3>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">© 2025 Trusted Ally, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@trustedally.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Trusted Street, Ally City, 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

