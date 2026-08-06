import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Play, Flame, CheckCircle, Clock, ArrowRight, Compass, Sparkles, BookOpen, Loader2 } from 'lucide-react';

export default function DashboardPage() {
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
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Unable to load dashboard</h2>
        <p className="text-sm text-slate-500">Please make sure the database is seeded.</p>
        <Link to="/roadmap/frontend-development" className="inline-block px-4 py-2 gradient-bg text-white rounded-lg text-sm font-semibold">
          View Roadmap
        </Link>
      </div>
    );
  }

  const { user, stats, continue_learning, recently_completed, recommended_next } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Welcome back, {user.name} 👋
          </h1>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Track your progress & keep building momentum.
          </p>
        </div>

        <Link
          to="/roadmap/frontend-development"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs"
        >
          <Compass className="w-4 h-4 text-indigo-600" />
          View Full Roadmap
        </Link>
      </div>

      {/* Hero Continue Learning Card */}
      {continue_learning ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white shadow-xl relative overflow-hidden space-y-6">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Play className="w-3.5 h-3.5 fill-indigo-300" />
            <span>Continue Where You Left Off</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-indigo-200 font-medium">Module: {continue_learning.module_title}</span>
            <h2 className="text-xl sm:text-2xl font-bold">{continue_learning.lesson_title}</h2>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-indigo-200">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~{continue_learning.duration_minutes} min video</span>
              <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Notes & Takeaways included</span>
            </div>

            <Link
              to={`/lesson/${continue_learning.lesson_id}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-950 font-bold hover:bg-indigo-50 shadow-md transition-all group"
            >
              Resume Lesson
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      ) : null}

      {/* Key Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-slate-500 dark:text-zinc-400">
            <span className="text-xs font-semibold">Overall Progress</span>
            <Sparkles className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{stats.overall_progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${stats.overall_progress}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-slate-500 dark:text-zinc-400">
            <span className="text-xs font-semibold">Current Streak</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{stats.current_streak}</span>
            <span className="text-xs text-slate-500 font-semibold">Days 🔥</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400">Complete 1 lesson daily</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-slate-500 dark:text-zinc-400">
            <span className="text-xs font-semibold">Lessons Done</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{stats.lessons_completed}</span>
            <span className="text-xs text-slate-500 font-medium">/ {stats.total_lessons}</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400">Frontend Roadmap</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-slate-500 dark:text-zinc-400">
            <span className="text-xs font-semibold">Time Spent</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {(stats.time_spent_minutes / 60).toFixed(1)}
            </span>
            <span className="text-xs text-slate-500 font-semibold">Hours</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400">Active learning time</p>
        </div>

      </div>

      {/* Grid for Recently Completed & Recommended Next */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Recently Completed */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Recently Completed
          </h3>

          {recently_completed && recently_completed.length > 0 ? (
            <div className="space-y-2.5">
              {recently_completed.map((lesson) => (
                <Link
                  key={lesson._id}
                  to={`/lesson/${lesson._id}`}
                  className="p-3.5 rounded-xl border border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-800/30 hover:bg-slate-100 dark:hover:bg-zinc-800/60 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {lesson.title}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">⏱ {lesson.duration_minutes}m</span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 py-4">No completed lessons yet. Start your first lesson!</p>
          )}
        </div>

        {/* Recommended Up Next */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Recommended Next Lesson
          </h3>

          {recommended_next ? (
            <Link
              to={`/lesson/${recommended_next._id}`}
              className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 hover:border-indigo-300 block space-y-3 transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                <span>NEXT LESSON</span>
                <span>⏱ {recommended_next.duration_minutes} min</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                {recommended_next.title}
              </h4>
              <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                Start Lesson <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ) : (
            <p className="text-xs text-slate-400 py-4">You have completed all lessons! 🎉</p>
          )}
        </div>

      </div>

    </div>
  );
}
