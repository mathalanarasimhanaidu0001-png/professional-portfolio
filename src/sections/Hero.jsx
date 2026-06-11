import React from 'react';

export default function Hero() {
  return (
    
    <section className="min-h-[75vh] flex flex-col justify-center items-center text-center py-20">
      <span className="text-teal-400 font-mono tracking-widest text-sm uppercase mb-3">Hi, my name is</span>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">Mathala Narasimha Naidu</h1>
      <h2 className="text-2xl sm:text-4xl font-bold text-slate-400 mt-3">AI/ML & Full-Stack Developer Enthusiast</h2>
      <p className="mt-6 text-slate-400 max-w-2xl text-lg leading-relaxed">
        I specialize in building intelligent systems, creating scalable software architectures, and engineering high-performance applications.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#projects" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all shadow-lg shadow-teal-500/10">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-lg transition-all">
          Get In Touch
        </a>
      </div>
    </section>
  );
}