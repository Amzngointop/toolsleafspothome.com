import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-bold text-[#1C1208] mb-4">Affiliate Disclosure</h1>
      <p className="text-[#7A6E65] text-sm mb-10">Last updated: January 2026</p>

      <div className="space-y-8 text-[#4A3F35]">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">Our Relationship with Amazon</h2>
          <p className="leading-relaxed">
            toolsleafspothome.com is a participant in the{' '}
            <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">What This Means for You</h2>
          <p className="leading-relaxed">
            When you click a product link on toolsleafspothome.com and make a qualifying purchase on Amazon, we earn a small commission — typically between 1% and 8% of the sale price, depending on the product category. <strong>This comes at no extra cost to you.</strong> The price you pay is exactly the same whether you arrive via our link or navigate to Amazon directly.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">Our Editorial Independence</h2>
          <p className="leading-relaxed">
            Affiliate commissions help fund the research and writing that goes into our reviews and guides. However, they do not influence which products we recommend. We select and rank products based on research, verified customer reviews, expert opinion, and — where possible — hands-on testing. We never accept payment from brands to feature or positively review their products.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
            <li>We only recommend products we genuinely believe are worth buying.</li>
            <li>Sponsored placements are always clearly labelled (we currently have none).</li>
            <li>Negative findings are included in our pros/cons sections regardless of commission rate.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">FTC Compliance</h2>
          <p className="leading-relaxed">
            In accordance with the U.S. Federal Trade Commission's guidelines on endorsements and testimonials (16 CFR Part 255), we disclose our material connection to Amazon on every page that contains affiliate links. The phrase <em>"We may earn a commission from Amazon links at no extra cost to you"</em> appearing across this site is our disclosure.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">Questions?</h2>
          <p className="leading-relaxed">
            If you have any questions about our affiliate relationships or how we select products, please{' '}
            <a href="/contact" className="text-[#2D6B1A] hover:underline">get in touch</a>.
          </p>
        </section>
      </div>
    </main>
  )
}
