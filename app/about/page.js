
"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const skills = [
  {
    title: "AI",
    items: [
      "Generative AI",
      "MCP",
      "AI ethics and gov",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Cloud Computing(Azure, AWS)",
      "DevOps",
      "Kubernetes",
      "Containerization",
      "Application Deployment",
    ],
  },
];


const education = [
  {
    title: "University of Nairobi",
    period: "2019 – 2025",
    subtitle: "Bachelor of Science in Electrical & Electronics Engineering",
    details: [
      "Academic grounding in electrical and electronics engineering.",
      "Areas of study include telecommunications, circuit design, automation, and power systems.",
    ],
  },
  {
    title: "Jitume AI Fundamentals Program",
    period: "Completed",
    subtitle: "IBM / SkillUp",
    details: [
      "AI fundamentals, prompting, and data analysis.",
      "Applied learning through an AI-focused capstone project.",
    ],
  },
  {
    title: "WAZIUP IoT Training Program",
    period: "Completed",
    subtitle: "AFRALTI",
    details: [
      "IoT applications using sensors and microcontrollers.",
      "Exposure to LoRaWAN, MQTT, and IoT analytics.",
    ],
  },
];

const experience = [
  {
    title: "Research Consultant",
    organisation: "WorldQuant",
    period: "Oct 2023 – Jun 2024",
    details: [
      "Led the WorldQuant Brain Alphathon at the University of Nairobi.",
      "Worked on quantitative research, data analysis, and the BRAIN API.",
      "The original profile also mentions a 98% model-accuracy result; retain this only if you can substantiate it.",
    ],
  },
  {
    title: "Intern",
    organisation: "Solarise Insight Limited",
    period: "Oct 2024 – Present",
    details: [
      "Practical exposure to solar energy solutions.",
      "Energy audits and site assessments for solar projects.",
      "Cost-benefit analysis for solar implementations.",
    ],
  },
];

function SectionHeading({ number, children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-sm font-medium text-[var(--muted)]">{number}</span>
      <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
        {children}
      </h2>
      <div className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="space-y-8 border-l border-[var(--border)] pl-6 md:pl-8">
      {items.map((item, index) => (
        <motion.article
          key={`${item.title}-${item.organisation || item.subtitle}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent)] md:-left-[39px]" />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {item.organisation || item.subtitle}
              </p>
            </div>
            <span className="text-sm text-[var(--muted)]">{item.period}</span>
          </div>

          {item.organisation && item.subtitle && (
            <p className="mt-2 text-sm text-[var(--muted)]">
              {item.subtitle}
            </p>
          )}

          <ul className="mt-4 space-y-2">
            {item.details.map((detail) => (
              <li
                key={detail}
                className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {detail}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pt-20">
      <section className="mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          A little about me
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.05em] md:text-7xl"
        >
          Engineer by training.
          <br />
          <span className="underline decoration-[var(--accent)] decoration-[8px] underline-offset-4 md:decoration-[12px]">
            Curious by nature.
          </span>
        </motion.h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[260px_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-[260px] md:mx-0"
          >
            <div className="overflow-hidden rounded-2xl bg-[var(--border)]">
              <Image
                src="/profile1.jpg"
                alt="Leon Changara"
                width={520}
                height={520}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Engineering · Technology · Continuous learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Hi, I'm Leon.
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              
              <p>
                I'm an Electrical & Electronics Engineer with a foundation in
                electronics, control systems, and telecommunications. I'm interested
                in how engineering principles and software can come together to solve
                practical problems and create useful technology.
              </p>

              <p>
                I'm building my skills across software engineering, cloud infrastructure,
                DevOps, artificial intelligence, and data analysis. I enjoy understanding
                how systems work, experimenting with new tools, and turning technical
                ideas into practical applications.
              </p>

              <p>
                My project work spans an AI-enabled electricity customer-support
                prototype developed through an IBM capstone and research into
                optimization for edge computing and task offloading in 6G networks.
                These experiences reflect my interest in connecting engineering,
                intelligent systems, and software-driven product development.
              </p>

              <p>
                Outside technology, I value reflection, meditation, film
                and working out. I do have my own personal youtube channel dedicated to keep me motivated haha.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading number="01">Areas I'm exploring</SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="border-t border-[var(--border)] pt-5"
            >
              <h3 className="mb-4 text-lg font-medium">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading number="02">Education & training</SectionHeading>
        <Timeline items={education} />
      </section>

      <section>
        <SectionHeading number="03">Experience</SectionHeading>
        <Timeline items={experience} />
      </section>

      <section className="mt-20 rounded-2xl bg-[var(--accent)] p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.18em]">
          What's next
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Always learning. Looking for meaningful problems to solve.
        </h2>
        <a
          href="/contact"
          className="mt-7 inline-flex items-center rounded-full border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
        >
          Get in touch ↗
        </a>
      </section>
    </main>
  );
}
