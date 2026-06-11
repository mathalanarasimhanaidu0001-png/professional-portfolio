import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  // 🏢 PASTE YOUR UNIQUE 8-CHARACTER FORMSPREE TOKEN RIGHT HERE!
  const formspreeId = "xzdqaqjy"; 

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 max-w-5xl mx-auto px-4">
      
      {/* SECTION BANNER HEADLINE */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-extrabold text-cyan-400 tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full uppercase">
          Secure Link
        </span>
        <h2 className="text-3xl font-black text-white mt-4 tracking-wide uppercase">
          Establish Connection
        </h2>
        <div className="h-0.5 w-20 bg-cyan-400 mx-auto mt-3 shadow-[0_0_10px_#22d3ee]" />
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        
        {/* LEFT COLUMN: VERIFIED RECRUITER HUD CHANNELS */}
        <div className="md:col-span-2 space-y-4">
          
          {/* LINKEDIN PRODUCTION TARGET CARD */}
          <motion.a
            whileHover={{ x: 6 }}
            href="https://www.linkedin.com/in/mathala-narasimha-naidu-7639a02a2"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-md hover:border-blue-500/40 transition-all group shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Professional Network</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">Connect on LinkedIn &rarr;</span>
              </div>
            </div>
          </motion.a>

          {/* EMAIL ROUTE ACTION CARD */}
          <motion.a
            whileHover={{ x: 6 }}
            href="mailto:23u11a0597.cse@gmail.com"
            className="block p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-md hover:border-teal-500/40 transition-all group shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-950 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Direct Inbox</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-teal-400 transition-colors">23u11a0597.cse@gmail.com</span>
              </div>
            </div>
          </motion.a>

        </div>

        {/* RIGHT COLUMN: RECRUITER REAL-TIME PAYLOAD FORM */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 tracking-wider">Your Identity</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Hiring Manager / Name" 
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all font-mono"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 tracking-wider">Return Route</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 tracking-wider">Message Payload</label>
              <textarea 
                name="message" 
                required 
                rows="4" 
                placeholder="Write your invitation details or project feedback here..." 
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all font-mono resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full font-mono text-xs font-bold py-4 rounded-xl transition-all tracking-widest uppercase cursor-pointer bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] disabled:opacity-50"
            >
              {status === "sending" ? " TRANSMITTING DATA..." : "🚀 Send Secure Message"}
            </button>

            {/* LIVE DATA HUD ALERTS */}
            {status === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs font-mono text-emerald-400 pt-2">
                ✓ Connection established! Your message safely reached my terminal.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs font-mono text-rose-400 pt-2">
                ⚠ Transmission interrupted. Please try again or use direct mail.
              </motion.p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}