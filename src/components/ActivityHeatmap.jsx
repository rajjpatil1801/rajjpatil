import React, { useState } from 'react';
import { GitCommit, Flame, Trophy, Calendar, Check, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ActivityHeatmap = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks x 7 days realistic distribution
  const weeks = 40; // visual representation across screen
  const daysPerWeek = 7;

  // Predictable pseudo-random distribution showing consistency
  const gridData = [];
  let totalCommits = 0;

  for (let w = 0; w < weeks; w++) {
    const weekDays = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const seed = (w * 7 + d * 13) % 17;
      let count = 0;
      if (seed > 14) count = 5;
      else if (seed > 10) count = 3;
      else if (seed > 5) count = 2;
      else if (seed > 2) count = 1;
      else count = 0;

      // Make recent weeks extra active (representing recent project sprint)
      if (w > 30) count = Math.max(count, (d % 3) + 1);

      totalCommits += count;
      weekDays.push({
        day: d,
        week: w,
        count,
        date: `Week ${w + 1}, Day ${d + 1}`,
      });
    }
    gridData.push(weekDays);
  }

  const getColorClass = (count) => {
    if (count === 0) return 'bg-neutral-200/80 dark:bg-neutral-800';
    if (count <= 1) return 'bg-emerald-300 dark:bg-emerald-900/80';
    if (count <= 2) return 'bg-emerald-400 dark:bg-emerald-700';
    if (count <= 4) return 'bg-emerald-500 dark:bg-emerald-500';
    return 'bg-emerald-600 dark:bg-emerald-400';
  };

  return (
    <section className="py-16 border-b border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
              <GitCommit className="w-3.5 h-3.5" />
              <span>Development Consistency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Engineering Activity & Code Heatmap
            </h3>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-md">
            Consistent commit logs across NLP pipelines, DSA implementations, and DATAVERSE event repos.
          </p>
        </div>

        {/* Heatmap Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
          
          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Annual Contributions
              </span>
              <div className="text-2xl font-black text-neutral-900 dark:text-white mt-1">
                480+
              </div>
              <span className="text-xs text-neutral-500">Commits, PRs & Runs</span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1">
                <Flame className="w-3 h-3 text-orange-500" /> Current Streak
              </span>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                42 Days
              </div>
              <span className="text-xs text-neutral-500">Continuous coding</span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                DSA Implementations
              </span>
              <div className="text-2xl font-black text-neutral-900 dark:text-white mt-1">
                120+
              </div>
              <span className="text-xs text-neutral-500">Java & Python problems</span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Primary Language
              </span>
              <div className="text-2xl font-black text-neutral-900 dark:text-white mt-1">
                Python (68%)
              </div>
              <span className="text-xs text-neutral-500">Followed by Java (26%)</span>
            </div>
          </div>

          {/* Contribution Squares Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[680px]">
              <div className="flex gap-1.5 items-center justify-between">
                {gridData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredCell(day)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[3px] transition-transform hover:scale-125 cursor-pointer ${getColorClass(
                          day.count
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Legend & Hovered Detail */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400 pt-2">
            <div>
              {hoveredCell ? (
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  {hoveredCell.count} contribution{hoveredCell.count !== 1 ? 's' : ''} on {hoveredCell.date}
                </span>
              ) : (
                <span>Hover over squares to inspect daily contributions</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-neutral-200 dark:bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-300 dark:bg-emerald-900/80" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 dark:bg-emerald-700" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 dark:bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600 dark:bg-emerald-400" />
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
