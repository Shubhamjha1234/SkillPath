import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Check, Sparkles, Clock, Target, GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [experienceLevel, setExperienceLevel] = useState('beginner');
  const [goal, setGoal] = useState('job');
  const [timeCommitment, setTimeCommitment] = useState('1hr');
  const [loading, setLoading] = useState(false);

  const { updateOnboarding } = useAuth();
  const navigate = useNavigate();

  const handleFinish = async () => {
    setLoading(true);
    try {
      await updateOnboarding({
        experience_level: experienceLevel,
        goal,
        time_commitment: timeCommitment
      });
      toast.success('Your learning path is personalized!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Failed to save preferences');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-xl space-y-8">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-zinc-500">
          <span>STEP {step} OF 3</span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-200 dark:bg-zinc-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Experience Level */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                What's your current experience with coding?
              </h2>
              <p className="text-sm text-slate-500 dark:text-zinc-400">
                We'll tailor your path starting point accordingly.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: 'beginner', title: 'Complete Beginner', desc: 'I have little to no experience with HTML/CSS or coding.' },
                { id: 'intermediate', title: 'Know some basics', desc: 'I know basic HTML/CSS and want to master JavaScript & React.' },
                { id: 'advanced', title: 'Looking for structure', desc: 'I know some JS/React but want a structured, complete roadmap.' }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setExperienceLevel(opt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    experienceLevel === opt.id
                      ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 ring-1 ring-indigo-600'
                      : 'border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{opt.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">{opt.desc}</p>
                  </div>
                  {experienceLevel === opt.id && <Check className="w-5 h-5 text-indigo-600 shrink-0" />}
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-xl font-semibold text-white gradient-bg flex items-center justify-center gap-2 shadow-md"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Main Goal */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                What is your primary goal?
              </h2>
              <p className="text-sm text-slate-500 dark:text-zinc-400">
                This helps us recommend the right projects and milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'job', title: '💼 Land a Developer Job', desc: 'Build job-ready skills & portfolio' },
                { id: 'projects', title: '🚀 Build My Own Projects', desc: 'Turn web ideas into real apps' },
                { id: 'freelancing', title: '🌐 Freelancing', desc: 'Build websites for clients' },
                { id: 'fun', title: '🎮 Learn for Fun', desc: 'Explore coding as a hobby' }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setGoal(opt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all space-y-1 ${
                    goal === opt.id
                      ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 ring-1 ring-indigo-600'
                      : 'border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{opt.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl font-semibold border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3 rounded-xl font-semibold text-white gradient-bg flex items-center justify-center gap-2 shadow-md"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Time Commitment */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                How much time can you spend daily?
              </h2>
              <p className="text-sm text-slate-500 dark:text-zinc-400">
                Consistency beats intensity. Even 30 minutes a day creates real momentum.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: '30min', title: '⚡ 30 minutes / day', desc: 'Casual pace • Complete roadmap in ~10 weeks' },
                { id: '1hr', title: '🔥 1 hour / day (Recommended)', desc: 'Balanced pace • Complete roadmap in ~5 weeks' },
                { id: '2hr', title: '🚀 2+ hours / day', desc: 'Intensive pace • Complete roadmap in ~2.5 weeks' }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setTimeCommitment(opt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    timeCommitment === opt.id
                      ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 ring-1 ring-indigo-600'
                      : 'border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{opt.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">{opt.desc}</p>
                  </div>
                  {timeCommitment === opt.id && <Check className="w-5 h-5 text-indigo-600 shrink-0" />}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-xl font-semibold border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                onClick={handleFinish}
                disabled={loading}
                className="w-2/3 py-3.5 rounded-xl font-semibold text-white gradient-bg flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Get Started
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
