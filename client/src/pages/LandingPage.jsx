import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, MapPin, Sparkles, Code, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 shadow-xs animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured YouTube Roadmaps for Self-Learners</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Stop Searching. <br className="hidden sm:inline" />
            <span className="gradient-text">Start Learning Frontend.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            The best free YouTube tutorials organized into a clear, step-by-step curriculum. 
            No more tutorial hell — always know exactly what to study next.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white gradient-bg rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Learning Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors text-center"
            >
              Sign In to Continue
            </Link>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Free Forever</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Curated YouTube Content</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Fluff</span>
          </div>
        </div>
      </section>

      {/* Interactive Roadmap Preview Section */}
      <section className="py-16 px-4 bg-slate-100/60 dark:bg-zinc-900/40 border-y border-slate-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frontend Development Roadmap Preview
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              7 comprehensive modules, 67 curated video lessons, zero decision paralysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'HTML Foundations', lessons: '8 lessons', icon: '📄', color: 'from-orange-500/10 to-amber-500/10' },
              { num: '02', title: 'CSS Fundamentals', lessons: '10 lessons', icon: '🎨', color: 'from-blue-500/10 to-cyan-500/10' },
              { num: '03', title: 'JavaScript Essentials', lessons: '15 lessons', icon: '⚡', color: 'from-yellow-500/10 to-amber-500/10' },
              { num: '04', title: 'Git & GitHub', lessons: '6 lessons', icon: '🌿', color: 'from-emerald-500/10 to-teal-500/10' },
              { num: '05', title: 'React Framework', lessons: '12 lessons', icon: '⚛️', color: 'from-cyan-500/10 to-indigo-500/10' },
              { num: '06', title: 'Working with APIs', lessons: '8 lessons', icon: '🌐', color: 'from-purple-500/10 to-pink-500/10' },
              { num: '07', title: 'Deployment & Tools', lessons: '8 lessons', icon: '🚀', color: 'from-pink-500/10 to-rose-500/10' },
              { num: '→', title: 'Job Ready!', lessons: 'Portfolio Ready', icon: '🎯', color: 'from-indigo-500/20 to-purple-500/20' }
            ].map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 card-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{m.icon}</span>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-600">{m.num}</span>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{m.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium">{m.lessons}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why SkillPath?
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
              Built specifically for self-learners who want structure without paying for expensive bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Guided Learning Paths</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                No more guessing what tutorial to watch next. Follow a battle-tested roadmap from HTML to full React deployment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Handpicked Free YouTube Videos</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                We embed only the highest quality, most up-to-date video tutorials so you don't waste time on outdated videos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Takeaways & Practice Tasks</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                Every video includes AI takeaways, curated documentation links, and practical code tasks to reinforce what you watch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Master Frontend Development?</h2>
          <p className="text-indigo-200 text-base max-w-xl mx-auto">
            Join thousands of beginners building real skills with structured learning paths.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold bg-white text-indigo-950 rounded-xl hover:bg-indigo-50 shadow-xl transition-all"
          >
            Start Learning for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
