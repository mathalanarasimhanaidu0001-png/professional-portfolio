import React from 'react';

export default function ProjectCard({ title, description, tags, githubLink, liveLink }) {
  return (
    <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-teal-500/50 transition-all group">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{title}</h3>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800">
        <a href={liveLink} target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:underline">Live Demo &rarr;</a>
        <a href={githubLink} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Source Code</a>
      </div>
    </div>
  );
}