import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "We find the best way to communicate your product",
    description: "Messaging is important. It goes way beyond features and benefits.",
  },
  {
    number: "02",
    title: "We create your ads and landing page",
    description: "Converting visitors into customers through optimized experiences.",
  },
  {
    number: "03",
    title: "We structure, manage & scale your ad campaigns",
    description: "Continuous optimization for maximum ROI and growth.",
  },
]

export function HowWeWork() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center font-serif text-3xl font-bold">This Is How We Work:</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} className="border-2">
            <CardHeader>
              <CardTitle className="flex items-baseline gap-4">
                <span className="text-xl font-bold text-blue-600">{step.number}</span>
                <span className="font-serif text-xl">{step.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

