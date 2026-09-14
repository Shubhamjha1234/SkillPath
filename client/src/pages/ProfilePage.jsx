import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { Loader2, User as UserIcon, Mail, Target, Clock } from 'lucide-react';
import AppSidebar from '../components/layout/AppSidebar';

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard')
      .then(res => setStats(res.data))
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

  return (
    <div className="min-h-screen bg-[#050814] text-white flex flex-col lg:flex-row font-sans">
      <AppSidebar activeKey="settings" />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 border-b border-white/5 px-8 items-center justify-between shrink-0">
          <nav className="flex items-center gap-6">
            <button onClick={() => navigate('/learning-paths')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Paths</button>
            <button onClick={() => navigate('/roadmap/frontend-development')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Roadmap</button>
            <button onClick={() => navigate('/community')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Community</button>
          </nav>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-8 overflow-y-auto">
          <div className="relative space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Settings</h1>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl">
              Manage your profile, target learning goals, and account details.
            </p>
          </div>

          <div className="max-w-3xl space-y-6">
            {/* Personal Info */}
            <div className="p-5 sm:p-8 rounded-2xl border border-white/5 bg-[#080d1e]/40 space-y-5">
              <h2 className="text-base sm:text-lg font-bold text-white border-b border-white/5 pb-3">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: UserIcon, label: 'Full Name', value: user?.name || 'Learner', type: 'text' },
                  { icon: Mail, label: 'Email Address', value: user?.email || 'user@example.com', type: 'email' },
                  { icon: Target, label: 'Learning Goal', value: user?.goal ? user.goal.toUpperCase() : 'JOB READY', type: 'text' },
                  { icon: Clock, label: 'Time Commitment', value: user?.time_commitment || '1hr/day', type: 'text' },
                ].map(({ icon: Icon, label, value, type }) => (
                  <div key={label} className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" /> {label}
                    </label>
                    <input
                      type={type}
                      readOnly
                      value={value}
                      className="w-full bg-[#050814]/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Active Roadmap */}
            <div className="p-5 sm:p-8 rounded-2xl border border-white/5 bg-[#080d1e]/40 space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-white">Active Roadmap</h2>
              <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/10 bg-emerald-950/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-sm">Technical Learning Path</h3>
                  <p className="text-xs text-slate-400">HTML • CSS • JavaScript • Git • React • APIs • Deployment</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/15 px-3 py-1 rounded-full uppercase tracking-wider font-mono self-start sm:self-auto">
                  ENROLLED
                </span>
              </div>
            </div>
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
