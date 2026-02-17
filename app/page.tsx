export default function Home() {
  return (
    <div className="bg-clean-white text-navy">
      {/* Hero */}
      <section className="bg-navy text-clean-white py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 text-orange text-sm font-medium mb-8">
            Built for Regulated Manufacturers
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            AI-Native ERP + QMS
            <br />
            <span className="text-orange">for Regulated Manufacturers</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Stop fighting your systems. Start using AI that understands compliance, quality, and production — out of the box.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/joshua-leroyconsulting"
              target="_blank"
              className="bg-orange hover:bg-orange-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy">
            Your ERP was built in 1999.
            <br />
            <span className="text-orange">Your competitors are using AI.</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Most small manufacturers are stuck with bloated, expensive ERP systems that weren&apos;t designed for them — or they&apos;re running on spreadsheets and prayer. There&apos;s a better way.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Deliver</h2>
          <p className="text-warm-gray text-center mb-16 max-w-2xl mx-auto">
            Three pillars. One integrated platform. Zero compromises.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ERP That Fits",
                desc: "Production planning, inventory, BOM management, and scheduling — built for small manufacturers, not adapted from enterprise bloatware.",
                icon: "📦",
              },
              {
                title: "QMS Built In",
                desc: "Document control, CAPA, audit trails, and regulatory workflows for FDA 21 CFR Part 820, ISO 13485, and MDSAP — without the six-figure price tag.",
                icon: "✅",
              },
              {
                title: "AI Integration",
                desc: "Demand forecasting, automated document generation, intelligent routing, and predictive quality — AI that works inside your workflows, not alongside them.",
                icon: "🤖",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-orange/30 transition-all"
              >
                <div className="text-4xl mb-5">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-navy">{card.title}</h3>
                <p className="text-warm-gray leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-navy">Trusted by Forward-Thinking Manufacturers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Finally, an ERP that doesn't require a PhD to operate.", author: "Coming Soon", role: "Pilot Customer" },
              { quote: "The QMS automation alone saved us weeks of audit prep.", author: "Coming Soon", role: "Pilot Customer" },
              { quote: "Affordable and compliant. Exactly what we needed.", author: "Coming Soon", role: "Pilot Customer" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <p className="text-navy italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="text-sm text-warm-gray">
                  <span className="font-semibold">{t.author}</span> · {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by manufacturers */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy">
            Built by manufacturers,
            <br />
            <span className="text-orange">for manufacturers.</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed mb-10">
            We&apos;ve been on the production floor. We know what it&apos;s like to fight an ERP that doesn&apos;t understand your process. That&apos;s why we built something different — AI-native from day one, designed for teams under 200 people.
          </p>
          <a
            href="/about"
            className="inline-block border-2 border-navy hover:bg-navy hover:text-white text-navy font-semibold px-8 py-3 rounded-lg transition"
          >
            Our Story
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-navy text-clean-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to modernize your operations?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Book a free 30-minute consultation. No pitch deck — just a real conversation about your challenges and how AI can help.
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
