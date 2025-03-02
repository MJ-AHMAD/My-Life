import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EnvironmentalDevelopmentPage() {
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
        <h1 className="text-4xl font-bold mb-8">Environmental Development</h1>
        <p className="mb-6">
          Our Environmental Development programs emphasize tree planting and raising environmental awareness. We believe
          in creating a sustainable future by promoting eco-friendly practices and preserving our natural resources.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Initiatives:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Tree planting campaigns</li>
          <li>Environmental education workshops</li>
          <li>Waste reduction and recycling programs</li>
          <li>Clean energy advocacy</li>
        </ul>
        <Button asChild>
          <Link href="/environmental-development/join-our-eco-efforts">Join Our Eco-Efforts</Link>
        </Button>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">{/* Footer content */}</footer>
    </div>
  )
}

