import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Play, ChevronDown, ChevronRight, X, Compass, BarChart } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function CourseSidebar({
  modules = [],
  currentLessonId,
  completedLessonIds = [],
  progress,
  isOpen = false,
  onClose
}) {
  const [expandedModules, setExpandedModules] = useState({});

  // Automatically expand the module containing the current active lesson
  useEffect(() => {
    if (modules && currentLessonId) {
      const activeModule = modules.find(m =>
        m.lessons && m.lessons.some(l => l._id.toString() === currentLessonId.toString())
      );
      if (activeModule) {
        setExpandedModules(prev => ({
          ...prev,
          [activeModule._id]: true
        }));
      }
    }
  }, [modules, currentLessonId]);

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const totalLessons = progress?.total_lessons || modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);
  const completedCount = progress?.completed_lessons_count || completedLessonIds.length;

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#050814]/95 dark:bg-[#070b1a] border-r border-white/5 text-slate-200">
      
      {/* Sidebar Progress Header */}
      <div className="p-5 border-b border-white/5 space-y-4 shrink-0">
        <h2 className="text-sm font-bold tracking-wider text-slate-100 flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-400" />
          Course Navigation
        </h2>
        
        <ProgressBar
          value={completedCount}
          max={totalLessons || 1}
          label="Course Progress"
        />
      </div>

      {/* Scrollable Curriculum Outline */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {modules.map((mod, index) => {
          const isExpanded = !!expandedModules[mod._id];
          const completedInModule = mod.lessons?.filter(l => completedLessonIds.includes(l._id))?.length || 0;
          const totalInModule = mod.lessons?.length || 0;
          const moduleProgressPct = totalInModule > 0 ? Math.round((completedInModule / totalInModule) * 100) : 0;

          return (
            <div key={mod._id} className="rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all overflow-hidden">
              {/* Module Accordion Header */}
              <button
                onClick={() => toggleModule(mod._id)}
                className="w-full flex items-center justify-between p-3.5 text-left transition-colors"
              >
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-0.5">
                    Module {index + 1}
                  </span>
                  <h3 className="text-xs font-bold text-slate-100 truncate">
                    {mod.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500">
                    {completedInModule}/{totalInModule} completed ({moduleProgressPct}%)
                  </span>
                </div>
                <div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </div>
              </button>

              {/* Nested Lessons List */}
              {isExpanded && (
                <div className="border-t border-white/5 bg-black/25 px-2 py-1.5 space-y-1">
                  {mod.lessons && mod.lessons.map((les, lIdx) => {
                    const isCurrent = les._id.toString() === currentLessonId.toString();
                    const isCompleted = completedLessonIds.includes(les._id);

                    return (
                      <Link
                        key={les._id}
                        to={`/lesson/${les._id}`}
                        onClick={onClose}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium transition-all ${
                          isCurrent
                            ? 'bg-emerald-950/40 text-emerald-300 font-bold border border-emerald-500/20 shadow-sm'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                        }`}
                      >
                        {/* Status Icon Indicator */}
                        <div className="shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-500/10" />
                          ) : isCurrent ? (
                            <Play className="w-3.5 h-3.5 text-emerald-400 animate-pulse fill-emerald-500/15" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-slate-600" />
                          )}
                        </div>
                        <span className="truncate">
                          {index + 1}.{lIdx + 1} {les.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar (width w-64 md:w-72) */}
      <aside className="hidden lg:block w-72 h-[calc(100vh-64px)] sticky top-16 shrink-0 z-20">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Sidebar Pane */}
          <div className="relative flex flex-col w-72 max-w-[85vw] h-full animate-slide-in">
            {/* Close Button Inside mobile pane */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
