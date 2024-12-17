import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "@/components/ui/section"

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="container max-w-2xl">
        <h2 className="text-center text-3xl font-bold text-navy-900 md:text-4xl">Ready to Scale Your SaaS?</h2>
        <p className="mt-4 text-center text-gray-600">
          Book a strategy call with our team to discuss how we can help grow your business.
        </p>
        <form className="mt-12 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@company.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Your Company Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your goals..." required />
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#0052FF] py-6 text-lg hover:bg-[#0052FF]/90">
            Schedule Your Strategy Call
          </Button>
        </form>
      </div>
    </Section>
  )
}

