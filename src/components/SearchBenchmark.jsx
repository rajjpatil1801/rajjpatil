import React, { useState } from 'react';
import { Search, XCircle, CheckCircle2, ArrowRight, Sparkles, Scale, Zap } from 'lucide-react';

export const SearchBenchmark = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const testCases = [
    {
      query: 'Feline agility and predatory reflexes',
      targetDoc: 'Domestic Cats: Biological hunting mechanics, muscular flexibility, and mammalian reflex anatomy.',
      keywordResult: {
        matches: 0,
        verdict: 'FAILED (0 Results Found)',
        explanation: 'Lexical search (LIKE "%feline%") failed because the document uses the word "cat" and "mammalian", missing exact token match.',
        badge: 'Zero Hits',
      },
      semanticResult: {
        score: '94% Match',
        verdict: 'SUCCESS (Rank #1 Top Result)',
        explanation: 'Dense vector embeddings mapped "feline" and "cats" into identical latent semantic space, identifying conceptual synonymy.',
        badge: 'Cosine Sim: 0.94',
      },
    },
    {
      query: 'Distributed network latency bottlenecks',
      targetDoc: 'Optimizing RPC Communication Overheads and Packet Delays Across Microservice Clusters.',
      keywordResult: {
        matches: 1,
        verdict: 'POOR (Irrelevant Hit on "Network")',
        explanation: 'Keyword matching matched general "network" documents without understanding distributed RPC architecture.',
        badge: 'Low Precision',
      },
      semanticResult: {
        score: '91% Match',
        verdict: 'SUCCESS (Rank #1 Top Result)',
        explanation: 'TF-IDF penalized generic terms while 384-dimensional dense vectors matched "latency" to "delays" and "bottlenecks" to "overheads".',
        badge: 'Hybrid Fusion: 0.91',
      },
    },
    {
      query: 'Customer frustration with return policies',
      targetDoc: 'Consumer Dissatisfaction Audits in E-Commerce Product Refund and Exchange Workflows.',
      keywordResult: {
        matches: 0,
        verdict: 'FAILED (0 Results Found)',
        explanation: 'Exact keyword match failed because the article uses "dissatisfaction" and "refunds" instead of "frustration" and "returns".',
        badge: 'Zero Hits',
      },
      semanticResult: {
        score: '93% Match',
        verdict: 'SUCCESS (Rank #1 Top Result)',
        explanation: 'Semantic vectors captured psychological sentiment and business domain context instantly.',
        badge: 'Cosine Sim: 0.93',
      },
    },
  ];

  const current = testCases[selectedCase];

  return (
    <section className="py-16 border-b border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Algorithmic Benchmark</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Keyword Search vs. Raj's Semantic Search
            </h3>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-md">
            Side-by-side benchmark proving why lexical keyword search fails on real-world queries while vector embeddings achieve high-precision retrieval.
          </p>
        </div>

        {/* Query Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {testCases.map((tc, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCase(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCase === idx
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              Query {idx + 1}: "{tc.query.slice(0, 24)}..."
            </button>
          ))}
        </div>

        {/* Active Query Display Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center font-mono font-bold text-xs">
              Q
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                User Natural Query
              </span>
              <span className="font-bold text-neutral-900 dark:text-white">
                "{current.query}"
              </span>
            </div>
          </div>

          <div className="text-xs text-neutral-500 dark:text-neutral-400 sm:text-right pl-10 sm:pl-0">
            <span className="block font-semibold text-neutral-700 dark:text-neutral-300">Target Document in Database:</span>
            <span className="italic">"{current.targetDoc}"</span>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: Traditional Keyword Search (FAILS) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200">
                  <XCircle className="w-3.5 h-3.5" />
                  Traditional Keyword Search (BM25 / SQL LIKE)
                </span>
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                  {current.keywordResult.badge}
                </span>
              </div>

              <h4 className="text-base font-bold text-rose-950 dark:text-rose-200">
                {current.keywordResult.verdict}
              </h4>

              <p className="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {current.keywordResult.explanation}
              </p>
            </div>

            <div className="pt-4 border-t border-rose-200/60 dark:border-rose-900/40 text-[11px] text-rose-700 dark:text-rose-300 font-mono">
              LIMITATION: Strict lexical match cannot comprehend semantic synonyms or context.
            </div>
          </div>

          {/* Right Column: Raj's Semantic Search (SUCCEEDS) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 flex flex-col justify-between space-y-5 shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Raj's Hybrid Semantic Engine
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {current.semanticResult.badge}
                </span>
              </div>

              <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-2">
                <span>{current.semanticResult.verdict}</span>
                <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-emerald-200/70 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100">
                  {current.semanticResult.score}
                </span>
              </h4>

              <p className="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {current.semanticResult.explanation}
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-200/60 dark:border-emerald-900/40 text-[11px] text-emerald-700 dark:text-emerald-300 font-mono flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>ADVANTAGE: Dense Vector representations bridge vocabulary gaps accurately.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
