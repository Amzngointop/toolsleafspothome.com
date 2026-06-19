import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[560px]">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=700&fit=crop"
        alt="Indoor plants background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(28,18,8,0.85) 40%, rgba(28,18,8,0.3) 100%)',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 flex items-center min-h-[560px]">
        <div className="max-w-xl">
          {/* Small Label */}
          <p
            className="uppercase text-[#C8BFB0] tracking-widest mb-4"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
          >
            INDOOR PLANT TOOLS &amp; GEAR
          </p>

          {/* H1 */}
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Grow More. Stress Less.
          </h1>

          {/* Subtext */}
          <p
            className="text-white/90 max-w-md"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
          >
            Curated reviews of the best pots, grow lights, soils, and tools —
            so your plants actually thrive.
          </p>

          {/* CTA */}
          <Link href="/plant-gear" className="btn-primary mt-6 inline-block">
            Shop Plant Gear
          </Link>
        </div>
      </div>

      {/* Torn Edge SVG */}
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 L0,30 Q180,0 360,30 Q540,60 720,30 Q900,0 1080,30 Q1260,60 1440,30 L1440,60 Z"
          fill="#F5F0E8"
        />
      </svg>
    </section>
  )
}
