import React, { useState, useMemo } from 'react';
import { Sparkles, Terminal, Play, RotateCcw, Sliders, CheckCircle2, AlertCircle, HelpCircle, Layers } from 'lucide-react';

export const AiPlayground = () => {
  const [activeTab, setActiveTab] = useState('sentiment');

  // Sentiment state
  const [textInput, setTextInput] = useState(
    'The hybrid semantic search system is blazingly fast, highly accurate, and significantly improves research paper discovery!'
  );

  const sampleTexts = [
    {
      label: 'Positive Review',
      text: 'The semantic search system is blazingly fast, highly accurate, and significantly improves research paper discovery!',
    },
    {
      label: 'Negative Issue',
      text: 'The application crashed during bulk review processing with poor database connection latency.',
    },
    {
      label: 'Neutral Statement',
      text: 'The dataset consists of 4,500 research articles stored in PostgreSQL with standard NLTK preprocessing.',
    },
  ];

  // Client-side NLP Analyzer simulating NLTK + VADER
  const analysis = useMemo(() => {
    const text = textInput.trim().toLowerCase();
    if (!text) {
      return { positive: 0, neutral: 100, negative: 0, polarity: 0, verdict: 'Neutral', subjectivity: 0, tokens: [] };
    }

    const posWords = ['blazingly', 'fast', 'accurate', 'significantly', 'improves', 'great', 'excellent', 'love', 'fantastic', 'best', 'good', 'effective', 'scalable', 'clean', 'robust', 'seamless', 'brilliant', 'wonderful', 'powerful'];
    const negWords = ['crashed', 'poor', 'latency', 'bad', 'terrible', 'slow', 'error', 'failed', 'issue', 'broken', 'horrible', 'bug', 'glitch', 'disappointing', 'worst', 'inefficient', 'flawed'];
    const neutralStopwords = ['the', 'is', 'and', 'with', 'in', 'of', 'for', 'to', 'a', 'an', 'at', 'by', 'from', 'this', 'that', 'with', 'on'];

    const words = text.match(/\b[a-z]{2,}\b/g) || [];
    let posScore = 0;
    let negScore = 0;
    const taggedTokens = [];

    words.forEach((w) => {
      if (posWords.includes(w)) {
        posScore += 1.5;
        taggedTokens.push({ word: w, type: 'pos' });
      } else if (negWords.includes(w)) {
        negScore += 1.5;
        taggedTokens.push({ word: w, type: 'neg' });
      } else if (!neutralStopwords.includes(w)) {
        taggedTokens.push({ word: w, type: 'token' });
      }
    });

    const total = posScore + negScore + Math.max(1, words.length * 0.2);
    const posPct = Math.min(100, Math.round((posScore / total) * 100));
    const negPct = Math.min(100, Math.round((negScore / total) * 100));
    const neuPct = Math.max(0, 100 - (posPct + negPct));

    const polarity = parseFloat(((posScore - negScore) / (posScore + negScore + 1)).toFixed(2));
    const subjectivity = parseFloat(Math.min(1, (posScore + negScore) / Math.max(3, words.length * 0.5)).toFixed(2));

    let verdict = 'Neutral';
    if (polarity > 0.25) verdict = 'Positive';
    if (polarity < -0.25) verdict = 'Negative';

    return {
      positive: posPct,
      neutral: neuPct,
      negative: negPct,
      polarity,
      verdict,
      subjectivity,
      tokens: taggedTokens.slice(0, 12),
    };
  }, [textInput]);

  // Semantic Search Demo State
  const [searchQuery, setSearchQuery] = useState('semantic vector retrieval');
  const [hybridWeight, setHybridWeight] = useState(60); // 60% Vector, 40% TF-IDF

  const papersCorpus = [
    {
      id: 1,
      title: 'Dense Vector Embeddings for Modern Semantic Retrieval',
      snippet: 'Evaluating dense semantic representations vs sparse lexical matching in dense high-dimensional index spaces.',
      keywords: ['dense', 'vector', 'embeddings', 'semantic', 'retrieval'],
    },
    {
      id: 2,
      title: 'TF-IDF Scoring and Lexical Inverted Index Optimizations',
      snippet: 'Mathematical derivation of inverse document frequency weighting across large scale unstructured corpora.',
      keywords: ['tf-idf', 'lexical', 'scoring', 'frequency', 'inverted', 'index'],
    },
    {
      id: 3,
      title: 'Real-Time Sentiment Classification with VADER and Transformers',
      snippet: 'Combining rule-based lexicon scoring with deep contextual embeddings for consumer review intelligence.',
      keywords: ['sentiment', 'vader', 'classification', 'transformers', 'review'],
    },
    {
      id: 4,
      title: 'PostgreSQL Document Indexing and Relational Pipeline Design',
      snippet: 'Engineering robust transactional storage and text retrieval workflows in relational database systems.',
      keywords: ['postgresql', 'indexing', 'database', 'pipeline', 'storage'],
    },
  ];

  const searchResults = useMemo(() => {
    const qWords = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    return papersCorpus
      .map((paper) => {
        // TF-IDF lexical match heuristic
        let lexicalMatch = 0;
        qWords.forEach((qw) => {
          if (paper.keywords.some((k) => k.includes(qw) || qw.includes(k))) lexicalMatch += 25;
        });
        const tfidfScore = Math.min(100, Math.round(lexicalMatch));

        // Semantic embedding cosine similarity heuristic
        let semanticMatch = 30; // base contextual relevance
        if (paper.id === 1 && (searchQuery.includes('vector') || searchQuery.includes('semantic') || searchQuery.includes('retrieval') || searchQuery.includes('search'))) {
          semanticMatch = 96;
        } else if (paper.id === 2 && (searchQuery.includes('tf') || searchQuery.includes('index') || searchQuery.includes('lexical') || searchQuery.includes('frequency'))) {
          semanticMatch = 88;
        } else if (paper.id === 3 && (searchQuery.includes('sentiment') || searchQuery.includes('vader') || searchQuery.includes('review'))) {
          semanticMatch = 92;
        } else if (paper.id === 4 && (searchQuery.includes('postgres') || searchQuery.includes('database') || searchQuery.includes('storage'))) {
          semanticMatch = 90;
        }

        const hybridScore = Math.round((tfidfScore * (100 - hybridWeight) + semanticMatch * hybridWeight) / 100);

        return {
          ...paper,
          tfidfScore,
          semanticMatch,
          hybridScore,
        };
      })
      .sort((a, b) => b.hybridScore - a.hybridScore);
  }, [searchQuery, hybridWeight]);

  return (
    <section id="ai-playground" className="py-20 border-b border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive AI Lab</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Live NLP & Search Playground
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            Test real-time client-side simulations of the NLP algorithms, sentiment scoring, and hybrid semantic retrieval pipelines built in Python.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <button
            onClick={() => setActiveTab('sentiment')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'sentiment'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
            }`}
          >
            Sentiment Analyser Sandbox (NLTK + VADER)
          </button>

          <button
            onClick={() => setActiveTab('search')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'search'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
            }`}
          >
            Semantic Search & Hybrid Ranker Simulator
          </button>
        </div>

        {/* Tab 1: Sentiment Analyser Sandbox */}
        {activeTab === 'sentiment' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Column */}
            <div className="lg:col-span-7 bg-neutral-50 dark:bg-neutral-900/60 rounded-3xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Input Review / Text
                </span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  Real-time Polarity Engine
                </span>
              </div>

              {/* Sample Quick Buttons */}
              <div className="flex flex-wrap gap-2">
                {sampleTexts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTextInput(item.text)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                  >
                    Load {item.label}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <textarea
                rows={4}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type or paste any customer review or statement here..."
                className="w-full p-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-500 text-sm text-neutral-800 dark:text-neutral-200 resize-none transition-colors"
              />

              {/* Extracted Key Tokens */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2">
                  Tokenized Lexicon Features:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.tokens.map((tok, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        tok.type === 'pos'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold'
                          : tok.type === 'neg'
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-semibold'
                          : 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {tok.word}
                    </span>
                  ))}
                  {analysis.tokens.length === 0 && (
                    <span className="text-xs text-neutral-400">No strong lexicon triggers found.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-900/60 rounded-3xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Computed Classification
                </span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    analysis.verdict === 'Positive'
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300'
                      : analysis.verdict === 'Negative'
                      ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300'
                  }`}
                >
                  {analysis.verdict === 'Positive' && '🟢 '}
                  {analysis.verdict === 'Negative' && '🔴 '}
                  {analysis.verdict === 'Neutral' && '⚪ '}
                  {analysis.verdict} Review
                </span>
              </div>

              {/* Gauge Meters */}
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    <span>Positive Probability</span>
                    <span>{analysis.positive}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                      style={{ width: `${analysis.positive}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    <span>Neutral Probability</span>
                    <span>{analysis.neutral}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-neutral-400 dark:bg-neutral-600 transition-all duration-300 rounded-full"
                      style={{ width: `${analysis.neutral}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    <span>Negative Probability</span>
                    <span>{analysis.negative}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 transition-all duration-300 rounded-full"
                      style={{ width: `${analysis.negative}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Polarity & Subjectivity Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    VADER Polarity
                  </span>
                  <div className="text-xl font-black text-neutral-900 dark:text-white mt-0.5">
                    {analysis.polarity > 0 ? `+${analysis.polarity}` : analysis.polarity}
                  </div>
                  <span className="text-[10px] text-neutral-400">Scale: -1.00 to +1.00</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Subjectivity
                  </span>
                  <div className="text-xl font-black text-neutral-900 dark:text-white mt-0.5">
                    {analysis.subjectivity}
                  </div>
                  <span className="text-[10px] text-neutral-400">0.0 (Objective) → 1.0</span>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                * Live JavaScript engine simulating the Python NLTK, TextBlob, and VADER application pipeline developed in Raj's Sentiment Analyser project.
              </p>
            </div>

          </div>
        )}

        {/* Tab 2: Semantic Search & Hybrid Ranker */}
        {activeTab === 'search' && (
          <div className="bg-neutral-50 dark:bg-neutral-900/60 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Hybrid Search Simulation (TF-IDF + Dense Vector Embeddings)
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Search through Raj's indexed research dataset and adjust the hybrid fusion weights in real time.
                </p>
              </div>

              {/* Slider for Hybrid Weight */}
              <div className="flex items-center gap-3 bg-white dark:bg-neutral-950 px-4 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-xs">
                <Sliders className="w-4 h-4 text-neutral-500" />
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  Vector Weight: {hybridWeight}%
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={hybridWeight}
                  onChange={(e) => setHybridWeight(Number(e.target.value))}
                  className="w-24 accent-neutral-900 dark:accent-white cursor-pointer"
                />
                <span className="text-neutral-400">TF-IDF: {100 - hybridWeight}%</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search queries, e.g. 'vector retrieval', 'inverted index', 'sentiment transformers'..."
                className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-400 text-sm text-neutral-900 dark:text-white shadow-2xs"
              />
            </div>

            {/* Ranked Results List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Ranked Relevance Scores (Top-K Output):
              </span>

              {searchResults.map((paper, idx) => (
                <div
                  key={paper.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs flex items-center justify-center">
                        #{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {paper.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pl-8">
                      {paper.snippet}
                    </p>
                  </div>

                  {/* Scores breakdown badge */}
                  <div className="flex items-center gap-3 sm:shrink-0 pl-8 sm:pl-0">
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-neutral-900 dark:text-white">
                        {paper.hybridScore}%
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        Dense: {paper.semanticMatch}% • TF-IDF: {paper.tfidfScore}%
                      </div>
                    </div>

                    <div className="w-16 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-neutral-900 dark:bg-white rounded-full transition-all duration-300"
                        style={{ width: `${paper.hybridScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
