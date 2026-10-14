import React from 'react';
import { ExternalLink, Layers, Sparkles, Terminal, Database, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-b border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Selected Works
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Featured Projects
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            Production-oriented tools built around information retrieval, statistical NLP, and data preprocessing.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-neutral-50/70 dark:bg-neutral-900/60 rounded-3xl p-7 sm:p-8 border border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-900 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header row with badge and category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900 dark:bg-white text-white dark:text-neutral-950">
                    <Sparkles className="w-3 h-3 text-amber-300 dark:text-amber-500" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-neutral-950 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="mt-6 pt-5 border-t border-neutral-200/80 dark:border-neutral-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-3">
                    Technical Architecture & Highlights:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 shrink-0" />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-200/80 dark:border-neutral-800">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group-hover:underline underline-offset-4"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#ai-playground"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
                  >
                    <span>Test Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub profile banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                Interested in exploring more repositories?
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Check out active experiments, DSA implementations, and scripts on my GitHub profile.
              </p>
            </div>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-2xs"
          >
            <span>Visit @{portfolioData.personal.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
