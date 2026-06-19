import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { guides } from '@/data/guides'
import { categories } from '@/data/categories'

export const metadata: Metadata = {
  title: 'Indoor Plant Buying Guides & Care Tips (2026) | ToolsLeafSpotHome',
  description:
    'In-depth buying guides and plant care tutorials for indoor plant enthusiasts. Learn how to choose pots, set up grow lights, mix potting soil, water correctly, repot safely, and fertilize effectively.',
}

export default function BuyingGuidesPage() {
  return (
    <div className="py-16">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="font-serif text-[#1C1208] text-4xl md:text-5xl mb-4">
          Indoor Plant Buying Guides &amp; Care Tips (2026)
        </h1>
        <p className="text-[#7A6E65] text-lg max-w-2xl mx-auto">
          Expert-written guides covering every aspect of indoor plant care and product selection — from choosing the right pot to decoding fertilizer labels. Written with real horticultural expertise, not filler content.
        </p>
      </div>

      {/* Guides grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {guides.map((guide) => {
          const cat = categories.find((c) => c.slug === guide.category)
          return (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="bg-white border border-[#E0D8CC] rounded-xl overflow-hidden hover:shadow-lg hover:border-[#2D6B1A] transition-all duration-200 flex flex-col group"
            >
              {/* Cover image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={guide.coverImage}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {cat && (
                    <span className="bg-[#2D6B1A] text-white text-xs px-2 py-0.5 rounded-full">
                      {cat.shortName}
                    </span>
                  )}
                  <span className="text-[#7A6E65] text-xs">{guide.readTime} min read</span>
                </div>
                <h2 className="font-serif text-xl text-[#1C1208] mb-2 leading-tight group-hover:text-[#2D6B1A] transition-colors">
                  {guide.title}
                </h2>
                <p className="text-[#7A6E65] text-sm leading-relaxed line-clamp-3 flex-1">
                  {guide.excerpt}
                </p>
                <div className="mt-4 text-[#2D6B1A] text-sm font-semibold group-hover:underline">
                  Read Guide →
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* CTA banner */}
      <div className="mt-16 mx-auto max-w-3xl px-4">
        <div className="bg-[#2C2218] text-white rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl mb-3">Looking for Product Recommendations?</h2>
          <p className="text-[#C8BFB0] mb-6 text-sm">
            Browse our ranked product lists for every indoor plant gear category — each with 8 expert picks chosen by real purchase data.
          </p>
          <Link href="/plant-gear" className="btn-primary inline-block">
            Browse All Plant Gear →
          </Link>
        </div>
      </div>

      {/* Disclosure */}
      <div className="text-center mt-10 px-4">
        <p className="text-[#7A6E65] text-xs max-w-xl mx-auto">
          ToolsLeafSpotHome participates in the Amazon Associates Program. Commissions are earned on qualifying purchases at no extra cost to you.
        </p>
      </div>
    </div>
  )
}
