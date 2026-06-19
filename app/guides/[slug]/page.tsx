import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { guides } from '@/data/guides'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)
  if (!guide) return { title: 'Not Found' }
  return {
    title: guide.title,
    description: guide.excerpt.slice(0, 160),
  }
}

// ─── Guide body content ───────────────────────────────────────────────────────

interface Section {
  heading: string
  body: string
}

function getGuideSections(slug: string): Section[] {
  switch (slug) {
    case 'how-to-choose-the-right-pot-for-your-plant':
      return [
        {
          heading: 'Why Your Pot Choice Matters More Than You Think',
          body: `The pot you choose for an indoor plant is not a cosmetic decision — it is a fundamental horticultural one. A pot that is too large traps moisture around the root ball, starving roots of the oxygen they need and creating the perfect conditions for root rot. A pot without drainage holes allows water to pool at the base, with the same catastrophic result. A pot that is too small constricts root growth, prevents nutrient uptake, and causes the plant to dry out so rapidly that consistent watering becomes almost impossible.

Beyond these functional concerns, pot material significantly influences how quickly the growing medium dries between waterings. Terracotta, for example, wicks moisture out of the soil through its porous walls — a property that is genuinely beneficial for succulents and cacti but potentially harmful for moisture-loving ferns. Understanding these relationships transforms pot selection from an aesthetic choice into a precision tool for plant health. According to the <a href="https://extension.umn.edu/houseplants" target="_blank" rel="noopener noreferrer" class="text-[#2D6B1A] underline">University of Minnesota Extension's houseplant guidance</a>, proper pot selection is one of the three most impactful factors in indoor plant success.`,
        },
        {
          heading: 'Drainage: The Non-Negotiable Rule',
          body: `Every plant pot used for a long-term planting needs at least one drainage hole. This is not a preference — it is a physiological requirement of almost every terrestrial plant species. When you water, excess water needs a path to escape; without it, water fills the air pockets in the potting mix, displacing the oxygen that roots absorb between waterings. Over time — typically within a few weeks — this oxygen-deprived, waterlogged environment kills the fine feeder roots first, then the structural root system, and eventually the entire plant.

Many decorative pots sold in home décor stores lack drainage holes. The best solution is to use these as cachepots: place a nursery pot with drainage holes inside the decorative one, and remove the inner pot to a sink when watering. Allow it to drain fully before returning it to the cachepot. Never pour gravel or pebbles in the bottom of a pot without drainage as a substitute — research from multiple horticultural institutions has demonstrated that this actually raises the water table inside the pot and worsens drainage rather than improving it.

The <a href="https://www.rhs.org.uk/plants/types/houseplants" target="_blank" rel="noopener noreferrer" class="text-[#2D6B1A] underline">Royal Horticultural Society</a> recommends always prioritising drainage over decorative appeal when choosing containers for living plants.`,
        },
        {
          heading: 'Pot Size Matters More Than You Think',
          body: `The ideal pot for most houseplants is 1–2 inches larger in diameter than the plant's current root ball. This "Goldilocks zone" of pot sizing gives roots enough room to spread and access fresh nutrients while keeping the volume of moist soil manageable. In a too-large pot, roots cannot access water and nutrients from soil that is far from their current reach, but that soil stays wet for long periods — a recipe for fungal problems and root rot.

When upsizing, move incrementally: from a 4-inch pot to a 6-inch pot, then to an 8-inch pot, rather than jumping to a much larger container. Plants that have become severely rootbound — where roots are circling the inside of the pot or emerging from drainage holes in large masses — may need more urgent upsizing, but even then, a step of no more than 2–3 inches in diameter is appropriate.

Depth is equally important. Shallow-rooted plants like peperomia and most succulents thrive in wide, shallow pots that dry out quickly. Deep-rooted species like Sansevieria and large Dracaena varieties benefit from tall, narrow pots that accommodate their downward-growing root systems without excessive soil volume.`,
        },
        {
          heading: 'Material Guide: Terracotta vs. Ceramic vs. Plastic',
          body: `Each pot material has a distinct moisture profile that directly affects how often you need to water and which plants it suits best.

**Terracotta** is unglazed fired clay that actively wicks moisture through its walls. This breathability is excellent for succulents, cacti, Mediterranean herbs, and any plant that is prone to root rot in consistently moist conditions. The trade-off is that terracotta pots require more frequent watering, especially in warm or low-humidity environments. They are also heavier than plastic and can crack in freezing temperatures.

**Glazed ceramic** pots retain moisture significantly longer than terracotta because the glaze seals the clay walls. This makes them well-suited to moisture-loving plants like peace lilies, ferns, and tropical aroids. They are available in a huge range of finishes and colours and are excellent for decorative displays. The main downsides are weight and fragility — ceramic chips and cracks more easily than plastic.

**Plastic** pots are lightweight, affordable, durable, and excellent moisture retainers. They are the workhorse of the horticultural industry for good reason: consistent moisture retention, easy cleaning, and near-indestructibility. Modern frosted or matte-finish plastic pots have become increasingly attractive, blurring the line between functional nursery pot and display container. For indoor plants that need consistent moisture — most tropicals — plastic is a highly practical and underrated choice.`,
        },
        {
          heading: 'Self-Watering Pots: When They Make Sense',
          body: `Self-watering pots incorporate a sub-irrigation reservoir at the base, separated from the growing medium by a wick or membrane. As the soil at root level dries, it draws water up from the reservoir via capillary action, maintaining a consistently moist — but not waterlogged — root environment. The system reduces watering frequency dramatically, with many reservoirs lasting one to three weeks between refills.

Self-watering pots are genuinely excellent for certain situations. They shine for moisture-loving plants like tomatoes, peppers, herbs, and tropical foliage plants in busy households. They are also ideal for travel, eliminating the need for a plant-sitter during short holidays. Plants that are prone to inconsistent watering cycles — causing stress from alternate drought and flood — benefit enormously from the stable moisture environment self-watering systems provide.

However, self-watering pots are not universal solutions. Succulents, cacti, snake plants, and other drought-tolerant species should never be grown in self-watering containers, as the permanent moisture at the reservoir level creates exactly the wet conditions these plants cannot tolerate. For these species, the traditional pot-and-saucer approach with a well-draining mix is always preferable.`,
        },
        {
          heading: 'Best Pot Shapes for Different Plant Types',
          body: `Pot shape influences both the aesthetic presentation of a plant and its growing conditions. Round, symmetrical pots are the most versatile and suit the vast majority of houseplants. However, specific plant types have preferences worth considering.

Trailing and vining plants — pothos, philodendron, string of pearls — look their best and grow most naturally in hanging baskets or tall pedestal pots that allow their stems to cascade freely. Standard nursery pots placed in macrame hangers are a cost-effective way to achieve this aesthetic. Wide, shallow dishes and trays are ideal for plants with spreading, shallow root systems: African violets, many succulents, and low-growing peperomias all perform well in containers that are wider than they are deep.

Long, rectangular window boxes suit trailing plants along a windowsill and are excellent for growing a row of herbs in the kitchen. Tall, narrow cylindrical pots complement architectural plants like Sansevieria, Strelitzia, and indoor palms, supporting both their upright growth habit and their deeper root systems. Orchid pots — clear plastic or slatted terracotta cylinders — allow roots to access light, which orchid roots require for photosynthesis, and provide the airflow that epiphytic orchid roots need to stay healthy.`,
        },
        {
          heading: 'Our Top Recommendations',
          body: `After reviewing thousands of verified customer reviews and real-world horticultural performance data, our top picks for indoor plant pots combine practical drainage design with materials matched to common plant types.

For most indoor plant owners, a set of white ceramic pots with drainage holes and matching saucers represents the best balance of function and aesthetics. They retain moisture well for tropical houseplants, look clean and versatile in any interior, and the included saucer protects surfaces. The La Jolie Muse ceramic planter set (available in three graduated sizes) is our top recommendation in this category.

For those with large or fast-growing tropicals, fabric grow bags offer superior air-pruning performance that prevents root circling and promotes dense, fibrous root systems. The Gardenbasix matte black grow bags are our pick for plants that need frequent repotting or have aggressive root systems.

For the design-conscious collector, macrame hangers transform trailing plants into living artwork without requiring additional shelf space. The Mkono 3-Pack remains our top-rated option based on durability, adjustability, and aesthetic quality across thousands of verified purchases.`,
        },
      ]

    case 'best-grow-lights-setup-for-low-light-apartments':
      return [
        {
          heading: 'Understanding Plant Light Requirements',
          body: `Before investing in grow lights, it helps to understand what "light" means from a plant's perspective. Plants do not respond to brightness the way our eyes do — they respond to specific wavelengths of the electromagnetic spectrum that drive photosynthesis. Photosynthetically Active Radiation (PAR) covers wavelengths from 400 to 700 nanometres, and the intensity of light within this range is measured in micromoles of photons per square metre per second (µmol/m²/s), commonly abbreviated as PPFD.

For practical purposes, different plant categories have very different light requirements. Low-light tolerant species like pothos, snake plants, and ZZ plants survive on as little as 50–100 PPFD, which is why they persist in office environments and north-facing rooms. Medium-light plants — most tropical foliage plants, including monsteras, peace lilies, and calatheas — perform best at 200–400 PPFD. High-light species like succulents, cacti, and fruiting plants need 500 PPFD or more. Without adequate light, even "easy" houseplants will stop growing, decline slowly, and eventually die.

The good news is that modern LED grow lights can deliver exactly the right PPFD at a fraction of the energy cost of older lighting technologies, making it fully practical to grow thriving plants even in windowless rooms or dark north-facing apartments. The <a href="https://extension.umn.edu/houseplants/lighting-indoor-plants" target="_blank" rel="noopener noreferrer" class="text-[#2D6B1A] underline">University of Minnesota Extension's lighting guide</a> provides an excellent technical foundation for understanding these metrics.`,
        },
        {
          heading: 'Types of Grow Lights: LED vs. Fluorescent vs. HID',
          body: `Three main lighting technologies are used for indoor plant growing, and they differ substantially in energy efficiency, heat output, spectrum quality, and cost.

**LED (Light-Emitting Diode)** grow lights are the current gold standard for indoor plant growing in home environments. Modern full-spectrum LED panels deliver high PPFD output at extremely low energy consumption — typically 30–60% less electricity than equivalent fluorescent setups. They generate minimal heat, allowing placement close to plants without risk of burning foliage, and their long rated lifespan (typically 50,000 hours) makes them a cost-effective long-term investment. Full-spectrum LEDs that emit a balanced white light are ideal for home use because they do not create the visually intrusive pink-purple glow of older blurple LED panels.

**Fluorescent** lights — particularly T5 HO (High Output) tubes — were the dominant grow-light technology before LEDs and remain excellent for seed starting and propagation shelves. They produce a strong, even light output across a wide footprint, generate moderate heat, and are easy to find at hardware stores. Their main disadvantages versus LEDs are higher energy consumption, lower PPFD output per watt, and shorter bulb lifespan requiring regular replacement.

**HID (High-Intensity Discharge)** lights, including Metal Halide and High-Pressure Sodium, produce extremely high light output suitable for commercial growing operations. They generate significant heat, require ballasts and specialised fixtures, and consume large amounts of electricity. For home use, HIDs are overkill for houseplants and impractical without significant ventilation infrastructure. Modern high-power LEDs now match or exceed HID output at a fraction of the running cost.`,
        },
        {
          heading: 'How to Calculate Light Coverage for Your Space',
          body: `Understanding a grow light's coverage area claims requires some scepticism, because manufacturers often quote maximum coverage at low light intensities that are insufficient for most plants. A light that claims to cover a "4×4 ft area" may only deliver adequate PPFD across that area if your plants need very low light. For medium- to high-light species, the effective useful coverage will be significantly smaller.

The most useful metric to calculate is Daily Light Integral (DLI) — the total number of moles of photons your plants receive in a 24-hour period. DLI = PPFD × photoperiod hours × 0.0036. A low-light plant needs a DLI of approximately 3–6 mol/m²/day, a medium-light plant needs 8–15, and a high-light plant needs 20–30 or more. If your grow light delivers 200 PPFD and you run it for 12 hours, your plants receive a DLI of 8.64 mol/m²/day — adequate for most tropical foliage plants.

For a practical assessment without a PAR meter, use the inverse square law as a rough guide: doubling the distance between a light source and a plant reduces PPFD to approximately one-quarter. This means positioning matters enormously. Most home grow lights perform best positioned 12–24 inches above the plant canopy, and adjusting height by a few inches can meaningfully change the light dose your plants receive.

The <a href="https://www.rhs.org.uk" target="_blank" rel="noopener noreferrer" class="text-[#2D6B1A] underline">Royal Horticultural Society</a> notes that light is the nutrient most often overlooked by new plant owners.`,
        },
        {
          heading: 'Placement and Distance Guidelines',
          body: `Where you position your grow light relative to plants is as important as which light you choose. Placing a powerful light too close causes light stress — symptoms include bleached or yellowing leaves, upward curling, and in extreme cases, brown scorched patches on foliage. Positioning a light too far away simply means your plants do not receive enough photons to drive meaningful photosynthesis.

General distance guidelines by light type: clip-on and USB-powered pot lights should be 4–8 inches from the plant canopy for adequate intensity. Small panel-style grow lights and LED bulbs in standard fixtures work best at 12–18 inches. High-power pendant grow lights like the Soltech Aspect should be positioned 18–24 inches above the canopy at full power, or can be raised higher if their intensity is too strong for low-light species.

Pay attention to how your plants respond in the first two to three weeks after installing a grow light. Compact, dense new growth with good colour saturation indicates appropriate light levels. Pale, stretched (etiolated) new growth with long gaps between nodes indicates insufficient light — move the light closer or increase the photoperiod. Bleaching, curling, or crispy patches signal too much intensity — increase distance or reduce the photoperiod. Making small, incremental adjustments and observing the response is more effective than trying to calculate exact values from the outset.`,
        },
        {
          heading: 'Setting Up a Timer Schedule',
          body: `Consistency is the key to grow light success. Plants thrive on predictable light-dark cycles that align with their natural environment, and the easiest way to deliver this consistency is with a timer. Most plant owners find that running grow lights from 7 or 8 AM through 7 or 8 PM — a 12-hour photoperiod — works well for the majority of tropical houseplants. This mimics a natural tropical day length and provides enough total light energy (DLI) for most medium-light species.

For high-light plants like succulents, fruiting herbs, or seedlings, extending the photoperiod to 14–16 hours compensates for lower-intensity lights. Never run grow lights for the full 24 hours — plants require a dark period for cellular respiration processes that only occur in the absence of light.

Simple mechanical plug-in timers are reliable and inexpensive, but smart plugs offer additional flexibility: you can adjust schedules from your phone, set gradual on/off ramps to simulate sunrise and sunset, and monitor energy consumption. Some grow lights include built-in timers with memory functions that retain the schedule after power outages — a useful feature if your home experiences frequent power interruptions.

In winter, when natural daylight hours are short, consider extending your grow light schedule by 2–4 hours to compensate for the reduced natural light contribution. In summer, you may be able to shorten the artificial photoperiod if your plants receive meaningful natural light from nearby windows.`,
        },
        {
          heading: 'Best Grow Lights by Room Type',
          body: `Different rooms in a low-light apartment present different installation constraints, and the best grow light depends as much on where it needs to go as on what plants you are growing.

**Living rooms and main spaces** benefit from grow lights that double as attractive light fixtures. The Soltech Solutions Aspect pendant is the premier choice here — it hangs from a ceiling hook and emits a warm 2700K light that looks like premium home lighting while delivering genuine grow-light performance. Visitors will not identify it as a plant light.

**Shelving units and plant racks** are ideal for T5 strip lights (like the Barrina 6-pack) mounted under each shelf level. This setup creates a fully-lit grow rack that maximises vertical space, with each shelf level acting as both a plant surface and a light source for the shelf below. The linkable design means the entire rack can run from a single outlet.

**Desk and bedside plants** are best served by compact clip-on or gooseneck lights that attach to a shelf or the pot itself. These lights target individual plants with supplemental light without illuminating the entire room.

**Kitchen herb gardens** work well with under-cabinet LED strip lights or small panel lights that mount flush to the underside of overhead cabinets. Combined with a timer, these create a fully automated herb-growing setup that requires minimal attention.`,
        },
      ]

    case 'how-to-mix-your-own-potting-soil-at-home':
      return [
        {
          heading: 'Why Mix Your Own Potting Soil?',
          body: `Pre-bagged potting mixes are convenient, but they represent a compromise — formulated for a generic "most plants" scenario that may not perfectly suit the specific plants you grow. Mixing your own potting medium gives you precise control over drainage, moisture retention, aeration, pH, and nutrient content. Once you buy the component ingredients in bulk, the cost per litre of custom mix is significantly lower than buying premium pre-bagged products.

Beyond cost, custom mixing allows you to optimise for specific plant families: aroids like monsteras and philodendrons thrive in a chunky, aerated mix with high bark content; succulents and cacti need an almost entirely inorganic, fast-draining medium; orchids require a completely different substrate of bark, perlite, and charcoal. No single commercial mix achieves all of these goals. Understanding the building blocks of a great potting mix is one of the most valuable pieces of horticultural knowledge an indoor plant enthusiast can develop.`,
        },
        {
          heading: 'The Core Ingredients: What Each Component Does',
          body: `Every good potting mix is built from a small number of key components, each serving a specific function.

**Peat moss** is a traditional base component that holds moisture well, provides a slightly acidic pH (around 5.5–6.5), and has a light, fluffy texture when fresh. Its main drawback is that it is a non-renewable resource harvested from peat bogs, and it becomes hydrophobic (water-repellent) when it dries out completely.

**Coconut coir** is the modern, sustainable alternative to peat. Made from the fibrous husks of coconuts, it has a similar moisture-holding capacity to peat but is renewable, has a more neutral pH, and rewets readily after drying. It is the preferred base material in contemporary premium mixes.

**Perlite** is expanded volcanic glass that looks like white polystyrene beads. It does not hold water or nutrients, but it creates air pockets in the mix that prevent compaction and ensure roots have access to oxygen between waterings. Adding 20–30% perlite to most mixes dramatically improves drainage and aeration.

**Bark** (orchid bark or pine bark) adds structure and long-lasting aeration to mixes. Unlike perlite, bark does break down slowly over time, contributing minor organic nutrients. Coarser bark chunks are used in aroid and orchid mixes to create the chunky, open texture these plants need.

**Pumice** is a lightweight volcanic rock that provides drainage and aeration without breaking down over time — a more permanent option than perlite in long-term potting mixes for succulents and cacti.

**Worm castings** are the richest organic soil amendment available, providing a complex array of nutrients, beneficial microorganisms, and humic acids that improve soil biology and plant health. Adding 10–20% worm castings to any mix provides a gentle, long-lasting nutrient charge.`,
        },
        {
          heading: 'Five Ready-to-Use Recipes',
          body: `The following five mixes cover the most common indoor plant growing scenarios. All ratios are by volume.

**Tropical Foliage Mix (monsteras, pothos, philodendrons):** 40% coconut coir, 30% perlite, 20% orchid bark, 10% worm castings. This creates a well-draining, aerated mix that retains adequate moisture for tropical plants without staying waterlogged.

**Succulent & Cactus Mix:** 40% coarse sand or perlite, 30% pumice, 20% coco coir, 10% inorganic topsoil. The high inorganic content ensures rapid drainage and prevents the root rot these plants are extremely susceptible to.

**Aroid Mix (anthuriums, calatheas, prayer plants):** 40% coco coir, 25% perlite, 25% orchid bark, 10% worm castings. Slightly higher moisture retention than the tropical foliage mix, while still maintaining the aeration aroids need.

**Orchid Mix:** 60% medium orchid bark, 20% perlite, 10% horticultural charcoal, 10% sphagnum moss. The bark-dominant mix mimics the epiphytic growing conditions orchids experience in their natural habitat, where roots cling to tree bark with excellent airflow.

**Seed-Starting Mix:** 50% coco coir, 30% fine perlite, 20% vermiculite. Fine-textured, sterile, and moisture-retentive — ideal for germination and early seedling development before transplanting into a more nutrient-rich mix.`,
        },
        {
          heading: 'pH and Nutrients: Getting the Balance Right',
          body: `Soil pH determines which nutrients are available to plants at the root level. Most tropical houseplants perform best in a slightly acidic range of pH 5.5–6.5, where the full spectrum of macro and micronutrients is accessible. At pH levels above 7.0, iron, manganese, and zinc become chemically locked in the soil, producing deficiency symptoms — typically yellowing between leaf veins (chlorosis) — even when these nutrients are physically present.

Coconut coir has a pH of approximately 5.5–6.5, making it an ideal base material. Peat moss typically runs slightly more acidic at 3.5–5.0. If you are using a peat-heavy mix, add a small amount of garden lime (dolomitic limestone) at around 1 tablespoon per gallon of mix to raise the pH to the appropriate range. Worm castings have a neutral pH of around 7.0 and help buffer extreme swings in either direction.

Nutrient content in a custom mix depends on your organic amendment choices. Worm castings provide gentle all-round nutrition. Slow-release granular fertilizers like Osmocote can be incorporated at mixing time to provide a sustained nutrient charge for the first three to six months. Avoid adding large quantities of fast-release synthetic fertilizers to a new mix — the concentrated salts can burn the fine feeder roots of recently potted plants.`,
        },
        {
          heading: 'Mixing and Storage Tips',
          body: `Mixing potting medium is a messy job best done outdoors or over a large tarp. Wear a dust mask when working with dry peat, coco coir, or perlite — the fine particles can irritate lungs if inhaled. Dampen the coco coir brick or block before mixing: dry coco coir is extremely compressed and takes several minutes to absorb water and expand to its full volume.

Use a clean bucket, tub, or wheelbarrow for mixing. Add the components in order from largest volume to smallest, mixing thoroughly between additions. The final mix should feel light and fluffy — not dense or compacted. When you squeeze a handful, it should hold together briefly but crumble when prodded. If it holds together and stays wet, add more perlite. If it falls apart completely and feels dry even after moistening, add more coir.

Store unused custom mix in a sealed container or a tightly closed bag to prevent it from drying out, attracting fungus gnats, or being contaminated by outdoor soil. A well-sealed mix stays viable for six to twelve months. Before using stored mix, give it a thorough inspection and smell test — any sour or ammonia-like odour indicates anaerobic decomposition and the mix should be discarded or composted.`,
        },
      ]

    case 'watering-guide-how-often-and-how-much':
      return [
        {
          heading: 'The Golden Rule: Water the Plant, Not the Schedule',
          body: `The single most important principle of indoor plant watering is that there is no universal watering schedule. Every combination of plant species, pot size, pot material, potting mix, ambient temperature, humidity, season, and light level creates a unique set of conditions that determines when water is needed. A pothos in a 4-inch terracotta pot in a warm, sunny room may need water every three days. The same pothos in a 6-inch glazed ceramic pot in a cool, dim corner may be perfectly happy with water every ten days.

Overwatering — maintaining chronically wet soil that suffocates roots — is the leading cause of houseplant death, responsible for more losses than any pest, disease, or environmental factor. The symptoms of overwatering are ironically similar to those of underwatering: wilting, yellowing leaves, and poor growth — which is why so many plant owners overwater further in response to a struggling plant, accelerating its decline.

Understanding your plant's actual water needs, rather than following a fixed schedule, is the skill that separates successful plant owners from those who struggle to keep plants alive. Two reliable assessment methods — the finger test and pot weight — are simple to learn and apply to virtually every plant type.`,
        },
        {
          heading: 'The Finger Test and Pot Weight Method',
          body: `The finger test is the simplest and most accessible way to assess soil moisture. Push your index finger into the potting mix to the first knuckle — approximately 1 inch. If the soil feels moist and clings to your finger, watering can wait. If it feels dry and barely any soil adheres to your finger, it is time to water. For moisture-sensitive plants like succulents, extend the test to the second knuckle (2 inches) — these plants should be allowed to dry out completely between waterings.

The pot weight method is even more reliable, especially for large pots where the top inch of soil can be dry while deeper layers remain moist. Lift the pot immediately after thorough watering and note how heavy it feels. Then lift it a few days later — as the soil dries, the pot becomes progressively lighter. Once the pot feels noticeably light (typically 60–70% lighter than when freshly watered), it is ready to water again. With practice, you will develop an intuitive feel for each pot in your collection.

Moisture meters provide a precise reading of soil moisture at root depth and remove all guesswork. They are particularly useful for pots that are difficult to lift or feel, such as large floor plants. Look for a two- or three-probe model with a clearly calibrated scale — the cheap single-probe versions often give inaccurate readings and are not worth the investment.`,
        },
        {
          heading: 'How to Water Properly: The Technique Matters',
          body: `Good watering technique means more than just applying water. The goal is to water thoroughly and infrequently — saturating the entire root zone, then allowing the mix to dry to the appropriate level before watering again. This cycle promotes deep root growth and prevents the shallow, surface-level rooting that develops when plants are watered with a few small sips at the top of the pot.

When you water, apply water slowly and evenly across the surface of the soil until it flows freely from the drainage holes at the bottom. This typically takes much more water than most people expect — for a 6-inch pot, you may need to apply 400–600ml of water to achieve thorough saturation. Allow the pot to drain completely before returning it to its saucer or cachepot. Never let a pot sit in standing water for more than 30 minutes, as this creates the waterlogged conditions that cause root rot.

Bottom watering — setting a pot in a tray of water and allowing the mix to absorb moisture upward through the drainage holes — is an excellent technique for moisture-loving plants. It ensures the entire root zone receives water, avoids getting water on sensitive foliage (important for plants like African violets), and helps prevent fungus gnat infestations by keeping the soil surface dry. Bottom water for 20–30 minutes, then drain completely before returning to the display position.`,
        },
        {
          heading: 'Seasonal Watering Adjustments',
          body: `Plant water needs are not static throughout the year. During spring and summer, longer days, higher light intensity, warmer temperatures, and active growth all increase a plant's water demand significantly. During autumn and winter, reduced light, cooler temperatures, and slower or dormant growth dramatically decrease the amount of water plants need. Many houseplant problems — root rot, yellowing lower leaves, mushy stems — spike in winter when owners continue their summer watering schedule into the shorter, darker months.

As a practical guide: in spring and summer, assess most plants every 3–5 days and water when needed. In autumn, extend the assessment interval to 5–7 days. In winter, assess weekly or even every 10 days, and expect to water roughly half as often as in summer. Plants near radiators or heating vents dry out faster than average; those near cold draughty windows may slow down even more.

Some plants — particularly those with corms, bulbs, or tuberous root systems — benefit from a deliberate dry rest period in winter. Elephant's ear (Alocasia), caladiums, and some begonias can be almost completely dried out through winter before resuming watering in spring. This mimics the natural dry season these plants experience in their native tropical environments.`,
        },
        {
          heading: 'Water Quality: Does It Matter?',
          body: `Tap water quality varies enormously by region and can affect plant health in a number of ways. Most municipal tap water contains chlorine or chloramine to kill pathogens. Chlorine dissipates readily if water is left in an open container for 24 hours; chloramine does not. For sensitive plants like carnivorous species, some orchids, and tropical plants from soft-water environments, filtered water or collected rainwater is significantly better than tap water.

Hard water — water with high calcium and magnesium content — can leave white mineral deposits on soil surfaces and, over time, raise the pH of your potting mix as salts accumulate. This gradually reduces the availability of some micronutrients. Periodically flushing pots with large volumes of water helps leach accumulated salts. Adding a small amount of citric acid to your watering can at one occasional application per month (approximately 1/4 teaspoon per litre) acidifies hard water slightly and helps dissolve salt deposits.

Temperature matters too. Cold water straight from the tap can shock the root systems of tropical plants, causing temporary wilting and slowing growth. Allow water to reach room temperature before applying it to sensitive species, or fill your watering can the evening before your next watering session. Rainwater is ideal for most houseplants — it is naturally soft, at ambient temperature, and slightly acidic.`,
        },
        {
          heading: 'Watering Preferences for Common Houseplants',
          body: `Different plant species have dramatically different water needs, and understanding these preferences prevents both over- and underwatering.

**High water demand (water when top inch is dry):** Peace lily, ferns, calatheas, carnivorous plants, most herbs, impatiens. These plants prefer consistently moist — not wet — soil and suffer quickly from drought.

**Moderate water demand (water when top 2 inches are dry):** Pothos, philodendrons, monsteras, tradescantia, most tropical foliage plants. These are forgiving of occasional drying and occasional mild overwatering.

**Low water demand (water when almost completely dry):** Snake plants, ZZ plants, cast iron plant, dracaena. These naturally store water in their roots, rhizomes, or leaves and rot readily in consistently moist conditions.

**Very low water demand (allow to dry completely):** All succulents, cacti, echeverias, aloes, haworthias. Water thoroughly then allow the soil to dry completely — all the way through — before watering again. In winter, monthly watering may be sufficient.

**Seasonal variation:** Many bulbous and tuberous plants — Alocasia, caladiums, cannas — naturally go dormant in winter and should be kept nearly dry during this period, resuming regular watering only when new growth emerges in spring.`,
        },
      ]

    case 'when-and-how-to-repot-your-houseplants':
      return [
        {
          heading: 'Signs Your Plant Needs Repotting',
          body: `Knowing when a plant needs repotting is a skill that comes with observation and experience. The most obvious sign is roots emerging from the drainage holes at the bottom of the pot — this indicates the root ball has completely filled the container and has nowhere further to expand. However, by the time you can see roots at the drainage holes, the plant has often been rootbound for some time.

Other signs include: soil that dries out extremely rapidly between waterings (within a day or two of thorough watering), indicating the root mass has displaced most of the potting medium; visible roots circling the soil surface or pushing up above the soil line; a plant that wilts quickly despite regular watering; roots that have broken or deformed the pot (more common in fast-growing tropical species than most people expect); and slowed or stunted growth in spring and summer when the plant should be actively pushing new leaves.

Not all of these signs necessarily indicate rootboundness — some can indicate disease, pests, or cultural problems. Cross-reference by gently sliding the plant from its pot and examining the root ball. Healthy, actively growing roots are white or cream-coloured and firm. If the root ball is a tightly wound mass with little visible potting mix, repotting is needed. If roots are brown, soft, or mushy, root rot is present and treatment requires removing affected roots, not simply upsizing the pot.`,
        },
        {
          heading: 'Choosing the Right New Pot Size',
          body: `The most common repotting mistake is upsizing too aggressively — choosing a pot that is dramatically larger than the current one in the belief that "more room to grow" is always beneficial. In reality, an oversized pot creates a large volume of moist potting mix around a small root ball, and those outer zones stay wet long after the roots have accessed the water in their immediate vicinity. This creates ideal conditions for fungal growth, bacterial pathogens, and root rot.

The correct approach is to increase pot diameter by 1–2 inches for most houseplants at each repotting. A plant in a 4-inch pot should move to a 5 or 6-inch pot; a plant in a 6-inch pot to an 8-inch pot. This incremental approach gives roots room to expand into fresh potting mix without being surrounded by excessive wet soil.

There are exceptions: some plants perform better when slightly pot-bound. Peace lilies bloom more prolifically when their roots fill the container. Moth orchids (Phalaenopsis) prefer snug pots where their roots can grip the sides of the container. Snake plants (Sansevieria) and ZZ plants (Zamioculcas zamiifolia) are slow-growing and rarely need upsizing more than every three to four years. For these species, pot size maintenance — repotting into the same size container with fresh potting mix — is often more beneficial than upsizing.`,
        },
        {
          heading: 'The Step-by-Step Repotting Process',
          body: `Successful repotting follows a clear sequence that minimises root damage and transplant shock. Water the plant thoroughly 24–48 hours before repotting — moist soil holds together better than dry soil, reducing root damage during removal. Do not water immediately before repotting, as excessively wet soil can become compacted and heavy, increasing handling difficulty.

Prepare the new pot by adding a layer of fresh potting mix to the base — enough that the top of the root ball will sit approximately 1 inch below the pot rim when placed inside. Remove the old plastic nursery pot (squeeze the sides gently to loosen); for rigid ceramic pots, run a thin knife around the inside edge to release the root ball.

Hold the base of the plant stem and the root ball together and slide it free. Gently shake off loose potting mix from the outer root zone. If the roots are circling or matted, gently tease the outer root mass apart with your fingers to encourage outward root growth in the new pot. Trim any visibly dead, brown, or mushy roots with sterilised scissors.

Position the root ball in the centre of the new pot and fill around the sides with fresh potting mix, firming gently to eliminate large air pockets. Do not pack the mix tightly — roots need oxygen. Water the newly potted plant thoroughly until water drains freely, then place it in its growing spot. Keep it out of direct sun for one to two weeks as it recovers from the handling stress.`,
        },
        {
          heading: 'Managing Transplant Shock',
          body: `Transplant shock is a period of stress following repotting during which a plant may wilt, drop leaves, or slow growth as its root system adjusts to the new environment. It is normal and temporary in healthy plants, typically lasting one to three weeks depending on species and the degree of root disturbance during repotting.

To minimise transplant shock, work quickly during the repotting process to limit the time roots are exposed to air. Avoid fertilizing newly repotted plants for four to six weeks — fresh potting mix provides adequate nutrition, and adding fertilizer to a stressed root system risks salt burn. Keep the plant out of direct sunlight immediately after repotting; bright indirect light is ideal during recovery. Maintain consistent moderate moisture in the new potting mix — neither waterlogging nor allowing it to dry out completely.

Some plant owners use seaweed extract or kelp-based plant tonics at half strength when watering newly repotted plants. The natural cytokinins and alginic acid in seaweed products are believed to support root regeneration and reduce stress response, though scientific evidence for this effect specifically in container plants is limited. The practice appears harmless and many experienced growers swear by it.`,
        },
        {
          heading: 'Root Pruning: When and Why',
          body: `For some plants, the goal of repotting is not to upsize the container but to maintain the plant at its current size while refreshing the potting medium and root health. This technique — root pruning combined with soil refreshment — is standard practice in bonsai cultivation and applicable to any plant you want to maintain at a specific size.

Root pruning involves removing the outer 20–30% of the root mass using sharp, sterilised scissors or pruning shears. Cut cleanly through the root ball around the sides and bottom, removing a layer of roots and attached old potting mix. Then repot the plant into the same size container with fresh potting mix around the trimmed root ball. The plant will regenerate the pruned root mass within a few weeks.

Root pruning is also the appropriate response when repotting reveals root rot. In this case, remove all soft, brown, or mushy roots until only healthy white tissue remains. Sterilise your tools between cuts to avoid spreading the pathogen. Pot the treated plant into a clean container with fresh potting mix that has excellent drainage, and allow it to recover in bright indirect light with careful watering — letting the mix almost completely dry between waterings to prevent the rot from recurring.`,
        },
        {
          heading: 'The Best Time of Year to Repot',
          body: `Spring — specifically the period from late March through May in the Northern Hemisphere — is the optimal time to repot most houseplants. As day length increases and light intensity improves, plants shift from their winter resting state into active growth. Repotting at this time allows plants to direct their new growth energy into regenerating roots in the fresh potting mix, recovering from repotting stress, and pushing vigorous new foliage.

Repotting in late autumn or winter is generally inadvisable. Plants in their resting phase grow slowly, root regeneration takes much longer, and the combination of winter stress and repotting stress can be difficult for sensitive species. The main exception is if a plant is suffering from root rot, which requires immediate intervention regardless of season.

Summer repotting is possible for most species but requires extra attention to keeping the plant out of direct sun during recovery, as heat combined with repotting stress can cause significant wilting. Water the plant more frequently than usual in the two weeks following a summer repot, as the smaller root mass in fresh dry potting mix cannot access moisture as efficiently until new roots establish.

Emergency repotting — triggered by root rot, severe rootboundness, or pest contamination of the potting mix — should be done immediately regardless of season. The stress of intervention is always preferable to continued deterioration in damaged potting conditions.`,
        },
      ]

    case 'best-fertilizers-for-indoor-plants-explained':
      return [
        {
          heading: 'Decoding NPK: What the Three Numbers Mean',
          body: `Every fertilizer sold commercially carries a three-number label — for example, 10-10-10 or 5-1-1 — that indicates the percentage by weight of the three primary macronutrients: Nitrogen (N), Phosphorus (P), and Potassium (K). This system, mandated by agricultural regulations in most countries, allows growers to make direct comparisons between different fertilizer products and select the right nutrient balance for their plants' current needs.

**Nitrogen (N)** is the primary driver of vegetative growth — leaf production, stem elongation, and the green colour that comes from chlorophyll. Plants actively growing new foliage in spring and summer have high nitrogen demands. Symptoms of nitrogen deficiency include pale, yellowish leaves and slow, weak growth. High-nitrogen fertilizers (the first number is highest) are ideal during the vegetative growth phase.

**Phosphorus (P)** supports root development, energy transfer within the plant, flowering, and seed formation. Plants in bud or bloom stage, or those being established in new potting mix with developing root systems, benefit from phosphorus emphasis. Deficiency symptoms include purple or reddish discolouration of lower leaves and poor flowering.

**Potassium (K)** — often called potash — is involved in overall plant health, water-use efficiency, disease resistance, and the movement of nutrients throughout the plant. It does not directly drive specific growth phases but is essential for the plant to function at its best. Deficiency causes brown, scorched leaf margins starting with older leaves.

A balanced fertilizer like 10-10-10 or 20-20-20 supports all of these functions equally, making it versatile across plant types and growth stages. Specialist formulas with unequal ratios — like a high-phosphorus bloom booster or a nitrogen-forward foliage fertilizer — allow you to target specific growth goals.`,
        },
        {
          heading: 'Slow-Release vs. Liquid Fertilizers',
          body: `The form of fertilizer you choose determines how quickly nutrients become available to plants, how often you need to apply, and how much precision you have over nutrient delivery.

**Slow-release granular fertilizers** are coated pellets that release nutrients gradually over a period of three to nine months, triggered by soil moisture and temperature. Once applied — typically by scattering on the soil surface or mixing into potting mix — they require no further attention until reapplication is needed. Osmocote is the benchmark product in this category, with its six-month feeding window and balanced 14-14-14 NPK. Slow-release fertilizers are ideal for low-maintenance plant care and for providing a consistent background nutrient level.

**Liquid fertilizers** dissolve in water and are applied as part of the regular watering routine. They provide immediately available nutrients that are absorbed within hours of application, making them ideal for correcting deficiencies quickly, delivering targeted nutrition during specific growth phases, or boosting plants during heavy fruiting or flowering. The trade-off is that liquid nutrients wash through the potting mix with each watering, requiring regular reapplication — typically every one to four weeks during the growing season.

**Fertilizer spikes** combine some convenience of slow-release products with root-zone delivery. Pushed into the soil at the drip line, they slowly dissolve and deliver nutrients directly at root depth. Jobe's Organics spikes are our top pick in this format.

Many experienced plant collectors use a hybrid approach: slow-release granules as a base to ensure consistent background nutrition, with occasional liquid fertilizer applications for targeted supplementation during active growth or flowering pushes.`,
        },
        {
          heading: 'Organic vs. Synthetic Fertilizers',
          body: `The organic vs. synthetic fertilizer debate involves trade-offs in nutrient availability, soil biology, environmental impact, and convenience.

**Synthetic fertilizers** contain nutrients in immediately soluble, plant-available form. They work faster, provide precise nutrient ratios, and are generally more cost-effective per nutrient unit. The main disadvantages are risk of over-application (fertilizer burn) if used at excessive rates, potential salt accumulation in container potting mixes over time, and no contribution to soil microbiology — they feed the plant, not the soil.

**Organic fertilizers** derive their nutrients from natural sources: fish meal, seaweed, bone meal, worm castings, composted plant or animal material. Their nutrients are typically bound in organic molecules that must be broken down by soil microorganisms before becoming plant-available. This means they are slower-acting than synthetics but provide sustained release over longer periods. The decomposition process also feeds beneficial soil microbes, improving the biological health of the potting medium. Certified organic products (OMRI-listed) are suitable for edible crops and chemical-free growing programmes.

A practical consideration for indoor plant growing specifically: organic liquid fertilizers made from fish meal or fish hydrolysate have a strong fishy odour that can be objectionable indoors. If you prefer organic feeding but want to avoid the smell, granular organic products like Espoma Plant-Tone or Jobe's Organics Fertilizer Spikes are odourless and suitable for indoor use.`,
        },
        {
          heading: 'How to Fertilize Without Causing Burn',
          body: `Fertilizer burn — the brown, crispy leaf margins and tips caused by excess fertilizer salts in the root zone — is a common and avoidable problem. It results from applying fertilizer at too high a concentration, too frequently, or to plants that are already stressed from other causes.

The most reliable way to avoid fertilizer burn is to follow the manufacturer's recommended rate and frequency, or even apply at half the recommended strength more frequently — especially with liquid fertilizers. Diluting to half strength and applying every two weeks delivers the same total nutrient load as full strength monthly while reducing the salt concentration peak in the soil at any given time.

Always water thoroughly before applying a liquid fertilizer, ensuring the soil is moist rather than dry. Applying fertilizer to a dry root zone increases the risk of salt damage as there is insufficient moisture to dilute the fertilizer solution. Never fertilize a recently repotted plant — fresh potting mix provides adequate initial nutrition, and stressed roots are more vulnerable to salt damage.

If you have over-fertilized — signalled by sudden leaf tip browning, wilting despite adequate moisture, or visible white salt crust on the soil surface — flush the potting mix immediately. Apply three to four times the pot's volume of clean water in succession, allowing it to drain fully between each application. This leaches accumulated salts from the root zone and typically allows the plant to begin recovering within a week.`,
        },
        {
          heading: 'Seasonal Fertilizing Schedule',
          body: `Matching your fertilizing schedule to your plant's active growth cycle is the key to effective nutrient management without salt accumulation or nutrient waste.

**Early spring (February–March):** Resume fertilizing after the winter rest period with a half-strength liquid feed. Plants are beginning to stir from dormancy, and their nutrient demands are low initially. A balanced formula (equal NPK) is ideal at this stage.

**Late spring through summer (April–September):** This is the peak growing season for most tropical houseplants. Increase fertilizing to every two to four weeks with a balanced or nitrogen-forward formula during the vegetative growth phase. Shift to a phosphorus-forward formula if plants are in bud or bloom.

**Early autumn (September–October):** Begin reducing fertilizing frequency as growth naturally slows. One application every four to six weeks is appropriate for most plants during this transitional period.

**Winter (November–January):** Most tropical houseplants enter a partial or full resting phase during winter's reduced light and shorter days. Stop fertilizing entirely or reduce to a single very dilute application per month to avoid salt accumulation in dormant root systems. Cacti and succulents should receive no fertilizer in winter.

**Year-round exceptions:** Fast-growing plants under strong artificial lighting or in heated conservatories may maintain growth year-round and can be fertilized throughout at reduced winter rates. Always observe your plant's growth rate and adjust accordingly — a plant that is visibly pushing new leaves every two weeks in January under grow lights has the same nutrient demands as one growing in summer outdoors.`,
        },
        {
          heading: 'Specialist Fertilizers for Specific Plant Groups',
          body: `While a balanced fertilizer works for most houseplants, certain plant groups benefit significantly from formulas tailored to their specific nutritional requirements.

**Orchid fertilizers** are formulated with very low phosphorus and moderate nitrogen and potassium, often with high calcium and magnesium to support the specific needs of epiphytic orchids grown in bark-based media. Weekly dilute application ("weakly weekly") during active growth is the standard approach, using a formula specifically marked for orchids.

**Cactus and succulent fertilizers** have a very low nitrogen content to avoid the soft, weak growth that excess nitrogen causes in drought-adapted plants. A low-nitrogen, phosphorus-emphasised formula applied once in spring and once in early summer is typically sufficient.

**Flowering houseplant boosters** with high phosphorus ratios (such as Scotts Super Bloom at 12-55-6) are applied specifically during the bud initiation and flowering phase to maximise bloom number and longevity. They are not suitable as all-season fertilizers because the extremely high phosphorus can cause micronutrient lockout if used continuously.

**African violet fertilizers** typically run at a ratio around 14-12-14, providing slightly higher potassium relative to phosphorus than a standard balanced formula, which supports the prolific repeat-blooming habit of these plants. African violets in active growth appreciate feeding every two weeks during their blooming season.`,
        },
      ]

    default:
      return [
        {
          heading: 'Introduction',
          body: 'Expert guidance for indoor plant success.',
        },
      ]
  }
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-[#D4881E] text-sm">
      {'★'.repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? '½' : ''}
    </span>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)
  if (!guide) return <div className="p-16 text-center text-[#7A6E65]">Guide not found.</div>

  const otherGuides = guides.filter((g) => g.slug !== slug)
  const relatedCat = categories.find((c) => c.slug === guide.category)
  const relatedProducts = products
    .filter((p) => p.category === guide.category)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
  const topPick = relatedProducts[0]
  const sections = getGuideSections(slug)

  const affiliateDisclosure = (
    <p className="italic text-[#7A6E65] text-xs border border-dashed border-[#C8BFB0] rounded p-3 mb-6">
      ToolsLeafSpotHome participates in the Amazon Associates Program. We earn a commission on purchases made through our links at no extra cost to you.
    </p>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* ── LEFT COLUMN ── */}
        <article className="lg:col-span-2">
          {/* Breadcrumb */}
          <nav className="text-[#7A6E65] text-sm mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-[#2D6B1A] hover:underline">Home</Link>
            <span>›</span>
            <Link href="/buying-guides" className="hover:text-[#2D6B1A] hover:underline">Buying Guides</Link>
            <span>›</span>
            <span className="text-[#1C1208]">{guide.title}</span>
          </nav>

          {/* Cover image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
            <Image
              src={guide.coverImage}
              alt={guide.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mt-4 mb-2">
            {relatedCat && (
              <span className="bg-[#2D6B1A] text-white text-xs px-3 py-1 rounded-full">
                {relatedCat.shortName}
              </span>
            )}
            <span className="text-[#7A6E65] text-sm">{guide.readTime} min read</span>
            <span className="text-[#7A6E65] text-sm">
              {new Date(guide.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-4xl text-[#1C1208] mt-2 mb-4 leading-tight">{guide.title}</h1>

          {/* Disclosure top */}
          {affiliateDisclosure}

          {/* Guide body */}
          <div className="prose prose-stone max-w-none">
            {sections.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="font-serif text-2xl text-[#1C1208] mb-3">{section.heading}</h2>
                <div
                  className="text-[#4A3F35] leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: section.body
                      .split('\n\n')
                      .map((para) => `<p>${para}</p>`)
                      .join(''),
                  }}
                />
              </div>
            ))}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-10">
              <h3 className="font-serif text-xl text-[#1C1208] mb-4">Related Products</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedProducts.map((p) => (
                  <div key={p.id} className="bg-white border border-[#E0D8CC] rounded-xl p-4 flex flex-col">
                    <div className="w-full h-[160px] bg-white flex items-center justify-center p-2 rounded">
                      <img src={p.imageUrl} alt={p.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <span className="bg-[#2D6B1A] text-white text-xs px-2 py-0.5 rounded-full inline-block mt-3 self-start">
                      #{p.rank} {p.badge}
                    </span>
                    <p className="font-serif font-semibold text-[#1C1208] line-clamp-2 mt-2 text-sm">{p.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Stars rating={p.rating} />
                      <span className="text-[#7A6E65] text-xs">({p.reviews.toLocaleString()})</span>
                    </div>
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="btn-primary mt-auto pt-4 text-center block text-xs"
                    >
                      View on Amazon →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disclosure bottom */}
          <div className="mt-10">{affiliateDisclosure}</div>
        </article>

        {/* ── RIGHT SIDEBAR ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* More Guides */}
            <div>
              <div className="bg-[#2C2218] text-white p-3 rounded-t-lg">
                <p className="text-xs font-bold uppercase tracking-widest">More Guides</p>
              </div>
              <div className="bg-white border border-[#E0D8CC] rounded-b-lg p-4 space-y-2">
                {otherGuides.map((g) => (
                  <div key={g.slug}>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="text-sm text-[#2D6B1A] hover:underline"
                    >
                      {g.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pick */}
            {topPick && (
              <div>
                <div className="bg-[#2C2218] text-white p-3 rounded-t-lg">
                  <p className="text-xs font-bold uppercase tracking-widest">Top Pick</p>
                </div>
                <div className="bg-white border border-[#E0D8CC] rounded-b-lg p-4">
                  <div className="w-full h-[180px] bg-white flex items-center justify-center p-2 rounded mb-3">
                    <img src={topPick.imageUrl} alt={topPick.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="font-serif font-semibold text-[#1C1208] text-sm mb-1">{topPick.name}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Stars rating={topPick.rating} />
                    <span className="text-[#7A6E65] text-xs">({topPick.reviews.toLocaleString()})</span>
                  </div>
                  <a
                    href={topPick.affiliateUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
