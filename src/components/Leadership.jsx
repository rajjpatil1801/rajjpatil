import React, { useState } from 'react';
import { Award, Trophy, Users, Megaphone, CheckCircle2, ShieldCheck, Sparkles, Calendar, MapPin, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Leadership = () => {
  const { leadership, certifications } = portfolioData;
  const [selectedEvent, setSelectedEvent] = useState(0);

  const eventDetails = [
    {
      title: 'The Heist Carnival',
      subtitle: 'Flagship Event at Converges-26 (Annual Tech Fest)',
      role: 'Lead Event Coordinator & Architect',
      date: '2026',
      teams: '35 Teams',
      participants: '140+ Participants',
      metrics: 'Managed 5 Competitive Rounds & Live Evaluation',
      description:
        'Conceived and executed the premier algorithmic & data challenge for club DATAVERSE. Coordinated inter-departmental logistics, challenge formulation, scoring rubrics, and final awards.',
      highlights: [
        'Designed multi-tier computational riddles and algorithmic clue-solving.',
        'Mentored 35 student teams throughout the fast-paced competitive rounds.',
        'Recognized by faculty leadership for flawless event execution.',
      ],
    },
    {
      title: 'Introduction to LinkedIn & Personal Branding',
      subtitle: 'Career Accelerator Masterclass',
      role: 'Keynote Speaker & Host',
      date: '2024',
      teams: 'Open Campus',
      participants: '200+ Attendees',
      metrics: 'Full-House Seminar & Live Q&A Session',
      description:
        'Hosted a comprehensive guidance masterclass on building a stand-out developer profile on LinkedIn, open-source networking, and securing tech internships.',
      highlights: [
        'Walked through live profile optimization and portfolio showcase techniques.',
        'Addressed over 50+ live career and internship questions from students.',
        'Helped attendees initiate active tech outreach and project sharing.',
      ],
    },
    {
      title: 'AI Future Builders Program',
      subtitle: 'School AI Literacy Initiative',
      role: 'Lead AI Tutor & Curriculum Facilitator',
      date: '2024 – Present',
      teams: 'Weekly Cohort',
      participants: '~80 Class VI Students',
      metrics: 'Ongoing Weekly Community Training',
      description:
        'Delivering structured foundational artificial intelligence and computational thinking training to young minds through interactive workshops and demos.',
      highlights: [
        'Formulated activity-based gamified lesson plans.',
        'Demonstrated practical machine learning concepts with visual demos.',
        'Fostered problem-solving mindsets and early enthusiasm for coding.',
      ],
    },
  ];

  return (
    <section id="leadership" className="py-20 border-b border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Community & Credentials
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Leadership, Events & Certifications
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            Driving tech community engagement at DATAVERSE, mentoring students, and rigorous technical upskilling.
          </p>
        </div>

        {/* Featured Event Deep-Dive Showcase */}
        <div className="mb-14 bg-neutral-50 dark:bg-neutral-900/60 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-neutral-900 dark:text-white" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Event Management & Community Impact Showcase
            </h3>
          </div>

          {/* Event Selection Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {eventDetails.map((evt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedEvent(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedEvent === idx
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400'
                }`}
              >
                {evt.title}
              </button>
            ))}
          </div>

          {/* Active Event Detail Card */}
          {(() => {
            const activeEvt = eventDetails[selectedEvent];
            return (
              <div className="bg-white dark:bg-neutral-950 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                      {activeEvt.role}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {activeEvt.date}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {activeEvt.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {activeEvt.subtitle}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {activeEvt.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 block">
                      Key Outcomes & Responsibilities:
                    </span>
                    {activeEvt.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-900/80 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                    Scale & Impact Metrics
                  </span>

                  <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800 text-sm">
                    <div className="py-2.5 flex justify-between">
                      <span className="text-neutral-500">Attendance</span>
                      <span className="font-bold text-neutral-900 dark:text-white">{activeEvt.participants}</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-neutral-500">Teams / Cohort</span>
                      <span className="font-bold text-neutral-900 dark:text-white">{activeEvt.teams}</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-neutral-500">Role</span>
                      <span className="font-bold text-neutral-900 dark:text-white text-right">{activeEvt.role}</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-neutral-500">Organization</span>
                      <span className="font-bold text-neutral-900 dark:text-white text-right">DATAVERSE</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-neutral-900 dark:text-white" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Verified Certifications & Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                    {cert.category}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>Professional Credential</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
