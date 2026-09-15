import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, BookOpen, Compass, User } from 'lucide-react';

export default function MobileNav() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const links = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Home' },
    { to: '/learning-paths', icon: BookOpen, label: 'Paths' },
    { to: '/roadmap/frontend-development', icon: Compass, label: 'Roadmap' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050814]/95 backdrop-blur-lg border-t border-white/5 py-2 px-2 safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-xs font-medium transition-colors ${
              isActive(to) ? 'text-sky-400' : 'text-slate-400'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
