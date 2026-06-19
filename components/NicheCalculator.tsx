'use client'

import { useState } from 'react'
import Link from 'next/link'

const plantOptions = [
  { value: 'cactus', label: '🌵 Cactus & Succulents' },
  { value: 'tropical', label: '🌿 Tropical Houseplants' },
  { value: 'flowering', label: '🌸 Flowering Plants' },
  { value: 'herbs', label: '🌱 Herbs & Vegetables' },
  { value: 'ferns', label: '🍀 Ferns & Shade Plants' },
]

const lightOptions = [
  { value: 'bright-direct', label: '☀️ Bright direct sun (south window)' },
  { value: 'bright-indirect', label: '🌤 Bright indirect (east/west window)' },
  { value: 'low', label: '☁️ Low light (north window)' },
  { value: 'none', label: '🏠 No natural light' },
]

type Recommendation = {
  level: string
  hours: string
  recommendation: string
  needsLight: boolean
}

function getRecommendation(plantType: string, lightLevel: string): Recommendation {
  if (plantType === 'cactus' && (lightLevel === 'bright-direct' || lightLevel === 'bright-indirect')) {
    return {
      level: 'LOW NEED',
      hours: '8-10 hrs/day',
      recommendation: 'Cacti and succulents thrive in direct sun and rarely need supplemental lighting if you have a south-facing window.',
      needsLight: false,
    }
  }
  if (plantType === 'cactus' && (lightLevel === 'low' || lightLevel === 'none')) {
    return {
      level: 'SUPPLEMENTAL',
      hours: '10-12 hrs/day',
      recommendation: 'Without natural light, a low-wattage LED placed 12 inches above will keep your succulents from etiolating.',
      needsLight: true,
    }
  }
  if (plantType === 'tropical' && (lightLevel === 'bright-direct' || lightLevel === 'bright-indirect')) {
    return {
      level: 'MEDIUM',
      hours: '12-14 hrs/day',
      recommendation: 'Tropical plants love bright indirect light. A full-spectrum panel set to 12-14 hours will replicate ideal tropical conditions.',
      needsLight: true,
    }
  }
  if (plantType === 'tropical' && (lightLevel === 'low' || lightLevel === 'none')) {
    return {
      level: 'HIGH',
      hours: '14-16 hrs/day',
      recommendation: 'Low-light conditions stress tropical plants. A quality LED panel 12-18 inches above the canopy running 14-16 hours daily is essential.',
      needsLight: true,
    }
  }
  if (plantType === 'flowering' && (lightLevel === 'bright-direct' || lightLevel === 'bright-indirect')) {
    return {
      level: 'MEDIUM-HIGH',
      hours: '14-16 hrs/day',
      recommendation: 'Flowering plants need generous light to bloom. Supplement your natural light with a full-spectrum grow light for best results.',
      needsLight: true,
    }
  }
  if (plantType === 'flowering' && (lightLevel === 'low' || lightLevel === 'none')) {
    return {
      level: 'HIGH',
      hours: '16 hrs/day',
      recommendation: 'Flowering plants cannot bloom in low light. A high-output LED panel running 16 hours per day is necessary for healthy flowering.',
      needsLight: true,
    }
  }
  if (plantType === 'herbs') {
    return {
      level: 'HIGH',
      hours: '14-16 hrs/day',
      recommendation: 'Herbs always need abundant light regardless of your windows. A T5 or LED strip light 6 inches above keeps them productive year-round.',
      needsLight: true,
    }
  }
  if (plantType === 'ferns' && (lightLevel === 'bright-direct' || lightLevel === 'bright-indirect')) {
    return {
      level: 'LOW',
      hours: 'No grow light needed',
      recommendation: 'Ferns are perfect shade plants. Your natural bright indirect light is more than enough — no grow light required.',
      needsLight: false,
    }
  }
  if (plantType === 'ferns' && (lightLevel === 'low' || lightLevel === 'none')) {
    return {
      level: 'LOW-MEDIUM',
      hours: '10-12 hrs/day',
      recommendation: 'Ferns can handle low light but appreciate a gentle boost. A soft-spectrum LED on a 10-12 hour timer will keep them lush.',
      needsLight: true,
    }
  }
  return {
    level: 'MEDIUM',
    hours: '12-14 hrs/day',
    recommendation: 'A full-spectrum LED panel on a 12-14 hour timer is a great starting point for most houseplants.',
    needsLight: true,
  }
}

