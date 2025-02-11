"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Leon Changara Chemwor Odari
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-xl text-gray-400 mt-4"
      >
        Electrical & Electronics Engineer
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
        className="mt-4 text-center max-w-2xl"
      >
        Passionate about AI, Machine Learning, and Renewable Energy (Solar).
        Constantly searching on how i can find solutions to problems around us so to make life a bit more enjoyable.
      </motion.p>

      <div className="mt-6 flex space-x-4">
        <a href="https://github.com/jaGaban747" target="_blank">
          <FaGithub className="text-3xl hover:text-gray-500 transition" />
        </a>
        <a href="https://linkedin.com/in/leon-c-b17967232" target="_blank">
          <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
        </a>
        <a href="mailto:leon.changara@gmail.com">
          <FaEnvelope className="text-3xl hover:text-red-400 transition" />
        </a>
      </div>
    </div>
  );
}
