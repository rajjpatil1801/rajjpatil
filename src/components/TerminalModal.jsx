import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TerminalModal = ({ isOpen, onClose, onOpenResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: 'Raj Patil CLI [Version 1.0.4]', type: 'system' },
    { text: 'Type "help" to view available commands. Try "sudo hire raj".', type: 'system' },
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const { personal, skills, projects } = portfolioData;

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();
    setInputVal('');

    const newHistory = [...history, { text: `raj@rcpit:~$ ${cmd}`, type: 'input' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `Available commands:
  • about      - Learn about Raj Jitendra Patil
  • skills     - Print core tech stack & frameworks
  • projects   - View flagship NLP & Search projects
  • stats      - Print CGPA & community metrics
  • resume     - Open full printable resume
  • contact    - Display email, phone & social links
  • clear      - Clear terminal screen
  • sudo hire  - [Special Command] Execute candidate recruitment`,
          type: 'output',
        });
        break;

      case 'about':
        newHistory.push({
          text: `${personal.name} — ${personal.role}
Specialization: ${personal.specialization}
Institution: R.C. Patel Institute of Technology (RCPIT)
Bio: ${personal.bio}`,
          type: 'output',
        });
        break;

      case 'skills':
        newHistory.push({
          text: `Languages: Java, Python
Core Concepts: DSA, Machine Learning, NLP, TF-IDF, Vector Embeddings, Semantic Search
Libraries: NLTK, TextBlob, VADER, Hugging Face Transformers
Databases & Tools: PostgreSQL, MySQL, Git & GitHub, VS Code
Leadership: Head of Club, DATAVERSE`,
          type: 'output',
        });
        break;

      case 'projects':
        newHistory.push({
          text: projects
            .map((p) => `[${p.badge}] ${p.title}: ${p.tagline}\n  Tech: ${p.techStack.join(', ')}`)
            .join('\n\n'),
          type: 'output',
        });
        break;

      case 'stats':
        newHistory.push({
          text: `• Academic CGPA: 8.48 / 10.0 (B.Tech AI & Data Science)
• Students Mentored: 200+ (AI Literacy & Tech Sessions)
• Event Coordination: 140+ participants (35 competitive teams)
• Leadership: Head of Club, DATAVERSE`,
          type: 'output',
        });
        break;

      case 'resume':
        newHistory.push({ text: 'Launching full printable resume preview...', type: 'output' });
        setTimeout(() => {
          onClose();
          onOpenResume();
        }, 500);
        break;

      case 'contact':
        newHistory.push({
          text: `Email:    ${personal.email}
Phone:    ${personal.phone}
GitHub:   ${personal.github}
LinkedIn: ${personal.linkedin}
CodeChef: ${personal.codechef}`,
          type: 'output',
        });
        break;

      case 'sudo hire':
      case 'sudo hire raj':
        newHistory.push({
          text: `[AUTH VERIFIED] Access granted.
Status: Excellent engineering talent secured.
Action: Raj Jitendra Patil is open for AI/ML & SWE roles.
Email direct offer to: ${personal.email}`,
          type: 'success',
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        break;

      default:
        newHistory.push({
          text: `command not found: "${cmd}". Type "help" to view all available commands.`,
          type: 'error',
        });
        break;
    }

    setHistory(newHistory);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-neutral-950 text-neutral-100 w-full max-w-2xl h-[520px] rounded-2xl shadow-2xl border border-neutral-800 flex flex-col overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 font-sans text-xs text-neutral-400 font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              raj@rcpit-terminal: ~
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console logs */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-2 select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                line.type === 'system'
                  ? 'text-neutral-400'
                  : line.type === 'input'
                  ? 'text-white font-bold'
                  : line.type === 'success'
                  ? 'text-emerald-400 font-bold'
                  : line.type === 'error'
                  ? 'text-rose-400'
                  : 'text-neutral-300'
              }`}
            >
              {line.text}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-white pt-1">
            <span className="text-emerald-400 font-bold">raj@rcpit:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent text-white focus:outline-none caret-emerald-400"
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-neutral-900/90 border-t border-neutral-800 text-[11px] text-neutral-400 flex justify-between">
          <span>Commands: help, about, skills, projects, stats, resume, clear</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
