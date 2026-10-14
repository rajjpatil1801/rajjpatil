import React from 'react';
import { ArrowDown, FileText, Mail, Sparkles, MapPin, Award, Terminal, Play } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodechefIcon } from './Icons';
import { NeuralBackground } from './NeuralBackground';
import { AudioPitch } from './AudioPitch';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume, onOpenTerminal, darkMode }) => {
  const { personal } = portfolioData;

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-neutral-200/70 dark:border-neutral-800 relative overflow-hidden bg-radial from-neutral-100/60 via-neutral-50 to-neutral-50 dark:from-neutral-900/60 dark:via-neutral-950 dark:to-neutral-950 transition-colors">
      
      {/* Interactive Neural Network Synapse Mesh Background */}
      <NeuralBackground darkMode={darkMode} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid: Info on left, Portrait Photo on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{personal.availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Hi, I’m <span className="underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-8">{personal.name}</span>.
            </h1>
            
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 leading-snug">
              {personal.role} specializing in <span className="text-neutral-950 dark:text-white font-bold">{personal.specialization}</span>.
            </p>

            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Building NLP and semantic retrieval pipelines using Python, vector embeddings, and TF-IDF. Strong foundation in Data Structures & Algorithms with Java & Python, club head of <span className="font-semibold text-neutral-900 dark:text-white">DATAVERSE</span>, and active AI tutor.
            </p>

            {/* Location & Quick metadata */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {personal.location}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-neutral-400" />
                R.C. Patel Institute of Technology
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 font-semibold">
                CGPA: 8.48 / 10
              </span>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm hover:shadow"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#ai-playground"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-semibold text-sm hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                <span>Try Live AI Lab</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-2xs"
                title="Launch CLI Terminal"
              >
                <Terminal className="w-4 h-4 text-neutral-500" />
                <span>CLI Terminal</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Social Badges */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[11px]">Connect:</span>
              
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/{personal.githubUsername}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>linkedin.com/in/{personal.linkedinDisplay}</span>
              </a>

              <a
                href={personal.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <CodechefIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>codechef.com/users/{personal.codechefUsername}</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Raj's Professional Portrait */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              
              {/* Soft decorative accent glow behind the portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-neutral-300/40 via-neutral-200/30 to-amber-100/30 dark:from-purple-900/30 dark:via-neutral-800/40 dark:to-neutral-900/20 rounded-[32px] blur-md -z-10 group-hover:scale-105 transition-transform duration-500" />

              {/* Main Photo Card Frame */}
              <div className="relative bg-white dark:bg-neutral-900 p-3 sm:p-3.5 rounded-[28px] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-all group-hover:shadow-2xl">
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle bottom shadow vignette for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80" />

                  {/* Overlaid Profile Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-white/60 dark:border-neutral-800 shadow-xs flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">
                        {personal.name}
                      </div>
                      <div className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
                        Head of Club • DATAVERSE
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shrink-0">
                      AI & NLP
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>CGPA 8.48</span>
              </div>

            </div>
          </div>

        </div>

        {/* 30-Second Elevator Pitch with Waveform Audio Player */}
        <div className="mt-12">
          <AudioPitch />
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
