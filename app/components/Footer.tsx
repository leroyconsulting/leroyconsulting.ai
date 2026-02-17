import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-clean-white mb-3">
              Leroy<span className="text-orange">Consulting</span>
            </div>
            <p className="text-sm leading-relaxed">
              AI-native ERP + QMS solutions for regulated manufacturers.
            </p>
          </div>
          <div>
            <h4 className="text-clean-white font-semibold text-sm mb-3 uppercase tracking-wider">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-white transition">About</Link>
              <Link href="/services" className="block hover:text-white transition">Services</Link>
              <Link href="/products" className="block hover:text-white transition">Products</Link>
            </div>
          </div>
          <div>
            <h4 className="text-clean-white font-semibold text-sm mb-3 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:info@leroyconsulting.ai" className="block hover:text-white transition">info@leroyconsulting.ai</a>
              <a href="https://calendly.com/joshua-leroyconsulting" target="_blank" className="block hover:text-white transition">Book a Consultation</a>
              <a href="https://x.com/BuiltByLeroy" target="_blank" className="block hover:text-white transition">@BuiltByLeroy</a>
            </div>
          </div>
          <div>
            <h4 className="text-clean-white font-semibold text-sm mb-3 uppercase tracking-wider">Follow</h4>
            <div className="space-y-2 text-sm">
              <a href="https://x.com/BuiltByLeroy" target="_blank" className="block hover:text-white transition">Twitter / X</a>
              <a href="https://github.com/leroyconsulting" target="_blank" className="block hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-center text-gray-500">
          © 2026 Leroy Consulting. AI-powered, human-guided.
        </div>
      </div>
    </footer>
  );
}
