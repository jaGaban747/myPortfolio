
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all fields before sending.",
      });
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. Thanks for reaching out!",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting contact form:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-[var(--border)] bg-white/40 px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--accent)]";

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pt-20">
      <section className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--muted)]"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-5xl font-medium leading-[1.08] tracking-[-0.05em] md:text-7xl"
          >
            Have something in{" "}
            <span className="underline decoration-[var(--accent)] decoration-[8px] underline-offset-4 md:decoration-[12px]">
              mind?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-[var(--muted)]"
          >
            Whether it is an opportunity, a collaboration, or an interesting
            idea, I&apos;d be glad to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 space-y-5"
          >
            <a
              href="mailto:leon.changara@gmail.com"
              className="group flex w-fit items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-colors group-hover:bg-[var(--accent)]">
                <Mail size={19} />
              </span>

              <span>
                <span className="block text-xs text-[var(--muted)]">
                  Email me
                </span>
                <span className="mt-1 block text-sm font-medium">
                  leon.changara@gmail.com
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="ml-2 text-[var(--muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://wa.me/254780818479"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-colors group-hover:bg-[var(--accent)]">
                <MessageCircle size={19} />
              </span>

              <span>
                <span className="block text-xs text-[var(--muted)]">
                  Message me
                </span>
                <span className="mt-1 block text-sm font-medium">
                  WhatsApp
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="ml-2 text-[var(--muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-[var(--border)] p-6 md:p-9"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-medium tracking-tight">
              Send a message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Fill in the details below and I&apos;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Jane Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a little about it..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
                required
              />
            </div>

            {status.message && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-xl border p-4 text-sm leading-relaxed ${
                  status.type === "success"
                    ? "border-[var(--border)] bg-[var(--accent)]/30"
                    : "border-red-300 bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-medium transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send message"}
              {!isSubmitting && (
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>
          </form>
        </motion.div>
      </section>

      <div className="mt-20 border-t border-[var(--border)] pt-6">
        <p className="text-sm text-[var(--muted)]">
          Good conversations can lead to great things.
        </p>
      </div>
    </main>
  );
}
