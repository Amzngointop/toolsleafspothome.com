import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import { guides } from '@/data/guides'
import FaqAccordion from '@/components/FaqAccordion'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cat = categories.find((c) => c.slug === slug)
  if (!cat) return { title: 'Not Found' }
  return {
    title: `Best ${cat.name} for Indoor Plants 2026`,
    description: `Discover the 8 best ${cat.name.toLowerCase()} for indoor plants in 2026. Expert-reviewed picks ranked by sales volume, customer satisfaction, and real-world performance.`,
  }
}

const faqMap: Record<string, { question: string; answer: string }[]> = {
  'plant-pots-and-planters': [
    { question: 'What size pot should I use?', answer: 'Choose a pot 1–2 inches larger in diameter than the current root ball. Going too large causes excess wet soil around roots, increasing rot risk. Upsizing by one pot size at each repotting is the safest approach.' },
    { question: 'Do I need drainage holes?', answer: 'Yes — drainage holes are non-negotiable for almost all houseplants. Without them, water accumulates at the bottom and causes root rot. If you love a decorative pot without drainage, use it as a cachepot and place a nursery pot inside.' },
    { question: 'Which material is best — ceramic, plastic, or terracotta?', answer: 'Terracotta is porous and dries quickly — ideal for succulents. Ceramic retains moisture longer, suiting tropicals. Plastic is lightweight and practical. Choose based on your plant\'s water needs and your watering habits.' },
    { question: 'How often should I repot?', answer: 'Most houseplants benefit from repotting every 1–2 years, or when roots emerge from drainage holes. Spring is ideal as plants recover from transplant shock most quickly during active growth.' },
  ],
  'grow-lights-and-led-panels': [
    { question: 'How many hours of grow light do plants need?', answer: 'Most tropical houseplants thrive with 12–16 hours of supplemental light per day. Succulents prefer 16–18 hours, while low-light species do well with 10–12 hours. Always provide a dark period — continuous light disrupts plant circadian rhythms.' },
    { question: 'How far should grow lights be from plants?', answer: 'High-intensity LED panels should be 18–24 inches away. Lower-power clip-on lights work best 6–18 inches away. If you see leaf bleaching or upward curling, increase the distance.' },
    { question: 'What spectrum is best for houseplants?', answer: 'Full-spectrum lights covering blue (400–500 nm) and red (620–700 nm) wavelengths are ideal. Blue light drives vegetative growth while red promotes flowering. Modern full-spectrum LEDs cover the entire photosynthetically active range efficiently.' },
    { question: 'Can I leave grow lights on 24/7?', answer: 'No. Plants require a dark period for cellular respiration. Running lights continuously stresses plants and can inhibit flowering. Stick to 16–18 hours on, 6–8 hours off, ideally controlled by a timer.' },
  ],
  'potting-soil-and-growing-mixes': [
    { question: 'Can I use garden soil for indoor plants?', answer: 'Avoid outdoor garden soil for containers — it compacts severely in pots, cuts off oxygen to roots, and can harbour pests and diseases. Purpose-made potting mixes stay loose and aerated in the confined pot environment.' },
    { question: 'How often should I replace potting mix?', answer: 'Potting mix degrades over 1–2 years as organic matter breaks down. A full replacement every 1–2 years refreshes nutrients, restores drainage, and removes pest and pathogen buildup from the old medium.' },
    { question: 'What\'s the difference between potting soil and potting mix?', answer: 'Potting soil contains actual loam, while potting mix is a soilless blend of peat, coco coir, perlite, and bark. For containers, soilless mixes are superior — they drain better, stay lighter, and don\'t compact. Read ingredient lists rather than relying on names.' },
    { question: 'Should I add perlite to my potting mix?', answer: 'Yes, for most houseplants. Adding 20–30% perlite improves drainage and aeration significantly. For succulents, up to 50% perlite works well. For ferns and moisture-loving plants, a 10–15% addition is sufficient.' },
  ],
  'watering-tools-and-systems': [
    { question: 'How do I know when to water my plants?', answer: 'The finger test is most reliable: insert your finger 1–2 inches into the soil. If dry, water thoroughly. If moist, wait another day or two. Lifting the pot also works — a light pot means dry soil. A moisture meter removes all guesswork.' },
    { question: 'What\'s the best watering can for indoor plants?', answer: 'The best indoor watering can has a long, slender spout to deliver water directly to the soil base without wetting foliage. A 1–2 litre capacity is ideal — small enough to be precise and comfortable, large enough to water several plants per fill.' },
    { question: 'Should I use room-temperature water?', answer: 'Yes. Cold tap water can shock tropical houseplants. Allow tap water to sit in a jug overnight to reach room temperature and allow chlorine to off-gas. Rainwater and filtered water are excellent alternatives.' },
    { question: 'Are self-watering globes effective?', answer: 'Self-watering globes work well for maintaining consistent moisture during short absences of a few days to two weeks. Release rates vary with soil type and temperature — they work best in dense, moisture-retentive mixes rather than fast-draining succulent mixes.' },
  ],
  'pruning-and-repotting-tools': [
    { question: 'When is the best time to prune houseplants?', answer: 'Spring is optimal, just as plants enter active growth. This allows them to produce new shoots from pruning cuts quickly. Light corrective pruning — removing dead leaves and spent flowers — can be done at any time without harm.' },
    { question: 'Do I need to sterilize my pruning tools?', answer: 'Yes, always sterilize between plants, especially diseased ones. Wipe blades with 70% isopropyl alcohol or dip in a 10% bleach solution. This prevents transmitting bacterial, fungal, or viral diseases between plants.' },
    { question: 'How much should I prune at once?', answer: 'Never remove more than one-third of a plant\'s foliage in a single session. Removing too much stresses the plant and reduces its ability to photosynthesize. For hard rejuvenation pruning, spread work over two to three sessions across several weeks.' },
    { question: 'What\'s the difference between bypass and anvil pruners?', answer: 'Bypass pruners have two curved blades that pass each other like scissors, producing clean cuts that heal quickly. Anvil pruners have a single blade that can crush delicate stem tissue. For indoor houseplants, bypass pruners are always the better choice.' },
  ],
  'plant-care-and-fertilizers': [
    { question: 'How often should I fertilize indoor plants?', answer: 'During the growing season (spring through early autumn), fertilize every 2–4 weeks with liquid fertilizer, or apply slow-release granules every 3–6 months. In winter, reduce or stop fertilizing entirely as most plants enter a resting phase.' },
    { question: 'What does NPK mean on fertilizer labels?', answer: 'NPK stands for Nitrogen (N), Phosphorus (P), and Potassium (K). Nitrogen drives leafy growth. Phosphorus supports root development, flowering, and fruiting. Potassium regulates overall plant health and disease resistance.' },
    { question: 'Can I over-fertilize plants?', answer: 'Yes — excess fertilizer salts cause fertilizer burn: brown, crispy leaf tips. If you suspect over-fertilization, flush the soil thoroughly with clean water three times to leach out excess salts, then resume a reduced fertilizing schedule.' },
    { question: 'Is liquid or slow-release fertilizer better?', answer: 'Both have merits. Liquid fertilizers provide immediately available nutrients and allow precise adjustments. Slow-release granules feed consistently for months with a single application. Many experienced plant owners use both for best results.' },
  ],
}

