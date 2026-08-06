import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { User, Flame, Award, Clock, BookOpen, CheckCircle, Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard')
      .then(res => setStats(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Profile Info Header Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
        <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shrink-0">
          {user.name ? user.name[0].toUpperCase() : 'U'}
        </div>

        <div className="text-center sm:text-left space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
          <p className="text-sm text-slate-500 font-mono">{user.email}</p>
          
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
              Target Goal: {user.goal ? user.goal.toUpperCase() : 'JOB READY'}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 text-xs font-semibold">
              Commitment: {user.time_commitment || '1hr/day'}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      {loading ? (
        <div className="py-8 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-indigo-600" /></div>
      ) : stats ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 text-center">
            <span className="text-xs text-slate-400 font-medium">Overall Progress</span>
            <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{stats.stats.overall_progress}%</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 text-center">
            <span className="text-xs text-slate-400 font-medium">Lessons Completed</span>
            <div className="text-2xl font-extrabold text-emerald-600">{stats.stats.lessons_completed}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 text-center">
            <span className="text-xs text-slate-400 font-medium">Current Streak</span>
            <div className="text-2xl font-extrabold text-amber-500">{stats.stats.current_streak} 🔥</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 text-center">
            <span className="text-xs text-slate-400 font-medium">Active Hours</span>
            <div className="text-2xl font-extrabold text-blue-500">{(stats.stats.time_spent_minutes / 60).toFixed(1)}h</div>
          </div>
        </div>
      ) : null}

      {/* Enrolled Path */}
      <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Active Roadmap</h2>
        <div className="p-4 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-white">Frontend Development</h3>
            <p className="text-xs text-slate-500">HTML • CSS • JavaScript • Git • React • APIs • Deployment</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            ENROLLED
          </span>
        </div>
      </div>

    </div>
  );
}
