import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-bold text-[#1C1208] mb-4">Privacy Policy</h1>
      <p className="text-[#7A6E65] text-sm mb-10">Last updated: January 2026</p>

      <div className="prose prose-stone max-w-none space-y-8 text-[#4A3F35]">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">1. Information We Collect</h2>
          <p>
            toolsleafspothome.com is a static editorial website. We do not run user accounts, collect form submissions, or store personal data on our own servers. The only data collected is through third-party services described below.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">2. Third-Party Services</h2>
          <p>
            We use standard analytics (e.g. Google Analytics) to understand aggregate traffic patterns — pages visited, session duration, and referring sites. This data is anonymised and not linked to individual identities. We do not sell this data.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">3. Amazon Affiliate Links</h2>
          <p>
            This site participates in the Amazon Services LLC Associates Program. When you click an Amazon link on our site and make a purchase, Amazon may set cookies to track the referral. Amazon's privacy practices are governed by{' '}
            <a href="https://www.amazon.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] hover:underline">
              Amazon's Privacy Notice
            </a>
            . We receive a small commission from qualifying purchases — at no extra cost to you.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">4. Cookies</h2>
          <p>
            We do not set first-party cookies. Third-party services (analytics, embedded content) may set cookies according to their own policies.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">5. External Links</h2>
          <p>
            Our site contains links to Amazon and other external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies before providing personal information.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">6. Children's Privacy</h2>
          <p>
            This website is not directed at children under 13 and we do not knowingly collect data from children.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">7. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Continued use of the site after any changes constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1C1208] mb-3">8. Contact</h2>
          <p>
            If you have questions about this policy, please{' '}
            <a href="/contact" className="text-[#2D6B1A] hover:underline">contact us</a>.
          </p>
        </section>
      </div>
    </main>
  )
}
