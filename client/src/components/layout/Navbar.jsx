import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Search, Bell, Settings } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full border-b border-white/5 bg-[#050814]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Navigation Links (Centered) */}
        <nav className="flex items-center gap-8 mx-auto pl-24">
          <Link
            to="/dashboard"
            className={`text-sm font-medium transition-colors hover:text-white ${
              isActive('/dashboard') ? 'text-white' : 'text-slate-400'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/learning-paths"
            className={`text-sm font-medium transition-colors hover:text-white ${
              isActive('/learning-paths') ? 'text-white' : 'text-slate-400'
            }`}
          >
            Learning Paths
          </Link>
          <Link
            to="/roadmap"
            className={`text-sm font-medium transition-colors hover:text-white ${
              location.pathname === '/roadmap' || location.pathname === '/roadmap/frontend-development'
                ? 'text-white'
                : 'text-slate-400'
            }`}
          >
            Roadmaps
          </Link>
          <Link
            to="/community"
            className={`text-sm font-medium transition-colors hover:text-white ${
              isActive('/community') ? 'text-white' : 'text-slate-400'
            }`}
          >
            Community
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-white transition-colors">
            <Search className="w-4.5 h-4.5" />
          </button>
          
          <button className="text-slate-400 hover:text-white transition-colors">
            <Bell className="w-4.5 h-4.5" />
          </button>

          <button className="text-slate-400 hover:text-white transition-colors">
            <Settings className="w-4.5 h-4.5" />
          </button>

          {/* Upgrade Button */}
          <div className="relative flex flex-col items-center">
            <button className="bg-violet-300 hover:bg-violet-200 text-[#050814] font-semibold text-xs px-4 py-2 rounded-lg transition-all shadow-[0_0_12px_rgba(167,139,250,0.2)]">
              Upgrad
            </button>
            <span className="absolute -bottom-1.5 w-1 h-1 bg-sky-500 rounded-full" />
          </div>

          {/* Profile/Avatar */}
          <Link to="/profile" className="flex items-center">
            <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden bg-slate-800 flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
