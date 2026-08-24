import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { CheckCircle2, ArrowRight, ArrowLeft, ExternalLink, Lightbulb, Code2, BookOpen, Loader2, Sparkles, Circle, Menu } from 'lucide-react';
import toast from 'react-hot-toast';
import AIVideoSection from '../components/learning/AIVideoSection';
import CommandSection from '../components/learning/CommandSection';
import CourseSidebar from '../components/learning/CourseSidebar';
import BuildChallenge from '../components/learning/BuildChallenge';

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lessonData, setLessonData] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);

  const [userProgress, setUserProgress] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  useEffect(() => {
    setChallengeCompleted(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    api.get(`/lessons/${id}`)
      .then(res => {
        setLessonData(res.data);
        const pathSlug = res.data.path_slug || 'frontend-development';
        // Fetch path progress dynamically
        api.get(`/paths/${pathSlug}/progress`)
          .then(progRes => {
            setUserProgress(progRes.data);
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
      const pathSlug = lessonData.path_slug || 'frontend-development';
      if (isCompleted) {
        await api.delete(`/lessons/${id}/complete`);
        setIsCompleted(false);
        toast.success('Lesson marked as incomplete');
      } else {
        const res = await api.post(`/lessons/${id}/complete`);
        setIsCompleted(true);
        toast.success(`🎉 Lesson completed! Streak: ${res.data.streak} Days 🔥`);
      }
      
      const progRes = await api.get(`/paths/${pathSlug}/progress`);
      setUserProgress(progRes.data);
    } catch (err) {
      toast.error('Failed to update lesson completion state');
    } finally {
      setCompleting(false);
    }
  };

  const handleChallengeComplete = async () => {
    if (challengeCompleted) {
      toast.success('Challenge already completed!');
      return;
    }
    setChallengeCompleted(true);
    toast.success('🚀 Build Challenge Completed Successfully!');
    if (!isCompleted) {
      await handleToggleComplete();
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

  const { lesson, module, siblings, prev_lesson, next_lesson, modules } = lessonData;

  return (
    <div className="min-h-screen bg-[#050814] flex text-white font-sans">
      {/* Course Left Sidebar */}
      <CourseSidebar
        modules={modules}
        currentLessonId={id}
        completedLessonIds={userProgress?.completed_lesson_ids || []}
        progress={userProgress}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Pane */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile Header / Sidebar Toggle */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/5 bg-[#050814] shrink-0 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5 text-emerald-400" />
            <span>Curriculum Outline</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <span>{userProgress?.percentage || 0}% Complete</span>
          </div>
        </div>

        {/* Lesson Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 max-w-4xl w-full mx-auto space-y-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
            <Link to={`/roadmap/${lessonData.path_slug || 'frontend-development'}`} className="hover:text-indigo-600">
              {lessonData.path_title || 'Roadmap'}
            </Link>
            <span>/</span>
            <span className="truncate max-w-[150px]">{module.title}</span>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-semibold truncate">{lesson.title}</span>
          </div>

          {/* Lesson Header: Title, Duration */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight animate-fade-in">
              {lesson.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
              <span>⏱ ~{lesson.duration_minutes} minutes watch time</span>
              {lesson.build_challenge && (
                <span className="text-emerald-400">⚡ Build Challenge Included</span>
              )}
            </div>
          </div>

          {/* AI Video section */}
          <AIVideoSection aiVideoUrl={lesson.ai_video_url} />

          {/* Embedded YouTube Player (Preserved as fallback) */}
          {lesson.youtube_id && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-slate-200 dark:border-zinc-800">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${lesson.youtube_id}?rel=0&modestbranding=1`}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* About This Topic */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              About This Topic
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              {lesson.description}
            </p>
          </div>

          {/* Command Section */}
          {lesson.command && <CommandSection command={lesson.command} />}

          {/* Learn by Building Challenge */}
          {lesson.build_challenge && (
            <BuildChallenge
              challenge={lesson.build_challenge}
              onComplete={handleChallengeComplete}
              isCompleted={challengeCompleted || isCompleted}
            />
          )}

          {/* Key Takeaways */}
          {lesson.key_takeaways && lesson.key_takeaways.length > 0 && (
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md space-y-4 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400 fill-amber-400/25" />
                Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {lesson.key_takeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 shrink-0 animate-pulse" />
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

          {/* Bottom Navigation & Actions Bar */}
          <div className="p-4 rounded-2xl bg-[#070b1a] border border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 shadow-2xl z-30">
            <button
              onClick={handleToggleComplete}
              disabled={completing}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                isCompleted
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:scale-[1.02]'
              }`}
            >
              {completing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-500/10" />
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
                  className="flex-1 sm:flex-none px-4 py-3 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Prev
                </Link>
              )}
              {next_lesson && (
                <Link
                  to={`/lesson/${next_lesson._id}`}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Next Lesson <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
