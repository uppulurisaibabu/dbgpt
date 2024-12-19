import Image from 'next/image'

export default function Freely() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-mono font-bold mb-6">
             Freely explore your data
            </h2>
            <p className="text-xl text-gray-400">
              The data navigator looking for? Simply ask DataGPT in natural
              language and receive analyst-grade answers in seconds.
            </p>
          </div>
        
        <div>
        <video 
              className="rounded-3xl w-full" 
              muted 
              loop 
              autoPlay 
              playsInline
            >
              <source 
                src="https://www.datagpt.com/videos/explore-your-data.mp4" 
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

