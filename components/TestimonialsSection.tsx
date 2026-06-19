const testimonials = [
  {
    quote:
      "Finally found a grow light that actually works for my monstera. ToolsLeafSpotHome's recommendations saved me from buying three wrong ones first.",
    name: 'Sarah M.',
    location: 'Portland, OR',
  },
  {
    quote:
      "The soil comparison guide is incredibly detailed. Switched to FoxFarm based on their advice and my pothos has never looked better.",
    name: 'James K.',
    location: 'Austin, TX',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F0E8] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[#1C1208] text-3xl text-center mb-2">
          Trusted by Plant Parents Everywhere
        </h2>
        <p className="text-[#7A6E65] text-center mb-10">
          4.9/5.0 from our community · Updated 2026
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#E0D8CC] rounded-xl p-8 shadow-sm"
            >
              <div className="text-[#D4881E] text-xl mb-4">★★★★★</div>
              <p className="text-[#4A3F35] text-base italic mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E0D8CC] flex items-center justify-center text-[#7A6E65] font-bold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#1C1208] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#7A6E65] text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
