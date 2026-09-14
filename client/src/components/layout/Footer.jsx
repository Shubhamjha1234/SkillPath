import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#050814] py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono tracking-wider text-slate-500">
        <span>&copy; 2024 SkillPath</span>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-300 transition-colors">API Docs</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Changelog</a>
        </div>
      </div>
    </footer>
  );
}
