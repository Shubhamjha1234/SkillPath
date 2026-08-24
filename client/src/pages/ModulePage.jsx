import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { ArrowLeft, CheckCircle2, PlayCircle, Clock, ChevronRight, Loader2 } from 'lucide-react';

export default function ModulePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get(`/modules/${id}`),
      api.get(`/modules/${id}/progress`)
    ])
      .then(([modRes, progRes]) => {
        setData(modRes.data);
        setProgress(progRes.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (!data) return null;

  const { module, lessons } = data;
  const completedIds = progress?.completed_lesson_ids || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Back link */}
      <Link
        to={`/roadmap/${data.path_slug || 'frontend-development'}`}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Roadmap
      </Link>

      {/* Module Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400">
            MODULE {module.order}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
            ⏱ ~{module.estimated_minutes} minutes total
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {module.title}
        </h1>

        <p className="text-sm text-slate-600 dark:text-zinc-400">
          {module.description}
        </p>

        {/* Module Progress Bar */}
        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-zinc-300">
            <span>Module Progress</span>
            <span>{progress?.percentage || 0}% ({progress?.completed_count || 0}/{module.total_lessons})</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full gradient-bg transition-all duration-500"
              style={{ width: `${progress?.percentage || 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Lessons in this Module</h2>

        <div className="divide-y divide-slate-100 dark:divide-zinc-800/80 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 overflow-hidden shadow-xs">
          {lessons.map((lesson, idx) => {
            const isCompleted = completedIds.includes(lesson._id.toString());

            return (
              <Link
                key={lesson._id}
                to={`/lesson/${lesson._id}`}
                className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors group"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-4">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <PlayCircle className="w-5 h-5 text-indigo-500 shrink-0 group-hover:scale-110 transition-transform" />
                  )}

                  <div className="truncate space-y-0.5">
                    <h3 className={`text-sm font-semibold truncate ${
                      isCompleted
                        ? 'text-slate-500 dark:text-zinc-500 line-through'
                        : 'text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                    }`}>
                      {lesson.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-zinc-500 truncate">{lesson.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono">⏱ {lesson.duration_minutes}m</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 dark:text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
