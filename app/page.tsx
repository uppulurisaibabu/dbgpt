import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { LogoCloud } from "@/components/logo-cloud"
import { TeamSection } from "@/components/team-section"
import { StatsSection } from "@/components/stats-section"
//import { TestimonialSection } from "@/components/testimonial-section"
import { TestimonialSection } from "@/components/ testimonial-section"
import { HowWeWork } from "@/components/how-we-work"
import { ResultsSection } from "@/components/results-section"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAF9F6]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <LogoCloud />
        <TeamSection />
        <StatsSection />
        <TestimonialSection />
        <HowWeWork />
        <ResultsSection />
        <FaqSection />
      </main>
    </div>
  )
}



