"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [inquiryType, setInquiryType] = useState("general")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    })
    // Reset form fields
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setInquiryType("general")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I get involved with TRUSTED-ALLY?</AccordionTrigger>
                <AccordionContent>
                  You can get involved by volunteering, donating, or participating in our programs. Visit our "Get
                  Involved" page for more information on current opportunities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What projects does TRUSTED-ALLY currently have?</AccordionTrigger>
                <AccordionContent>
                  We have various ongoing projects including educational initiatives, social development programs, and
                  environmental conservation efforts. Check our "Projects" page for detailed information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I donate to TRUSTED-ALLY?</AccordionTrigger>
                <AccordionContent>
                  You can donate through our secure online platform on the "Donate" page. We accept various payment
                  methods to make it convenient for our supporters.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Does TRUSTED-ALLY offer internship opportunities?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer internship opportunities in various fields. Please check our "Careers" page for current
                  openings or send us an inquiry through the contact form below.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I stay updated with TRUSTED-ALLY's activities?</AccordionTrigger>
                <AccordionContent>
                  You can stay updated by subscribing to our newsletter, following us on social media, or regularly
                  checking our "News + Media" page for the latest updates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:w-1/2 p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
              </div>
              <div>
                <Label>Inquiry Type</Label>
                <RadioGroup value={inquiryType} onValueChange={setInquiryType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">General Inquiry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="volunteer" id="volunteer" />
                    <Label htmlFor="volunteer">Volunteer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="donation" id="donation" />
                    <Label htmlFor="donation">Donation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partnership" id="partnership" />
                    <Label htmlFor="partnership">Partnership</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <div className="flex justify-center space-x-4">
          <Link href="mailto:info@trusted-ally.org" className="text-blue-600 hover:underline">
            info@trusted-ally.org
          </Link>
          <span>|</span>
          <Link href="tel:+1234567890" className="text-blue-600 hover:underline">
            +1 (234) 567-890
          </Link>
        </div>
        <p className="mt-4">123 TRUSTED-ALLY Street, Cityville, State 12345, Country</p>
      </div>

      <Toaster />
    </div>
  )
}