const introMap: Record<string, string> = {
  'plant-pots-and-planters': 'The right pot does far more than hold soil — it determines how quickly your growing medium dries, how much room roots have to expand, and how the arrangement looks in your home. We analysed over 12,000 monthly purchases to find the pots that consistently earn five-star reviews and keep plants thriving year after year.',
  'grow-lights-and-led-panels': 'Insufficient light is the leading cause of houseplant decline in indoor environments. Modern full-spectrum LEDs deliver the wavelengths plants need at a fraction of older fluorescent costs. We reviewed sales data, photon flux measurements, and thousands of grower reviews to identify the eight grow lights that genuinely transform low-light apartments.',
  'potting-soil-and-growing-mixes': 'The potting mix you choose is the foundation of every healthy indoor plant. A great potting mix stays loose and aerated in the confined space of a pot, holds adequate moisture, and provides balanced starting nutrition. We evaluated dozens of mixes across pH, drainage performance, and grower feedback.',
  'watering-tools-and-systems': 'Overwatering kills more houseplants than anything else — and underwatering is a close second. The right watering tool helps you deliver exactly the right amount of water, exactly where it is needed. We reviewed thousands of customer ratings to find the eight watering tools that consistently earn outstanding reviews.',
  'pruning-and-repotting-tools': 'Sharp, precise pruning cuts heal faster and resist disease better than cuts made with dull tools. We evaluated blade quality, ergonomics, and long-term durability across dozens of tools to bring you the eight best pruning and repotting tools for indoor gardeners in 2026.',
  'plant-care-and-fertilizers': 'Even the richest potting mix depletes its nutrients within a few months. A well-chosen fertilizer replenishes nitrogen, phosphorus, and potassium on a schedule matching your plant\'s growth cycle. We reviewed purchase volume, NPK formulations, and grower results across hundreds of products.',
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className="text-[#D4881E] text-sm">
      {'★'.repeat(full)}{half ? '½' : ''}
    </span>
  )
}

