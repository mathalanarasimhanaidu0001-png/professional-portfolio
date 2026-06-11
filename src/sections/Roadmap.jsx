import React from 'react';
import { motion } from 'framer-motion';

const journeyMilestones = [
  {
    year: "2023 — 2027",
    title: "B.Tech in Computer Science Engineering (AI/ML)",
    institution: "Samskruti College of Engineering and Technology",
    description: "Deeply engaging with algorithmic fundamentals and advanced data models. Merging specialized AI/ML training with a passion for building responsive full-stack web applications from scratch.",
    badge: "AI/ML & Core CSE"
  },
  {
    year: "Active Milestone",
    title: "Smart Traffic Violation Detection System",
    institution: "College Mini-Project Initiative",
    description: "Designing a computer vision pipeline to automate traffic monitoring. Engineering real-time video stream processing models to dynamically detect traffic rule violations, log vehicle data, and flag infractions.",
    badge: "Computer Vision / AI"
  },
  {
    year: "Early 2026",
    title: "Salesforce Agentblazer Champion",
    institution: "Trailhead Milestone Credential",
    description: "Successfully conquered the official Agentblazer Champion quest. Mastered cloud architecture fundamentals, customer data workflows, and next-generation autonomous AI agent deployment matrices.",
    badge: "Cloud Automation"
  },
  {
    year: "March 2026",
    title: "Industry Assessment Evaluation",
    institution: "FullStack Experts Academy, Hyderabad",
    description: "Cleared the comprehensive offline technical evaluation testing raw analytical logic, algorithmic speed, and structural full-stack project building competencies.",
    badge: "Verified Assessment"
  },
  {
    year: "Present Target",
    title: "GATE Architecture Preparation",
    institution: "Computer Science & IT Focus",
    description: "Actively training for the national-level Graduate Aptitude Test in Engineering. Mastering the mathematical depths of Discrete Mathematics, Compiler Design, and core DBMS kernel principles.",
    badge: "Advanced Theory"
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-24 py-16 max-w-4xl mx-auto px-4">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-extrabold text-cyan-400 tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full uppercase">
          Timeline Engine
        </span>
        <h2 className="text-3xl font-black text-white mt-4 tracking-wide uppercase">
          My Engineering Journey Quest
        </h2>
        <div className="h-0.5 w-20 bg-cyan-400 mx-auto mt-3 shadow-[0_0_10px_#22d3ee]" />
      </div>

      {/* TIMELINE TRACK */}
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
        
        {journeyMilestones.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 group"
          >
            {/* Pulsing Timeline Node Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-teal-400 group-hover:bg-teal-400/20 transition-all duration-300 shadow-[0_0_8px_transparent] group-hover:shadow-[0_0_12px_#34d399]" />

            {/* Left-Side Sticky Year Label for wider screens */}
            <div className="md:absolute md:-left-36 md:top-1 md:w-28 text-left md:text-right">
              <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                {step.year}
              </span>
            </div>

            {/* Glassmorphic Journey Node Card */}
            <div className="bg-slate-900/30 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-300 shadow-xl relative overflow-hidden">
              
              {/* Subtle accent hover indicator bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-teal-400 transition-colors">
                  {step.title}
                </h3>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                  {step.badge}
                </span>
              </div>

              <h4 className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {step.institution}
              </h4>

              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}