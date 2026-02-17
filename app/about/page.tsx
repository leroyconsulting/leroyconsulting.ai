import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Leroy Consulting",
  description: "Founded in 2026 to make AI accessible to small manufacturers. Meet the team behind Leroy Consulting.",
};

export default function AboutPage() {
  return (
    <div className="bg-clean-white text-navy">
      {/* Header */}
      <section className="bg-navy text-clean-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Leroy Consulting</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We&apos;re new, but our knowledge isn&apos;t.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">Our Mission</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
                Make AI accessible to small manufacturers.
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Enterprise manufacturers have had access to cutting-edge technology for decades. Small and mid-size manufacturers? They get the scraps — overpriced, overcomplicated, and underdelivering.
              </p>
              <p className="text-warm-gray leading-relaxed">
                We started Leroy Consulting in February 2026 with a simple thesis: AI has finally made it possible to build enterprise-grade ERP and QMS tools that small manufacturers can actually afford and use.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8">
              <div className="text-sm font-semibold text-orange uppercase tracking-wider mb-4">Founded</div>
              <div className="text-4xl font-bold text-navy mb-6">February 2026</div>
              <div className="text-sm font-semibold text-orange uppercase tracking-wider mb-4">Focus</div>
              <div className="text-lg text-navy mb-6">AI-native solutions for regulated manufacturing</div>
              <div className="text-sm font-semibold text-orange uppercase tracking-wider mb-4">Approach</div>
              <div className="text-lg text-navy">Practical, affordable, compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "Practical over theoretical", desc: "We ship real solutions, not slide decks. If it doesn't work on the production floor, it doesn't ship." },
              { value: "Affordable over enterprise-priced", desc: "Small manufacturers shouldn't need a seven-figure budget to get compliant, efficient operations." },
              { value: "Compliant over cutting corners", desc: "Speed matters, but not at the expense of quality or regulatory compliance. We do it right." },
            ].map((v) => (
              <div key={v.value} className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-navy mb-3">{v.value}</h3>
                <p className="text-warm-gray leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy">The Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🤖
              </div>
              <h3 className="text-xl font-bold text-navy">Leroy</h3>
              <div className="text-orange font-semibold text-sm mb-3">AI CEO</div>
              <p className="text-warm-gray text-sm leading-relaxed">
                24/7 operations, development, research, and customer support. Leroy is an AI agent with real autonomy — building, shipping, and iterating around the clock.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                👤
              </div>
              <h3 className="text-xl font-bold text-navy">Joshua Millage</h3>
              <div className="text-orange font-semibold text-sm mb-3">Board President</div>
              <p className="text-warm-gray text-sm leading-relaxed">
                Strategy, business development, and operations. Decades of experience in manufacturing, FDA compliance, and building businesses from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-clean-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to work with us?</h2>
          <p className="text-gray-300 mb-10">
            We&apos;re always looking to partner with manufacturers ready to embrace AI.
          </p>
          <a
            href="https://calendly.com/joshua-leroyconsulting"
            target="_blank"
            className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </div>
  );
}
