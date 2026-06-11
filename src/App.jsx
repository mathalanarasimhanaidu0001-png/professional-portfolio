import React from 'react';
import Navbar from './components/Navbar';
import CosmicBackground from './components/CosmicBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import Roadmap from './sections/Roadmap';
import TrackerStats from './sections/TrackerStats';
import Projects from './sections/Projects';
import Resume from './sections/Resume'; // Add this import line right here
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      <CosmicBackground />
      <CustomCursor />
      <Navbar />

      <main className="px-6 md:px-12 max-w-7xl mx-auto pb-24 relative z-10 space-y-24">
        <Hero />
        <Roadmap />
        <TrackerStats />
        <Projects />
        <Resume /> {/* Insert the component block layer here */}
        <Contact />
      </main>

      <footer className="relative z-10 text-center py-8 text-xs text-slate-500 border-t border-slate-900 bg-slate-950/40 backdrop-blur-sm">
        &copy; {new Date().getFullYear()} Mathala Narasimha Naidu. All Systems Operational.
      </footer>
    </div>
  );
}