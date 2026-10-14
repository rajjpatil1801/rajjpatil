import React, { useEffect } from 'react';
import { X, Printer, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { personal, experience, projects, certifications, education } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="bg-white dark:bg-neutral-900 w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200 dark:border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/90 dark:bg-neutral-950/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content (High contrast white for print fidelity) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-sans printable-resume">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white uppercase">
              {personal.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-neutral-500" />
                {personal.phoneDisplay}
              </span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {personal.email}
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                github.com/{personal.githubUsername}
              </a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                linkedin.com/in/{personal.linkedinDisplay}
              </a>
              <span>•</span>
              <a href={personal.codechef} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                codechef.com/users/{personal.codechefUsername}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
              {personal.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white">{edu.institution}</span>
                    <div className="text-neutral-700 dark:text-neutral-300">{edu.degree} | <span className="font-semibold">{edu.grade}</span></div>
                  </div>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
              <p><strong className="text-neutral-900 dark:text-white">Languages:</strong> Java, Python</p>
              <p><strong className="text-neutral-900 dark:text-white">Concepts:</strong> Data Structures & Algorithms, Machine Learning, Natural Language Processing, TF-IDF, Vector Embeddings, Semantic Search</p>
              <p><strong className="text-neutral-900 dark:text-white">Libraries:</strong> NLTK, TextBlob, VADER, Hugging Face Transformers</p>
              <p><strong className="text-neutral-900 dark:text-white">Tools & Databases:</strong> Git & GitHub, VS Code, MySQL, PostgreSQL</p>
              <p><strong className="text-neutral-900 dark:text-white">Soft Skills:</strong> Leadership, Communication, Teamwork, Adaptability</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-3">
              Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between font-bold text-neutral-900 dark:text-white">
                  <span>{exp.role} — {exp.organization}</span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">{exp.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold text-neutral-900 dark:text-white">
                    <span>{proj.title}</span>
                    <span className="text-neutral-500 dark:text-neutral-400 font-normal text-[11px]">{proj.techStack.join(', ')}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  <strong className="text-neutral-900 dark:text-white">{cert.title}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements & Leadership */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-2">
              Achievements & Leadership
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
              <li><strong className="text-neutral-900 dark:text-white">Head of Club, DATAVERSE at RCPIT</strong> — leading a student data science and AI community.</li>
              <li>Hosted a session on <strong className="text-neutral-900 dark:text-white">“Introduction to LinkedIn”</strong> for 200+ participants.</li>
              <li>Led the event <strong className="text-neutral-900 dark:text-white">“The Heist Carnival”</strong> at Converges-26 for club DATAVERSE, coordinating ~35 teams (140+ participants).</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
