import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="bg-[#1a1a2e] py-24">
      <div className="container max-w-4xl">
        <h2 className="mb-8 font-serif text-4xl font-bold text-white">
          "The marketing agency model is broken—if they accept you as a client, hire Ratio."
        </h2>
        <div className="mb-8 overflow-hidden rounded-lg">
          <div className="relative aspect-video">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Testimonial video thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 text-gray-400">
          <p>
            "While some agencies may help you discover your product's messaging, they struggle to translate that into high-converting landing pages and profitable ads. On the other hand, you have the typical "Facebook ads agency", but these agencies are too focused on platform-specific optimizations, forgetting about product positioning and messaging."
          </p>
          <p>
            "Ratio is a growth marketing agency that offers in-depth market research, messaging/positioning, and profitable customer acquisition ad campaigns. They know how to communicate your product and convert cold ad traffic directly into customers. With Ratio, you get the most out of your ad spend."
          </p>
          <p>
            "Best of all, they charge only a percentage of the revenue they generate for you. If they accept you as a client, hire Ratio."
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="George G"
            width={48}
            height={48}
            className="rounded-full"
          />
          <p className="text-gray-400">George G - Founder & CEO of LeadPipe</p>
        </div>
      </div>
    </section>
  )
}

