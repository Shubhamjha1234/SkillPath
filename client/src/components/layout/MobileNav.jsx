import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, Compass, User } from 'lucide-react';

export default function MobileNav() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050814]/95 backdrop-blur-lg border-t border-white/5 py-2 px-6">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link
          to="/dashboard"
          className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
            isActive('/dashboard')
              ? 'text-sky-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/roadmap/frontend-development"
          className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
            isActive('/roadmap/frontend-development')
              ? 'text-sky-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span>Roadmap</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
            isActive('/profile')
              ? 'text-sky-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
