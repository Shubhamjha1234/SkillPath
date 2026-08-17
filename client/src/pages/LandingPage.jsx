import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, MapPin, Sparkles, Code, ShieldCheck, Zap, Terminal, Compass, Flame } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      <main className="relative overflow-hidden">
        {/* Background glow & subtle ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

        {/* Hero Section */}
        <section className="relative px-5 pt-20 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center gap-10">
            <div className="max-w-4xl flex flex-col items-center">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                Curated Technical Learning Paths
              </div>

              <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                From scattered tutorials to a <span className="gradient-text">clear, mastery-driven</span> roadmap.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                A video-first, structured platform built for ambitious developers who want speed, clarity, and true engineering competence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-xl gradient-bg px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start Free Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl glass-panel px-8 py-4 text-base font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-200"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Feature Highlight Box */}
            <div className="w-full max-w-5xl mt-8 rounded-3xl glass-panel p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[90px] pointer-events-none rounded-full" />
              
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center text-left">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
                    <Compass className="h-4 w-4 text-indigo-400" />
                    Structured Learning System
                  </span>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Designed for momentum and real technical progress.
                  </h2>
                  <p className="text-base leading-relaxed text-slate-400">
                    Focused video modules, progress milestones, AI summaries, and practice checkpoints engineered to take you from foundational concepts to production confidence.
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-6 backdrop-blur-sm">
                  {[
                    'CS & Engineering fundamentals explained with visual clarity',
                    'Curated roadmaps that eliminate learning paralysis',
                    'Practical checkpoints & interactive quizzes per module',
                    'Real-time progress telemetry and achievement tracking'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                      <p className="text-sm sm:text-base leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="border-t border-white/5 px-5 py-20 sm:px-8 lg:px-12 relative">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Why SkillPath</span>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to master your stack</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="glass-panel p-8 rounded-2xl card-hover relative group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">Curated Video Lessons</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Hand-picked, high-signal video lectures structured into logical sequences so you waste zero time searching.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl card-hover relative group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">Skill Roadmaps</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Clear step-by-step pathways designed around real industry competencies and foundational theory.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl card-hover relative group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">Actionable Practice</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Consolidate learning with key takeaway summaries, essential documentation links, and interactive quizzes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-5 py-24 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-[#050814] to-[#050814] pointer-events-none" />
          <div className="mx-auto max-w-4xl text-center relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              <Flame className="h-4 w-4 text-purple-400" />
              Ready to Accelerate?
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Start building real technical skills today.
            </h2>
            
            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-400">
              Join free, choose your target technology path, and track your transition from learner to skilled developer.
            </p>

            <div>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-xl gradient-bg px-9 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

