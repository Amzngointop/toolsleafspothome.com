export default function HowWePickSection() {
  return (
    <section className="bg-[#F5F0E8] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-[#1C1208] text-3xl text-center mb-4">
          How We Choose Our Picks
        </h2>
        <p className="text-[#7A6E65] text-center mb-12">
          Every recommendation on ToolsLeafSpotHome is earned, not paid for. Here is our process.
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-serif text-[#1C1208] text-xl mb-3">Sales Volume Research</h3>
            <p className="text-[#4A3F35] text-sm leading-relaxed">
              We only recommend products with verified 5,000+ monthly sales on Amazon — proof that real plant parents trust them.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-serif text-[#1C1208] text-xl mb-3">Editorial Standards</h3>
            <p className="text-[#4A3F35] text-sm leading-relaxed">
              Our picks are based on specs, verified reviews, and category expertise. We never accept payment for placement — ever.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-serif text-[#1C1208] text-xl mb-3">Regularly Updated</h3>
            <p className="text-[#4A3F35] text-sm leading-relaxed">
              Our recommendations are reviewed and refreshed throughout 2026 to reflect the best currently available options.
            </p>
          </div>
        </div>

        <p className="text-center text-[#7A6E65] text-xs italic mt-12 max-w-2xl mx-auto border-t border-dashed border-[#C8BFB0] pt-6">
          toolsleafspothome.com is a participant in the Amazon Services LLC Associates Program. We earn a small commission when you purchase through our links, at no extra cost to you.
        </p>
      </div>
    </section>
  )
}
