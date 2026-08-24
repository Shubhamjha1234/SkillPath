import React from 'react';

export default function ProgressBar({ value, max, label = 'Course Progress' }) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 font-sans tracking-wide uppercase">
        <span>{label}</span>
        <span className="text-emerald-400 font-mono">{percentage}%</span>
      </div>
      <div className="relative w-full h-2.5 rounded-full bg-slate-900 border border-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-[10px] text-slate-500 font-mono text-right mt-1">
        {value} / {max} lessons completed
      </div>
    </div>
  );
}
