import React from 'react';
import { Brain, Code2, Users, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'NLP & Semantic Search',
      description:
        'Hands-on experience developing information-retrieval architectures using dense vector embeddings, TF-IDF scoring, and NLTK/Transformers for deep document relevance.',
    },
    {
      icon: Code2,
      title: 'Strong DSA & Engineering Core',
      description:
        'Proficient in Java and Python with a rigorous Data Structures & Algorithms foundation, clean object-oriented design, and relational database handling (PostgreSQL & MySQL).',
    },
    {
      icon: Users,
      title: 'Leadership & Community Builder',
      description:
        'Head of Club for DATAVERSE at RCPIT, mentoring 80+ school students in AI literacy, and leading high-energy tech events with 140+ participants.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Background & Focus
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              About Me
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            Bridging algorithmic precision and real-world intelligence to build practical, scalable AI solutions.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            <p>
              I am an <strong className="text-neutral-900 dark:text-white font-semibold">AI & Data Science undergraduate</strong> at R.C. Patel Institute of Technology, Shirpur (CGPA 8.48), with a genuine fascination for how machines process and understand human language.
            </p>
            <p>
              My hands-on technical work centers on building <strong className="text-neutral-900 dark:text-white font-semibold">Natural Language Processing (NLP) and Information Retrieval systems</strong>. Rather than stopping at isolated scripts, I focus on building functional end-to-end applications—such as a hybrid semantic search engine marrying statistical TF-IDF with dense vector embeddings, and a multi-mode sentiment analysis engine tailored for real business review data.
            </p>
            <p>
              Beyond coding, I am deeply invested in technical education and community impact. As the <strong className="text-neutral-900 dark:text-white font-semibold">Head of Club for DATAVERSE</strong>, I organize hackathons and technical masterclasses. Concurrently, as an <strong className="text-neutral-900 dark:text-white font-semibold">AI Tutor in the AI Future Builders Program</strong>, I introduce foundational computational thinking and AI concepts to cohorts of young school students every week.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <Compass className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              Quick Snapshot
            </h3>

            <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800 text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">Degree</span>
                <span className="text-neutral-900 dark:text-white font-semibold text-right">B.Tech (AI & Data Science)</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">Institution</span>
                <span className="text-neutral-900 dark:text-white font-semibold text-right">RCPIT, Shirpur</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">Academic CGPA</span>
                <span className="text-neutral-900 dark:text-white font-semibold text-right">8.48 / 10.0</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">Primary Focus</span>
                <span className="text-neutral-900 dark:text-white font-semibold text-right">NLP & Vector Search</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">Core Languages</span>
                <span className="text-neutral-900 dark:text-white font-semibold text-right">Python, Java</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">Leadership</span>
                <span className="text-neutral-900 dark:text-white font-semibold text-right">Head of Club, DATAVERSE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
