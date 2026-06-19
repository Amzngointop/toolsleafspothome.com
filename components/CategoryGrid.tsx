import Link from 'next/link'
import { categories } from '@/data/categories'

// ---------------------------------------------------------------------------
// SVG Icons — line art, stroke #2D6B1A, fill none, strokeWidth 1.5
// ---------------------------------------------------------------------------
function PlantPotsIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2D6B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Pot body (trapezoid) */}
      <path d="M14 36 L18 52 H42 L46 36 Z" />
      {/* Pot rim */}
      <line x1="12" y1="36" x2="48" y2="36" />
      {/* Stem */}
      <line x1="30" y1="36" x2="30" y2="24" />
      {/* Left leaf */}
      <path d="M30 28 Q22 22 20 14 Q28 16 30 24" />
      {/* Right leaf */}
      <path d="M30 28 Q38 22 40 14 Q32 16 30 24" />
    </svg>
  )
}

function GrowLightsIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2D6B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bulb globe */}
      <path d="M22 30 Q22 18 30 16 Q38 18 38 30 Q38 36 34 38 H26 Q22 36 22 30 Z" />
      {/* Filament base */}
      <line x1="26" y1="38" x2="26" y2="44" />
      <line x1="34" y1="38" x2="34" y2="44" />
      {/* Base */}
      <line x1="24" y1="44" x2="36" y2="44" />
      <line x1="25" y1="47" x2="35" y2="47" />
      {/* Rays */}
      <line x1="30" y1="10" x2="30" y2="7" />
      <line x1="40" y1="13" x2="42" y2="11" />
      <line x1="20" y1="13" x2="18" y2="11" />
      <line x1="44" y1="22" x2="47" y2="21" />
      <line x1="16" y1="22" x2="13" y2="21" />
    </svg>
  )
}

function PottingSoilIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2D6B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bag outline */}
      <path d="M20 20 L18 50 H42 L40 20 Z" />
      {/* Bag tie at top */}
      <path d="M22 20 Q25 14 30 13 Q35 14 38 20" />
      {/* Leaf on bag */}
      <path d="M30 38 Q24 32 25 25 Q32 27 30 36" />
      <line x1="30" y1="38" x2="30" y2="44" />
    </svg>
  )
}

function WateringCanIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2D6B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Can body */}
      <path d="M12 28 L16 48 H40 L44 28 Z" />
      {/* Handle */}
      <path d="M40 32 Q50 28 48 20 Q46 14 40 16" />
      {/* Spout */}
      <path d="M16 30 Q10 26 6 20" />
      {/* Spout head / rose */}
      <circle cx="6" cy="19" r="3" />
      {/* Water drops */}
      <line x1="4" y1="14" x2="4" y2="11" />
      <line x1="8" y1="13" x2="8" y2="10" />
      <line x1="12" y1="14" x2="12" y2="11" />
      {/* Rim */}
      <line x1="12" y1="28" x2="44" y2="28" />
    </svg>
  )
}

function PruningToolsIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2D6B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left blade */}
      <path d="M30 30 L12 14" />
      <path d="M12 14 Q8 10 10 8 Q14 8 16 12 L30 30" />
      {/* Right blade */}
      <path d="M30 30 L48 14" />
      <path d="M48 14 Q52 10 50 8 Q46 8 44 12 L30 30" />
      {/* Pivot */}
      <circle cx="30" cy="30" r="2.5" />
      {/* Left handle */}
      <path d="M30 30 L20 50 Q18 54 22 54 Q26 54 28 50 L30 30" />
      {/* Right handle */}
      <path d="M30 30 L40 50 Q42 54 38 54 Q34 54 32 50 L30 30" />
    </svg>
  )
}

function FertilizersIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2D6B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bottle body */}
      <path d="M22 24 L20 50 H40 L38 24 Z" />
      {/* Bottle shoulder/neck */}
      <path d="M22 24 Q24 18 28 16 L28 12" />
      <path d="M38 24 Q36 18 32 16 L32 12" />
      {/* Dropper cap */}
      <rect x="26" y="8" width="8" height="4" rx="1" />
      {/* Dropper tip */}
      <line x1="30" y1="8" x2="30" y2="5" />
      <circle cx="30" cy="4" r="1" />
      {/* Label lines on bottle */}
      <line x1="24" y1="34" x2="36" y2="34" />
      <line x1="24" y1="38" x2="36" y2="38" />
      <line x1="24" y1="42" x2="32" y2="42" />
    </svg>
  )
}

// Map slug → icon component
const iconMap: Record<string, React.ReactNode> = {
  'plant-pots-and-planters': <PlantPotsIcon />,
  'grow-lights-and-led-panels': <GrowLightsIcon />,
  'potting-soil-and-growing-mixes': <PottingSoilIcon />,
  'watering-tools-and-systems': <WateringCanIcon />,
  'pruning-and-repotting-tools': <PruningToolsIcon />,
  'plant-care-and-fertilizers': <FertilizersIcon />,
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
interface Category {
  slug: string
  name: string
  description: string
}

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-[#F5F0E8]">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-bold text-[#1C1208] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Shop by Plant Gear Category
        </h2>
        <p className="text-[#7A6E65]">
          Browse our expert picks in every essential plant care category
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-8">
        {(categories as Category[]).map((category) => (
          <Link
            key={category.slug}
            href={`/best/${category.slug}`}
            className="bg-white border border-[#E0D8CC] rounded-lg p-6 hover:border-[#2D6B1A] hover:shadow-md transition-all group flex flex-col"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {iconMap[category.slug] ?? <PlantPotsIcon />}
            </div>

            {/* Category Name */}
            <h3
              className="text-xl font-bold text-[#1C1208] mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {category.name}
            </h3>

            {/* Description */}
            <p className="text-[#4A3F35] text-sm line-clamp-2 mt-2 flex-grow">
              {category.description}
            </p>

            {/* CTA Link */}
            <span className="text-[#2D6B1A] text-sm font-semibold mt-4 group-hover:underline inline-block">
              See All 8 Picks →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
