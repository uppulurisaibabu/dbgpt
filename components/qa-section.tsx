import Image from 'next/image'

export default function QASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-mono font-bold mb-6">
              Q&A at Your Fingertips
            </h2>
            <p className="text-xl text-gray-400">
              Know what you're looking for? Simply ask DataGPT in natural
              language and receive analyst-grade answers in seconds.
            </p>
          </div>
        
        <div>
            <video
              controls // Set the 'controls' prop as a boolean without quotes
              autoPlay
              loop
              muted
              className="w-full rounded-lg"
            >
              <source
                src="https://www.datagpt.com/videos/home-illustraion-1.mp4"
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

