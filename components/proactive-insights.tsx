import Image from 'next/image'

export default function ProactiveInsights() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {/* <Image
              src="/placeholder.svg"
              alt="DataGPT Dashboard"
              width={600}
              height={400}
              className="rounded-xl"
            /> */}
            <img  src="https://www.datagpt.com/_next/static/media/proactive-insights.dbfc0579.png" width="536" height="349"></img>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-mono font-bold mb-6">
              Proactive Insights
            </h2>
            <p className="text-xl text-gray-400">
              Let your data speak to you. Set up custom Daily Summaries and
              Email Notifications that proactively analyze your data and highlight
              critical anomalies, trends, and key drivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

