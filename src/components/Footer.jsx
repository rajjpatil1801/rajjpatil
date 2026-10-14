import React from 'react';
import { ArrowUp, Mail, Terminal, Search } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodechefIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ onOpenResume, onOpenTerminal, onOpenCommandPalette }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200/80 dark:border-neutral-800 py-12 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-neutral-900">
          {/* Brand info */}
          <div className="text-center sm:text-left">
            <div className="font-bold text-neutral-900 dark:text-white text-base">
              {personal.name}
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              AI & Data Science • R.C. Patel Institute of Technology
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-blue-700 dark:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-amber-700 dark:text-amber-400 transition-colors"
              aria-label="CodeChef"
            >
              <CodechefIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors"
              title="CLI Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-semibold shadow-2xs transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 dark:text-neutral-500">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built with React, Vite & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Resume
            </button>
            <span>•</span>
            <a href="#ai-playground" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              AI Lab
            </a>
            <span>•</span>
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <span>•</span>
            <button
              onClick={onOpenCommandPalette}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Commands (⌘K)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
