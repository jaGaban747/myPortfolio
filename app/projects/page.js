
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Github,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Award,
  Clock,
  Database,
  CheckCircle,
  Terminal,
} from "lucide-react";

const project = {
  title: "MSE Insights Copilot",
  subtitle: "Microsoft Data + AI Kenya Hackathon",
  description:
    "An AI-powered financial insights platform designed to help Kenyan micro and small enterprises explore their business data and make more informed decisions.",
  longDescription:
    "Developed during the Microsoft Data + AI Kenya Hackathon, the project combines financial analytics with a conversational AI experience, helping users explore business information through dashboards and natural-language queries.",
  role: "Lead Developer on a three-person team",
  event: "Hack Together: The Microsoft Data + AI Kenya Hack",
  period: "March – April 2025",
  technologies: [
    "Microsoft Fabric",
    "Azure OpenAI",
    "Python",
    "Streamlit",
    "Power BI",
  ],
  github: "https://github.com/jaGaban747/MSE-Insights",
  demo: "https://youtu.be/6mh-nzDwF2c",
  screenshot: "/mse-insights-screenshot.png",
  features: [
    "Income and expense summary dashboard",
    "Daily cash-flow trend visualisation",
    "AI assistant for natural-language queries",
    "Semantic search for transactions",
    "Microsoft Fabric Lakehouse integration",
  ],
  challenges: [
    "Working within limited Fabric capacity",
    "Managing a tight hackathon timeline",
    "Designing an intuitive experience for non-technical users",
  ],
  learnings: [
    "Integrating tools across the Microsoft Fabric ecosystem",
    "Working with AI-powered financial analytics",
    "Designing dashboards for business decision-making",
    "Exploring natural-language interfaces for data",
  ],
};

function DetailList({ title, icon: Icon, items }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 font-medium">
        <Icon size={18} />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pt-20">
      <section className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          Selected work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.05em] md:text-7xl"
        >
          Ideas, experiments
          <br />
          and{" "}
          <span className="underline decoration-[var(--accent)] decoration-[8px] underline-offset-4 md:decoration-[12px]">
            things I've built.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
        >
          A growing collection of work across software, AI, data, and
          engineering. Each project is an opportunity to learn, experiment,
          and solve a practical problem.
        </motion.p>
      </section>

      <motion.article
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl border border-[var(--border)]"
      >
        <div className="flex flex-col gap-3 border-b border-[var(--border)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium">
              Featured project
            </span>
            <span className="text-sm text-[var(--muted)]">
              {project.period}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <Award size={16} />
            Hackathon project
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden bg-[#e9e8df] md:min-h-[480px]">
            <Image
              src={project.screenshot}
              alt={`Screenshot of ${project.title}`}
              width={1200}
              height={800}
              className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-sm text-[var(--muted)]">{project.subtitle}</p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              {project.title}
            </h2>

            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>

            <div className="mt-7">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Terminal size={17} />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
              >
                <Github size={17} />
                View on GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
              >
                Watch demo
                <ArrowUpRight size={15} />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="mt-8 flex w-fit items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {expanded ? "Show less" : "Explore project details"}
              <ChevronDown
                size={17}
                className={`transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="project-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-[var(--border)] px-6 py-8 md:px-8 md:py-10">
                <div className="mb-10 max-w-3xl">
                  <h3 className="text-xl font-medium">About the project</h3>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">
                    {project.longDescription}
                  </p>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    <span className="font-medium text-[var(--foreground)]">
                      Role:
                    </span>{" "}
                    {project.role}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    <span className="font-medium text-[var(--foreground)]">
                      Event:
                    </span>{" "}
                    {project.event}
                  </p>
                </div>

                <div className="grid gap-10 md:grid-cols-3">
                  <DetailList
                    title="Key features"
                    icon={CheckCircle}
                    items={project.features}
                  />
                  <DetailList
                    title="Challenges"
                    icon={Clock}
                    items={project.challenges}
                  />
                  <DetailList
                    title="What I learned"
                    icon={Database}
                    items={project.learnings}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>

      <section className="mt-24">
        <div className="mb-8 flex items-center gap-4">
          <span className="text-sm text-[var(--muted)]">02</span>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            More to explore
          </h2>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        <p className="max-w-2xl leading-relaxed text-[var(--muted)]">
          This portfolio will grow as I document more of my work in engineering,
          software development, cloud, and AI.
        </p>

        <a
          href="https://github.com/jaGaban747"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-[var(--accent)] decoration-2 underline-offset-4"
        >
          Explore my GitHub
          <ArrowUpRight size={16} />
        </a>
      </section>

      <section className="mt-20 rounded-2xl bg-[var(--accent)] p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.18em]">Have an idea?</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Let's connect and explore what we could build.
        </h2>
        <a
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
        >
          Get in touch
          <ArrowDownRight size={17} />
        </a>
      </section>
    </main>
  );
}
