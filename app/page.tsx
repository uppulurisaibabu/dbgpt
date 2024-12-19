import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Comparison from '@/components/comparasion'
import AnalystReview from '@/components/analyst-review'
import ProductSection from '@/components/productsection'
import QASection from '@/components/qa-section'
import ProactiveInsights from '@/components/proactive-insights'
import Freely from '@/components/freelyexpore'
import Hight from '../components/highquestion'
import HowItWorks from '@/components/howitworks'
import Reviews from '@/components/reviews'
import Resources from '@/components/resources'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main className="min-h-screen p-2">
      <Header />
      <Hero />
      <Features />
      <Comparison />
      <AnalystReview />
      <ProductSection />
      <QASection />
      <ProactiveInsights />
      <Freely />
      <Hight />
      <HowItWorks />
      <Reviews />
      <Resources />
      <Footer />
    </main>
  )
}

