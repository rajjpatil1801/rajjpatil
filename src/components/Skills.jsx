import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Terminal, Database, Cpu, Library, Users, Code2, Binary, ExternalLink } from 'lucide-react';
import { CodechefIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { categories } = portfolioData.skills;

  const categoryIcons = {
    'Languages': Terminal,
    'AI & Machine Learning': Cpu,
    'NLP Libraries': Library,
    'Databases & Tools': Database,
    'Core Concepts & Leadership': Users,
  };

  const allCategoryNames = ['All', ...categories.map((c) => c.name)];

  const displayedCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((c) => c.name === activeCategory);

  const dsaTopics = [
    { name: 'Arrays & Two Pointers', status: 'Proficient', lang: 'Java / Python' },
    { name: 'Trees & Binary Search Trees', status: 'Proficient', lang: 'Java' },
    { name: 'Graph Traversals (BFS / DFS)', status: 'Advanced', lang: 'Java / Python' },
    { name: 'Dynamic Programming (1D / 2D)', status: 'Intermediate', lang: 'Python' },
    { name: 'Hash Maps & Inverted Indices', status: 'Advanced', lang: 'Python' },
    { name: 'Sorting & Divide and Conquer', status: 'Proficient', lang: 'Java' },
  ];

  return (
    <section id="skills" className="py-20 border-b border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Technical Arsenal
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            A balanced toolkit combining high-level NLP libraries with low-level algorithmic principles and reliable database persistence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {allCategoryNames.map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === catName
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Terminal;
            return (
              <div
                key={cat.name}
                className="bg-white dark:bg-neutral-900/80 rounded-2xl p-6 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-100 dark:border-neutral-800 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-neutral-900 dark:text-white text-sm tracking-tight">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-2xs'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/80 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300 dark:text-amber-500 dark:fill-amber-500" />
                        )}
                        <span>{skill.name}</span>
                        <span className={`text-[10px] ml-0.5 ${skill.highlight ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-400 dark:text-neutral-500'}`}>
                          • {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                  <span>{cat.items.length} competencies</span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified in Projects
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* DSA & Problem Solving Foundation Spotlight */}
        <div className="mt-12 bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center">
                <Binary className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  Data Structures & Algorithms (DSA) Foundation
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Rigorous object-oriented and algorithmic problem solving in Java & Python.
                </p>
              </div>
            </div>

            <a
              href={portfolioData.personal.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/80 px-3.5 py-1.5 rounded-xl border border-amber-200 dark:border-amber-800/80 transition-colors shadow-2xs"
            >
              <CodechefIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>CodeChef: @{portfolioData.personal.codechefUsername}</span>
              <ExternalLink className="w-3 h-3 text-amber-500" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dsaTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-white block">
                    {topic.name}
                  </span>
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                    {topic.lang}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                  {topic.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
