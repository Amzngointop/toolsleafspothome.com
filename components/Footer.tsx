import Link from 'next/link';

const categories = [
  { label: 'Plant Pots & Planters', href: '/best/plant-pots-and-planters' },
  { label: 'Grow Lights & LED Panels', href: '/best/grow-lights-and-led-panels' },
  { label: 'Potting Soil & Growing Mixes', href: '/best/potting-soil-and-growing-mixes' },
  { label: 'Watering Tools & Systems', href: '/best/watering-tools-and-systems' },
  { label: 'Pruning & Repotting Tools', href: '/best/pruning-and-repotting-tools' },
  { label: 'Plant Care & Fertilizers', href: '/best/plant-care-and-fertilizers' },
];

const guides = [
  {
    label: 'How to Choose the Right Pot for Your Plant',
    href: '/guides/how-to-choose-the-right-pot-for-your-plant',
  },
  {
    label: 'Best Grow Lights Setup for Low-Light Apartments',
    href: '/guides/best-grow-lights-setup-for-low-light-apartments',
  },
  {
    label: 'How to Mix Your Own Potting Soil at Home',
    href: '/guides/how-to-mix-your-own-potting-soil-at-home',
  },
  {
    label: 'Watering Guide: How Often and How Much',
    href: '/guides/watering-guide-how-often-and-how-much',
  },
  {
    label: 'When and How to Repot Your Houseplants',
    href: '/guides/when-and-how-to-repot-your-houseplants',
  },
  {
    label: 'Best Fertilizers for Indoor Plants Explained',
    href: '/guides/best-fertilizers-for-indoor-plants-explained',
  },
];

const aboutLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
];

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 3C16 3 5 8 5 18C5 24.627 9.925 30 16 30C22.075 30 27 24.627 27 18C27 8 16 3 16 3Z"
          fill="#ffffff"
          fillOpacity="0.95"
        />
        <path
          d="M16 30C16 30 16 18 10 12"
          stroke="#2C2218"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="text-lg font-bold text-white tracking-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        ToolsLeafSpotHome
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#2C2218] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Branding */}
          <div className="flex flex-col gap-4">
            <FooterLogo />
            <p className="text-[#C8BFB0] text-sm leading-relaxed mt-1">
              Your trusted guide to indoor plant tools &amp; gear.
            </p>
            <p className="text-[#C8BFB0] text-xs">
              &copy; 2026 toolsleafspothome.com — All rights reserved.
            </p>
            <p className="text-[#8a7e72] text-xs italic leading-relaxed">
              We earn a small commission from Amazon links at no extra cost to you.
            </p>
          </div>

          {/* Column 2: Plant Gear */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
              Plant Gear
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-[#C8BFB0] hover:text-white text-sm transition-colors duration-150"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Guides */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
              Guides
            </h3>
            <ul className="space-y-3">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="text-[#C8BFB0] hover:text-white text-sm transition-colors duration-150 leading-snug block"
                  >
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
              About
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#C8BFB0] hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-12 pt-6 border-t border-dashed border-[#4a3e32]">
          <p className="text-[#6b5f53] text-xs text-center">
            toolsleafspothome.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
