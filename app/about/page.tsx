import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ToolsLeafSpotHome | Indoor Plant Gear Reviews',
  description:
    'Learn about ToolsLeafSpotHome — our mission, research process, and commitment to editorial independence in indoor plant gear recommendations.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-[#1C1208] mb-6">About ToolsLeafSpotHome</h1>

      {/* Mission */}
      <p className="text-[#4A3F35] leading-relaxed mb-10 text-lg">
        ToolsLeafSpotHome exists to make it easier to choose the right plant gear the first time. We know from experience that the internet is full of indoor plant product lists driven by brand relationships, sponsored placements, and recycled content rather than genuine research. We built this site to be the resource we wished existed: a destination where every ranking is driven by real purchase volume, verified customer outcomes, and careful editorial analysis — with no pay-to-play.
      </p>

      {/* Our Research Process */}
      <div className="mb-10">
        <h2 className="font-serif text-2xl text-[#1C1208] mb-4">Our Research Process</h2>
        <p className="text-[#4A3F35] leading-relaxed mb-4">
          Every product list on ToolsLeafSpotHome begins with sales volume data — we identify which products are actually being purchased by real plant owners at scale, filtering for items with at minimum 5,000 verified monthly purchases. Volume alone does not make a good recommendation, so we then cross-reference star ratings across multiple retail platforms, analyse verified review text for patterns in praise and complaint, and evaluate manufacturer specifications including materials, dimensions, drainage design, and certifications.
        </p>
        <p className="text-[#4A3F35] leading-relaxed mb-4">
          For soil and fertilizer products, we additionally evaluate nutrient composition, pH profiles, organic certifications, and the quality of constituent ingredients. For grow lights, we look at photon flux density (PPFD) data, spectrum composition, coverage claims versus real-world reported performance, and energy efficiency ratings. For physical tools and pots, we assess material quality, manufacturing origin, and long-term durability based on multi-year owner feedback.
        </p>
        <p className="text-[#4A3F35] leading-relaxed">
          Our buying guides are written with reference to peer-reviewed horticultural research, guidance from university extension services, and documentation from organisations including the Royal Horticultural Society. We cite our sources and link to primary references rather than presenting unsupported claims as fact.
        </p>
      </div>

      {/* Editorial Independence */}
      <div className="mb-10">
        <h2 className="font-serif text-2xl text-[#1C1208] mb-4">Editorial Independence</h2>
        <p className="text-[#4A3F35] leading-relaxed mb-4">
          ToolsLeafSpotHome does not accept paid placements, sponsored content, or affiliate partnerships beyond the Amazon Associates programme. No brand has the ability to purchase a position on our ranked lists. No product has been featured because a manufacturer provided us with a free sample in exchange for coverage. Our rankings are determined entirely by our research methodology and editorial judgment.
        </p>
        <p className="text-[#4A3F35] leading-relaxed">
          We participate in the Amazon Associates Program and earn a small commission when readers make purchases through our affiliate links, at no additional cost to the buyer. This commission supports the cost of running the site and allows us to continue producing independent research. Our editorial decisions are made before and independently of any commercial consideration.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-10">
        <h2 className="font-serif text-2xl text-[#1C1208] mb-4">Contact</h2>
        <p className="text-[#4A3F35] leading-relaxed">
          For editorial inquiries, corrections, or research partnerships, please contact us at{' '}
          <a
            href="mailto:info@toolsleafspothome.com"
            className="text-[#2D6B1A] hover:underline"
          >
            info@toolsleafspothome.com
          </a>
          . We read every message and aim to respond within three business days.
        </p>
      </div>

      {/* Values callout */}
      <div className="border-l-4 border-[#2D6B1A] bg-white p-6 rounded-r-xl">
        <p className="text-xs font-bold uppercase tracking-widest text-[#2D6B1A] mb-2">Our Commitment</p>
        <p className="text-[#4A3F35] text-sm leading-relaxed">
          Honest recommendations, rigorous research, and complete transparency about how we make money. If a product does not deserve its ranking, it does not appear on this site — regardless of how popular or heavily marketed it is.
        </p>
      </div>
    </div>
  )
}
