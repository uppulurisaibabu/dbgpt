import Image from 'next/image'

export default function Resources() {
  const blogPosts = [
    {
      image: "https://www.datagpt.com/_next/static/media/the-future-of-data-driven-decision-making-comparative-vs-traditional-bi-tools.835d6c37.jpg",
      title: "The Future of Data-Driven Decision Making: DataGPT vs Traditional BI Tools",
      author: "Abdul",
      date: "Apr 13, 2023",
      readTime: "3 min read",
      authorImage: "https://www.datagpt.com/_next/static/media/abdul.e735b576.png"
    },
    {
      image: "https://www.datagpt.com/_next/static/media/conversational-data-analysis-cutting-through-the-noise-to-find-the-real-deal.564f369b.png",
      title: "Conversational Data Analysis: Cutting Through the Noise to Find the Real Deal",
      author: "Karim",
      date: "Jun 5, 2023",
      readTime: "5 min read",
      authorImage: "https://www.datagpt.com/_next/static/media/karim.e413ecdf.png"
    
    },
    {
      image: "https://www.datagpt.com/_next/static/media/nlp-analysis.b4e3d6b2.png",
      title: "Unlocking Insights with NLP: Exploring the Impact of NLP in Data Analysis",
      author: "DataGPT",
      date: "Jan 5, 2023",
      readTime: "5 min read",
      authorImage: "https://www.datagpt.com/_next/static/media/datagpt.9741a516.png"
    }
  ]

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-500 mb-4 block">Resources</span>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Jumpstart your Datagpt skills
          </h2>
          <p className="text-gray-400">
            Browse the Datagpt blog, and community to get you started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-xl overflow-hidden">
              <div className="relative w-full h-48">
                <img
                  src={post.image}
                  alt={post.title}
                //   layout="fill"
                //   objectFit="cover"
                />
                
              </div>
              <div className="p-6">
                <span className="text-purple-500 text-sm">Blog</span>
                <h3 className="text-xl font-bold mt-2 mb-4">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="text-sm text-gray-400">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

