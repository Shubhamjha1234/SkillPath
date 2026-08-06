import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { CheckCircle2, ArrowRight, ArrowLeft, ExternalLink, Lightbulb, Code2, BookOpen, Loader2, Sparkles, Circle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lessonData, setLessonData] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/lessons/${id}`)
      .then(res => {
        setLessonData(res.data);
        // Check progress
        api.get(`/modules/${res.data.module._id}/progress`)
          .then(progRes => {
            const completed = progRes.data.completed_lesson_ids.includes(id);
            setIsCompleted(completed);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleToggleComplete = async () => {
    setCompleting(true);
    try {
      if (isCompleted) {
        await api.delete(`/lessons/${id}/complete`);
        setIsCompleted(false);
        toast.success('Lesson marked as incomplete');
      } else {
        const res = await api.post(`/lessons/${id}/complete`);
        setIsCompleted(true);
        toast.success(`🎉 Lesson completed! Streak: ${res.data.streak} Days 🔥`);
      }
    } catch (err) {
      toast.error('Failed to update lesson completion state');
    } finally {
      setCompleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (!lessonData) return null;

  const { lesson, module, siblings, prev_lesson, next_lesson } = lessonData;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
        <Link to="/roadmap/frontend-development" className="hover:text-indigo-600">Frontend</Link>
        <span>/</span>
        <Link to={`/module/${module._id}`} className="hover:text-indigo-600 truncate max-w-[150px]">{module.title}</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold truncate">{lesson.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Content Area (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Lesson Header */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {lesson.title}
            </h1>
            <p className="text-xs text-slate-500 font-mono">⏱ ~{lesson.duration_minutes} minutes watch time</p>
          </div>

          {/* Embedded YouTube Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-slate-200 dark:border-zinc-800">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${lesson.youtube_id}?rel=0&modestbranding=1`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* About This Lesson */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              About This Lesson
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              {lesson.description}
            </p>
          </div>

          {/* Key Takeaways */}
          {lesson.key_takeaways && lesson.key_takeaways.length > 0 && (
            <div className="p-6 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-4">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {lesson.key_takeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Practice Task */}
          {lesson.practice_task && lesson.practice_task.title && (
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-600" />
                Practice Task: {lesson.practice_task.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {lesson.practice_task.description}
              </p>
              {lesson.practice_task.hint && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-800 text-xs font-mono text-slate-600 dark:text-zinc-400">
                  💡 <span className="font-semibold text-slate-800 dark:text-zinc-300">Hint:</span> {lesson.practice_task.hint}
                </div>
              )}
            </div>
          )}

          {/* Curated Resources */}
          {lesson.resources && lesson.resources.length > 0 && (
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Curated Documentation & Resources
              </h2>
              <div className="space-y-2">
                {lesson.resources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-100 dark:border-zinc-800 hover:border-indigo-300 flex items-center justify-between text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-indigo-600 transition-colors group"
                  >
                    <span>{res.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 shadow-lg z-30">
            <button
              onClick={handleToggleComplete}
              disabled={completing}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  : 'gradient-bg text-white shadow-md hover:scale-[1.02]'
              }`}
            >
              {completing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-900" />
                  Completed ✓
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4" />
                  Mark as Complete
                </>
              )}
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {prev_lesson && (
                <Link
                  to={`/lesson/${prev_lesson._id}`}
                  className="flex-1 sm:flex-none px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 flex items-center justify-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Prev
                </Link>
              )}
              {next_lesson && (
                <Link
                  to={`/lesson/${next_lesson._id}`}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Next Lesson <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

        </div>

        {/* Sidebar: Module Lessons List (Desktop) */}
        <div className="hidden lg:block lg:col-span-1 space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3 sticky top-20">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {module.title}
            </h3>

            <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
              {siblings && siblings.map((sib, idx) => {
                const isCurrent = sib._id.toString() === lesson._id.toString();

                return (
                  <Link
                    key={sib._id}
                    to={`/lesson/${sib._id}`}
                    className={`p-2.5 rounded-xl text-xs font-medium block truncate transition-colors ${
                      isCurrent
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200 dark:border-indigo-900/50'
                        : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    {idx + 1}. {sib.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
