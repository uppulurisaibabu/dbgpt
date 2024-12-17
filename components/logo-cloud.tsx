import Image from "next/image"

const logos = [
  { name: "Y Combinator", src: "/placeholder.svg?height=40&width=150" },
  { name: "IBM", src: "/placeholder.svg?height=40&width=100" },
  { name: "Lenovo", src: "/placeholder.svg?height=40&width=120" },
  { name: "Toptal", src: "/placeholder.svg?height=40&width=120" },
  { name: "Meta", src: "/placeholder.svg?height=40&width=120" },
  { name: "Apple", src: "/placeholder.svg?height=40&width=40" },
]

export function LogoCloud() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-x-8 gap-y-10 px-6 sm:grid-cols-6 sm:px-8 lg:px-10">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.name === "Apple" ? 40 : 120}
              height={40}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

