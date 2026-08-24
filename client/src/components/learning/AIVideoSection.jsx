import React from 'react';
import { Sparkles, Video } from 'lucide-react';

export default function AIVideoSection({ aiVideoUrl }) {
  if (aiVideoUrl) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800/80 shadow-xl">
        <video
          className="w-full h-full"
          src={aiVideoUrl}
          controls
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#0b0f19] to-slate-950 border border-slate-800/80 shadow-xl flex flex-col items-center justify-center p-6 text-center group transition-all duration-300 hover:border-indigo-500/25">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
      
      {/* Futuristic Pulse Glow */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 mb-4 animate-pulse group-hover:scale-105 group-hover:text-indigo-300 group-hover:border-indigo-400/30 transition-all duration-300">
        <Video className="w-7 h-7" />
        <Sparkles className="absolute -top-1 -right-1 w-4.5 h-4.5 text-indigo-300" />
      </div>

      <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight flex items-center gap-1.5 justify-center">
        AI Generated Video
      </h3>
      <p className="text-xs text-slate-400 max-w-sm mt-1.5 font-light leading-relaxed">
        Video content will be available here soon. Your personalized, interactive learning walkthrough is being synthesized.
      </p>
      
      {/* Visual placeholder progress indicator */}
      <div className="flex gap-1.5 mt-5">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/30 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
