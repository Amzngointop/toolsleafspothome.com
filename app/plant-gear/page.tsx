import Link from 'next/link'
import { Metadata } from 'next'
import { categories } from '@/data/categories'

export const metadata: Metadata = {
  title: 'Shop All Plant Gear Categories | ToolsLeafSpotHome',
  description:
    'Browse all indoor plant gear categories at ToolsLeafSpotHome — from ceramic pots and grow lights to potting soil, watering tools, pruners, and fertilizers. Every pick ranked by real purchase data.',
}

export default function PlantGearPage() {
  return (
    <div className="py-16">
      {/* Page header */}
      <div className="text-center mb-12 px-4">
        <h1 className="font-serif text-[#1C1208] text-4xl md:text-5xl mb-4">
          Plant Gear for Indoor Plants
        </h1>
        <p className="text-[#7A6E65] text-lg max-w-2xl mx-auto">
          Every category below contains eight expert-ranked picks chosen by sales volume, verified customer ratings, and real-world performance. No sponsored placements, no guesswork.
        </p>
      </div>

      {/* Category grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="bg-white border border-[#E0D8CC] rounded-xl p-8 hover:shadow-lg hover:border-[#2D6B1A] transition-all duration-200 flex flex-col"
          >
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h2 className="font-serif text-2xl text-[#1C1208] mb-3">{cat.name}</h2>
            <p className="text-[#4A3F35] mb-6 leading-relaxed flex-1">{cat.description}</p>
            <Link
              href={`/best/${cat.slug}`}
              className="btn-primary text-center block"
            >
              See {cat.productCount} Picks →
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="text-center mt-16 px-4">
        <p className="text-[#7A6E65] text-sm max-w-xl mx-auto">
          ToolsLeafSpotHome participates in the Amazon Associates Program. Commissions are earned on qualifying purchases at no extra cost to you.
        </p>
      </div>
    </div>
  )
}
