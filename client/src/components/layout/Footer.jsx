import React from 'react';
import { Code, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-[#09090b] py-8 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-zinc-500">
        
        <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-zinc-400">
          <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center text-white text-xs">
            <Code className="w-3.5 h-3.5" />
          </div>
          <span>SkillPath &copy; {new Date().getFullYear()}</span>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-500">
          Built for self-learners with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> • Free forever
        </p>

        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Roadmaps</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
        </div>

      </div>
    </footer>
  );
}
