import React from 'react';
import { motion } from 'framer-motion';

const skillsMatrix = [
  { domain: "Languages", items: ["C++ (STL Engine)", "Python", "Data Structures & Algorithms"] },
  { domain: "Web & Core Architecture", items: ["React.js", "Tailwind CSS", "JavaScript", "Node.js"] },
  { domain: "AI / ML & Databases", items: ["Generative AI", "Gemini API", "Hugging Face", "MySQL"] }
];

const projectShowcase = [
  {
    title: "EchoVerse AI System",
    description: "An advanced, interactive audiobook platform engineered to cleanly synthesize text records into natural, fluent speech patterns utilizing generative audio pipelines.",
    tech: ["React", "Python", "Gradio", "Hugging Face Models"],
    link: "#"
  },
  {
    title: "3D Weather Analytics Dashboard",
    description: "A real-time predictive forecasting system that integrates 3D visual environments with predictive API data layers and contextual AI-generated lifestyle advice.",
    tech: ["React", "Three.js", "Tailwind CSS", "Gemini API"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 max-w-5xl mx-auto space-y-24">
      
      {/* 🟢 COMPONENT A: THE CORE SKILLS HUB */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 uppercase tracking-wider">
            Technical Core capabilities
          </h2>
          <div className="h-0.5 w-16 bg-cyan-400 mx-auto mt-3 shadow-[0_0_8px_#22d3ee]" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillsMatrix.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h4 className="font-mono text-xs font-bold text-teal-400 tracking-wider uppercase mb-4">{skill.domain}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="text-xs bg-slate-950/60 border border-slate-800/60 rounded-lg px-3 py-1.5 font-medium text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔵 COMPONENT B: THE CORE PROJECT CARDS */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 uppercase tracking-wider">
            Featured Engineering Systems
          </h2>
          <div className="h-0.5 w-20 bg-cyan-400 mx-auto mt-3 shadow-[0_0_10px_#22d3ee]" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectShowcase.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/5 px-2.5 py-1 rounded border border-cyan-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a
                  href={proj.link}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  EXPLORE ARCHITECTURE &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}