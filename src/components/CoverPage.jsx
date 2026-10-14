import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, FileText, Terminal, Brain, Code2, Award, Compass, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { NeuralBackground } from './NeuralBackground';

export const CoverPage = ({ onEnter, onOpenResume, darkMode }) => {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const rotatingRoles = [
    'AI & Data Science Undergraduate',
    'NLP & Information Retrieval Developer',
    'Head of Club — DATAVERSE @ RCPIT',
    'AI Tutor & Tech Community Leader',
  ];

  // Rotate roles dynamically every 2.4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [rotatingRoles.length]);

  // Handle keyboard 'Enter' or 'Space' to enter portfolio
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnterClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleEnterClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 450); // smooth exit duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      } ${
        darkMode
          ? 'bg-neutral-950 text-white'
          : 'bg-neutral-900 text-white'
      }`}
    >
      {/* Dynamic Animated Background Patterns */}
      <NeuralBackground darkMode={darkMode} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Ambient Gradient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-neutral-800/30 rounded-full blur-[140px]" />
      </div>

      {/* Main Cover Card Content */}
      <div className="relative max-w-2xl w-full text-center space-y-7 z-10">
        
        {/* System Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-neutral-200 shadow-sm animate-in fade-in duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>PORTFOLIO EXPERIENCE 2026</span>
          <span className="text-white/40">•</span>
          <span className="text-emerald-400 font-bold">ONLINE</span>
        </div>

        {/* Center Portrait Image Frame */}
        <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 group">
          {/* Glowing Animated Ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-500 via-blue-500 to-emerald-400 rounded-full blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/80 shadow-2xl bg-neutral-800">
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-neutral-900 border border-white/30 text-amber-300 shadow-lg">
            <Sparkles className="w-4 h-4 fill-amber-300" />
          </div>
        </div>

        {/* Welcome Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              Raj Patil's
            </span>{' '}
            Portfolio
          </h1>

          {/* Dynamic Rotating Role Badge */}
          <div className="h-8 flex items-center justify-center">
            <div
              key={roleIndex}
              className="text-sm sm:text-lg font-medium text-neutral-300 inline-flex items-center gap-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
            >
              <span className="text-neutral-500">&lt;</span>
              <span className="text-white font-semibold">{rotatingRoles[roleIndex]}</span>
              <span className="text-neutral-500">/&gt;</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-neutral-300">
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>CGPA: 8.48 / 10</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5 text-purple-400" />
            <span>NLP & Search Systems</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Java & Python DSA</span>
          </span>
        </div>

        {/* Enter Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          
          {/* Main Enter Button */}
          <button
            onClick={handleEnterClick}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Direct Resume View */}
          <button
            onClick={() => {
              setIsExiting(true);
              setTimeout(() => {
                onOpenResume();
              }, 300);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold text-sm transition-all"
          >
            <FileText className="w-4 h-4 text-neutral-300" />
            <span>Direct Resume</span>
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="pt-4 text-[11px] text-neutral-400 flex items-center justify-center gap-2">
          <span>Press</span>
          <kbd className="px-2 py-0.5 rounded bg-white/15 border border-white/20 font-mono text-[10px] text-white">
            ENTER ↵
          </kbd>
          <span>or click above to enter</span>
        </div>

      </div>

      {/* Floating Bottom Left Brand credit */}
      <div className="absolute bottom-4 left-6 hidden md:flex items-center gap-2 text-xs text-neutral-500">
        <span>R.C. Patel Institute of Technology, Shirpur</span>
      </div>

      {/* Floating Bottom Right Quick Skip */}
      <button
        onClick={handleEnterClick}
        className="absolute bottom-4 right-6 text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
      >
        Skip directly →
      </button>
    </div>
  );
};
