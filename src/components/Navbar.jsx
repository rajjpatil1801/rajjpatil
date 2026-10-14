import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail, Sun, Moon, Terminal, Search } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodechefIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({
  onOpenResume,
  onOpenTerminal,
  onOpenCommandPalette,
  darkMode,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'AI Lab', href: '#ai-playground' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 shadow-xs py-3'
          : 'bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xs border-b border-neutral-100 dark:border-neutral-900 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform hover:opacity-90"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-neutral-200/90 dark:border-neutral-700 shadow-2xs group-hover:scale-105 transition-transform shrink-0 bg-neutral-100 dark:bg-neutral-800">
            <img
              src={portfolioData.personal.photo}
              alt={portfolioData.personal.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base leading-tight tracking-tight">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              AI & Data Science • RCPIT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions & Controls */}
        <div className="hidden sm:flex items-center gap-2">
          
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden xl:inline text-[11px]">Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] font-mono">⌘K</kbd>
          </button>

          {/* CLI Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Open Interactive CLI Terminal"
            aria-label="Open Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors shadow-2xs"
            title="View & Download Resume"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>Resume</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile controls & hamburger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-700 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900"
            >
              <Terminal className="w-4 h-4" />
              Launch CLI Terminal
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-700 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900"
            >
              <FileText className="w-4 h-4 text-neutral-600" />
              View & Download Resume
            </button>

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-900 dark:bg-white text-sm font-semibold text-white dark:text-neutral-900"
            >
              <Mail className="w-4 h-4" />
              Contact Raj
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2 text-neutral-500">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-neutral-950 dark:hover:text-white"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-neutral-950 dark:hover:text-white"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-neutral-950 dark:hover:text-white"
            >
              <CodechefIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
