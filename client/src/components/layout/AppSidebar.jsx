import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, BookOpen, Compass, Award, Settings, HelpCircle, LogOut, Menu, X } from 'lucide-react';

export default function AppSidebar({ activeKey }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { key: 'learning-paths', icon: BookOpen, label: 'Learning Paths', path: '/learning-paths' },
    { key: 'roadmap', icon: Compass, label: 'Roadmap', path: '/roadmap/frontend-development' },
    { key: 'certificates', icon: Award, label: 'Certificates', path: '/profile' },
    { key: 'settings', icon: Settings, label: 'Settings', path: '/profile' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col justify-between h-full p-5">
      <div className="space-y-6">
        {/* Logo */}
        <div className="px-2 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">
            Skill<span className="text-emerald-400">Path</span>
          </span>
          <button onClick={() => setOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Card */}
        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-white">
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </span>
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">{user?.name || 'Learner'}</div>
            <div className="text-[11px] text-slate-400 truncate">Pro Plan • 12 Day Streak</div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1">
          {navItems.map(({ key, icon: Icon, label, path }) => (
            <button
              key={key}
              onClick={() => { navigate(path); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeKey === key
                  ? 'bg-emerald-950/30 text-emerald-400 border border-emerald-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 transition-all">
          <HelpCircle className="w-5 h-5" />
          Help Center
        </button>
        <button
          onClick={() => { logout(); navigate('/'); }}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
        <button className="w-full bg-violet-300 hover:bg-violet-200 text-[#050814] font-semibold text-sm py-3 rounded-xl transition-all">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#050814] sticky top-0 z-30">
        <span className="font-bold text-lg tracking-tight">
          Skill<span className="text-emerald-400">Path</span>
        </span>
        <button onClick={() => setOpen(true)} className="text-slate-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative w-72 bg-[#050814] border-r border-white/5 h-full z-50 overflow-y-auto">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-white/5 bg-[#050814] flex-col shrink-0 h-screen sticky top-0">
        <SidebarContent />
      </aside>
    </>
  );
}
