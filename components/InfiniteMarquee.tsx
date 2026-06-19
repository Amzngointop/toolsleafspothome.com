const marqueeItems = [
  '🌿 Expert-Curated Picks',
  '✓ No Sponsored Reviews',
  '🍃 Tested for Real Plant Parents',
  '⭐ Only the Bestsellers',
  '🌱 Updated for 2026',
  '💚 100% Independent Advice',
  '🔍 Researched & Verified',
  '✓ Amazon-Verified Products',
]

const allItems = [...marqueeItems, ...marqueeItems]

export default function InfiniteMarquee() {
  return (
    <div
      className="h-12 overflow-hidden flex items-center pointer-events-none"
      style={{ backgroundColor: '#2C2218' }}
    >
      <div className="marquee-track flex whitespace-nowrap items-center h-full">
        {allItems.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="text-white text-sm font-medium">{item}</span>
            <span className="text-white mx-8 select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
