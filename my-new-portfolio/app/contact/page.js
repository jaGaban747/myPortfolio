"use client"; // Mark this as a Client Component

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen p-6 bg-black text-white">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        CONTACT ME
      </h1>

      {/* Social Links with Icons */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://wa.me/+254780818479"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          <FaWhatsapp className="mr-2" /> WhatsApp
        </a>
        <a
          href="mailto:leon.changara@gmail.com"
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-white mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send Feedback
        </button>
      </form>
    </div>
  );
}