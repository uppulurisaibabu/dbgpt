import { Database, ScaleIcon as Schema, Cpu, Box, BarChart3, Layout } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container  mx-auto ">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <h2 className="text-5xl pl-6 md:text-6xl font-mono font-bold">
            How does it work?_
          </h2>
          <p className="text-xl text-gray-300 md:text-right">
            We have built Proprietary Technology required to run an AI Agent on Large Data
          </p>
        </div>

        {/* Process Flow Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {[
            { icon: Database, text: "Data connection" },
            { icon: Schema, text: "Schema" },
            { icon: Cpu, text: "Compute engine" },
            { icon: Box, text: "Embedding model" },
            { icon: BarChart3, text: "Analytics engine" },
            { icon: Layout, text: "Databoard" }
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm text-gray-400">{item.text}</span>
              </div>
              {index < 5 && (
                <div className="w-8 h-[2px] bg-purple-500/20 mx-2 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        
      </div>
      <div className="flex justify-center">
          <img
            src="https://www.datagpt.com/_next/static/media/how-does-it-works.2a13d28c.png"
            alt="How It Works"
            width={1000}
            height={452}
            className="rounded-lg w-full max-w-[1000px]"
          />
        </div>
    </section>
    
  )
}

