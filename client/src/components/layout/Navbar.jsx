import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Search, Bell, Settings, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/learning-paths', label: 'Learning Paths' },
    { to: '/roadmap', label: 'Roadmaps' },
    { to: '/community', label: 'Community' },
  ];

  return (
    <header className="w-full border-b border-white/5 bg-[#050814]/80 backdrop-blur-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-bold text-lg tracking-tight text-white shrink-0">
          Skill<span className="text-emerald-400">Path</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive(to) ? 'text-white' : 'text-slate-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-400 hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="text-slate-400 hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="text-slate-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <button className="bg-violet-300 hover:bg-violet-200 text-[#050814] font-semibold text-xs px-4 py-2 rounded-lg transition-all">
            Upgrade
          </button>
          <Link to="/profile">
            <div className="w-8 h-8 rounded-full border border-white/10 bg-slate-800 flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile: avatar + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/profile">
            <div className="w-8 h-8 rounded-full border border-white/10 bg-slate-800 flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </span>
            </div>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-400 hover:text-white transition-colors">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#050814]/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive(to) ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/5">
            <button className="w-full bg-violet-300 hover:bg-violet-200 text-[#050814] font-semibold text-sm py-2.5 rounded-xl transition-all mt-2">
              Upgrade to Pro
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
