import Image from 'next/image'

export default function High() {
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
            <img  src="https://www.datagpt.com/_next/static/media/high-question-comprehension.38635402.png"  width={600}
              height={400} ></img>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-mono font-bold mb-6">
            High question comprehension and flexibility
            </h2>
            <p className="text-xl text-gray-400">
            Set up your data once to get reliable answers every time. Our schema configuration incorporates your data definition, metric calculations and business context to ensure consistent and meaningful insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

