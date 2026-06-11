import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-16 max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-r from-slate-900/60 to-blue-950/20 border border-slate-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Decorative ambient mesh glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <span className="text-xs font-mono font-extrabold text-cyan-400 tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full uppercase">
          Credentials
        </span>
        
        <h2 className="text-3xl font-black text-white mt-4 tracking-wide">
          Review My Engineering Brief
        </h2>
        
        <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3 mb-8 leading-relaxed">
          Deep-dive into my technical core capabilities, architectural AI model deployments, and full system integration experiences.
        </p>

        {/* Quick Summary Highlights HUD Panel */}
        <div className="flex justify-center gap-6 mb-2 text-xs font-mono text-slate-400">
          <div className="bg-slate-950/50 px-4 py-2 rounded-xl border border-slate-800/60 backdrop-blur-sm shadow-inner">
            <span className="text-teal-400 font-bold">02+</span> Production Systems
          </div>
          <div className="bg-slate-950/50 px-4 py-2 rounded-xl border border-slate-800/60 backdrop-blur-sm shadow-inner">
            <span className="text-cyan-400 font-bold">18+</span> Verified DSA Solves
          </div>
        </div>

        {/* Dual-Action Buttons Grid Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* ACTION 1: Open Inline Browser Tab Preview */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/my-brief.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-cyan-400 font-bold px-7 py-4 rounded-xl transition-all font-mono text-sm cursor-pointer shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            CLICK TO VIEW RESUME
          </motion.a>

          {/* ACTION 2: Trigger Instant Local Storage File Save */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/my-brief.pdf" 
            download="Mathala_Narasimha_Naidu_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold px-7 py-4 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 font-mono text-sm cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            DOWNLOAD RESUME
          </motion.a>

        </div>
      </div>
    </section>
  );
}