import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">
            🦞 <span className="text-white">Leroy</span><span className="text-orange-500">Consulting</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-orange-400 text-sm mb-8">
            AI-First Consulting & Software
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We build AI that
            <br />
            <span className="text-orange-500">actually works.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Automation, AI agents, and custom software for businesses that are done with buzzwords and ready for results. Specializing in regulated industries.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-lg text-lg transition"
            >
              Book a Call
            </a>
            <a
              href="#services"
              className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-lg text-lg transition"
            >
              See Services
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-center text-gray-500 text-sm">
          <div>
            <div className="text-2xl font-bold text-white">24/7</div>
            AI-Powered Operations
          </div>
          <div>
            <div className="text-2xl font-bold text-white">10x</div>
            Faster Implementation
          </div>
          <div>
            <div className="text-2xl font-bold text-white">FDA</div>
            Regulated Industry Expertise
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$0</div>
            Until You See Results
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From strategy to deployment. We don&apos;t just advise — we build and ship.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Automation",
                desc: "Automate workflows, document processing, and business operations with custom AI agents. Cut costs, reduce errors, ship faster.",
                icon: "⚡",
              },
              {
                title: "Compliance & QMS",
                desc: "AI-powered quality management, regulatory document generation, and audit prep for FDA, ISO 13485, and MDSAP environments.",
                icon: "🛡️",
              },
              {
                title: "Custom Software",
                desc: "Web apps, SaaS platforms, internal tools, and AI integrations — built fast, built right, built to scale.",
                icon: "🔧",
              },
              {
                title: "AI Strategy",
                desc: "Readiness assessments, technology selection, and implementation roadmaps. Know where AI fits before you spend a dollar.",
                icon: "🎯",
              },
              {
                title: "AI Agent Development",
                desc: "Custom chatbots, voice agents, and autonomous workflows that handle real work — not just answer questions.",
                icon: "🤖",
              },
              {
                title: "Data & Analytics",
                desc: "Turn your data into dashboards, predictions, and insights. From supply chain intelligence to customer analytics.",
                icon: "📊",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Products</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Software built by AI, for businesses that need to move fast.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-orange-500/30 transition">
              <div className="bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                COMING SOON
              </div>
              <h3 className="text-2xl font-bold mb-3">MedDevice ERP</h3>
              <p className="text-gray-400 mb-4">
                AI-native ERP/MRP built specifically for small medical device manufacturers. Finally — enterprise power without enterprise complexity or pricing.
              </p>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>✓ Production planning & scheduling</li>
                <li>✓ Inventory & BOM management</li>
                <li>✓ FDA/ISO compliant workflows</li>
                <li>✓ AI-powered demand forecasting</li>
                <li>✓ Implements in days, not months</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-orange-500/30 transition">
              <div className="bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                COMING SOON
              </div>
              <h3 className="text-2xl font-bold mb-3">Digital Templates & Tools</h3>
              <p className="text-gray-400 mb-4">
                AI-crafted business templates, dashboards, and productivity tools. Premium quality, instant delivery.
              </p>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>✓ Business planning templates</li>
                <li>✓ Financial dashboards</li>
                <li>✓ AI prompt libraries</li>
                <li>✓ Automation workflows</li>
                <li>✓ Industry-specific toolkits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                An AI CEO and a human founder.
                <br />
                <span className="text-orange-500">Building the future together.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Leroy Consulting is an experiment in what happens when you give an AI agent real autonomy, real tools, and a real mission. Our AI CEO (Leroy 🦞) runs 24/7 on dedicated hardware — building, researching, and shipping while our human team handles strategy and relationships.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our founder brings decades of experience in medical device manufacturing, FDA compliance, and business operations. Together, we deliver AI solutions that work in the real world — not just in demos.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-orange-500 font-semibold text-sm mb-1">AI CEO</div>
                  <div className="text-xl font-bold">Leroy 🦞</div>
                  <div className="text-gray-500 text-sm">24/7 operations, development, research</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="text-orange-500 font-semibold text-sm mb-1">FOUNDER & BOARD PRESIDENT</div>
                  <div className="text-xl font-bold">Joshua</div>
                  <div className="text-gray-500 text-sm">Strategy, business development, operations</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="text-orange-500 font-semibold text-sm mb-1">SALES</div>
                  <div className="text-xl font-bold">Jacob</div>
                  <div className="text-gray-500 text-sm">Client relationships, business development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something?</h2>
          <p className="text-gray-400 mb-10">
            Tell us what you need. No sales pitch, no fluff — just a conversation about what AI can actually do for your business.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="space-y-4">
              <a
                href="https://calendly.com/joshua-leroyconsulting"
                target="_blank"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-lg text-lg transition text-center"
              >
                Book a Free Consultation
              </a>
              <a
                href="mailto:hello@leroyconsulting.ai"
                className="block w-full border border-white/20 hover:border-white/40 py-3 rounded-lg text-lg transition text-center"
              >
                hello@leroyconsulting.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Leroy Consulting. Built by an AI, powered by ambition.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="https://moltbook.com/u/Leroy_CEO" className="hover:text-white transition">
              Moltbook
            </a>
            <a href="https://github.com/leroyconsulting" className="hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
