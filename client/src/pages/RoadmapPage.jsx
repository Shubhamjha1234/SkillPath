import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { CheckCircle2, PlayCircle, Lock, ChevronRight, Compass, Loader2 } from 'lucide-react';

export default function RoadmapPage() {
  const [pathData, setPathData] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/paths/frontend-development'),
      api.get('/paths/frontend-development/progress')
    ])
      .then(([pathRes, progRes]) => {
        setPathData(pathRes.data);
        setUserProgress(progRes.data);
      })
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

  if (!pathData) return null;

  const { path, modules } = pathData;
  const completedIds = userProgress?.completed_lesson_ids || [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Compass className="w-4 h-4" />
          <span>OFFICIAL CURRICULUM</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {path.title}
        </h1>
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl">
          {path.description}
        </p>

        {/* Overall Progress Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-zinc-300">
            <span>ROADMAP PROGRESS</span>
            <span>{userProgress?.percentage || 0}% ({userProgress?.completed_lessons_count || 0}/{path.total_lessons} completed)</span>
          </div>
          <div className="w-full h-3 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full gradient-bg transition-all duration-500"
              style={{ width: `${userProgress?.percentage || 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* Module Tree Listing */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Learning Modules</h2>

        <div className="space-y-4">
          {modules.map((mod, modIdx) => {
            const modLessons = mod.lessons || [];
            const modCompletedCount = modLessons.filter(l => completedIds.includes(l._id.toString())).length;
            const isCompleted = modLessons.length > 0 && modCompletedCount === modLessons.length;
            const isInProgress = modCompletedCount > 0 && !isCompleted;

            return (
              <div
                key={mod._id}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4 shadow-xs"
              >
                {/* Module Title Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isCompleted ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400' :
                      isInProgress ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400' :
                      'bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400'
                    }`}>
                      {isCompleted ? '✓' : modIdx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{mod.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{mod.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                    <span>{modCompletedCount}/{modLessons.length} Done</span>
                    <Link
                      to={`/module/${mod._id}`}
                      className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      Module Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Lesson Pills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                  {modLessons.map((lesson) => {
                    const done = completedIds.includes(lesson._id.toString());
                    return (
                      <Link
                        key={lesson._id}
                        to={`/lesson/${lesson._id}`}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all ${
                          done
                            ? 'bg-emerald-50/40 border-emerald-200/60 dark:bg-emerald-950/20 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-300'
                            : 'bg-slate-50/50 border-slate-200/60 dark:bg-zinc-800/30 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate pr-2">
                          {done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : (
                            <PlayCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono shrink-0">⏱ {lesson.duration_minutes}m</span>
                      </Link>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
