import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { ArrowRight, Compass, Loader2, LayoutDashboard, BookOpen, Award, Settings } from 'lucide-react';

export default function RoadmapPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
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
      <div className='min-h-[70vh] flex items-center justify-center bg-slate-950 text-white'>
        <Loader2 className='w-10 h-10 animate-spin text-cyan-400' />
      </div>
    );
  }

  if (!pathData) return null;

  const { path } = pathData;
  const progressPercentage = userProgress?.percentage || 0;
  const completedIds = userProgress?.completedLessonIds || [];

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 flex'>
      <aside className='w-64 border-r border-white/5 bg-[#050814] flex flex-col justify-between p-6 shrink-0'>
        <div className='space-y-8'>
          <div className='p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3'>
            <div className='w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center'>
              <span className='text-sm font-bold text-white'>{user?.name ? user.name[0].toUpperCase() : 'A'}</span>
            </div>
            <div>
              <div className='text-sm font-semibold truncate'>{user?.name || 'Learner'}</div>
              <div className='text-[11px] text-slate-400 truncate'>Pro Plan • 12 Day Streak</div>
            </div>
          </div>
          <nav className='space-y-1.5'>
            <button onClick={() => navigate('/dashboard')} className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all'>
              <LayoutDashboard className='w-5 h-5' />
              Dashboard
            </button>
            <button onClick={() => navigate('/learning-paths')} className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all'>
              <BookOpen className='w-5 h-5' />
              Learning Paths
            </button>
            <button onClick={() => navigate('/roadmap/frontend-development')} className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-emerald-950/30 text-emerald-400 border border-emerald-500/10 transition-all'>
              <Compass className='w-5 h-5' />
              Roadmap
            </button>
            <button onClick={() => navigate('/profile')} className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all'>
              <Award className='w-5 h-5' />
              Certificates
            </button>
            <button onClick={() => navigate('/profile')} className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-all'>
              <Settings className='w-5 h-5' />
              Settings
            </button>
          </nav>
        </div>
        <button className='w-full bg-[#1b2034] hover:bg-[#232a45] text-slate-300 border border-white/5 font-medium text-sm py-3 rounded-xl transition-all'>
          Upgrade to Pro
        </button>
      </aside>
      <main className='flex-1 overflow-auto p-10'>
        <div className='max-w-6xl mx-auto space-y-8'>
          <section className='rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-10 shadow-2xl shadow-slate-950/20'>
            <div className='flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-cyan-300 mb-4'>
              <Compass className='w-4 h-4' />
              Roadmap Overview
            </div>
            <h1 className='text-4xl font-bold text-white'>{path.title || 'Frontend Development Roadmap'}</h1>
            <p className='mt-4 text-slate-300 leading-8'>{path.description || 'Track your progress through modules while keeping the workspace sidebar visible.'}</p>
            <div className='mt-10 grid gap-4 md:grid-cols-2'>
              <div className='rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6'>
                <p className='text-sm uppercase tracking-[0.24em] text-slate-400'>Path</p>
                <h2 className='mt-3 text-2xl font-semibold text-white'>{path.title}</h2>
                <p className='mt-2 text-slate-400'>{path.description}</p>
              </div>
              <div className='rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6'>
                <p className='text-sm uppercase tracking-[0.24em] text-slate-400'>Progress</p>
                <div className='mt-3 flex items-center gap-3'>
                  <span className='text-3xl font-bold text-white'>{progressPercentage}%</span>
                  <span className='text-sm text-slate-400'>{completedIds.length} lessons completed</span>
                </div>
              </div>
            </div>
          </section>

          {/* Modules List */}
          {path.modules && path.modules.length > 0 && (
            <section className='space-y-6'>
              <h2 className='text-2xl font-bold text-white'>Modules</h2>
              <div className='grid gap-6 md:grid-cols-2'>
                {path.modules.map((mod, index) => (
                  <div key={mod.id || index} className='glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-xs font-semibold text-emerald-400 uppercase tracking-widest'>Module {index + 1}</span>
                      {mod.duration && <span className='text-xs text-slate-400'>{mod.duration}</span>}
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>{mod.title}</h3>
                    <p className='text-sm text-slate-400 mb-6 line-clamp-2'>{mod.description}</p>
                    <Link
                      to={`/module/${mod.id}`}
                      className='inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors'
                    >
                      View Module <ArrowRight className='w-4 h-4' />
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
