"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Linkedin, Mail, Send, Menu, X } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      })
      const data = await response.json()
      if (data.success) {
        alert("Thank you for subscribing to our newsletter!")
        setNewsletterEmail("")
      } else {
        alert("There was an error subscribing to the newsletter. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting newsletter form:", error)
      alert("There was an error subscribing to the newsletter. Please try again.")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/projects" className="font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/news-and-media" className="font-medium hover:text-primary">
              News + Media
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col gap-4 p-4 bg-background border-t">
              <Link href="/" className="font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="font-medium hover:text-primary">
                About Us
              </Link>
              <Link href="/projects" className="font-medium hover:text-primary">
                Projects
              </Link>
              <Link href="/news-and-media" className="font-medium hover:text-primary">
                News + Media
              </Link>
              <Link href="/contact" className="font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Rest of the Home page content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://mjahmad1.github.io/cwbd/img/192000/3.png"
              alt="Equality, Education, and Cooperation"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Together Towards a Brighter Future</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">With a Vision for Tomorrow's Leaders</p>
            <Button asChild size="lg" className="font-semibold">
              <Link href="#goals">Get Started</Link>
            </Button>
          </div>
        </section>

        {/* Goals and Objectives */}
        <section id="goals" className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Goals and Objectives</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-6 text-lg">
                At TRUSTED-ALLY, we are passionately committed to creating a peaceful and equitable world where everyone
                thrives. Our goals and objectives focus on:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p>
                    Empowering minds through awareness and expanding educational opportunities to foster growth and
                    understanding.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Social Innovation</h3>
                  <p>Developing new initiatives and programs that bring people together and inspire positive change.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Communal Harmony</h3>
                  <p>
                    Promoting unity and harmony among all religions, races, and ethnicities to build a cohesive society.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Development</h3>
                  <p>
                    Implementing environmentally conscious and sustainable projects to ensure a better future for
                    generations to come.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">Social Responsibility</h3>
                  <p>
                    Ensuring equal rights and security for all, advocating for justice, and providing a safe and
                    supportive environment for everyone.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-lg">
                By working together towards these noble objectives, we believe we can build a brighter future for
                tomorrow's leaders. Join us in our journey to make a lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Programs</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-8 text-lg text-center">
                At TRUSTED-ALLY, we are dedicated to creating a brighter and more inclusive future through a range of
                impactful programs:
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
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
                      className="text-primary h-8 w-8"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-left">Education Program</h3>
                  <p className="text-left">
                    We offer free educational initiatives for children, empowering them with the knowledge and skills to
                    succeed in life. Our goal is to create equal opportunities for all children, regardless of their
                    background.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
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
                      className="text-primary h-8 w-8"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-left">Social Initiatives</h3>
                  <p className="text-left">
                    We focus on community development projects aimed at supporting the underprivileged. Through these
                    initiatives, we strive to uplift those in need, providing them with the resources and support
                    necessary for a better quality of life.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
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
                      className="text-primary h-8 w-8"
                    >
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                      <path d="M16.5 9.4 7.55 4.24" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" y1="22" x2="12" y2="12" />
                      <circle cx="18.5" cy="15.5" r="2.5" />
                      <path d="M20.27 17.27 22 19" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-left">Environmental Development</h3>
                  <p className="text-left">
                    Our environmental programs emphasize tree planting and raising environmental awareness. We believe
                    in creating a sustainable future by promoting eco-friendly practices and preserving our natural
                    resources.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg text-center">
                By participating in these programs, you can make a significant difference in the lives of individuals
                and communities. Together, we can build a brighter, more equitable world for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the Change You Wish to See</h2>
              <p className="mb-8 text-lg">
                At TRUSTED-ALLY, we believe in the power of collective effort to shape a brighter tomorrow. This is your
                opportunity to be part of a movement that inspires, educates, and uplifts. Whether you dream of
                empowering young minds through education, driving impactful social initiatives, or protecting our planet
                for future generations—your contribution matters. Together, we can break barriers, ignite hope, and
                create lasting change.
              </p>
              <p className="mb-8 text-lg">
                Take the first step toward making a difference. Join hands with us as a supporter, volunteer, or donor.
                Your skills, passion, and dedication can create ripples of positive impact that transcend boundaries.
                Together, we will nurture tomorrow's leaders and leave a legacy of hope and harmony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <Link href="/volunteer" className="flex items-center gap-2">
                    <i className="fas fa-hands-helping"></i>
                    Become a Volunteer
                  </Link>
                </Button>
                <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                  <Link href="/donate" className="flex items-center gap-2">
                    <i className="fas fa-hand-holding-heart"></i>
                    Become a Donor
                  </Link>
                </Button>
                <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                  <Link href="/invest" className="flex items-center gap-2">
                    <i className="fas fa-chart-line"></i>
                    Become an Investor
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-lg font-medium">
                You are the cornerstone of change. Let's walk this path together and make history, one step at a time!
                🌟
              </p>
            </div>
          </div>
        </section>

        {/* About Us / Credibility */}
        <section id="about" className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Embodying Excellence, Experience, and Transparency
              </h2>
              <p className="mb-8 text-lg text-center">
                At "TRUSTED-ALLY" our journey reflects a tapestry of skills, experiences, and a commitment to making a
                lasting difference. While our efforts are deeply rooted in humility and gratitude for every opportunity,
                our collective expertise tells a story of trust, innovation, and meaningful impact.
              </p>

              <div className="border-t border-b py-8 my-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">A Legacy of Credibility and Commitment:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Recognized as a 'Verified Member of the Microsoft Developer Community', we are continuously driven
                      to excel in technology and innovation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Trusted by the 'Company House Developer Community (gov.uk)', our approach prioritizes integrity,
                      precision, and professionalism in every endeavor.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Experienced developers for platforms such as 'PayPal' and 'Stripe', showcasing versatility and
                      reliability in delivering cutting-edge solutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      An honorary "Stripe Climate Member", committed to combating climate change and contributing to a
                      sustainable future.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Proud 'Member of IJM', standing for justice and fairness, reflecting our unwavering dedication to
                      humanitarian values.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Volunteering with the 'United Nations Volunteers (UNV)' program has been an enriching experience,
                      allowing us to champion global causes (UNV ID: 6674763).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="text-primary h-6 w-6 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Embracing technology with the latest 'Windows 11 Pro Insider Preview', we ensure our tools remain
                      state-of-the-art, empowering every step we take.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Grounded in Humility</h3>
                <p className="text-lg">
                  These positions and memberships are not merely achievements; they are opportunities to learn, grow,
                  and make meaningful contributions. We humbly acknowledge that all these milestones are a testament to
                  the blessings and opportunities that guide us, rather than personal ability alone.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Voices of Gratitude</h3>
                <div className="space-y-6">
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "TRUSTED-ALLY is a beacon of hope and innovation, combining expertise with a heart for humanity.
                    Their work inspires and uplifts communities worldwide."
                    <footer className="text-right font-medium mt-2">— A Community Partner —</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Their unwavering commitment to education, sustainability, and equity is what sets them apart.
                    TRUSTED-ALLY is truly a force for good."
                    <footer className="text-right font-medium mt-2">— A Volunteer's Perspective —</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "As a Stripe Climate Member, their dedication to fighting climate change resonates strongly. They
                    embody responsibility and action."
                    <footer className="text-right font-medium mt-2">— Supporter Feedback —</footer>
                  </blockquote>
                </div>
              </div>

              <p className="mt-8 text-lg text-center">
                Through these efforts, "TRUSTED-ALLY" stands as a symbol of trust, excellence, and an unwavering
                commitment to creating a brighter tomorrow. Together, let's continue building this legacy, hand in hand.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">TRUSTED-ALLY</h3>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">
                ©2025{" "}
                <a
                  href="https://v0-hero-geometric-background-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Trusted Ally
                </a>
                , All Rights Reserved.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:t-ally@outlook.com" className="hover:underline">
                    t-ally@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:mjahmad2024@outlook.com" className="hover:underline">
                    mjahmad2024@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/MJ-AHMAD/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/jafor-ahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://facebook.com/mj.ahmad.768732/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

