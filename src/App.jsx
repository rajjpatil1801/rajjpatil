import React, { useState, useEffect } from 'react';
import { CoverPage } from './components/CoverPage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ActivityHeatmap } from './components/ActivityHeatmap';
import { AiPlayground } from './components/AiPlayground';
import { Projects } from './components/Projects';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { SearchBenchmark } from './components/SearchBenchmark';
import { Experience } from './components/Experience';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TerminalModal } from './components/TerminalModal';
import { CommandPalette } from './components/CommandPalette';
import { AskRajAi } from './components/AskRajAi';
import './App.css';

export function App() {
  const [showCover, setShowCover] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  // Theme state with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 flex flex-col transition-colors relative">
      
      {/* Dynamic Cover Page */}
      {showCover && (
        <CoverPage
          onEnter={() => setShowCover(false)}
          onOpenResume={() => {
            setShowCover(false);
            setIsResumeOpen(true);
          }}
          darkMode={darkMode}
        />
      )}

      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Flow */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          darkMode={darkMode}
        />
        <About />
        <Skills />
        <ActivityHeatmap />
        <AiPlayground />
        <Projects />
        <ArchitectureFlow />
        <SearchBenchmark />
        <Experience />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Interactive Modals & CLI Tools */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCover={() => setShowCover(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* "Ask Raj AI" Floating Virtual Copilot */}
      <AskRajAi />

    </div>
  );
}

export default App;
