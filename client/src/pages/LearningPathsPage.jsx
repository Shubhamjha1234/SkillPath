import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Sparkles } from 'lucide-react';
import AppSidebar from '../components/layout/AppSidebar';

export default function LearningPathsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('ALL PATHS');

  const categories = ['ALL PATHS', 'WEB DEV', 'AI / ML', 'DSA', 'CLOUD'];

  const paths = [
    {
      category: 'WEB DEVELOPMENT',
      title: 'Advanced React Patterns',
      slug: 'advanced-react-patterns',
      description: 'Master concurrent mode, custom hooks, and state management at scale.',
      duration: '12h',
      difficulty: 'Advanced',
      difficultyColor: 'text-rose-400',
      difficultyBars: 3
    },
    {
      category: 'AI / ML',
      title: 'Neural Networks Intro',
      slug: 'neural-networks-intro',
      description: 'Build your first predictive models using PyTorch and real-world datasets.',
      duration: '24h',
      difficulty: 'Beginner',
      difficultyColor: 'text-emerald-400',
      difficultyBars: 1
    },
    {
      category: 'DATA STRUCTURES',
      title: 'Graph Algorithms',
      slug: 'graph-algorithms',
      description: 'Traversals, shortest paths, and network flows implemented in Python.',
      duration: '18h',
      difficulty: 'Intermediate',
      difficultyColor: 'text-sky-400',
      difficultyBars: 2
    }
  ];

  const categoryMap = { 'WEB DEV': 'WEB DEVELOPMENT', 'AI / ML': 'AI / ML', 'DSA': 'DATA STRUCTURES', 'CLOUD': 'CLOUD ARCHITECTURE' };
  const filteredPaths = activeCategory === 'ALL PATHS'
    ? paths
    : paths.filter(p => p.category === (categoryMap[activeCategory] || activeCategory));

  return (
    <div className="min-h-screen bg-[#050814] text-white flex flex-col lg:flex-row font-sans">
      <AppSidebar activeKey="learning-paths" />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="hidden lg:flex h-16 border-b border-white/5 px-8 items-center justify-between shrink-0">
          <nav className="flex items-center gap-6">
            <button onClick={() => navigate('/learning-paths')} className="relative text-sm font-medium text-white py-5">
              Paths
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 rounded-full" />
            </button>
            <button onClick={() => navigate('/roadmap/frontend-development')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Roadmap</button>
            <button onClick={() => navigate('/community')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Community</button>
          </nav>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-8 overflow-y-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.06),transparent_40%)] pointer-events-none" />

          <div className="relative space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Explore Learning Paths</h1>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl">
              Master high-performance technical skills with AI-curated curriculum tailored to your pace and goals.
            </p>
          </div>

          {/* Category Tabs - scrollable on mobile */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 border-b border-white/5 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold tracking-wider transition-colors relative pb-3 whitespace-nowrap shrink-0 ${
                  activeCategory === category ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Paths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredPaths.map((path) => (
              <div
                key={path.title}
                onClick={() => navigate(`/roadmap/${path.slug}`)}
                className="rounded-2xl border border-white/5 bg-[#080d1e]/40 hover:bg-[#080d1e]/80 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div className="p-5 pb-3 flex justify-between items-start">
                  <span className="text-[10px] font-bold tracking-wider text-emerald-400 font-mono">{path.category}</span>
                  <div className="flex items-center gap-1 bg-[#1d2442]/60 border border-white/5 rounded-lg px-2 py-1 text-[9px] font-medium text-indigo-300 font-mono">
                    <Sparkles className="w-2.5 h-2.5" />
                    AI-Powered
                  </div>
                </div>
                <div className="px-5 pb-6 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{path.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{path.description}</p>
                </div>
                <div className="px-5 py-3 bg-white/[0.01] border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-light">
                    <Clock className="w-3.5 h-3.5" />
                    {path.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-end gap-0.5 h-3">
                      {[1, 2, 3].map((bar) => (
                        <span
                          key={bar}
                          className={`w-0.5 rounded-full ${
                            bar <= path.difficultyBars
                              ? path.difficulty === 'Beginner' ? 'bg-emerald-400' : path.difficulty === 'Intermediate' ? 'bg-sky-400' : 'bg-rose-400'
                              : 'bg-white/10'
                          }`}
                          style={{ height: `${bar * 4}px` }}
                        />
                      ))}
                    </div>
                    <span className={`text-[10px] font-semibold font-mono uppercase ${path.difficultyColor}`}>{path.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-white/5 px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono tracking-wider text-slate-500 shrink-0">
          <span>&copy; 2024 SkillPath.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
