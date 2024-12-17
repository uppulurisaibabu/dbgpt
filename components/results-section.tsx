const results = [
    {
      icon: "IVY",
      title: "We helped them grow from $3,000 MRR to $58,000 MRR in 90 days",
    },
    {
      icon: "B",
      title: "40% Conversion Rate Landing Page & 79% CAC Reduction",
    },
    {
      icon: "V",
      title: "Profitable Ad Campaigns (2.5x ROAS) From First Month",
    },
    {
      icon: "M",
      title: "YC company to 70k MRR with 4x ROAS and Series A In Two Months",
    },
  ]
  
  export function ResultsSection() {
    return (
      <section className="container py-24">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold">
          Some of Our Recent Results:
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <div
              key={result.icon}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary font-serif text-xl font-bold">
                {result.icon}
              </div>
              <p className="font-medium">{result.title}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  