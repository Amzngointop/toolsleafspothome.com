export interface Category {
  slug: string
  name: string
  shortName: string
  description: string
  icon: string
  productCount: number
}

export const categories: Category[] = [
  {
    slug: "plant-pots-and-planters",
    name: "Plant Pots & Planters",
    shortName: "Pots & Planters",
    description:
      "From minimalist ceramic pots to self-watering reservoirs and boho macrame hangers, the right planter sets the foundation for healthy roots and a beautiful display. We review the best pots for drainage, aesthetics, and plant health across every style and size.",
    icon: "🌿",
    productCount: 8,
  },
  {
    slug: "grow-lights-and-led-panels",
    name: "Grow Lights & LED Panels",
    shortName: "Grow Lights",
    description:
      "Insufficient light is the number one killer of indoor plants. Whether you need a discreet pendant light that blends with your décor or a full-spectrum strip light for a propagation rack, our tested picks cover every budget and room setup.",
    icon: "💡",
    productCount: 8,
  },
  {
    slug: "potting-soil-and-growing-mixes",
    name: "Potting Soil & Growing Mixes",
    shortName: "Potting Soil",
    description:
      "Not all potting mixes are created equal. The best blends balance moisture retention, aeration, and nutrient content for the specific plants you grow. We break down premium mixes, organic options, and specialty blends for succulents, orchids, and everything in between.",
    icon: "🌱",
    productCount: 8,
  },
  {
    slug: "watering-tools-and-systems",
    name: "Watering Tools & Systems",
    shortName: "Watering Tools",
    description:
      "The right watering tool makes a measurable difference to plant health. A long-spouted indoor can delivers water to the root zone without disturbing foliage, while self-watering globes keep moisture levels consistent when you are away. Find the best options for every collection size.",
    icon: "🚿",
    productCount: 8,
  },
  {
    slug: "pruning-and-repotting-tools",
    name: "Pruning & Repotting Tools",
    shortName: "Pruning Tools",
    description:
      "Sharp, clean cuts heal faster and resist disease better than ragged ones. From Swiss-made bypass pruners built to last a lifetime to ergonomic designs for arthritic hands, our picks cover every pruning and repotting task your indoor garden demands.",
    icon: "✂️",
    productCount: 8,
  },
  {
    slug: "plant-care-and-fertilizers",
    name: "Plant Care & Fertilizers",
    shortName: "Fertilizers",
    description:
      "Even the best potting mix depletes its nutrients within a few months of planting. The right fertilizer — whether a slow-release granule, an organic liquid, or a water-soluble professional-grade formula — keeps your plants growing vigorously season after season.",
    icon: "🧪",
    productCount: 8,
  },
]
