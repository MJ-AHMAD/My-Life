import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SocialInitiativesPage() {
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
        <h1 className="text-4xl font-bold mb-8">Social Initiatives</h1>
        <p className="mb-6">
          Our Social Initiatives focus on community development projects aimed at supporting the underprivileged. We
          strive to uplift those in need, providing them with the resources and support necessary for a better quality
          of life.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Programs:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Community outreach programs</li>
          <li>Skill-building workshops for unemployed youth</li>
          <li>Support groups for marginalized communities</li>
          <li>Health and wellness campaigns</li>
        </ul>
        <Button asChild>
          <Link href="/social-initiatives/support-our-initiatives">Support Our Initiatives</Link>
        </Button>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">{/* Footer content */}</footer>
    </div>
  )
}

