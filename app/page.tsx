import HeroSection from '@/components/HeroSection'
import InfiniteMarquee from '@/components/InfiniteMarquee'
import TopRatedSection from '@/components/TopRatedSection'
import CategoryGrid from '@/components/CategoryGrid'
import NicheCalculator from '@/components/NicheCalculator'
import HowWePickSection from '@/components/HowWePickSection'
import GuidesSection from '@/components/GuidesSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfiniteMarquee />
      <TopRatedSection />
      <CategoryGrid />
      <NicheCalculator />
      <HowWePickSection />
      <GuidesSection />
      <TestimonialsSection />
    </>
  )
}
