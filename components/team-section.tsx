import Image from "next/image"

const teamMembers = [
  {
    name: "Luis B",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Luis is the founder & CEO of Ratio, marketer, and author of numerous marketing books, articles. Creator of the #NoMarketing philosophy."
  },
  {
    name: "Rowan P",
    role: "Marketing Strategist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Rowan is a senior marketer and a founder. He is the one in charge of conducting in-depth market research, uncovering secrets and developing big ideas."
  },
  {
    name: "Michael A",
    role: "Success Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Michael is a designer and machine learning engineer. Previously at Toptal and Viz.ai, he is responsible for ensuring that our clients get the best results possible."
  },
  {
    name: "Peter S",
    role: "Ad Specialist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "ex-Facebook, Peter leverages his expertise in managing $100 million in ad spend to optimize our clients' ad campaigns as a consultant for Ratio."
  }
]

export function TeamSection() {
  return (
    <section className="container py-24">
      <h2 className="mb-16 text-center font-serif text-4xl font-bold">
        Say Hello to Our team
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="overflow-hidden rounded-lg border bg-white">
            <div className="bg-[#1a1a2e] p-4">
              <p className="text-lg font-semibold text-white">
                {member.name} - <span className="font-normal">{member.role}</span>
              </p>
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <p className="text-center text-sm text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

