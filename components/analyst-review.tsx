import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AnalystReview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-shrink-0">
              {/* <Image
                src="/placeholder.svg"
                alt="S&P Global Market Intelligence"
                width={200}
                height={80}
                className="mb-6"
              /> */}
              <img  src="https://www.datagpt.com/_next/static/media/s-and-p-global.9c1686ff.png"  width={200}
                height={80}
                className="mb-6"></img>
              <h2 className="text-4xl font-mono font-bold mb-6">
                Review from an Analyst_
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-600">
                "DataGPT's homegrown analytics and compute engines allow for rapid,
                cost-efficient analysis, handling complex questions faster and more
                accurately than typical SQL wrapper tools."
              </p>
              <div className="flex items-center gap-4">
                {/* <Image
                  src="/placeholder.svg"
                  alt="Krishna Roy"
                  width={48}
                  height={48}
                  className="rounded-full"
                /> */}
                <img  src="https://www.datagpt.com/_next/static/media/krishna.301c71bf.png"  width={48}
                  height={48}
                  className="rounded-full"></img>
                <div>
                  <h3 className="font-medium">Krishna Roy</h3>
                  <p className="text-sm text-gray-600">
                    Senior Research Analyst at S&P global
                  </p>
                </div>
              </div>
              <Button variant="secondary" className="mt-4">
                Get the full report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

