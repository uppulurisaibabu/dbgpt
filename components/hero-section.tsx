import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center space-y-12 py-24 text-center">
      <h1 className="font-serif text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        We scale SaaS<br />startups through<br />profitable ads
      </h1>
      <p className="mx-auto max-w-[800px] text-lg text-muted-foreground sm:text-xl">
        We create a predictable, profitable, and scalable customer acquisition system for your SaaS startup using paid ads, allowing you to{" "}
        <span className="font-semibold text-foreground">grow your company at the press of a button</span>.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Let's Talk →
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">Limited spots available.</p>
    </section>
  )
}




