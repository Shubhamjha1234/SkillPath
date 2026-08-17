import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#050814] py-8 px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-end text-xs font-mono tracking-wider text-slate-500">
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-300 transition-colors">API Docs</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Changelog</a>
        </div>
      </div>
    </footer>
  );
}
