import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Leroy Consulting",
  description: "AI readiness, ERP implementation, QMS automation, and custom AI solutions for regulated manufacturers.",
};

const services = [
  {
    title: "AI Readiness Assessment",
    desc: "A comprehensive evaluation of your current systems, data, and processes to identify where AI will deliver the highest ROI — before you spend a dollar on implementation.",
    who: "Manufacturers exploring AI but unsure where to start.",
    deliverables: ["Current-state analysis", "AI opportunity map", "Prioritized implementation roadmap", "Budget estimates & timeline"],
    icon: "🎯",
  },
  {
    title: "ERP Implementation & Migration",
    desc: "Whether you're moving off spreadsheets or migrating from a legacy ERP, we'll get you onto a modern, AI-native system without disrupting production.",
    who: "Small to mid-size manufacturers outgrowing their current systems.",
    deliverables: ["Data migration plan", "System configuration", "User training", "Go-live support & optimization"],
    icon: "📦",
  },
  {
    title: "QMS Automation",
    desc: "Automate document control, CAPA workflows, audit trails, and regulatory submissions. Stay compliant without drowning in paperwork.",
    who: "FDA-regulated manufacturers (medical devices, pharma, food & beverage).",
    deliverables: ["Automated document control", "CAPA workflow setup", "Audit-ready reporting", "Regulatory submission templates"],
    icon: "✅",
  },
  {
    title: "Custom AI Solution Development",
    desc: "Bespoke AI solutions — from demand forecasting to automated inspection to intelligent document generation — built specifically for your workflows.",
    who: "Manufacturers with unique processes that off-the-shelf tools can't handle.",
    deliverables: ["Custom AI model or agent", "Integration with existing systems", "Testing & validation", "Ongoing support"],
    icon: "🤖",
  },
  {
    title: "Training & Change Management",
    desc: "Technology is only as good as the people using it. We train your team and manage the transition so adoption actually happens.",
    who: "Any team implementing new technology or AI-powered workflows.",
    deliverables: ["Role-based training sessions", "Quick-reference guides", "Change management plan", "30/60/90 day follow-up"],
    icon: "📚",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-clean-white text-navy">
      {/* Header */}
      <section className="bg-navy text-clean-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From assessment to implementation to training. We don&apos;t just advise — we build, deploy, and support.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/3 flex-shrink-0">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">{s.title}</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-warm-gray leading-relaxed mb-4">{s.desc}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-orange uppercase tracking-wider">Who it&apos;s for</span>
                  <p className="text-navy mt-1">{s.who}</p>
                </div>
                <div className="mb-6">
                  <span className="text-sm font-semibold text-orange uppercase tracking-wider">What you get</span>
                  <ul className="mt-2 space-y-1">
                    {s.deliverables.map((d) => (
                      <li key={d} className="text-warm-gray flex items-start gap-2">
                        <span className="text-orange mt-0.5">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://calendly.com/joshua-leroyconsulting"
                  target="_blank"
                  className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Discuss This Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-clean-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Start with a free consultation. We&apos;ll help you figure out the highest-impact first step.
          </p>
          <a
            href="https://calendly.com/joshua-leroyconsulting"
            target="_blank"
            className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
