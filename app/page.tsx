import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Comparison from '@/components/comparasion'

export default function Home() {
  return (
    <main className="min-h-screen p-2">
      <Header />
      <Hero />
      <Features />
      <Comparison />
    </main>
  )
}

