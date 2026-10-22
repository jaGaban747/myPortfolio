
"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-20 md:px-12 md:pt-28">
      <section className="flex min-h-[70vh] flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] ring-1 ring-black/10" />
          Electrical & Electronics Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-8xl"
        >
          Building at the intersection of{" "}
          <span className="underline decoration-[var(--accent)] decoration-[8px] underline-offset-[8px] md:decoration-[12px] md:underline-offset-[12px]">
            technology
          </span>{" "}
          and possibility.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Exploring cloud infrastructure, DevOps, software engineering, and
            AI to turn ideas into useful products and practical solutions.
          </p>

          <a
            href="/projects"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-medium transition-transform duration-200 hover:-translate-y-1"
          >
            Explore my work
            <ArrowDownRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
