import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  BookOpen, 
  Compass, 
  Award, 
  Settings, 
  Bell,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function LearningPathsPage() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('ALL PATHS');

  const categories = [
    'ALL PATHS',
    'WEB DEVELOPMENT',
    'AI / ML',
    'DATA STRUCTURES',
    'CLOUD ARCHITECTURE'
  ];

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

  const filteredPaths = activeCategory === 'ALL PATHS' 
    ? paths 
    : paths.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050814] text-white flex font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#050814] flex flex-col justify-between p-6 shrink-0">
        <div className="space-y-8">
          {/* User Profile Card at Top */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-white">
                {user?.name ? user.name[0].toUpperCase() : 'A'}
              </span>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{user?.name || 'Alex Chen'}</div>
              <div className="text-[11px] text-slate-400 truncate">Pro Plan • 12 Day Streak</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            
            <button
              onClick={() => navigate('/learning-paths')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-emerald-950/30 text-emerald-400 border border-emerald-500/10 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Learning Paths
            </button>

            <button
              onClick={() => navigate('/roadmap/frontend-development')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all"
            >
              <Compass className="w-5 h-5" />
              Roadmap
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all"
            >
              <Award className="w-5 h-5" />
              Certificates
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all"
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </nav>
        </div>

        {/* Sidebar Footer Upgrade Button */}
        <div>
          <button className="w-full bg-[#1b2034] hover:bg-[#232a45] text-slate-300 border border-white/5 font-medium text-sm py-3 rounded-xl transition-all">
            Upgrade to Pro
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-between min-h-screen">
        
        {/* Top Header inside main content */}
        <header className="h-16 border-b border-white/5 px-12 flex items-center justify-between shrink-0">
          {/* Inner Nav */}
          <nav className="flex items-center gap-8">
            <button 
              onClick={() => navigate('/learning-paths')}
              className="relative text-sm font-medium text-white py-5"
            >
              Paths
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 rounded-full" />
            </button>
            <button 
              onClick={() => navigate('/roadmap/frontend-development')}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Roadmap
            </button>
            <button 
              onClick={() => navigate('/community')}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Community
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => navigate('/profile')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden bg-slate-800 flex items-center justify-center">
                <span className="text-xs font-semibold text-white">
                  {user?.name ? user.name[0].toUpperCase() : 'A'}
                </span>
              </div>
            </button>

            <button className="bg-violet-300 hover:bg-violet-200 text-[#050814] font-semibold text-xs px-4 py-2 rounded-lg transition-all shadow-[0_0_12px_rgba(167,139,250,0.2)]">
              Get Started
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 bg-grid-lines bg-[#050814] p-12 relative overflow-y-auto space-y-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.06),transparent_40%)] pointer-events-none" />

          {/* Heading */}
          <div className="relative max-w-4xl space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-white font-sans">
              Explore Learning Paths
            </h1>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl">
              Master high-performance technical skills with AI-curated curriculum tailored to your pace and goals.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="relative flex items-center gap-8 border-b border-white/5 pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold tracking-wider transition-colors relative pb-3 ${
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

          {/* Learning Paths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {filteredPaths.map((path) => (
              <div 
                key={path.title}
                onClick={() => navigate(`/roadmap/${path.slug}`)}
                className="rounded-2xl border border-white/5 bg-[#080d1e]/40 hover:bg-[#080d1e]/80 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                {/* Header with AI-Powered Badge */}
                <div className="p-6 pb-4 flex justify-between items-start">
                  <span className="text-[10px] font-bold tracking-wider text-emerald-400 font-mono">
                    {path.category}
                  </span>
                  
                  <div className="flex items-center gap-1 bg-[#1d2442]/60 border border-white/5 rounded-lg px-2 py-1 text-[9px] font-medium text-indigo-300 font-mono">
                    <Sparkles className="w-2.5 h-2.5" />
                    AI-Powered
                  </div>
                </div>

                {/* Body Content */}
                <div className="px-6 pb-8 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="px-6 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-light">
                    <Clock className="w-3.5 h-3.5" />
                    {path.duration}
                  </div>

                  {/* Difficulty Signal Indicator */}
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
                    <span className={`text-[10px] font-semibold font-mono uppercase ${path.difficultyColor}`}>
                      {path.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="h-16 border-t border-white/5 px-12 flex items-center justify-between text-xs font-mono tracking-wider text-slate-500 shrink-0">
          <div>
            &copy; 2024 SkillPath. High-Performance Technical Learning.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
