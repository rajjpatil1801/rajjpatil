import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Trajectory & Milestones
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Experience & Education
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            Academic rigor combined with practical mentoring and community instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work & Mentorship Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Teaching & Professional Experience
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-900 dark:bg-white border-4 border-neutral-50 dark:border-neutral-950" />

                  <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {exp.period}
                      </span>
                      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white mt-2">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      {exp.organization}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                          <CheckCircle className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 mt-1 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Academic Background
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-4 border-neutral-50 dark:border-neutral-950 ${
                    edu.current ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-400 dark:bg-neutral-600'
                  }`} />

                  <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400">
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-neutral-900 dark:bg-white text-white dark:text-neutral-950">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-2">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {edu.institution}
                    </p>

                    <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                      {edu.highlights}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
