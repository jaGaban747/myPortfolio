
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto w-full max-w-7xl px-6 py-5 md:px-12 md:py-6">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-base font-semibold tracking-tight text-[var(--foreground)]"
        >
          Leon Changara<span className="text-[var(--muted)]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="mailto:leon.changara@gmail.com"
            className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:bg-[var(--accent)] md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-6 right-6 top-full mt-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-lg md:hidden"
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--border)] py-4 text-sm text-[var(--muted)] transition-colors last:border-b-0 hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="mailto:leon.changara@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-medium"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
