export interface Guide {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  readTime: number
  publishDate: string
}

export const guides: Guide[] = [
  {
    slug: "how-to-choose-the-right-pot-for-your-plant",
    title: "How to Choose the Right Pot for Your Plant",
    excerpt:
      "Choosing the wrong pot is one of the most common mistakes indoor plant owners make — and it can lead to root rot, stunted growth, or a plant that dries out too quickly. This guide walks you through the key factors: pot material, drainage, sizing relative to root mass, and how different plant types have different preferences. By the end, you will know exactly what to look for whether you are repotting a monstera, a succulent, or a trailing pothos.",
    coverImage:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1170&auto=format&fit=crop",
    category: "plant-pots-and-planters",
    readTime: 7,
    publishDate: "2026-01-15",
  },
  {
    slug: "best-grow-lights-setup-for-low-light-apartments",
    title: "Best Grow Light Setup for Low-Light Apartments",
    excerpt:
      "Living in a north-facing apartment or a basement unit doesn't mean you can't grow a thriving indoor garden. Grow lights have advanced dramatically in recent years — modern full-spectrum LEDs are energy-efficient, emit barely any heat, and can be disguised as stylish pendant lamps or tucked under shelves invisibly. This guide covers how to assess your apartment's natural light situation, which light metrics actually matter (PPFD, DLI, and colour spectrum), and how to build a practical lighting setup for everything from ferns to fruiting plants.",
    coverImage:
      "https://images.unsplash.com/photo-1681313409698-dbe22c68cfce?q=80&w=1120&auto=format&fit=crop",
    category: "grow-lights-and-led-panels",
    readTime: 9,
    publishDate: "2026-02-03",
  },
  {
    slug: "how-to-mix-your-own-potting-soil-at-home",
    title: "How to Mix Your Own Potting Soil at Home",
    excerpt:
      "Pre-bagged potting mixes are convenient, but mixing your own gives you complete control over drainage, moisture retention, and nutrient levels — at a lower cost per litre once you buy the components in bulk. In this guide you will learn the building blocks of a great potting mix: peat moss or coco coir as a base, perlite or pumice for aeration, bark for structure, and optional amendments like worm castings and biochar. We include five ready-to-use recipes calibrated for tropical foliage plants, succulents and cacti, orchids, aroids, and seed-starting.",
    coverImage:
      "https://images.unsplash.com/photo-1641789570360-370eaeac713e?q=80&w=1331&auto=format&fit=crop",
    category: "potting-soil-and-growing-mixes",
    readTime: 8,
    publishDate: "2026-02-20",
  },
  {
    slug: "watering-guide-how-often-and-how-much",
    title: "Watering Guide: How Often & How Much for Common Houseplants",
    excerpt:
      "Overwatering is consistently the leading cause of houseplant death indoors — yet underwatering is a close second. Getting it right means understanding that there is no universal watering schedule; the right frequency depends on your pot size, soil type, ambient humidity, season, and the individual plant species. This practical guide teaches you the finger-test, pot-weight, and moisture-meter methods for reading your plant's needs accurately, and includes a reference table covering watering preferences for over 30 common houseplant species.",
    coverImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800",
    category: "watering-tools-and-systems",
    readTime: 6,
    publishDate: "2026-03-10",
  },
  {
    slug: "when-and-how-to-repot-your-houseplants",
    title: "When & How to Repot Your Houseplants Without Stress",
    excerpt:
      "Repotting is one of the most impactful things you can do for a struggling or stagnant houseplant — but done at the wrong time or in the wrong way, it can set a plant back by weeks or permanently damage its root system. This guide covers the signs that tell you a plant needs repotting, how to choose the right new pot size (hint: bigger isn't always better), the step-by-step process for removing a rootbound plant without tearing roots, and how to minimise transplant shock so your plant recovers and resumes growing quickly.",
    coverImage:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
    category: "pruning-and-repotting-tools",
    readTime: 8,
    publishDate: "2026-03-25",
  },
  {
    slug: "best-fertilizers-for-indoor-plants-explained",
    title: "Best Fertilizers for Indoor Plants: NPK Ratios Explained",
    excerpt:
      "Walk into any garden centre and you'll be confronted by dozens of fertilizer options, each with a three-number NPK ratio and claims about what it does. Understanding what those numbers mean — nitrogen for leaf growth, phosphorus for roots and flowers, potassium for overall plant health — transforms fertilizing from guesswork into a precise, effective practice. This guide decodes NPK ratios, explains the difference between slow-release granules and fast-acting liquid fertilizers, covers organic versus synthetic options, and gives you a seasonal fertilizing plan tailored to common indoor plant categories.",
    coverImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
    category: "plant-care-and-fertilizers",
    readTime: 10,
    publishDate: "2026-04-05",
  },
]