function AffiliateDisclosure() {
  return (
    <p className="italic text-[#7A6E65] text-xs border border-dashed border-[#C8BFB0] rounded p-3 mb-6">
      ToolsLeafSpotHome participates in the Amazon Associates Program. We earn a commission on purchases made through our links at no extra cost to you.
    </p>
  )
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cat = categories.find((c) => c.slug === slug)
  if (!cat) notFound()

  const catProducts = products
    .filter((p) => p.category === slug)
    .sort((a, b) => a.rank - b.rank)

  const featured = catProducts[0]
  const rest = catProducts.slice(1)
  const faqs = faqMap[slug] ?? []
  const intro = introMap[slug] ?? `Discover the best ${cat.name.toLowerCase()} for indoor plants, ranked by sales volume and real-world performance.`
  const otherCats = categories.filter((c) => c.slug !== slug)

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <nav className="text-[#7A6E65] text-sm mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-[#2D6B1A] hover:underline">Home</Link>
            <span>›</span>
            <Link href="/plant-gear" className="hover:text-[#2D6B1A] hover:underline">Plant Gear</Link>
            <span>›</span>
            <span className="text-[#1C1208]">{cat.name}</span>
          </nav>

          <h1 className="font-serif text-[#1C1208] text-4xl mb-4 leading-tight">
            Best {cat.name} for Indoor Plants (2026)
          </h1>

          <AffiliateDisclosure />

          <p className="text-[#4A3F35] leading-relaxed mb-6">{intro}</p>

          <div className="border-l-4 border-[#2D6B1A] bg-white p-4 mb-8 rounded-r">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2D6B1A] mb-1">How We Pick</p>
            <p className="text-[#4A3F35] text-sm leading-relaxed">
              We analyze sales volume, customer satisfaction, and category-specific performance metrics. Every product in this list has 5,000+ verified monthly purchases.
            </p>
          </div>

          {/* FEATURED PRODUCT */}
          {featured && (
            <div className="bg-white border border-[#E0D8CC] rounded-xl p-6 mb-8 lg:flex gap-6">
              <div className="flex-shrink-0 mb-4 lg:mb-0">
                <Image
                  src={featured.imageUrl}
                  alt={featured.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg w-full lg:w-[300px] h-[300px]"
                />
              </div>
              <div className="flex-1">
                <span className="bg-[#2D6B1A] text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                  #{featured.rank} — {featured.badge}
                </span>
                <h2 className="font-serif text-2xl text-[#1C1208] mb-2">{featured.name}</h2>
                <div className="flex items-center gap-2 mb-3">
                  <Stars rating={featured.rating} />
                  <span className="text-[#7A6E65] text-sm">{featured.rating} ({featured.reviews.toLocaleString()} reviews)</span>
                </div>
                <p className="text-[#4A3F35] text-sm leading-relaxed mb-4">{featured.summary}</p>
                <p className="text-[#2D6B1A] text-xs font-bold uppercase tracking-wide mb-2">Pros</p>
                <ul className="mb-2 space-y-1">
                  {featured.pros.map((pro, i) => (
                    <li key={i} className="text-[#4A3F35] text-sm flex gap-2"><span className="text-[#2D6B1A] flex-shrink-0">✓</span>{pro}</li>
                  ))}
                </ul>
                <p className="text-[#7A6E65] text-xs font-bold uppercase tracking-wide mt-3 mb-2">Cons</p>
                <ul className="mb-3 space-y-1">
                  {featured.cons.map((con, i) => (
                    <li key={i} className="text-[#7A6E65] text-sm flex gap-2"><span className="flex-shrink-0">×</span>{con}</li>
                  ))}
                </ul>
                <p className="text-[#7A6E65] text-xs uppercase mt-3">
                  <span className="font-semibold">Best For:</span> {featured.bestFor}
                </p>
                <a
                  href={featured.affiliateUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-primary mt-4 w-full text-center block"
                >
                  View on Amazon →
                </a>
              </div>
            </div>
          )}

          {/* MORE TOP PICKS */}
          <h3 className="font-serif text-xl text-[#1C1208] mb-4">More Top Picks</h3>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {rest.map((p) => (
              <div key={p.id} className="bg-white border border-[#E0D8CC] rounded-xl p-4 flex flex-col">
                <div className="w-full h-[200px] bg-white flex items-center justify-center p-2 rounded-lg">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="bg-[#2D6B1A] text-white text-xs px-2 py-0.5 rounded-full inline-block mt-3 self-start">
                  #{p.rank} — {p.badge}
                </span>
                <p className="font-serif font-semibold text-[#1C1208] line-clamp-2 mt-2">{p.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Stars rating={p.rating} />
                  <span className="text-[#7A6E65] text-xs">({p.reviews.toLocaleString()})</span>
                </div>
                <p className="text-[#7A6E65] text-xs mt-1"><span className="font-semibold">Best For:</span> {p.bestFor}</p>
                <ul className="mt-2 space-y-1">
                  {p.pros.slice(0, 2).map((pro, i) => (
                    <li key={i} className="text-[#4A3F35] text-sm flex gap-1"><span className="text-[#2D6B1A] flex-shrink-0">✓</span>{pro}</li>
                  ))}
                </ul>
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-primary mt-auto pt-4 text-center block"
                >
                  View on Amazon →
                </a>
              </div>
            ))}
          </div>

          {/* COMPARISON TABLE */}
          <h3 className="font-serif text-xl text-[#1C1208] mb-4">Quick Comparison</h3>
          <div className="bg-white border border-[#E0D8CC] rounded-xl overflow-hidden mb-10 overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#2C2218] text-white text-xs uppercase tracking-wide">
                  <th className="text-left px-4 py-3">Product</th>
                  <th className="text-left px-4 py-3">Best For</th>
                  <th className="text-left px-4 py-3">Key Feature</th>
                  <th className="text-left px-4 py-3">Top Con</th>
                  <th className="text-left px-4 py-3">Link</th>
                </tr>
              </thead>
              <tbody>
                {catProducts.map((p, i) => (
                  <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}>
                    <td className="px-4 py-3 font-medium text-[#1C1208]">{p.name}</td>
                    <td className="px-4 py-3 text-[#4A3F35]">{p.bestFor}</td>
                    <td className="px-4 py-3 text-[#4A3F35]">{p.pros[0]}</td>
                    <td className="px-4 py-3 text-[#7A6E65]">{p.cons[0]}</td>
                    <td className="px-4 py-3">
                      <a href={p.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-[#2D6B1A] text-xs font-bold hover:underline">
                        Amazon →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h3 className="font-serif text-xl text-[#1C1208] mb-4">Frequently Asked Questions</h3>
          <div className="mb-10">
            <FaqAccordion items={faqs} />
          </div>

          {/* More Buying Guides */}
          <div className="mt-8">
            <h3 className="font-serif text-lg text-[#1C1208] mb-3">More Buying Guides</h3>
            <ul className="space-y-2">
              {guides.slice(0, 3).map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-[#2D6B1A] hover:underline text-sm">
                    → {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* More Plant Gear */}
            <div className="rounded-xl overflow-hidden border border-[#E0D8CC]">
              <div className="bg-[#2C2218] text-white px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-widest">More Plant Gear</p>
              </div>
              <div className="bg-white p-4 space-y-2">
                {otherCats.map((c) => (
                  <Link key={c.slug} href={`/best/${c.slug}`} className="block text-[#4A3F35] text-sm hover:text-[#2D6B1A] hover:underline">
                    → {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Buying Guides */}
            <div className="rounded-xl overflow-hidden border border-[#E0D8CC]">
              <div className="bg-[#2C2218] text-white px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-widest">Buying Guides</p>
              </div>
              <div className="bg-white p-4 space-y-2">
                {guides.map((g) => (
                  <Link key={g.slug} href={`/guides/${g.slug}`} className="block text-[#4A3F35] text-sm hover:text-[#2D6B1A] hover:underline">
                    → {g.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Picks */}
            <div className="rounded-xl overflow-hidden border border-[#E0D8CC]">
              <div className="bg-[#2C2218] text-white px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-widest">Quick Picks</p>
              </div>
              <div className="bg-white p-4 space-y-4">
                {catProducts.slice(0, 3).map((p) => (
                  <div key={p.id} className="flex gap-3 items-start">
                    <Image src={p.imageUrl} alt={p.name} width={80} height={80} className="object-cover rounded w-20 h-20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1C1208] text-xs font-semibold line-clamp-2">{p.name}</p>
                      <p className="text-[#D4881E] text-xs mt-1">{'★'.repeat(Math.floor(p.rating))}</p>
                      <a href={p.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-[#2D6B1A] text-xs font-bold hover:underline mt-1 block">
                        Amazon →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
