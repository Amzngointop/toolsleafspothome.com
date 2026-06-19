import Image from 'next/image'
import Link from 'next/link'
import { guides } from '@/data/guides'

export default function GuidesSection() {
  const featuredGuides = [guides[0], guides[2], guides[4]]

  return (
    <section className="bg-[#F5F0E8] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-[#1C1208] text-3xl text-center mb-4">
          Buying Guides &amp; Plant Care Tips
        </h2>
        <p className="text-[#7A6E65] text-center mb-10">
          In-depth research to help you spend wisely and grow confidently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-xl overflow-hidden border border-[#E0D8CC] shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={guide.coverImage}
                alt={guide.title}
                width={600}
                height={340}
                className="w-full aspect-video object-cover"
              />
              <div className="px-5 py-4">
                <span className="bg-[#2D6B1A] text-white text-xs px-2 py-1 rounded-full inline-block mb-3 uppercase tracking-wide">
                  {guide.category}
                </span>
                <h3 className="font-serif text-[#1C1208] text-lg font-semibold line-clamp-2 mb-2">
                  {guide.title}
                </h3>
                <p className="text-[#4A3F35] text-sm line-clamp-2 mb-4">{guide.excerpt}</p>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-[#2D6B1A] text-sm font-semibold hover:underline"
                >
                  Read Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/buying-guides"
            className="btn-primary inline-block"
          >
            VIEW ALL BUYING GUIDES →
          </Link>
        </div>
      </div>
    </section>
  )
}
