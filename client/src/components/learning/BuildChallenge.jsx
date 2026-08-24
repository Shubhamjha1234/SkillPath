import React, { useState } from 'react';
import { Award, CheckSquare, Code, Lightbulb, ChevronDown, ChevronRight, Check, Play, Clipboard } from 'lucide-react';
import toast from 'react-hot-toast';

export default function BuildChallenge({ challenge, onComplete, isCompleted = false }) {
  const [checkedRequirements, setCheckedRequirements] = useState({});
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!challenge || !challenge.title) return null;

  const toggleRequirement = (idx) => {
    setCheckedRequirements(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopyStarter = async () => {
    try {
      await navigator.clipboard.writeText(challenge.starter_code);
      setCopied(true);
      toast.success('Starter code copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  const difficultyColors = {
    Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    Hard: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };

  const diffColor = difficultyColors[challenge.difficulty] || 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#0c1020] via-[#080b18] to-[#0c1020] border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.05)] overflow-hidden">
      
      {/* Decorative Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <div className="p-6 md:p-8 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-mono">
              <Award className="w-3.5 h-3.5" />
              Learn by Building Challenge
            </span>
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">
              {challenge.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <span className={`px-2.5 py-1 text-[10px] font-mono border rounded-lg uppercase ${diffColor}`}>
              {challenge.difficulty}
            </span>
            {challenge.estimated_time && (
              <span className="px-2.5 py-1 text-[10px] font-mono bg-slate-900 border border-white/5 text-slate-400 rounded-lg">
                ⏱ {challenge.estimated_time}
              </span>
            )}
          </div>
        </div>

        {/* Challenge Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-light">
          {challenge.description}
        </p>

        {/* Skills Tag Cloud */}
        {challenge.skills && challenge.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {challenge.skills.map((skill, idx) => (
              <span key={idx} className="bg-white/5 border border-white/5 text-slate-400 text-[10px] rounded-md px-2 py-0.5 font-mono">
                #{skill}
              </span>
            ))}
          </div>
        )}

        {/* Requirements Checklist */}
        {challenge.requirements && challenge.requirements.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              Requirements
            </h3>
            <div className="grid gap-2 sm:grid-cols-1">
              {challenge.requirements.map((req, idx) => {
                const isChecked = !!checkedRequirements[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => toggleRequirement(idx)}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-slate-300'
                        : 'bg-black/20 border-white/5 text-slate-400 hover:border-white/10'
                    }`}
                  >
                    <div className={`mt-0.5 flex items-center justify-center w-4.5 h-4.5 rounded border transition-colors ${
                      isChecked ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-slate-600 bg-transparent'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                    </div>
                    <span className={`text-xs font-light leading-relaxed ${isChecked ? 'line-through opacity-70' : ''}`}>
                      {req}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Starter Code Block */}
        {challenge.starter_code && (
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              Starter Code
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-900 flex items-center justify-between group">
              <pre className="p-4 overflow-x-auto text-xs font-mono text-indigo-300 select-all leading-normal max-w-full scrollbar-thin">
                <code>{challenge.starter_code}</code>
              </pre>
              <button
                onClick={handleCopyStarter}
                className="absolute right-3 top-3 p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-slate-400 hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-1 text-[10px] font-mono shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Expected Behavior */}
        {challenge.expected_behavior && (
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Expected Output / Behavior
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light font-mono bg-black/15 p-3 rounded-lg border border-white/5">
              {challenge.expected_behavior}
            </p>
          </div>
        )}

        {/* Hints Section */}
        {challenge.hints && challenge.hints.length > 0 && (
          <div className="border-t border-white/5 pt-4">
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Reveal Hints</span>
              {showHints ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>
            
            {showHints && (
              <div className="mt-3 space-y-2">
                {challenge.hints.map((hint, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs text-slate-400 font-light leading-relaxed">
                    💡 <span className="font-semibold text-slate-300">Hint {idx + 1}:</span> {hint}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Solution & Explanation Section */}
        {challenge.solution_explanation && (
          <div className="border-t border-white/5 pt-4">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Reveal Solution & Explanation</span>
              {showSolution ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>

            {showSolution && (
              <div className="mt-3 p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-3">
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {challenge.solution_explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Challenge Action Complete Trigger */}
        <div className="border-t border-white/5 pt-5 flex items-center justify-end">
          <button
            onClick={onComplete}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              isCompleted
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:scale-[1.02]'
            }`}
          >
            {isCompleted ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                Challenge Complete
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Mark Challenge Complete
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
