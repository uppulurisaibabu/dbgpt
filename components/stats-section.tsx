const stats = [
    {
      value: "$15M+",
      description: "The money invested in profitably on growth ad campaigns"
    },
    {
      value: "100+",
      description: "The amount of tech giants and startups our team has helped"
    },
    {
      value: "3",
      description: "In-house AI-drien technological and sales intelligence tools"
    }
  ]
  
  export function StatsSection() {
    return (
      <section className="bg-[#1a1a2e] py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="font-serif text-5xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  