import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { ArrowRight, Loader2 } from 'lucide-react';
import AppSidebar from '../components/layout/AppSidebar';

export default function DashboardPage() {
  const { user: authUser } = useAuth();
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

  const user = data?.user || authUser || { name: 'Learner' };

  return (
    <div className="min-h-screen bg-[#050814] text-white flex flex-col lg:flex-row font-sans">
      <AppSidebar activeKey="dashboard" />

      <main className="flex-1 overflow-y-auto">
        <div className="relative min-h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.06),transparent_40%)] pointer-events-none" />

          <div className="relative p-4 sm:p-6 lg:p-10 space-y-8 max-w-4xl">
            {/* Greeting */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                Welcome back, {user.name?.split(' ')[0] || 'Learner'}.
              </h1>
              <p className="text-slate-400 text-sm font-light">
                Here is what you missed since you've been away.
              </p>
            </div>

            {/* Current Path Card */}
            <div className="p-5 sm:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-[#0c142b] via-[#080d1e] to-[#050814] space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-indigo-400 font-semibold uppercase">Current Path</span>
                <h2 className="text-xl sm:text-2xl font-bold">Full-Stack React</h2>
              </div>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => navigate('/roadmap/frontend-development')}
                className="p-5 rounded-2xl border border-white/5 bg-[#080d1e]/40 hover:bg-[#080d1e]/80 transition-all flex justify-between items-center group cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm group-hover:text-emerald-400 transition-colors">Fetching Data in Server Components</h3>
                  <span className="text-[11px] text-slate-500">Next.js Module</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-emerald-400 transition-all shrink-0 ml-3" />
              </div>

              <div
                onClick={() => navigate('/roadmap/frontend-development')}
                className="p-5 rounded-2xl border border-white/5 bg-[#080d1e]/40 hover:bg-[#080d1e]/80 transition-all flex justify-between items-center group cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm group-hover:text-emerald-400 transition-colors">Implementing NextAuth.js</h3>
                  <span className="text-[11px] text-slate-500 font-light">Authentication</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-emerald-400 transition-all shrink-0 ml-3" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 border-t border-white/5 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono tracking-wider text-slate-500">
            <span>&copy; 2024 SkillPath</span>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Contact Support</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
