import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { ArrowRight, Compass, Loader2 } from 'lucide-react';
import AppSidebar from '../components/layout/AppSidebar';

export default function RoadmapPage() {
  const navigate = useNavigate();
  const { slug = 'frontend-development' } = useParams();
  const [pathData, setPathData] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      api.get(`/paths/${slug}`),
      api.get(`/paths/${slug}/progress`)
    ])
      .then(([pathRes, progRes]) => {
        setPathData(pathRes.data);
        setUserProgress(progRes.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050814] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-cyan-400" />
      </div>
    );
  }

  if (!pathData) return null;

  const { path, modules } = pathData;
  const progressPercentage = userProgress?.percentage || 0;
  const completedIds = userProgress?.completed_lesson_ids || userProgress?.completedLessonIds || [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row font-sans">
      <AppSidebar activeKey="roadmap" />

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Overview Card */}
          <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300 mb-3">
              <Compass className="w-4 h-4" />
              Roadmap Overview
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{path.title || 'Frontend Development Roadmap'}</h1>
            <p className="mt-3 text-slate-300 leading-7 text-sm sm:text-base">{path.description}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Path</p>
                <h2 className="mt-2 text-lg sm:text-xl font-semibold text-white">{path.title}</h2>
                <p className="mt-1 text-slate-400 text-sm">{path.description}</p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Progress</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{progressPercentage}%</span>
                  <span className="text-sm text-slate-400">{completedIds.length} lessons completed</span>
                </div>
              </div>
            </div>
          </section>

          {/* Modules */}
          {modules && modules.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Modules</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {modules.map((mod, index) => (
                  <div key={mod._id || mod.id || index} className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Module {index + 1}</span>
                      {mod.duration && <span className="text-xs text-slate-400">{mod.duration}</span>}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                    <p className="text-sm text-slate-400 mb-5 line-clamp-2">{mod.description}</p>
                    <Link
                      to={mod.lessons && mod.lessons.length > 0 ? `/lesson/${mod.lessons[0]._id || mod.lessons[0].id}` : '#'}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Start Module <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
