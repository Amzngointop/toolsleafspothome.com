'use client'

import { useState, useMemo, useEffect } from 'react'
import { products } from '@/data/products'

function useVisible() {
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else setVisible(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return visible
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className="text-[#D4881E] text-sm">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  )
}

export default function TopRatedSection() {
  const topRated = useMemo(() => products.filter((p) => p.rank === 1), [])
  const visible = useVisible()

  const [idx, setIdx] = useState(0)
  const maxIdx = Math.max(0, topRated.length - visible)

  // Clamp idx when visible count changes (e.g. resize from mobile to desktop)
  useEffect(() => {
    setIdx((i) => Math.min(i, Math.max(0, topRated.length - visible)))
  }, [visible, topRated.length])

  const cardPct = 100 / visible

  return (
    <section className="bg-[#F5F0E8] py-16">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl font-bold text-[#1C1208] text-center mb-3">
          Top-Rated Plant Gear
        </h2>
        <p className="text-[#7A6E65] text-center mb-10">
          Our highest-ranked picks across all categories
        </p>

        <div className="relative">
          {/* Prev */}
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full border border-[#C8BFB0] bg-white flex items-center justify-center text-xl hover:bg-[#2D6B1A] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${idx * cardPct}%)` }}
            >
              {topRated.map((p) => (
                <div
                  key={p.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${cardPct}%` }}
                >
                  <div className="bg-white border border-[#E0D8CC] rounded-lg p-4 shadow-sm flex flex-col h-full">
                    {/* Image */}
                    <div className="w-full h-[220px] bg-white flex items-center justify-center p-3 rounded-t-lg mb-3">
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Badge */}
                    <span className="bg-[#2D6B1A] text-white text-xs px-2 py-1 rounded-full self-start mb-2">
                      {p.badge}
                    </span>

                    {/* Name */}
                    <h3 className="font-serif text-[#1C1208] text-sm font-semibold line-clamp-2 mb-1 leading-snug">
                      {p.name}
                    </h3>

                    {/* Best For */}
                    <p className="text-[#7A6E65] text-xs mb-2">
                      <span className="font-semibold uppercase tracking-wide">Best For:</span>{' '}
                      {p.bestFor}
                    </p>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      <StarRating rating={p.rating} />
                      <span className="text-[#7A6E65] text-xs">({p.reviews.toLocaleString()})</span>
                    </div>

                    {/* CTA */}
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="btn-primary mt-auto text-center block"
                    >
                      VIEW ON AMAZON →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => setIdx((i) => Math.min(maxIdx, i + 1))}
            disabled={idx >= maxIdx}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full border border-[#C8BFB0] bg-white flex items-center justify-center text-xl hover:bg-[#2D6B1A] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        {maxIdx > 0 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-[#2D6B1A]' : 'bg-[#C8BFB0]'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
