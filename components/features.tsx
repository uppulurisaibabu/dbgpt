import { Check } from 'lucide-react'
import { Section } from "@/components/ui/section"

const features = [
  {
    title: "Data-Driven Strategy",
    description: "We use advanced analytics to create targeted campaigns that deliver measurable results.",
  },
  {
    title: "Proven Framework",
    description: "Our battle-tested methodology has helped numerous SaaS startups achieve sustainable growth.",
  },
  {
    title: "ROI Focused",
    description: "We optimize for profitability, ensuring every ad dollar generates positive returns.",
  },
  {
    title: "Continuous Optimization",
    description: "Our team constantly monitors and improves campaign performance for better results.",
  },
]

export function Features() {
  return (
    <Section className="bg-white">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-navy-900 md:text-4xl">Why Choose Ratio Fellowship?</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start gap-4">
              <div className="rounded-full bg-[#0052FF]/10 p-2">
                <Check className="h-6 w-6 text-[#0052FF]" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

