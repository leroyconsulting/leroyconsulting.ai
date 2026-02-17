import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Leroy Consulting",
  description: "AI automation guides, ERP+QMS platform, and consulting services for regulated manufacturers.",
};

export default function ProductsPage() {
  return (
    <div className="bg-clean-white text-navy">
      {/* Header */}
      <section className="bg-navy text-clean-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tools, guides, and platforms to modernize your manufacturing operations.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* AI Automation Guide */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
            <div className="bg-orange/10 text-orange text-xs font-bold px-3 py-1 rounded-full inline-block w-fit mb-4">
              AVAILABLE NOW
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">AI Automation Guide</h2>
            <div className="text-3xl font-bold text-orange mb-4">$39</div>
            <p className="text-warm-gray leading-relaxed mb-6 flex-grow">
              A practical, no-fluff guide to implementing AI automation in manufacturing. Covers workflow analysis, tool selection, ROI calculation, and step-by-step implementation.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-warm-gray">
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> 50+ page actionable guide</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> ROI calculator templates</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> Implementation checklists</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> Instant digital delivery</li>
            </ul>
            <a
              href="https://gumroad.com"
              target="_blank"
              className="block bg-orange hover:bg-orange-light text-white font-semibold py-3 rounded-lg transition text-center"
            >
              Buy on Gumroad
            </a>
          </div>

          {/* ERP+QMS Platform */}
          <div className="bg-white border-2 border-orange rounded-2xl p-8 flex flex-col relative">
            <div className="bg-navy text-clean-white text-xs font-bold px-3 py-1 rounded-full inline-block w-fit mb-4">
              COMING SOON
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">ERP + QMS Platform</h2>
            <div className="text-3xl font-bold text-navy mb-4">Coming Q3 2026</div>
            <p className="text-warm-gray leading-relaxed mb-6 flex-grow">
              AI-native ERP and QMS built from the ground up for small regulated manufacturers. Production planning, quality management, and compliance — all in one platform.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-warm-gray">
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> Production & inventory management</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> Document control & CAPA</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> FDA & ISO 13485 compliant</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> AI-powered forecasting</li>
            </ul>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-navy placeholder:text-warm-gray focus:outline-none focus:border-orange"
              />
              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3 rounded-lg transition"
              >
                Join the Waitlist
              </button>
            </form>
          </div>

          {/* Consulting */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
            <div className="bg-orange/10 text-orange text-xs font-bold px-3 py-1 rounded-full inline-block w-fit mb-4">
              AVAILABLE NOW
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">Consulting Services</h2>
            <div className="text-3xl font-bold text-navy mb-4">Custom</div>
            <p className="text-warm-gray leading-relaxed mb-6 flex-grow">
              Hands-on consulting for AI readiness, ERP migration, QMS automation, and custom AI development. We work alongside your team to deliver results.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-warm-gray">
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> AI Readiness Assessment</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> ERP Implementation</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> QMS Automation</li>
              <li className="flex items-start gap-2"><span className="text-orange">✓</span> Training & Support</li>
            </ul>
            <Link
              href="/services"
              className="block bg-orange hover:bg-orange-light text-white font-semibold py-3 rounded-lg transition text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-clean-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions about our products?</h2>
          <p className="text-gray-300 mb-10">
            Book a call and we&apos;ll walk you through what&apos;s right for your operation.
          </p>
          <a
            href="https://calendly.com/joshua-leroyconsulting"
            target="_blank"
            className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
