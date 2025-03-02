"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Check } from "lucide-react"

export default function VolunteerForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationalId: "",
    address: "",
    phone: "",
    email: "",
    altPhone: "",
    currentAddress: "",
    qualification: "",
    institution: "",
    fieldOfStudy: "",
    graduationDate: "",
    skills: {
      teaching: false,
      organizing: false,
      fundraising: false,
      communication: false,
      leadership: false,
      technical: false,
    },
    experience: "",
    years: "",
    preferredAreas: {
      education: false,
      environment: false,
      health: false,
      community: false,
      social: false,
      other: false,
    },
    availability: "",
    termsAgreed: false,
    signature: "",
  })

  const totalSteps = 6

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (category, name) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [name]: !formData[category][name],
      },
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setFormSubmitted(true)
        window.scrollTo(0, 0)
      } else {
        alert("There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
        {formSubmitted ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Application Submitted!</CardTitle>
              <CardDescription className="text-center">
                Thank you for your interest in volunteering with TRUSTED-ALLY
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-center mb-6">
                Your volunteer application has been successfully submitted. Our team will review your information and
                contact you soon.
              </p>
              <Button asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl font-bold text-center mb-2">Volunteer Application Form</h1>
              <p className="text-center text-muted-foreground mb-6">
                Join our team and make a difference in your community
              </p>

              <div className="flex justify-between mb-8">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex-1 h-2 rounded-full mx-1 ${
                      index + 1 <= currentStep ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <Card>
                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Please provide your basic personal details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            type="date"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select
                            value={formData.gender}
                            onValueChange={(value) => handleSelectChange("gender", value)}
                          >
                            <SelectTrigger id="gender">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nationalId">National ID / Passport No</Label>
                          <Input
                            id="nationalId"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleInputChange}
                            placeholder="Enter your ID number"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter your address"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>How can we reach you?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="altPhone">Alternative Contact Number (Optional)</Label>
                          <Input
                            id="altPhone"
                            name="altPhone"
                            value={formData.altPhone}
                            onChange={handleInputChange}
                            type="tel"
                            placeholder="Enter alternative phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentAddress">Current Address</Label>
                          <Textarea
                            id="currentAddress"
                            name="currentAddress"
                            value={formData.currentAddress}
                            onChange={handleInputChange}
                            placeholder="Enter your current address"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle>Educational Background</CardTitle>
                      <CardDescription>Tell us about your education</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="qualification">Highest Qualification</Label>
                          <Select
                            value={formData.qualification}
                            onValueChange={(value) => handleSelectChange("qualification", value)}
                          >
                            <SelectTrigger id="qualification">
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="highSchool">High School</SelectItem>
                              <SelectItem value="bachelor">Bachelor's</SelectItem>
                              <SelectItem value="master">Master's</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution/University Name</Label>
                          <Input
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            placeholder="Enter institution name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="fieldOfStudy">Field of Study</Label>
                          <Input
                            id="fieldOfStudy"
                            name="fieldOfStudy"
                            value={formData.fieldOfStudy}
                            onChange={handleInputChange}
                            placeholder="Enter your field of study"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="graduationDate">Graduation Date</Label>
                          <Input
                            id="graduationDate"
                            name="graduationDate"
                            value={formData.graduationDate}
                            onChange={handleInputChange}
                            type="date"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <CardHeader>
                      <CardTitle>Skills and Experience</CardTitle>
                      <CardDescription>Share your skills and previous volunteer experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label>Relevant Skills</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="teaching"
                                checked={formData.skills.teaching}
                                onCheckedChange={() => handleCheckboxChange("skills", "teaching")}
                              />
                              <Label htmlFor="teaching" className="font-normal">
                                Teaching
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="organizing"
                                checked={formData.skills.organizing}
                                onCheckedChange={() => handleCheckboxChange("skills", "organizing")}
                              />
                              <Label htmlFor="organizing" className="font-normal">
                                Organizing
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="fundraising"
                                checked={formData.skills.fundraising}
                                onCheckedChange={() => handleCheckboxChange("skills", "fundraising")}
                              />
                              <Label htmlFor="fundraising" className="font-normal">
                                Fundraising
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="communication"
                                checked={formData.skills.communication}
                                onCheckedChange={() => handleCheckboxChange("skills", "communication")}
                              />
                              <Label htmlFor="communication" className="font-normal">
                                Communication
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="leadership"
                                checked={formData.skills.leadership}
                                onCheckedChange={() => handleCheckboxChange("skills", "leadership")}
                              />
                              <Label htmlFor="leadership" className="font-normal">
                                Leadership
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="technical"
                                checked={formData.skills.technical}
                                onCheckedChange={() => handleCheckboxChange("skills", "technical")}
                              />
                              <Label htmlFor="technical" className="font-normal">
                                Technical
                              </Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Previous Volunteer Experiences</Label>
                          <Textarea
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            placeholder="Describe your previous volunteer experiences"
                            rows={4}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="years">Years of Volunteering Experience</Label>
                          <Input
                            id="years"
                            name="years"
                            value={formData.years}
                            onChange={handleInputChange}
                            type="number"
                            min="0"
                            placeholder="Enter number of years"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 5 && (
                  <>
                    <CardHeader>
                      <CardTitle>Preferred Volunteering Areas</CardTitle>
                      <CardDescription>Tell us how you'd like to contribute</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label>Preferred Areas</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="education"
                                checked={formData.preferredAreas.education}
                                onCheckedChange={() => handleCheckboxChange("preferredAreas", "education")}
                              />
                              <Label htmlFor="education" className="font-normal">
                                Education
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="environment"
                                checked={formData.preferredAreas.environment}
                                onCheckedChange={() => handleCheckboxChange("preferredAreas", "environment")}
                              />
                              <Label htmlFor="environment" className="font-normal">
                                Environment
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="health"
                                checked={formData.preferredAreas.health}
                                onCheckedChange={() => handleCheckboxChange("preferredAreas", "health")}
                              />
                              <Label htmlFor="health" className="font-normal">
                                Health
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="community"
                                checked={formData.preferredAreas.community}
                                onCheckedChange={() => handleCheckboxChange("preferredAreas", "community")}
                              />
                              <Label htmlFor="community" className="font-normal">
                                Community Development
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="social"
                                checked={formData.preferredAreas.social}
                                onCheckedChange={() => handleCheckboxChange("preferredAreas", "social")}
                              />
                              <Label htmlFor="social" className="font-normal">
                                Social Initiatives
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="other"
                                checked={formData.preferredAreas.other}
                                onCheckedChange={() => handleCheckboxChange("preferredAreas", "other")}
                              />
                              <Label htmlFor="other" className="font-normal">
                                Other
                              </Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="availability">Availability</Label>
                          <Select
                            value={formData.availability}
                            onValueChange={(value) => handleSelectChange("availability", value)}
                          >
                            <SelectTrigger id="availability">
                              <SelectValue placeholder="Select availability" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weekends">Weekends</SelectItem>
                              <SelectItem value="weekdays">Weekdays</SelectItem>
                              <SelectItem value="fullTime">Full-Time</SelectItem>
                              <SelectItem value="partTime">Part-Time</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 6 && (
                  <>
                    <CardHeader>
                      <CardTitle>Consent and Terms</CardTitle>
                      <CardDescription>Please review and agree to our terms</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-4">
                          <div className="bg-muted p-4 rounded-md text-sm">
                            <p className="mb-4">By submitting this form, you agree to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Provide accurate and truthful information</li>
                              <li>Participate in volunteer activities with integrity and respect</li>
                              <li>Follow the guidelines and policies of TRUSTED-ALLY</li>
                              <li>Allow us to contact you regarding volunteer opportunities</li>
                              <li>Allow us to store your information securely for volunteer coordination purposes</li>
                            </ul>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              checked={formData.termsAgreed}
                              onCheckedChange={() =>
                                setFormData({
                                  ...formData,
                                  termsAgreed: !formData.termsAgreed,
                                })
                              }
                              required
                            />
                            <Label htmlFor="terms" className="font-normal">
                              I agree to the terms and conditions of volunteering
                            </Label>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="signature">Digital Signature (Type your full name)</Label>
                            <Input
                              id="signature"
                              name="signature"
                              value={formData.signature}
                              onChange={handleInputChange}
                              placeholder="Type your full name as signature"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                <CardFooter className="flex justify-between">
                  {currentStep > 1 ? (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      Previous
                    </Button>
                  ) : (
                    <Button type="button" variant="outline" asChild>
                      <Link href="/">Cancel</Link>
                    </Button>
                  )}

                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </form>
          </>
        )}
      </main>
    </div>
  )
}