const progressWidths: Record<string, string> = {
  'LOW NEED': 'w-[25%]',
  'LOW': 'w-[25%]',
  'SUPPLEMENTAL': 'w-[40%]',
  'LOW-MEDIUM': 'w-[40%]',
  'MEDIUM': 'w-[50%]',
  'MEDIUM-HIGH': 'w-[65%]',
  'HIGH': 'w-[85%]',
}

export default function NicheCalculator() {
  const [plantType, setPlantType] = useState<string | null>(null)
  const [lightLevel, setLightLevel] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const result = showResult && plantType && lightLevel ? getRecommendation(plantType, lightLevel) : null

  const handleFindLight = () => {
    if (plantType && lightLevel) {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setPlantType(null)
    setLightLevel(null)
    setShowResult(false)
  }

  return (
    <section className="bg-[#2C2218] text-white py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white font-serif text-3xl text-center mb-2">
          Find the Right Light for Your Plant
        </h2>
        <p className="text-[#C8BFB0] text-center mb-10">
          Answer two quick questions to get a personalized grow light recommendation.
        </p>

        <div className="mb-8">
          <p className="text-[#C8BFB0] text-sm uppercase tracking-widest mb-3">
            What type of plant do you have?
          </p>
          <div className="flex flex-wrap gap-3">
            {plantOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setPlantType(opt.value)
                  setShowResult(false)
                }}
                className={`border rounded-full px-4 py-2 text-sm cursor-pointer transition-all ${
                  plantType === opt.value
                    ? 'bg-[#2D6B1A] border-[#2D6B1A] text-white'
                    : 'border-[#C8BFB0] text-[#C8BFB0] hover:bg-[#2D6B1A] hover:border-[#2D6B1A] hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#C8BFB0] text-sm uppercase tracking-widest mb-3">
            How much natural light does your space get?
          </p>
          <div className="flex flex-wrap gap-3">
            {lightOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setLightLevel(opt.value)
                  setShowResult(false)
                }}
                className={`border rounded-full px-4 py-2 text-sm cursor-pointer transition-all ${
                  lightLevel === opt.value
                    ? 'bg-[#2D6B1A] border-[#2D6B1A] text-white'
                    : 'border-[#C8BFB0] text-[#C8BFB0] hover:bg-[#2D6B1A] hover:border-[#2D6B1A] hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleFindLight}
            disabled={!plantType || !lightLevel}
            className="bg-[#2D6B1A] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#1A3D0E] transition disabled:opacity-50"
          >
            FIND MY LIGHT SETUP →
          </button>
        </div>

        {result && (
          <div className="bg-[#1A3D0E] rounded-xl p-6 mt-8 max-w-2xl mx-auto transition-all">
            <p className="text-[#D4881E] font-bold text-lg uppercase mb-1">{result.level}</p>
            <p className="text-white text-3xl font-serif mb-2">{result.hours}</p>
            <div className="bg-[#0D2007] rounded h-3 w-full mb-4">
              <div
                className={`bg-[#2D6B1A] h-3 rounded transition-all ${progressWidths[result.level] ?? 'w-[50%]'}`}
              />
            </div>
            <p className="text-[#C8BFB0] text-sm mt-4">{result.recommendation}</p>
            {result.needsLight && (
              <div className="mt-6">
                <Link
                  href="/best/grow-lights-and-led-panels"
                  className="inline-block bg-[#2D6B1A] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#1A3D0E] transition"
                >
                  SEE RECOMMENDED GROW LIGHTS →
                </Link>
              </div>
            )}
            <button
              onClick={handleReset}
              className="mt-4 text-[#C8BFB0] text-xs underline hover:text-white transition block"
            >
              Start over
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
