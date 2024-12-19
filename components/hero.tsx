// import RevenueGraph from './revenue-graph'
// import Suggestions from './suggestions'
// import { Share2, ThumbsUp, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full min-h-[600px] bg-[#F8F9FC] py-12">
      <div className="container max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-[64px] leading-[1.1] font-bold">
              The <span className="text-[#B666F2]">highest</span> evolution of conversational AI analysts_
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Advanced analytics. Proactive insights. Instant answers. No SQL expertise required. DataGPT is a groundbreaking new way to interact with your business data.
            </p>
            <button className="bg-[#6C47FF] text-white px-8 py-3 rounded-md font-medium hover:bg-[#6C47FF]/90 transition-colors">
              Schedule a Demo
            </button>
          </div>

          {/* Right Column with Video */}
          <div>
            <video 
              controls 
              autoPlay 
              muted 
              loop 
              className="w-full rounded-lg"
            >
              <source 
                src="https://www.datagpt.com/videos/hero.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
