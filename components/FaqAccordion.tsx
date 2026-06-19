'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-[#E0D8CC] rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left text-[#1C1208] font-semibold text-sm hover:bg-[#F5F0E8] transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#7A6E65] flex-shrink-0 ml-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-[#4A3F35] text-sm leading-relaxed border-t border-dashed border-[#C8BFB0] pt-3">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
