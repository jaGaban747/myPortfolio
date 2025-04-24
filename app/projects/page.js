"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Github as GitHub, 
  ExternalLink, 
  Calendar, 
  Award, 
  Clock, 
  Code, 
  Users, 
  CheckCircle, 
  Terminal, 
  Database 
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function Projects() {
  // Track which project has expanded details
  const [expandedId, setExpandedId] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "MSE Insights Copilot",
      subtitle: "Microsoft Data + AI Kenya Hackathon Winner",
      description: "AI-powered financial insights platform for Kenyan Micro & Small Enterprises using AzureAI tools and Microsoft Fabric.",
      longDescription: "Developed during the Microsoft Data + AI Kenya Hackathon, this solution helps small business owners gain financial clarity through AI-powered analytics and natural language queries, making data-driven decisions accessible to entrepreneurs without technical expertise.",
      category: "ai",
      role: "Lead Developer for a team comprising of 3 people",
      duration: "March 12 - April 11",
      hackathon: "Hack Together: The Microsoft Data + AI Kenya Hack",
      challenges: [
        "Working with limited Fabric Capacity allocation",
        "Time management as a final year student",
        "Meeting tight hackathon deadlines",
        "Building intuitive UX for non-technical users"
      ],
      learnings: [
        "Microsoft Fabric ecosystem integration",
        "Optimizing AI model performance with limited resources",
        "Designing accessible financial analytics dashboards",
        "Implementing natural language processing for financial queries"
      ],
      technologies: ["Microsoft Fabric", "Azure OpenAI (GPT-4o)", "Streamlit", "Python", "Power BI"],
      githubLink: "https://github.com/jaGaban747/MSE-Insights",
      demoLink: "#",
      featured: true,
      features: [
        "Income vs Expense Summary Dashboard",
        "Daily Cash Flow Trends Visualization",
        "AI Copilot Assistant for natural language queries",
        "Semantic Search for transactions",
        "Microsoft Fabric Lakehouse integration"
      ],
      screenshot: "/mse-insights-screenshot.png" 
    }
    // You can add more projects here in the future
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0d1117] via-[#121820] to-[#161b22] text-white min-h-screen px-4 md:px-12 lg:px-20 py-12 overflow-y-auto">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            My Projects
          </span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Showcasing my work in electrical engineering,data analysis and software development solutions that utilize AI/ML. 
          Each project represents a challenge overcome and skills applied to real-world problems.
        </p>
      </motion.div>

      {/* Highlighted Hackathon Project */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-12 rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 animate-pulse opacity-30 rounded-2xl"></div>
        <div className="relative border border-yellow-500/30 rounded-2xl overflow-hidden backdrop-blur-sm bg-gray-900/70">
          <div className="p-1 bg-gradient-to-r from-yellow-400 to-orange-500">
            <div className="bg-gray-900 py-2 px-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={18} />
                  <span className="text-yellow-400 font-medium text-sm">Hackathon Participant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">March-April 2025</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:grid md:grid-cols-5 gap-6 p-6">
            {/* Project Image - takes 2/5 of grid */}
            <div className="group col-span-3 h-[500px] md:h-[600px] relative mb-6 md:mb-0 rounded-lg overflow-hidden">
              <Image
                src={projects[0].screenshot}
                alt={projects[0].title}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {projects[0].subtitle}
                </span>
              </div>
            </div>
            
            {/* Project Content - takes 3/5 of grid */}
            <div className="col-span-3">
              <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {projects[0].title}
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {projects[0].longDescription}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Terminal size={18} className="text-yellow-400" />
                Key Technologies
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].technologies.map((tech, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={projects[0].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2 font-medium py-2 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-yellow-500/10 border border-gray-700 hover:border-yellow-500/50"
                >
                  <GitHub size={18} />
                  View on GitHub
                </a>
                {projects[0].demoLink && (
                  <a
                    href= "https://youtu.be/6mh-nzDwF2c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 flex items-center gap-2 font-medium py-2 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <FaYoutube size={18} />
                    Watch Demo
                  </a>
                )}
              </div>
              
              <button 
                onClick={() => toggleExpand(projects[0].id)}
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 transition-colors"
              >
                {expandedId === projects[0].id ? 'Show Less' : 'Learn More'}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform ${expandedId === projects[0].id ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Expanded Details */}
          {expandedId === projects[0].id && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6"
            >
              <div className="border-t border-gray-700 pt-6 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Hackathon Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award size={18} className="text-yellow-400" />
                      Hackathon Details
                    </h3>
                    <p className="text-gray-300 mb-2">
                      <span className="text-gray-400">Event:</span> {projects[0].hackathon}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <span className="text-gray-400">Role:</span> {projects[0].role}
                    </p>
                  </div>
                  
                  {/* Project Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle size={18} className="text-yellow-400" />
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {projects[0].features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Clock size={18} className="text-yellow-400" />
                      Challenges Overcome
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {projects[0].challenges.map((challenge, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="text-gray-300">{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learnings */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Database size={18} className="text-yellow-400" />
                      Key Learnings
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {projects[0].learnings.map((learning, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="text-gray-300">{learning}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Future Projects Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold mb-8 text-center text-gray-300"
        >
          More Projects Coming Soon
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden h-64 flex flex-col items-center justify-center p-6 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/30 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
                  {index === 0 && <Code className="text-gray-500" size={24} />}
                  {index === 1 && <Database className="text-gray-500" size={24} />}
                  {index === 2 && <Users className="text-gray-500" size={24} />}
                </div>
                
                <h3 className="text-lg font-medium text-gray-400 mb-2">
                  {index === 0 && "Web Development"}
                  {index === 1 && "Data Science"}
                  {index === 2 && "AI Solutions"}
                </h3>
                
                <p className="text-gray-500 text-sm">
                  {index === 0 && "Frontend and backend projects"}
                  {index === 1 && "Data analysis and visualization"}
                  {index === 2 && "Machine learning applications"}
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-yellow-500 text-sm">Coming soon</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in collaborating?</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          I'm currently available for freelance projects, internship opportunities, and collaborations.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-medium py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/20"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}