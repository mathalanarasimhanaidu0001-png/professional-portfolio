import React from 'react';

export default function Navbar() {
  return (
    // Changed "sticky" to "fixed left-0 right-0" to force a permanent top viewport layer mask
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800/60 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-teal-400 tracking-wider font-mono">MN_597</a>
        
        <div className="space-x-6 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-teal-400 transition-colors">Home</a>
          
          {/* Changed "#about" to "#roadmap" to perfectly target your Engineering Journey section */}
          <a href="#roadmap" className="hover:text-teal-400 transition-colors">Journey</a>
          
          {/* Changed "#stats" to "#tracker" (or whatever ID your stats panel wrapper uses) */}
          <a href="#roadmap" className="hover:text-teal-400 transition-colors">Stats</a>
          
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#resume" className="hover:text-teal-400 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}