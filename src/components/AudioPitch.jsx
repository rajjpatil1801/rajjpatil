import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AudioPitch = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const totalSeconds = 30;

  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (seconds >= totalSeconds) setSeconds(0);
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    setSeconds(0);
    setIsPlaying(true);
  };

  // 18 waveform bars with dynamic heights
  const bars = [14, 28, 40, 60, 48, 72, 34, 58, 80, 45, 68, 52, 75, 42, 60, 36, 50, 24];

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Info & Play Trigger */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={togglePlay}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-md shrink-0 ${
              isPlaying
                ? 'bg-purple-600 text-white animate-pulse'
                : 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:scale-105'
            }`}
            title={isPlaying ? 'Pause pitch' : 'Play 30-sec pitch'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                30-Second Audio Pitch
              </h4>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                Voice Note
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Listen to Raj's background, NLP specialization & internship goals.
            </p>
          </div>
        </div>

        {/* Dynamic Waveform Visualizer & Counter */}
        <div className="flex items-center gap-4 sm:shrink-0 justify-between sm:justify-end pl-14 sm:pl-0">
          
          {/* Dancing Waveform Bars */}
          <div className="flex items-center gap-1 h-8">
            {bars.map((baseH, idx) => {
              const animatedH = isPlaying
                ? Math.min(32, Math.max(6, (baseH * ((seconds % 4) + 1.2)) / 3.2))
                : Math.min(18, baseH / 3.5);

              return (
                <div
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-purple-600 dark:bg-purple-400'
                      : 'bg-neutral-300 dark:bg-neutral-700'
                  }`}
                  style={{ height: `${animatedH}px` }}
                />
              );
            })}
          </div>

          {/* Time Counter */}
          <div className="text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
            0:{seconds < 10 ? `0${seconds}` : seconds} / 0:30
          </div>

          {/* Transcript Toggle Button */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 underline underline-offset-4"
          >
            <span>{showTranscript ? 'Hide' : 'Transcript'}</span>
            {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* Expandable Transcript */}
      {showTranscript && (
        <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 bg-neutral-50 dark:bg-neutral-950 p-4 rounded-2xl animate-in fade-in duration-200">
          <span className="font-bold uppercase tracking-wider text-[10px] text-neutral-400 block">
            Verbatim Transcript:
          </span>
          <p>
            "Hi, I'm <strong className="text-neutral-900 dark:text-white">Raj Jitendra Patil</strong>, an AI & Data Science undergraduate at R.C. Patel Institute of Technology with an 8.48 CGPA. I specialize in building practical Natural Language Processing and Information Retrieval systems in Python and Java—bridging dense vector embeddings, TF-IDF scoring, and relational databases. Outside coding, I head our college's data science community <strong className="text-neutral-900 dark:text-white">DATAVERSE</strong> and train school students in AI literacy. I am actively seeking AI/ML and software engineering internships where I can make an immediate technical contribution."
          </p>
        </div>
      )}
    </div>
  );
};
