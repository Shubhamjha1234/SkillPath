import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { 
  LayoutDashboard, 
  BookOpen, 
  Compass, 
  Award, 
  Settings, 
  HelpCircle, 
  LogOut, 
  ArrowRight,
  Loader2 
} from 'lucide-react';

export default function DashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050814] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  const user = data?.user || { name: 'Alex Chen' };

  return (
    <div className="min-h-screen bg-[#050814] text-white flex font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#050814] flex flex-col justify-between p-6 shrink-0">
        <div className="space-y-8">
          {/* Logo / Title */}
          <div className="px-3">
            <span className="font-bold text-xl tracking-tight">
              Skill<span className="text-emerald-400">Path</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all bg-emerald-950/30 text-emerald-400 border border-emerald-500/10"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            
            <button
              onClick={() => navigate('/learning-paths')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all"
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

        {/* Sidebar Footer */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 transition-all">
              <HelpCircle className="w-5 h-5" />
              Help Center
            </button>

            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 transition-all"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          {/* User Profile Card */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-white">
                {user.name ? user.name[0].toUpperCase() : 'U'}
              </span>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{user.name}</div>
              <div className="text-[11px] text-slate-500 truncate">Pro Plan • 12 Days</div>
            </div>
          </div>

          {/* Upgrade Button */}
          <button className="w-full bg-violet-300 hover:bg-violet-200 text-[#050814] font-semibold text-sm py-3 rounded-xl transition-all shadow-[0_0_12px_rgba(167,139,250,0.2)]">
            Upgrade to Pro
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-grid-lines bg-[#050814] p-12 flex flex-col justify-between relative overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.06),transparent_40%)] pointer-events-none" />

        <div className="relative max-w-4xl space-y-12">
          {/* Greeting */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
              Welcome back, {user.name.split(' ')[0]}.
            </h1>
            <p className="text-slate-400 text-sm font-light">
              Here is what you missed since you've been away.
            </p>
          </div>

          {/* Current Path Card */}
          <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-[#0c142b] via-[#080d1e] to-[#050814] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-indigo-400 font-semibold uppercase">Current Path</span>
              <h2 className="text-2xl font-bold">Full-Stack React</h2>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl">
              Master modern React, Server Components, and API integration. You're currently working on state management with Redux Toolkit.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-light">Overall Progress</span>
                <span className="text-emerald-400 font-semibold">75%</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>

          {/* Recommended Next Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#080d1e]/40 hover:bg-[#080d1e]/80 transition-all flex justify-between items-center group cursor-pointer">
              <div className="space-y-1">
                <h3 className="font-semibold text-sm group-hover:text-emerald-400 transition-colors">Fetching Data in Server Components</h3>
                <span className="text-[11px] text-slate-500">Next.js Module</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-emerald-400 transition-all shrink-0 ml-4" />
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#080d1e]/40 hover:bg-[#080d1e]/80 transition-all flex justify-between items-center group cursor-pointer">
              <div className="space-y-1">
                <h3 className="font-semibold text-sm group-hover:text-emerald-400 transition-colors">Implementing NextAuth.js</h3>
                <span className="text-[11px] text-slate-500 font-light">Authentication</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-emerald-400 transition-all shrink-0 ml-4" />
            </div>
          </div>
        </div>

        {/* Custom Dashboard Footer */}
        <footer className="mt-16 border-t border-white/5 pt-8 flex items-center justify-end text-xs font-mono tracking-wider text-slate-500">
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">API Docs</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
