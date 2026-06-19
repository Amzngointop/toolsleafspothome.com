'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

const categories = [
  { label: 'Plant Pots & Planters', href: '/best/plant-pots-and-planters' },
  { label: 'Grow Lights & LED Panels', href: '/best/grow-lights-and-led-panels' },
  { label: 'Potting Soil & Growing Mixes', href: '/best/potting-soil-and-growing-mixes' },
  { label: 'Watering Tools & Systems', href: '/best/watering-tools-and-systems' },
  { label: 'Pruning & Repotting Tools', href: '/best/pruning-and-repotting-tools' },
  { label: 'Plant Care & Fertilizers', href: '/best/plant-care-and-fertilizers' },
];

function LeafLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 3C16 3 5 8 5 18C5 24.627 9.925 30 16 30C22.075 30 27 24.627 27 18C27 8 16 3 16 3Z"
          fill={dark ? '#ffffff' : '#2D6B1A'}
          fillOpacity={dark ? 0.95 : 1}
        />
        <path
          d="M16 30C16 30 16 18 10 12"
          stroke={dark ? '#2C2218' : '#1a4010'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[#2C2218]'}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        ToolsLeafSpotHome
      </span>
    </Link>
  );
}

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGearOpen, setMobileGearOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close mega-menu on outside click or Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMegaOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="w-full sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="w-full bg-[#2C2218] text-white text-center text-sm py-2 px-4 leading-snug">
        Free editorial content — we never take payment for reviews. Our picks are always independent.
      </div>

      {/* Main Nav */}
      <nav className="bg-[#F5F0E8] border-b border-dashed border-[#C8BFB0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* LEFT: Logo */}
          <div className="flex items-center">
            <LeafLogo />
          </div>

          {/* CENTER: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Plant Gear toggle */}
            <button
              onClick={() => setMegaOpen((prev) => !prev)}
              className="flex items-center gap-1 text-[#2C2218] font-medium text-sm hover:text-[#2D6B1A] transition-colors focus:outline-none"
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Plant Gear
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <Link
              href="/buying-guides"
              className="text-[#2C2218] font-medium text-sm hover:text-[#2D6B1A] transition-colors"
            >
              Buying Guides
            </Link>
            <Link
              href="/about"
              className="text-[#2C2218] font-medium text-sm hover:text-[#2D6B1A] transition-colors"
            >
              About
            </Link>
          </div>

          {/* RIGHT: Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-[#2C2218] hover:text-[#2D6B1A] transition-colors p-1"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mega-Menu (desktop) */}
        {megaOpen && (
          <div className="hidden md:block absolute left-0 right-0 bg-[#F5F0E8] border-b border-dashed border-[#C8BFB0] shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-[1fr_280px] gap-8">

              {/* CENTER: Category grid */}
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7a6e62] font-semibold mb-4">
                  Shop by Category
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setMegaOpen(false)}
                      className="flex items-center justify-between bg-white border border-[#E8E0D4] rounded-lg px-4 py-3 text-sm text-[#2C2218] hover:border-[#2D6B1A] hover:text-[#2D6B1A] transition-all group"
                    >
                      {cat.label}
                      <ChevronRight size={14} className="text-[#C8BFB0] group-hover:text-[#2D6B1A] transition-colors flex-shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT: Plant image */}
              <div className="flex items-start justify-end">
                <div className="w-full max-w-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
                    alt="Indoor plants"
                    className="rounded-xl object-cover w-full h-[190px]"
                    loading="lazy"
                  />
                  <p className="text-xs text-[#7a6e62] mt-2 text-center italic">
                    Curated picks for your indoor garden
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#F5F0E8] border-t border-dashed border-[#C8BFB0] px-4 pb-6">
            <ul className="mt-4 space-y-1">
              {/* Plant Gear accordion */}
              <li>
                <button
                  onClick={() => setMobileGearOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-sm font-medium text-[#2C2218] hover:text-[#2D6B1A] py-3 transition-colors focus:outline-none"
                  aria-expanded={mobileGearOpen}
                >
                  Plant Gear
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileGearOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileGearOpen && (
                  <ul className="ml-4 border-l border-dashed border-[#C8BFB0] pl-4 space-y-1 mb-2">
                    {categories.map((cat) => (
                      <li key={cat.href}>
                        <Link
                          href={cat.href}
                          onClick={() => { setMobileOpen(false); setMobileGearOpen(false); }}
                          className="block text-sm text-[#5a4e42] hover:text-[#2D6B1A] py-2 transition-colors"
                        >
                          {cat.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/buying-guides"
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[#2C2218] hover:text-[#2D6B1A] py-3 transition-colors"
                >
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[#2C2218] hover:text-[#2D6B1A] py-3 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
