import React, { useState, useEffect } from 'react';
import { Search, FileText, Mail, Phone, Moon, Sun, Terminal, ExternalLink, ArrowRight, X, Sparkles, Layers, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CommandPalette = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenTerminal,
  onOpenCover,
  darkMode,
  onToggleDarkMode,
}) => {
  const [query, setQuery] = useState('');
  const { personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // toggle trigger
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'View & Print Full Resume',
      category: 'Actions',
      icon: FileText,
      run: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'terminal',
      title: 'Open Interactive CLI Terminal',
      category: 'Actions',
      icon: Terminal,
      run: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'theme',
      title: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      category: 'Preferences',
      icon: darkMode ? Sun : Moon,
      run: () => {
        onToggleDarkMode();
      },
    },
    {
      id: 'cover',
      title: 'Reopen Welcome Cover Screen',
      category: 'Navigation',
      icon: Sparkles,
      run: () => {
        onClose();
        if (onOpenCover) onOpenCover();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${personal.email})`,
      category: 'Contact',
      icon: Mail,
      run: () => {
        navigator.clipboard.writeText(personal.email);
        onClose();
      },
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${personal.phone})`,
      category: 'Contact',
      icon: Phone,
      run: () => {
        navigator.clipboard.writeText(personal.phone);
        onClose();
      },
    },
    {
      id: 'nav-playground',
      title: 'Jump to AI & NLP Playground',
      category: 'Navigation',
      icon: Sparkles,
      run: () => {
        onClose();
        window.location.hash = '#ai-playground';
      },
    },
    {
      id: 'nav-projects',
      title: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: Layers,
      run: () => {
        onClose();
        window.location.hash = '#projects';
      },
    },
    {
      id: 'nav-skills',
      title: 'Jump to Technical Skills',
      category: 'Navigation',
      icon: ArrowRight,
      run: () => {
        onClose();
        window.location.hash = '#skills';
      },
    },
    {
      id: 'nav-leadership',
      title: 'Jump to Leadership & DATAVERSE',
      category: 'Navigation',
      icon: Award,
      run: () => {
        onClose();
        window.location.hash = '#leadership';
      },
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact Section',
      category: 'Navigation',
      icon: Mail,
      run: () => {
        onClose();
        window.location.hash = '#contact';
      },
    },
    {
      id: 'github',
      title: 'Visit GitHub Profile (@rajjpatil1801)',
      category: 'External',
      icon: ExternalLink,
      run: () => {
        window.open(personal.github, '_blank');
      },
    },
    {
      id: 'linkedin',
      title: 'Visit LinkedIn Profile',
      category: 'External',
      icon: ExternalLink,
      run: () => {
        window.open(personal.linkedin, '_blank');
      },
    },
    {
      id: 'codechef',
      title: 'Visit CodeChef Profile (@vincenzo_18)',
      category: 'External',
      icon: ExternalLink,
      run: () => {
        window.open(personal.codechef, '_blank');
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-neutral-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white dark:bg-neutral-900 w-full max-w-xl rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-neutral-400">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.run}
                  className="w-full px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ItemIcon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">ESC</kbd> to exit</span>
          <span><kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">Ctrl + K</kbd> to toggle</span>
        </div>
      </div>
    </div>
  );
};
