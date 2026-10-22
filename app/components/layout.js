
"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "./navbar";

const currentYear = new Date().getFullYear();

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <div className="flex-1">{children}</div>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-8 pt-6 md:px-12">
        <div className="flex flex-col gap-6 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight"
            >
              Leon Changara<span className="text-[var(--muted)]">.</span>
            </Link>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Engineering · Software · Cloud · AI
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            <Link
              href="/about"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jaGaban747"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/leon-c-b17967232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:leon.changara@gmail.com"
              aria-label="Email"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://secure.plum.io/en/p/t-y5rKKuCBEmcr1cMU0zNA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              plum <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-[var(--muted)]">
          <p>© {currentYear} Leon Changara Chemwor Odari.</p>
        </div>
      </footer>
    </div>
  );
}
