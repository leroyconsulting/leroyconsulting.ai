"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-clean-white">
          Leroy<span className="text-orange">Consulting</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/joshua-leroyconsulting"
            target="_blank"
            className="bg-orange hover:bg-orange-light text-white font-semibold px-5 py-2 rounded-lg text-sm transition"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white transition py-2"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/joshua-leroyconsulting"
            target="_blank"
            className="block bg-orange hover:bg-orange-light text-white font-semibold px-5 py-3 rounded-lg text-sm transition text-center mt-2"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </nav>
  );
}
