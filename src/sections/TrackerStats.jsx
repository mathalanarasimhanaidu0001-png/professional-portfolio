import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TrackerStats() {
  const githubUsername = "mathalanarasimhanaidu0001-png"; 
  const leetcodeUsername = "Mathala_Narasimha_Naidu"; 

  const [solvedCount, setSolvedCount] = useState(18);
  const [easyCount, setEasyCount] = useState(11);
  const [mediumCount, setMediumCount] = useState(7);
  const [hardCount, setHardCount] = useState(0);
  const [totalCommits, setTotalCommits] = useState(32);

  useEffect(() => {
    // Live LeetCode Sync Engine
    fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setSolvedCount(data.totalSolved || 18);
          setEasyCount(data.easySolved || 11);
          setMediumCount(data.mediumSolved || 7);
          setHardCount(data.hardSolved || 0);
        }
      })
      .catch(err => console.log("LeetCode sync using fallback handles."));

    // Live GitHub Commit Sync Engine
    fetch(`https://api.github.com/search/commits?q=author:${githubUsername.replace('-png', '')}`, {
      headers: { Accept: "application/vnd.github.v3.text-match+json" }
    })
      .then(res => res.json())
      .then(data => {
        if (data.total_count) {
          setTotalCommits(data.total_count);
        }
      })
      .catch(err => console.log("GitHub sync using fallback handles."));
  }, []);

  // Detailed timeline matrix holding custom date labels and exact contribution layers
  const realGitContributions = [
    { count: 0, date: "Wednesday, May 20, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Thursday, May 21, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Friday, May 22, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Saturday, May 23, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Sunday, May 24, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Monday, May 25, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Tuesday, May 26, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Wednesday, May 27, 2026", bg: "bg-slate-800/40" },
    { count: 2, date: "Thursday, May 28, 2026", bg: "bg-emerald-700/80" },
    { count: 0, date: "Friday, May 29, 2026", bg: "bg-slate-800/40" },
    { count: 0, date: "Saturday, May 30, 2026", bg: "bg-slate-800/40" },
    { count: 1, date: "Sunday, May 31, 2026", bg: "bg-emerald-900/60" },
    { count: 4, date: "Monday, June 1, 2026", bg: "bg-emerald-400 shadow-[0_0_10px_#34d399]" },
    { count: 1, date: "Tuesday, June 2, 2026", bg: "bg-emerald-700/80" },
    { count: 5, date: "Wednesday, June 3, 2026", bg: "bg-emerald-400 shadow-[0_0_10px_#34d399]" },
    { count: 6, date: "Thursday, June 4, 2026", bg: "bg-emerald-400 shadow-[0_0_10px_#34d399]" },
    { count: 1, date: "Friday, June 5, 2026", bg: "bg-emerald-700/80" },
    { count: 3, date: "Saturday, June 6, 2026", bg: "bg-emerald-500 shadow-[0_0_8px_#10b981]" },
    { count: 4, date: "Sunday, June 7, 2026", bg: "bg-emerald-400 shadow-[0_0_10px_#34d399]" },
    { count: 5, date: "Monday, June 8, 2026", bg: "bg-emerald-400 shadow-[0_0_10px_#34d399]" },
    { count: 0, date: "Tuesday, June 9, 2026", bg: "bg-slate-800/40" },
    { count: 2, date: "Wednesday, June 10, 2026", bg: "bg-emerald-700/80" },
    { count: 4, date: "Thursday, June 11, 2026 (Today)", bg: "bg-emerald-400 shadow-[0_0_10px_#34d399]" }
  ];

  return (
    <section id="stats" className="scroll-mt-24 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 uppercase tracking-wider">
          System Core Metrics
        </h2>
        <div className="h-0.5 w-20 bg-cyan-400 mx-auto mt-3 shadow-[0_0_10px_#22d3ee]" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* PANEL 1: INTERACTIVE GITHUB TRACKER */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                GitHub Activity Tracker
              </h3>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                {totalCommits} Commits
              </span>
            </div>

            <div className="w-full bg-slate-950/70 border border-slate-900 rounded-xl p-5 mb-6">
              <div className="text-xs text-slate-400 font-mono mb-4">Hover squares to inspect timeline logs:</div>
              <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 max-w-sm mx-auto">
                {realGitContributions.map((square, index) => (
                  <div
                    key={index}
                    title={`${square.count === 0 ? 'No contributions' : `${square.count} contributions`} on ${square.date}`}
                    className={`w-full aspect-square rounded-sm cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10 ${square.bg}`}
                  />
                ))}
              </div>
              <div className="flex justify-between max-w-sm mx-auto mt-4 text-[10px] font-mono text-slate-500 px-1">
                <span>May 2026</span>
                <span>Active Streak (June 2026)</span>
              </div>
            </div>
          </div>

          <a 
            href={`https://github.com/${githubUsername}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 hover:border-teal-500/40 text-teal-400 font-mono text-xs font-bold py-3.5 rounded-xl transition-all tracking-wider text-center"
          >
            DIG DEEP INTO REPOSITORIES &rarr;
          </a>
        </motion.div>

        {/* PANEL 2: LEETCODE HUD DISPLAY */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                LeetCode Profile Metrics
              </h3>
              <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded">C++ ENGINE</span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center bg-slate-950/70 border border-slate-900 rounded-xl p-5 mb-6">
              <div className="col-span-3 pb-2 border-b border-slate-900">
                <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-widest">Verified Problems Solved</span>
                <span className="text-4xl font-black text-cyan-400 font-mono tracking-tight">
                  {solvedCount}
                </span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-mono text-emerald-400 block font-bold">EASY</span>
                <span className="text-base font-bold text-white font-mono">{easyCount}</span>
              </div>
              <div className="pt-2 border-x border-slate-900">
                <span className="text-[10px] font-mono text-amber-400 block font-bold">MEDIUM</span>
                <span className="text-base font-bold text-white font-mono">{mediumCount}</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-mono text-rose-500 block font-bold">HARD</span>
                <span className="text-base font-bold text-white font-mono">{hardCount}</span>
              </div>
            </div>
          </div>

          <a 
            href={`https://leetcode.com/u/${leetcodeUsername}/`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 hover:from-teal-500/20 hover:to-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-xs font-bold py-3.5 rounded-xl transition-all tracking-wider text-center"
          >
            INSPECT SUBMISSION ARCHIVES &rarr;
          </a>
        </motion.div>

      </div>
    </section>
  );
}