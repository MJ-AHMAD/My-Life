import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EducationProgramPage() {
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
        <h1 className="text-4xl font-bold mb-8">Education Program</h1>
        <p className="mb-6">
          Our Education Program is dedicated to empowering minds through awareness and expanding educational
          opportunities. We believe in fostering growth and understanding for all children, regardless of their
          background.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Initiatives:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Free educational initiatives for underprivileged children</li>
          <li>Skills development workshops</li>
          <li>Mentorship programs</li>
          <li>Digital literacy courses</li>
        </ul>
        <Button asChild>
          <Link href="/education-program/get-involved">Get Involved</Link>
        </Button>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">{/* Footer content */}</footer>
    </div>
  )
}

