"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Network Optimization for 6G",
    description: "Developed a hybrid algorithm using evolutionary game theory and grey wolf optimization.",
    link: "https://github.com/leonchangara/network-optimization",
  },
  {
    title: "Solar Energy Analysis",
    description: "Analyzed site visit data and conducted cost-benefit analysis for solar panel installations.",
    link: "https://github.com/leonchangara/solar-energy",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-10">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-700 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank"
              className="text-blue-400 mt-2 inline-block"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
