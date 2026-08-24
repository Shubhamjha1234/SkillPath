import React, { useState } from 'react';
import { Terminal, Copy, Check, Info, ListOrdered } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CommandSection({ command }) {
  const [copied, setCopied] = useState(false);

  if (!command || !command.code) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command.code);
      setCopied(true);
      toast.success('Command copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy command');
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-5">
      {/* Title */}
      <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <Terminal className="w-4 h-4 text-indigo-600" />
        Command
      </h2>

      {/* Code Block Container */}
      <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-900 flex items-center justify-between group">
        <pre className="p-4 overflow-x-auto text-xs font-mono text-emerald-400 select-all leading-normal max-w-full scrollbar-thin">
          <code>{command.code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-slate-400 hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-1 text-[11px] font-mono shadow-md"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* What does it do */}
      {command.description && (
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            <Info className="w-3.5 h-3.5 animate-pulse text-indigo-500" />
            What does this command do?
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
            {command.description}
          </p>
        </div>
      )}

      {/* How do I use it */}
      {command.usage && (
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
            How do I use it?
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
            {command.usage}
          </p>
        </div>
      )}

      {/* Steps list */}
      {command.steps && command.steps.length > 0 && (
        <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
          <h3 className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            <ListOrdered className="w-3.5 h-3.5 text-purple-500" />
            Steps
          </h3>
          <ol className="space-y-2">
            {command.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-zinc-300">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0 animate-fade-in">
                  {idx + 1}
                </span>
                <span className="font-light leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
