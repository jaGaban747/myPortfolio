"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen px-6 md:px-20 py-12 overflow-y-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        ABOUT ME
      </h1>

      {/* About Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-10">
        {/* Left Section - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <Image
              src="/profile1.jpg" // Path to the image inside the public folder
              alt="Leon Changara"
              width={200} // Size of the image
              height={200} // Size of the image
              className="rounded-full border-4 border-yellow-400"
            />
          </div>

          <h2 className="text-3xl font-bold">Hi, I'm Leon Changara Chemwor Odari</h2>
          <p className="mt-4 text-lg">
          I’m an <strong>Electrical & Electronics Engineer</strong> with a strong foundation in  
          <strong> circuit design, control systems, and telecommunications</strong>.
          By day, I’m knee-deep in research — dissecting machine learning models, prototyping IoT systems, or testing algorithms that blur the lines between circuits and intelligence. By night, I’m either meditating to reset my mind  
  or dissecting films frame-by-frame. To me, engineering isn’t just about solving problems — it’s about staying curious enough to ask better questions.  
          </p>  


        </motion.div>

        {/* Right Section - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <h2 className="text-2xl font-bold text-yellow-400">My Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {/* Frontend Skills */}
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">CSS</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Tailwind</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">JavaScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Next.js</span>
            
            {/* Backend Skills */}
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Node.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Express</span>
            
            
            {/* Other Skills */}
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">algorithm optimization</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">GenAI for software development</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Python</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">MATLAB</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Tableau</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">IBM Watson</span>
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          EDUCATION
        </h2>

        <div className="relative border-l-4 border-yellow-400 pl-8 space-y-8">
          {/* University of Nairobi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-2xl font-bold">🎓 University of Nairobi</h3>
            <p className="text-gray-400">2019 - Present</p>
            <ul className="mt-2 list-disc pl-5 text-gray-300">
              <li>Bachelor of Science in <strong>Electrical & Electronics Engineering</strong></li>
              <li>Specialized in <strong>Circuit Design, Automation, Power Systems, and Telecommunications</strong></li>
              <li>Hands-on experience in <strong>Signal Processing, Embedded Systems, and AI Applications</strong></li>
            </ul>
          </motion.div>

          {/* Jitume AI Fundamentals Program */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-2xl font-bold">📜 Jitume AI Fundamentals Program (IBM, SkillUp)</h3>
            <p className="text-gray-400">Completed</p>
            <ul className="mt-2 list-disc pl-5 text-gray-300">
              <li>Developed <strong>AI Models</strong> and improved <strong>AI Prompting & Data Analysis</strong></li>
              <li>Successfully built <strong>AI-driven solutions</strong> during a capstone project</li>
              <li>Earned a <strong>recognized certification</strong> from IBM SkillUp Technologies</li>
            </ul>
          </motion.div>

          {/* WAZIUP IoT Training Program */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-2xl font-bold">📜 WAZIUP IoT Training Program</h3>
            <p className="text-gray-400">Completed</p>
            <ul className="mt-2 list-disc pl-5 text-gray-300">
              <li>Developed <strong>IoT-based applications</strong> using sensors and microcontrollers</li>
              <li>Hands-on experience with <strong>LoRaWAN, MQTT protocols, and IoT analytics</strong></li>
              <li>Designed <strong>IoT solutions</strong> for industrial and environmental challenges</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          WORK EXPERIENCE
        </h2>

        <div className="relative border-l-4 border-yellow-400 pl-8 space-y-8">
          {/* WorldQuant Research Consultant */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-2xl font-bold">🧠 Research Consultant - WorldQuant, USA</h3>
            <p className="text-gray-400">Oct 2023 - June 2024</p>
            <ul className="mt-2 list-disc pl-5 text-gray-300">
              <li>Led the <strong>WorldQuant Brain Alphathon</strong> at the University of Nairobi.</li>
              <li>Optimized the <strong>BRAIN API</strong> for high-efficiency model training (98% accuracy).</li>
              <li>Conducted <strong>data analysis</strong> and <strong>AI-driven research</strong>.</li>
            </ul>
          </motion.div>

          {/* Solarise Insight Limited */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-2xl font-bold">🔆 Intern - Solarise Insight Limited</h3>
            <p className="text-gray-400">Oct 2024 - Present</p>
            <ul className="mt-2 list-disc pl-5 text-gray-300">
              <li>Developed <strong>practical skills in solar energy solutions</strong>.</li>
              <li>Conducted <strong>energy audits & site assessments</strong> for solar projects.</li>
              <li>Performed <strong>cost-benefit analysis</strong> to optimize solar implementations.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}