import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services | Leroy Consulting",
  description: "Strategic AI consulting for manufacturing companies. From assessment to implementation to fractional AI leadership.",
};

const serviceTiers = [
  {
    title: "Strategic Assessment",
    price: "$5,000",
    duration: "2-hour deep dive",
    description: "Perfect for manufacturing leaders who want to understand their AI opportunities before making any investment.",
    features: [
      "Current-state analysis of your operations",
      "AI opportunity mapping across all departments", 
      "Prioritized implementation roadmap",
      "ROI estimates for each opportunity",
      "Technology stack recommendations",
      "Executive summary report"
    ],
    cta: "Get Your AI Roadmap",
    popular: false,
  },
  {
    title: "AI Implementation Sprint",
    price: "$15,000-25,000",
    duration: "6-week sprint",
    description: "We pick your highest-ROI AI opportunity and build it from concept to deployment in 6 weeks.",
    features: [
      "Sprint planning & stakeholder alignment",
      "Full solution development & testing",
      "Integration with existing systems",
      "User training & documentation",
      "30-day post-deployment support",
      "Performance monitoring setup"
    ],
    cta: "Start Your Sprint",
    popular: true,
  },
  {
    title: "Fractional AI Officer",
    price: "$5,000-8,000/mo",
    duration: "Ongoing retainer",
    description: "Get C-level AI strategy and hands-on implementation support without the full-time hire.",
    features: [
      "Monthly strategy sessions & planning",
      "Hands-on implementation work",
      "Team training & capability building",
      "Vendor evaluation & management",
      "Board-level reporting & metrics",
      "24/7 strategic advisory access"
    ],
    cta: "Hire Your AI Officer",
    popular: false,
  },
];

const whyUsPoints = [
  {
    title: "Operators, Not Theorists",
    description: "We've run production floors, managed inventory, and dealt with FDA audits. Our AI recommendations come from real manufacturing experience.",
    icon: "🏭",
  },
  {
    title: "Build, Don't Just Advise",
    description: "We don't hand you a PowerPoint and walk away. We roll up our sleeves and build working solutions that go live in your operations.",
    icon: "🔧",
  },
  {
    title: "ROI-First Approach",
    description: "Every AI initiative is measured by real business impact: cost savings, quality improvements, and operational efficiency gains.",
    icon: "📈",
  },
  {
    title: "Manufacturing-Specific",
    description: "We understand your unique challenges: regulatory compliance, quality systems, inventory management, and production scheduling.",
    icon: "⚙️",
  },
];

export default function ConsultingPage() {
  return (
    <div className="bg-clean-white text-navy">
      {/* Hero */}
      <section className="bg-navy text-clean-white py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 text-orange text-sm font-medium mb-8">
            AI Strategy & Implementation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The AI Team Your Manufacturing Company
            <br />
            <span className="text-orange">Can't Afford to Hire — Until Now</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Get strategic AI leadership and hands-on implementation without the full-time salaries. Built by operators who understand manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/joshua-leroyconsulting"
              target="_blank"
              className="bg-orange hover:bg-orange-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition"
            >
              Book Your Strategy Call
            </a>
            <a
              href="#services"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg transition"
            >
              View Service Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section id="services" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Engagement Model</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Whether you need a strategic roadmap, rapid implementation, or ongoing AI leadership — we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier) => (
              <div
                key={tier.title}
                className={`relative bg-white border rounded-2xl p-8 hover:shadow-lg transition-all ${
                  tier.popular 
                    ? "border-orange shadow-lg ring-2 ring-orange/20" 
                    : "border-gray-200 hover:border-orange/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">{tier.title}</h3>
                  <div className="text-3xl font-bold text-orange mb-1">{tier.price}</div>
                  <div className="text-sm text-warm-gray">{tier.duration}</div>
                </div>
                
                <p className="text-warm-gray text-center mb-6 leading-relaxed">
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-orange mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-warm-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://calendly.com/joshua-leroyconsulting"
                  target="_blank"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition ${
                    tier.popular
                      ? "bg-orange hover:bg-orange-light text-white"
                      : "border-2 border-navy hover:bg-navy hover:text-white text-navy"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Manufacturers Choose Us</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              We're not traditional consultants. We're operators who've lived your challenges and built AI solutions that actually work in manufacturing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyUsPoints.map((point) => (
              <div key={point.title} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{point.title}</h3>
                <p className="text-warm-gray leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                quote: "The strategic assessment saved us from investing in the wrong AI tools. Their roadmap was spot-on.",
                author: "Client Success Story",
                role: "Coming Soon",
                company: "Manufacturing Partner"
              },
              { 
                quote: "Six weeks from concept to deployment. Our quality inspection process is now 80% automated.",
                author: "Implementation Sprint",
                role: "Coming Soon", 
                company: "Manufacturing Partner"
              },
              { 
                quote: "Having a fractional AI officer gives us C-level strategy without the C-level salary. Perfect for our size.",
                author: "Ongoing Partnership",
                role: "Coming Soon",
                company: "Manufacturing Partner"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <p className="text-navy italic mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="text-sm text-warm-gray">
                  <div className="font-semibold text-navy">{testimonial.author}</div>
                  <div>{testimonial.role}</div>
                  <div className="text-orange">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-warm-gray text-sm mt-8 italic">
            Client testimonials will be added as we complete our first engagements.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6 bg-navy text-clean-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your AI Strategy?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call. We'll discuss your challenges, identify opportunities, and outline a path forward — no sales pitch, just real insights from people who've built manufacturing AI solutions.
          </p>
          <a
            href="https://calendly.com/joshua-leroyconsulting"
            target="_blank"
            className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
          >
            Book Your Free Strategy Call
          </a>
          <p className="text-gray-400 text-sm mt-4">
            30 minutes • No commitment • Manufacturing-focused insights
          </p>
        </div>
      </section>
    </div>
  );
}