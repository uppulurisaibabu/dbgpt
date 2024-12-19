'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import  Marquee  from 'react-fast-marquee'

const testimonials = [
  {
    quote: "DataGPT has transformed the ease and speed in which I can use our data. Other BI and dashboard tools were just simply too complex and time intensive to get answers, but with DataGPT, it's like having a personal data analyst at my fingertips. I can finally answer not just what happened but why, without waiting hours or days for a new dashboard to be created.",
    author: "Dan Calzone",
    role: "Director of Growth at Plex",
    avatar: "/placeholder.svg"
  },
  // Add more testimonials as needed
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-500 mb-4 block">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            People love using Datagpt
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ask DataGPT any data-related question and DataGPT will interpret the question and respond 
            with a comprehensive answer supported by relevant visualizations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="relative min-h-[250px]">
              <div className="text-2xl text-purple-500 mb-6">"</div>
              <blockquote className="text-gray-700 mb-6">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentIndex].role}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="ml-auto px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                  Read Case
                </button>
              </div>
            </div>
          </div>

          {/* Awards and Features */}
          <div className="space-y-8">
            {/* Award */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              {/* <Image
                src="/placeholder.svg"
                alt="Global Recognition Award"
                width={100}
                height={100}
                className="mx-auto mb-4"
              /> */}
              <img src="https://www.datagpt.com/_next/static/media/gra.76359b22.png" width={100}
                height={100}
                className="mx-auto mb-4"></img>
              <h3 className="font-semibold">
                Winner in global recognition award 2023
              </h3>
            </div>

            {/* Featured In */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Featured in</h3>
            <Marquee pauseOnHover gradient={true} gradientColor="#fff">
              {/* <h3 className="text-xl font-semibold mb-6 text-center">Featured in</h3> */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {['3Beat', 'betanews', 'CIO', 'Forbes'].map((brand) => (
                  // <Image
                  //   key={brand}
                  //   src="/placeholder.svg"
                  //   alt={brand}
                  //   width={120}
                  //   height={40}
                  //   className="mx-auto"
                  // />
                  <img key ={brand} src="https://www.datagpt.com/_next/static/media/forbes.a42e50e9.png" width={120}
                  height={40}
                    className="mx-auto"></img>
                    
                ))}
              </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

