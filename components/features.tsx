import Image from 'next/image'
import  Marquee  from 'react-fast-marquee'
// import { MoveRight, Image as LucideImage } from 'lucide-react' 
export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
        {/* Moving Logos */}
        <div className="mt-12 mb-24 overflow-hidden">
          <Marquee pauseOnHover gradient={true} gradientColor="#fff">
            <div className="flex items-center gap-16">
              {/* <Image src="/https://www.datagpt.com/_next/static/media/marketing-architects-greyscale.a90cd2cd.png" alt="Plex" width={120} height={60} /> */}
              <img  src="https://www.datagpt.com/_next/static/media/plex-greyscale.c41c3278.png" width={120} height={60}></img>
              <img  src="https://www.datagpt.com/_next/static/media/rnl-greyscale.b5c30162.png" width={120} height={60}></img>
              <img src="https://www.datagpt.com/_next/static/media/marketing-architects-greyscale.a90cd2cd.png" width={120} height={60} ></img>
              {/* <Image src="/legal-coder.svg" alt="Legal Coder" width={120} height={60} /> */}
              <img src="https://www.datagpt.com/_next/static/media/legal-decoder-greyscale.0755d6e0.png"  width={120} height={60}></img>
              <img src="https://www.datagpt.com/_next/static/media/washington-college-greyscale.52ac187a.png" width={120} height={60}></img>
              {/* <LucideImage size={60} color="#6b7280" />
              <MoveRight size={60} color="#6b7280" /> */}
            </div>
          </Marquee>
        </div>
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          DataGPT is <span className="text-purple-500">not</span> Another SQL Wrapper_
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mx-auto max-w-4xl">
          DataGPT's AI Analysts don't just translate text into a simple SQL query. It develops a plan, executes that plan 
          by making meaningful comparisons, diving deep into the data, and curating results—transforming questions 
          into actionable insights.
        </p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          The result: Trusted analysis that goes deeper into the most important insights in your data.
        </p>

        {/* Moving Logos */}
        {/* <div className="mt-12 overflow-hidden">
          <Marquee pauseOnHover gradient={true} gradientColor="#fff">
            <div className="flex items-center gap-16">
              <Image src="/rnl.svg" alt="RNL" width={120} height={60} />
              <Image src="/plex.svg" alt="Plex" width={120} height={60} />
              <Image src="/legal-coder.svg" alt="Legal Coder" width={120} height={60} />
              <LucideImage size={60} color="#6b7280" />
              <MoveRight size={60} color="#6b7280" />
            </div>
          </Marquee>
        </div> */}
      </div>
    </section>
  )
}
