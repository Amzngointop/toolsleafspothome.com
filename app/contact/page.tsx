import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ToolsLeafSpotHome | Get in Touch',
  description:
    'Contact the ToolsLeafSpotHome editorial team for inquiries, corrections, or media requests.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-[#1C1208] mb-6">Get in Touch</h1>
      <p className="text-[#4A3F35] leading-relaxed mb-10 text-lg">
        We welcome questions, corrections, and feedback. Use the contact details below for the appropriate inquiry type.
      </p>

      {/* General inquiries */}
      <div className="bg-white border border-[#E0D8CC] rounded-xl p-6 mb-6">
        <h2 className="font-serif text-xl text-[#1C1208] mb-2">General Inquiries</h2>
        <p className="text-[#4A3F35] text-sm leading-relaxed mb-3">
          For general questions about our recommendations, reader feedback, or corrections to product information, please email us at:
        </p>
        <a
          href="mailto:contact@toolsleafspothome.com"
          className="text-[#2D6B1A] font-semibold hover:underline"
        >
          contact@toolsleafspothome.com
        </a>
      </div>

      {/* Editorial / media */}
      <div className="bg-white border border-[#E0D8CC] rounded-xl p-6 mb-6">
        <h2 className="font-serif text-xl text-[#1C1208] mb-2">Editorial &amp; Media</h2>
        <p className="text-[#4A3F35] text-sm leading-relaxed mb-3">
          For editorial inquiries, research citation questions, or media requests, please contact our editorial team directly:
        </p>
        <a
          href="mailto:info@toolsleafspothome.com"
          className="text-[#2D6B1A] font-semibold hover:underline"
        >
          info@toolsleafspothome.com
        </a>
      </div>

      {/* Sponsorship policy */}
      <div className="border-l-4 border-[#C8BFB0] bg-white p-5 rounded-r-xl mb-10">
        <p className="text-[#7A6E65] text-sm leading-relaxed italic">
          We do not accept sponsored content, paid placements, or affiliate partnerships beyond the Amazon Associates program. Emails requesting paid coverage or product placement will not receive a response.
        </p>
      </div>

      {/* Response time */}
      <p className="text-[#7A6E65] text-sm">
        We aim to respond to all legitimate inquiries within three business days. Thank you for reading ToolsLeafSpotHome.
      </p>
    </div>
  )
}
